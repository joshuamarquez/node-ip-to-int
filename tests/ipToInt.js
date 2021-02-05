const ipInt = require('../src/index.js');

const tester = require('tape');
const ip = '89.150.79.17';
const ipInteger = 1503022865;
const ipArpa = '17.79.150.89.in-addr.arpa';

tester(`toInt`, (test) => {
    const result = ipInt(ip).toInt();
    const expected = ipInteger;
    test.equal(result, expected, `toInt() of IPv4 ${ip} should return integer ${ipInteger}`);
    test.end();
});

tester(`toIP`, (test) => {
    const result = ipInt(ipInteger).toIP();
    const expected = ip;
    test.equal(result, expected, `toIP() of ${ipInteger} should return IPv4 string ${ip}`);
    test.end();
});

tester(`toArpa (int)`, (test) => {
    const result = ipInt(ipInteger).toArpa();
    const expected = ipArpa;
    test.equal(result, expected, `toArpa() of ${ipInteger} should return arpa address ${ipArpa}`);
    test.end();
});

tester(`toArpa (ip)`, (test) => {
    const result = ipInt(ip).toArpa();
    const expected = ipArpa;
    test.equal(result, expected, `toArpa() of ${ip} should return string ${ipArpa}`);
    test.end();
});