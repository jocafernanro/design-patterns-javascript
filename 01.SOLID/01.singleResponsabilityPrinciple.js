const fs = require('fs')

class Journal
{
    constructor() {
        this.entries = {}
    }

    addEntry(text){
        let c = ++Journal.count;
        this.entries[c] = `${c}: ${text}`
        return c;
    }

    removeEntry(index){
        delete this.entries[index]
    }

    toString(){
        return Object.values(this.entries).join('\n');
    }
}

Journal.count = 0

class PersistenceManager
{
    preprocess(j){
        //
    }

    saveToFile(journal, filename){
        fs.writeFileSync(filename, journal.toString())
    }
}

let j = new Journal();
j.addEntry('I cried today.');
j.addEntry('I ate a bug.')
console.log(j.toString())

let p = new PersistenceManager()
let filename = 'journal.txt'
p.saveToFile(j, filename)