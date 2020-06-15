import moment from 'moment';

const STORE = {
    users: [
        {id: 1, first_name: 'Ada', last_name: 'Lovelace', email: 'aaa@gmail.com', password: 'aaa', rank: "Mood Ninja"},
        {id: 2, first_name: 'Bobbi', last_name: 'Brown', email: 'bbb@gmail.com', password: 'bbb', rank: "Mood Ninja"},
        {id: 3, first_name: 'Cara', last_name: 'Comm', email: 'ccc@gmail.com', password: 'ccc', rank: "Mood Ninja"},
        {id: 4, first_name: 'Devin', last_name: 'Dale', email: 'ddd@gmail.com', password: 'ddd', rank: "Mood Ninja"},
    ],
    mood_logs: [
        {id: 1, user_id: 1, mood: 'happy', start: moment("06-01-2020", 'MM-DD-YYYY'), end: moment("06-01-2020", 'MM-DD-YYYY'), title: "\xA0", activities: ['sun', 'bath'], sleepHours: 8, notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit.'},
        {id: 2, user_id: 1, mood: 'sad', start: moment("06-05-2020", 'MM-DD-YYYY'), end: moment("06-05-2020", 'MM-DD-YYYY'), title: "\xA0", activities: ['outdoors', 'family'], sleepHours: 6, notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit.'},
        {id: 3, user_id: 1, mood: 'calm', start: moment("06-10-2020", 'MM-DD-YYYY'), end: moment("06-10-2020", 'MM-DD-YYYY'), title: "\xA0", activities: ['family', 'friends'], sleepHours: 4, notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit.'},
        {id: 4, user_id: 1, mood: 'calm', start: moment("06-11-2020", 'MM-DD-YYYY'), end: moment("06-11-2020", 'MM-DD-YYYY'), title: "\xA0", activities: ['family', 'read'], sleepHours: 2, notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit.'},
        {id: 5, user_id: 1, mood: 'calm', start: moment("06-12-2020", 'MM-DD-YYYY'), end: moment("06-12-2020", 'MM-DD-YYYY'), title: "\xA0", activities: ['read', 'movies'], sleepHours: 8, notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit.'},
        {id: 6, user_id: 1, mood: 'angry', start: moment("06-14-2020", 'MM-DD-YYYY'), end: moment("06-14-2020", 'MM-DD-YYYY'), title: "\xA0", activities: ['date', 'relax'], sleepHours: 6, notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit.'},
        {id: 7, user_id: 1, mood: 'angry', start: moment("06-15-2020", 'MM-DD-YYYY'), end: moment("06-15-2020", 'MM-DD-YYYY'), title: "\xA0", activities: ['exercise', 'date'], sleepHours: 4, notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit.'},
        {id: 8, user_id: 1, mood: 'anxious', start: moment("06-20-2020", 'MM-DD-YYYY'), end: moment("06-20-2020", 'MM-DD-YYYY'), title: "\xA0", activities: ['tv', 'clean'], sleepHours: 2, notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit.'},
        {id: 9, user_id: 2, mood: 'happy', start: moment().toDate(), end: moment().toDate(), title: "\xA0", activities: ['tv', 'clean'], sleepHours: 2, notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit.'},
    ]
}

export default STORE;