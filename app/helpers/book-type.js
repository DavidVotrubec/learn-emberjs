import Ember from 'ember';

const paperBookTypes = [
    'paperback',
    'softback',
    'leaderback'
];

export function bookType([binding]/*, hash*/) {
  if (paperBookTypes.contains(binding)) {
      return 'Paper Book';
  }
  
  return 'Ebook';
}

export default Ember.Helper.helper(bookType);
