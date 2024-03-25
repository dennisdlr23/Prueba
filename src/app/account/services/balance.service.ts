import { Injectable } from '@angular/core';
import { Balance } from '../interfaces/balance.interface';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  private records: Balance[] = [];
  private counter: number = 0;
  private counterIncome: number = 0;
  private counterExpenses: number = 0;

  constructor() { }

  addRecord(record: Balance){
    record.id = Date.now();

    if( record.type === 'egreso' && record.amount > this.counter) {
      window.alert("El monto del egreso supera el saldo actual. No se puede agregar el registro.");
      return;
    }

    this.records.push(record);
    if( record.type === 'ingreso'){
      this.counter += record.amount;
      this.counterIncome += record.amount;
      console.log("Ingresos: " + this.counterIncome);
    } else {
      this.counter -= record.amount;
      this.counterExpenses += record.amount;
      console.log("Gastos: " + this.counterExpenses);
    }
  }

  deleteRecord(id: number){
    const index = this.records.findIndex(record => record.id === id);
    if( index !== -1){
      const deletedRecord = this.records[index];
      if(deletedRecord.type === 'ingreso'){
        const egresosTotal = this.records
          .filter(record => record.type === 'egreso')
          .reduce((total, record) => total + record.amount, 0);
        if (egresosTotal > this.counter - deletedRecord.amount) {
          window.alert("No se puede eliminar este registro de ingreso porque el monto total de los egresos supera el monto total de los ingresos.");
          return;
        }
        this.counter -= deletedRecord.amount;
        this.counterIncome -= deletedRecord.amount;
      } else {
        this.counter += deletedRecord.amount;
        this.counterExpenses -= deletedRecord.amount;
      }
      this.records.splice(index, 1);
    }
  }

  getRecords(){
    return this.records.slice();
  }

  getCounter(){
    return this.counter;
  }

  getCounterIncome(){
    return this.counterIncome;
  }
  getCouterExpenses(){
    return this.counterExpenses;
  }

}
