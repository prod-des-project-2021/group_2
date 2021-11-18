import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Badge from '@mui/material/Badge'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'
import NotificationsIcon from '@mui/icons-material/Notifications'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import CloseIcon from '@mui/icons-material/Close'
import Divider from '@mui/material/Divider'
import SpeedIcon from '@mui/icons-material/Speed'
import PersonIcon from '@mui/icons-material/Person'
import BuildIcon from '@mui/icons-material/Build'
import CalendarViewMonthRoundedIcon from '@mui/icons-material/CalendarViewMonthRounded'
import MessageIcon from '@mui/icons-material/Message'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import HomeIcon from '@mui/icons-material/Home'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

export default function CourseHeader() {
  const mainColor = '#F7931E'
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [clicked, setClicked] = React.useState(false)

  const isMenuOpen = Boolean(anchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const clickedMenuHandler = () => {
    setClicked(!clicked)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{
        marginTop: '0.75em',
        boxShadow: 'none',
      }}
    >
      <MenuItem onClick={handleMenuClose}>Huy Bui</MenuItem>
      <Divider sx={{ my: 0.5 }} />
      <MenuItem onClick={handleMenuClose}>
        <SpeedIcon style={{ paddingRight: '10px' }} />
        Desktop
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <PersonIcon style={{ paddingRight: '10px' }} />
        Credentials
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <BuildIcon style={{ paddingRight: '10px' }} />
        Preferences
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
      <MenuItem onClick={handleMenuClose}>
        <CalendarViewMonthRoundedIcon style={{ paddingRight: '10px' }} />
        Evaluations
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <MessageIcon style={{ paddingRight: '10px' }} />
        Messages
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <CalendarViewMonthRoundedIcon style={{ paddingRight: '10px' }} />
        Calender
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <PersonIcon style={{ paddingRight: '10px' }} />
        Private files{' '}
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
      <MenuItem onClick={handleMenuClose}>
        <LogoutRoundedIcon style={{ paddingRight: '10px' }} />
        Sign out{' '}
      </MenuItem>
    </Menu>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#fff' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={clickedMenuHandler}
          >
            {!clicked && <MenuIcon style={{ color: mainColor }} />}
            {clicked && <CloseIcon style={{ color: mainColor }} />}
          </IconButton>
          <Card sx={{ maxWidth: 270 }}>
            <CardMedia
              component="img"
              height="70"
              image="https://www.oamk.fi/images/oamk/oamk-logo2.png"
            />
          </Card>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge color="error">
              <HomeIcon style={{ color: mainColor }} />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge color="error">
              <SpeedIcon style={{ color: mainColor }} />
            </Badge>
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Search style={{ color: mainColor }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge color="error">
                <NotificationsIcon style={{ color: mainColor }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge color="error">
                <MessageIcon style={{ color: mainColor }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle style={{ color: 'grey' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {renderMenu}
    </Box>
  )
}
