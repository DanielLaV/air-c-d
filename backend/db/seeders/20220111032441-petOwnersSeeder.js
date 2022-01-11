'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PetOwners',
      [
        {
          ownerId: 1,
          petId: 1
        },
        {
          ownerId: 2,
          petId: 2
        },
        {
          ownerId: 3,
          petId: 3
        },
        {
          ownerId: 4,
          petId: 4
        },
        {
          ownerId: 5,
          petId: 5
        },
        {
          ownerId: 6,
          petId: 6
        },
        {
          ownerId: 7,
          petId: 7
        },
        {
          ownerId: 8,
          petId: 8
        },
        {
          ownerId: 9,
          petId: 9
        },
        {
          ownerId: 1,
          petId: 10
        },
        {
          ownerId: 2,
          petId: 11
        },
        {
          ownerId: 3,
          petId: 12
        },
        {
          ownerId: 4,
          petId: 13
        },
        {
          ownerId: 5,
          petId: 14
        },
        {
          ownerId: 6,
          petId: 15
        },
        {
          ownerId: 7,
          petId: 16
        },
        {
          ownerId: 8,
          petId: 17
        },
        {
          ownerId: 9,
          petId: 18
        },
        {
          ownerId: 1,
          petId: 19
        },
        {
          ownerId: 2,
          petId:20
        },
        {
          ownerId: 3,
          petId:21
        },
        {
          ownerId:4 ,
          petId:22
        },
        {
          ownerId:5 ,
          petId:23
        },
        {
          ownerId:6 ,
          petId:24
        },
        {
          ownerId:7 ,
          petId:25
        },
        {
          ownerId:8 ,
          petId:26
        },
        {
          ownerId:9 ,
          petId:27
        },
        {
          ownerId:1 ,
          petId:28
        },
        {
          ownerId:2 ,
          petId:29
        },
        {
          ownerId:3 ,
          petId:30
        },
        {
          ownerId:4 ,
          petId:31
        },
        {
          ownerId:5 ,
          petId:32
        },
        {
          ownerId:6 ,
          petId:33
        },
        {
          ownerId:7 ,
          petId:34
        },
        {
          ownerId:8 ,
          petId:35
        },
        {
          ownerId:9 ,
          petId:36
        },
        {
          ownerId:1 ,
          petId:37
        },
        {
          ownerId:2 ,
          petId:38
        },
        {
          ownerId:3 ,
          petId:39
        },
        {
          ownerId:4 ,
          petId:40
        },
        {
          ownerId:5 ,
          petId:41
        },
        {
          ownerId:6 ,
          petId:42
        },
        {
          ownerId:7 ,
          petId:43
        },
        {
          ownerId:8 ,
          petId:44
        },
        {
          ownerId:9 ,
          petId:45
        },
        {
          ownerId:1 ,
          petId:46
        },
        {
          ownerId:2 ,
          petId:47
        },
        {
          ownerId:3 ,
          petId:48
        },
        {
          ownerId:4 ,
          petId:49
        },
        {
          ownerId:5 ,
          petId:50
        },
        {
          ownerId:6 ,
          petId:51
        },
        {
          ownerId:7 ,
          petId:52
        },
        {
          ownerId:8 ,
          petId:53
        },
        {
          ownerId:9 ,
          petId:54
        },
        {
          ownerId:1 ,
          petId:55
        },
        {
          ownerId:2 ,
          petId:56
        },
        {
          ownerId:3 ,
          petId:57
        },
        {
          ownerId:4 ,
          petId:58
        },
        {
          ownerId:5 ,
          petId:59
        },
        {
          ownerId:6 ,
          petId:60
        },
        {
          ownerId:7 ,
          petId:61
        },
        {
          ownerId:8 ,
          petId:62
        },
        {
          ownerId:9 ,
          petId:63
        },
        {
          ownerId:1 ,
          petId:64
        },
        {
          ownerId:2 ,
          petId:65
        },
        {
          ownerId:3 ,
          petId:66
        },
        {
          ownerId:4 ,
          petId:67
        },
        {
          ownerId:5 ,
          petId:68
        },
        {
          ownerId:6 ,
          petId:69
        },
        {
          ownerId:7 ,
          petId:70
        },
        {
          ownerId:8 ,
          petId:71
        },
        {
          ownerId:9 ,
          petId:72
        },
        {
          ownerId:1 ,
          petId:73
        },
        {
          ownerId:2 ,
          petId:74
        },
      ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PetOwners', null, {});
  }
};
