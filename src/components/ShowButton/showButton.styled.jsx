import { styled } from "styled-components";

export const VisibleNoVisibleButton = styled.button`
display: block;
cursor: pointer;
margin: ${props => props.theme.space[3]}px auto;
width: ${props => props.theme.space[7]}px;
background: ${props => props.theme.colors.backnorm};
text-transform: capitalize;
padding: ${props => props.theme.space[3]}px ${props => props.theme.space[3]}px;
border-radius: ${props => props.theme.radii.medium};
box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
&:hover {
    border: ${props => props.theme.borders.normal};
    background: ${props => props.theme.colors.backhover};
    box-shadow: inset -1px -1px 4px #ffffff, inset 1px 1px 5px #ceced1;
  } 
  &:active {
    box-shadow: 5px 5px #666;
    transform: translateY(4px);
  } 
`

