import React from "react";
import styles from "../pages.module.scss";
import first from "../../images/first.png";
import second from "../../images/second.png";
import third from "../../images/third.png";
import fourth from "../../images/fourth.png";
import bigPicture from "../../images/baner.png";
import { HiOutlineHeart } from "react-icons/hi";
import StoreImage from "../../images/store.png";
import LocationImg from "../../images/location.png";
import Banner from "../../images/банер.png";
import Strange from "../../images/strange.png";
import Book from "../../images/book.png";
import PinkHoodie from "../../images/pinkHoodie.png";
import Wardrobe from "../../images/wardrobe.png";
import Green from "../../images/green.png";
import { CiDeliveryTruck } from 'react-icons/ci'
import { FaExchangeAlt } from 'react-icons/fa'
import { BsCurrencyExchange } from 'react-icons/bs'


function index() {
  return (
    <div className={styles.second__main_div}>
      <h1 className={styles.main__article}>НОВИНКИ </h1>
      <artice className={styles.main__next_article}>НОВИНКИ</artice>
      <div className={styles.image_div_pieces_father}>
        <div className={styles.div__pieces}>
          <img
            src={first}
            alt="Cвитшот вставка клетка"
            className={styles.div_image}
          />
          <HiOutlineHeart className={styles.heart__svg} />
          <div className={styles.texts__div}>
            <p className={styles.div__article}> Cвитшот вставка клетка</p>
            <p className={styles.div__price}>1 099 ₴</p>
          </div>
        </div>
        <div className={styles.div__pieces}>
          <img
            src={second}
            alt="Платье прозрачное
            в цветочек черное"
            className={styles.div_image}
          />
          <HiOutlineHeart className={styles.heart__svg} />
          <div className={styles.texts__div}>
            <p className={styles.div__article}>
              Платье прозрачное в цветочек черное
            </p>
            <p className={styles.div__price}>1 299 ₴</p>
          </div>
        </div>
        <div className={styles.div__pieces}>
          <img
            src={third}
            alt="Бомбер Gone Crazy
            хаки"
            className={styles.div_image}
          />
          <HiOutlineHeart className={styles.heart__svg} />
          <div className={styles.texts__div}>
            <p className={styles.div__article}>Бомбер Gone Crazy хаки</p>
            <p className={styles.div__price}>2 499 ₴</p>
          </div>
        </div>
        <div className={styles.div__pieces}>
          <img
            src={fourth}
            alt="Cвитшот вставка клетка"
            className={styles.div_image}
          />
          <HiOutlineHeart className={styles.heart__svg} />
          <div className={styles.texts__div}>
            <p className={styles.div__article}>
              Платье-футболка рыбы в аквариуме
            </p>
            <p className={styles.div__price}>899 ₴</p>
          </div>
        </div>
      </div>
      <button className={styles.cta}>
        <span>Cмотреть все</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
      <div className={styles.biig_picture}>
        <img src={bigPicture} alt="" className={styles.that_image} />
      </div>
      <div className={styles.third__div}>
        <img src={StoreImage} alt="" className={styles.big__store_png} />
        <article className={styles.store__div_article}>BOORIVA STORE</article>
        <article className={styles.store__div_text}>
          Ты можешь заказать примерку понравившейся вещи или просто заглянуть,
          гуляя по Подолу, и примерять что-то из в наличии
        </article>
        <article className={styles.store__div_location}>
          г.Киев, ул. Нижний вал, 37 Ежедневно с 11:00 до 21:00
        </article>
        <img src={LocationImg} alt="" className={styles.location__img} />
        <button className={styles.cta}>
          <span>проложить маршрут</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>

      </div>
      <div className={styles.top__goods}>
        <article className={styles.top__goods_text}>топовые товары</article>
        <article className={styles.top__goods_text}>топовые товары</article>
        <article className={styles.top__goods_text}>топовые товары</article>
        <article className={styles.top__goods_text}>топовые товары</article>
      </div>
      <div className={styles.previous__last_div}>
        <div className={styles.double__div}>
          <div className={styles.double__divbox}>
            <img src={third} alt="" className={styles.double__img} />
            <div className={styles.previous__prices}>
              <HiOutlineHeart />
              <p className={styles.double__textabout}>Бомбер Gone Crazy хаки</p>
              <p className={styles.double__textprice}>2 499 ₴</p>
            </div>
          </div>
          <div className={styles.double__divbox}>
            <img src={fourth} alt="" className={styles.double__img} />
            <div className={styles.previous__prices}>
              <HiOutlineHeart />
              <p className={styles.double__textabout}>Платье-футболка рыбы в аквариуме</p>
              <p className={styles.double__textprice}>899 ₴</p>
            </div>
          </div>
        </div>
        <img src={Banner} alt="" className={styles.div__baner} />
        <div className={styles.double__divbox__next}>
          <img src={second} alt="" className={styles.double__imgtwo} />
          <div className={styles.previous__prices}>
            <HiOutlineHeart />
            <p className={styles.double__textabouttwo}>Бомбер Gone Crazy хаки</p>
            <p className={styles.double__textprice}>2 499 ₴</p>
          </div>
        </div>
      </div>
      <button className={styles.cta}>
        <span>Cмотреть все</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
      <div className={styles.icons__father}>
        <div className={styles.suits__div__images}>
          <div className={styles.icon__div}>
            <CiDeliveryTruck className={styles.react__icon} />
            <div className={styles.icon__text}>
              <p className={styles.icon__text_text}>Отправка день в день</p>
              <p className={styles.icon__text_text}>При заказе до 1800</p>
            </div>
          </div>
        </div>
        <div className={styles.suits__div__images}>
          <div className={styles.icon__div}>
            <FaExchangeAlt className={styles.react__icon} />
            <div className={styles.icon__text}>
              <p className={styles.icon__text_text}>Легкий возврат/обмен</p>
              <p className={styles.icon__text_text}>В течении 14 дней</p>
            </div>
          </div>
        </div>
        <div className={styles.suits__div__images}>
          <div className={styles.icon__div}>
            <BsCurrencyExchange className={styles.react__icon} />
            <div className={styles.icon__text}>
              <p className={styles.icon__text_text}>Сделано в Украине</p>
              <p className={styles.icon__text_text}>Прям в Киеве</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.last__last}>
        <div className={styles.last}>
          <div className={styles.last_div}>
            <article className={styles.last__div__text}>Instagram</article>
            <p className={styles.last__div__about}>Мы в экстазе, когда ты нас отмечаешь Отмечай плз чаще</p>
            <img src={Strange} alt="" className={styles.strange} />
            <img src={Book} alt="" className={styles.strange} />
          </div>
        </div>
        <img className={styles.pinkhoodie} src={PinkHoodie} alt="" />
        <div className={styles.last__div__second}>
          <img src={Wardrobe} alt="" className={styles.strange} />
          <img src={Green} alt="" className={styles.strange} />
          <p className={styles.last__booriva}>#boorivagirls</p>
          <p className={styles.last__booriva__text}>#Ставь тэг чтобы быть в нашей тусовке.</p>
        </div>
      </div>
    </div>
  );
}

export default index;
