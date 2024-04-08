import React from "react";
// estado
// o estado de uma aplicacão representa as caracteristicas dela naquele momento.

// const App = () => {
//     const ativo = true 
//      return(
//         <button>{ativo ? "Botão ativo":
//         "Botão inativo"}</button>
//      )
// }
// export default App;

// // Hooks   

// // os hooks são funçoes expeciais do react que permitem
//  controlarmos o estado e o ciclo de vida de componetes
//   funcionais. 

//-----------------------------------------//

// //React.useState
// // O React.useState é um função que  retorna um array com 2 valores
// // O primeiro valor guara o dado do estado atual, pode ser qualquer 
// // tipo de dado como strings, arrays, boolean, null, undefined e  ojetos 
// o Segundo valor é uma função que pode ser utilizada para modificar o estado 
// do primeiro valor. 

// const App = ()=>{
//     const [ativo, setAtivo] = React.useState(true)
//     const [contar, setContar] = React.useState(0)
// return(
//     <> 
//     <button onClick={()=> setAtivo(!ativo)}>
//         {ativo ? "Ativo": "Inativo"}
//     </button>


//     <button onClick={()=>setContar(contar + 1)}> {contar}</button>
//     </>
// )

// } 
// export default App;