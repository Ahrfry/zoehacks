import { Component } from '@angular/core';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  constructor(private myServices: RequestsService) {
    //myServices.sendPostRequest('{"lat":30, "lng":20}');

    myServices.initStreaming(5000);
  }

}
