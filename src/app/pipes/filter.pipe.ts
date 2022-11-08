import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})
export class FilterlistPipe implements PipeTransform {
    transform(value: any[], filterString: string, property: string): any[] {
        console.log('pipe run', value, filterString, property);
        if (value.length === 0 || !filterString) {
            return value;
        }
        let filteredUsers: any[] = [];
        for (let product of value) {
            console.log(property, product);
            switch (property) {
                case 'cost':
                    if (product[property].toString() === filterString) {
                        filteredUsers.push(product);
                    }
                    break;

                case 'name':
                case 'color':
                case 'developer':
                case 'country':
                    if (
                        product[property]
                            .toLowerCase()
                            .includes(filterString.toLowerCase())
                    )
                        filteredUsers.push(product);

                    break;
                case 'occupied':
                    console.log(product.placement[property]);
                    let tmp = filterString;
                    if (filterString == 'Доступен') {
                        if (product.placement[property] === true)
                            filteredUsers.push(product);
                    } else {
                        if (product.placement[property] === false)
                            filteredUsers.push(product);
                    }
                    break;

                default:
                    break;
            }
        }
        return filteredUsers;
    }
}
