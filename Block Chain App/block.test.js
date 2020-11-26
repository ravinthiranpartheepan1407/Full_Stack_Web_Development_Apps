const Block = require('./block');
const { GENESIS_DATA } = require('./config');
const cryptoHash = require('./crypto-hash');
describe('Block', () => {
  const timestamp = 'a-date';
  const lasthash = 'foo-hash';
  const hash = 'bar-hash';
  const data = ['blockchain', 'data'];
  const block = new Block({ timestamp, lasthash, hash, data });

  it('has a timestamp, lasthash, hash, data', () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lasthash).toEqual(lasthash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });
  describe('gensis()', () => {
    const genesisBlock = Block.genesis(); //static function for a particular block

    it('returns a block', () => {
      expect(genesisBlock instanceof Block).toBe(true);
    })
    it('returns genesis data', () => {
      expect(genesisBlock).toEqual(GENESIS_DATA);
    })
  });
  describe('mineBlock()', () => {
    const lastBlock = Block.genesis();
    const data = 'mined-data';
    const mineBlock = Block.mineBlock({lastBlock, data});

  it('mineBlock is a Block', () => {
    expect(mineBlock instanceof Block).toBe(true);
  })
  it('sets a lastHash to a hash', () => {
    expect(mineBlock.lasthash).toEqual(lastBlock.hash);
  })
  it('sets a data', () => {
    expect(mineBlock.timestamp).not.toEqual(undefined);
  });
  it('creates SHA-256 for Inputs', () => {
    expect(mineBlock.hash).toEqual(cryptoHash(mineBlock.timestamp, mineBlock.lasthash, mineBlock.data));
  })
})
});
