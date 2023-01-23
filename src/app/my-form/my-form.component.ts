
import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {
  user: User = new User( "", "", "", "");
  
  constructor() {
    
  }
  
  onSubmit(): void {
    console.log(this.user)
    
  }

}



