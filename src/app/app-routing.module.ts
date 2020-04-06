import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeaturesComponent} from './features/features.component';
import {PricingComponent} from './pricing/pricing.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [{path: 'features', component : FeaturesComponent},
                        {path: 'pricing', component : PricingComponent},
                        {path: 'home', component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
