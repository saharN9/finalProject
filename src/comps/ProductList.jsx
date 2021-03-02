import React from 'react'   
import { CardDeck } from 'react-bootstrap';
import ProductThumb from './ProductThumb'
import products from '../products.js'

function ItemsToList(){

    return (
<CardDeck>
{products.map(product => {
return <ProductThumb 
id={product.id}
key={product.id}
src={product.src}
price={product.price}
name={product.name}
description={product.description}/>
})}
</CardDeck>

    )
}
export default ItemsToList;