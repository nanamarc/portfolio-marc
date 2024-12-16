"use client"
import { useTranslation } from "react-i18next"

import { useState } from "react"
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FaExternalLinkAlt } from "react-icons/fa";
import { StaticImageData } from "next/image"
import Image from "next/image"
interface ProjectProps {
  title: string;
  description: string;
  img: StaticImageData;
  link: string |null;
}
const Project =({projectList}:{projectList:ProjectProps[]})=>{

    const {t}=useTranslation()
    const [showAll,setShowAll]=useState(false)
    const sectionRef = useRef(null); // Créer une référence pour la section projet
    const isInView = useInView(sectionRef, { once: true ,margin: "0px 100px -50px 0px"});
    console.log(isInView)

    const projectToShow=showAll?projectList:projectList.slice(0,3)
    return (
    <div id="projects" className="dark:text-gray-200 py-20">
        <h1 className="text-center text-4xl font-bold my-4 text-gray-700 dark:text-white">
        {t("project")}
      </h1>
        <div className="grid grid-cols-1 gap-6 w-[80%] mx-auto my-10 md:grid-cols-3" ref={sectionRef}>
         {projectToShow.map((project:ProjectProps, index:number) => (
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
            <FaArrowDown/>
          </button>
        </div>
      )}
    
    </div>
    )
}

interface ProjectCardProps {
  title: string;
  description: string;
  img: StaticImageData;
  link: string | null;
}
const ProjectCard = ({ title, description, img, link }:ProjectCardProps) => {
  const {t}=useTranslation()

    return (
        <div
            className="flex flex-col gap-2 shadow-lg border h-96 rounded-lg dark:border-none dark:bg-[#090c1aec] transform transition-all duration-500 hover:shadow-x group bg-gray-100"
           
        >
      { link&&
        <div className="absolute  inset-0 bg-gray-950 opacity-0 group-hover:opacity-90 dargroup-hover:opacity-100  transition-opacity duration-500 rounded-lg flex justify-center items-center">
        <a className="text-white text-lg font-bold transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 flex flex-row gap-3 items-center"
         target={link ? "_blank" : undefined}
         rel={link ? "noreferrer" : undefined} href={link}
        >
          <div >
            {t("look")}
          </div>
          <FaExternalLinkAlt/>
        </a>
      </div>
      }   
            <Image
                src={img}
                alt="my project"
                className="w-full h-52 object-cover p-4 rounded-lg "
                loading="lazy"
            />
            <div className="text-2xl text-center font-semibold">{title}</div>
            <div className="text-center p-4 text-base dark:text-gray-400 text-gray-600">
                {description}
            </div>
        </div>
    );
};

export default Project