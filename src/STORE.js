import moment from 'moment';

const STORE = {
    users: [
        {id: 1, first_name: 'Ada', last_name: 'Lovelace', email: 'aaa@gmail.com', password: 'aaa'},
        {id: 2, first_name: 'Bobbi', last_name: 'Brown', email: 'bbb@gmail.com', password: 'bbb'}
    ],
    mood_logs: [
        {id: 1, user_id: 1, mood: 'happy', start: moment("06-01-2020", 'MM-DD-YYYY'), end: moment("06-01-2020", 'MM-DD-YYYY'), title: "\xA0"},
        {id: 2, user_id: 1, mood: 'sad', start: moment("06-05-2020", 'MM-DD-YYYY'), end: moment("06-05-2020", 'MM-DD-YYYY'), title: "\xA0"},
        {id: 3, user_id: 1, mood: 'calm', start: moment("06-10-2020", 'MM-DD-YYYY'), end: moment("06-10-2020", 'MM-DD-YYYY'), title: "\xA0"},
        {id: 3, user_id: 1, mood: 'calm', start: moment("06-11-2020", 'MM-DD-YYYY'), end: moment("06-11-2020", 'MM-DD-YYYY'), title: "\xA0"},
        {id: 3, user_id: 1, mood: 'calm', start: moment("06-12-2020", 'MM-DD-YYYY'), end: moment("06-12-2020", 'MM-DD-YYYY'), title: "\xA0"},
        {id: 4, user_id: 1, mood: 'angry', start: moment("06-14-2020", 'MM-DD-YYYY'), end: moment("06-14-2020", 'MM-DD-YYYY'), title: "\xA0"},
        {id: 4, user_id: 1, mood: 'angry', start: moment("06-15-2020", 'MM-DD-YYYY'), end: moment("06-15-2020", 'MM-DD-YYYY'), title: "\xA0"},
        {id: 5, user_id: 1, mood: 'anxious', start: moment("06-20-2020", 'MM-DD-YYYY'), end: moment("06-20-2020", 'MM-DD-YYYY'), title: "\xA0"},
        {id: 6, user_id: 2, mood: 'happy', start: moment().toDate(), end: moment().toDate(), title: "\xA0"},
    ]
}

export default STORE;