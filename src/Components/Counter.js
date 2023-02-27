import {useState} from 'react'
function Counter(){
    const[counter,setCounter] = useState(0);

    const increment = ()=>{
        setCounter(counter+1);
    }

    const decrement=()=>{
        setCounter(counter-1);
    }
    return(
        <div>
            <p style={{fontSize:30+'px'}}>Counter: {counter}</p>
            <button onClick={increment} className='btn btn-success'>+</button>
            <button onClick={decrement} className='btn btn-danger'>-</button>
        </div>
    )
}

export default Counter;