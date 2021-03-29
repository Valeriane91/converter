import React from 'react';
import './header.scss';


// convention pour limiter le risque de collision de nom de classe CSS :
// sur la balise de plus haut niveau de chaque composant, je place une classe CSS
// avec le nom du composant, et dans le fichier scss j'imbrique toutes les autres
// définitions dans la première


const Header = () => (
  <header className="header">
    <div className="header-content">
      <h1 className="header-convert">Converter</h1>
      <p className="header-currencies"> 1 euro</p>
    </div>
  </header>
);



export default Header;
