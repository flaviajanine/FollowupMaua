import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CadastroService extends DataService {
  constructor(http: Http) {
    super('http://localhost/Mauacompanha/usuarioExterno.php', http);
   }
}