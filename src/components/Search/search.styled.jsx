import { styled } from "styled-components";

export const SearhField = styled.div`
`
export const SearchName = styled.label`
display: block;
cursor: pointer;
font-weight: ${props => props.theme.fontWeights.semiBold};
text-align: center;
width: 200px;
margin: ${props => props.theme.space[4]}px auto;
`
export const SearchInput = styled.input`
display: block;
cursor: pointer;
font-weight: ${props => props.theme.fontWeights.semiBold};
text-align: center;
width: 200px;
margin: ${props => props.theme.space[4]}px auto;
`
