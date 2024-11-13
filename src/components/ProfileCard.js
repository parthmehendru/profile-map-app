import React from 'react';
import { Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProfileCard = ({ profile, onSummaryClick }) => (
  <Card style={{ width: '250px' }}>
    <CardContent>
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <Link to={`/profile/${profile.id}`}>View Details</Link>
      <Button onClick={() => onSummaryClick(profile.location)} variant="contained" color="primary">
        Show on Map
      </Button>
    </CardContent>
  </Card>
);

export default ProfileCard;
