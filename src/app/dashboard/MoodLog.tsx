// src/app/dashboard/MoodLog.tsx

'use client';
import React, { useState } from "react";
import './MoodLog.css';

type SliderValues = {
    [key: string]: number; // Allows indexing with string keys
};

const MoodLog: React.FC = () => {
    const [sliderValues, setSliderValues] = useState<SliderValues>({
        Happiness: 50,
        Excitement: 50,
        Content: 50,
        Anger: 50,
        Sadness: 50,
        Apathy: 50,
        Anxiety: 50,
        Stress: 50,
        Depression: 50,
    });

    const handleSliderChange = (label: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = Number(event.target.value);
        // Snap value to the nearest 25%
        value = Math.round(value / 25) * 25;
        setSliderValues(prevValues => ({
            ...prevValues,
            [label]: value
        }));
    };

    const moods = [
        'Happiness', 'Excitement', 'Content', 'Anger',
        'Sadness', 'Apathy', 'Anxiety', 'Stress', 'Depression'
    ];

    const getLabel = (value: number) => {
        switch (value) {
            case 0:
                return 'Did not experience';
            case 25:
                return 'Mild';
            case 50:
                return 'Moderate';
            case 75:
                return 'Severe';
            case 100:
                return 'Extreme';
            default:
                return '';
        }
    };

    return (
        <div className="flex-container">
            {moods.map(mood => (
                <div className="box" key={mood}>
                    <div className="mood-label">{mood}</div>
                    <div className="slidecontainer">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            step="25"
                            value={sliderValues[mood]}
                            className="slider"
                            id={`slider-${mood}`}
                            onChange={handleSliderChange(mood)}
                        />
                        <div className="slider-label">
                            {getLabel(sliderValues[mood])}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MoodLog;
