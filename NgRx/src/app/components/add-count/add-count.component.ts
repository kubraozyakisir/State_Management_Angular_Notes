import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-add-count',
  templateUrl: './add-count.component.html',
  styleUrls: ['./add-count.component.css']
})
export class AddCountComponent implements OnInit{

  // number:number =0;
  // @Output() myEvent = new EventEmitter<any>();

  constructor(
    private _count: CountService
  ){}

    ngOnInit(): void {

    }
   AddCount(){
    this._count.number+=1;
   // this.number +=1;
   // this.myEvent.emit(this.number);
   }
}
