import React, { ReactNode } from 'react';
import { Navbar } from '../Navbar';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div data-theme="bumblebee" className="h-screen">
      <Navbar />
      <main className="container p-8 mx-auto">{children}</main>
    </div>
  );
};
