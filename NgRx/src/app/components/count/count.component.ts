import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
 // @Input() number : number =0;

 number$:Observable<number>;

 constructor(
    //public _count :CountService  2.
    private store : Store<{number:number}>
  ){
    this.number$=this.store.select("number");
  }



  ngOnInit(): void {
   }
}
