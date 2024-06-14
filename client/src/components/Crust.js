import React, { useEffect } from 'react'

const crustArr = [
    { crust: 'Thin Crust', price: "$0" },
    { crust: 'Thick Crust', price: "$2" },
    { crust: 'Gluten-free Crust', price: "$3" },
]

const Crust = ({ selectedCrust, setSelectedCrust }) => {

    const handleChange = (e) => {
        const choosenCrust = crustArr.find((crust) => crust.crust === e.target.value)
        setSelectedCrust(choosenCrust)
    }



    return (
        <div className='crust-container'>
            <h4 className='crust-heading'>Please select the crust type</h4>
            <div className='crust'>
                <select value={selectedCrust.crust} onChange={handleChange}>
                    <option>Choose</option>
                    {crustArr.map((crust, indx) => {
                        return <option value={crust.crust} key={indx}>{crust.crust}</option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default Crust
