import Project1 from "../assets/imgs/project.png"
const Project =()=>{
    return (
        <div className="grid grid-cols-3 gap-2 w-[1200px] mx-auto">
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    )
}
const ProjectCard=()=>{
    return (
        <div className="flex flex-col gap-2 border border-black h-80">
            <img src={Project1} alt="my project" className="w-full h-full p-7" />
            <div className="text-2xl text-center">title</div>
            <div className="text-center">this is the descriptoin of this project blabla blabla blabla </div>
        </div>
    )
}
export default Project