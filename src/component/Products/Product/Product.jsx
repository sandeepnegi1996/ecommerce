import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  CardAction,
  Typography,
  IconButton,
  CardActions,
} from '@material-ui/core'

import { AddShoppingCart } from '@material-ui/icons'
import { classes } from 'istanbul-lib-coverage'
import useStyles from './Styles'

const Product = ({ product }) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        tittle={product.name}
      />
      <CardContent>
        <div className='classes.cardContent'>
          <Typography variant='h5' gutterBottom>
            {product.name}
          </Typography>

          <Typography variant='h5'>{product.price}</Typography>
        </div>
        <Typography variant='h6' color='textSecondary'>
          {product.description}
        </Typography>
      </CardContent>

      <CardActions>
        <IconButton aria-label='Add to Card'>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product
