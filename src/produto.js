import { LightningElement, api } from "lwc";


export default class Produto extends LightningElement {
 /*crie duas propriedades públicas
 nome e preço
  mostrar seus valores no produto.html 
  e chamar o comp dentro do app
 3x valores de produtos diferentes 
 
 1- importa o api
 2- criar as prop*/
 /* produto = 'X';
  preco = 'X'; */

  @api nome;
  @api preco;
}