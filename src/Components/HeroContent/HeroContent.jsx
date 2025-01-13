import React from 'react'
import Footer from '../Footer/Footer'
import './HeroContent.css'
import {Outlet} from 'react-router-dom';


const HeroContent = ({setScrollPixels}) => {
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
      const handleScroll = () => {
          // console.log(`Scrolled: ${scrollRef.current.scrollTop}px`);
          setScrollPixels(scrollRef.current.scrollTop)

      };

      const element = scrollRef.current;
      element.addEventListener('scroll', handleScroll);

      return () => {
          element.removeEventListener('scroll', handleScroll);
      };
  }, []);
  return (
    <div className="herocontent" ref={scrollRef}>
       {<Outlet />}
         <Footer />  
    </div>
  )
}

export default HeroContent