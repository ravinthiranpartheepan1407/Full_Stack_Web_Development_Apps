const { GENESIS_DATA } = require('./config');
const cryptoHash = require('./crypto-hash');
class Block {
  constructor({timestamp,hash,lasthash, data}) {
    this.timestamp = timestamp;
    this.lasthash = lasthash;
    this.hash = hash;
    this.data = data;
  }

  static genesis(){
    return new this(GENESIS_DATA);
  }

  static mineBlock({ lastBlock, data }){
    const timestamp = Date.now();
    const lasthash = lastBlock.hash;
    return new this({
    timestamp,
    lasthash,
    data,
    hash: cryptoHash(timestamp, lasthash, data),
  });
  }
}

// const block1 = new Block('16/09/20', 'foo-lasthash', 'foo-hash', 'foo-data');
//
// console.log('block1', block1);


module.exports = Block;
