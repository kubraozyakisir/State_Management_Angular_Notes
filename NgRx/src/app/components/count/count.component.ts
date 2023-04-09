import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  @Input() number : number =0;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
