const ipInt = require('./index');

it('Int to IP', () => {
    expect(ipInt('89.150.79.17').toInt()).toEqual(1503022865);
});
