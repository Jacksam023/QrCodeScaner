import React, { useState } from 'react'
import feed from "../../images/feed.svg"
import favorites from "../../images/favorites.svg"
import qrcode from "../../images/qrcode.svg"
import user from "../../images/user.svg"
import basket from "../../images/basket.svg"
import style from "./style.module.scss"
import { useNavigate } from 'react-router-dom'
import { Menu } from '../Menu/Menu'
export const Footer = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/qrCode")
  }

  const [isVisible, setIsVisible] = useState(false)


  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_button}>
        <img src={feed} alt="" />
        <p>Лента</p>
      </div>
      <div className={style.wrapper_button}>
        <img src={favorites} alt="" />
        <p>Избранное</p>
      </div>
      <div>
        <button className={style.qrcode_button} onClick={handleClick}><img src={qrcode} alt="" /></button>
      </div>
      <div className={style.wrapper_button}>
        <img src={user} alt="" />
        <p>Профиль</p>
      </div>
      <div className={style.wrapper_button} onClick={() => { setIsVisible(!isVisible) }}>
        {isVisible && <Menu />}
        <button className={style.basket_button} >
          <img src={basket} alt="" />
          <p>Корзина</p>
        </button>
      </div>
    </div>
  )
}
