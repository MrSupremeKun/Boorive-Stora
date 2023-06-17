import React from 'react'
import styles from './footer.module.scss'
import logo from './../../images/logo (1).png'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTiktok} from 'react-icons/bs'

function Footer() {
  return (
    <div className={styles.footer}>
      <img src={logo} alt="" className={styles.footer__logo} />
      <div className={styles.footer__first__box}>
        <article className={styles.first__box__article}>ИНФО</article>
        <p className={styles.footer__info}>Контакты</p>
        <p className={styles.footer__info}>Система лояльности</p>
        <p className={styles.footer__info}>Обмен и возврат</p>
      </div>
      <div className={styles.footer__second__box}>
        <article className={styles.first__box__article}>НАШ АДРЕС</article>
        <p className={styles.footer__info}>г.Киев, ул. Нижний Вал, 37</p>
        <p className={styles.footer__info}>Пн — Вс: с 11:00 до 21:00</p>
        <p className={styles.footer__info}>без виходных 24/7</p>
      </div>
      <div className={styles.footer__third__box}>
      <article className={styles.first__box__article}>СОЦ.СЕТИ</article>
        <p className={styles.footer__info}><BsFacebook />  facebook</p>
        <p className={styles.footer__info}><BsInstagram />  instagram</p>
        <p className={styles.footer__info}><BsTiktok />  tiktok</p>
      </div>
    </div>
  )
}

export default Footer