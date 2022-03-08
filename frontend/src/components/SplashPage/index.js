import './SplashPage.css';
import { NavLink } from 'react-router-dom';


function SplashPage() {
    return (
        <div className='splash'>
            <div id='mainImgContainer'>
                <NavLink exact to="/pets">
                    <p className='petsLink'>Come Play!</p>
                </NavLink>
                <img id='mainImg' src={require("../../images/Ino-1.jpg")} alt="dog"></img>
            </div>
        </div>
    )
}

export default SplashPage;
