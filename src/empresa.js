//passo 1 - importar a api
import { LightningElement, api } from "lwc";


export default class Empresa extends LightningElement {
  //propriedades públicas para receber dados do pai?

  //passo 2- criar os atributos
  @api nome;
  @api cnpj;
}