import React ,{useContext} from 'react'
import { CountContext } from './contextcomponent'


function componentF() {
    const countContext= useContext(CountContext)
  return (
    <div>
        componentF
        <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
        <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default componentF