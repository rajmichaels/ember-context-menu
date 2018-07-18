import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        name: 'VEL S',
        city: 'Madurai',
        education: 'B.E',
        work: 'Chennai'
      },
      {
        name: 'Bala',
        city: 'Madurai',
        education: 'B.E',
        work: 'Chennai'
      },
      {
        name: 'BalaChandar',
        city: 'Madurai',
        education: 'B.E',
        work: 'Chennai'
      },
      {
        name: 'Pradeep Chandar',
        city: 'Madurai',
        education: 'B.E',
        work: 'Chennai'
      },
      {
        name: 'Raj Michaels',
        city: 'Madurai',
        education: 'B.E',
        work: 'Chennai'
      }
    ];
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