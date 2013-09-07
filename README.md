# bytewise-hex

A simple wrapper around the bytewise library to support leveldb/levelup bytewise hex encoding.
For use with leveldb / [levelup](https://github.com/rvagg/node-levelup)

This is extracted from [bytewise](https://github.com/deanlandolt/bytewise/blob/master/hex.js).

This will be unnecessary when bytwise adds support for the hex codec directly
with `require('bytewise/hex')`.

[![build status](https://secure.travis-ci.org/eugeneware/bytewise-hex.png)](http://travis-ci.org/eugeneware/bytewise-hex)

# Installation

This module is installed via npm:

``` bash
$ npm install bytewise-hex
```

# Usage

Use to make bytewise an encoding for levelup;

```
var bytewise = require('bytewise-hex');
var level = require('level');
var db = level('/tmp/mydb', { keyEncoding: bytewise, valueEncoding: 'json' });
db.put(['hello', 'world', 123], { something: 'here' });
```

## License

### Copyright (c) 2013, Eugene Ware
#### All rights reserved.
  
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:  
1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.  
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.  
3. Neither the name of Deoxxa Development nor the names of its contributors
   may be used to endorse or promote products derived from this software
   without specific prior written permission.  
  
THIS SOFTWARE IS PROVIDED BY EUGENE WARE ''AS IS'' AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL DEOXXA DEVELOPMENT BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

