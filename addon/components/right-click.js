import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  
  contextMenuService: service('context-menu'),

  contextMenu(event) {
    let model = this.get('model');
    let menuActions = this.get('menuActions');
    this.get('contextMenuService').show(event, menuActions, model);
    return false;
  }

});
