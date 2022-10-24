import { Link } from "react-router-dom";

import {VscGithubAlt} from 'react-icons/vsc';

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header__link">Home</Link>
            <Link to="/projects" className="header__link">Projects</Link>
            <Link to="/contact" className="header__link">Contact</Link>
            <a target="_blank" href="https://github.com/soufianez0uhair" className="header__link"><VscGithubAlt className="icon icon--github" /></a>
        </header>
    )
}

export default Header;