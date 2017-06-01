const db = require('../db');

module.exports = db.defineModel('pets', {
    id: {
        type: db.STRING(50),
        primaryKey: true
    },
    name: db.STRING(50),
    birth: db.STRING(50),
    createdAt: db.BIGINT,
    updatedAt: db.BIGINT,
    version: db.BIGINT
});