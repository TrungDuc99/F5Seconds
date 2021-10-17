import Footer from '@component/footer/Footer'
import Header from '@component/header/Header'
import MobileNavigationBar from '@component/mobile-navigation/MobileNavigationBar'
import Navbar from '@component/navbar/Navbar'
import Topbar from '@component/topbar/Topbar'
import React, { Fragment } from 'react'

type Props = {
  title?: string
}

const SaleLayout1: React.FC<Props> = ({
  children,
  title = 'Multivendor Ecommerce | Sale',
}) => (
  <Fragment>
    <Topbar />

    <Header />

    <Navbar />

    {children}

    <MobileNavigationBar />

    <Footer />
  </Fragment>
)

export default SaleLayout1
