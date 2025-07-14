import React from 'react';
import '../App.css';

function CatalogDropdown() {
  return (
    <div className="catalog-dropdown">
      <div className="catalog-cards">
        <div className="catalog-card">
          <img src="/Images/1.jpg" alt="Подушки" />
          <div className="catalog-card-title">ПОДУШКИ</div>
          <div className='catalog-card-subtitle'>спальна кімната...</div>
          <div className="catalog-card-price">12$</div>
        </div>
        <div className="catalog-card">
          <img src="/Images/2.jpg" alt="Ковдра" />
          <div className="catalog-card-title2">КОВДРА</div>
          <div className='catalog-card-subtitle'>спальна кімната...</div>
          <div className="catalog-card-price2">30$</div>
        </div>
        <div className="catalog-card">
          <img src="/Images/3.jpg" alt="Ліжко" />
          <div className="catalog-card-title3">ЛІЖКО</div>
          <div className='catalog-card-subtitle'>спальна кімната...</div>
          <div className="catalog-card-price3">414$</div>
        </div>
      </div>
      <div className="catalog-note">
        ЛОВИ МОМЕНТ | <strong className='textnormalnote'>Знижки до</strong> <strong className='textboldnote'>60%</strong> на вибрані категорії товарів!
      </div>
    </div>
  );
}

export default CatalogDropdown;
