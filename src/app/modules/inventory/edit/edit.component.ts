import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Inventory} from "../data/services/inventory.model";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
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
export class EditComponent implements OnInit, OnChanges {
  // Inputs
  @Input() isDrawerOpened: boolean | undefined;
  @Input() inventoryObject: Inventory = {};
  @Output() drawerClosed = new EventEmitter<boolean>();
  @Output() submittedForm = new EventEmitter<object>();
  sideDrawerOpened: any;


  inventories: Inventory[] = [];
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
      id: [this.inventoryObject.id],
      name: [this.inventoryObject.name, Validators.compose([
        Validators.required,
        Validators.maxLength(250)
      ])],
      stockQuantity: [this.inventoryObject.stockQuantity, Validators.compose([
        Validators.required,
        Validators.min(1)
      ])],
      brand: [this.inventoryObject.brand, Validators.compose([
        Validators.required,
      ])],
      category: [this.inventoryObject.category, Validators.compose([
        Validators.required,
      ])],
      creationTime: [this.inventoryObject.creationTime],
    });
  }

  onSubmit() {
    let updatedObject: Inventory = {
      ...this.formGroup.value,
      updatedTime: new Date()
    }
    this.submittedForm.emit(updatedObject);
    this.drawerClosed.emit(false);
  }

  closeModelAddDrawer() {
    this.sideDrawerOpened = false;
    this.drawerClosed.emit(false);
  }

}
