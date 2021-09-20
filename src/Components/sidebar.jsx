import React from 'react';
import styled from 'styled-components';
import Badge from './Badge';
import ProfileImage from  "..//assets/ProfileImage01.jpg";
import { darkThemeColor } from '../utils';


function Sidebar() {
    return (<Container>
            <ProfileContainer>
                <Avatar src= {ProfileImage} />
                <Name>Ryan Anderson</Name>
                <Badge content="Pro" />
            </ProfileContainer>
    </Container>
    );
}

const Container = styled.div`
    width:20%;
    height: 100% !important;
    border-radius: 1rem;
    background-color: #030e1f;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`;

const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Avatar = styled.img`
    height: 6rem;
    border-radius: 5rem;
    margin-top: 18%auto;
`;

const Name = styled.h1`
    color: white;
    font: 1.25rem;
    font-weight: 400;
    margin: .75rem 0 .5rem 0;
`;

const Container = styled.div``;

export default Sidebar
