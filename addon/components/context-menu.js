import Component from '@ember/component';
import { getOwner } from '@ember/application';
import { inject as service } from '@ember/service';
import { oneWay } from '@ember/object/computed';
import { next } from '@ember/runloop';
import layout from '../templates/components/context-menu';

export default Component.extend({
  
  layout,

  contextMenuService: service('context-menu'),
  router: service('-routing'),

  menuActions: oneWay('contextMenuService.menuActions'),

  init() {
    this._super(...arguments);
    this.get('contextMenuService').subscribe({
      eventName: 'handleRightClick',
      context: this,
      listener: this.handleRightClick
    });
  },

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
    let menuElement = this.$('.__ember__context__dropdown__menu');
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

  willDestroyElement() {
    this.get('contextMenuService').unsubscribe({
      eventName: 'handleRightClick',
      context: this,
      listener: this.handleRightClick
    });
    this._super(...arguments);
  },

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
