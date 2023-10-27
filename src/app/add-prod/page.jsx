"use client"
import { useState } from "react";

export default function AddProduto() {

  const [produto, setProduto] = useState({
    id: 0,
    nome: "",
    tipo: "",
    desc: "",
    img:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/dados/produto-api-add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <h1>ADD-PROD</h1>
      <p>Adicione um produto</p>
       
       <div>
        <form className="formProd" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Novo Produto</legend>
            <div>
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" value={produto.nome} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="tipo">Tipo:</label>
              <input type="text" id="tipo" name="tipo" value={produto.tipo} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="desc">Descrição:</label>
              <textarea id="desc" name="desc" value={produto.desc} onChange={handleChange}></textarea>
            </div>
            <div>
              {/*Adicionar um campo para adicionar uma imagem da máquina do usuário*/}
              <label htmlFor="img">Imagem:</label>
              <input type="file" id="img" name="img" value={produto.img} onChange={handleChange}/>
            </div>
            <div>
              <button>Enviar</button>
            </div>
          </fieldset>
        </form>
       </div>

    </div>
  )
}

