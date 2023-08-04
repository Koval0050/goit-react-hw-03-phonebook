import React from "react";
import PropTypes from "prop-types";
import { MainTitle } from "./maintitle.styled";

export const Title = ({ text }) => {
  return <MainTitle>{text}</MainTitle>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
