'use strict';

const regexIP = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;

/**
 * Parses IPv4 to Integer
 * @param  {String}   ip  [valid IPv4 string]
 * @return {Integer}      [Integer value of IPv4 provided]
 */
function toInt(ip) {

  if (!ip) {
    throw new Error('E_UNDEFINED_IP');
  }

  if (!regexIP.test(ip)) {
    throw new Error('E_INVALID_IP');
  }

  /*
    String value 189.170.79.173
    Integer	3182055341

    To convert an IP address to integer, break it into four octets.
    For example, the ip address you provided can be broken into

    First Octet:	189
    Second Octet:	170
    Third Octet:	79
    Fourth Octet:	173

    To calculate the decimal address from a dotted string, perform the following calculation.

    = (first octet * 256³) + (second octet * 256²) + (third octet * 256) + (fourth octet)
    =	(first octet * 16777216) + (second octet * 65536) + (third octet * 256) + (fourth octet)
    =	(189 * 16777216) + (170 * 65536) + (79 * 256) + (173)
    =	3182055341

    Reference http://www.aboutmyip.com/AboutMyXApp/IP2Integer.jsp
  */

  return ip.split('.').map((octet, index, array) => {
    return parseInt(octet) * Math.pow(256, (array.length - index - 1));
  }).reduce((prev, curr) => {
    return prev + curr;
  });

}

/**
 * Parses Integer to IPv4
 *
 * @param  {String} value [value to parse]
 * @return {String}       [IPv4 String of value provided]
 */
function toIP(value) {

  if (!value) {
    throw new Error('E_UNDEFINED_INTEGER');
  }

  const result = /\d+/.exec(value);

  if (!result) {
    throw new Error('E_INTEGER_NOT_FOUND');
  }

  value = result[0];

  return [
    (value>>24)&0xff,
    (value>>16)&0xff,
    (value>>8)&0xff,
    value&0xff
  ].join('.');
}

module.exports = function ipInt(value) {
  return {
    toInt: () => toInt(value),
    toIP: () => toIP(value)
  };
};
