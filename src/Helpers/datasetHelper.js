import React from 'react';
import { getMoodColors } from '../Helper';
import { Doughnut, Line } from 'react-chartjs-2';

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

function getChartDatasets(logs) {
    const { happyCount, sadCount, angryCount, anxiousCount, calmCount, tiredCount } = calculateChartDatasets(logs);
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

export function createCharts(logs){
    const doughnutLabels = ['happy', 'sad', 'angry', 'anxious', 'calm', 'tired'];
    const dataset = getChartDatasets(logs);
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
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
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };
    return (
        <div className="dashboard__charts">
            <Doughnut
                data={{
                    labels: doughnutLabels,
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
            <Line data={data}/>
        </div>
    );
}