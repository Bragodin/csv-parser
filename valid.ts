import { csv } from './config';
const fs = require('fs');

export function validator(parseString: Array<Object>): Array<Object>{
    const validValue: Array<RegExp> = [/^[а-яА-ЯёЁa-zA-Z]{2,20}$/, /^[а-яА-ЯёЁa-zA-Z]{2,20}$/, /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, /^(\d{2})([.\/-])(\d{2})\2(\d{4})$/, /^\(?([0-9]{3})\)?[ ]?([0-9]{2})[ ]?([0-9]{7})$/];
    const keys: Array<string> = ["ID", "Name", "Surname", "Mail", "Date of registration", "Phone"];
    let err: Array<string> = [];
    let dataBaseRes: Array<Object> = [];
    for(let i = 0; i < parseString.length; i++){
        let state: boolean = true;
        let j: number = 0;
        for(let key of keys){
            if(key === 'ID'){
                if(!csv[j].validators[0](parseString[i][key].length)){
                    state = false;
                    err.push('Error of ID length');                   
                }
            }
            else{
                if(validValue[j-1].test(parseString[i][key]) === false || !csv[j].validators[0](parseString[i][key].length)){
                    state = false;
                    err.push(isValid(validValue[j-1].test(parseString[i][key]) === false, key, j, parseString, i));
                }
            }
            j++;
        }
        if(state === false){
            console.log('Error of object' + JSON.stringify(parseString[i]));
            console.log(err);
            fs.appendFileSync("error.txt", "error of object: " + JSON.stringify(parseString[i])+ '\n' + err + '\n');
            err = [];
        }
        else {
            dataBaseRes.push(parseString[i]);
                
            }
        } 
        return dataBaseRes;
    } 
function isValid(choice: boolean | number, key: string, j: number, parseString: any, i: number): string{
    let error: string = '';
    let errors: string = '';
    if(choice){
        error = 'invalid type';
    }
        if(!csv[j].validators[0](parseString[i][key].length)){
            error += 'error of length';
        }
    errors += `${key}: ${error}`;
    return errors;
}
  