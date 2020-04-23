import {Injectable} from '@angular/core';
import {IGrocery} from './grocery';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class GroceryService{
    constructor(private http:HttpClient){}
    private groceryURL='assets/groceries.json';


    getGroceries():Observable<IGrocery[]>{
        // HTTP get method returns observables, then cast it to IGrocery
        // console.log(this.http.get(this.groceryURL)); //observable is object
        console.log(this.http.get<IGrocery[]>(this.groceryURL));
        return this.http.get<IGrocery[]>(this.groceryURL);
       
    }
    
    // [{   
    //     "groceryID": 1, 
    //     "groceryName": "Brocolli",
    //     "groceryCode": "BRC-024",
    //     "quantity": 2,
    //     "price": 5.99,
    //     "gotIt": true,
    //     "imageUrl": "assets/images/broccoli.png"    
    // },
    // {
    //     "groceryID": 2, 
    //     "groceryName": "Slice of Cake",
    //     "groceryCode": "SLC-001",
    //     "quantity": 6,
    //     "price": 1.99,
    //     "gotIt": false,
    //     "imageUrl": "assets/images/cake-slice.png"    
    // },
    // {
    //     "groceryID": 3, 
    //     "groceryName": "Watermelon",
    //     "groceryCode": "WTM-102",
    //     "quantity": 1,
    //     "price": 8.99,
    //     "gotIt": false,
    //     "imageUrl": "assets/images/watermelon.png"   
    // }]

}
