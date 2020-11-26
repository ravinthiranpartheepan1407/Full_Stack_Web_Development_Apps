const Block = require('./block');
const cryptoHash = require('./crypto-hash');
class Blockchain{
  constructor(){
    this.chain=[Block.genesis()];
  }

  addBlock({data}){
    const newBlock = Block.mineBlock({
      lastBlock: this.chain[this.chain.length-1],
      data,
    })

this.chain.push(newBlock);
}

static isValidChain(chain){
  //validation with blocks

  if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
  return false
};
  //validation with last hash and data

for(let i = 1; i<chain.length; i++){
  const block = chain[i];
  const actualLastHash = chain[i-1].hash;
  const {timestamp, lasthash, hash, data} = block;
  const validatedHash = cryptoHash(timestamp, lasthash, data);
  if(lasthash !== actualLastHash)
    return false;
  if(hash !== validatedHash)
    return false;
 }
//Validation for no invalid
return true;
 }
}

module.exports = Blockchain;
