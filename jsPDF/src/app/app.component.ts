import { Component, ViewChild } from '@angular/core';
import { PdfGeneratorService } from './pdf-generator.service';
import { MatDialog } from '@angular/material/dialog';
import { OtpDialogComponent } from './otp-dialog/otp-dialog.component';
import { NgOtpInputComponent } from 'ng-otp-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jsPDF';
  // @ViewChild(NgOtpInputComponent, { static: false }) ngOtpInput!: NgOtpInputComponent;
  constructor(private pdfGeneratorService: PdfGeneratorService, public dialog: MatDialog) { }

  generatePdf() {
    this.pdfGeneratorService.generatePdf();
  }


  openOtpDialog(): void {
    const dialogRef = this.dialog.open(OtpDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('Received OTP: ', result);
    });
  }

}
