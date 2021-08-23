import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Inventory} from "../data/services/inventory.model";

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
export class AddComponent implements OnInit, OnChanges {
  // Inputs
  @Input() isDrawerOpened: boolean | undefined;
  @Output() drawerClosed = new EventEmitter<boolean>();
  @Output() submittedForm = new EventEmitter<object>();
  sideDrawerOpened: any;

  model: Inventory = {
    name: '',
    stockQuantity: 0,
    brand: '',
    category: '',
    creationTime: null,
  };
  // @ts-ignore
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isDrawerOpened) {
      this.sideDrawerOpened = !this.sideDrawerOpened;
    }
  }

  loadForm() {
    this.formGroup = this.fb.group({
      name: [this.model.name, Validators.compose([
        Validators.required,
        Validators.maxLength(250)
      ])],
      stockQuantity: [this.model.stockQuantity, Validators.compose([
        Validators.required,
      ])],
      brand: [this.model.brand, Validators.compose([
        Validators.required,
      ])],
      category: [this.model.category, Validators.compose([
        Validators.required,
      ])],
    });
  }

  onSubmit() {
    this.model.creationTime = new Date();
    this.submittedForm.emit(this.model);
    this.drawerClosed.emit(false);
  }

  closeModelAddDrawer() {
    this.sideDrawerOpened = false;
    this.drawerClosed.emit(false);
  }

}
