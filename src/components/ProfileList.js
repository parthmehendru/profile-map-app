import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import MapComponent from './MapComponent';
import { profiles } from '../data';

const ProfileList = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSummaryClick = (location) => {
    setSelectedLocation(location);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm) ||
    profile.description.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h2>Profile List</h2>
      <input
        type="text"
        placeholder="Search profiles..."
        onChange={handleSearchChange}
        style={{ padding: '10px', width: '80%', maxWidth: '400px', marginBottom: '20px' }}
      />
      <div className="container">
        {filteredProfiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} onSummaryClick={handleSummaryClick} />
        ))}
      </div>
      {selectedLocation && <MapComponent location={selectedLocation} />}
    </div>
  );
};

export default ProfileList;
