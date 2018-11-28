import {Component, OnInit} from '@angular/core';
import {DicWord} from '../dic-service.service';
import {DicServiceService} from '../dic-service.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  words: DicWord[];
  private dicService: DicServiceService;

  constructor(dicService: DicServiceService) {
    this.dicService = dicService;
  }

  search(word: string): void {
    if (word === '' && word === null) {
      this.words = [];
    }
    this.words = this.dicService.listMatch(word);
  }

  ngOnInit() {
  }

}
