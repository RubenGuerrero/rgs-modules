import {Modal} from 'modal';

(() => {


  let testModal = new Modal({
    title: 'Hello World Modal',
    content: 'This is the content'
  });


  testModal.on(Modal.EVENTS.create, () => {
    console.log('[Page] Modal created!');
  });

  testModal.on(Modal.EVENTS.delete, () => {
    console.log('[Page] Modal deleted!');
  });


  document.getElementById('create-modal').addEventListener('click', () => {
    testModal.show();
  });

  document.getElementById('delete-modal').addEventListener('click', () => {
    testModal.delete();
  });

})();
