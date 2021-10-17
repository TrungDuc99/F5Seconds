import Section12 from '@component/home-exb/Section12'
import Section1_exb from '@component/home-exb/Section1_exb'
import AppLayout_exb from '@component/layout/AppLayout_exb'

const IndexPage = () => {
  return (
    <AppLayout_exb>
      <Section1_exb />

      <Section12 />
      <Section12 />
    </AppLayout_exb>
  )
}

export default IndexPage
