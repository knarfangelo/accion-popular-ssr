import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://accionpopular.com.pe/api/api.php';
  private username = 'uv60tv11rhvxe';
  private password = 'frankangelo75967915';

  constructor(private http: HttpClient) { }

  enviarDatos(datosFormulario: any): Observable<any> {
    // Codificar credenciales en base64
    const credentials = btoa(`${this.username}:${this.password}`);
    const headers = new HttpHeaders({
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl, datosFormulario, { headers });
  }

}
