import Project1 from "../assets/imgs/project.png"
import WebCupImg from "../assets/imgs/webcup.png"
import { useTranslation } from "react-i18next"
import BankIMg from "../assets/imgs/bankImg.png"
import RestaurantImg from "../assets/imgs/restaurantImg.png"
import madaGreen from "../assets/imgs/mada-green.png"

const Project =()=>{

    const {t}=useTranslation()

const projectList=[
    {
        title:"e-car",
        description:t('project1Desc'),
        img:Project1,
        link:"https://e-car-gamma.vercel.app/"
        
    },
    {
        title:"Mada green",
        description:t('project4Desc'),
        img:madaGreen,
        link:"https://environment-inky.vercel.app/"
    },
   
    {
        title:"wallet",
        description:t('project3Desc'),
        img:BankIMg,
        link:""
    },
 
    {
        title:"restaurant website",
        description:t('project2Desc'),
        img:RestaurantImg,
        lnk:"https://marc985.github.io/restaurant_website/"
    },

]
    return (
    <div className="dark:text-gray-200 cursor-pointer">
        <h1 className="text-center text-4xl my-4">{t("project")}</h1>
        <div className="grid grid-cols-1 gap-6 w-[80%] mx-auto my-10 md:grid-cols-3">
           {// eslint-disable-next-line array-callback-return
            
            projectList.map((project)=>(
                 <ProjectCard title={project.title} description={project.description} img={project.img} link={project.link}/>
            ))
           }
        </div>
    </div>
    )
}
const ProjectCard=({title,description,img,link})=>{
    return (
        <a className="flex flex-col gap-2 shadow-lg border h-96 rounded-lg dark:border-none dark:bg-gray-900" target="_blank" href={link} rel="noreferrer">
            <img src={img} alt="my project" className="w-full h-60 p-4 rounded-lg" />
            <div className="text-2xl text-center">{title}</div>
            <div className="text-center p-4 text-base dark:text-gray-400 text-gray-600">{description}</div>
        </a>
    )
}
export default Project