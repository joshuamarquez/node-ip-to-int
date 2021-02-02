# ip-to-int

## Install

```
npm install ip-to-int
```

## Usage

```javascript
const ipInt = require('ip-to-int');

// IP to Integer
ipInt('89.150.79.17').toInt(); // 1503022865

// Integer to IP
ipInt('1503022865').toIP(); // 89.150.79.17

// IPv4 to Arpa
ipInt('89.150.79.17').toArpa(); // 17.79.150.89.in-addr.arpa

// Integer to Arpa
ipInt('1503022865').toArpa(); // 17.79.150.89.in-addr.arpa


```

## Reference

http://www.aboutmyip.com/AboutMyXApp/IP2Integer.jsp
