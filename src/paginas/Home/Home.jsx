import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Home extends Component{
    constructor(props){
      super(props);
    }

    render(){
      return(
        <div>
            <h1>Home</h1>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cadastro"><button>Cadastro</button></Link>
        </div>
      )
    }
}

export default Home;