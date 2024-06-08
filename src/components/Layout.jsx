import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer/Footer'

export const Layout = () => {
  return (
  <>
  <Outlet/>
  <Footer/>
  </>
  )
}
