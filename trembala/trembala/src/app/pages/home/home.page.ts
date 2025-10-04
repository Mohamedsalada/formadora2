import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; //  Adicionei isto

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  //  Adicionei CommonModule aqui
  imports: [IonicModule, RouterModule, FormsModule, CommonModule],
})
export class HomePage {
  cep: string = '';
  dados: any = null;
  errorMessage: string = '';

  resetResponse() {
    this.dados = null;
    this.errorMessage = '';
  }

  async consultarCep() {
    this.resetResponse();

    if (!this.cep || this.cep.length !== 8) {
      this.errorMessage = 'Por favor, digite um CEP válido com 8 dígitos.';
      return;
    }

    try {
      console.log('Consultando CEP:', this.cep);
      const response = await fetch(`https://viacep.com.br/ws/${this.cep}/json/`);

      if (!response.ok) {
        throw new Error('Erro ao consultar a API.');
      }

      const data = await response.json();
      console.log('Resposta da API:', data);

      if (data.erro) {
        this.errorMessage = 'CEP não encontrado.';
        return;
      }

      this.dados = data;
    } catch (error: any) {
      console.error('Erro na consulta do CEP:', error);
      this.errorMessage = error instanceof Error ? error.message : 'Erro desconhecido.';
    }
  }
}
