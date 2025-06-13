'use client';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';

interface AvatarInitialsProps {
  name?: string;
}

const AvatarInitials: React.FC<AvatarInitialsProps> = ({ name = 'U' }) => {
  const getInitials = (name: string) => {
    const nameArray = name.split(' ');
    if (nameArray.length > 1) {
      return nameArray.map((name) => name[0]).join('');
    }
    return name[0];
  };

  const initials = getInitials(name);
  return (
    <Avatar sx={{ bgcolor: deepPurple[500] }}>
      {initials}
    </Avatar>
  );
};

export default AvatarInitials;
