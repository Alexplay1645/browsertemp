import React from 'react';
import '../App.css';

function HeaderTitle() {
  return (
    <div className="header-title-container">
      <div className="search-container">
        <img src="/Images/lupa.png" alt="SearchIcon" className="search-icon-img"/>
        <input type="text" placeholder="Пошук" className="header-search"/>
      </div>

      <div className="main-title">ВСЕ ДЛЯ ДОМУ</div>
    </div>
  );
}

export default HeaderTitle;
