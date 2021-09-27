import React from 'react';
import styled from 'styled-components';
import ProfileImage from '..//assets/ProfileImage02.jpg';
import ProfileImage02 from '..//assets/ProfileImage03.jpg';
import { cardShadow, hoverEffect, themeColor } from '..//utils';

function Projects() {
  return (
    <UserProjects>
      <Project>
        <Profile>
          <img src={ProfileImage} alt='user profile' />
        </Profile>
        <Description>
          <Title>Branding Photography Studio</Title>
          <SubTitle>1 day remaining</SubTitle>
        </Description>
      </Project>
      <Project>
        <Profile>
          <img src={ProfileImage02} alt='user profile' />
        </Profile>
        <Description>
          <Title>eCommerce Logo redesign and branding</Title>
          <SubTitle>4 days remaining</SubTitle>
        </Description>
      </Project>
      <AllProjects>See all projects</AllProjects>
    </UserProjects>
  );
}

const UserProjects = styled.div`
  height: 70%;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;

const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;

const Profile = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;

const Description = styled.div`
  margin-left: 1rem;
`;

const Title = styled.h3`
  font-weight: 500;
`;
export default Projects;
