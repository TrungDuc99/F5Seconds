import Footer from '@component/footer/Footer'
import Head from 'next/head'
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
      <Head>
        <title>Loyalty-Landing</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {navbar && <div className="section-after-sticky">{navbar}</div>}
      {!navbar ? <div className="section-after-sticky">{children}</div> : children}

      <Footer />
    </Fragment>
  )
}

export default AppLayout_exb
