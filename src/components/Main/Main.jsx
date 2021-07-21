import React from 'react'
import styles from './Main.module.scss'
import vectorIcon from '../../common/icons/vector.svg'
import calendarIcon from '../../common/icons/calendar.svg'
import rectangle23Icon from '../../common/images/Rectangle23.png'
import rectangle24Icon from '../../common/images/Rectangle24.png'
import rectangle28Icon from '../../common/images/Rectangle28.png'
import rectangle29Icon from '../../common/images/Rectangle29.png'
import Ticket from './Ticket/Ticket'

const Main = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h2 className={styles.historyPath}>Вылеты</h2>
            <img src={vectorIcon} alt=""/>
            <h2 className={styles.historyPath}>SVO-JFK</h2>
          </div>
          <div className={styles.dateContainer}>
            <h2 className={styles.date}>07 июля 2020</h2>
            <img src={calendarIcon} alt="" />
          </div>
        </div>
        <div className={styles.images}>
          <img src={rectangle23Icon} alt="" />
          <img src={rectangle24Icon} alt="" />
          <img src={rectangle24Icon} alt="" />
          <img src={rectangle28Icon} alt="" />
          <img src={rectangle29Icon} alt="" />
        </div>
        <div className={styles.favoriteInfo}>
          <p>Добавлено в избранное:</p>
          <p className={styles.count}>10</p>
          <p>рейсов</p>
        </div>
        <div className={styles.tickets}>
          <Ticket />
          <Ticket />
          <Ticket />
        </div>
      </div>
    </div>
  )
}

export default Main