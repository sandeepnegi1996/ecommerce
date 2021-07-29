import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
} from '@material-ui/core'

import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './Styles'

const Product = ({ product }) => {
  const classes = useStyles()

  console.log(product)

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        tittle={product.name}
      />
      <CardContent>
        <div className='classes.cardContent'>
          <Typography variant='h5' gutterBottom>
            {product.name}
          </Typography>

          <Typography variant='h5'>
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography variant='h6' color='textSecondary'></Typography>
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
