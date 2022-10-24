import {AiOutlineTwitter, AiFillLinkedin, AiOutlineMail, AiFillPhone} from 'react-icons/ai';

import Loader from '../components/Loader';

const Contact = () => {
    return (
        <div className="contact">
            <h2 className="section__title">// Contact</h2>
            <Loader />
            <div className="contact__options">
                <a href="https://twitter.com/soufianez0uhair" className="contact__option">
                    <AiOutlineTwitter className="icon icon--contact" />
                    <span>twitter</span>
                </a>
                <a href="https://linkedin.com/in/soufianezouhair" className="contact__option">
                    <AiFillLinkedin className="icon icon--contact" />
                    <span>linkedin</span>
                </a>
                <a mailto="soufianezouhaironline@gmail.com" className="contact__option">
                    <AiOutlineMail className="icon icon--contact" />
                    <span>gmail</span>
                </a>
                <a href="tel:+212614671572" className="contact__option">
                    <AiFillPhone className="icon icon--contact" />
                    <span>+212614671572</span>
                </a>
            </div>
            
        </div>
    )
}

export default Contact;