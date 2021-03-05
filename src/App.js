import React from "react";
import sprite from "./img/sprite.svg";
import story_1 from "./img/story-1.jpeg";
import story_2 from "./img/story-2.jpeg";

import home_1 from "./img/house-1.jpeg";
import home_2 from "./img/house-2.jpeg";
import home_3 from "./img/house-3.jpeg";
import home_4 from "./img/house-4.jpeg";
import home_5 from "./img/house-5.jpeg";
import home_6 from "./img/house-6.jpeg";

import gal_1 from "./img/gal-1.jpeg";
import gal_2 from "./img/gal-2.jpeg";
import gal_3 from "./img/gal-3.jpeg";
import gal_4 from "./img/gal-4.jpeg";
import gal_5 from "./img/gal-5.jpeg";
import gal_6 from "./img/gal-6.jpeg";
import gal_7 from "./img/gal-7.jpeg";
import gal_8 from "./img/gal-8.jpeg";
import gal_9 from "./img/gal-9.jpeg";
import gal_10 from "./img/gal-10.jpeg";
import gal_11 from "./img/gal-11.jpeg";
import gal_12 from "./img/gal-12.jpeg";
import gal_13 from "./img/gal-13.jpeg";
import gal_14 from "./img/gal-14.jpeg";

import logo from './img/logo.png';
import logo_bbc from './img/logo-bbc.png';
import logo_bi from './img/logo-bi.png';
import logo_forbes from './img/logo-forbes.png';
import logo_techcrunch from './img/logo-techcrunch.png';

import realtor_1 from './img/realtor-1.jpeg';
import realtor_2 from './img/realtor-2.jpeg';
import realtor_3 from './img/realtor-3.jpeg';


function App() {
  return (
    <div className="App">
      <div className="container">
        <nav className="sidebar">
        <button className="sidebar__btn">
          <div className="sidebar__icon"></div>
        </button>
        </nav>
        <header className="header">
          <img src={logo} alt="" className="header__logo"/>
          <h3 className="heading-3 heading-3--primary">your own home:</h3>
          <h1 className="heading-1">The ultimate personal freedom</h1>
          <button className="btn header__btn">view our properties</button>
          <p className="header__seenon--text">As Seen on</p>
          <div className="header__seenon--logos">
            <img src={logo_bbc} alt=""/>
            <img src={logo_forbes} alt=""/>
            <img src={logo_techcrunch} alt=""/>
            <img src={logo_bi} alt=""/>
          </div>
        </header>
        <div className="realtors">
          <h3 className="heading-4 heading-4--primary">top 3 realtors</h3>
          <div className="realtors__list">
            <img src={realtor_1} alt="" className="realtors__img"/>
            <div className="realtors__detail">
              <h4 className="realtors__name">Erik Feinman</h4>
              <p className="realtors__sold">245 houses sold</p>
            </div>
            <img src={realtor_2} alt="" className="realtors__img"/>
            <div className="realtors__detail">
              <h4 className="realtors__name">Kim Brown</h4>
              <p className="realtors__sold">213 houses sold</p>
            </div>
            <img src={realtor_3} alt="" className="realtors__img"/>
            <div className="realtors__detail">
              <h4 className="realtors__name">Toby Ramsey</h4>
              <p className="realtors__sold">197 houses sold</p>
            </div>
          </div>
        
        </div>
        <section className="features">
          <div className="feature">
            <svg className="feature__icon">
              <use href={sprite + "#icon-global"} />
            </svg>
            <h4 className="heading-4 heading-4--primary">
              World's best luxury homes
            </h4>
            <p className="feature__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              accusamus asperiores earum quia nihil officiis?
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use href={sprite + "#icon-trophy"} />
            </svg>
            <h4 className="heading-4 heading-4--primary">
              Only the best properties
            </h4>
            <p className="feature__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati, accusamus debitis non inventore earum amet aliquid nisi
              a fugit praesentium.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use href={sprite + "#icon-map-pin"} />
            </svg>
            <h4 className="heading-4 heading-4--primary">
              All homes in top locations
            </h4>
            <p className="feature__text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              molestias est dignissimos?
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use href={sprite + "#icon-key"} />
            </svg>
            <h4 className="heading-4 heading-4--primary">New home in one week</h4>
            <p className="feature__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              nostrum ipsa cumque, eum exercitationem neque aperiam ad ducimus.
              Impedit sit soluta amet, id vitae cupiditate?
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use href={sprite + "#icon-presentation"} />
            </svg>
            <h4 className="heading-4 heading-4--primary">Top 1% realtors</h4>
            <p className="feature__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              consequuntur esse ullam deleniti officiis dolorem voluptas
              reiciendis perferendis enim error.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use href={sprite + "#icon-lock"} />
            </svg>
            <h4 className="heading-4 heading-4--primary">
              Secure payments on nexter
            </h4>
            <p className="feature__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum eveniet sunt, mollitia commodi magni necessitatibus?
              Culpa, quia.
            </p>
          </div>
        </section>
        <div className="story__photo">
          <img className="story__img--1" src={story_1} alt="story-1" />
          <img className="story__img--2" src={story_2} alt="story-2" />
        </div>
        <div className="story__content">
          <h3 className="heading-3 heading-3--primary mb-sm">happy customers</h3>
          <h2 className="heading-2 mb-md">
            &ldquo;The best decision of our lives&rdquo;
          </h2>
          <p className="story__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            sint reiciendis. Qui atque ullam velit exercitationem in delectus
            recusandae quas, temporibus, molestias vitae nisi facere?
          </p>
          <button className="btn">find your own home</button>
        </div>
        <div className="homes">
          <div className="home">
            <img src={home_1} alt="" className="home__img" />
            <svg className="home__like">
              <use href={sprite + "#icon-heart-full"} />
            </svg>
            <h5 className="home__title">Beautiful Family House</h5>
            <div className="home__location">
              <svg>
                <use href={sprite + "#icon-map-pin"} />
              </svg>
              <p>USA</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use href={sprite + "#icon-profile-male"} />
              </svg>
              <p>5 Rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use href={sprite + "#icon-expand"} />
              </svg>
              <p>
                325 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <svg>
                <use href={sprite + "#icon-key"} />
              </svg>
              <p>$1,200,000</p>
            </div>
            <button className="btn home__btn">contact realtor</button>
          </div>
          <div className="home">
            <img src={home_2} alt="" className="home__img" />
            <svg className="home__like">
              <use href={sprite + "#icon-heart-full"} />
            </svg>
            <h5 className="home__title">Modern Glass Villa</h5>
            <div className="home__location">
              <svg>
                <use href={sprite + "#icon-map-pin"} />
              </svg>
              <p>Canada</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use href={sprite + "#icon-profile-male"} />
              </svg>
              <p>6 Rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use href={sprite + "#icon-expand"} />
              </svg>
              <p>
                450 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <svg>
                <use href={sprite + "#icon-key"} />
              </svg>
              <p>$2,750,000</p>
            </div>
            <button className="btn home__btn">contact realtor</button>
          </div>
          <div className="home">
            <img src={home_3} alt="" className="home__img" />
            <svg className="home__like">
              <use href={sprite + "#icon-heart-full"} />
            </svg>
            <h5 className="home__title">Cozy Country House</h5>
            <div className="home__location">
              <svg>
                <use href={sprite + "#icon-map-pin"} />
              </svg>
              <p>UK</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use href={sprite + "#icon-profile-male"} />
              </svg>
              <p>4 Rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use href={sprite + "#icon-expand"} />
              </svg>
              <p>
                250 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <svg>
                <use href={sprite + "#icon-key"} />
              </svg>
              <p>$850,000</p>
            </div>
            <button className="btn home__btn">contact realtor</button>
          </div>
          <div className="home">
            <img src={home_4} alt="" className="home__img" />
            <svg className="home__like">
              <use href={sprite + "#icon-heart-full"} />
            </svg>
            <h5 className="home__title">Large Rustical Villa</h5>
            <div className="home__location">
              <svg>
                <use href={sprite + "#icon-map-pin"} />
              </svg>
              <p>Portugal</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use href={sprite + "#icon-profile-male"} />
              </svg>
              <p>6 Rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use href={sprite + "#icon-expand"} />
              </svg>
              <p>
                480 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <svg>
                <use href={sprite + "#icon-key"} />
              </svg>
              <p>$1,950,000</p>
            </div>
            <button className="btn home__btn">contact realtor</button>
          </div>
          <div className="home">
            <img src={home_5} alt="" className="home__img" />
            <svg className="home__like">
              <use href={sprite + "#icon-heart-full"} />
            </svg>
            <h5 className="home__title">Majestic Palace House</h5>
            <div className="home__location">
              <svg>
                <use href={sprite + "#icon-map-pin"} />
              </svg>
              <p>Germany</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use href={sprite + "#icon-profile-male"} />
              </svg>
              <p>18 Rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use href={sprite + "#icon-expand"} />
              </svg>
              <p>
                4230 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <svg>
                <use href={sprite + "#icon-key"} />
              </svg>
              <p>$9,500,000</p>
            </div>
            <button className="btn home__btn">contact realtor</button>
          </div>
          <div className="home">
            <img src={home_6} alt="" className="home__img" />
            <svg className="home__like">
              <use href={sprite + "#icon-heart-full"} />
            </svg>
            <h5 className="home__title">Modern Family Apartment</h5>
            <div className="home__location">
              <svg>
                <use href={sprite + "#icon-map-pin"} />
              </svg>
              <p>Italy</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use href={sprite + "#icon-profile-male"} />
              </svg>
              <p>3 Rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use href={sprite + "#icon-expand"} />
              </svg>
              <p>
                180 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <svg>
                <use href={sprite + "#icon-key"} />
              </svg>
              <p>$600,000</p>
            </div>
            <button className="btn home__btn">contact realtor</button>
          </div>
        </div>
        <div className="gallery">
          <div className="gallery__item gallery__item--1">
            <img src={gal_1} alt="" className="gallery__photo" />
          </div>
          <div className="gallery__item gallery__item--2">
            <img src={gal_2} alt="" className="gallery__photo" />
          </div>
          <div className="gallery__item gallery__item--3">
            <img src={gal_3} alt="" className="gallery__photo" />
          </div>
          <div className="gallery__item gallery__item--4">
            <img src={gal_4} alt="" className="gallery__photo" />
          </div>
          <div className="gallery__item gallery__item--5">
            <img src={gal_5} alt="" className="gallery__photo" />
          </div>
          <div className="gallery__item gallery__item--6">
            <img src={gal_6} alt="" className="gallery__photo" />
          </div>
          <div className="gallery__item gallery__item--7">
            <img src={gal_7} alt="" className="gallery__photo" />
          </div>
          <div className="gallery__item gallery__item--8">
            <img src={gal_8} alt="" className="gallery__photo" />
          </div>
          <div className="gallery__item gallery__item--9">
            <img src={gal_9} alt="" className="gallery__photo" />
          </div>
          <div className="gallery__item gallery__item--10">
            <img src={gal_10} alt="" className="gallery__photo" />
          </div>
          <div className="gallery__item gallery__item--11">
            <img src={gal_11} alt="" className="gallery__photo" />
          </div>
          <div className="gallery__item gallery__item--12">
            <img src={gal_12} alt="" className="gallery__photo" />
          </div>
          <div className="gallery__item gallery__item--13">
            <img src={gal_13} alt="" className="gallery__photo" />
          </div>
          <div className="gallery__item gallery__item--14">
            <img src={gal_14} alt="" className="gallery__photo" />
          </div>
        </div>
        <footer className="footer">
          <ul className="nav">
            <li className="nav__item"><a href="#" className="nav__link">find your dream home</a></li>
            <li className="nav__item"><a href="#" className="nav__link">request proposal</a></li>
            <li className="nav__item"><a href="#" className="nav__link">download home planner</a></li>
            <li className="nav__item"><a href="#" className="nav__link">contact us</a></li>
            <li className="nav__item"><a href="#" className="nav__link">submit your property</a></li>
            <li className="nav__item"><a href="#" className="nav__link">come work with us</a></li>
          </ul>
          <p className="footer__copyright">&copy; Copyright 2021 by Developed by Thana Wisutphusi. Designed by Jonas Schmedtmann for Udemy Course Material </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
