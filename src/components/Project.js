import {AiOutlineArrowRight} from 'react-icons/ai';

const Project = ({project}) => {
    return (
        <div className="project">
            <div className="project__imgs">
                <img src={project.imgDesktop} alt={project.title + ' desktop image'} className="project__imgs__desktop" />
                <img src={project.imgMobile} alt={project.title + ' mobile image'} className="project__imgs__mobile" />
            </div>
            <div className="project__details">
                <h1 className="project__title">{project.title}</h1>
                <h2 className="project__description">{project.description}</h2>
                <a target="_blank" href={project.github} className="project__link">Source Code <AiOutlineArrowRight className="icon icon--arrow" /></a>
                <a target="_blank" href={project.demo} className="project__link">Live Demo <AiOutlineArrowRight className="icon icon--arrow" /></a>
            </div>
        </div>
    )
}

export default Project;