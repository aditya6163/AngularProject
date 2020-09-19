import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const api="http://localhost:5556/signup/"

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  saveData(data)
    {
return this.httpclient.post(api,data)
    }
    getData()
    {
return this.httpclient.get(api)
    }
  constructor(private httpclient:HttpClient) { }
}
