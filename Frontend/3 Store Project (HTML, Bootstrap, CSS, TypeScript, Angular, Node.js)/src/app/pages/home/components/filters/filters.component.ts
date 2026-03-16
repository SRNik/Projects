import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreAPIService } from 'src/app/services/storeAPI.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output('showCategory') sC = new EventEmitter<string>();

  categories: Array<string> | undefined;
  categoriesSubscription: Subscription | undefined;

  constructor(private storeAPIService: StoreAPIService) { }

  ngOnInit(): void {
    this.categoriesSubscription = this.storeAPIService.getAllCategories()
      .subscribe({
        next: (APIres) => {
          this.categories = APIres;
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  onShowCategory(categoryType: string) {
    console.log('works')
    this.sC.emit(categoryType);
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }

}
