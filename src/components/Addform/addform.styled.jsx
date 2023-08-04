import { styled } from "styled-components";
export const SectionInputs = styled.form`
width: 500px;
margin: auto;
font-size: ${props => props.theme.fontSizes.m}
`

export const NameInputTitle = styled.label`
display: block;
cursor: pointer;
font-weight: ${props => props.theme.fontWeights.semiBold};
text-align: center;
width: 200px;
margin: ${props => props.theme.space[4]}px auto;
`

export const NameInput = styled.input`
display: block;
font-weight: ${props => props.theme.fontWeights.semiBold};
width: 200px;
margin: ${props => props.theme.space[4]}px auto;
font-size: ${props => props.theme.fontSizes.m}
`
export const PhoneInputTitle = styled.label`
display: block;
text-align: center;
cursor: pointer;
font-weight: ${props => props.theme.fontWeights.semiBold};
width: 200px;
margin: ${props => props.theme.space[4]}px auto;
`

export const PhoneInput = styled.input`
display: block;
width: 200px;
font-weight: ${props => props.theme.fontWeights.semiBold};
margin: ${props => props.theme.space[4]}px auto;
font-size: ${props => props.theme.fontSizes.m}
`
export const Submit = styled.button`
display: block;
cursor: pointer;
margin: auto;
width: ${props => props.theme.space[7]}px;
background: ${props => props.theme.colors.backnorm};
text-transform: capitalize;
padding: ${props => props.theme.space[3]}px ${props => props.theme.space[3]}px;
border-radius: ${props => props.theme.radii.medium};
box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
&:hover, &:focus {
    border: ${props => props.theme.borders.normal};
    background: ${props => props.theme.colors.backhover};
    box-shadow: inset -1px -1px 4px #ffffff, inset 1px 1px 5px #ceced1;
  } 
  &:active {
    box-shadow: 5px 5px #666;
    transform: translateY(4px);
  } 
`
