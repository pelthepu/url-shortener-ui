import { AbstractControl } from '@angular/forms';

function isEmptyInputValue(value: string): boolean {
  return value == null || value.trim().length === 0;
}

export function notOnlyWhiteSpaceValidator(control: AbstractControl): { [key: string]: boolean } {
  return isEmptyInputValue(control.value) ? { onlyWhiteSpace: true } : null;
}
