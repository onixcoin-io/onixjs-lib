var onixjs = require('bitcoinjs-lib')

Object.assign(onixjs.networks, require('./networks'))

onixjs.utils = require('./utils')

module.exports = onixjs