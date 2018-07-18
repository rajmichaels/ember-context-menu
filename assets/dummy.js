"use strict";



define('dummy/app', ['exports', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('dummy/components/context-menu', ['exports', 'ember-context-menu/components/context-menu'], function (exports, _contextMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contextMenu.default;
    }
  });
});
define('dummy/components/right-click', ['exports', 'ember-context-menu/components/right-click'], function (exports, _rightClick) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rightClick.default;
    }
  });
});
define('dummy/controllers/contacts', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    menuActions: [{ label: 'Edit', action: 'edit' }, { label: 'Email', action: 'email' }, { label: 'Print', action: 'print' }, { label: 'Download', action: 'download' }, {}, { label: 'Delete', action: 'delete' }]
  });
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('dummy/router', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('contacts', { path: '/' });
  });

  exports.default = Router;
});
define('dummy/routes/contacts', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model() {
      return [{
        name: 'VEL S',
        city: 'Madurai',
        education: 'B.E',
        work: 'Chennai'
      }, {
        name: 'Bala',
        city: 'Madurai',
        education: 'B.E',
        work: 'Chennai'
      }, {
        name: 'BalaChandar',
        city: 'Madurai',
        education: 'B.E',
        work: 'Chennai'
      }, {
        name: 'Pradeep Chandar',
        city: 'Madurai',
        education: 'B.E',
        work: 'Chennai'
      }, {
        name: 'Raj Michaels',
        city: 'Madurai',
        education: 'B.E',
        work: 'Chennai'
      }];
    },
    actions: {
      edit(model) {
        alert("Edit " + model.name);
      },
      email(model) {
        alert("Email " + model.name);
      },
      print(model) {
        alert("Print " + model.name);
      },
      download(model) {
        alert("Download " + model.name);
      },
      delete(model) {
        alert("Delete " + model.name);
      }
    }
  });
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('dummy/services/context-menu', ['exports', 'ember-context-menu/services/context-menu'], function (exports, _contextMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contextMenu.default;
    }
  });
});
define("dummy/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vAazhwgR", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"top-bar text-center\"],[7],[0,\"\\n  \"],[6,\"h2\"],[9,\"id\",\"title\"],[7],[0,\"\\n    Ember Context Menu Component\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\\n\"],[1,[25,\"context-menu\",null,[[\"menuItemTemplate\"],[\"menu-item\"]]],false]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});
define("dummy/templates/contacts", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "AeF4Qi+j", "block": "{\"symbols\":[\"contact\"],\"statements\":[[6,\"div\"],[9,\"class\",\"\"],[7],[0,\"\\n  \"],[6,\"table\"],[9,\"class\",\"table table-hover\"],[7],[0,\"\\n    \"],[6,\"thead\"],[9,\"class\",\"thead-light\"],[7],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[7],[0,\"Name\"],[8],[0,\"\\n        \"],[6,\"th\"],[7],[0,\"City\"],[8],[0,\"\\n        \"],[6,\"th\"],[7],[0,\"Education\"],[8],[0,\"\\n        \"],[6,\"th\"],[7],[0,\"Work City\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tbody\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[4,\"right-click\",null,[[\"menuActions\",\"model\",\"tagName\"],[[20,[\"menuActions\"]],[19,1,[]],\"tr\"]],{\"statements\":[[0,\"          \"],[6,\"td\"],[7],[1,[19,1,[\"name\"]],false],[8],[0,\"\\n          \"],[6,\"td\"],[7],[1,[19,1,[\"city\"]],false],[8],[0,\"\\n          \"],[6,\"td\"],[7],[1,[19,1,[\"education\"]],false],[8],[0,\"\\n          \"],[6,\"td\"],[7],[1,[19,1,[\"work\"]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/contacts.hbs" } });
});
define("dummy/templates/menu-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FfuNPTVs", "block": "{\"symbols\":[],\"statements\":[[6,\"a\"],[9,\"class\",\"__ember__context__dropdown__item\"],[9,\"href\",\"#\"],[3,\"action\",[[19,0,[]],\"perform\",[20,[\"item\"]]]],[7],[0,\"\\n  \"],[1,[20,[\"item\",\"label\"]],false],[0,\"\\t\\t\\t\\t\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/menu-item.hbs" } });
});


define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("dummy/app")["default"].create({});
}
//# sourceMappingURL=dummy.map
