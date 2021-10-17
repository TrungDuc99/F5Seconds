import Footer from '@component/footer/Footer'
import Header from '@component/header/Header'
import MobileNavigationBar from '@component/mobile-navigation/MobileNavigationBar'
import Sticky from '@component/sticky/Sticky'
import Topbar from '@component/topbar/Topbar'
import React, { FC, Fragment, useCallback, useState } from 'react'

type AppLayout_exbProps = {
  title?: string
  navbar?: React.ReactChild
}

const AppLayout_exb: FC<AppLayout_exbProps> = ({
  children,
  navbar,
  title = 'React Next.js Ecommerce Template',
}) => {
  const [isFixed, setIsFixed] = useState(false)

  const toggleIsFixed = useCallback((fixed) => {
    setIsFixed(fixed)
  }, [])

  return (
    <Fragment>
      <Topbar />

      <Sticky fixedOn={0} onSticky={toggleIsFixed}>
        <Header isFixed={isFixed} />
      </Sticky>

      {navbar && <div className="section-after-sticky">{navbar}</div>}
      {!navbar ? <div className="section-after-sticky">{children}</div> : children}

      <MobileNavigationBar />
      <Footer />
    </Fragment>
  )
}

export default AppLayout_exb
