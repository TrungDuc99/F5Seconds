import BannerF5seconds from '@component/banner/BannerF5seconds'
import Footer_f5seconds from '@component/footer/Footer_f5seconds'
import AboutUsTimeLine from '@component/home-f5seconds/AboutUsTimeLine'
import F5secondsCare from '@component/home-f5seconds/F5secondsCare'
import ListPortfolio from '@component/home-f5seconds/ListPortfolio'
import AppLayout_test from '@component/layout/AppLayout_test'

const IndexPage = () => {
  return (
    <AppLayout_test>
      <BannerF5seconds />
      <ListPortfolio />
      <F5secondsCare />
      <AboutUsTimeLine />
      <Footer_f5seconds />
    </AppLayout_test>
  )
}

export default IndexPage
