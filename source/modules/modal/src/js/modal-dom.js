import $ from 'jquery';

export class ModalDom {

  static get SELECTORS(){
    return {
      container: '#modal-container',
      close: '.modal-close'
    }
  }

  _createContainerNode(){

    if($(ModalDom.SELECTORS.container).length > 0) return;

    this.$modalContainer = $('<div />').attr('id', 'modal-container');
    $('body').append(this.$modalContainer);

  }

  _setEvents(){
    this.$modal.find(ModalDom.SELECTORS.close).on('click', () => {
      console.log('modal close');
    });
  }

  constructor(options){
    this.options = Object.assign({}, options);
  }

  init(){
    this._createContainerNode();
  }

  createModal(modalContent){

    this.$modal = $(modalContent);
    this._setEvents();

  }

  insertModal(){
    this.$modalContainer.append(this.$modal);
  }

}
