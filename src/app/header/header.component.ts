import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private headerName = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  public setHeaderName(headerName: string) {
    this.headerName.emit(headerName);
  }

  @Output('headerSection')
  public get name() {
    return this.headerName;
  }



}
