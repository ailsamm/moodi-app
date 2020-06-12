import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getMoodColor, getIcon } from '../../Helper';
import Modal from '@material-ui/core/Modal';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughBeam } from '@fortawesome/free-solid-svg-icons';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function MoodModal(props) {
    const useStyles = makeStyles((theme) => ({
        main: {
          position: 'absolute',
          width: 400,
          backgroundColor: '#FFF',
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          borderRadius: "10px",
          outline: 0
        },
        title: {
            color: getMoodColor(props.moodObj.mood),
            fontWeight: "500"
        },
        container: {
            color: getMoodColor(props.moodObj.mood),
            fontSize: "1.75em",
            display: 'flex',
            backgroundColor: "#f0f0f0",
            alignItems: "center",
            padding: "1vh 0",
            borderRadius: "10px",
            margin: "1vh 0"
        },
        activities: {
            justifyContent: 'space-around',
        },
        sleep: {
            justifyContent: 'center',
        },
        sleepHours: {
            fontSize: "0.8em"
        }
    }));

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const body = (
        <div style={modalStyle} className={classes.main}>
            <h2 id="simple-modal-title" className={classes.title}>{props.moodObj.start.format('MMMM Do YYYY')}</h2>
            {props.moodObj.activities.length > 0 && <div className={`${classes.container} ${classes.activities}`}>{props.moodObj.activities.map(activity => (
                getIcon(activity)
            ))}
            </div>}
            <div className={`${classes.container} ${classes.sleep}`}>
                {getIcon("sleep")}<span className={classes.sleepHours}>&nbsp;{props.moodObj.sleepHours} hours</span>
            </div>
            <p id="simple-modal-description">
                {props.moodObj.notes}
            </p>
        </div>
    );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
