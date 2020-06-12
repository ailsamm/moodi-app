import { faSadTear, faBed, faTrashAlt, faAngry, faLaughBeam, faTv, faBalanceScale, faSun, faHandSparkles, faHeart, faGrimace, faPeopleArrows, faBath, faSmile, faTired, faRunning, faMusic, faUsers, faUtensils, faGrinSquintTears, faBook, faLeaf, faTint } from '@fortawesome/free-solid-svg-icons';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export function getMoodColors(mood) {
    let color;
    switch(mood) {
        case "happy":
            color = {main: "#e9d66bb2", accent: "#e8dc97"}; // yellow
            break;

        case "sad":
            color = {main: "#82cbe1b2", accent: "#8dd7ed"}; // blue
            break;

        case "anxious":
            color = {main: "#eeb24cb2", accent: "#eec174"}; // orange
            break;

        case "calm":
            color = {main: "#5fc4aebd", accent: "#68d7bf"}; // green
            break;

        case "angry":
            color = {main: "#e17c7c9c", accent: "#d78c8c"}; // red
            break;

        case "tired":
            color = {main: "#8e5fbab4", accent: "#c69eeb"}; // purple
        break;

        default: 
            color = {main: "#bfbfbf", accent: "#bfbfbf"};
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