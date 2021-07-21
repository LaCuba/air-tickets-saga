import React from 'react'
import styles from './Ticket.module.scss'
import planeIcon from '../../../common/icons/plane.svg'
import dashIcon from '../../../common/icons/dash.svg'
import heartIcon from '../../../common/icons/heart.svg'
import arrowIcon from '../../../common/icons/arrow.svg'

const Ticket = () => {
  return (
    <div className={styles.body}>
      <div className={styles.ticketIcon}>
        <img src={planeIcon} alt="" />
      </div>
      <div className={styles.ticketInfo}>
        <div className={styles.directions}>
          <h4 className={styles.country}>Moscow (SVO)</h4>
          <img className={styles.directionsArrow} src={arrowIcon} alt="" />
          <h4 className={styles.country}>New York City (JFK)</h4>
        </div>
        <div className={styles.favoriteBtnContainer}>
          <a className={styles.favoriteBtn} onClick={() => {}}>
            <img className={styles.favoriteIcon} src={heartIcon} alt="" />
          </a>
        </div>
        <div className={styles.ticketDate}>
          <p className={styles.date}>28 June, 2020</p>
          <img src={dashIcon} alt="" />
          <p className={styles.time}>14:50</p>
        </div>
        <p className={styles.airline}>
          Aeroflot
        </p>
        <div className={styles.price}>
          <p className={styles.title}>Price:</p>
          <p className={styles.cost}>23 924 P</p>
        </div>
      </div>
    </div>
  )
}

export default Ticket