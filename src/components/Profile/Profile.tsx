// src/components/Profile/Profile.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import profilePicture from '../../images/download.jpg';
import axios from 'axios';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
  background-color: white;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  margin: 20px;
  
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  margin-right: 40px;
`;

const ProfileDetails = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const ProfileName = styled.h2`
  margin: 0;
  font-size: 35px;
`;

const ProfileTitle = styled.h3`
  margin: 5px 0;
  color: black;
  font-size: 24px;
`;

const ProfileLocation = styled.p`
  margin: 2px 0;
  color: gray;
  font-size: 24px;
`;

const ProfileWorkplace = styled.p`
  margin: 3px 0;
  color: gray;
  font-size: 20px;
`;

const ProfileEducation = styled.p`
  margin: 3px 0;
  color: gray;
  font-size: 20px;
`;

const EditButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
`;

const Input = styled.input`
  margin: 5px 0;
  padding: 8px;
  font-size: 16px;
  width: 300px;
`;

const Profile = () => {
  const [user, setUser] = useState({
    profile: {
      name: '',
      title: '',
      location: '',
      workplace: '',
      education: '',
      profilePicture: '',
    },
    experience: [],
    skills: [],
    education: [],
    awards: [],
    languages: [],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user.profile);

  // Fetch user data from server on component mount
  useEffect(() => {
    axios.get('http://localhost:3000/user')
      .then((response) => {
        setUser(response.data);
        setFormData(response.data.profile); // Set initial form data
      })
      .catch(error => {
        console.error('Failed to fetch user data:', error);
      });
  }, []);

  // Handle input change in edit mode
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Save edited profile data
  const handleSave = () => {
    axios.put('http://localhost:3000/user', formData)
      .then((response) => {
        setUser({
          ...user,
          profile: response.data,
        });
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Failed to update user data:', error);
      });
  };

  return (
    <ProfileContainer>
      <ProfileImage src={profilePicture} alt="Profile" />
      <ProfileDetails>
        {isEditing ? (
          <>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Title"
            />
            <Input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Location"
            />
            <Input
              type="text"
              name="workplace"
              value={formData.workplace}
              onChange={handleInputChange}
              placeholder="Workplace"
            />
            <Input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleInputChange}
              placeholder="Education"
            />
            <EditButton onClick={handleSave}>Save</EditButton>
          </>
        ) : (
          <>
            <ProfileName>{user.profile.name}</ProfileName>
            <ProfileTitle>{user.profile.title}</ProfileTitle>
            <ProfileLocation>{user.profile.location}</ProfileLocation>
            <ProfileWorkplace>{user.profile.workplace}</ProfileWorkplace>
            <ProfileEducation>{user.profile.education}</ProfileEducation>
            <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
          </>
        )}
      </ProfileDetails>
    </ProfileContainer>
  );
};

export default Profile;