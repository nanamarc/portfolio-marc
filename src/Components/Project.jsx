import Project1 from "../assets/imgs/project.png"
import WebCupImg from "../assets/imgs/webcup.png"
import { useTranslation } from "react-i18next"
import BankIMg from "../assets/imgs/bankImg.png"
import RestaurantImg from "../assets/imgs/restaurantImg.png"
const projectList=[
    {
        title:"e-car",
        description:"an applicatoin to manage car sale,there is a landing page for the user and a dashboard for the admin to manage sale",
        img:Project1,
        link:"https://e-car-front.vercel.app/"
    },
    {
        title:"superpower swap",
        description:"an application to swap superpower with other people, realised during the webcup 2024 competition",
        img:WebCupImg,
        link:"https://bisounours.madagascar.webcup.hodi.host/"
    },
    {
        title:"wallet",
        description:"this application aims to manage your wallet and you can visualize cash flows",
        img:BankIMg,
        link:"link"
    },
    {
        title:"flavour restaurant",
        description:"a restaurant showcase website,this is my first project",
        img:RestaurantImg,
        link:"https://marc985.github.io/restaurant_website/"
    }

]
const Project =()=>{
    const {t}=useTranslation()
    return (
    <div className="dark:text-gray-200">
        <h1 className="text-center text-4xl my-4">{t("project")}</h1>
        <div className="grid grid-cols-1 gap-6 w-[80%] mx-auto my-10 md:grid-cols-3">
           {// eslint-disable-next-line array-callback-return
            
            projectList.map((project)=>(
                 <ProjectCard title={project.title} description={project.description} img={project.img}/>
            ))
           }
        </div>
    </div>
    )
}
const ProjectCard=({title,description,img})=>{
    return (
        <div className="flex flex-col gap-2 shadow-lg border h-96 rounded-lg dark:border-none dark:bg-gray-900">
            <img src={img} alt="my project" className="w-full h-full p-4 rounded-lg" />
            <div className="text-2xl text-center">{title}</div>
            <div className="text-center p-4">{description}</div>
        </div>
    )
}
export default Project