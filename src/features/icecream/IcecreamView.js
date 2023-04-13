import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

export const IcecreamView = props => {
    const noOfIcecream = useSelector((state) => state.icecream.noOfIcecream)
    const dispatch = useDispatch()
    const [value, setValue] = useState(1);
    return (
        <div>
             <h1>Number of Icecream: {noOfIcecream}</h1>
             <button onClick={()=> dispatch(ordered())}>Order Icecream</button>
             <input  type='number' value={value} onChange={(e)=> setValue(parseInt(e.target.value))}/>
             <button onClick={()=> dispatch( restocked(value) )}>Restock Icecream</button>
        </div>
    )
}
