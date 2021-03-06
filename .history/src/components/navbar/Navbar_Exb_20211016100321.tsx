import BazarCard from '@component/BazarCard'
import BazarImage from '@component/BazarImage'
import FlexBox from '@component/FlexBox'
import NavLink from '@component/nav-link/NavLink'
import navbarNavigations from '@data/navbarNavigations'
import { Box, Container, MenuItem, styled } from '@material-ui/core'
import ArrowRight from '@material-ui/icons/ArrowRight'
import React, { FC } from 'react'

// component props interface
export interface NavbarProps {
  navListOpen?: boolean
  hideCategories?: boolean
}
// NavList props interface
interface Nav {
  title: string
  url: string
  child: Nav[]
  extLink?: boolean
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
const StyledNavLink = styled(NavLink)(() => ({ ...navLinkStyle }))

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
  height: '100%',
}))

const Navbar: FC<NavbarProps> = () => {
  const renderNestedNav = (list: any[], isRoot = false) => {
    return list?.map((nav: Nav) => {
      if (isRoot) {
        if (nav.url && nav.extLink)
          return (
            <StyledNavLink
              href={nav.url}
              key={nav.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {nav.title}
            </StyledNavLink>
          )
        else if (nav.url)
          return (
            <StyledNavLink href={nav.url} key={nav.title}>
              {nav.title}
            </StyledNavLink>
          )
        if (nav.child)
          return (
            <FlexBox
              position="relative"
              flexDirection="column"
              alignItems="center"
              key={nav.title}
              sx={{
                '&:hover': {
                  '& > .child-nav-item': {
                    display: 'block',
                  },
                },
              }}
            >
              <Box sx={navLinkStyle}>{nav.title}</Box>
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
                  {renderNestedNav(nav.child)}
                </BazarCard>
              </Box>
            </FlexBox>
          )
      } else {
        if (nav.url)
          return (
            <NavLink href={nav.url} key={nav.title}>
              <MenuItem>{nav.title}</MenuItem>
            </NavLink>
          )

        if (nav.child)
          return (
            <ParentNav position="relative" minWidth="230px" key={nav.title}>
              <MenuItem color="grey.700">
                <Box flex="1 1 0" component="span">
                  {nav.title}
                </Box>
                <ArrowRight fontSize="small" />
              </MenuItem>
              <ParentNavItem className="parent-nav-item" pl={1}>
                <BazarCard sx={{ py: '0.5rem', minWidth: '230px' }} elevation={3}>
                  {renderNestedNav(nav.child)}
                </BazarCard>
              </ParentNavItem>
            </ParentNav>
          )
      }
    })
  }

  return (
    <NavBarWrapper elevation={2} hoverEffect={false}>
      <InnerContainer sx={{ justifyContent: 'flex-first' }}>
        <BazarImage
          src="/assets/images/exbImage/icon-exb.png"
          alt="apple-watch-1"
          sx={{
            mx: 'auto',
            maxHeight: 50,
            maxWidth: 150,
          }}
        />
        <FlexBox>{renderNestedNav(navbarNavigations, true)}</FlexBox>
      </InnerContainer>
    </NavBarWrapper>
  )
}

export default Navbar
