function createAssemblyLine() {
    return {
        hasClima: function (car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = function () {
                if (this.temp < this.tempSettings) {
                    this.temp += 1;
                } else if (this.temp > this.tempSettings) {
                    this.temp -= 1;
                }
            }
        },
    
        hasAudio: function (car) {
            car.currentTrack = {
                name: null,
                artist: null, 
            }
    
            car.nowPlaying = function () {
                if (this.currentTrack !== null) {
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            } 
        },
    
        hasParktronic: function (car) {
            car.checkDistance = function (distamce) {
                if (distamce < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (distamce < 0.25) {
                    console.log("Beep! Beep!");
                } else if (distamce < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log("");
                }
            }
        }
    }
}

const assemblyLine = createAssemblyLine(); 
const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
name: 'Never Gonna Give You Up',
artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);