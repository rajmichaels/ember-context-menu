import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  
  contextMenuService: service('context-menu'),

  contextMenu(event) {
    let { model, menuActions, menuActionContext } = this;
    this.get('contextMenuService').show(event, menuActions, model, menuActionContext);
    return false;
  }

});
