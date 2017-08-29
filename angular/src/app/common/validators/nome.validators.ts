import {AbstractControl, ValidationErrors } from '@angular/forms';

export class NomeValidators{

    static shouldBeUnique( control: AbstractControl ) : Promise<ValidationErrors | null> {
       
        // resolve -> retorna um valor
        // reject -> e caso de falha na conexão c o server

        return new Promise((resolve,reject) => {

        setTimeout(() => {

             // essa função está apenas simulando um acesso ao servidor
        
             if (control.value === 'mosh')
                resolve ({shouldBeUnique: true});
            else
                resolve(null);
                        }, 2000);
  
    });
         
    }
   
}