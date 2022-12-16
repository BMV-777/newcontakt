import './App.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';

import Container from 'components/Contener/Container';
import Forms from 'components/User/Forms';
import UserList from 'components/User/UserList';
// import { node } from 'prop-types';
// import './components/Contener/Contaner.modul.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  addTodo = e => {
    console.log(e);

    const contacts = {
      id: nanoid(),
      name: e,
      number: '',
    };

    this.setState(prevState => ({
      contacts: [contacts, ...prevState.contacts],
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
    this.addTodo();
  };

  // name = nanoid();

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <Container>
          <Forms onSubmit={this.formSubmitHandler} />
        </Container>
        <h2>Contacts</h2>
        <UserList contacts={contacts} />
      </div>
    );
  }
}

export default App;
