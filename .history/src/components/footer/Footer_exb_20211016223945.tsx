import Image from '@component/BazarImage'
import { Box, Container, Grid, IconButton } from '@material-ui/core'
import React, { FC } from 'react'
import './footer.css'
// styled component

const Footer_exb: FC = () => {
  const handleCallHotLine = () => {
    console.log('đường dây nóng')
  }
  return (
    <footer>
      <Box bgcolor="#fff">
        <Container sx={{ p: '1rem', color: 'white' }}>
          <Box py={2} overflow="hidden">
            <Grid container spacing={3}>
              <Grid
                item
                xs={3}
                spacing={3}
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                <Image
                  className="icons"
                  display="block"
                  height="28px"
                  src="/assets/images/exbImage/icons/call-calling.svg"
                  alt="logo"
                  onClick={handleCallHotLine}
                />

                <h2
                  style={{
                    color: '#005F92',
                    padding: 10,
                    fontWeight: 'normal',
                    fontSize: '25px',
                    lineHeight: '28px',
                  }}
                >
                  Hotline 24/7 1800 1199
                </h2>
              </Grid>

              <Grid item xs={3} style={{ display: 'flex', flexDirection: 'row' }}>
                <IconButton>
                  <Image
                    display="block"
                    height="28px"
                    src="/assets/images/exbImage/icons/message-search.svg"
                    alt="logo"
                    style={{ color: '#005F92', height: 40, width: 40 }}
                  />
                </IconButton>

                <h2
                  style={{
                    color: '#005F92',
                    padding: 10,
                    fontWeight: 'normal',
                    fontSize: '25px',
                    lineHeight: '28px',
                  }}
                >
                  Tỷ gíá ngoại tệ giá vàng
                </h2>
              </Grid>
              <Grid item xs={3} style={{ display: 'flex', flexDirection: 'row' }}>
                <Image
                  display="block"
                  height="28px"
                  src="/assets/images/exbImage/icons/card.svg"
                  alt="logo"
                  style={{
                    color: '#005F92',
                    height: 40,
                    width: 40,
                    justifyContent: 'center',
                  }}
                />

                <h2
                  style={{
                    padding: 10,
                    color: '#005F92',
                    fontWeight: 'normal',
                    fontSize: '25px',
                    lineHeight: '28px',
                  }}
                >
                  ATM và Địa điểm giao dịch
                </h2>
              </Grid>
              <Grid
                item
                xs={3}
                spacing={3}
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                <IconButton>
                  <Image
                    display="block"
                    height="28px"
                    src="/assets/images/exbImage/icons/message-question.svg"
                    alt="logo"
                    style={{ color: '#005F92', height: 40, width: 40 }}
                  />
                </IconButton>
                <h2
                  style={{
                    color: '#005F92',
                    padding: 10,
                    fontWeight: 'normal',
                    fontSize: '25px',
                    lineHeight: '28px',
                  }}
                >
                  Câu hỏi thường gặp
                </h2>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer_exb
