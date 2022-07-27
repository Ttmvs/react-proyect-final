import React, {useState, useContext} from 'react'
import { db } from '../../firebase/firebase'
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore'
//import {cartContext} from '../../context/cartContext'


const Cart = () => {

  //const {products} = useContext(cartContext)

  const [idVenta, setIdVenta] = useState("")

  const datosComprador = {
    nombre: 'Tomas',
    apellido: 'Diaz',
    email: 'tignacio123@gmail.com',
  }

  const finalizarCompra = () => {
    const ventasCollection = collection(db, 'ventas');
    addDoc(ventasCollection, {
      datosComprador,
      items: [{ nombre: "papa",id:1 }, { nombre: "batata",id:2 }],
      date: serverTimestamp(),
      total: 500
    })
    .then((result) =>{
      setIdVenta(result.id)
    })
    
    const updateCollection = doc(db, "productos","oucRuhKDL7BL2m233p0");
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