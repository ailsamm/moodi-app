import React from 'react';
import { getMoodColors } from '../Helper';
import { Doughnut } from 'react-chartjs-2';

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
        </div>
    );
}