import Miyamoto from '../assets/miyamoto-musashi.png';

import AboutMe from '../components/AboutMe';

const Home = () => {
    return (
        <div className="home">
            <AboutMe />
            <img src={Miyamoto} alt="miyamoto musashi" className="miyamoto" />
        </div>
    )
}

export default Home;