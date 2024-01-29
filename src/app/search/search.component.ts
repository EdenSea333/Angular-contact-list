import { Component } from '@angular/core';
import { WrapperService } from '../wrapper.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(public wrapperService: WrapperService) { }

}
