import { styled } from "styled-components";

export const ContactListContainer = styled.ul`
`
export const ContactListItem = styled.li`
display: flex;
width: 512px;
margin: ${props => props.theme.space[4]}px auto;
justify-content: space-between;
` 
export const ContactsName = styled.p`
display: flex;
margin: 0;
width: ${props => props.theme.space[7]}px;
align-items: center;
`
export const ContactsPhone = styled.p`
margin: 0;
display: flex;
width: ${props => props.theme.space[7]}px;
align-items: center;
`
export const DeleteContacts = styled.button`
cursor: pointer;
color: red;
font-weight: ${props => props.theme.fontWeights.semiBold};
width: ${props => props.theme.space[7]}px;
background: ${props => props.theme.colors.backnorm};
text-transform: capitalize;
padding: ${props => props.theme.space[3]}px ${props => props.theme.space[3]}px;
border-radius: ${props => props.theme.radii.medium};
box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
&:hover, &:focus {
    color: white;
    border: ${props => props.theme.borders.normal};
    background: ${props => props.theme.colors.backhoverSecond};
    box-shadow: inset -1px -1px 4px #ffffff, inset 1px 1px 5px #ceced1;
  } 
  &:active {
    box-shadow: 5px 5px #666;
    transform: translateY(4px);
  } 
`