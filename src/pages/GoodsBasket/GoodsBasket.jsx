import React from 'react'
import { Header } from '../../components/Header/Header'
import { Card } from './Card'
import style from "./style.module.scss"
export const GoodsBasket = () => {
  return (
    <>
      <Header />
      <main className={style.cards}>
        <Card />
        <Card />
        <Card />
      </main>
    </>

  )
}
