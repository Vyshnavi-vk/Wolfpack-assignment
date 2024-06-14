import React, { useEffect } from 'react'

const pizzaToppingsArr = [
    { topping: 'Pepperoni', price: '$1' },
    { topping: 'Mushroom', price: '$1' },
    { topping: 'Onion', price: '$1' }

]

const Toppings = ({ selectedToppings, setSelectedToppings }) => {

    const handleChange = (e) => {
        const { value, checked } = e.target
        const chosenTopping = pizzaToppingsArr.find(topping => topping.topping === value)

        if (checked) {
            setSelectedToppings((prev) => ({
                ...prev,
                toppings: [...prev.toppings, chosenTopping.topping],
                prices: [...prev.prices, chosenTopping.price]
            }))
        }
        else {
            setSelectedToppings((prev) => ({
                ...prev,
                toppings: prev.toppings.filter(topping => topping !== chosenTopping.topping),
                prices: prev.prices.filter((price, index) => prev.toppings[index] !== chosenTopping.topping)
            }))
        }
    }


    return (
        <div className='toppings-container'>
            <h4 className='heading'>Please select the toppings for Pizza </h4>
            <div className='toppings'>
                {pizzaToppingsArr.map((pizza, indx) => {
                    return (
                        <label key={indx}>
                            <input
                                type='checkbox'
                                name="pizzaToppings"
                                value={pizza.topping}
                                onChange={handleChange}
                            />
                            {pizza.topping}
                        </label>
                    )
                })}
            </div>
        </div>
    )
}

export default Toppings
