import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DicServiceService, DicWord} from '../../dic-service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dictionary-child',
  templateUrl: './dictionary-child.component.html',
  styleUrls: ['./dictionary-child.component.css'],
})
export class DictionaryChildComponent implements OnInit {

  word: DicWord;
  private sub: Subscription;

  find() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    const meaning = this.dicServiceService.search(paramMap.get('word'));
      this.word = {
        word: paramMap.get('word'),
        meaning: meaning
      };
    });
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private dicServiceService: DicServiceService) {
  }

  ngOnInit() {
    this.find();
  }
}


