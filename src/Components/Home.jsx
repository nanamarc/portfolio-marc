import React from "react";
import Pic from "../assets/imgs/STD22095.png"
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
function Home(){
    return (
        <div className=" border border-black flex flex-row items-center">
           <div className="flex flex-col gap-10  pl-3">
              <div className="text-2xl text-gray-500  icon"><FaLinkedin/></div>
              <div className="text-2xl text-gray-500 icon"><SiGmail/></div>
              <div className="text-2xl text-gray-500 icon"><FaGithub/></div>
           </div>
            

                        

            <div className="flex flex-row gap-10 place-content-center content-center items-center border w-full">
                <div>
                  <div className="border border-black flex flex-col gap-2 items-center">  
                    <p className="highSize italic">RAZANAJATOVO</p>
                    <p className="highSize2 italic">Marc Herilala</p>
                  </div>
                  <div>I'm Developper</div>
                      <div>my resume</div>
                  <div>
                    <div></div>
                  </div>
                </div>
                <div className=""><img src={Pic} className="taille w-full rounded-full   shadow-2xl" alt="marc profile" /></div>
            </div>
            <div>
                
            </div>
        </div>
    )
    
}
export default Home;