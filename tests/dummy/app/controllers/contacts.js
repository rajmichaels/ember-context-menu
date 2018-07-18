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