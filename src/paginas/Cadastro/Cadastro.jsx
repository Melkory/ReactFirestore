import React, {Component} from 'react';
import { Link } from "react-router-dom";
import firebase from '../../Firebase/Firebase';

class Cadastro extends Component{
    constructor(props){
      super(props);
      this.state = {
        nome: "",
        sobrenome: "",
        datanascimento: "",
        email: "",
        senha: "",
        uid: ""
      }

      this.gravar = this.gravar.bind(this);

    }

    async gravar () {

      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .then ( async (retorno) => {
            
          await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            datanascimento: this.state.datanascimento,
            email: this.state.email,
            senha: this.state.senha,
            uid: retorno.user.uid
          });

          alert("Usuário cadastrado com sucesso!");

          window.location.href = "./";

        }).catch((error) => {
          let mensagem = '';
    
          if (error.code === 'auth/invalid-email') {
            mensagem = 'Email inválido!';
          } else if (error.code === 'auth/weak-password') {
            mensagem = 'Senha muito curta. A senha deve ter pelo menos 6 caracteres!';
          } else if (error.code === 'auth/email-already-in-use') {
            mensagem = 'Este email já está cadastrado!';
          } else {
            mensagem = 'Erro ao cadastrar usuário: ' + error.message;
          }
    
          alert(mensagem);
        });
    }

    render(){
      return(
        <div>

            <h1>Cadastro</h1>
            <input type="text" placeholder='Email' onChange={(e) => this.setState({email: e.target.value})}  />
            <br/>
            <input type="password" placeholder='Senha' onChange={(e) => this.setState({senha: e.target.value})} />
            <br/>
            <input type="text" placeholder='Nome' onChange={(e) => this.setState({nome: e.target.value})} />
            <br/>
            <input type="text" placeholder='Sobrenome' onChange={(e) => this.setState({sobrenome: e.target.value})} />
            <br/>
            <label>Data de Nascimento: </label>
            <input type="date" onChange={(e) => this.setState({datanascimento: e.target.value})} />
            <br/>
            <button onClick={this.gravar}>Gravar</button>
            <Link to="/"><button>Página Inicial</button></Link>

        </div>
      )
    }
}

export default Cadastro;