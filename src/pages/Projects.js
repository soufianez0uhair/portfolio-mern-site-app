import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { selectAllProjects, getStatusProjects, getErrorProjects, fetchProjects } from "../redux/projectsSlice";

import Loader from "../components/Loader";
import Project from "../components/Project";

const Projects = () => {
    const dispatch = useDispatch();

    const projects = useSelector(selectAllProjects);
    const projectsStatus = useSelector(getStatusProjects);
    const projectsError = useSelector(getErrorProjects);

    useEffect(() => {
        if(projectsStatus === 'idle') {
            dispatch(fetchProjects());
        }
    }, [projectsStatus, dispatch]);

    let projectsEl = '';
    if(projectsStatus === 'loading') {
        projectsEl = <Loader />
    } else if(projectsStatus === 'succeeded') {
        projectsEl = projects.map(project => (
            <Project project={project} key={project._id} />
        ))
    } else if(projectsStatus === 'failed') {
        projectsEl = projectsError;
    }

    return (
        <div className="projects">
            <h2 className="section__title">// Projects</h2>
            {
                projectsEl
            }
        </div>
    )
}

export default Projects;