'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const saltRounds = 10;
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'fakeuser1@fake.com',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('fakeuser1', saltRounds),
      },
      {
        email: 'fakeuser2@fake.com',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('fakeuser2', saltRounds),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
