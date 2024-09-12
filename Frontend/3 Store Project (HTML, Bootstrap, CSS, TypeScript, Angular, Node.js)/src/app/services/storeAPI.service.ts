import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

//All the api request will be sent to fakestoreapi.com

const STORE_BASE_URL: string = 'https://fakestoreapi.com'

@Injectable({
    providedIn: 'root'
})

export class StoreAPIService {

    constructor(private http: HttpClient) { }

    getAllProducts(limit = '10', sort = 'desc', category?: string): Observable<Array<Product>> {
        return this.http.get<Array<Product>>(
            `${STORE_BASE_URL}/products${category ? `/category/` + category : ``}?sort=${sort}&limit=${limit}`
        )
    };

    getAllCategories(): Observable<Array<string>> {
        return this.http.get<Array<string>>(
            `${STORE_BASE_URL}/products/categories`
        );
    }

}