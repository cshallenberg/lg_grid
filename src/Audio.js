// Name: Audio.js
// Author: Amay Kataria. 
// Date: 04/28/2021
// Description: This component holds the names of all the audio files corresponding to the sensors and chipsets. 
// Number of sensor lines used should be the same as the number of audio files or there will be empty objects that can 
// lead to errors. 

// List of all the filenames for the sensor lines. 
const sounds = {
    1: '4singingpark.mp3',
    2: 'churchbells.mp3',
    3: 'desert.mp3',
    4: 'drone.mp3',
    5: 'EWbirds.mp3',
    6: 'forest.mp3',
    7: 'gibber.mp3',
    8: 'Grunewald.mp3',
    9: 'HvonK.mp3',
    10: 'drone2.mp3',
    11: 'ocean.mp3',
    12: 'scale.mp3',
    13: 'strings.mp3',
    14: 'tango.mp3',
    15: 'thunder.mp3',  
    16: 'Tiergarten.mp3',
    17: 'watertalking.mp3',
    18: 'drone3.mp3',
    19: 'strings2.mp3',
    20: 'music.mp3',
    21: 'wind.mp3',
    22: 'birds4.mp3',
    23: 'wind2.mp3',
    24: 'birds5.mp3',
    25: 'zoo3.mp3',
    26: 'birds1.mp3',
    27: 'strings3.mp3',  
    28: 'zoo7.mp3',
    29: 'birds2.mp3',
    30: 'leaves.mp3',
    31: 'softrhythm.mp3',
    32: 'birds3.mp3',
    33: 'leaves.mp3',
    34: 'birds4.mp3',
    35: 'wind2.mp3',
    36: 'birds5.mp3'
}; 

// Directory of the sound files. 
const directory = 'Audio/';

class Audio {
    constructor() {
        this.tones = []; 
        this.assignIdx = 0; // Updates after every tone assignment to each sensor.  
        this.loadSounds(); // Load all sounds in tones. 
        
        // Debug logs. 
        // console.log(this.tones);
    }

    loadSounds() {
        const size = Object.keys(sounds).length; 
        for (let i = 1; i <= size; i++) {
            const filePath = directory + sounds[i];
            let sound = loadSound(filePath);
            this.tones.push(sound);
        }
    }

    assignTone() {
        let sensorTone = this.tones[this.assignIdx]; 
        this.assignIdx++; 
        return sensorTone; 
    }
};