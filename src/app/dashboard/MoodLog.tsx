// src/app/dashboard/MoodLog.tsx

'use client';
import React, { useState } from "react";
import './MoodLog.css';
import { FaInfoCircle } from 'react-icons/fa'; // Correct import for the info icon
import MoodModal from './MoodModal'; // Ensure this path is correct

// Define the SliderValues type
type SliderValues = {
    Happiness: number;
    Excitement: number;
    Serenity: number;
    Anger: number;
    Sadness: number;
    Apathy: number;
    Anxiety: number;
    Stress: number;
    Depression: number;
};

// Define mood information
const moodInfo: { [key in keyof SliderValues]: string } = {
    Happiness: 'Feeling genuinely joyful and positive.',
    Excitement: 'Experiencing enthusiasm and energy.',
    Serenity: 'Enjoying a state of tranquility and peace.',
    Anger: 'Feeling irritated or enraged.',
    Sadness: 'Experiencing a sense of sorrow or unhappiness.',
    Apathy: 'Feeling indifferent and lacking interest.',
    Anxiety: 'Experiencing nervousness or worry.',
    Stress: 'Feeling overwhelmed or strained.',
    Depression: 'Experiencing deep and prolonged sadness.'
};

const MoodLog: React.FC = () => {
    const [sliderValues, setSliderValues] = useState<SliderValues>({
        Happiness: 50,
        Excitement: 50,
        Serenity: 50,
        Anger: 50,
        Sadness: 50,
        Apathy: 50,
        Anxiety: 50,
        Stress: 50,
        Depression: 50,
    });

    const [note, setNote] = useState<string>('');
    const [selectedMood, setSelectedMood] = useState<keyof SliderValues | null>(null);

    const handleSliderChange = (label: keyof SliderValues) => (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = Number(event.target.value);
        // Snap value to the nearest 25%
        value = Math.round(value / 25) * 25;
        setSliderValues((prevValues) => ({
            ...prevValues,
            [label]: value
        }));
    };

    const handleSave = () => {
        console.log('Saved values:', sliderValues);
    }

    const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNote(event.target.value);
    };

    const handleIconClick = (mood: keyof SliderValues) => () => {
        setSelectedMood(mood);
    };

    const moods: Array<keyof SliderValues> = [
        'Happiness', 'Excitement', 'Serenity', 'Anger',
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
        <div className="main-container">
            <div className="flex-container">
                {moods.map(mood => (
                    <div className="box" key={mood}>
                        <div className="mood-label-container">
                            <div className="mood-label">
                                {mood}
                            </div>
                            <div className="icon-container" onClick={() => handleIconClick(mood)}>
                                <FaInfoCircle className="info-icon" />
                            </div>
                        </div>
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
            {selectedMood && (
                <MoodModal
                    mood={selectedMood}
                    onClose={() => setSelectedMood(null)}
                    info={moodInfo[selectedMood]}
                />
            )}
            <div className='note-container'>
                <textarea
                    id='note'
                    className='note-textarea'
                    value={note}
                    onChange={handleNoteChange}
                    placeholder="Add notes here..."
                />
            </div>
            <div className='button-container'>
                <button className='save-button' onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default MoodLog;
