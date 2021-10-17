import { Box, Container, Grid, styled } from '@material-ui/core'
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
            <Grid container spacing={3}></Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer_sigin
