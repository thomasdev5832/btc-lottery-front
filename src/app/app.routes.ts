import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuyTicketComponent } from './components/buy-ticket/buy-ticket.component';
import { ResultComponent } from './components/result/result.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'buy-ticket', component: BuyTicketComponent },
    { path: 'result', component: ResultComponent },
];
