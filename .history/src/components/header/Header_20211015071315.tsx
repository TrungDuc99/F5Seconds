import BazarButton from '@component/BazarButton'
import Image from '@component/BazarImage'
import CategoryMenu from '@component/categories/CategoryMenu'
import FlexBox from '@component/FlexBox'
import Category from '@component/icons/Category'
import ShoppingBagOutlined from '@component/icons/ShoppingBagOutlined'
import MiniCart from '@component/mini-cart/MiniCart'
import Login from '@component/sessions/Login'
import { useAppContext } from '@context/app/AppContext'
import {
  Badge,
  Box,
  Container,
  Dialog,
  Drawer,
  IconButton,
  styled,
  useMediaQuery,
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import PersonOutline from '@material-ui/icons/PersonOutline'
import { layoutConstant } from '@utils/constants'
import clsx from 'clsx'
import Link from 'next/link'
import React, { FC, useState } from 'react'

// component props interface
interface HeaderProps {
  className?: string
  isFixed?: boolean
}

// styled component
export const HeaderWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  height: layoutConstant.headerHeight,
  background: theme.palette.background.paper,
  transition: 'height 250ms ease-in-out',

  [theme.breakpoints.down('sm')]: {
    height: layoutConstant.mobileHeaderHeight,
  },
}))

const Header: FC<HeaderProps> = ({ isFixed, className }) => {
  const [sidenavOpen, setSidenavOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  const toggleSidenav = () => setSidenavOpen(!sidenavOpen)
  const toggleDialog = () => setDialogOpen(!dialogOpen)

  const { state } = useAppContext()
  const { cartList } = state.cart

  const cartHandle = (
    <Badge badgeContent={cartList.length} color="primary">
      <Box
        component={IconButton}
        ml={2.5}
        bgcolor="grey.200"
        p={1.25}
        onClick={toggleSidenav}
      >
        <ShoppingBagOutlined />
      </Box>
    </Badge>
  )

  return (
    <HeaderWrapper className={clsx(className)}>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <FlexBox
          alignItems="center"
          mr={2}
          minWidth="170px"
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          <Link href="/">
            <a>
              <Image height={28} mb={0.5} src="/assets/images/logo.svg" alt="logo" />
            </a>
          </Link>

          {isFixed && (
            <CategoryMenu>
              <FlexBox color="grey.600" alignItems="center" ml={2}>
                <BazarButton color="inherit">
                  <Category fontSize="small" color="inherit" />
                  <KeyboardArrowDown fontSize="small" color="inherit" />
                </BazarButton>
              </FlexBox>
            </CategoryMenu>
          )}
        </FlexBox>

        <FlexBox alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Box
            component={IconButton}
            ml={2}
            p={1.25}
            bgcolor="grey.200"
            onClick={toggleDialog}
          >
            <PersonOutline />
          </Box>
          {cartHandle}
        </FlexBox>

        <Dialog
          open={dialogOpen}
          fullWidth={isMobile}
          scroll="body"
          onClose={toggleDialog}
        >
          <Login />
        </Dialog>

        <Drawer open={sidenavOpen} anchor="right" onClose={toggleSidenav}>
          <MiniCart />
        </Drawer>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
