
import t from 't';

let template = `
  <div class="modal" data-id="{{=id}}" data-role="{{=role}}">
    <button class="modal-close">Cerrar</button>
    <h2>{{=title}}</h2>
    <p>{{=content}}</p>
  </div>
`;

export class ModalTemplate {

  constructor(){
    this.template = new t(template);
  }

  render(){
    return this.template.render(this.data);
  }

  setData(data){
    this.data = data;
    return this;
  }

}
