import { default as logo } from "../../images/logo-text-right.svg";
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';


function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className='userLinks'>
        <LoginFormModal />
        <SignupFormModal />
      </div>
    );
  }

  return (
    <div className="navWrapper">
      <ul className='navBar'>
        <li className='logoListItem'>
          <NavLink exact to="/">
            <img className="logo" src={logo} />
          </NavLink>
        </li>
        <li className='sessionLinks'>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
