const { UserRepository } = require('../repositories/userRepository');

class UserService {

    hasInDB(obj = {}){
        for(const key in obj){
            if(this.search({[key]: obj[key]})){
                return true
            }
        }
        return false
    }
    create(userData) {
        const item = UserRepository.create(userData);
        if(!item) {
            return null;
        }
        return item;
    }
    update({ id, updateData = {} }) {
        const item = UserRepository.update( id , {...updateData});
        if(!item) {
            return null;
        }
        return item;
    }

    delete( id ) {
        const item = UserRepository.delete( id );
        if(!item) {
            return null;
        }
        return item;
    }

    getAll() {
        const item = UserRepository.getAll();
        if(!item) {
            return null;
        }
        return item;
    }

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }
}

module.exports = new UserService();