import React from 'react'
import { Header } from '../../components/Header/Header'
import style from "./style.module.scss"
import minus from "../../images/minus.svg"
import plus from "../../images/plus.svg"
import clear from "../../images/delete.svg"
import additives from "../../images/additives.svg"
import cardPizza from "../../images/cardPizza.svg"
export const FoodBasket = () => {
  return (
    <>
      <Header />
      <main>
        <div className={style.buttons}>
          <button>Доставка</button>
          <button>В заведении</button>
        </div>
        <div className={style.card}>
          <p>Bellagio Coffee</p>
          <hr />
          <div className={style.card_info}>
            <div className={style.card_info__img}>
              <img src={cardPizza} alt="" />
            </div>
            <div className={style.card_info__text}>
              <div className={style.card_info__top}>
                <div className={style.top_left}>
                  <h4>Том ям</h4>
                  <p>Пицца с соусом том <br /> ям 230 гр</p>
                </div>
                <h5>250 C</h5>
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
          <div className={style.card_additives}>
            <img src={additives} alt="" />
            <h3>Добавки</h3>
          </div>
          <div className={style.card_button__order}>
            <h6>Заказать</h6>
            <h5>250 C</h5>
          </div>

        </div>
      </main>
    </>
  )
}
