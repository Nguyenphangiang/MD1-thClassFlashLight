class Battery {
    constructor(energy) {
        this.energy = energy;
    }
    setEnergy(energy){
        this.energy = energy;
    }
    getEnergy(){
        return this.energy;
    };
    decreaseEnergy(){
        if (this.energy>0){
            this.energy--;
        }
    }
}
class Flashlight{
    constructor() {
    }
    setBattery(battery){
        this.battery= battery;
    };
    getBatteryInfo(){
        return this.battery.getEnergy();
    };
    light(){
        if (this.status){
            alert("Lighting");
        } else {
            alert("Not Lighting")
        }
    };
    turnOn(){
        this.status = true;
    }
    turnOff(){
        this.status = false;
    }
}
let battery = new Battery();
battery.setEnergy(10);
let flashlight = new Flashlight()
flashlight.setBattery(battery);
alert("Battery Info : " + flashlight.getBatteryInfo());
document.write("Turn on<br/>")
flashlight.turnOn();
flashlight.light();
document.write("Battery info:" + flashlight.getBatteryInfo() + "<br/>");
document.write("Turn off<br/>")
flashlight.turnOff();
flashlight.light();
