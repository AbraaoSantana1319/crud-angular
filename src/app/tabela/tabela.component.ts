import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabela',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})
export class TabelaComponent{
  formulario = new FormGroup({
    nome   : new FormControl('',[Validators.required, Validators.minLength(3)]),
    idade  : new FormControl(null,[Validators.required, Validators.min(0), Validators.max(120)]),
    cidade : new FormControl('',[Validators.required, Validators.minLength(3)])
  });
  //Visibilidade dos botões
  btnCadastrar : boolean = true;
  //Vetor
  vetor:Pessoa[] = [];
  indice: number = -1;
  //Função de cadastro
  cadastro(){
    //cadastrando as informações no vetor
    this.vetor.push(this.formulario.value as Pessoa)
    //limpando as informações dos campos do formulário
    this.formulario.reset();
    // console.table(this.vetor)
  }

  selecionar(indice : number){
    this.indice = indice;
    this.formulario.setValue({
      nome : this.vetor[indice].nome,
      idade  : this.vetor[indice].idade,
      cidade : this.vetor[indice].nome,
    })
    this.btnCadastrar = false;

  }
  editar(){
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    this.btnCadastrar = true;

    this.formulario.reset();
  }
  remover(){
    this.vetor.splice(this.indice, 1);
    this.btnCadastrar = true;

    this.formulario.reset();
  }
  cancelar(){
    this.btnCadastrar = true;

    this.formulario.reset();
  }

}

