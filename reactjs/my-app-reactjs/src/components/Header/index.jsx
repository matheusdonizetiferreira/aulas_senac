import React from 'react'
import styles from './style.module.css'

export default function Header(props) {
  return (
    <header className={styles.background}>
      <h1 className={styles.title}>{props.title}</h1>
    </header>
  )
}
