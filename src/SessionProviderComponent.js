'use client'
import { Session } from 'next-auth';
import {SessionProvider as Provider } from 'next-auth/react';

const SessionProvider = ({ children, session }) => {
  return (
    <Provider session={session} basePath="/api/auth">
      {children}
    </Provider>
  );
};

export default SessionProvider;
