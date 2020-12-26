import { AbstractControl } from '@angular/forms';

export class PasswordValidators {

    static passwordShouldMatch(control: AbstractControl) {
        let password = control.get('pass');
        let repassword = control.get('repass');
                
        if (password.value !== repassword.value){
            return { passwordShouldMatch: true };
        }
        return false;
    }
}