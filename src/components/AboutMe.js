import CV from "./CV";

import MernImg from '../assets/mern-stack.png';
import Loader from "./Loader";

const AboutMe = () => {
    return (
        <div className="home__about-me">
            <h2 className="section__title">// About</h2>
            <p>Hi, I'm Soufiane, a FullStack Developer. <br /> I use MERN stack to build efficient and user-friendly web apps. <br /> Oh, I'm also a samurai!</p>
            <CV />
            <div className="home__about-me__cool-animations">
                <img src={MernImg} alt="mern img" className="mernImg" />
                <Loader />
            </div>
        </div>
    )
}

export default AboutMe;