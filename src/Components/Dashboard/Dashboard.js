import React, { Component } from 'react';
import MoodiContext from '../../MoodiContext';
import { getIcon } from '../../Helper';
import { createCharts } from '../../Helpers/datasetHelper';
import moment from 'moment';
import './Dashboard.css';

export default class Dashboard extends Component {

    static contextType = MoodiContext;

    constructor(props){
        super(props);
        this.state={
            timespan: "all", // week, month or all
        }
    }

    getUserRank = () => {
        const user = this.context.users.find(user => user.id === this.context.loggedInUser);
        return !!user ? user.ranking : "Basic";
    }

    filterLogs = () => {
        // fetches all of user's logs and filters by the selected timespan
        const timespan = this.state.timespan;
        let logs = [];
        let dateCutoff;
        if (this.context.moodLogs) {
            logs = this.context.moodLogs.filter(log => log.user_id === this.context.loggedInUser);

            if (timespan === "week"){
                dateCutoff = moment().subtract(7,'d').format('MM-DD-YYYY');
            }
            else if (timespan === "month"){
                dateCutoff = moment().subtract(1,'M').format('MM-DD-YYYY');
            }
            else {
                return logs.filter(log => moment(log.start_date, 'MM-DD-YYYY').isBefore(moment()));
            }
            return logs.filter(log => moment(log.start_date, 'MM-DD-YYYY').isAfter(dateCutoff) && moment(log.start_date, 'MM-DD-YYYY').isBefore(moment()));
        }
        else return logs;
    }

    calculateAverageSleep = (logs) => {
        const average = logs.reduce( ( sum , cur ) => sum + cur.sleep_hours , 0) / logs.length;
        return Math.round(average * 10) / 10
    }

    renderTimespanButtons = () => {
        const buttons = ["week", "month", "all"];
        return (
            <div className="dashboard__timespanButtonsContainer">
                <h4>See logs from:</h4>
                <div className="dashboard__timespanButtons">
                {buttons.map(button => {
                    const className = this.state.timespan === button ? "dashboard__timespanButton active" : "dashboard__timespanButton";
                    return (
                        <button key={button} className={className} onClick={() => this.setState({timespan:button})}>{button}</button>
                    )
                })}
                </div>
            </div>
        )
    }

    render() {
        const logs = this.filterLogs();
        const userRank = this.getUserRank();
        const sleepHours = this.calculateAverageSleep(logs);
        const dashboardFeatures = [
            {title: "TOTAL LOGS", content: logs.length, icon: "calendar"},
            {title: "AVERAGE SLEEP TIME", content: `${sleepHours} hours`, icon: "moon"},
            {title: "CURRENT RANKING", content: userRank, icon: "beam"},
        ]
        return (
            <div className="dashboard">
                {this.renderTimespanButtons()}
                <div className="dashboard__row1">
                    {dashboardFeatures.map(feature => {
                        return (
                            <div className="dashboard__featureSection" key={feature.title}>
                                <div className="dashboard__featureContent">
                                    {getIcon(feature.icon)}
                                    <div className="dashboard__featureTitle">{feature.content || ""}</div>
                                    <div className="dashboard__featureExplanation">{feature.title}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {createCharts(logs, this.state.timespan)}
            </div>
        )
    }
}