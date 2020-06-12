import React, { Component } from 'react';
import MoodiContext from '../../MoodiContext';
import { Doughnut } from 'react-chartjs-2';
import { getMoodColors, getIcon } from '../../Helper';
import './Dashboard.css';

export default class Dashboard extends Component {

    static contextType = MoodiContext;

    constructor(props){
        super(props);
        this.state={
            timespan: "month", //or week or all time
            doughnutLabels: ['happy', 'sad', 'angry', 'anxious', 'calm', 'tired'],
        }
    }

    calculateChartDatasets(logs) {
        let moods = {
            happyCount: logs.filter(log => log.mood === 'happy').length,
            sadCount: logs.filter(log => log.mood === 'sad').length,
            angryCount: logs.filter(log => log.mood === 'angry').length,
            anxiousCount: logs.filter(log => log.mood === 'anxious').length,
            calmCount: logs.filter(log => log.mood === 'calm').length,
            tiredCount: logs.filter(log => log.mood === 'tired').length
        };
        return moods;
    }

    getChartDatasets(logs) {
        const { happyCount, sadCount, angryCount, anxiousCount, calmCount, tiredCount } = this.calculateChartDatasets(logs);
        const doughnutDataset = [
            {
                label: 'moods',
                backgroundColor: [
                    getMoodColors('happy').main, 
                    getMoodColors('sad').main, 
                    getMoodColors('angry').main, 
                    getMoodColors('anxious').main, 
                    getMoodColors('calm').main, 
                    getMoodColors('tired').main, 
                ],
                borderWidth: 0.4,
                borderColor: '#767676',
                data: [happyCount, sadCount, angryCount, anxiousCount, calmCount, tiredCount]
            }
        ];

        return doughnutDataset;
    }

    createCharts(logs){
        const dataset = this.getChartDatasets(logs);
        return (
            <div className="dashboard__charts">
                <Doughnut
                    data={{
                        labels: this.state.doughnutLabels,
                        datasets: dataset
                    }}
                    height={300}
                    options={{
                        title:{
                        display:true,
                        text:'Moods',
                        fontSize:15
                        },
                        legend:{
                        display:false,
                        }
                    }}
                    />
            </div>
        );
    }

    getUserRank = () => {
        const user = this.context.users.find(user => user.id === this.context.loggedInUser);
        return !!user ? user.rank : "Basic";
    }

    filterLogs = () => {
        // fetches all of user's logs
        let logs = []
        if (this.context.moodLogs) {
            logs = this.context.moodLogs.filter(log => log.user_id === this.context.loggedInUser);
        }        
        // add logic for filtering over timespan
        return logs;
    }

    calculateAverageSleep = (logs) => {
        const average = logs.reduce( ( sum , cur ) => sum + cur.sleepHours , 0) / logs.length;
        const rounded = Math.round(average * 10) / 10
        return rounded;
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
                {this.createCharts(logs)}
            </div>
        )
    }
}