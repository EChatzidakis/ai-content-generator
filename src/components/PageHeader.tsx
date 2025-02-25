'use client';
import React, { useEffect, useState } from 'react';
import Avatar from './ui/Avatar';
import Header from './ui/Header';
import { useSession } from 'next-auth/react';

const PageHeader = () => {
  const { data: session } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (session) {
      console.log(session);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [session]);

  const renderAvatar = () => {
    if (!isLoggedIn) {
      return <React.Fragment />;
    }
    if (!session || !session.user) {
      return <React.Fragment />;
    }
    const user = session.user;
    const username = user.name || '';
    const image = user.image || '/globe.svg';
    return (
        <Avatar name={username} src={image} />
    );
  };

  return <Header handleRenderAvatar={renderAvatar} />;
};

export default PageHeader;
