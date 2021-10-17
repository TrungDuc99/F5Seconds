import CarouselCard1new from '@component/carousel-cards/CarouselCard1new'
import Carousel from '@component/carousel/Carousel'
import Navbar_Exb from '@component/navbar/Navbar_Exb'
import { Box, Container } from '@material-ui/core'
import React, { FC } from 'react'
const Section1_exb: FC = () => {
  return (
    <>
      <Navbar_Exb />
      <Box bgcolor="white" mb={7.5}>
        <Container style={{ backgroundColor: '#0098CE' }}>
          <Carousel
            totalSlides={4}
            visibleSlides={1}
            infinite={true}
            autoPlay={false}
            showDots={true}
            showArrow={false}
            spacing="0px"
          >
            <CarouselCard1new />
            <CarouselCard1new />
            <CarouselCard1new />
            <CarouselCard1new />
          </Carousel>
        </Container>
      </Box>
    </>
  )
}

export default Section1_exb
