import { Box, Container, Grid, styled } from '@material-ui/core'
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
              <Grid item xs={3}>
                <PermPhoneMsgIcon></PermPhoneMsgIcon>
              </Grid>

              <Grid
                item
                xs={3}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '100px',
                }}
              >
                sadasd
              </Grid>
              <Grid
                item
                xs={3}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '100px',
                }}
              >
                asdsd
              </Grid>
              <Grid
                item
                xs={3}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '100px',
                }}
              >
                asds
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer_exb
