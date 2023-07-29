import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataServiceService } from 'src/app/service/data-service.service';
@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.css']
})
export class EditPopupComponent {
  editedEmployee: any;

  constructor(
    public dialogRef: MatDialogRef<EditPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,public service:DataServiceService
  ) {
    
    this.editedEmployee = { ...data };
  }

  saveChanges() {
    console.log("check",this.editedEmployee)
    this.service.updateEmployee(this.editedEmployee);
    this.dialogRef.close(this.editedEmployee);
  }

  cancel() {
    this.dialogRef.close();
  }


  
}