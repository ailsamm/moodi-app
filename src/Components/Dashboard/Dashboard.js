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
        return !!user ? user.rank : "Basic";
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
                return logs.filter(log => log.start.isBefore(moment()));
            }
            return logs.filter(log => log.start.isAfter(dateCutoff) && log.start.isBefore(moment()));
        }
        else return logs;
    }

    calculateAverageSleep = (logs) => {
        const average = logs.reduce( ( sum , cur ) => sum + cur.sleepHours , 0) / logs.length;
        return Math.round(average * 10) / 10
    }

    render() {
        const logs = this.filterLogs();
        const userRank = this.getUserRank();
        const sleepHours = this.calculateAverageSleep(logs);
        const dashboardFeatures = [
            {title: "TOTAL LOGS", content: logs.length, icon: "calendar"},
            {title: "AVERAGE SLEEP TIME", content: sleepHours, icon: "moon"},
            {title: "CURRENT RANKING", content: userRank, icon: "beam"},
        ]
        return (
            <div className="dashboard">
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