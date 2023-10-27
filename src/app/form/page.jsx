"use client"
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Form() {

    //Recuperar os dados do formulário e adicionando em um objeto;
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    })

    //Função para atualizar o estado do objeto usuario;
    function handleChange(event) {
        const { name, value } = event.target;
        setUsuario({...usuario, [name]: value
        })
    }

    //Função para enviar os dados do formulário para o servidor;
    function handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            body: JSON.stringify(usuario)
        })
        .then(response =>{
            response.json();
            if(!response.ok) {
                throw new Error(response.statusText);
            }
        })
        .then(data =>{ 
            console.log(data),
            setUsuario(data)
    })
        .catch(error => console.log(error));

        redirect('/form');
    }
        
  return (
    <div>
        <h1>Form</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="idEmail">Email</label>
                <input type="email" id="idEmail" name="email" value={usuario.email} onChange={handleChange}/>
                <label htmlFor="idPassword">Senha</label>
                <input type="password" id="idPassword" name="password" value={usuario.password} onChange={handleChange}/>
                <button>Enviar</button>
            </form>
        </div>
    </div>
  )
}