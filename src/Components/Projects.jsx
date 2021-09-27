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

export default Projects;
