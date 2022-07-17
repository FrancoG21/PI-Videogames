import styled from "styled-components";

export const AllPaginate = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 960px) {
        margin-bottom: 70px;
        margin-left: 15px;
        margin-right: 15px;
    }
`

export const ButtonPaginate = styled.button`
    font-size: 1rem;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    color: #fff;
    background-color: ${(props) => props.theme.secondary};
    border-color: ${(props) => props.theme.secondary};
    transition: all 0.3s linear 0s;
    margin-left: 5px;
    margin-right: 5px;
    border: none;

    &:hover {
    color: ${(props) => props.theme.secondary};
    background-color: ${(props) => props.theme.primary};
    transform: scale(1.15);
    cursor: pointer;
    }
`