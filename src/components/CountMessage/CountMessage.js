import React from "react";
import PropTypes from "prop-types";
import { CountMessageStyled } from "./CountMessage.styled";

export const CountMessage = ({ text }) => {
  return <CountMessageStyled>{text}</CountMessageStyled>;
};

CountMessage.propTypes = {
  text: PropTypes.string.isRequired,
};
