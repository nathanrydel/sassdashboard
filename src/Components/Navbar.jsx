import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';


function Navbar() {
    return (
        <NavbarContainer>
            <Text>
                Good morning,
                <span> Ryan</span>
            </Text>
            <InputContainer>
                <Icon>
                    <FiSearch />
                </Icon>
                <Input type="text" placeholder="Search for projects" />
            </InputContainer>
            
        </NavbarContainer>
    );
}

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 12%;
`;

const Text = styled.h1`
    span {
        font-weight: 500;
        color: #484258;
    }
`;

const InputContainer = styled.div`
    display: flex;
`;

const Icon = styled.div`
    height: 3rem;
    width: 3rem;
    background-color: #bcc3db;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: .8rem;
    border-bottom-left-radius: .8rem;
    svg {
        color: #424242;
    }
`;

const Input = styled.input`
    border: none;
    background-color: #bcc3db;
    border-top-right-radius: .8rem;
    border-bottom-right-radius: .8rem;
    &:focus {
        border: none;
        outline: none;
    }

`;

export default Navbar
