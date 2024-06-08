import React from 'react'
import style from "./style.module.scss"
import minus from "../../images/minus.svg"
import plus from "../../images/plus.svg"
import clear from "../../images/delete.svg"
import cardGoods from "../../images/cardGoods.svg"
export const Card = () => {
  return (
    <>
      <div className={style.card}>
        <p>Hair</p>
        <hr />
        <div className={style.card_info}>
          <div className={style.card_info__img}>
            <img src={cardGoods} alt="" />
          </div>
          <div className={style.card_info__text}>
            <div className={style.card_info__top}>
              <div className={style.top_left}>
                <h4>Hadat Cosmetics</h4>
                <p>Шампунь интенсивно <br /> восстанавливающий Hydro <br /> Intensive Repair Shampoo 250 <br /> мл</p>
              </div>
              <h5>1900 C</h5>
            </div>
            <div className={style.card_info__bottom}>
              <div className={style.info_quantity}>
                <button><img src={minus} alt="" /></button>
                <div>1</div>
                <button><img src={plus} alt="" /></button>
              </div>
              <button><img src={clear} alt="" /></button>
            </div>
          </div>
        </div>
        <div className={style.card_button__order}>
          <h6>Заказать</h6>
          <h5>250 C</h5>
        </div>

      </div></>
  )
}
