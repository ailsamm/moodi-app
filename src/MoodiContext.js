import React from 'react';

const MoodiContext = React.createContext({
  loggedInUser: null,
  users: [],
  moods: []
});

export default MoodiContext;