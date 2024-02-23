import React from "react";
import Pic from "../assets/imgs/STD22095.png"
function Home(){
    return (
        <div className=" border border-black ">
            
            <div className="flex flex-row gap-10 place-content-center content-center items-center">
                <div>
                  <div className="border border-black flex flex-col gap-2 items-center">  
                    <p className="highSize italic">RAZANAJATOVO</p>
                    <p className="highSize2 italic">Marc Herilala</p>
                  </div>
                  <div>I'm Developper</div>
                  <div>
                    <div></div>
                  </div>
                </div>
                <img src={Pic} className="taille rounded-full" alt="marc profile" />
            </div>
            <div>
                
            </div>
        </div>
    )
    
}
export default Home;