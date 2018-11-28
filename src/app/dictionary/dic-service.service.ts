import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DicServiceService implements OnInit {
  private readonly words: DicWord[];

  search(word: string): string {
    if (word === '' || word === null) {
      return '';
    }
    if (typeof word === 'number') {
      word = word + '';
    }
    if (typeof word !== 'string') {
      return 'not a String';
    }
    const foundedWord = this.words.find((item => item.word === word.toLowerCase()));
    if (foundedWord) {
      return foundedWord.meaning;
    }
    return 'not found';
  }

  add(word: DicWord): void {
    if (word) {
      this.words.push(word);
    }
  }

  listMatch(word: string): DicWord[] {
    const dicWords: DicWord[] = [];
    if (word !== null && word !== '') {
      const regex = '^.*(' + word.toLowerCase() + ').*$';
      for (const dicWord of this.words) {
        if (dicWord.word.match(regex)) {
          dicWords.push(dicWord);
        }
      }
    }
    return dicWords;
  }

  constructor() {
    this.words = [
      {word: 'cow', meaning: 'bo`'},
      {word: 'cat', meaning: 'meo`'},
      {word: 'chick', meaning: 'ga`'},
      {word: 'dog', meaning: 'cho"'},
      {word: 'fish', meaning: 'ca"'}
    ];
  }

  ngOnInit(): void {
  }
}

export interface DicWord {
  word: string;
  meaning: string;
}
