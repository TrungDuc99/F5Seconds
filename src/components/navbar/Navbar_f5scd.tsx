import BazarCard from '@component/BazarCard'
import BazarImage from '@component/BazarImage'
import FlexBox from '@component/FlexBox'
import NavLink from '@component/nav-link/NavLink'
import { H4 } from '@component/Typography'
import { Box, Container, MenuItem, styled } from '@material-ui/core'
import ArrowRight from '@material-ui/icons/ArrowRight'
import React, { FC } from 'react'
// component props interface
export interface NavbarProps {
  navListOpen?: boolean
  hideCategories?: boolean
}
// const common css style
const navLinkStyle = {
  cursor: 'pointer',
  marginRight: '2rem',
  transition: 'color 150ms ease-in-out',
  '&:hover': {
    color: 'primary.main',
  },
  '&:last-child': {
    marginRight: '0',
  },
}
// style components

const ParentNav = styled(Box)(({ theme }) => ({
  '&:hover': {
    color: theme.palette.primary.main,
    '& > .parent-nav-item': {
      display: 'block',
    },
  },
}))

const ParentNavItem = styled(Box)(() => ({
  display: 'none',
  position: 'absolute',
  top: 0,
  left: '100%',
  zIndex: 5,
}))

const NavBarWrapper = styled(BazarCard)(({ theme }) => ({
  backgroundColor: '#005F92',
  display: 'block',
  position: 'relative',
  height: '60px',
  borderRadius: '0px',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

const InnerContainer = styled(Container)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  maxWidth: '100%',
}))

const Navbar: FC<NavbarProps> = () => {
  const listMenu = [
    {
      title: 'Giới thiệu',
      child: [
        {
          title: 'Thông tin công ty',
          url: '/home-1',
        },
        {
          title: 'Cổ đông',
          url: '/home-2',
        },
        {
          title: 'Đối tác',
          url: '/home-3',
        },
      ],
    },
    {
      title: 'Sản phẩm dịch vụ',
      child: [
        {
          title: 'Sale Page',
          child: [
            {
              title: 'Version 1',
              url: '/sale-page-1',
            },
            {
              title: 'Version 2',
              url: '/sale-page-2',
            },
          ],
        },
        {
          title: 'Vendor',
          child: [
            {
              title: 'All vendors',
              url: '/shops',
            },
            {
              title: 'Vendor store',
              url: '/shop/34324',
            },
          ],
        },
        {
          title: 'Shop',
          child: [
            {
              title: 'Search product',
              url: '/product/search/mobile phone',
            },
            {
              title: 'Single product',
              url: '/product/34324321',
            },
            {
              title: 'Cart',
              url: '/cart',
            },
            {
              title: 'Checkout',
              url: '/checkout',
            },
            {
              title: 'Alternative Checkout',
              url: '/checkout-alternative',
            },
            {
              title: 'Order confirmation',
              url: '/order-confirmation',
            },
          ],
        },
      ],
    },
    {
      title: 'Tuyển dụng',
      child: [
        {
          title: 'Orders',
          child: [
            {
              title: 'Order List',
              url: '/orders',
            },
            {
              title: 'Order Details',
              url: '/orders/5452423',
            },
          ],
        },
        {
          title: 'Profile',
          child: [
            {
              title: 'View Profile',
              url: '/profile',
            },
            {
              title: 'Edit Profile',
              url: '/profile/edit',
            },
          ],
        },
        {
          title: 'Address',
          child: [
            {
              title: 'Address List',
              url: '/address',
            },
            {
              title: 'Add Address',
              url: '/address/512474',
            },
          ],
        },
        {
          title: 'Support tickets',
          child: [
            {
              title: 'All tickets',
              url: '/support-tickets',
            },
            {
              title: 'Ticket details',
              url: '/support-tickets/512474',
            },
          ],
        },
        {
          title: 'Wishlist',
          url: '/wish-list',
        },
      ],
    },
    {
      title: 'Liên hệ',
      child: [
        {
          title: 'Dashboard',
          url: '/vendor/dashboard',
        },
        {
          title: 'Products',
          child: [
            {
              title: 'All products',
              url: '/vendor/products',
            },
            {
              title: 'Add/Edit product',
              url: '/vendor/products/248104',
            },
          ],
        },
        {
          title: 'Orders',
          child: [
            {
              title: 'All orders',
              url: '/vendor/orders',
            },
            {
              title: 'Order details',
              url: '/vendor/orders/248104',
            },
          ],
        },
        {
          title: 'Profile',
          url: '/vendor/account-settings',
        },
      ],
    },
  ]

  const renderNestedNav = (listMenu: any[], isRoot = false) => {
    return listMenu?.map((item, index) => {
      if (isRoot) {
        return (
          <FlexBox
            position="relative"
            flexDirection="column"
            alignItems="center"
            key={item.title}
            sx={{
              '&:hover': {
                '& > .child-nav-item': {
                  display: 'block',
                },
              },
            }}
          >
            <Box color="white" sx={navLinkStyle}>
              {item.title}
            </Box>
            <Box
              className="child-nav-item"
              sx={{
                display: 'none',
                position: 'absolute',
                left: 0,
                top: '100%',
                zIndex: 5,
              }}
            >
              <BazarCard
                sx={{
                  mt: '1.25rem',
                  py: '0.5rem',
                  minWidth: '230px',
                }}
                elevation={3}
              >
                {renderNestedNav(item.child)}
              </BazarCard>
            </Box>
          </FlexBox>
        )
      } else {
        if (item.url)
          return (
            <NavLink href={item.url} key={item.title}>
              <MenuItem>{item.title}</MenuItem>
            </NavLink>
          )

        if (item.child)
          return (
            <ParentNav position="relative" minWidth="230px" key={item.title}>
              <MenuItem color="grey.700">
                <Box flex="1 1 0" component="span">
                  {item.title}
                </Box>
                <ArrowRight fontSize="small" />
              </MenuItem>
              <ParentNavItem className="parent-nav-item" pl={1}>
                <BazarCard sx={{ py: '0.5rem', minWidth: '230px' }} elevation={3}>
                  {renderNestedNav(item.child)}
                </BazarCard>
              </ParentNavItem>
            </ParentNav>
          )
      }
    })
  }

  return (
    <NavBarWrapper elevation={2} hoverEffect={false}>
      <InnerContainer sx={{ justifyContent: 'flex-center' }}>
        <BazarImage
          src="/assets/images/f5seconds/logo_f5seconds.png"
          alt="hinh-thuong-hieu"
          sx={{
            maxHeight: 70,
            maxWidth: 250,
          }}
        />
        <FlexBox>{renderNestedNav(listMenu, true)}</FlexBox>
      </InnerContainer>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <BazarImage
          src="assets/images/f5seconds/banner-header.jpg"
          alt="hinh-thuong-hieu"
          sx={{
            maxHeight: '100%',
            maxWidth: '100%',
          }}
        ></BazarImage>

        <h1
          style={{
            fontSize: '6.5rem',
            lineHeight: '6.5rem',
            letterSpacing: '0.5rem',
            margin: 'auto',
            padding: '10px',
            color: 'rgba(255, 255, 255, 0.7)',
            position: 'absolute',

            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          F5SECONDS
        </h1>
        <h2
          style={{
            fontSize: '1.25rem',
            lineHeight: '6.5rem',
            letterSpacing: '0.8rem',
            margin: 'auto',
            padding: '10px',
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, 30%)',
            color: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          Giải pháp công nghệ 5 giây
        </h2>
      </Box>
      <Box
        bgcolor="#000000"
        height="234px"
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <H4
          style={{
            margin: 'auto',
            width: '100%',
            padding: '10px',
            textAlign: 'center',
          }}
        >
          Copyright © F5seconds 2020
        </H4>
      </Box>
    </NavBarWrapper>
  )
}

export default Navbar
