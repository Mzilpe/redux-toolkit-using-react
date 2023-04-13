import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

export const CakeView = () => {
    
    const noOfCakes = useSelector(state => state.cake.noOfCakes)
    const dispatch = useDispatch();
    return (
        <div>
             <h1>Number of Cakes: {noOfCakes}</h1>
             <button onClick={ () => dispatch(ordered())}>Order Cake</button>
             <button onClick={ () => dispatch(restocked(5))}>Restock Cake</button>
        </div>
    )
}
