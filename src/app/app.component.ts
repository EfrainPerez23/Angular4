import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private headerName: string = 'recipes';


  public setHeaderName(headerName: string) {
    this.headerName = headerName;
  }

  public getHeaderName(): string {
    return this.headerName;
  }
}
