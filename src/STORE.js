import moment from 'moment';

const STORE = {
    users: [
        {id: 1, first_name: 'Ada', last_name: 'Lovelace', email: 'aaa@gmail.com', password: 'aaa'},
        {id: 2, first_name: 'Bobbi', last_name: 'Brown', email: 'bbb@gmail.com', password: 'bbb'}
    ],
    moods: [
        {id: 1, user_id: 1, mood: 'happy', date: moment("06-01-2020", 'MM-DD-YYYY')},
        {id: 2, user_id: 1, mood: 'happy', date: moment("06-02-2020", 'MM-DD-YYYY')},
        {id: 3, user_id: 1, mood: 'happy', date: moment("06-03-2020", 'MM-DD-YYYY')}
    ]
}

export default STORE;