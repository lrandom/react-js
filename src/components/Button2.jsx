import { useState } from "react"

const Button2 = ({content})=>{
    const [counter, setCounter] =useState(0);

    const _updateCounter = ()=>{
        setCounter(counter+1)
    }

    return (
        <button className='btn'
        onClick={()=>{_updateCounter()}}
        >
            {content} {counter}
        </button>
    )
}

export default Button2;