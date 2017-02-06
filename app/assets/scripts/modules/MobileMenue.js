import $ from 'jquery';

class MobileMenue {
  constructor() {
    this.siteHeader = $('.site-header');
    this.menueIcon = $('.site-header__menue-icon');
    this.menueContent = $('.site-header__menue-content');
    this.event();
  }

  event() {
    this.menueIcon.click(this.toggleTheMenue.bind(this));
  }

  toggleTheMenue() {
    this.menueContent.toggleClass('site-header__menue-content--is-visible');
    this.siteHeader.toggleClass('site-header--is-expanded');
    this.menueIcon.toggleClass('site-header__menue-icon--close-x');
  }
}

export default MobileMenue;
