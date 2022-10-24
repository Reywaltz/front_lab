export interface IWarehouseItem {
    id: number,
    name: string,
    cost: number,
    country: string,
    color: string,
    type: string,
    placement: IWarehouseItemPlace
}

interface IWarehouseItemPlace {
    id: number,
    sector: string,
    occupied: boolean,
    letter: string,
}

export interface IFormData {
    login: string,
    password: string,
}