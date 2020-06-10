import React from 'react';

const MoodiContext = React.createContext({
  loggedInUser: null,
  users: [],
  moodLogs: [],
  onAddMoodLog: () => {}
});

export default MoodiContext;