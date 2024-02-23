import React from "react";
function NavBar(){
    return(
      <div className="flex space-x-80 place-content-center">
        <div className="text-3xl">Marc</div>
        <nav className="flex gap-8 text-xl">
           
            <div>About</div>
            <div>Projects</div>
            <div>Contact</div>
        </nav>  
      </div>
    )
}
export default NavBar;