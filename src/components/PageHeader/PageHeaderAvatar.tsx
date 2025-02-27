'use client';
import React from 'react';
import Avatar from '../ui/Avatar';
import Dropdown from '../ui/Dropdown';
import { useAuthStore } from '../../store/auth/authStore';
import { signOut } from 'next-auth/react';

const PageHeaderAvatar = () => {
  const user = useAuthStore((state) => state.user);
  
  if (!user) {
    return <React.Fragment />;
  }

  const handleSignOut = () => signOut();
  const signOutItem = <div onClick={handleSignOut}>Sign out</div>;
  const dropdownItems = [signOutItem];

  const username = user.name;
  const image = user.image || '/globe.svg';
  return (
    <Dropdown listItems={dropdownItems}>
      <Avatar name={username} src={image} />
    </Dropdown>
  );
};

export default PageHeaderAvatar;
