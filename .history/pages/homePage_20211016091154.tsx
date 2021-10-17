import CarouselCard1new from '@component/carousel-cards/CarouselCard1new'
import Carousel from '@component/carousel/Carousel'
import Navbar from '@component/navbar/Navbar'
import { Box, Container } from '@material-ui/core'
import React, { FC, Fragment } from 'react'
const HomePage: FC = () => {
  return (
    <Fragment>
      <Navbar />
      <Box bgcolor="white" mb={7.5}>
        <Container style={{ backgroundColor: '#0098CE' }} sx={{ py: '2rem' }}>
          <Carousel
            totalSlides={2}
            visibleSlides={1}
            infinite={true}
            autoPlay={false}
            showDots={true}
            showArrow={false}
            spacing="0px"
          >
            <CarouselCard1new />
            <CarouselCard1new />
          </Carousel>
        </Container>
      </Box>
    </Fragment>
  )
}

export default HomePage
