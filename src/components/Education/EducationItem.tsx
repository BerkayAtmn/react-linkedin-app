import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
  display: flex;
   flex-direction: column;
  align-items: center;
   justify-content: center;
  padding: 60px;
  background-color: white;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 40px;
`;

const EducationHeader = styled.h2`
  margin-right: 50px;
`;

const EducationImage = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  margin-right: 40px;
`;

const EducationDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center; /* Center text within the column */
  align-items: center; /* Center content horizontally */
`;

const SchoolName = styled.h3`
  margin: 0;
`;

const Degree = styled.h4`
  margin: 5px 0;
  color: gray;
`;

const Duration = styled.p`
  margin: 5px 0;
  color: gray;
`;

const Description = styled.p`
  margin: 0;
`;

type EducationItemProps = {
  school: string;
  degree: string;
  duration: string;
  description: string;
};

const EducationItem: React.FC<EducationItemProps> = ({ school, degree, duration, description }) => {
  return (
    <EducationContainer>
      <EducationDetails>
        <SchoolName>{school}</SchoolName>
        <Degree>{degree}</Degree>
        <Duration>{duration}</Duration>
        <Description>{description}</Description>
      </EducationDetails>
    </EducationContainer>
  );
};

export default EducationItem;