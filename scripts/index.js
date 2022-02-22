class Worker{
    constructor(name,surname,rate,days){
        this.name=name;
        this.surname=surname;
        this.rate=rate;
        this.days=days;
    }
    getSalary(){
        let taks=this.days*this.rate;
        console.log(`${this.name} ${this.surname} заработал ${taks}` )
    }
}

const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
worker.getSalary();