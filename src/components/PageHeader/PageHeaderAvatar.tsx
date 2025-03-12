'use client';
import React from 'react';
import { useAuthStore } from '../../store/auth/authStore';
import { signOut } from 'next-auth/react';
import { Avatar, AvatarInitials, Dropdown } from '../ui';

const PageHeaderAvatar = () => {
  const user = useAuthStore((state) => state.user);
  
  if (!user) {
    return <React.Fragment />;
  }

  const handleRenderAvatar = () => {
    if (!user.image) {
      return <AvatarInitials name={user.name} />;
    }
    const username = user.name;
    const image = user.image || '/globe.svg';
    return <Avatar name={username} src={image} />
  };

  const handleSignOut = () => signOut();
  const signOutItem = <div onClick={handleSignOut}>Sign out</div>;
  const dropdownItems = [signOutItem];

  return (
    <Dropdown listItems={dropdownItems}>
      {handleRenderAvatar()}
    </Dropdown>
  );
};

export default PageHeaderAvatar;
