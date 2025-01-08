import { useState } from 'react'
import Button from './Button'

const AddToCartButton = ({ handleAddToCart }) => {
    return (
        <Button
          className="bg-indigo-600 text-white py-2 mt-2 rounded-md hover:bg-indigo-500 transition 
          duration-300 w-full"
            onClick={handleAddToCart}
        >
          Add to cart
        </Button>
    )
}

export default AddToCartButton