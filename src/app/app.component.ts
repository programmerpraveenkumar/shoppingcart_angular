import { Component } from '@angular/core';
import {HttpServiceService} from './http-service.service';
import {CartServiceService} from './service/cart-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spring-angular';
  

  
  openCheckoutModel(){
    alert("open checkout model");
  }

  
  constructor( private http:HttpServiceService){
  

    this.http.postRequest("api/status",{}).subscribe(data=>{
        console.log("test",data);
    },error=>{
      alert("Server connection error "+error)
    })
    
   
  }
  


  

 
  
  
}
