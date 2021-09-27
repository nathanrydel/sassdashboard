import React from 'react';
import styled from 'styled-components';
import Badge from './Badge';
import ProfileImage from '../assets/ProfileImage04.jpg';
import { cardShadow, hoverEffect } from '../utils';

function Recommendations() {
  return (
    <RecommendProject>
      <CardContent>
        <Detail>
          <InfoContainer>
            <Profile>
              <img src={ProfileImage} alt='User profile' />
            </Profile>
            <Info>
              <ProfileName> Guerillmo Collins</ProfileName>
              <ProfileUpdate>Updated 7m ago</ProfileUpdate>
            </Info>
          </InfoContainer>
          <Badge content='Design' />
        </Detail>
        <Title>Need a graphic designer to update my business's branding</Title>
        <ProjectInfo>Looking for a graphic</ProjectInfo>
      </CardContent>
    </RecommendProject>
  );
}

export default Recommendations;
