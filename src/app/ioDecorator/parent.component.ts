import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {

  msg: number = 0;

  onNotify(message: number): void {
      
      this.msg =  message;
  }

}
