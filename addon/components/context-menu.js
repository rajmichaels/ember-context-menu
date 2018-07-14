import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { oneWay } from '@ember/object/computed';
import { on } from '@ember/object/evented';
import { next } from '@ember/runloop';

export default Component.extend({
  
  contextMenuService: service('context-menu'),
  router: service('-routing'),

  menuActions: oneWay('contextMenuService.menuActions'),

  subscribeRightClick: on('init', function() {
    this.get('contextMenuService').subscribe({
      eventName: 'handleRightClick',
      context: this,
      listener: this.handleRightClick
    });
  }),

  handleRightClick(event) {
    next(() => {
      let left = event.clientX;
      let top = event.clientY;
      this.setPosition(left, top);
      if (!this.$('.dropdown-toggle').hasClass('open')) {
        this.set('isOpen', true);
      }
    });
  },

  setPosition(left, top) {
    let menuElement = this.$('.dropdown-menu');
    let menuHeight = menuElement.height();
    let menuWidth = menuElement.width();
    let windowHeight = document.documentElement.clientHeight;
    let windowWidth = document.documentElement.clientWidth;
    if ((left + menuWidth) >  windowWidth) {
      left = left - (30 + (left + menuWidth) - windowWidth);
    }
    if ((top + menuHeight) >  windowHeight) {
      top = top - (30 + (top + menuHeight) - windowHeight);
    }
    this.setProperties({
      left: `${left}px`,
      top: `${top}px`
    });
  },

  unsubscribeRightClick: on('willDestroyElement', function() {
    this.get('contextMenuService').unsubscribe({
      eventName: 'handleRightClick',
      context: this,
      listener: this.handleRightClick
    });
  }),

  actions: {
    perform(item) {
      let currentRoute = getOwner(this).lookup(`route:${this.get('router.router.currentRouteName')}`);
      currentRoute.send(item.action, this.get('contextMenuService.model'));
      this.set('isOpen', false);
    },
    hide() {
      this.set('isOpen', false);
    }
  }

});
