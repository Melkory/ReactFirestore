import React, {Component} from 'react';
import { Link } from "react-router-dom";
import firebase from '../../Firebase/Firebase';

class Principal extends Component{
    constructor(props){
      super(props);
      this.state = {
        nome: "",
        sobrenome: "",
        datanascimento: ""
      }
    }

    async componentDidMount() {

        await firebase.auth().onAuthStateChanged( async (usuario) => {

            if(usuario) {
              var uid = usuario.uid;

              await firebase.firestore().collection("usuario").doc(uid).get()
                .then((retorno) => {
                    this.setState({
                      nome: retorno.data().nome,
                      sobrenome: retorno.data().sobrenome,
                      datanascimento: retorno.data().datanascimento
                    });
                });
            }

        });

    }

    render(){
      return(
        <div>
            <h1>Página Principal</h1>

            <div>
              Nome: { this.state.nome } <br/>
              Sobrenome: { this.state.sobrenome } <br/>
              Data de Nascimento: { this.state.datanascimento } <br/>

            </div>

            
            <Link to="/"><button>Home</button></Link>
        </div>
      )
    }
}

export default Principal;