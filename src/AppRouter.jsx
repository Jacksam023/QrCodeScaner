import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home/Home'
import { Code } from './pages/Code/Code'
import { FoodBasket } from './pages/FoodBasket/FoodBasket'
import { GoodsBasket } from './pages/GoodsBasket/GoodsBasket'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/qrCode' element={<Code />} />
        <Route path='/foodBasket' element={<FoodBasket />} />
        <Route path='/goodsBasket' element={<GoodsBasket />} />
      </Route>
    </Routes>
  )
}
