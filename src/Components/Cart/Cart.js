import React, {useState, useContext} from 'react'
import { db } from '../../firebase/firebase'
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore'
//import {cartContext} from '../../context/cartContext'


const Cart = () => {

  //const {products} = useContext(cartContext)

  const [idVenta, setIdVenta] = useState("")

  const datosComprador = {
    nombre: 'Roger',
    apellido: 'Romero',
    email: 'r.romero@gmail.com',
  }

  const finalizarCompra = () => {
    const ventasCollection = collection(db, 'ventas');
    addDoc(ventasCollection, {
      datosComprador,
      items: [{ nombre: "polera",id:1 }, { nombre: "televisor",id:2 }],
      date: serverTimestamp(),
      total: 500
    })
    .then((result) =>{
      setIdVenta(result.id)
    })
    
    const updateCollection = doc(db, "productos","6Xg3xbwRmYMwc9yDGlZ1");
    updateDoc(updateCollection,{stock:10})

  }

  return (
    <>
      <div>Cart</div>
      <button onClick={finalizarCompra}>Realizar Compra</button>
    </>
  )
}

export default Cart