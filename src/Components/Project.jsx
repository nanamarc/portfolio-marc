import Project1 from "../assets/imgs/project.png"
const Project =()=>{
    return (
    <div className="dark:text-gray-200">
        <h1 className="text-center text-4xl my-4">project</h1>
        <div className="grid grid-cols-1 gap-6 w-full mx-auto my-10 md:grid-cols-3">
           
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    </div>
    )
}
const ProjectCard=()=>{
    return (
        <div className="flex flex-col gap-2 border border-black h-96">
            <img src={Project1} alt="my project" className="w-full h-full p-7" />
            <div className="text-2xl text-center">title</div>
            <div className="text-center">this is the descriptoin of this project blabla blabla blabla </div>
        </div>
    )
}
export default Project