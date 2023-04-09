import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-count',
  templateUrl: './add-count.component.html',
  styleUrls: ['./add-count.component.css']
})
export class AddCountComponent implements OnInit{

  number:number =0;
  @Output() myEvent = new EventEmitter<any>();

    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
   AddCount(){
    this.number +=1;
    this.myEvent.emit(this.number);
   }
}
