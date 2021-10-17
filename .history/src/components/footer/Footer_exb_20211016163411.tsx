import { Box, Container, Grid, IconButton, styled } from '@material-ui/core'
import AtmIcon from '@material-ui/icons/Atm'
import LiveHelpIcon from '@material-ui/icons/LiveHelp'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg'
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

const Footer_exb: FC = () => {
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
                <IconButton aria-label="delete">
                  <PermPhoneMsgIcon style={{ color: '#005F92' }}></PermPhoneMsgIcon>
                </IconButton>

                <h2
                  style={{
                    color: '#005F92',

                    fontSize: '22px',
                    lineHeight: '28px',
                  }}
                >
                  Hotline 24/7 1800 1199
                </h2>
              </Grid>

              <Grid item xs={3} style={{ display: 'flex', flexDirection: 'row' }}>
                <IconButton aria-label="delete">
                  <MonetizationOnIcon
                    style={{ color: '#005F92' }}
                  ></MonetizationOnIcon>
                </IconButton>

                <h2 style={{ color: '#005F92' }}>Tỷ gíá ngoại tệ giá vàng</h2>
              </Grid>
              <Grid item xs={3} style={{ display: 'flex', flexDirection: 'row' }}>
                <IconButton aria-label="delete">
                  <AtmIcon style={{ color: '#005F92' }}></AtmIcon>
                </IconButton>

                <h2 style={{ color: '#005F92' }}>ATM và Địa điểm giao dịch</h2>
              </Grid>
              <Grid
                item
                xs={3}
                spacing={3}
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                <IconButton aria-label="delete">
                  <LiveHelpIcon style={{ color: '#005F92' }}></LiveHelpIcon>
                </IconButton>

                <h2 style={{ color: '#005F92' }}>Câu hỏi thường gặp</h2>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer_exb
