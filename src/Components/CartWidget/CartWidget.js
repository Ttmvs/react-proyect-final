import React, { useContext } from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { cartContext } from '../../Context/CartContext';


const CartWidget = () => {

  const { qtyProducts } = useContext(cartContext);

  return (
    <>
      <ShoppingBasketIcon color="action" fontSize="large" />
      <p>{qtyProducts}</p>
    </>
  )
}

export default CartWidget