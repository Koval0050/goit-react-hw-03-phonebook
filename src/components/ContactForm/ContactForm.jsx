import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeInput = option => {
    this.setState({
      id: nanoid(),
    });
    this.setState({
      [option.target.name]: option.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.getInfoForm(this.state);
  };

  render() {
    return (
      <form
        className={css.formContact}
        onSubmit={e => {
          this.handleSubmit(e);
        }}
      >
        <label>
          <p className={css.labelText}>
            Name
          </p>
          <input
            className={css.formInput}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChangeInput}
          />
        </label>
        <label>
          <p className={css.labelText}>
            Tel
          </p>
          <input
            className={css.formInput}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChangeInput}
          />
        </label>
        <button className={css.btnForm} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
