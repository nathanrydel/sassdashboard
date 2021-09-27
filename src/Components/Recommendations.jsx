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
        <ProjectInfo>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio velit aut dolores explicabo quis, architecto cupiditate adipisci,
          illo harum molestiae voluptatem. Cumque id debitis dolor nemo eaque quos delectus reiciendis tempora eius, nulla quibusdam optio,
          non vero ducimus sunt nostrum!
        </ProjectInfo>
        <PriceContainer>
          <Price>7.4k/month</Price>
          <Badge content='Full Time' clean />
        </PriceContainer>
      </CardContent>
    </RecommendProject>
  );
}

const RecommendProject = styled.div``;

const CardContent = styled.div``;

const ProjectInfo = styled.div``;

const Detail = styled.div``;

const InfoContainer = styled.div``;

const Profile = styled.div``;

const Info = styled.div``;

const ProfileName = styled.div``;

const ProfileUpdate = styled.div``;

const Title = styled.div``;

const ProjectInfo = styled.div``;

const PriceContainer = styled.div``;
export default Recommendations;
