import React from 'react';
import classnames from 'classnames';

export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({children, className}: LayoutProps) => {
  return (
    <div className="wrap">
      <div className="container">
        <div className={classnames('content', className)}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;
