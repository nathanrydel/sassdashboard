import React from 'react';
import styled from 'styled-components';
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import Badge from './Badge';
import ProfileImage from  "..//assets/ProfileImage01.jpg";
import { darkThemeColor } from '../utils';


function Sidebar() {
    return (
    <Container>
            <ProfileContainer>
                <Avatar src= {ProfileImage} />
                <Name>Ryan Anderson</Name>
                <Badge content="Pro" />
            </ProfileContainer>
            <LinksContainer>
                <Links>
                    <Link>
                        <RiHomeLine />
                        <h3>Dashboard</h3>
                    </Link>
                    <Link>
                        <RiFileCopyLine />
                        <h3>Projects</h3>
                    </Link>
                    <Link>
                        <FaWallet />
                        <h3>Invoices</h3>
                    </Link>
                    <Link>
                        <AiOutlinePieChart />
                        <h3>Reports</h3>
                    </Link>
                </Links>
            </LinksContainer>
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
    height: 7rem;
    width: 60%;
    border-radius: 50%;
    margin-top: 18%;
`;

const Name = styled.h1`
    color: white;
    font-size: 1.5rem;
    font-weight: 400;
    margin: .75rem 0 .5rem 0;
`;

const LinksContainer = styled.div`
    background-color: ${darkThemeColor};
    height: 100%;
    width: 100%;
    border-radius: 1rem;
`;

const Links = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    padding-top: 1.5rem;
    height: 48%;
    margin-right: 15px;
`;

const Link = styled.li`
    margin-left: 25%;
    margin-bottom: 2rem;
    display: flex;
    gap: 1rem;
    color: #e4e4e4;
    cursor: pointer;
    h3 {
        font-weight: 300;
    }
    svg {
        font-size: 1.2rem;
        margin-top: 2%;
    }
`;
// const Container = styled.div``;

export default Sidebar
