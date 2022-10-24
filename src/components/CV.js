import France from '../assets/france.png';
import USA from '../assets/united-states.png';

const CV = () => {
    return (
        <div className="home__about-me__cvs">
            <h3>Preview CV:</h3>
            <a target="_blank" href="https://bit.ly/3RZvKmP" className="home__about-me__cv">
                <img src={France} alt="france flag" className="home__about-me__cv__img" />
                <span>FR</span>
            </a>
            <a target="_blank" href="https://bit.ly/3RZvKmP" className="home__about-me__cv">
                <img src={USA} alt="usa flag" className="home__about-me__cv__img" />
                <span>EN</span>
            </a>
        </div>
    )
}

export default CV;