import styled from "styled-components";

export const DivSearch = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const Search = styled.input`
    padding: 5px;
    border: 1px solid ${(props) => props.theme.secondary};
    outline: none;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
`

export const ButtonSearch = styled.button`
    background-color: ${(props) => props.theme.secondary};
    color: #fff;
    padding: 5px;
    border: 1px solid ${(props) => props.theme.secondary};
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    cursor: pointer;
`