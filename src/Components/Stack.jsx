import { SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io"
import { TbBrandTypescript } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { LiaReact } from "react-icons/lia";
import { FaLinux } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import { SiSqlite } from "react-icons/si";



const Stack=()=>{
    return (
    <div className="flex flex-row gap-10 md:items-center md:justify-center my-20">
        <div className="text-5xl">
            <p>s</p>
            <p>t</p>
            <p>a</p>
            <p>c</p>
            <p>k</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="">
                <h1 className="text-2xl mb-4">languages</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="flex flex-row gap-1 border border- border-black rounded-full text-xl items-center justify-center p-2">
                        <TbBrandTypescript/>
                        <p>typescript</p>
                    </div>
                    <div className="flex flex-row gap-1 border border- border-black rounded-full text-xl items-center justify-center p-2">
                        <IoLogoJavascript/>
                        <p>javascript</p>
                    </div>
                    <div className="flex flex-row gap-1 border border- border-black rounded-full text-xl items-center justify-center p-2">
                        <FaJava/>
                        <p>java</p>
                    </div>
                    <div className="flex flex-row gap-1 border border- border-black rounded-full text-xl items-center justify-center p-2">
                        <FaPython/>
                        <p>python</p>
                    </div>
                </div>
            </div>
             <div>
                <h1 className="text-2xl mb-4">library and framework</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="flex flex-row gap-1 border border- border-black rounded-full text-xl items-center justify-center p-2">
                        <LiaReact/>
                        <p>react</p>
                    </div>
                    <div className="flex flex-row gap-1 border border- border-black rounded-full text-xl items-center justify-center p-2">
                        <SiNextdotjs/>
                        <p>next js</p>
                    </div>
                    <div className="flex flex-row gap-1 border border- border-black rounded-full text-xl items-center justify-center p-2">
                        <BiLogoSpringBoot/>
                        <p>spring boot</p>
                    </div>
                    
                </div>
            </div>
            <div>
                <h1 className="text-2xl mb-4">tool</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="flex flex-row gap-1 border border- border-black rounded-full text-xl items-center justify-center p-2">
                        <FaLinux/>
                        <p>linux</p>
                    </div>
                    <div className="flex flex-row gap-1 border border- border-black rounded-full text-xl items-center justify-center p-2">
                        <FaGitAlt/>
                        <p>git</p>
                    </div>
                    <div className="flex flex-row gap-1 border border- border-black rounded-full text-xl items-center justify-center p-2">
                        <FaGithub/>
                        <p>github</p>
                    </div>
                    
                </div>
            </div>
            <div>
                <h1 className="text-2xl mb-4">Database</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="flex flex-row gap-1 border border- border-black rounded-full text-xl items-center justify-center p-2">
                        <BiLogoPostgresql/>
                        <p>postgresql</p>
                    </div>
                    <div className="flex flex-row gap-1 border border- border-black rounded-full text-xl items-center justify-center p-2">
                        <TbBrandMysql/>
                        <p>mysql</p>
                    </div>
                    <div className="flex flex-row gap-1 border border- border-black rounded-full text-xl items-center justify-center p-2">
                        <SiSqlite/>
                        <p>sqlite</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    )
}
export default Stack;