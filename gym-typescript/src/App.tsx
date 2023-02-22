import Navbar from "@/scenes/navbar";
import Home from '@/scenes/home';
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
 
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      // checking if we're at the top of the window, if it is, set the top of the page as true
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    // need to remove it when they leave the page
    return () => window.removeEventListener("scroll", handleScroll)
  })


  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}        
        selectedPage={selectedPage}
        setSelectedPage ={setSelectedPage}  
    />
    <Home setSelectedPage={setSelectedPage} />
    </div>
  ); 
}

export default App;
 