const ipInt = require('./index');

describe('IP To Int', () => {
    it('IP to Int', () => {
        expect(ipInt('89.150.79.17').toInt()).toEqual(1503022865);
    });
    it('Int to IP', () => {
        expect(ipInt('1503022865').toIP()).toEqual('89.150.79.17');
    });
});
