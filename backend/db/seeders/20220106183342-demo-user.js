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
      {
        email: 'fakeuser3@fake.com',
        username: 'FakeUser3',
        hashedPassword: bcrypt.hashSync('fakeuser3', saltRounds),
      },
      {
        email: 'fakeuser4@fake.com',
        username: 'FakeUser4',
        hashedPassword: bcrypt.hashSync('fakeuser4', saltRounds),
      },
      {
        email: 'fakeuser5@fake.com',
        username: 'FakeUser5',
        hashedPassword: bcrypt.hashSync('fakeuser5', saltRounds),
      },
      {
        email: 'fakeuser6@fake.com',
        username: 'FakeUser6',
        hashedPassword: bcrypt.hashSync('fakeuser6', saltRounds),
      },
      {
        email: 'fakeuser7@fake.com',
        username: 'FakeUser7',
        hashedPassword: bcrypt.hashSync('fakeuser7', saltRounds),
      },
      {
        email: 'fakeuser8@fake.com',
        username: 'FakeUser8',
        hashedPassword: bcrypt.hashSync('fakeuser8', saltRounds),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2', 'FakeUser3', 'FakeUser4', 'FakeUser5', 'FakeUser6', 'FakeUser7', 'FakeUser8'] }
    }, {});
  }
};
