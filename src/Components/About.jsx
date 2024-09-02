import { useTranslation } from "react-i18next";
const About=()=>{
    const {t}=useTranslation()
    return (
        <section className="w-full my-10 md:w-2/3 mx-auto dark:text-gray-200">
            <h1 className="text-center text-4xl my-6">{t("about")} </h1>
            
               {
                /*
                <div className="mx-auto">
                    <img src={Pic} alt="pic of Marc" />
                </div> 
                */
               }
                <div className=" mx-auto"> 
                    {t("aboutContent")}
                </div>
            
        </section>
    )
}
export default About;