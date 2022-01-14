import './SplashPage.css';
import { NavLink } from 'react-router-dom';


function SplashPage() {
    return (
        <div className='splash'>
            <div className='mainImg'>
                <NavLink exact to="/pets">
                    <p className='petsLink'>Come Play!</p>
                </NavLink>
            </div>
        </div>
    )
}

export default SplashPage;
