class Device {
    constructor(name, power) {
        this.name = name
        this.power = power
    };
    connect (){
        console.log(`${this.name} is connected to electricity,and used ${this.power}kW`)
    };
    disconnect (){
        console.log(`${this.name} is disconnected from electricity`)
        this.power = 0
    };
    checkPower () {
        // проверить расход электроэнергии 
        if (this.power) {
            console.log(`${this.name} uses ${this.power} kW electricity`)
        }
        else {
            console.log(`${this.name} is not plugged in`)
        }
    };
}

class Lamp extends Device{
    constructor(color,weight,name, power){
        super(name,power);
        this.color=color
        this.weight=weight

    }
}

class Phone extends Device{
    constructor(memory,cost,name, power){
        super(name,power);
        this.memory=memory
        this.cost=cost

    }
}


const lamp = new Lamp('blue',450,'Lamp',30)
lamp.connect()
lamp.checkPower()
lamp.disconnect()
lamp.checkPower()


const phone = new Phone(512,10000,'iPhone',1000)
phone.connect()
phone.checkPower()
phone.disconnect()
phone.checkPower()

