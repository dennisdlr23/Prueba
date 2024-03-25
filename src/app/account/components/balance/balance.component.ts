import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Balance } from '../../interfaces/balance.interface';
import { BalanceService } from '../../services/balance.service';

@Component({
  selector: 'account-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],

})
export class BalanceComponent implements OnInit {

  records: Balance[] = [];
  counter: number = 0;
  counterExpenses: number = 0;
  counterIncome: number = 0;
  newRecord: Balance = { id: 0, description: '', type: 'ingreso', amount: 0};

  constructor( private balanceService: BalanceService ){}


  ngOnInit(): void {
    this.records = this.balanceService.getRecords();
    this.counter = this.balanceService.getCounter();
    }

    addRecord(){
      this.balanceService.addRecord(this.newRecord);
      this.newRecord = { id: 0, description: '', type: 'ingreso', amount: 0};
      this.updateRecords();
    }

    deleteRecord(id: number ){
      this.balanceService.deleteRecord(id);
      this.updateRecords();
    }
    private updateRecords() {
      this.records = this.balanceService.getRecords();
      this.counter = this.balanceService.getCounter();
      this.counterIncome = this.balanceService.getCounterIncome();
      this.counterExpenses = this.balanceService.getCouterExpenses();
    }
}
