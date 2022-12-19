import './App.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';

import Forms from 'components/User/Forms';
import UserList from 'components/User/UserList';
import data from './data.json';
import Filter from 'components/Filter/Filter';

class App extends Component {
  state = {
    contacts: data,
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    //   this.setState(prevState => ({
    //     contacts: [contacts, ...prevState.contacts],
    //   }));
    // };

    this.setState(({ contacts }) => {
      if (contacts.some(contact => contact.name === name)) {
        return alert(`${name} is already in contacts.`);
      }
      return {
        contacts: [contact, ...contacts],
      };
    });
  };

  // formSubmitHandler = data => {
  //   console.log(data);
  //   this.addTodo();
  // };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  //===Метод меняeющий соcтояния поля Filter===//
  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  //===Метод который ищет пользователя по имени===//
  onSerchByName = () => {
    const { filter, contacts } = this.state;
    const normaLize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normaLize)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.onSerchByName();
    return (
      <div>
        <Forms onSubmit={this.addContact} />
        <Filter
          title="Contacts"
          value={filter}
          onChange={this.onChangeFilter}
        />
        <UserList item={visibleContacts} deleteContact={this.onDeleteContact} />
      </div>
    );
  }
}

export default App;
