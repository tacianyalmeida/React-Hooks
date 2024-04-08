import React from "react";


const Reatividade = () =>{
    const[items, setItems] = React.useState(["Item 1", 
"Item 2"])

function handleClick(){
    setItems([...items, "Novo Item "])
}
return(
    <>
{items.map((item, index) => (
<li key={index}>{item}</li>

))}
<button onClick ={handleClick}>Adicionar Item</button></>
)
}

export default Reatividade