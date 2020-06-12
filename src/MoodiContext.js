import React from 'react';

const MoodiContext = React.createContext({
  loggedInUser: null,
  users: [],
  moodLogs: [],
  onAddMoodLog: () => {},
  onDeleteMoodLog: () => {}
});

export default MoodiContext;