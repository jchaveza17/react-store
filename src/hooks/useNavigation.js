import { useContext } from "react";
import NavigationContext from "../context/navigation";

function useNavigation() {
    const { currentPath, navigate } = useContext(NavigationContext);

    
    const getParams = (routePath) => {
        const routeSegments = routePath.split('/').filter(Boolean);
        const currentSegments = currentPath.split('/').filter(Boolean);

        const params = {};
        routeSegments.forEach((segment, index) => {
            if (segment.startsWith(':')) {
                const paramName = segment.slice(1); 
                params[paramName] = currentSegments[index];
            }
        });
        return params;
    };

    return { currentPath, navigate, getParams };
}

export default useNavigation;