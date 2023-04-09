import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountService } from 'src/app/services/count.service';
import { countIncrement } from 'src/app/state/counter.action';

@Component({
  selector: 'app-add-count',
  templateUrl: './add-count.component.html',
  styleUrls: ['./add-count.component.css']
})
export class AddCountComponent implements OnInit{

  // number:number =0;
  // @Output() myEvent = new EventEmitter<any>();

  constructor(
    private store :Store<any>
  //  private _count: CountService  2.
  ){}

    ngOnInit(): void {

    }
   addCount(){
    this.store.dispatch(countIncrement());
   // this._count.number+=1;  2.
   // this.number +=1;
   // this.myEvent.emit(this.number);
   }
}
