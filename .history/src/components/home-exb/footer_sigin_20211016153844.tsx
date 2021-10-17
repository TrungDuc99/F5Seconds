import { Paragraph } from '@component/Typography'
import { Box, Container, Grid, styled, TextField } from '@material-ui/core'
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
          <Box py={2} overflow="hidden">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <h1 style={{ color: '#fff', fontSize: '40px' }}>
                  Đăng ký vay ngay với Bimmer
                </h1>
                <Paragraph style={{ color: '#fff' }} mb={2.5} color="grey.500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                  libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
                  et lectus vel ut sollicitudin elit at amet.
                </Paragraph>
              </Grid>

              <Grid item xs={6}>
                <TextField
                  style={{
                    color: '#86868B',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    width: '300px',
                    height: '50px',
                  }}
                  size="big"
                  id="outlined-basic"
                  label="Nhập số điện thoại / Email..."
                  variant="outlined"
                ></TextField>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer_sigin
