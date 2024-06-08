import React from 'react'
import style from "./style.module.scss"
import glass from "../../images/glass.svg"
import image_food from "../../images/image_food.svg"
import image_beauty from "../../images/image_beauty.svg"
import qrphone from "../../images/qrphone.svg"
import { useNavigate } from 'react-router-dom'
export const Home = () => {
  const navigate = useNavigate()
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_input}>
        <img src={glass} alt="" />
        <input type="text" placeholder='Искать в Malina' />
      </div>
      <div className={style.wrapper_qr} onClick={() => navigate("/qrCode")}>
        <img src={qrphone} alt="" />
        <p>Сканируй QR-код и <br /> заказывай прямо в <br /> заведении</p>
      </div>
      <div className={style.wrapper_cards}>
        <img src={image_food} alt="" />
        <img src={image_beauty} alt="" />
      </div>
      <div className={style.wrapper_bottom}>
        <h3>Скоро в Malina</h3>
        <div className={style.wrapper_bottom__cards}>
          <div className={style.bottom_card} style={{ backgroundColor: "rgb(213, 230, 255)" }}>
            <p>Вакансии</p>
          </div>
          <div className={style.bottom_card} style={{ backgroundColor: "rgb(255, 211, 186)" }}>
            <p>Маркет</p>
          </div>
          <div className={style.bottom_card} style={{ backgroundColor: "rgb(255, 222, 222)" }}>
            <p>Цветы</p>
          </div>
          <div className={style.bottom_card} style={{ backgroundColor: "rgb(207, 242, 227)" }}>
            <p>Еда</p>
          </div>
        </div>
      </div>
    </div>
  )
}
