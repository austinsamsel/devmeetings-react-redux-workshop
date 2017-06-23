import React from 'react'

function ProductTile({ product }) {
    return (
        <div>
            <header>{ product.name }</header>
            <p>
                { product.description }
            </p>
            <span>{ product.price }$</span>
        </div>
    )
}

export default ProductTile
