import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.css']
})
export class TestInputComponent implements OnInit {
  firstName: string | undefined;
  lastName: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  showMessage() {
    alert('Hi' + this.firstName + ' ' + this.lastName);
  }

}
