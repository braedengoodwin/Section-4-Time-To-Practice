import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { calculateInvestmentResults } from '../../investment-results';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Input() investmentResults?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];
  @Output() calculateInvestment = new EventEmitter()

  initialInvestment = 0;
  annualInvestment = 0;
  expectedReturn = 5;
  duration = 10;

  onSubmit() {
    this.investmentResults = calculateInvestmentResults(
      this.initialInvestment,
      this.annualInvestment,
      this.expectedReturn,
      this.duration
    );
    console.log(this.investmentResults);

    this.initialInvestment = 0;
    this.annualInvestment = 0;
  }

  onCalculate(){
    this.calculateInvestment.emit(this.investmentResults)
    console.log(this.investmentResults)
  }

}
