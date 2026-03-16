import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {
  @Output() sortingChange = new EventEmitter<string>()
  @Output() showItemsChange = new EventEmitter<number>()
  @Output() countColumnsChange = new EventEmitter<number>()


  sort = 'desc';
  itemsCount = 10;

  constructor() { }

  ngOnInit(): void {

  }

  onSortUpdated(newSort: string) {
    this.sort = newSort;
    this.sortingChange.emit(newSort);
  }

  onItemsUpdated(count: number) {
    this.itemsCount = count;
    this.showItemsChange.emit(this.itemsCount);
  }

  //Amount of coulmns to emit
  onColumnsUpdated(countColumns: number) {
    console.log('success')
    this.countColumnsChange.emit(countColumns)
  }

}
