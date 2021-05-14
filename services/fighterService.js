const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    hasInDB(obj = {}){
        for(const key in obj){
            if(this.search({[key]: obj[key]})){
                return true
            }
        }
        return false
    }
    create(userData) {
        const item = FighterRepository.create(userData);
        if(!item) {
            return null;
        }
        return item;
    }
    update({ id, updateData = {} }) {
        const item = FighterRepository.update( id, {...updateData});
        if(!item) {
            return null;
        }
        return item;
    }

    delete(id) {
        const item = FighterRepository.delete(id);
        if(!item) {
            return null;
        }
        return item;
    }

    getAll() {
        const items = FighterRepository.getAll();
        if(!items) {
            return [];
        }
        return items;
    }

    search(search) {
        const item = FighterRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }
}

module.exports = new FighterService();