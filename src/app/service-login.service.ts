import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

const api="http://localhost:5555/logins/"

@Injectable({
  providedIn: 'root'
})

export class ServiceLoginService {

  saveData(data)
  {
    return  this.httpclient.post(api,data)
  }
  constructor(private httpclient:HttpClient) { }
}
