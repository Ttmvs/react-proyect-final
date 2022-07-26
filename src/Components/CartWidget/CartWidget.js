import React, { useContext } from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { cartContext } from '../../Context/CartContext';


const CartWidget = () => {

  const { qProducts } = useContext(cartContext);

  return (
    <>
      <ShoppingBasketIcon color="action" fontSize="large" />
      <p>{qProducts}</p>
    </>
  )
}

export default CartWidget