import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AsyncTaskService {

  constructor(private http: HttpClient) {

   }
   getData()
   {
     return  this.http.get("https://jsonplaceholder.typicode.com/users");
   }
}
