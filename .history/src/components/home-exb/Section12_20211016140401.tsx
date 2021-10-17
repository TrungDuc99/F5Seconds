import BazarCard from '@component/BazarCard'
import BazarImage from '@component/BazarImage'
import CreditCardVerified from '@component/icons/CreditCardVerified'
import CustomerService from '@component/icons/CustomerService'
import Shield from '@component/icons/Shield'
import Truck from '@component/icons/Truck'
import { Button, Container, Grid } from '@material-ui/core'
import { Box } from '@material-ui/system'
import React, { FC } from 'react'
import { H4, Span } from '../Typography'

const Section12: FC = () => {
  return (
    <Container sx={{ mb: '70px' }}>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>
        Sản phẩm của chúng tôi
      </h1>
      <p style={{ display: 'flex', justifyContent: 'center' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna leo turpis
        sodales nibh felis non at venenatis. Mattis tortor nunc, augue et elit
        ultricies.{' '}
      </p>
      <Grid container spacing={3}>
        {serviceList.map((item, ind) => (
          <Grid item lg={3} md={6} xs={12} key={ind}>
            <BazarCard
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                p: '1rem',
                height: '100%',
                width: '100%',
                borderRadius: '8px',
              }}
              hoverEffect
            >
              <BazarImage
                sx={{
                  maxHeight: 200,
                  maxWidth: 200,
                }}
                src={item.image}
                alt="hinh-san-pham"
              ></BazarImage>
              <Box
                style={{
                  height: '100%',
                  width: '100%',
                  padding: 10,
                }}
              >
                {' '}
                <H4
                  mt={-1.5}
                  mb={1.25}
                  style={{ fontSize: '22px', lineHeight: '24px' }}
                  textAlign="center"
                >
                  {item.title}
                </H4>
                <Span textAlign="center" color="grey.600">
                  We offer competitive prices on our 100 million plus product any
                  range.
                </Span>
                <Button>
                  <H4
                    mt={3.5}
                    mb={1.25}
                    style={{
                      fontSize: '15px',
                      lineHeight: '17px',
                      color: '#0098CE',
                    }}
                    textAlign="center"
                  >
                    Xem chi tiết
                  </H4>
                </Button>
              </Box>
            </BazarCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const serviceList = [
  {
    icon: Truck,
    title: 'Bất động sản',
    image: '/assets/images/exbImage/production/prd-batdongsan.jpg',
  },
  {
    icon: CreditCardVerified,
    title: 'Tiêu dùng',
    image: '/assets/images/exbImage/production/prd-tieudung.jpg',
  },
  {
    icon: Shield,
    title: 'Ô tô',
    image: '/assets/images/exbImage/production/prd-oto.jpg',
  },
  {
    icon: CustomerService,
    title: 'Thẻ tín dụng',
    image: '/assets/images/exbImage/production/prd-thetindung.jpg',
  },
  {
    icon: CustomerService,
    title: 'Xe máy',
    image: '/assets/images/exbImage/production/prd-xemay.jpg',
  },
  {
    icon: CustomerService,
    title: 'tín chấp',
    image: '/assets/images/exbImage/production/prd-tinchap.jpg',
  },
]

export default Section12
