import React from 'react'
import styles from './styles/btnEnlace.module.css'
export const BtnLink = ({enlace, nameLink}:any) => {

   
  return (
    <a  className={styles.enlaceStyle} href={enlace}>{nameLink}</a>
  )
}
