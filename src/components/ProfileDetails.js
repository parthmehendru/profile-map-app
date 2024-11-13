import React from 'react';
import { useParams } from 'react-router-dom';
import { profiles } from '../data';

const ProfileDetails = () => {
  const { id } = useParams();
  const profile = profiles.find(p => p.id === parseInt(id));

  if (!profile) {
    return <p>Profile not found</p>;
  }

  return (
    <div>
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <p>Contact: contact@example.com</p> {/* Replace with real data */}
    </div>
  );
};

export default ProfileDetails;
