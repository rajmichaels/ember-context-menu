ember-simple-context-menu
==============================================================================

A Simple ember context menu component..

[DEMO](https://rajmichaels.netlify.com/)

Installation
------------------------------------------------------------------------------

```
ember install ember-simple-context-menu
```


Usage
------------------------------------------------------------------------------


In your application.hbs

```handlebars
{{context-menu}}
```

### Right Click Trigger

In your list or any template

```handlebars
<div class="container">
  <table class="table table-hover">
    <thead class="thead-light">
      <tr>
        <th>Name</th>
        <th>City</th>
        <th>Education</th>
        <th>Work City</th>
      </tr>
    </thead>
    <tbody>
      {{#each model as |contact|}}
        {{#right-click menuActions=menuActions model=contact tagName="tr"}}
          <td>{{contact.name}}</td>
          <td>{{contact.city}}</td>
          <td>{{contact.education}}</td>
          <td>{{contact.work}}</td>
        {{/right-click}}
      {{/each}}
    </tbody>
  </table>
</div>
```

### Menu Actions
In your Controller

```javascript
import Controller from '@ember/controller';

export default Controller.extend({
  menuActions: [
    { label: 'Edit', action: 'edit' },
    { label: 'Email', action: 'email' },
    { label: 'Print', action: 'print' },
    { label: 'Download', action: 'download' },
    {},
    { label: 'Delete', action: 'delete' }
  ]
});
```

### Actions Handling

In your current route

```javascript
import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    edit(model) {
      console.log("Edit " + model.name);
    },
    email(model) {
      console.log("Email " + model.name);
    },
    print(model) {
      console.log("Print " + model.name);
    },
    download(model) {
      console.log("Download " + model.name);
    },
    delete(model) {
      console.log("Delete " + model.name);
    }
  }
});
```


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone https://github.com/rajmichaels/ember-context-menu.git`
* `cd ember-context-menu`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
