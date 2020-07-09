import React from 'react'
import { Link } from 'react-router-dom'
import Shoes from '../shoes.json'

export default function Product() {
    return (
        <div className="card">
            {Object.keys(Shoes).map((shoe, i) => {
                // console.log(shoe)
                return (
                    <div key={i}>
                        <Link to={`/${shoe}`}>
                            <label>{Shoes[shoe].name}</label>
                            <img src={Shoes[shoe].img} alt={Shoes[shoe].name} />
                        </Link>
                    </div>
                )
            })}
        </div >
    )
}