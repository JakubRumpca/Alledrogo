export interface IMotors {
    picture: any,
    name: string,
    model: string,
    year: string,
    price: string,
    description: string
}

export class Motor implements IMotors {

    constructor (
        public picture: any,
        public name: string,
        public model: string,
        public year: string,
        public price: string,
        public description: string
    ){

    }
}