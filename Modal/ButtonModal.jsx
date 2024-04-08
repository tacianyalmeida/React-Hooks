const ButtonModal = ({setModal}) =>{
    return(
        <button onClick={(handle) => setModal(true)}>Abrir Modal</button>
    )
}
export default ButtonModal;