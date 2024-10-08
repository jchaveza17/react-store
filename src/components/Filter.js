import { useCategory } from "../context/CategoryContext";
import { TbCategoryPlus } from "react-icons/tb";

const Filter = () => {
    const { categories, filterByCategory, selectedCategory } = useCategory();

    const renderedCategories = categories.map((category, index) => (
        <li 
            key={index}
            className="py-2"
        >
            <span
                onClick={() => filterByCategory(category)}
                className={`cursor-pointer ${selectedCategory === category ? 'text-white font-bold underline select-none' : 'text-white select-none hover:text-blue-500'}`}
            >
                {category}
            </span>
        </li>
    ));

    return (
        <div className="bg-black p-4 border rounded-lg select-none">
            <h2 className="text-xl font-bold mb-4 text-white select-none flex items-center space-x-2 ">
                <TbCategoryPlus />
                <span>Filter by Category:</span>
            </h2>
            <ul className="space-y-2">
                <li className="py-2">
                    <span
                        onClick={() => filterByCategory('')}
                        className={`cursor-pointer ${selectedCategory === '' ? 'text-white font-bold underline select-none' : 'text-white select-none hover:text-blue-500'}`}
                    >
                        All Categories
                    </span>
                </li>
                {renderedCategories}
            </ul>
        </div>
    );
}

export default Filter;
