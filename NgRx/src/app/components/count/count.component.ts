import { Component, Input, OnInit } from '@angular/core';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
 // @Input() number : number =0;
  constructor(
    public _count :CountService
  ){}
    ngOnInit(): void {
   }
}
