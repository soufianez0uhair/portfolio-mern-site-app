import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Link className="header__link">Home</Link>
            <Link className="header__link">Projects</Link>
            <Link className="header__link">Contact</Link>
        </header>
    )
}

export default Header;