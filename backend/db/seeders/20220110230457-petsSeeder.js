'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pets',
      [
        {
          name: 'Ino',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Farquad',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Beats',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Bethany',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Carly',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Dorothy',
          type: 'dog',
          forKids: false
        },
        {
          name: 'Birdie',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Caspian',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Layla',
          type: 'dog',
          forKids: false
        },
        {
          name: 'Leilanie',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Jacky',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Ivan',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Loba',
          type: 'dog',
          forKids: false
        },
        {
          name: 'Hermione',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Hennessy',
          type: 'dog',
          forKids: false
        },
        {
          name: 'Macaroni',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Linus',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Maui',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Tina',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Rocky',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Cheddar',
          type: 'dog',
          forKids: false
        },
        {
          name: 'Mitzi',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Thistle',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Vince',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Chloe',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Ronnie',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Pokey',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Neelo',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Mila',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Vader',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Jenga',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Bob Dole',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Pug',
          type: 'dog',
          forKids: true
        },
        {
          name: 'Abathur',
          type: 'cat',
          forKids: true
        },
        {
          name: 'Kerrigan',
          type: 'cat',
          forKids: true
        },
        {
          name: 'Loki',
          type: 'cat',
          forKids: true
        },
        {
          name: 'Mimi',
          type: 'cat',
          forKids: true
        },
        {
          name: 'Wiggles',
          type: 'cat',
          forKids: true
        },
        {
          name: 'Butterball',
          type: 'cat',
          forKids: true
        },
        {
          name: 'Kinda',
          type: 'cat',
          forKids: true
        },
        {
          name: 'Abalone',
          type: 'cat',
          forKids: true
        },
        {
          name: 'Mamacita',
          type: 'cat',
          forKids: true
        },
        {
          name: 'Julia',
          type: 'cat',
          forKids: true
        },
        {
          name: 'Tito',
          type: 'cat',
          forKids: true
        },
        {
          name: 'Poozle',
          type: 'cat',
          forKids: true
        },
        {
          name: 'Matu',
          type: 'cat',
          forKids: true
        },
        {
          name: 'Lily',
          type: 'cat',
          forKids: true
        },
        {
          name: 'Snuggles',
          type: 'cat',
          forKids: true
        },
        {
          name: 'Sleepy',
          type: 'cat',
          forKids: true
        },
        {
          name: 'Ruby',
          type: 'cat',
          forKids: true
        },
        {
          name: 'Thyme',
          type: 'cat',
          forKids: true
        },
        {
          name: 'Boots',
          type: 'cat',
          forKids: true
        },
        {
          name: 'Anton',
          type: 'cat',
          forKids: true
        },
        {
          name: 'Betsy',
          type: 'cat',
          forKids: true
        },
        {
          name: 'Po',
          type: 'other',
          forKids: true
        },
        {
          name: 'Hidey McHideFace',
          type: 'other',
          forKids: true
        },
        {
          name: 'Boxer',
          type: 'other',
          forKids: true
        },
        {
          name: 'Marty McFly',
          type: 'other',
          forKids: true
        },
        {
          name: 'Scar',
          type: 'other',
          forKids: true
        },
        {
          name: 'Dracarys',
          type: 'other',
          forKids: true
        },
        {
          name: 'Flipper',
          type: 'other',
          forKids: true
        },
        {
          name: 'Horsepower',
          type: 'other',
          forKids: true
        },
        {
          name: 'Blue',
          type: 'other',
          forKids: true
        },
        {
          name: 'Monster',
          type: 'other',
          forKids: true
        },
        {
          name: 'Clever Girl',
          type: 'other',
          forKids: true
        },
        {
          name: 'Giant',
          type: 'other',
          forKids: true
        },
        {
          name: 'Flap',
          type: 'other',
          forKids: true
        },
        {
          name: 'Stripes',
          type: 'other',
          forKids: true
        },
        {
          name: 'Jam',
          type: 'other',
          forKids: true
        },
        {
          name: 'Cuddles',
          type: 'other',
          forKids: true
        },
        {
          name: 'Splash',
          type: 'other',
          forKids: true
        },
        {
          name: 'Big Guy',
          type: 'other',
          forKids: true
        },
        {
          name: 'Turtle',
          type: 'other',
          forKids: true
        },
        {
          name: 'Elle',
          type: 'other',
          forKids: true
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pets', null, {});
  }
};
