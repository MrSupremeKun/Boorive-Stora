import React from 'react'
import styles from './pages.module.scss'
import Hoodie from '../images/худи.png'
import Up from '../images/верх.png'
import Down from '../images/низ.png'
import Suits from '../images/костюмы.png'
import Shirts from '../images/футболки.png'
import Clothes from '../images/платья.png'
import { Link } from 'react-router-dom'









function Home() {
  return (
    <div className={styles.row_father}>
      <div className={styles.first__div}>
        <Link to='/Up'><img src={Shirts} alt="Shirts" /></Link>
        <Link to='/Down' className={styles.down__picture}><img src={Down} alt="Down" /></Link>
        <Link to='/Up'><img src={Up} alt="Up" /></Link>
      </div>
      <div className={styles.second__div}>
        <Link to='/Dresses'><img src={Clothes} alt="Clothes" /></Link>
        <Link to='/Suits' className={styles.suits__picture}><img src={Suits} alt="Suits" /></Link>
        <Link to='/Up'><img src={Hoodie} alt="Hoodie  " /></Link>
      </div>
    </div>
  )
}

export default Home