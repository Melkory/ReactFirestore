import React, { Component } from 'react';
import { Link } from "react-router-dom";
import firebase from '../../Firebase/Firebase';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: ""
    }

    this.acessar = this.acessar.bind(this);
  }

  async acessar () {

    await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
      .then(() => {
        window.location.href = "./principal";
      })
      .catch((erro) => {
        alert("Erro ao realizar login! Usuário não encontrado ou credenciais inválidas!");
      });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type="text" placeholder='Email' onChange={(e) => this.setState({ email: e.target.value })} />
        <br />
        <input type="password" placeholder='Senha' onChange={(e) => this.setState({ senha: e.target.value })} />
        <br />

        <button onClick={this.acessar}>Acessar</button>

        <Link to="/"><button>Página Inicial</button></Link>
      </div>
    )
  }
}

export default Login;