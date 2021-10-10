/* global Flickity */

import { select, templates } from '../settings.js';
import { app } from '../app.js';

class Home {
  constructor(element){
    const thisHome = this;

    thisHome.render(element);
    thisHome.initWidgets();
    thisHome.navigate();
  }

  render(element) {
    const thisHome = this;
    const generatedHTML = templates.homeWidget();

    thisHome.dom = {};
    thisHome.dom.wrapper= element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
    thisHome.dom.orderOnline = document.querySelector(select.home.order);
    thisHome.dom.bookTable = document.querySelector(select.home.book);
  }

  initWidgets() {

    const element = document.querySelector(select.widgets.carousel);

    new Flickity (element, {
      autoPlay: 3000,
      prevNextButtons: false,
      imagesLoaded: true,
    });
  }

  navigate(){
    const thisHome = this;

    thisHome.dom.bookTable.addEventListener('click', function(){
      app.activatePage('booking');
    });

    thisHome.dom.orderOnline.addEventListener('click', function(){
      app.activatePage('order');
    });
  }
}

export default Home;