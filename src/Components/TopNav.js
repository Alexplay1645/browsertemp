import React from 'react';
import '../App.css';

function TopNav() {
  return (
    <div>
      <div className="top-hashtags-bar">
        #вседлядому   #швидкота зручно   #buy now   #вседлядому   #швидкота зручно   #buy now
        #вседлядому   #швидкота зручно   #buy now   #вседлядому   #швидкота зручно   #buy now
        #вседлядому   #швидкота зручно   #buy now   #вседлядому   #швидкота зручно   #buy now
        #вседлядому   #швидкота зручно   #buy now   #вседлядому   #швидкота зручно   #buy now
      </div>

      <div className="top-nav-bar">
        <div className="nav-left">
          <div className="menu-item">
            <img src="/Images/Menu.png" alt="Menu Icon" className="menu-icon-top" />
            <span className="nav-link">Меню</span>
          </div>

          <img src="/Images/Union.png" alt="BN Logo" className="nav-logo" />
          <span className="nav-link">Товари</span>
          <span className="nav-link">Кімнати</span>
          <span className="nav-link">Дизайн</span>
        </div>

        <div className="nav-right">
          <div className="nav-item">
            <img src="/Images/Place.png" alt="Location Icon" className="nav-icon-img"/>
            <span className="nav-location">Київ</span>
          </div>

          <div className="nav-item">
            <img src="/Images/peopleicon.png" alt="User Icon" className="nav-icon-img"/>
            <span className="nav-login">Привіт! Увійдіть В Систему</span>
          </div>

          <img src="/Images/Cart.png" alt="Cart" className="nav-icon1" />
          <img src="/Images/Heart.png" alt="Heart" className="nav-icon2" />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
