function Device(name,power){
    this.name=name
    this.power=power
}

function Lamp(color,weight){
    this.color=color
    this.weight=weight
}
function Phone(memory,cost){
    this.memory=memory
    this.cost=cost

}
Device.prototype.connect = function(){
    console.log(`${this.name} is connected to electricity,and used ${this.power}kW`)
}

Device.prototype.disconnect = function(){
    console.log(`${this.name} is disconnected from electricity`)
    this.power = 0
    

}
Device.prototype.checkPower = function () {
    // проверить расход электричества
    if (this.power) {
        console.log(`${this.name} uses ${this.power} kW of electricity`)
    }
    else {
        console.log(`${this.name} is not plugged in`)
    }
};

Lamp.prototype= new Device('Lamp',30)
const lamp = new Lamp('blue',450)
lamp.connect()
lamp.checkPower()
lamp.disconnect()
lamp.checkPower()

Phone.prototype = new Device('iPhone',1000)
const phone = new Phone(512,10000)
phone.connect()
phone.checkPower()
phone.disconnect()
phone.checkPower()

