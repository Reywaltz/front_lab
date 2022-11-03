export interface IWarehouseItem {
    id: number;
    name: string;
    cost: number;
    country: string;
    developer: string;
    color: string;
    type: string;
    placement: IWarehouseItemPlace;
}

interface IWarehouseItemPlace {
    id: number;
    number: number;
    occupied: boolean;
}

export interface IFormData {
    login: string;
    password: string;
}
