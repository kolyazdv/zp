/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var Company = require('../api/company/company.model');
var Region = require('../api/region/region.model');
var District = require('../api/district/district.model');
var User = require('../api/user/user.model');

console.log('Starting parsers...');
var parser = require('../components/parsers/import');
parser();

Thing.find({}).remove(function () {
  Thing.create({
    name: 'Development Tools',
    info: 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name: 'Server and Client integration',
    info: 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name: 'Smart Build System',
    info: 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  }, {
    name: 'Modular Structure',
    info: 'Best practice client and server structures allow for more code reusability and maximum scalability'
  }, {
    name: 'Optimized Build',
    info: 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  }, {
    name: 'Deployment Ready',
    info: 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});


Company.find({}).remove(function () {
  Company.create(
    {
      name: 'name',
      info: 'info',
      deal: 'deal',
      address: 'address',
      color: 'color',
      holding: 'holding'
    },
    {
      name: 'name3',
      info: 'info3',
      deal: 'deal3',
      address: 'address3',
      color: 'color3',
      holding: 'holding3'
    },
    {
      name: 'name5',
      info: 'info5',
      deal: 'deal5',
      address: 'address5',
      color: 'color5',
      holding: 'holding5'
    }
  );
});


Region.find({}).remove(function () {
  Region.create(
    {
      name: 'Днепропетровская',
      info: ''
    },
    {
      name: 'Донецкая',
      info: ''
    },
    {
      name: 'Винницкая',
      info: ''
    },
    {
      name: 'Волынская',
      info: ''
    },
    {
      name: 'Днепропетровская',
      info: ''
    },
    {
      name: 'Донецкая',
      info: ''
    },
    {
      name: 'Житомирская',
      info: ''
    },
    {
      name: 'Закарпатская',
      info: ''
    },
    {
      name: 'Ивано-Франковская',
      info: ''
    },
    {
      name: 'Киевская',
      info: ''
    },
    {
      name: 'Кировоградская',
      info: ''
    },
    {
      name: 'Луганская',
      info: ''
    },
    {
      name: 'Львовская',
      info: ''
    },
    {
      name: 'Николаевская',
      info: ''
    },
    {
      name: 'Одесская',
      info: ''
    },
    {
      name: 'Полтавская',
      info: ''
    },
    {
      name: 'Ровненская',
      info: ''
    },
    {
      name: 'Сумская',
      info: ''
    },
    {
      name: 'Тернопольская',
      info: ''
    },
    {
      name: 'Харьковская',
      info: ''
    },
    {
      name: 'Херсонская',
      info: ''
    },
    {
      name: 'Хмельницкая',
      info: ''
    },
    {
      name: 'Черкасская',
      info: ''
    },
    {
      name: 'Черниговская',
      info: ''
    },
    {
      name: '	Черновицкая 	',
      info: ''
    },
    {
      name: '	Автономная Республика Крым	',
      info: ''
    }
  );
});

Region.create({
  name: '	Запорожская',
  info: ''
}, function(err, newRegion){
  District.find().remove(function(){
    District.create({
      name: 'Test',
      info: 'Info qTest',
      _region: newRegion._id
    }, function(err, district){
  //    console.log(err, district);
      newRegion.districts.push(district._id);
      newRegion.save();
    });
  });

});

User.find({}).remove(function () {
  User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    }, function () {
      console.log('finished populating users');
    }
  );
});