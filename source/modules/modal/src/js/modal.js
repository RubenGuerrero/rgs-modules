
import {utils} from 'utils';

import {ModalDom} from './modal-dom';
import {ModalTemplate} from './modal-template';

export class Modal {

  static get OPTIONS(){
    return {
      title: '',
      content: '',
      role: '',
      template: new ModalTemplate()
    }
  }

  static get EVENTS(){
    return {
      create: 'create',
      delete: 'delete'
    }
  }

  _getTemplateData(){
    return {
      id: utils.generateUniqueId('modal'),
      role:this.options.role,
      title: this.options.title,
      content: this.options.content
    }
  }

  constructor(options){

    this.options = Object.assign({}, Modal.OPTIONS, options);
    this.dom = new ModalDom();

    utils.makeObservable(this, [
      Modal.EVENTS.create,
      Modal.EVENTS.delete
    ]);

  }


  create(){

    let templateData = this._getTemplateData();

    this.options.template.setData(templateData);

    this.dom.init();
    this.dom.createModal(this.options.template.render());
    this.dom.insertModal();

    this.trigger(Modal.EVENTS.create);
  }

  delete(){

    this.dom.deleteModal();

    this.trigger(Modal.EVENTS.delete);
  }

  show(){
    this.create();
  }

  hide(){

  }

};
