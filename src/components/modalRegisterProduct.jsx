import "./modalRegisterProduct.css"
const ModalRegisterProduct = () => {
   return(
    <div className="modal-register-product">
        <h1>Cadastrar novo produto</h1>
        <input placeholder="Id do produto"></input>
        <input placeholder="Nome do produto"></input>
        <input placeholder="Quantidade"></input>

        <button className="btn-register">Cadastrar</button>
    </div>
   )
}
export default ModalRegisterProduct;