import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  animations: [
    trigger('sideDrawerOpenClose', [
      state('sideDrawerOpen', style({
        opacity: 1,
        right: 0,
      })),
      state('sideDrawerClosed', style({
        opacity: 0,
        right: '-20vw',
      })),
      transition('sideDrawerOpen => sideDrawerClosed', [
        animate('0.3s')
      ]),
      transition('sideDrawerClosed => sideDrawerOpen', [
        animate('0.3s')
      ]),
    ]),
  ],
})
export class AddComponent implements OnInit {
  // Inputs
  @Input() isDrawerOpened: boolean | undefined;
  @Output() drawerClosed = new EventEmitter<boolean>();
  @Output() submittedForm = new EventEmitter<any>();
  sideDrawerOpened: any;

  model = {
    name: '',
    stockQuantity: 0,
    brand: '',
    category: '',
    creationTime: '',
  };
  formGroup: FormGroup | undefined;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log('bugra');
    this.loadForm();
  }

  loadForm() {
    this.formGroup = this.fb.group({
      name: [this.model.name],
    });
  }

  onSubmit() {

  }

  closeModelAddDrawer() {
    this.sideDrawerOpened = false;
    this.drawerClosed.emit(false);
  }

}
