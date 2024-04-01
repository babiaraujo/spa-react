import React, { Component } from 'react';
import api from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      loading: true,
      error: null
    };
  }

  async componentDidMount() {
    try {
      const response = await api.get('');
      this.setState({ members: response.data, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  }

  render() {
    const { members, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h1>Membros do repositório do Github da AWS</h1>
        <ul>
          {members.map(member => (
            <li key={member.id}>
              <h2>
                <strong>Nome: </strong>
                {member.name}
              </h2>
              <img src={member.avatar_url} alt={`${member.name}'s avatar`} />
              <p>Login: {member.login}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
