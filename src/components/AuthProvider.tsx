'use client';

import React, { useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import { Session } from 'next-auth';
import { useAuthStore } from '../store/auth/authStore';
import { User } from '@/types/user';

export const AuthProvider = ({
  children,
  session
}: {
  children: ReactNode;
  session: Session | null;
}) => {
  const { setUser } = useAuthStore();

  useEffect(() => {
    if (session) {
      const _user: User = session.user as User;
      // TODO: Think if I actually need to include the session expiration in the user object
      // _user.session_expiration = session.expires as string;
      setUser(_user);
    } else {
      setUser(null);
    }
  }, [session, setUser]);

  return <SessionProvider session={session}>{children}</SessionProvider>;
};
