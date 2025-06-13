'use client';
import React from 'react';
import Avatar from '@mui/material/Avatar';

interface AvatarProps {
  name?: string;
  src?: string;
}

const MyAvatar: React.FC<AvatarProps> = ({ name = '', src = '/globe.svg' }) => {
  return (
    <Avatar alt={name} src={src} />
  );
};

export default MyAvatar;
