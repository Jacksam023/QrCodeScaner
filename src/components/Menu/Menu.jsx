import React from 'react'
import food from "../../images/food.svg"
import goods from "../../images/goods.svg"
import style from "./style.module.scss"
import { useNavigate } from 'react-router-dom'
export const Menu = () => {
  const navigate = useNavigate()
  return (
    <div className={style.menu}>
        <div onClick={() => navigate("/foodBasket")}>
<img src={food} alt="" />
<p>Еда</p>  
        </div>
        <div  onClick={() => navigate("/goodsBasket")}>
<img src={goods} alt="" />
<p>Товары</p>
        </div>
      </div>
  )
}
