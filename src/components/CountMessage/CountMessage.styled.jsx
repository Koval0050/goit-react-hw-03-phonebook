import { styled } from "styled-components";

export const CountMessageStyled = styled.p`
text-align: center;
margin: ${props => props.theme.space[4]}px;
font-weight: ${props => props.theme.fontWeights.semiBold};
`