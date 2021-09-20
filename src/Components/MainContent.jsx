import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

function MainContent() {
    return (
        <Container>
            <Navbar />
            <SubContainer>
                <SectionOne>
                    <ColumnOne1></ColumnOne1>
                    <ColumnTwo1></ColumnTwo1>
                </SectionOne>
                <SectionTwo>
                    <ColumnOne2></ColumnOne2>
                    <ColumnTwo2></ColumnTwo2>
                </SectionTwo>
            </SubContainer>
        </Container>
    );
}

const Container = styled.div`
    width: 80%;
    background: linear-gradient(to bottom right, white 0%right, #bcc3db 70%);
    border-bottom-right-radius: 2rem;
    border-top-right-radius: 2rem;
    margin: 1rem 8rem 1rem 4rem;
`;

const SubContainer = styled.div``;

const SectionOne = styled.div``;

const SectionTwo = styled.div``;

const ColumnOne1 = styled.div``;

const ColumnOne2 = styled.div``;

const ColumnTwo1 = styled.div``;

const ColumnTwo2 = styled.div``;

export default MainContent
