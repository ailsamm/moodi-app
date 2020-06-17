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
/*export function updateTaskInDb(taskId, taskFields) {
    fetch(`${config.serverUrl}/tasks/${taskId}`, {
      method: 'PATCH',
      body: JSON.stringify(taskFields),
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('An error occurred while attempting to update the task');
      }
    })
    .catch(e => console.log(e));
}

// Handles delete request for removing task from server DB 
export function deleteTaskInDb(taskId) {
    fetch(`${config.serverUrl}/tasks/${taskId}`, {
        method: 'DELETE',
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('An error occurred while attempting to delete the task');
        }
      })
      .catch(e => console.log(e));
}

// Carries out post request for adding user info to server DB then immediately handles posting of user login info
export function addNewUser(userInfo, userLogin) {
        fetch(`${config.serverUrl}/users-info/`, {
            method: 'POST',
            body: JSON.stringify(userInfo),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(usersInfoRes => {
            if (!usersInfoRes.ok) {
                throw new Error('An error occurred while attempting to add new user info');
            }
            fetch(`${config.serverUrl}/users-login/`, {
                method: 'POST',
                body: JSON.stringify(userLogin),
                headers: {
                    'content-type': 'application/json'
                },
            })
            .then(usersLoginRes => {
                if (!usersLoginRes.ok) {
                    throw new Error('An error occurred while attempting to add new user login');
                }
            })
            .catch(e => console.log(e));
        })
        .catch(e => console.log(e));   
}

// Handles patch request for updating user info in server DB 
export function updateUserInfoInDb(userId, userInfoFields){
    fetch(`${config.serverUrl}/users-info/${userId}`, {
        method: 'PATCH',
        body: JSON.stringify(userInfoFields),
        headers: {
            'content-type': 'application/json'
        },
    })
    .then(userInfoRes => {
        if (!userInfoRes.ok) {
          throw new Error('An error occurred while attempting to update user info');
        }
    })
    .catch(e => console.log(e));
}*/

