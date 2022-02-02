import {Component} from '@angular/core';
import {User, UserRole} from "./interfaces/user";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {UsersEditModalComponent} from "./users-edit-modal/components/users-edit-modal/users-edit-modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public users: User[] = [
    {
      name: "Воронцов Артём Александрович",
      role: UserRole.ADMIN
    },
    {
      name: "Мадонов Борис Игоревич",
      role: UserRole.DEV
    }
  ];

  constructor(
    private dialog: MatDialog
  ) {
  }

  public onEditUsers(): void {
    const dialogRef: MatDialogRef<UsersEditModalComponent> = this.dialog.open(UsersEditModalComponent, {
      panelClass: "full-screen-dialog",
      data: {
        items: this.users
      }
    })
    dialogRef.afterClosed().subscribe((dialogResult) => {
      if (dialogResult) {
        this.users = [ ...dialogResult.data]
      }
    });
  }
}
