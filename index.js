'use strict';

var ozbcore = module.exports;

// module information
ozbcore.version = 'v' + require('./package.json').version;
ozbcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of ozbcore-lib found. ' +
      'Please make sure to require ozbcore-lib and check that submodules do' +
      ' not also include their own ozbcore-lib dependency.';
    throw new Error(message);
  }
};
ozbcore.versionGuard(global._ozbcore);
global._ozbcore = ozbcore.version;

// crypto
ozbcore.crypto = {};
ozbcore.crypto.BN = require('./lib/crypto/bn');
ozbcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
ozbcore.crypto.Hash = require('./lib/crypto/hash');
ozbcore.crypto.Random = require('./lib/crypto/random');
ozbcore.crypto.Point = require('./lib/crypto/point');
ozbcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
ozbcore.encoding = {};
ozbcore.encoding.Base58 = require('./lib/encoding/base58');
ozbcore.encoding.Base58Check = require('./lib/encoding/base58check');
ozbcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
ozbcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
ozbcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
ozbcore.util = {};
ozbcore.util.buffer = require('./lib/util/buffer');
ozbcore.util.js = require('./lib/util/js');
ozbcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
ozbcore.errors = require('./lib/errors');

// main bitcoin library
ozbcore.Address = require('./lib/address');
ozbcore.Block = require('./lib/block');
ozbcore.MerkleBlock = require('./lib/block/merkleblock');
ozbcore.BlockHeader = require('./lib/block/blockheader');
ozbcore.HDPrivateKey = require('./lib/hdprivatekey.js');
ozbcore.HDPublicKey = require('./lib/hdpublickey.js');
ozbcore.Networks = require('./lib/networks');
ozbcore.Opcode = require('./lib/opcode');
ozbcore.PrivateKey = require('./lib/privatekey');
ozbcore.PublicKey = require('./lib/publickey');
ozbcore.Script = require('./lib/script');
ozbcore.Transaction = require('./lib/transaction');
ozbcore.URI = require('./lib/uri');
ozbcore.Unit = require('./lib/unit');

// dependencies, subject to change
ozbcore.deps = {};
ozbcore.deps.bnjs = require('bn.js');
ozbcore.deps.bs58 = require('bs58');
ozbcore.deps.Buffer = Buffer;
ozbcore.deps.elliptic = require('elliptic');
ozbcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
ozbcore.Transaction.sighash = require('./lib/transaction/sighash');
