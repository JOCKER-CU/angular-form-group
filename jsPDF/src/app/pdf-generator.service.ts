import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {

  constructor() { }

  generatePdf() {
    const doc = new jsPDF();
    doc.text("Hello world!", 10, 10);
    doc.addPage();
    doc.text("This is page 2 ", 10, 10);


    const imgData = 'data:image/jpeg;base64,...';
    doc.addImage(imgData, 'JPEG', 15, 40, 180, 160);

    doc.line(20, 20, 60, 20);
    doc.rect(20, 30, 40, 10);
    doc.ellipse(50, 50, 10, 10);
    doc.save("example.pdf");
  }
}
