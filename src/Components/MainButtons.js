import React from 'react';
import '../App.css';
import CatalogDropdown from './CatalogDropdown';

function MainButtons() {
  return (
    <div className="button-area">
      <button className="btn-create">СТВОРИТИ АККАУНТ ТА ПОЧАТИ!</button>

      <div className="catalog-container">
        <button className="btn-catalog">
          КАТАЛОГ <img src="/Images/Vector123.png" alt="Arrow Down" className="arrow-down-icon" />
        </button>

        <CatalogDropdown />
      </div>
    </div>
  );
}

export default MainButtons;
