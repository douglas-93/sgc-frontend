import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'cpf'
})
export class CpfPipe implements PipeTransform {

    transform(value: string | undefined): string {
        if (value === undefined) return ''
        
        let cpfFormatado = value.replace(/\D/g, '')
        cpfFormatado = cpfFormatado.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
        return cpfFormatado;
    }

}
