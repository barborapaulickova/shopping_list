import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
    selector: 'app-recipes-list',
    templateUrl: './recipes-list.component.html',
    styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('A Test recipe', 'This is simpy a test', 'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2019/05/14092159/opener-wide4.jpg'),
        new Recipe('A Test recipe', 'This is simpy a test', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'),
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
