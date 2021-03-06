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

const RecommendProject = styled.div`
  border-radius: 1rem;
  height: 125%;
  padding: 1rem;
  background-color: white;
  width: 28vw;
  box-shadow: ${cardShadow};
  transition: 0.5s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;

const CardContent = styled.div`
  margin: 0.5rem;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Profile = styled.div`
  margin-right: 1rem;
  img {
    height: 5rem;
    border-radius: 5rem;
  }
`;

const Info = styled.div``;

const ProfileName = styled.h3`
  font-weight: 500;
`;

const ProfileUpdate = styled.h5`
  font-weight: 300;
`;

const Title = styled.h4`
  font-weight: 500;
`;

const ProjectInfo = styled.p`
  margin: 0 0 0.5rem 0;
  padding: 0;
  font-size: 0.8rem;
  color: #3b3b3b;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: rgba(146, 166, 255, 0.3);
`;

const Price = styled.div``;

export default Recommendations;
