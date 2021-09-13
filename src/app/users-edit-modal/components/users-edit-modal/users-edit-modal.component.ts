import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-users-edit-modal',
  templateUrl: './users-edit-modal.component.html',
  styleUrls: ['./users-edit-modal.component.css']
})
export class UsersEditModalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<UsersEditModalComponent>
  ) { }

  ngOnInit(): void {
  }

}
