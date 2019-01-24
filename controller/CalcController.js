'use strict';

class CalcController {
  constructor() {
    this._locale = 'pt-BR';
    this._currentDate;
    this.$_displayCalc = document.querySelector('#display');
    this.$_date = document.querySelector('#data');
    this.$_time = document.querySelector('#hora');
    this.initialize();
  }

  initialize() {
    this.setDisplayTimeDate();
    setInterval(() => {
      this.setDisplayTimeDate();
    }, 1000);
  }

  setDisplayTimeDate() {
    this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
      day: '2-digit',
      month: 'long',
      year: '2-digit'
    });
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
  }

  get displaCalc() {
    return this.$_displayCalc.innerHTML;
  }

  set displaCalc(value) {
    this.$_displayCalc.innerHTML = value;
  }

  get displayTime() {
    return this.$_time.innerHTML;
  }

  set displayTime(time) {
    this.$_time.innerHTML = time;
  }

  get displayDate() {
    return this.$_date.innerHTML;
  }

  set displayDate(date) {
    this.$_date.innerHTML = date;
  }

  get currentDate() {
    return new Date();
  }

  set currentDate(date) {
    this._currentDate.innerHTML = date;
  }
}
