import Pic from "../assets/imgs/STD22095.png"
const About=()=>{
    return (
        <section className="grid grid-cols-2 gap-3 mx-auto border border-black">
            
               <div className="mx-auto">
                    <img src={Pic} alt="pic of Marc" />
                </div> 
                <div className="border mx-auto"> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                     elit. Numquam sequi soluta iure nemo assumenda accusantium 
                    consequatur hic odio atque? Architecto sunt id nisi at molestias ea amet aliquid incidunt culpa!
                </div>
            
        </section>
    )
}
export default About;