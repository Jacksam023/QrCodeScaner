import React from 'react'
import exit from "../../images/exit.svg"
import style from "./style.module.scss"
import { useNavigate } from 'react-router-dom';
export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={style.header}>
      <div className={style.header_left}>
        <button onClick={() => navigate("/")}><img src={exit} alt="" /></button>
        <h3>Корзина</h3>
      </div>
      <div className={style.header_right}>
        <p>Очистить</p>
      </div>
    </div>
  )
}
