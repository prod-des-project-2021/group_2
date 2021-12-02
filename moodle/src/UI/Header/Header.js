import AccountCircle from '@mui/icons-material/AccountCircle'
import BuildIcon from '@mui/icons-material/Build'
import CalendarViewMonthRoundedIcon from '@mui/icons-material/CalendarViewMonthRounded'
import CloseIcon from '@mui/icons-material/Close'
import HomeIcon from '@mui/icons-material/Home'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import MenuIcon from '@mui/icons-material/Menu'
import MessageIcon from '@mui/icons-material/Message'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import SpeedIcon from '@mui/icons-material/Speed'
import {
  AppBar,
  Badge,
  Box,
  Divider,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
} from '@mui/material'
import { alpha, styled } from '@mui/material/styles'
import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import AuthContext from '../../store/auth-context'
import styles from './styles.module.css'

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

export default function Header() {
  const history = useHistory()
  const authCtx = useContext(AuthContext)
  const mainColor = '#F7931E'
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [clicked, setClicked] = React.useState(false)

  const isMenuOpen = Boolean(anchorEl)
  const {name} = authCtx.userInfo.userInfo
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  const logoutHandler = () => {
    authCtx.logout()
    if (!authCtx.isLoggedIn) {
      history.push('/login')
    }
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
        marginTop: '0.7em',
      }}
    >
      <MenuItem onClick={handleMenuClose} style={{ justifyContent: 'center' }}>
       {name}
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
      <MenuItem onClick={handleMenuClose} type='submit'>
        <SpeedIcon className={styles.padding_right} />
        Desktop
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <PersonIcon className={styles.padding_right} />
        <Link to='profile' className={styles.link}>Credentials</Link>
        
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <BuildIcon className={styles.padding_right} />
        Preferences
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
      <MenuItem onClick={handleMenuClose}>
        <CalendarViewMonthRoundedIcon className={styles.padding_right} />
        Evaluations
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <MessageIcon className={styles.padding_right} />
        Messages
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <CalendarViewMonthRoundedIcon className={styles.padding_right} />
        Calender
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <PersonIcon className={styles.padding_right} />
        Private files
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
      <MenuItem onClick={logoutHandler}>
        <LogoutRoundedIcon className={styles.padding_right} />
        Sign out
      </MenuItem>
    </Menu>
  )

  return (
    <Box>
      <AppBar position='static' className={styles.header}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
            onClick={clickedMenuHandler}
          >
            {!clicked && <MenuIcon style={{ color: mainColor }} />}
            {clicked && <CloseIcon style={{ color: mainColor }} />}
          </IconButton>
          <Box className={styles.logo_wrapper}>
            <img
              className={styles.logo}
              src='https://idp.oamk.fi/idp/images/logo_vari_300dpi_EN.jpg'
              alt='oamk logo'
            />
          </Box>

          <IconButton
            size='large'
            aria-label='show 4 new mails'
            color='inherit'
          >
            <Badge color='error'>
              <HomeIcon style={{ color: mainColor }} />
            </Badge>
          </IconButton>
          <IconButton
            size='large'
            aria-label='show 4 new mails'
            color='inherit'
          >
            <Badge color='error'>
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
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            <IconButton
              size='large'
              aria-label='show 4 new mails'
              color='inherit'
            >
              <Badge color='error'>
                <NotificationsIcon style={{ color: mainColor }} />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              aria-label='show 17 new notifications'
              color='inherit'
            >
              <Badge color='error'>
                <MessageIcon style={{ color: mainColor }} />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
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
