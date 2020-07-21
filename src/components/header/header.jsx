import React from 'react'

import './header.scss';

import {
   GithubIcon
} from '../icons';

const Header = () => {
   return (
      <header className="header">
         <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="header__git-link">
            {<GithubIcon />}
         </a>
        <h2 className="header__title">GitHub Search App</h2>
      </header>
   );
};

export default Header;