import Ember from 'ember';

/*export function formatDate(params) {
  let date = params[0]
  return moment(date).fromNow();
}*/

export function formatDate() {
return Date().toString();
}

export default Ember.Helper.helper(formatDate);
