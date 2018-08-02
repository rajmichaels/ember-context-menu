import Component from '@ember/component';
import { computed } from '@ember/object';
import { getOwner } from '@ember/application';
import { inject as service } from '@ember/service';
import { oneWay } from '@ember/object/computed';
import { next } from '@ember/runloop';
import layout from '../templates/components/context-menu';
import { isPresent } from '@ember/utils';

const KEY = {
  DOWN_ARROW: 40,
  UP_ARROW: 38,
  ESC_KEY: 27,
  ENTER_KEY: 13
};

export default Component.extend({
  
  layout,

  elementId: '__ember__context__menu',

  classNames: ['__ember__context__menu'],

  attributeBindings: ['tabindex', 'style'],
  tabindex: '-1',

  style: computed('left', 'top', function() {
    return `left: ${this.get('left')};top:${this.get('top')};`;
  }),

  contextMenuService: service('context-menu'),
  router: service('-routing'),

  menuActions: oneWay('contextMenuService.menuActions'),

  menuItemTemplate: null,

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
      this.set('isOpen', true);
      this.$().focus();
    });
  },

  keyUp(event) {
    let { keyCode } = event;
    if (keyCode === KEY.DOWN_ARROW) {
      this.gotoNext();
    } else if (keyCode === KEY.UP_ARROW) {
      this.gotoPrevious();
    } else if ((keyCode === KEY.ENTER_KEY) || (keyCode === KEY.ESC_KEY)) {
      this.hide();
    }
  },

  gotoPrevious() {
    if (document.activeElement.id === '__ember__context__menu') {
      this.$('ul li').last().find('a').focus();
      return;
    }
    let focusedLiElement = this.$(document.activeElement).parent();
    if (focusedLiElement) {
      if (focusedLiElement.prev().hasClass('__ember__context__divider')) {
        this.$(focusedLiElement).prev().prev().find('a').focus();
        return;
      }
      this.$(focusedLiElement).prev().find('a').focus();
    }
  },

  gotoNext() {
    if (document.activeElement.id === '__ember__context__menu') {
      this.$('ul li').first().find('a').focus();
      return;
    }
    let focusedLiElement = this.$(document.activeElement).parent();
    if (focusedLiElement) {
      if (focusedLiElement.next().hasClass('__ember__context__divider')) {
        this.$(focusedLiElement).next().next().find('a').focus();
        return;
      }
      this.$(focusedLiElement).next().find('a').focus();
    }
  },

  focusOut() {
    next(() => {
      if (this.$().has(document.activeElement).length === 0) {
        this.hide();
      }
    });
  },

  setPosition(left, top) {
    let menuElement = this.$('.__ember__context__menu__dropdown');
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

  hide() {
    this.set('isOpen', false);
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
      let { menuActionContext, model } = this.get('contextMenuService');

      if (isPresent(menuActionContext)) {
        menuActionContext.send(item.action, model);
      } else {
        let currentRoute = getOwner(this).lookup(`route:${this.get('router.router.currentRouteName')}`);
        currentRoute.send(item.action, model);
      }
      this.hide();
    },
    hide() {
      this.hide();
    }
  }

});
