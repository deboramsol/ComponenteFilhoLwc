/*mportar da biblioteca lwc, o api 
o api permite que o atributo desejado se tore público,
ou seja, receba dados de fora (pai)
propriedade pública
*/
import { LightningElement, api} from "lwc";


export default class Child extends LightningElement {
  //decorando o filho para receber dados do pai
  //@api nomeDaPropriedade
  @api nome;
}
