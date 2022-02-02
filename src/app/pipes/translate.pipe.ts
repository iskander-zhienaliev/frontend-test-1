import {Pipe, PipeTransform} from "@angular/core";
import {UserRole} from "../interfaces/user";

const translation: Record<string, string> = {
    [UserRole.DEV]: 'Разработчик',
    [UserRole.ADMIN]: 'Администратор'
}

@Pipe({
    name: 'translate'
})
export class TranslatePipe implements PipeTransform {
    transform(value: string): string {
        return translation[value]
    }
}
