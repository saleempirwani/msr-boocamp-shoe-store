import React from 'react'
import { useParams } from 'react-router-dom'
import Shoes from '../shoes.json'


export default function Product() {
    const { id } = useParams()
    // console.log(id)  
    return (
        <div className="card card-alone">
            <div>
                <label>{Shoes[id].name}</label>
                <img src={Shoes[id].img} alt={Shoes[id].name} />
            </div>
        </div >
    )
}