module.exports = {
    onix: {
        messagePrefix: '\x15Onix Signed Message:\n',
        bech32: 'xc',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x4b,
        scriptHash: 0x89,
        wif: 0x80
    },
    onix_testnet: {
        messagePrefix: '\x15Onix Signed Message:\n',
        bech32: 'tq',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x89,
        scriptHash: 0x6e,
        wif: 0xef
    }
}
