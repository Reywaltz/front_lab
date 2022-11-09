export interface IWarehouseItem {
    id: number;
    name: string;
    cost: number;
    country: string;
    developer: string;
    color: string;
    type: string;
    status: string;
    placement: IWarehouseItemPlace;
}

interface IWarehouseItemPlace {
    id: number;
    occupied: boolean;
}

export interface ICreateProductForm {
    nameValue: string;
    costValue: string;
    countryValue: string;
    developerValue: string;
    colorValue: string;
    placementValue: string;
}

export interface IStatusForm {
    status: string
}

export interface IPlacement {
    id: number,
    occupied: boolean
}
