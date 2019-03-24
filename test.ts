import { validator } from './valid';
import 'mocha';
import { assert } from 'chai';
const csv_arr: Array<Object> = [
    {
        "ID": 4500,
        "Name": "Alex",
        "Surname": "Ivanov",
        "Mail": "alex55@mail.ru",
        "Date of registration": "02/03/2005",
        "Phone": "375 29 1340978"
    },
    {
        "ID": 3500,
        "Name": "Dima",
        "Surname": "Ivanov",
        "Mail": "alex55@mail.ru",
        "Date of registration": "21/11/2003",
        "Phone": "375 29 1340978"
    },
    {
        "ID": 4500,
        "Name": "Nikita",
        "Surname": "Cool",
        "Mail": "alex55@mail.ru",
        "Date of registration": "02/03/2005",
        "Phone": "375 29 1320978"
    },
];

describe('Validator testing', () =>{
    it('Should return array', () => {
        assert.equal(validator(csv_arr), [csv_arr[0]]);
    });
});