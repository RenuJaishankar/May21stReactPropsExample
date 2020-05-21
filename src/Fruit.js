import React from 'react'

const Fruit = (props) => {
return(
   <div>
    <span>Fruits and Types</span>
     <h2> {props.name} </h2>
     <h2> {props.state} </h2>
   </div>
   )

}
export default Fruit