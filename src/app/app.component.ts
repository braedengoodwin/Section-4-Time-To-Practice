import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

const DUMMY_DATA = {
  year: 1,
  interest: 2,
  valueEndOfYear: 3,
  annualInvestment: 4,
  totalInterest: 5,
  totalAmountInvested: 6,
};

interface investmentObj {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}[];

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  test = DUMMY_DATA;
  finalResults!: investmentObj;

  onCalculateInvestmentInAppComp(results: investmentObj){
    this.finalResults = results
    console.log(results)
  }
}
