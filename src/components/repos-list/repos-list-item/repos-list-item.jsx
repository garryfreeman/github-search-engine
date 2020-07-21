import React from 'react'

import './repos-list-item.scss';

import {
   BookIcon,
   StarIcon,
   ForkIcon
} from '../../icons';

const ReposListItem = (itemInfo) => {

const {
      html_url='https://github.com/',
      full_name='vuejs / docs-next', 
      description='completely free for everyone. Its build-in Flutter Dart.', 
      language='Vue', 
      stargazers_count='191', 
      forks='34',
      owner={
               login: 'garikfreedomyan',
               html_url: 'https://github.com/garikfreedomyan',
               avatar_url: 'https://avatars1.githubusercontent.com/u/50664707?v=4',
            }
} = itemInfo;

   return (
      <li className="repos-list__item">
         <a href={html_url} target="_blank" rel="noopener noreferrer" className="repos-list__item-title">
            {<BookIcon />}
            {full_name}
         </a>
         
         <p className="repos-list__item-description">
            {description}
         </p>

         <div className="repos-list__item-additional-info">
            <span className="repos-list__item-language">
               <span></span>
               <span>{language}</span>
            </span>
            <span className="repos-list__item-stars">
               <span>{<StarIcon />}</span>
               <span>{stargazers_count}</span>
            </span>
            <span className="repos-list__item-forks">
               <span>{<ForkIcon />}</span>
               <span>{forks}</span>
            </span>
            <a href={owner.html_url} target="_blank" rel="noopener noreferrer" className="repos-list__item-owner">
               <img src={owner.avatar_url} alt="owner avatar" />
               <span>{owner.login}</span>
            </a>
         </div>
      </li>
   );
};

export default ReposListItem;