import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Card } from '../model/card.interface';
import { Category } from '../model/category.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnChanges, OnInit {
  @Input()
  category?: Category;

  @Input()
  frame: string = 'weekly';
  description: string = 'Last Week - ';
  card: Card = {
    title: '',
    timeFrame: {
      current: 0,
      previous: 0,
    },
  };
  cardTitle: string = '';
  ngOnInit(): void {
    this.initializeCard();
    this.changeTitle();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category'] || changes['frame']) {
      this.changeTimeFrame(this.frame);
    }
  }

  private initializeCard(): void {
    if (this.category) {
      this.card = {
        title: this.category.title,
        timeFrame: this.category.timeframes.weekly,
      };
    }
  }
  changeTitle(): string {
    return (this.cardTitle = this.card.title.toLowerCase().replace(' ', '-'));
  }
  cardClr() {
    return { 'background-color': 'var(--color-' + this.cardTitle + ')' };
  }
  changeTimeFrame(frame: string): void {
    if (!this.category) return;

    if (this.card && this.category.timeframes) {
      switch (frame) {
        case 'daily':
          this.card.timeFrame = this.category.timeframes.daily;
          this.description = 'Yesterday - ';
          break;
        case 'monthly':
          this.card.timeFrame = this.category.timeframes.monthly;
          this.description = 'Last Month - ';
          break;
        case 'weekly':
        default:
          this.card.timeFrame = this.category.timeframes.weekly;
          this.description = 'Last Week - ';
      }
    }
  }
}
