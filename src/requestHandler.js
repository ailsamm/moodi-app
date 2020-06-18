import config from './config';

export function createRandomId(){
    return new Date().getTime() & 0xffff;
}

export function fetchData(){
    return Promise.all([
        fetch(`${config.serverUrl}/users`),
        fetch(`${config.serverUrl}/mood-logs`)
      ])
      .then(([usersRes, moodLogsRes]) => {
          if (!usersRes.ok) {
            throw new Error("Could not fetch users");
          }
          if (!moodLogsRes.ok) {
            throw new Error("Could not fetch mood logs");
          }
          return Promise.all([
            usersRes.json(), 
            moodLogsRes.json()
          ]);
      })
}

// Handles patch request for updating task in server DB 
export function updateTaskInDb(logId, fields) {
    fetch(`${config.serverUrl}/mood-logs/${logId}`, {
      method: 'PATCH',
      body: JSON.stringify(fields),
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('An error occurred while attempting to update the mood log');
      }
    })
    .catch(e => console.log(e));
}

// Handles delete request for removing task from server DB 
export function deleteMoodLogInDb(logId) {
    fetch(`${config.serverUrl}/mood-logs/${logId}`, {
        method: 'DELETE',
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('An error occurred while attempting to delete the task');
        }
      })
      .catch(e => console.log(e));
}

export async function addLogInDb(newLog){
    let response = await fetch(`${config.serverUrl}/mood-logs/`, {
        method: 'POST',
        body: JSON.stringify(newLog),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
}

export async function addUserInDb(newUser){
    let response = await fetch(`${config.serverUrl}/users/`, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

// Handles patch request for updating user  in server DB 
export function updateUserInfoInDb(userId, fields){
    fetch(`${config.serverUrl}/users/${userId}`, {
        method: 'PATCH',
        body: JSON.stringify(fields),
        headers: {
            'content-type': 'application/json'
        },
    })
    .then(userInfoRes => {
        if (!userInfoRes.ok) {
          throw new Error('An error occurred while attempting to update user');
        }
    })
    .catch(e => console.log(e));
}
