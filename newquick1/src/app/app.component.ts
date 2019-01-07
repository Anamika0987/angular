import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //template: `<h1>Hello God</h1>
    //         <h1>Hello User</h1>`  
  templateUrl: `./app.component.html`,

  styleUrls: ['./app.component.css'],
  styles: ['.box{color:red}'],
  
  
})
export class AppComponent  { 
 UserName = 'Arjun'; 
  Email = 'arjun@capgemini.com';
  password='arjun@123';
  
 // fName = 'Arjun';
  //lName = 'Doe';
  //changeValue() {
    //this.helloFn = this.helloFn === 'clicked' ? 'clicked again' : 'clicked';
  //}


}
