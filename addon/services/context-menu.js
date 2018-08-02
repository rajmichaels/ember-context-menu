import Service from '@ember/service';
import Evented from '@ember/object/evented';

export default Service.extend(Evented, {
  
  menuActions: null,
  model: null,

  show(event, menuActions, model, menuActionContext) {
    this.setProperties({
      menuActions,
      model,
      menuActionContext
    });
    this.trigger('handleRightClick', event);
  },

  subscribe(options) {
    this.on(options.eventName, options.context, options.listener);
  },

  unsubscribe(options) {
    this.off(options.eventName, options.context, options.listener);
  }


});
