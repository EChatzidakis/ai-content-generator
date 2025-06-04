'use client';
import React from 'react';
import styled from 'styled-components';
import { useAuthStore } from '../../store/auth/authStore';
import { signOut } from 'next-auth/react';
import { Avatar, AvatarInitials, Menu } from '../UI';

const FlexWrapper = styled.div``;

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
    return <Avatar name={username} src={image} />;
  };

  const handleSignOut = () => signOut();
  const signOutMenuItem = {
    label: 'Sign out',
    onClick: handleSignOut
  };
  const dropdownItems = [signOutMenuItem];

  return (
    <FlexWrapper>
      <Menu listItems={dropdownItems}>{handleRenderAvatar()}</Menu>
    </FlexWrapper>
  );
};

export default PageHeaderAvatar;
