import Button from "../components/Button";
import Link from '../components/Link';
import backgroundImage from '../images/sergey-zolkin-_UeY8aTI6d0-unsplash.jpg';
import { useEffect } from "react";

function HomePage() {
    useEffect(() => {
        document.body.classList.add('overflow-hidden');
    
        return () => {
          document.body.classList.remove('overflow-hidden');
        };
      }, []);

    return (
        <div 
          className="h-screen bg-cover bg-center flex flex-col items-center justify-center select-none"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <p className="text-white text-4xl mb-4 animate-slide-in font-serif">
            Welcome to the Store!
          </p>
          <p className="text-white text-2xl mb-8 animate-slide-in delay-200 select-none font-serif">
            Start Shopping!
          </p>
          <Link to='/store' className="inline-block">
            <Button primary rounded className='transition animate-slide-in delay-400 hover:animate-pulse font-serif'>
              Click here!
            </Button>
          </Link>
        </div>
      );
}

export default HomePage;