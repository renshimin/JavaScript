// const Sequelize = require('sequelize');
// const config = require('./config');


// var sequelize = new Sequelize(config.database, config.username, config.password, {
//     host: config.host,
//     dialect: 'mysql',
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 30000
//     }
// });

// var Pet = sequelize.define('pet', {
//     id: {
//         type: Sequelize.STRING(50),
//         primaryKey: true
//     },
//     name: Sequelize.STRING(50),
//     birth: Sequelize.DATE,
//     createdAt: Sequelize.BIGINT,
//     updatedAt: Sequelize.BIGINT,
//     version: Sequelize.BIGINT
// }, {
//         timestamps: false
//     });

// var now = Date.now();



// (async () => {
//     var dog = await Pet.create({
//         name: '法斗',
//         birth: '2017-06-01',
//         createdAt: now,
//         updatedAt: now,
//         version: 0
//     });
//     console.log('create.' + JSON.stringify(dog));
// })();


// (async () => {
//     var pets = await Pet.findAll({
//         where: {
//             name: '牧羊犬'
//         }
//     });

//     console.log(`find ${pets.length} pets:`)
//     for(let p of pets){
//         console.log(p.name);
//     }
// })();

// (async () => {
//     var pets = await Pet.update({
//         version: 1
//     },{
//         where: {
//             name: '牧羊犬'
//         }
//     });
//     console.log('修改：' + pets);
// })();


// (async () => {
//     var pets = await Pet.destroy({
//         where: {
//             name: '法斗'
//         }
//     });
//     console.log('删除' +pets);
// })();


const model = require('./model');

let Pet = model.Pet;

(async () => {
    var pet = await Pet.findAll({
        where: {
            name: '牧羊犬'
        }
    });

    console.log('查询：'+ JSON.stringify(pet));
})();

