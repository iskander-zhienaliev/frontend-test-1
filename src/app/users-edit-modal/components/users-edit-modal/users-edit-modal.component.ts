import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
import {Observable} from "rxjs";
import {distinctUntilChanged, map, startWith} from "rxjs/operators";
import {User} from "../../../interfaces/user";

@Component({
    selector: 'app-users-edit-modal',
    templateUrl: './users-edit-modal.component.html',
    styleUrls: ['./users-edit-modal.component.css']
})
export class UsersEditModalComponent implements OnInit {
    form: FormGroup;
    isValid$: Observable<boolean>;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: { items: User[] },
        private dialogRef: MatDialogRef<UsersEditModalComponent>,
        private formBuilder: FormBuilder,
    ) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            users: this.formBuilder.array([])
        });

        this.data.items.forEach(item => {
            this.addUser(item)
        })

        this.isValid$ = this.form.statusChanges.pipe(
            distinctUntilChanged(),
            map(status => status === 'VALID'),
            startWith(Boolean(this.data.items.length))
        )
    }

    createUser(user?: User): FormGroup {
        if (user) {
            return this.formBuilder.group({
                name: [user.name, Validators.required],
                role: [user.role, Validators.required]
            });
        }
        return this.formBuilder.group({
            name: ['', Validators.required],
            role: ['', Validators.required]
        });
    }

    addUser(user?: User): void {
        this.userList.push(this.createUser(user));
    }

    deleteUser(userIdx: number) {
        if (this.userList.length > 1) {
            this.userList.removeAt(userIdx);
        } else {
            this.userList.controls[0].setValue({
                name: '',
                role: ''
            })
        }
    }

    get userList() {
        return this.form.controls["users"] as FormArray;
    }

    close(isSave = false) {
        if (isSave) {
            this.dialogRef.close({ data: this.form.value.users })
        }
        else {
            this.dialogRef.close()
        }
    }

}
