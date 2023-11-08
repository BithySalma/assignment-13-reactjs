import ProjectFour from "../components/project/ProjectFour";
import ProjectOne from "../components/project/ProjectOne";
import ProjectThree from "../components/project/ProjectThree";
import ProjectTwo from "../components/project/ProjectTwo";

const Project = () => {
    return (
        <div className='d-flex justify-content-center'>
            <h1>Project Page</h1>
            <ProjectOne/>
            <ProjectTwo/>
            <ProjectThree/>
            <ProjectFour/>
        </div>
    );
};

export default Project;