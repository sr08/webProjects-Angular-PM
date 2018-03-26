import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  showImage: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 2;
  _listFilter: string;
  errorMessage: string;

  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[];
  constructor(private _product: ProductService) {

    //   this.listFilter = 'cart';
  }

  ngOnInit() {
    // this.products = this._product.getProducts();
    this._product.getProducts().subscribe(
      products => {this.products = products;
                    this.filteredProducts = this.products; },
      error => this.errorMessage = <any>error
    );
    this.filteredProducts = this.products;
  }
  toToggle() {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((products: IProduct) => products.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);

  }
  onRatingClicked(message: string): void {
      this.pageTitle = 'ProductList ' + message;
  }

}
