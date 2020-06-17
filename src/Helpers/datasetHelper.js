import React from 'react';
import { getMoodColors } from '../Helper';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
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

function getBarData(logs){
    let activities = [];
    let moods = [];
    let moodCounts = {
        happy: [],
        sad: [],
        angry: [],
        anxious: [],
        calm: [],
        tired: []
    }

    logs.forEach(log => {
        if (!moods.includes(log.mood)) moods.push(log.mood);
        const logActivities = log.activities.split(',');
        logActivities.forEach(activity => {
            if (!activities.includes(activity)) activities.push(activity);
        })
    })

    moods.forEach(mood => {
        let activityCounts = [];
        let moodObj = {};
        activities.forEach((activity,i) => {
            moodObj[`${activity}`] = 0;
            logs.forEach(log => {
                if (log.mood === mood && log.activities.includes(activity)){
                    moodObj[`${activity}`] += 1;
                }
            })
            activityCounts[i] = moodObj[`${activity}`];
        })
        moodCounts[`${mood}`] = activityCounts;
    })
    return { activities, moods, moodCounts };
}

function getChartDatasets(logs) {
    const { happyCount, sadCount, angryCount, anxiousCount, calmCount, tiredCount } = calculateChartDatasets(logs);
    const doughnutLabels = ['happy', 'sad', 'angry', 'anxious', 'calm', 'tired'];
    const lineLabels = logs.map(log => {
        return (moment(log.start_date, 'MM-DD-YYYY').format("MMM Do"))
    })
    const lineData = logs.map(log => {
        return (log.sleep_hours)
    })
    const barData = getBarData(logs);
    
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
                    borderWidth: 0.2,
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
        },
        barDataset: {
            labels: barData.activities,
            datasets: [
                {
                    stack: "stack1",
                    label: 'happy',
                    backgroundColor: getMoodColors('happy').main,
                    data: barData.moodCounts.happy,
                    borderWidth: 0.2,
                    borderColor: '#767676',
                },
                {
                    stack: "stack1",
                    label: 'sad',
                    backgroundColor: getMoodColors('sad').main,
                    data: barData.moodCounts.sad,
                    borderWidth: 0.2,
                    borderColor: '#767676',
                },
                {
                    stack: "stack1",
                    label: 'angry',
                    backgroundColor: getMoodColors('angry').main,
                    data: barData.moodCounts.angry,
                    borderWidth: 0.2,
                    borderColor: '#767676',
                },
                {
                    stack: "stack1",
                    label: 'anxious',
                    backgroundColor: getMoodColors('anxious').main,
                    data: barData.moodCounts.anxious,
                    borderWidth: 0.2,
                    borderColor: '#767676',
                },
                {
                    stack: "stack1",
                    label: 'calm',
                    backgroundColor: getMoodColors('calm').main,
                    data: barData.moodCounts.calm,
                    borderWidth: 0.2,
                    borderColor: '#767676',
                },
                {
                    stack: "stack1",
                    label: 'tired',
                    backgroundColor: getMoodColors('tired').main,
                    data: barData.moodCounts.tired,
                    borderWidth: 0.2,
                    borderColor: '#767676',
                }
            ],
        },
        barOptions: {
            animation: {
                duration: 2000,
                easing: 'easeOutCubic'
            },
            legend: {
                display:true,
                position: "right",
                labels: {
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 12,
                },
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "activities",
                        fontSize: "16"
                    },
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "mood instances",
                        fontSize: "16"
                    },
                    ticks: {
                        beginAtZero: true,
                        userCallback: function(label) {
                            if (Math.floor(label) === label) return label;
                        },
                    }
                }],
            }
        },
    }
}

export function createCharts(logs){
    const datasets = getChartDatasets(logs);
    
    return (
        <div className="dashboard__charts">
            <div className="dashboard__row2">
                <Doughnut
                    data={datasets.doughnutDataset}
                    options={datasets.doughnutOptions}
                />
                <Line 
                    data={datasets.lineDataset}
                    options={datasets.lineOptions}
                />
            </div>
            <div className="dashboard__row3">
                <Bar  
                    data={datasets.barDataset} 
                    options={datasets.barOptions}
                />
            </div>
        </div>
    );
}