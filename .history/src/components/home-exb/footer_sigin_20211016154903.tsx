import { Paragraph } from '@component/Typography'
import {
  Box,
  Container,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  styled,
} from '@material-ui/core'
import LoginIcon from '@material-ui/icons/Login'
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
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

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

              <Grid
                item
                xs={6}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '100px',
                }}
              >
                <Input
                  style={{
                    color: '#86868B',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    width: '300px',
                    height: '50px',
                  }}
                  label="Nhập số điện thoại / Email..."
                  id="standard-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        <LoginIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer_sigin
