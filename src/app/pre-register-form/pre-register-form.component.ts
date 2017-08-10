import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-pre-register-form',
  templateUrl: './pre-register-form.component.html',
  styleUrls: ['./pre-register-form.component.css']
})
export class PreRegisterFormComponent implements OnInit {

  formulario: FormGroup;
  constructor(private formBuilder:FormBuilder,private http:Http) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome:[null],
      email:[null]
    });
  }

  onSubmit(){
    this.http.post('https://httpbin.org/post',
    JSON.stringify(this.formulario.value)).map(res=>res)
    .subscribe(dados =>{
      console.log(dados);
    },(error: any) => alert('erro'));
  }
}
