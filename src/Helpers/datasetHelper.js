import React from 'react';
import { getMoodColors } from '../Helper';
import { Doughnut, Line } from 'react-chartjs-2';
import moment from 'moment';

function calculateChartDatasets(logs) {
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

function getLogsPerDateCutoff(logs, timespan) {
    // to do - handle in Dashboard class
    let dateCutoff;

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

function getChartDatasets(logs, timespan) {
    
    const { happyCount, sadCount, angryCount, anxiousCount, calmCount, tiredCount } = calculateChartDatasets(logs);
    const doughnutLabels = ['happy', 'sad', 'angry', 'anxious', 'calm', 'tired'];
    const relevantLogs = getLogsPerDateCutoff(logs, timespan);
    const lineLabels = relevantLogs.map(log => {
        return (log.start.format("MMM Do"))
    })
    const lineData = relevantLogs.map(log => {
        return (log.sleepHours)
    })
    
    const doughnutDataset = 
    {
        labels: doughnutLabels,
        datasets: [
            {
                height:"300",
                options:{
                    title:{
                        display:true,
                        text:'Moods',
                        fontSize:15
                    },
                    legend:{
                        display:false,
                    }
                },
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
        ]   
    }

    const lineDataset = {
        labels: lineLabels,
        datasets: [
          {
            label: 'sleep hours',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: lineData
          }
        ]
      };

    return { doughnutDataset, lineDataset };
}

export function createCharts(logs, timespan){
    const datasets = getChartDatasets(logs, timespan);
    
    return (
        <div className="dashboard__charts">
            <Doughnut
                data={datasets.doughnutDataset}
            />
            <Line 
                data={datasets.lineDataset}
            />
        </div>
    );
}