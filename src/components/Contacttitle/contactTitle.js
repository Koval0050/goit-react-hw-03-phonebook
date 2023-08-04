import React from "react";
import PropTypes from "prop-types";
import { ContactTitle } from "./contactTitle.styled";

export const ContactsTitle = ({ text }) => {
  return <ContactTitle>{text}</ContactTitle>;
};

ContactsTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
