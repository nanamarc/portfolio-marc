import Project1 from "../assets/imgs/project.png"
import { useTranslation } from "react-i18next"
import BankIMg from "../assets/imgs/bankImg.png"
import RestaurantImg from "../assets/imgs/restaurantImg.png"
import madaGreen from "../assets/imgs/mada-green.png"
import { useState } from "react"
import { FaArrowDownLong } from "react-icons/fa6";
import SuperPower from "../assets/imgs/webcup.png"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const Project =()=>{

    const {t}=useTranslation()
    const [showAll,setShowAll]=useState(false)
    const sectionRef = useRef(null); // Créer une référence pour la section projet
    const isInView = useInView(sectionRef, { once: true });

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
        title:"restaurant website",
        description:t('project2Desc'),
        img:RestaurantImg,
        lnk:"https://marc985.github.io/restaurant_website/"
    },
      
    {
        title:"wallet",
        description:t('project3Desc'),
        img:BankIMg,
        link:null
    },
    {
        title:"super power swap",
        description:t('project5Desc'),
        img:SuperPower,
        link:null
    }

]
    const projectToShow=showAll?projectList:projectList.slice(0,3)
    return (
    <div className="dark:text-gray-200 cursor-pointer">
        <h1 className="text-center text-4xl my-4">{t("project")}</h1>
        <div className="grid grid-cols-1 gap-6 w-[80%] mx-auto my-10 md:grid-cols-3" ref={sectionRef}>
         {projectToShow.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { rotate:360,scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: index * 0.5, // Ajoute un délai pour chaque projet
            }}
          >
            <ProjectCard
              
              title={project.title}
              description={project.description}
              img={project.img}
              link={project.link}
            />
          </motion.div>
        ))}
        </div>
        {!showAll && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(true)} // Lorsqu'on clique, on montre tous les projets
            className="py-1 px-4 text-gray-600 dark:text-white border border-gray-600 dark:border-white rounded-lg dark:hover:bg-slate-300-700 transition flex flex-row gap-1 items-center justify-center mx-auto"
          >
            <p>{t("see")}</p>
            <FaArrowDownLong/>
          </button>
        </div>
      )}
    
    </div>
    )
}
const ProjectCard = ({ title, description, img, link }) => {
    return (
        <a
            className="flex flex-col gap-2 shadow-lg border h-96 rounded-lg dark:border-none dark:bg-gray-900 transform transition-all duration-500"
            target={link ? "_blank" : undefined}
            rel={link ? "noreferrer" : undefined}
            href={link}
        >
            <img
                src={img}
                alt="my project"
                className="w-full h-52 object-cover p-4 rounded-lg"
            />
            <div className="text-2xl text-center font-semibold">{title}</div>
            <div className="text-center p-4 text-base dark:text-gray-400 text-gray-600">
                {description}
            </div>
        </a>
    );
};

export default Project