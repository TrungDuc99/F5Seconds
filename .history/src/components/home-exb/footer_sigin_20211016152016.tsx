import AppStore from '@component/AppStore'
import Image from '@component/BazarImage'
import Facebook from '@component/icons/Facebook'
import Google from '@component/icons/Google'
import Instagram from '@component/icons/Instagram'
import Twitter from '@component/icons/Twitter'
import Youtube from '@component/icons/Youtube'
import { Paragraph } from '@component/Typography'
import { Box, Container, Grid, styled } from '@material-ui/core'
import Link from 'next/link'
import React, { FC } from 'react'

// styled component
const StyledLink = styled('a')(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: '0.3rem 0rem',
  color: theme.palette.grey[500],
  cursor: 'pointer',
  borderRadius: 4,

  '&:hover': {
    color: theme.palette.grey[100],
  },
}))

const Footer_sigin: FC = () => {
  return (
    <footer>
      <Box bgcolor="#0098CE">
        <Container sx={{ p: '1rem', color: 'white' }}>
          <Box py={10} overflow="hidden">
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Link href="/">
                  <a>
                    <Image mb={2.5} src="/assets/images/logo.svg" alt="logo" />
                  </a>
                </Link>

                <Paragraph mb={2.5} color="grey.500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                  libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
                  et lectus vel ut sollicitudin elit at amet.
                </Paragraph>

                <AppStore />
              </Grid>

              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Link href="/">
                  <a>
                    <Image mb={2.5} src="/assets/images/logo.svg" alt="logo" />
                  </a>
                </Link>

                <Paragraph mb={2.5} color="grey.500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                  libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
                  et lectus vel ut sollicitudin elit at amet.
                </Paragraph>

                <AppStore />
              </Grid>



              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  )
}

const aboutLinks = [
  'Careers',
  'Our Stores',
  'Our Cares',
  'Terms & Conditions',
  'Privacy Policy',
]

const customerCareLinks = [
  'Help Center',
  'How to Buy',
  'Track Your Order',
  'Corporate & Bulk Purchasing',
  'Returns & Refunds',
]

const iconList = [
  { icon: Facebook, url: 'https://www.facebook.com/UILibOfficial' },
  { icon: Twitter, url: 'https://twitter.com/uilibofficial' },
  {
    icon: Youtube,
    url: 'https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg',
  },
  { icon: Google, url: '/' },
  { icon: Instagram, url: 'https://www.instagram.com/uilibofficial/' },
]

export default Footer_sigin
