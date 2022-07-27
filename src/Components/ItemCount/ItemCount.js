import React, { useState } from 'react'

const ItemCount = ({ initial, onAdd, stock }) => {

    const [Producto, setProducto] = useState(initial);

    const sumar = () => {
        Producto < stock && setProducto (Producto + 1)
        Producto >= stock && alert('No hay suficiente stock del producto')
    }
    
    const restar = () => {
        Producto > 0 && setProducto (Producto - 1)
    }

    const agregar = () => {
        onAdd(Producto);
    }

    return (
        <div style={styles.container}>
            <div style={styles.containerButtons}>
                <button style={styles.button} onClick={() => restar()}>-</button>
                <h2>{Producto}</h2>
                <button style={styles.button} onClick={() => sumar()}>+</button>
            </div>
            <button style={styles.buttonAdd} onClick={() => agregar()}>Agregar al carrito</button>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px'
    },
    button: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "black",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
        margin: "10px",
    },
    containerButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonAdd: {
        width: "30%",
        height: "50%",
        borderRadius: "50%",
        backgroundColor: "Black",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
    }

}

export default ItemCount
