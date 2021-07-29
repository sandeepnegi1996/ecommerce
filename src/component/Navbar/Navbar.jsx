import React from 'react'

import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from '@material-ui/core'

import { ShoppingCart } from '@material-ui/icons'

import commerceicon from '../../assets/commerce.png'
import useStyles from './Styles'

const Navbar = () => {
  const classes = useStyles()
  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography variant='6' color='inherit' className={classes.title}>
            <img
              src={commerceicon}
              alt='hashcodehub'
              height='25px'
              className={classes.image}
            />
            Hashcodehub
          </Typography>

          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label='show cart items' color='inherit'>
              <Badge badgeContent={3} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
