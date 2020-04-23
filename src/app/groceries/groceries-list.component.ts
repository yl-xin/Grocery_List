import {Component} from '@angular/core';
import {IGrocery} from './grocery';
import { GroceryService } from './grocery.service';
@Component({
    selector:'app-groceries',
    templateUrl:'groceries-list.component.html',
    styleUrls:['./groceries-list.component.css']
})
export class GroceryListComponent {
    pageTitle:'Component list';
    imageWidth:number=50;
    imageMargin:number=2;
    groceries:IGrocery[]=[];
    // inject the service
    constructor(private groceryService:GroceryService){}
    // get data from service using ngOnInit()
    ngOnInit():void{
        this.groceryService.getGroceries().subscribe(data=>this.groceries=data)
    }
    showImage:boolean =false;
    toggleImage(): void{
        this.showImage=!this.showImage;
    }
    listFilter:string= 'filter term';
}