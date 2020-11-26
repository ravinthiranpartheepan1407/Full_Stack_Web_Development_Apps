const Blockchain = require('./blockChain');
const Block = require('./block');

describe('Create BlockChain', () => {
  let blockchain;

beforeEach(()=>{
  blockchain = new Blockchain();
});


  it('Contains a block chain', ()=>{
    expect(blockchain.chain instanceof Array).toBe(true);
  })
  it('Starts with the gensis block', ()=>{
    expect(blockchain.chain[0]).toEqual(Block.genesis());
  })
  it('adds a new block', ()=>{
    const newData = 'foo bar';
    blockchain.addBlock({data:newData});
    expect(blockchain.chain[blockchain.chain.length-1]);
  })

  //chain validation

  describe('isValidChain()', () => {

    describe('When the chain doesnt start with genesis block', () => {
      it('returns false', () => {
        blockchain.chain[0] = {data : 'Fake-gensis'};
        expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
      });
    });
    describe('when the chain starts with gensis block and has multiple blocks', () => {
      beforeEach(() => {
        blockchain.addBlock({data: "Ravinthiran"});
        blockchain.addBlock({data: "Suren"});
        blockchain.addBlock({data: "Amma"});
      });
      describe('and the lastHash reference has changed', () => {
        it('returns false', ()=>{
          blockchain.chain[2].lastHash = "some-bad-evil";
          expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
        });
      });
      describe('and the data reference has changed', () => {
        it('returns false', ()=>{
          blockchain.chain[2].data = "some-bad";
          expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
        });
      });
      describe('when the chain doesnt have any invalid blocks', ()=>{
        it('returns true', ()=>{
          expect(Blockchain.isValidChain(blockchain.chain)).toBe(true);
        });
      });
    });
  });
});
