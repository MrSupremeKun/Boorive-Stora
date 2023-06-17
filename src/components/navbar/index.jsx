import React from 'react'
import styles from './navbar.module.scss'
import { Link, NavLink } from 'react-router-dom'
import { GoLocation } from 'react-icons/go'
import { BsPhone } from 'react-icons/bs'
import logo from './../../images/logo (1).png'
import { FiSearch } from 'react-icons/fi'
import { BiHeart } from 'react-icons/bi'
import { MdOutlineCardTravel } from 'react-icons/md'
import classNames from 'classnames'

//import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav__first_row}><Link to={"https://www.google.com/search?q=%D0%9A%D0%B8%D0%B5%D0%B2%2C+%D0%9D%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9+%D0%B2%D0%B0%D0%BB%2C+37&rlz=1C1AVFC_enUZ1013UZ1013&oq=%D0%9A%D0%B8%D0%B5%D0%B2%2C+%D0%9D%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9+%D0%B2%D0%B0%D0%BB%2C+37&aqs=chrome.0.69i59j0i22i30l2.3674j0j7&sourceid=chrome&ie=UTF-8"} className={styles.navbar__location}> <GoLocation className={styles.navbar__location_logo} /> Киев, Нижний вал, 37</Link>
        <Link className={styles.navbar__phone_number}><BsPhone className={styles.navbar__phono_logo} />+38 063 843 34 71</Link>
        <Link to='/'><img src={logo}  alt="" className={styles.navbar__logo} /></Link>
        <FiSearch className={styles.navbar__search__logo} /><input type="text" className={styles.navbar__input} />
        <BiHeart className={styles.navbar__heart__logo} />
        <MdOutlineCardTravel className={styles.navbar__card__logo} /></div>
      <div className={styles.nav__second_row}>
        <NavLink className={({isActive})=> isActive ? classNames(styles.second_row__navbar__Links,styles.navbar__link_active) : styles.second_row__navbar__Links} to='/News'>Новинки</NavLink>
        <NavLink className={({isActive})=> isActive ? classNames(styles.second_row__navbar__Links,styles.navbar__link_active) : styles.second_row__navbar__Links} to='/Dresses'>Платья</NavLink>
        <NavLink className={({isActive})=> isActive ? classNames(styles.second_row__navbar__Links,styles.navbar__link_active) : styles.second_row__navbar__Links} to='/Up'>Верх</NavLink>
        <NavLink className={({isActive})=> isActive ? classNames(styles.second_row__navbar__Links,styles.navbar__link_active) : styles.second_row__navbar__Links} to='/Down'>Низ</NavLink>
        <NavLink className={({isActive})=> isActive ? classNames(styles.second_row__navbar__Links,styles.navbar__link_active) : styles.second_row__navbar__Links} to='/Coats'>куртки</NavLink>
        <NavLink className={({isActive})=> isActive ? classNames(styles.second_row__navbar__Links,styles.navbar__link_active) : styles.second_row__navbar__Links} to='/SmallItems'>Мелочи</NavLink>
        <NavLink className={({isActive})=> isActive ? classNames(styles.second_row__navbar__Links,styles.navbar__link_active) : styles.second_row__navbar__Links} to='/Suits'>Костюмы</NavLink>
        <NavLink className={({isActive})=> isActive ? classNames(styles.second_row__navbar__Links,styles.navbar__link_active) : styles.second_row__navbar__Links} to='/BoorivaGirls'>#Boorivagirls</NavLink>
      </div>
    </nav>
  )
}

export default Navbar