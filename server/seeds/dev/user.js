
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'rowValue1', last_name: 'Last name 1', email: 'email1@gmail.com', password: '1', status: true},
        {first_name: 'rowValue2', last_name: 'Last name 2', email: 'email2@gmail.com', password: '1', status: true},
        {first_name: 'rowValue3', last_name: 'Last name 3', email: 'email3@gmail.com', password: '1', status: true},
        {first_name: 'rowValue4', last_name: 'Last name 4', email: 'email4@gmail.com', password: '1', status: true},
        {first_name: 'rowValue5', last_name: 'Last name 5', email: 'email5@gmail.com', password: '1', status: false},
      ]);
    });
};
