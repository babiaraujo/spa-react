import React, { Component } from 'react'
import api from './api';
//import user from './user';

class App extends Component{

  state= {
    members: [],
  }

  async componentDidMount(){
    const response = await api.get('');

    this.setState({ members: response.data});
  }


  render(){

    const { members }= this.state;
    return(
      <div>
        <h1>Membros do repositório do Github da AWS</h1>
        {console.log(members)}
        {members.map(member => (
          <li key={member.id}>

            <h2><strong>Nome: </strong>
            {member.name}
            </h2>
            <img src={member.avatar_url}/>
            <p> Login: {member.login}</p>
            <p></p>

          </li>

        ))}
      </div>
    );
  };
};

export default App;