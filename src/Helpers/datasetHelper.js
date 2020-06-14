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

function getChartDatasets(logs, timespan) {
    
    const { happyCount, sadCount, angryCount, anxiousCount, calmCount, tiredCount } = calculateChartDatasets(logs);
    const doughnutLabels = ['happy', 'sad', 'angry', 'anxious', 'calm', 'tired'];
    const lineLabels = logs.map(log => {
        return (log.start.format("MMM Do"))
    })
    const lineData = logs.map(log => {
        return (log.sleepHours)
    })
    
    return {
        doughnutDataset: 
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
                            display:true,
                            position: "right"
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
                    borderWidth: 0.3,
                    borderColor: '#767676',
                    data: [happyCount, sadCount, angryCount, anxiousCount, calmCount, tiredCount]
                }
            ]   
        },
        doughnutOptions: {
            animation: {
            duration: 2600,
            easing: 'easeOutCubic'
            },
            cutoutPercentage: 70,
            legend: {
            labels: {
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 12,
            },
            position: 'right'
            },
            rotation: Math.PI * Math.random()
        },
        lineDataset: {
            labels: lineLabels,
            datasets: [
                {
                    label: 'sleep hours',
                    fill: false,
                    borderColor: getMoodColors('calm').main, 
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: getMoodColors('calm').main, 
                    pointBorderWidth: 4,
                    pointHoverRadius: 7,
                    pointHoverBackgroundColor: '#FFF',
                    pointHoverBorderColor: '#808080', 
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: lineData,
                    lineTension: 0.2
                }
            ]
        },
        lineOptions: {
            animation: {
                duration: 2600,
                easing: 'easeOutCubic'
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }]           
            }
        }
    }
}

export function createCharts(logs, timespan){
    const datasets = getChartDatasets(logs, timespan);
    
    return (
        <div className="dashboard__charts">
            <Doughnut
                data={datasets.doughnutDataset}
                options={datasets.doughnutOptions}
            />
            <Line 
                data={datasets.lineDataset}
                options={datasets.lineOptions}
            />
        </div>
    );
}