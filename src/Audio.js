// Name: Audio.js
// Author: Amay Kataria. 
// Date: 04/28/2021
// Description: This component holds the names of all the audio files corresponding to the sensors and chipsets. 
// Number of sensor lines used should be the same as the number of audio files or there will be empty objects that can 
// lead to errors. 

// List of all the filenames for the sensor lines. 
const sounds = {
    1: '4singingpark.mp3',
    2: 'birds1.mp3',
    3: 'drone2.mp3',
    4: 'leaves.mp3',
    5: 'softrhythm.mp3',
    6: 'wind.mp3',
    7: 'thunder.mp3',
    8: 'churchbells.mp3',
    9: 'strings2.mp3',
    10: 'birds2.mp3',
    11: 'EWbirds.mp3',
    12: 'Grunewald.mp3',
    13: 'Tiergarten.mp3',
    14: 'forest.mp3',
    15: 'thunder.mp3',  
    16: 'HvonK.mp3',
    17: 'strings.mp3',
    18: 'desert.mp3',
    19: 'ocean.mp3',
    20: 'wind2.mp3',
    21: 'drone.mp3',
    22: 'musicbox.mp3',
    23: 'body1.1.mp3',
    24: 'body1.2.mp3',
    25: 'body1.3.mp3',
    26: 'body1.4.mp3',
    27: 'body1.5.mp3',  
    28: 'body1.6.mp3',
    29: 'body1.7.mp3',
    30: 'body1.8.mp3',
    31: 'body1.9.mp3',
    32: 'body1.10.mp3',
    33: 'body1.11.mp3',
    34: 'body1.12.mp3',
    35: 'body1.13.mp3',
    36: 'body1.15.mp3'
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
