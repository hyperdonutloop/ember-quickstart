import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
  model() {
    return ['Odin', 'Morti', 'Hypebeast', 'Helios']
  }
}
