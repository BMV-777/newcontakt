import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

class Forms extends Component {
  state = {
    name: '',
    number: '',
  };
  //===Метод меняющий состояние в полях===//

  onHandleInputData = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  //===Метод который отправляет форму onSubmit===//
  onFormSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    this.props.onSubmit({ name, number });

    this.reset();
  };
  //===Метод очищает поля формы после сабмита===//

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onFormSubmit} className={styles.Form}>
        <h2>Phonebook</h2>
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.onHandleInputData}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={styles.label}>
          Number
          <br />
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.onHandleInputData}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={styles.btnSubmit}>
          Add contacts
        </button>
      </form>
    );
  }
}

Forms.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default Forms;
