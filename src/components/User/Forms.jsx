import { Component } from 'react';
import '../Contener/Contaner.modul.css';
import { nanoid } from 'nanoid';

class Forms extends Component {
  state = {
    // contacts: [],
    name: '',
    number: '',
  };

  nameInputId = nanoid(4);
  numberInputId = nanoid(4);

  handlerSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handelChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <label htmlFor={this.nameInputId} className="input-text">
          Name
          <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handelChange}
            id={this.nameInputId}
          />
        </label>
        <br />
        <label htmlFor={this.numberInputId} className="input-text">
          Number
          <br />
          <input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handelChange}
            id={this.numberInputId}
          />
        </label>
        <br />
        <button type="submit" className="btm">
          Add contacts
        </button>
      </form>
    );
  }
}

export default Forms;
