import React from "react";
import {motion} from "framer-motion"
function NavBar(){
    return(
      <div className="flex space-x-80 place-content-center ">
        <div className="text-3xl"><span className="text-blue-500">Ma</span><span>rc</span></div>
        <nav className="flex gap-8 text-xl">
           
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            >
              <div>about</div>
            </motion.div>
            <div>Projects</div>
            <div>Contact</div>
        </nav>  
      </div>
    )
}
export default NavBar;