import Route from '@ember/routing/route';

export default class StudentsRoute extends Route {
  model() {
    return ['Alex', 'Bobby', 'Cindy'];
  }
}
