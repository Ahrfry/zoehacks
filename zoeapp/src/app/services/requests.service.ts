import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

//This is out send-receive data format.  We can just replicate this model for every type of communication between client-server
export class RequestsService {
  //Specify a URL (or ip:port)
  base_path = 'http://localhost:8081';
  constructor(private http: HttpClient) { }
  
  //This is our very first method to perform a POST request
  sendPostRequest(coors) {
    //Angular expected headers
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
      };
    
    //Our payload data that will be sent to the server
    let postData = coors;
    //the Angular post method (URL , payload, http headers)
    this.http.post("http://localhost:8081/coors", postData, requestOptions)
      .subscribe(data => {
        //should receive data here
        console.log(data);
       
      }, error => {
        console.log(error);
      });
  }

  //This is our very first method to perform a POST request
  initStreaming(message_size) {

    let payload = "";
    
    for(let i=0; i <message_size ; i++){
      payload = payload + "0";
    }

    //Angular expected headers
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
      };
    
    //Our payload data that will be sent to the server
    let postData = JSON.stringify({"woah":payload});
    //the Angular post method (URL , payload, http headers)
    this.http.post("http://localhost:8081/upload", postData, requestOptions)
      .subscribe(data => {
        //should receive data here
        console.log(data);
       
      }, error => {
        console.log(error);
      });
  }


}
