import BankIMg from "../assets/imgs/bankImg.png"
import RestaurantImg from "../assets/imgs/restaurantImg.png"
import madaGreen from "../assets/imgs/mada-green.png"
import Project1 from "../assets/imgs/project.png"
import SuperPower from "../assets/imgs/webcup.png"
import airPollution from "../assets/imgs/air-pollution.png"
import PatrimoineImage from "../assets/imgs/patrimoine.png"
import InnovaApp from "../assets/imgs/innova_app.png"
import { StaticImageData } from "next/image"
interface ProjectProps {
    title: string;
    description: string;
    img: StaticImageData;
    link: string |null;
  }




export const Projects=()=>{
    const projectList:ProjectProps[]=[
      {
        title:"Innova APP",
        description:"Innova APP is an application boosted by AI designed to help users to develop their skills,wether soft of hard", 
        img:InnovaApp,
        link:"https://hiu-2025-bisounours.vercel.app/"
      }
      ,
        {
          title:"Patrimoine",
          description:"An application to manage a person's patrimony, featuring a dashboard where users can add their possessions and track the evolution of their wealth",
          img:PatrimoineImage,
          link:"https://patrimoine-three.vercel.app/"
        },
      
          {
              title:"e-car",
              description:"an application to manage car sale,there is a landing page for the user and a dashboard for the admin to manage sale",
              img:Project1,
              link:"https://e-car-gamma.vercel.app/"
              
          },
          {
              title:"Mada green",
              description:"A project aimed at encouraging and teaching people to plant trees and take care of the environment",
              img:madaGreen,
              link:"https://environment-inky.vercel.app/"
          },
         
       
          {
              title:"restaurant website",
              description:"A showcase website for a restaurant, featuring a homepage, a menu page, and a contact page.",
              img:RestaurantImg,
              link:"https://marc985.github.io/restaurant_website/"
          },
          {
            title:"air pollution",
            description:"An interactive dashboard, which aims to analyze the air pollution of some cities around the world.",
            img:airPollution,
            link:"https://lookerstudio.google.com/reporting/0901c807-257a-432c-943e-a1d08b01f2b1"
          }
          ,
            
          {
              title:"wallet",
              description:"this application aims to manage your wallet and you can visualize cash flows",
              img:BankIMg,
              link:null
          },
          {
              title:"super power swap",
              description:"A project to swap superpowers between two people, released during Webcup 2024.",
              img:SuperPower,
              link:null
          }
      
      ]
      return projectList
}