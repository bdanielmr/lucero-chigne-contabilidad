/* eslint-disable prettier/prettier */
import React from 'react';

export default function CustomSection({ children, dark, id }) {
  return (
    <div className={'section' + (dark ? ' section-dark' : '')}>
      <div className="section-content" id={id}>
        {children}
      </div>
    </div>
  );
}
