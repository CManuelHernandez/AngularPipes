import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css',
})
export class BasicPageComponent {
  public nameLower: string = 'manuel';
  public nameUpper: string = 'MANUEL';
  public fullName: string = 'mAnUeL hErNaNdEz';

  public customDate: Date = new Date();
}
