import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  constructor() { }

  copyToClipboard(message: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = message;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}