import React from "react";
import PropTypes from "prop-types";
import {
  NameInputTitle,
  NameInput,
  PhoneInputTitle,
  PhoneInput,
  SectionInputs,
  Submit,
} from "./addform.styled";

export class InputForm extends React.Component {
  state = {
    name: "",
    number: "",
  };

  // handleInputsChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // };

  handleInputsChange = ({ target: { name, value } }) => {
    if (name === "name") {
      const nameRegex = /^[a-zA-Zа-яА-ЯІіЇїЄєҐґ\s'-]+$/;
      if (value !== "" && !nameRegex.test(value)) {
        alert(
          "Name may contain only letters, apostrophe, dash, spaces, and Cyrillic characters. For example Adrian, Jacob Mercer, Іван, Олена"
        );
        return;
      }
    } else {
      const phoneRegex = /^[+\-\d]+$/;
      if (value !== "") {
        if (!phoneRegex.test(value)) {
          alert("Phone may contain only +, -, and digits.");
          return;
        }
        if (value.length > 15) {
          alert("Phone number should not exceed 15 characters.");
          return;
        }
      }
    }
    this.setState({ [name]: value });
  };

  // const ChangePhone = (e) => {
  //   const { value } = e.currentTarget;

  //   setId(shortid.generate());
  //   setPhone(value);
  // };

  reset() {
    this.setState({ name: "", number: "" });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const newContactData = {
      name: this.state.name,
      number: this.state.number,
    };

    this.props.addContact(newContactData);
    this.reset();
  };

  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  render() {
    const { name, number } = this.state;

    return (
      <SectionInputs onSubmit={this.handleSubmit}>
        <NameInputTitle className="name">Name</NameInputTitle>
        <NameInput
          type="text"
          name="name"
          value={name}
          onChange={this.handleInputsChange}
          required
        />
        <PhoneInputTitle className="number">Number</PhoneInputTitle>
        <PhoneInput
          type="tel"
          name="number"
          value={number}
          onChange={this.handleInputsChange}
          required
        />

        <Submit type="submit">Add contact</Submit>
      </SectionInputs>
    );
  }
}
