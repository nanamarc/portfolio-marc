import { useTranslations } from "next-intl"
import BankIMg from "../assets/imgs/bankImg.png"
import RestaurantImg from "../assets/imgs/restaurantImg.png"
import madaGreen from "../assets/imgs/mada-green.png"
import Project1 from "../assets/imgs/project.png"
import SuperPower from "../assets/imgs/webcup.png"
import airPollution from "../assets/imgs/air-pollution.png"
import PatrimoineImage from "../assets/imgs/patrimoine.png"
import { StaticImageData } from "next/image"
interface ProjectProps {
    title: string;
    description: string;
    img: StaticImageData;
    link: string |null;
  }

export const Projects=()=>{
    const t=useTranslations()
    const projectList:ProjectProps[]=[
        {
          title:"Patrimoine",
          description:t('patrimoine_desc'),
          img:PatrimoineImage,
          link:"https://patrimoine-three.vercel.app/"
        },
      
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
              link:"https://marc985.github.io/restaurant_website/"
          },
          {
            title:"air pollution",
            description:t('project6Desc'),
            img:airPollution,
            link:"https://lookerstudio.google.com/reporting/0901c807-257a-432c-943e-a1d08b01f2b1"
          }
          ,
            
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
      return projectList
}