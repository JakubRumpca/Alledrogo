export interface ICars {
    picture: any,
    name: string,
    model: string,
    year: string,
    price: string,
    description: string
}

export class Cars implements ICars {

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