import { Component } from '@angular/core';
import { WrapperService } from '../wrapper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public wrapperService: WrapperService) { }

}
