import React from 'react';

const Welcome = ({ name }) => {
  if (!name) name = 'Guest'; // Default to 'Guest' if no name is provided

  return (
    <div>
      <h1>Hey {name}!</h1>
      <h2>Welcome to School.</h2>
    </div>
  );
};

export default Welcome;
