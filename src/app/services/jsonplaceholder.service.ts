import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {

  constructor(
    private http: HttpClient,

  ) { }
  

  getData(): Observable <any> {
    const url = "https://jsonplaceholder.typicode.com/comments"
    return this.http.get<any>(url)
  }
  


}
