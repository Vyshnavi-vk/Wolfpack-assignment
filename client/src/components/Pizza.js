import React, { useEffect, useState } from 'react'
import PizzaSize from './PizzaSize'
import Toppings from './Toppings'
import Crust from './Crust'

const Pizza = () => {
    const [selectedSize, setSelectedSize] = useState({ size: '', price: '' })
    const [selectedToppings, setSelectedToppings] = useState({ toppings: [], prices: [] })
    const [selectedCrust, setSelectedCrust] = useState({ crust: '', price: '' })
    const [total, setTotal] = useState(0)

    const calculatePrice = () => {
        const sizePrice = Number(selectedSize.price.slice(1))
        const crustPrice = Number(selectedCrust.price.slice(1))
        const toppingsPrices = selectedToppings.prices.map(price => Number(price.slice(1)));
        const toppingsTotal = toppingsPrices.reduce((acc, sum) => {
            return acc + sum
        }, 0)

        setTotal(sizePrice + crustPrice + toppingsTotal)
    }

    useEffect(() => {
        calculatePrice()
    }, [selectedSize, selectedCrust, selectedToppings])
    console.log(total)

    return (
        <div className='container'>
            <div className='heading'>
                <h2>Customize your Pizza</h2>
            </div>

            <PizzaSize
                setSelectedSize={setSelectedSize}
                selectedSize={selectedSize}
            />

            <Toppings
                selectedToppings={selectedToppings}
                setSelectedToppings={setSelectedToppings}
            />

            <Crust selectedCrust={selectedCrust} setSelectedCrust={setSelectedCrust} />

            {total > 0 && <div className='totalPrice'>Total Price: ${total}</div>}
        </div>
    )
}

export default Pizza
