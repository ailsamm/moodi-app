import { faSadTear, faBed, faTrashAlt, faAngry, faLaughBeam, faTv, faBalanceScale, faSun, faHandSparkles, faHeart, faGrimace, faPeopleArrows, faBath, faSmile, faTired, faRunning, faMusic, faUsers, faUtensils, faGrinSquintTears, faBook, faLeaf, faTint } from '@fortawesome/free-solid-svg-icons';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export function getMoodColor(mood) {
    let color;
    switch(mood) {
        case "happy":
            color = "#e9d66bb2"; // yellow
            break;

        case "sad":
            color = "#82cbe1b2"; // blue
            break;

        case "anxious":
            color = "#eeb24cb2"; // orange
            break;

        case "calm":
            color = "#5fc4aebd"; // green
            break;

        case "angry":
            color = "#e17c7c9c"; // red
            break;

        case "tired":
            color = "#8e5fbab4"; // purple
        break;

        default: 
            color = "gray";
    }
    return color;
}

export function getIcon(name) {
    let iconName;
    switch(name) {
        case "happy":
            iconName = faLaughBeam;
            break;

        case "sad":
            iconName = faSadTear;
            break;

        case "anxious":
            iconName = faGrimace;
            break;

        case "calm":
            iconName = faSmile;
            break;

        case "angry":
            iconName = faAngry;
            break;

        case "tired":
            iconName = faTired;
        break;

        case "exercise":
            iconName = faRunning;
        break;

        case "family":
            iconName = faUsers;
        break;

        case "friends":
            iconName = faPeopleArrows;
        break;

        case "eat":
            iconName = faUtensils;
        break;

        case "date":
            iconName = faHeart;
        break;

        case "water":
            iconName = faTint;
        break;

        case "outdoors":
            iconName = faLeaf;
        break;

        case "read":
            iconName = faBook;
        break;

        case "clean":
            iconName = faHandSparkles;
        break;

        case "movies":
            iconName = faTv;
        break;

        case "laugh":
            iconName = faGrinSquintTears;
        break;

        case "music":
            iconName = faMusic;
        break;

        case "bath":
            iconName = faBath;
        break;

        case "sun":
            iconName = faSun;
        break;

        case "relax":
            iconName = faBalanceScale;
        break;

        case "sleep":
            iconName = faBed;
        break;

        case "trash":
            iconName = faTrashAlt;
        break;

        default: 
            iconName = faSmile;
    }

    return <FontAwesomeIcon alt="name" icon={iconName}/>;
}