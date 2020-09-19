import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const api="http://localhost:5555/students/"
// const api1="http://localhost:5556/sign/"
@Injectable({
  providedIn: 'root'
})

export class DataService {

    saveData(data)
    {
return this.httpclient.post(api,data)
    }
    getData()
    {
return this.httpclient.get(api)
    }

  //  updateData(id,data)
  //  {
  //    return this.httpclient.put(api+id,data)
  //  }

  //  deleteData(id)
  //  {
  //    return this.httpclient.delete(api+id)
  //  }


//     saveData1(data1)
//     {
// return this.httpclient.post(api1,data1)
//     }
  constructor(private httpclient:HttpClient) { }
}
