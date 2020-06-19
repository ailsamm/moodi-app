import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getMoodColors, getIcon } from '../../Helpers/moodColorHelper';
import { Modal, Tooltip } from '@material-ui/core/';

function getModalStyle() {
  const top = 50;
  const left = 50;

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
            color: getMoodColors(props.moodLog.mood).main,
            fontWeight: "500",
            display: "flex",
            justifyContent: "space-between"
        },
        container: {
            color: getMoodColors(props.moodLog.mood).main,
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
        },
        trash: {
            color: "#e17c7c9c",
            border: "none",
            backgroundColor: "inherit",
            fontSize: "1em",
            cursor: "pointer"
        }
    }));

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const body = (
        <div style={modalStyle} className={classes.main}>
            <h2 id="simple-modal-title" className={classes.title}>
                {props.moodLog.start.format('MMMM Do YYYY')} 
                <Tooltip arrow placement="top" title="delete">
                    <button onClick={props.handleDelete} alt="delete" className={classes.trash}>
                        {getIcon("trash")}
                    </button>
                </Tooltip>
            </h2>
            {props.moodLog.activities.length > 0 && <div className={`${classes.container} ${classes.activities}`}>{props.moodLog.activities.split(",").map(activity => (
                <Tooltip title={activity} arrow>
                    <div className="modal__activity">{getIcon(activity)}</div>
                </Tooltip>
            ))}
            </div>}
            <div className={`${classes.container} ${classes.sleep}`}>
                {getIcon("sleep")}<span className={classes.sleepHours}>&nbsp;{props.moodLog.sleep_hours} hours</span>
            </div>
            <p id="simple-modal-description">
                {props.moodLog.notes}
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
