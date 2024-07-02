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
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                     elit. Numquam sequi soluta iure nemo assumenda accusantium 
                    consequatur hic odio atque? Architecto sunt id nisi at molestias ea amet aliquid incidunt culpa!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reiciendis ipsam quasi modi consectetur, odit perferendis voluptas eligendi repudiandae veritatis ab tempore ex ipsum libero necessitatibus 
                    consequuntur voluptatem dolorum deserunt!
                </div>
            
        </section>
    )
}
export default About;