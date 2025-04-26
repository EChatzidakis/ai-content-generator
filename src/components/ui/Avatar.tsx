import React from 'react';
import Avatar from '@mui/material/Avatar';

interface AvatarProps {
  name?: string;
  src?: string;
}

const MyAvatar: React.FC<AvatarProps> = ({ name = '', src = '/globe.svg' }) => {
  return (
    <Avatar alt={name} src={src} sx={{ width: 56, height: 56 }} />
  );
};

export default MyAvatar;
