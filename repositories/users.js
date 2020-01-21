const fs = require('fs');
const crypto = require('crypto');
const util = require('util');
const Repository = require('./repository');

const scrypt = util.promisify(crypto.scrypt);

class UsersRespository extends Repository{

    async comparePasswords(saved, supplied){
        //saved - pw in database
        //suppied- given by the user
        const [hashed, salt] = saved.split('.'); // destructiong an array
        const hashedSuppliedBuf = await scrypt(supplied, salt, 64);

        return hashed === hashedSuppliedBuf.toString('hex');

    }

    async create(attrs){

        attrs.id= this.randonId();
        const salt = crypto.randomBytes(8).toString('hex');
        const buf = await scrypt(attrs.password, salt, 64);

        const records = await this.getAll();
        const record = {
            ...attrs,
            password: `${buf.toString('hex')}.${salt}`
        };

        records.push(record);

        await this.writeAll(records);

        return record;

    }
}

module.exports = new UsersRespository('users.json');
