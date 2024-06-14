import React, { useEffect } from 'react'

const pizzaSizesArr = [
    { size: 'Small', price: '$8' },
    { size: 'Medium', price: '$10' },
    { size: 'Large', price: '$12' },
]

const PizzaSize = ({ setSelectedSize, selectedSize }) => {

    const handleChange = (e) => {
        const choosenSize = pizzaSizesArr.find((pizza) => pizza.size === e.target.value)
        setSelectedSize(choosenSize)
    }


    return (
        <div className='size-container'>
            <h4>Please select the size of Pizza 🍕🍕</h4>
            <div className='sizes'>
                {pizzaSizesArr.map((pizza, indx) => {
                    return (
                        <label key={indx}>
                            <input
                                type='radio'
                                name="pizzaSize"
                                value={pizza.size}
                                onChange={handleChange}
                            />
                            {pizza.size}
                        </label>
                    )
                })}
            </div>
        </div>
    )
}

export default PizzaSize
