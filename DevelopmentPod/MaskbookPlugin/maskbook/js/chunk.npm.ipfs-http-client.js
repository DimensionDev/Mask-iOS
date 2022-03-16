"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7372],{

/***/ 48967:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ue": () => (/* binding */ create)
});

// UNUSED EXPORTS: CID, globSource, multiaddr, urlSource

// EXTERNAL MODULE: ../../node_modules/.pnpm/ipfs-core-utils@0.12.2/node_modules/ipfs-core-utils/esm/src/multibases.js
var src_multibases = __webpack_require__(24717);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ipfs-core-utils@0.12.2/node_modules/ipfs-core-utils/esm/src/multicodecs.js
var src_multicodecs = __webpack_require__(96096);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ipfs-core-utils@0.12.2/node_modules/ipfs-core-utils/esm/src/multihashes.js
var src_multihashes = __webpack_require__(84145);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ipld+dag-pb@2.1.15/node_modules/@ipld/dag-pb/esm/src/index.js + 3 modules
var src = __webpack_require__(82779);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ipld+dag-cbor@6.0.15/node_modules/@ipld/dag-cbor/esm/index.js
var esm = __webpack_require__(46973);
// EXTERNAL MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/hashes/identity.js
var identity = __webpack_require__(9742);
// EXTERNAL MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/basics.js + 12 modules
var basics = __webpack_require__(19261);
// EXTERNAL MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/cid.js
var src_cid = __webpack_require__(2758);
// EXTERNAL MODULE: ../../node_modules/.pnpm/multiaddr@10.0.1/node_modules/multiaddr/src/index.js
var multiaddr_src = __webpack_require__(13695);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ipfs-utils@9.0.4/node_modules/ipfs-utils/src/env.js
var env = __webpack_require__(72729);
// EXTERNAL MODULE: ../../node_modules/.pnpm/parse-duration@1.0.2/node_modules/parse-duration/index.mjs
var parse_duration = __webpack_require__(47124);
// EXTERNAL MODULE: ../../node_modules/.pnpm/debug@4.3.3/node_modules/debug/src/browser.js
var browser = __webpack_require__(25516);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ipfs-utils@9.0.4/node_modules/ipfs-utils/src/http.js
var http = __webpack_require__(15843);
// EXTERNAL MODULE: ../../node_modules/.pnpm/merge-options@3.0.4/node_modules/merge-options/index.mjs
var merge_options = __webpack_require__(31061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ipfs-core-utils@0.12.2/node_modules/ipfs-core-utils/esm/src/to-url-string.js
var to_url_string = __webpack_require__(71154);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ipfs-core-utils@0.12.2/node_modules/ipfs-core-utils/esm/src/agent.browser.js
var agent_browser = __webpack_require__(99250);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/lib/core.js








const log = browser('ipfs-http-client:lib:error-handler');
const merge = merge_options/* default.bind */.Z.bind({ ignoreUndefined: true });
const DEFAULT_PROTOCOL = env.isBrowser || env.isWebWorker ? location.protocol : 'http';
const DEFAULT_HOST = env.isBrowser || env.isWebWorker ? location.hostname : 'localhost';
const DEFAULT_PORT = env.isBrowser || env.isWebWorker ? location.port : '5001';
const normalizeOptions = (options = {}) => {
  let url;
  let opts = {};
  let agent;
  if (typeof options === 'string' || multiaddr_src.Multiaddr.isMultiaddr(options)) {
    url = new URL((0,to_url_string/* toUrlString */.d)(options));
  } else if (options instanceof URL) {
    url = options;
  } else if (typeof options.url === 'string' || multiaddr_src.Multiaddr.isMultiaddr(options.url)) {
    url = new URL((0,to_url_string/* toUrlString */.d)(options.url));
    opts = options;
  } else if (options.url instanceof URL) {
    url = options.url;
    opts = options;
  } else {
    opts = options || {};
    const protocol = (opts.protocol || DEFAULT_PROTOCOL).replace(':', '');
    const host = (opts.host || DEFAULT_HOST).split(':')[0];
    const port = opts.port || DEFAULT_PORT;
    url = new URL(`${ protocol }://${ host }:${ port }`);
  }
  if (opts.apiPath) {
    url.pathname = opts.apiPath;
  } else if (url.pathname === '/' || url.pathname === undefined) {
    url.pathname = 'api/v0';
  }
  if (env.isNode) {
    const Agent = (0,agent_browser/* default */.Z)(url);
    agent = opts.agent || new Agent({
      keepAlive: true,
      maxSockets: 6
    });
  }
  return {
    ...opts,
    host: url.host,
    protocol: url.protocol.replace(':', ''),
    port: Number(url.port),
    apiPath: url.pathname,
    url,
    agent
  };
};
const errorHandler = async response => {
  let msg;
  try {
    if ((response.headers.get('Content-Type') || '').startsWith('application/json')) {
      const data = await response.json();
      log(data);
      msg = data.Message || data.message;
    } else {
      msg = await response.text();
    }
  } catch (err) {
    log('Failed to parse error response', err);
    msg = err.message;
  }
  let error = new http.HTTPError(response);
  if (msg) {
    if (msg.includes('deadline has elapsed')) {
      error = new http.TimeoutError();
    }
    if (msg && msg.includes('context deadline exceeded')) {
      error = new http.TimeoutError();
    }
  }
  if (msg && msg.includes('request timed out')) {
    error = new http.TimeoutError();
  }
  if (msg) {
    error.message = msg;
  }
  throw error;
};
const KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g;
const kebabCase = str => {
  return str.replace(KEBAB_REGEX, function (match) {
    return '-' + match.toLowerCase();
  });
};
const parseTimeout = value => {
  return typeof value === 'string' ? (0,parse_duration/* default */.Z)(value) : value;
};
class Client extends http {
  constructor(options = {}) {
    const opts = normalizeOptions(options);
    super({
      timeout: parseTimeout(opts.timeout || 0) || undefined,
      headers: opts.headers,
      base: `${ opts.url }`,
      handleError: errorHandler,
      transformSearchParams: search => {
        const out = new URLSearchParams();
        for (const [key, value] of search) {
          if (value !== 'undefined' && value !== 'null' && key !== 'signal') {
            out.append(kebabCase(key), value);
          }
          if (key === 'timeout' && !isNaN(value)) {
            out.append(kebabCase(key), value);
          }
        }
        return out;
      },
      agent: opts.agent
    });
    delete this.get;
    delete this.put;
    delete this.delete;
    delete this.options;
    const fetch = this.fetch;
    this.fetch = (resource, options = {}) => {
      if (typeof resource === 'string' && !resource.startsWith('/')) {
        resource = `${ opts.url }/${ resource }`;
      }
      return fetch.call(this, resource, merge(options, { method: 'POST' }));
    };
  }
}
const HTTPError = http.HTTPError;
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/lib/configure.js

const configure = fn => {
  return options => {
    return fn(new Client(options), options);
  };
};
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/lib/mode-to-string.js
function modeToString(mode) {
  if (mode == null) {
    return undefined;
  }
  if (typeof mode === 'string') {
    return mode;
  }
  return mode.toString(8).padStart(4, '0');
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/err-code@3.0.1/node_modules/err-code/index.js
var err_code = __webpack_require__(70963);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/lib/parse-mtime.js

function parseMtime(input) {
  if (input == null) {
    return undefined;
  }
  let mtime;
  if (input.secs != null) {
    mtime = {
      secs: input.secs,
      nsecs: input.nsecs
    };
  }
  if (input.Seconds != null) {
    mtime = {
      secs: input.Seconds,
      nsecs: input.FractionalNanoseconds
    };
  }
  if (Array.isArray(input)) {
    mtime = {
      secs: input[0],
      nsecs: input[1]
    };
  }
  if (input instanceof Date) {
    const ms = input.getTime();
    const secs = Math.floor(ms / 1000);
    mtime = {
      secs: secs,
      nsecs: (ms - secs * 1000) * 1000
    };
  }
  if (!Object.prototype.hasOwnProperty.call(mtime, 'secs')) {
    return undefined;
  }
  if (mtime != null && mtime.nsecs != null && (mtime.nsecs < 0 || mtime.nsecs > 999999999)) {
    throw err_code(new Error('mtime-nsecs must be within the range [0,999999999]'), 'ERR_INVALID_MTIME_NSECS');
  }
  return mtime;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js


function toUrlSearchParams({arg, searchParams, hashAlg, mtime, mode, ...options} = {}) {
  if (searchParams) {
    options = {
      ...options,
      ...searchParams
    };
  }
  if (hashAlg) {
    options.hash = hashAlg;
  }
  if (mtime != null) {
    mtime = parseMtime(mtime);
    options.mtime = mtime.secs;
    options.mtimeNsecs = mtime.nsecs;
  }
  if (mode != null) {
    options.mode = modeToString(mode);
  }
  if (options.timeout && !isNaN(options.timeout)) {
    options.timeout = `${ options.timeout }ms`;
  }
  if (arg === undefined || arg === null) {
    arg = [];
  } else if (!Array.isArray(arg)) {
    arg = [arg];
  }
  const urlSearchParams = new URLSearchParams(options);
  arg.forEach(arg => urlSearchParams.append('arg', arg));
  return urlSearchParams;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/bitswap/wantlist.js



const createWantlist = configure(api => {
  async function wantlist(options = {}) {
    const res = await (await api.post('bitswap/wantlist', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })).json();
    return (res.Keys || []).map(k => src_cid.CID.parse(k['/']));
  }
  return wantlist;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/bitswap/wantlist-for-peer.js



const createWantlistForPeer = configure(api => {
  async function wantlistForPeer(peerId, options = {}) {
    const res = await (await api.post('bitswap/wantlist', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        ...options,
        peer: peerId.toString()
      }),
      headers: options.headers
    })).json();
    return (res.Keys || []).map(k => src_cid.CID.parse(k['/']));
  }
  return wantlistForPeer;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/bitswap/stat.js



const createStat = configure(api => {
  async function stat(options = {}) {
    const res = await api.post('bitswap/stat', {
      searchParams: toUrlSearchParams(options),
      signal: options.signal,
      headers: options.headers
    });
    return toCoreInterface(await res.json());
  }
  return stat;
});
function toCoreInterface(res) {
  return {
    provideBufLen: res.ProvideBufLen,
    wantlist: (res.Wantlist || []).map(k => src_cid.CID.parse(k['/'])),
    peers: res.Peers || [],
    blocksReceived: BigInt(res.BlocksReceived),
    dataReceived: BigInt(res.DataReceived),
    blocksSent: BigInt(res.BlocksSent),
    dataSent: BigInt(res.DataSent),
    dupBlksReceived: BigInt(res.DupBlksReceived),
    dupDataReceived: BigInt(res.DupDataReceived)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/bitswap/unwant.js


const createUnwant = configure(api => {
  async function unwant(cid, options = {}) {
    const res = await api.post('bitswap/unwant', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: cid.toString(),
        ...options
      }),
      headers: options.headers
    });
    return res.json();
  }
  return unwant;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/bitswap/index.js




function createBitswap(config) {
  return {
    wantlist: createWantlist(config),
    wantlistForPeer: createWantlistForPeer(config),
    unwant: createUnwant(config),
    stat: createStat(config)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/block/get.js


const createGet = configure(api => {
  async function get(cid, options = {}) {
    const res = await api.post('block/get', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: cid.toString(),
        ...options
      }),
      headers: options.headers
    });
    return new Uint8Array(await res.arrayBuffer());
  }
  return get;
});
// EXTERNAL MODULE: ../../node_modules/.pnpm/ipfs-core-utils@0.12.2/node_modules/ipfs-core-utils/esm/src/multipart-request.browser.js + 4 modules
var multipart_request_browser = __webpack_require__(4234);
// EXTERNAL MODULE: ../../node_modules/.pnpm/any-signal@2.1.2/node_modules/any-signal/index.js
var any_signal = __webpack_require__(83435);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/lib/abort-signal.js

function filter(signals) {
  return signals.filter(Boolean);
}
function abortSignal(...signals) {
  return (0,any_signal.anySignal)(filter(signals));
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/native-abort-controller@1.0.4_abort-controller@3.0.0/node_modules/native-abort-controller/src/index.js
var native_abort_controller_src = __webpack_require__(68565);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/block/put.js






const createPut = configure(api => {
  async function put(data, options = {}) {
    const controller = new native_abort_controller_src.AbortController();
    const signal = abortSignal(controller.signal, options.signal);
    let res;
    try {
      const response = await api.post('block/put', {
        signal: signal,
        searchParams: toUrlSearchParams(options),
        ...await (0,multipart_request_browser/* multipartRequest */.x)([data], controller, options.headers)
      });
      res = await response.json();
    } catch (err) {
      if (options.format === 'dag-pb') {
        return put(data, {
          ...options,
          format: 'protobuf'
        });
      } else if (options.format === 'dag-cbor') {
        return put(data, {
          ...options,
          format: 'cbor'
        });
      }
      throw err;
    }
    return src_cid.CID.parse(res.Key);
  }
  return put;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/block/rm.js



const createRm = configure(api => {
  async function* rm(cid, options = {}) {
    if (!Array.isArray(cid)) {
      cid = [cid];
    }
    const res = await api.post('block/rm', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: cid.map(cid => cid.toString()),
        'stream-channels': true,
        ...options
      }),
      headers: options.headers
    });
    for await (const removed of res.ndjson()) {
      yield rm_toCoreInterface(removed);
    }
  }
  return rm;
});
function rm_toCoreInterface(removed) {
  const out = { cid: src_cid.CID.parse(removed.Hash) };
  if (removed.Error) {
    out.error = new Error(removed.Error);
  }
  return out;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/block/stat.js



const stat_createStat = configure(api => {
  async function stat(cid, options = {}) {
    const res = await api.post('block/stat', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: cid.toString(),
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return {
      cid: src_cid.CID.parse(data.Key),
      size: data.Size
    };
  }
  return stat;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/block/index.js




function createBlock(config) {
  return {
    get: createGet(config),
    put: createPut(config),
    rm: createRm(config),
    stat: stat_createStat(config)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/bootstrap/add.js



const createAdd = configure(api => {
  async function add(addr, options = {}) {
    const res = await api.post('bootstrap/add', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: addr,
        ...options
      }),
      headers: options.headers
    });
    const {Peers} = await res.json();
    return { Peers: Peers.map(ma => new multiaddr_src.Multiaddr(ma)) };
  }
  return add;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/bootstrap/clear.js



const createClear = configure(api => {
  async function clear(options = {}) {
    const res = await api.post('bootstrap/rm', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        ...options,
        all: true
      }),
      headers: options.headers
    });
    const {Peers} = await res.json();
    return { Peers: Peers.map(ma => new multiaddr_src.Multiaddr(ma)) };
  }
  return clear;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/bootstrap/list.js



const createList = configure(api => {
  async function list(options = {}) {
    const res = await api.post('bootstrap/list', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    });
    const {Peers} = await res.json();
    return { Peers: Peers.map(ma => new multiaddr_src.Multiaddr(ma)) };
  }
  return list;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/bootstrap/reset.js



const createReset = configure(api => {
  async function reset(options = {}) {
    const res = await api.post('bootstrap/add', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        ...options,
        default: true
      }),
      headers: options.headers
    });
    const {Peers} = await res.json();
    return { Peers: Peers.map(ma => new multiaddr_src.Multiaddr(ma)) };
  }
  return reset;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/bootstrap/rm.js



const rm_createRm = configure(api => {
  async function rm(addr, options = {}) {
    const res = await api.post('bootstrap/rm', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: addr,
        ...options
      }),
      headers: options.headers
    });
    const {Peers} = await res.json();
    return { Peers: Peers.map(ma => new multiaddr_src.Multiaddr(ma)) };
  }
  return rm;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/bootstrap/index.js





function createBootstrap(config) {
  return {
    add: createAdd(config),
    clear: createClear(config),
    list: createList(config),
    reset: createReset(config),
    rm: rm_createRm(config)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/config/profiles/apply.js


const createApply = configure(api => {
  async function apply(profile, options = {}) {
    const res = await api.post('config/profile/apply', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: profile,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return {
      original: data.OldCfg,
      updated: data.NewCfg
    };
  }
  return apply;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/lib/object-to-camel.js
function objectToCamel(obj) {
  if (obj == null) {
    return obj;
  }
  const caps = /^[A-Z]+$/;
  const output = {};
  return Object.keys(obj).reduce((camelObj, k) => {
    if (caps.test(k)) {
      camelObj[k.toLowerCase()] = obj[k];
    } else if (caps.test(k[0])) {
      camelObj[k[0].toLowerCase() + k.slice(1)] = obj[k];
    } else {
      camelObj[k] = obj[k];
    }
    return camelObj;
  }, output);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/config/profiles/list.js



const list_createList = configure(api => {
  async function list(options = {}) {
    const res = await api.post('config/profile/list', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    });
    const data = await res.json();
    return data.map(profile => objectToCamel(profile));
  }
  return list;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/config/profiles/index.js


function createProfiles(config) {
  return {
    apply: createApply(config),
    list: list_createList(config)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/config/get.js


const get_createGet = configure(api => {
  const get = async (key, options = {}) => {
    if (!key) {
      throw new Error('key argument is required');
    }
    const res = await api.post('config', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: key,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return data.Value;
  };
  return get;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/config/get-all.js


const createGetAll = configure(api => {
  const getAll = async (options = {}) => {
    const res = await api.post('config/show', {
      signal: options.signal,
      searchParams: toUrlSearchParams({ ...options }),
      headers: options.headers
    });
    const data = await res.json();
    return data;
  };
  return getAll;
});
// EXTERNAL MODULE: ../../node_modules/.pnpm/uint8arrays@3.0.0/node_modules/uint8arrays/esm/src/from-string.js
var from_string = __webpack_require__(31216);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/config/replace.js






const createReplace = configure(api => {
  const replace = async (config, options = {}) => {
    const controller = new native_abort_controller_src.AbortController();
    const signal = abortSignal(controller.signal, options.signal);
    const res = await api.post('config/replace', {
      signal,
      searchParams: toUrlSearchParams(options),
      ...await (0,multipart_request_browser/* multipartRequest */.x)([(0,from_string.fromString)(JSON.stringify(config))], controller, options.headers)
    });
    await res.text();
  };
  return replace;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/config/set.js


const createSet = configure(api => {
  const set = async (key, value, options = {}) => {
    if (typeof key !== 'string') {
      throw new Error('Invalid key type');
    }
    const params = {
      ...options,
      ...encodeParam(key, value)
    };
    const res = await api.post('config', {
      signal: options.signal,
      searchParams: toUrlSearchParams(params),
      headers: options.headers
    });
    await res.text();
  };
  return set;
});
const encodeParam = (key, value) => {
  switch (typeof value) {
  case 'boolean':
    return {
      arg: [
        key,
        value.toString()
      ],
      bool: true
    };
  case 'string':
    return {
      arg: [
        key,
        value
      ]
    };
  default:
    return {
      arg: [
        key,
        JSON.stringify(value)
      ],
      json: true
    };
  }
};
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/config/index.js





function createConfig(config) {
  return {
    getAll: createGetAll(config),
    get: get_createGet(config),
    set: createSet(config),
    replace: createReplace(config),
    profiles: createProfiles(config)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/dag/export.js


const createExport = configure(api => {
  async function* dagExport(root, options = {}) {
    const res = await api.post('dag/export', {
      signal: options.signal,
      searchParams: toUrlSearchParams({ arg: root.toString() }),
      headers: options.headers
    });
    yield* res.iterator();
  }
  return dagExport;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/lib/resolve.js


async function* resolve(cid, path, codecs, getBlock, options) {
  const load = async cid => {
    const codec = await codecs.getCodec(cid.code);
    const block = await getBlock(cid, options);
    return codec.decode(block);
  };
  const parts = path.split('/').filter(Boolean);
  let value = await load(cid);
  let lastCid = cid;
  if (!parts.length) {
    yield {
      value,
      remainderPath: ''
    };
  }
  while (parts.length) {
    const key = parts.shift();
    if (!key) {
      throw err_code(new Error(`Could not resolve path "${ path }"`), 'ERR_INVALID_PATH');
    }
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      value = value[key];
      yield {
        value,
        remainderPath: parts.join('/')
      };
    } else {
      throw err_code(new Error(`no link named "${ key }" under ${ lastCid }`), 'ERR_NO_LINK');
    }
    const cid = src_cid.CID.asCID(value);
    if (cid) {
      lastCid = cid;
      value = await load(value);
    }
  }
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/it-first@1.0.7/node_modules/it-first/index.js
var it_first = __webpack_require__(56746);
// EXTERNAL MODULE: ../../node_modules/.pnpm/it-last@1.0.6/node_modules/it-last/index.js
var it_last = __webpack_require__(11442);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/dag/get.js






const dag_get_createGet = (codecs, options) => {
  const fn = configure((api, opts) => {
    const getBlock = createGet(opts);
    const get = async (cid, options = {}) => {
      if (options.path) {
        const entry = options.localResolve ? await it_first(resolve(cid, options.path, codecs, getBlock, options)) : await it_last(resolve(cid, options.path, codecs, getBlock, options));
        const result = entry;
        if (!result) {
          throw err_code(new Error('Not found'), 'ERR_NOT_FOUND');
        }
        return result;
      }
      const codec = await codecs.getCodec(cid.code);
      const block = await getBlock(cid, options);
      const node = codec.decode(block);
      return {
        value: node,
        remainderPath: ''
      };
    };
    return get;
  });
  return fn(options);
};
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/dag/import.js






const createImport = configure(api => {
  async function* dagImport(source, options = {}) {
    const controller = new native_abort_controller_src.AbortController();
    const signal = abortSignal(controller.signal, options.signal);
    const {headers, body} = await (0,multipart_request_browser/* multipartRequest */.x)(source, controller, options.headers);
    const res = await api.post('dag/import', {
      signal,
      headers,
      body,
      searchParams: toUrlSearchParams({ 'pin-roots': options.pinRoots })
    });
    for await (const {Root} of res.ndjson()) {
      if (Root !== undefined) {
        const {
          Cid: {'/': Cid},
          PinErrorMsg
        } = Root;
        yield {
          root: {
            cid: src_cid.CID.parse(Cid),
            pinErrorMsg: PinErrorMsg
          }
        };
      }
    }
  }
  return dagImport;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/dag/put.js






const put_createPut = (codecs, options) => {
  const fn = configure(api => {
    const put = async (dagNode, options = {}) => {
      const settings = {
        format: 'dag-cbor',
        hashAlg: 'sha2-256',
        inputEnc: 'raw',
        ...options
      };
      const codec = await codecs.getCodec(settings.format);
      const serialized = codec.encode(dagNode);
      const controller = new native_abort_controller_src.AbortController();
      const signal = abortSignal(controller.signal, settings.signal);
      const res = await api.post('dag/put', {
        timeout: settings.timeout,
        signal,
        searchParams: toUrlSearchParams(settings),
        ...await (0,multipart_request_browser/* multipartRequest */.x)([serialized], controller, settings.headers)
      });
      const data = await res.json();
      return src_cid.CID.parse(data.Cid['/']);
    };
    return put;
  });
  return fn(options);
};
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/dag/resolve.js



const createResolve = configure(api => {
  const resolve = async (ipfsPath, options = {}) => {
    const res = await api.post('dag/resolve', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: `${ ipfsPath }${ options.path ? `/${ options.path }`.replace(/\/[/]+/g, '/') : '' }`,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return {
      cid: src_cid.CID.parse(data.Cid['/']),
      remainderPath: data.RemPath
    };
  };
  return resolve;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/dag/index.js





function createDag(codecs, config) {
  return {
    export: createExport(config),
    get: dag_get_createGet(codecs, config),
    import: createImport(config),
    put: put_createPut(codecs, config),
    resolve: createResolve(config)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/dht/response-types.js
const SendingQuery = 0;
const PeerResponse = 1;
const FinalPeer = 2;
const QueryError = 3;
const Provider = 4;
const Value = 5;
const AddingPeer = 6;
const DialingPeer = 7;
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/dht/find-peer.js




const createFindPeer = configure(api => {
  async function findPeer(peerId, options = {}) {
    const res = await api.post('dht/findpeer', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: peerId,
        ...options
      }),
      headers: options.headers
    });
    for await (const data of res.ndjson()) {
      if (data.Type === FinalPeer && data.Responses) {
        const {ID, Addrs} = data.Responses[0];
        return {
          id: ID,
          addrs: (Addrs || []).map(a => new multiaddr_src.Multiaddr(a))
        };
      }
    }
    throw new Error('not found');
  }
  return findPeer;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/dht/find-provs.js




const createFindProvs = configure(api => {
  async function* findProvs(cid, options = {}) {
    const res = await api.post('dht/findprovs', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: cid.toString(),
        ...options
      }),
      headers: options.headers
    });
    for await (const message of res.ndjson()) {
      if (message.Type === Provider && message.Responses) {
        for (const {ID, Addrs} of message.Responses) {
          yield {
            id: ID,
            addrs: (Addrs || []).map(a => new multiaddr_src.Multiaddr(a))
          };
        }
      }
    }
  }
  return findProvs;
});
// EXTERNAL MODULE: ../../node_modules/.pnpm/uint8arrays@3.0.0/node_modules/uint8arrays/esm/src/to-string.js
var to_string = __webpack_require__(90453);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/dht/get.js





const dht_get_createGet = configure(api => {
  async function get(key, options = {}) {
    const res = await api.post('dht/get', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: key instanceof Uint8Array ? (0,to_string.toString)(key) : key,
        ...options
      }),
      headers: options.headers
    });
    for await (const message of res.ndjson()) {
      if (message.Type === Value) {
        return (0,from_string.fromString)(message.Extra, 'base64pad');
      }
    }
    throw new Error('not found');
  }
  return get;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/dht/provide.js




const createProvide = configure(api => {
  async function* provide(cids, options = { recursive: false }) {
    const cidArr = Array.isArray(cids) ? cids : [cids];
    const res = await api.post('dht/provide', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: cidArr.map(cid => cid.toString()),
        ...options
      }),
      headers: options.headers
    });
    for await (let message of res.ndjson()) {
      message = objectToCamel(message);
      if (message.responses) {
        message.responses = message.responses.map(({ID, Addrs}) => ({
          id: ID,
          addrs: (Addrs || []).map(a => new multiaddr_src.Multiaddr(a))
        }));
      } else {
        message.responses = [];
      }
      yield message;
    }
  }
  return provide;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/dht/put.js








const dht_put_createPut = configure(api => {
  async function* put(key, value, options = {}) {
    const controller = new native_abort_controller_src.AbortController();
    const signal = abortSignal(controller.signal, options.signal);
    const res = await api.post('dht/put', {
      signal,
      searchParams: toUrlSearchParams({
        arg: (0,to_string.toString)(key),
        ...options
      }),
      ...await (0,multipart_request_browser/* multipartRequest */.x)([value], controller, options.headers)
    });
    for await (let message of res.ndjson()) {
      message = objectToCamel(message);
      if (message.responses) {
        message.responses = message.responses.map(({ID, Addrs}) => ({
          id: ID,
          addrs: (Addrs || []).map(a => new multiaddr_src.Multiaddr(a))
        }));
      }
      yield message;
    }
  }
  return put;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/dht/query.js




const createQuery = configure(api => {
  async function* query(peerId, options = {}) {
    const res = await api.post('dht/query', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: peerId.toString(),
        ...options
      }),
      headers: options.headers
    });
    for await (let message of res.ndjson()) {
      message = objectToCamel(message);
      message.responses = (message.responses || []).map(({ID, Addrs}) => ({
        id: ID,
        addrs: (Addrs || []).map(a => new multiaddr_src.Multiaddr(a))
      }));
      yield message;
    }
  }
  return query;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/dht/index.js






function createDht(config) {
  return {
    findPeer: createFindPeer(config),
    findProvs: createFindProvs(config),
    get: dht_get_createGet(config),
    provide: createProvide(config),
    put: dht_put_createPut(config),
    query: createQuery(config)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/diag/cmds.js


const createCmds = configure(api => {
  async function cmds(options = {}) {
    const res = await api.post('diag/cmds', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    });
    return res.json();
  }
  return cmds;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/diag/net.js


const createNet = configure(api => {
  async function net(options = {}) {
    const res = await api.post('diag/net', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    });
    return res.json();
  }
  return net;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/diag/sys.js


const createSys = configure(api => {
  async function sys(options = {}) {
    const res = await api.post('diag/sys', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    });
    return res.json();
  }
  return sys;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/diag/index.js



function createDiag(config) {
  return {
    cmds: createCmds(config),
    net: createNet(config),
    sys: createSys(config)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/files/chmod.js


const createChmod = configure(api => {
  async function chmod(path, mode, options = {}) {
    const res = await api.post('files/chmod', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: path,
        mode,
        ...options
      }),
      headers: options.headers
    });
    await res.text();
  }
  return chmod;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/files/cp.js



const createCp = configure(api => {
  async function cp(sources, destination, options = {}) {
    const sourceArr = Array.isArray(sources) ? sources : [sources];
    const res = await api.post('files/cp', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: sourceArr.concat(destination).map(src => src_cid.CID.asCID(src) ? `/ipfs/${ src }` : src),
        ...options
      }),
      headers: options.headers
    });
    await res.text();
  }
  return cp;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/files/flush.js



const createFlush = configure(api => {
  async function flush(path, options = {}) {
    if (!path || typeof path !== 'string') {
      throw new Error('ipfs.files.flush requires a path');
    }
    const res = await api.post('files/flush', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: path,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return src_cid.CID.parse(data.Cid);
  }
  return flush;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/lib/object-to-camel-with-metadata.js

function objectToCamelWithMetadata(entry) {
  const file = objectToCamel(entry);
  if (Object.prototype.hasOwnProperty.call(file, 'mode')) {
    file.mode = parseInt(file.mode, 8);
  }
  if (Object.prototype.hasOwnProperty.call(file, 'mtime')) {
    file.mtime = {
      secs: file.mtime,
      nsecs: file.mtimeNsecs || 0
    };
    delete file.mtimeNsecs;
  }
  return file;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/files/ls.js




const createLs = configure(api => {
  async function* ls(path, options = {}) {
    if (!path) {
      throw new Error('ipfs.files.ls requires a path');
    }
    const res = await api.post('files/ls', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: src_cid.CID.asCID(path) ? `/ipfs/${ path }` : path,
        long: true,
        ...options,
        stream: true
      }),
      headers: options.headers
    });
    for await (const result of res.ndjson()) {
      if ('Entries' in result) {
        for (const entry of result.Entries || []) {
          yield ls_toCoreInterface(objectToCamelWithMetadata(entry));
        }
      } else {
        yield ls_toCoreInterface(objectToCamelWithMetadata(result));
      }
    }
  }
  return ls;
});
function ls_toCoreInterface(entry) {
  if (entry.hash) {
    entry.cid = src_cid.CID.parse(entry.hash);
  }
  delete entry.hash;
  entry.type = entry.type === 1 ? 'directory' : 'file';
  return entry;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/files/mkdir.js


const createMkdir = configure(api => {
  async function mkdir(path, options = {}) {
    const res = await api.post('files/mkdir', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: path,
        ...options
      }),
      headers: options.headers
    });
    await res.text();
  }
  return mkdir;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/files/mv.js


const createMv = configure(api => {
  async function mv(sources, destination, options = {}) {
    if (!Array.isArray(sources)) {
      sources = [sources];
    }
    const res = await api.post('files/mv', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: sources.concat(destination),
        ...options
      }),
      headers: options.headers
    });
    await res.text();
  }
  return mv;
});
// EXTERNAL MODULE: ../../node_modules/.pnpm/stream-to-it@0.2.4/node_modules/stream-to-it/source.js
var source = __webpack_require__(7748);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/files/read.js



const createRead = configure(api => {
  async function* read(path, options = {}) {
    const res = await api.post('files/read', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: path,
        count: options.length,
        ...options
      }),
      headers: options.headers
    });
    yield* source(res.body);
  }
  return read;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/files/rm.js


const files_rm_createRm = configure(api => {
  async function rm(path, options = {}) {
    const res = await api.post('files/rm', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: path,
        ...options
      }),
      headers: options.headers
    });
    await res.text();
  }
  return rm;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/files/stat.js




const files_stat_createStat = configure(api => {
  async function stat(path, options = {}) {
    const res = await api.post('files/stat', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: path,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    data.WithLocality = data.WithLocality || false;
    return stat_toCoreInterface(objectToCamelWithMetadata(data));
  }
  return stat;
});
function stat_toCoreInterface(entry) {
  entry.cid = src_cid.CID.parse(entry.hash);
  delete entry.hash;
  return entry;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/files/touch.js


const createTouch = configure(api => {
  async function touch(path, options = {}) {
    const res = await api.post('files/touch', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: path,
        ...options
      }),
      headers: options.headers
    });
    await res.text();
  }
  return touch;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/files/write.js







const createWrite = configure(api => {
  async function write(path, input, options = {}) {
    const controller = new native_abort_controller_src.AbortController();
    const signal = abortSignal(controller.signal, options.signal);
    const res = await api.post('files/write', {
      signal,
      searchParams: toUrlSearchParams({
        arg: path,
        streamChannels: true,
        count: options.length,
        ...options
      }),
      ...await (0,multipart_request_browser/* multipartRequest */.x)([{
          content: input,
          path: 'arg',
          mode: modeToString(options.mode),
          mtime: parseMtime(options.mtime)
        }], controller, options.headers)
    });
    await res.text();
  }
  return write;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/files/index.js











function createFiles(config) {
  return {
    chmod: createChmod(config),
    cp: createCp(config),
    flush: createFlush(config),
    ls: createLs(config),
    mkdir: createMkdir(config),
    mv: createMv(config),
    read: createRead(config),
    rm: files_rm_createRm(config),
    stat: files_stat_createStat(config),
    touch: createTouch(config),
    write: createWrite(config)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/key/export.js


const export_createExport = configure(api => {
  const exportKey = async (name, password, options = {}) => {
    throw err_code(new Error('Not implemented'), 'ERR_NOT_IMPLEMENTED');
  };
  return exportKey;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/key/gen.js



const createGen = configure(api => {
  async function gen(name, options = {
    type: 'rsa',
    size: 2048
  }) {
    const res = await api.post('key/gen', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: name,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return objectToCamel(data);
  }
  return gen;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/key/import.js



const import_createImport = configure(api => {
  async function importKey(name, pem, password, options = {}) {
    const res = await api.post('key/import', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: name,
        pem,
        password,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return objectToCamel(data);
  }
  return importKey;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/key/info.js


const createInfo = configure(api => {
  const info = async (name, options = {}) => {
    throw err_code(new Error('Not implemented'), 'ERR_NOT_IMPLEMENTED');
  };
  return info;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/key/list.js



const key_list_createList = configure(api => {
  async function list(options = {}) {
    const res = await api.post('key/list', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    });
    const data = await res.json();
    return (data.Keys || []).map(k => objectToCamel(k));
  }
  return list;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/key/rename.js



const createRename = configure(api => {
  async function rename(oldName, newName, options = {}) {
    const res = await api.post('key/rename', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: [
          oldName,
          newName
        ],
        ...options
      }),
      headers: options.headers
    });
    return objectToCamel(await res.json());
  }
  return rename;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/key/rm.js



const key_rm_createRm = configure(api => {
  async function rm(name, options = {}) {
    const res = await api.post('key/rm', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: name,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return objectToCamel(data.Keys[0]);
  }
  return rm;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/key/index.js







function createKey(config) {
  return {
    export: export_createExport(config),
    gen: createGen(config),
    import: import_createImport(config),
    info: createInfo(config),
    list: key_list_createList(config),
    rename: createRename(config),
    rm: key_rm_createRm(config)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/log/level.js



const createLevel = configure(api => {
  async function level(subsystem, level, options = {}) {
    const res = await api.post('log/level', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: [
          subsystem,
          level
        ],
        ...options
      }),
      headers: options.headers
    });
    return objectToCamel(await res.json());
  }
  return level;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/log/ls.js


const ls_createLs = configure(api => {
  async function ls(options = {}) {
    const res = await api.post('log/ls', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    });
    const data = await res.json();
    return data.Strings;
  }
  return ls;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/log/tail.js


const createTail = configure(api => {
  async function* tail(options = {}) {
    const res = await api.post('log/tail', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    });
    yield* res.ndjson();
  }
  return tail;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/log/index.js



function createLog(config) {
  return {
    level: createLevel(config),
    ls: ls_createLs(config),
    tail: createTail(config)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/name/publish.js



const createPublish = configure(api => {
  async function publish(path, options = {}) {
    const res = await api.post('name/publish', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: `${ path }`,
        ...options
      }),
      headers: options.headers
    });
    return objectToCamel(await res.json());
  }
  return publish;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/name/resolve.js


const resolve_createResolve = configure(api => {
  async function* resolve(path, options = {}) {
    const res = await api.post('name/resolve', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: path,
        stream: true,
        ...options
      }),
      headers: options.headers
    });
    for await (const result of res.ndjson()) {
      yield result.Path;
    }
  }
  return resolve;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/name/pubsub/cancel.js



const createCancel = configure(api => {
  async function cancel(name, options = {}) {
    const res = await api.post('name/pubsub/cancel', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: name,
        ...options
      }),
      headers: options.headers
    });
    return objectToCamel(await res.json());
  }
  return cancel;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/name/pubsub/state.js



const createState = configure(api => {
  async function state(options = {}) {
    const res = await api.post('name/pubsub/state', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    });
    return objectToCamel(await res.json());
  }
  return state;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/name/pubsub/subs.js


const createSubs = configure(api => {
  async function subs(options = {}) {
    const res = await api.post('name/pubsub/subs', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    });
    const data = await res.json();
    return data.Strings || [];
  }
  return subs;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/name/pubsub/index.js



function createPubsub(config) {
  return {
    cancel: createCancel(config),
    state: createState(config),
    subs: createSubs(config)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/name/index.js



function createName(config) {
  return {
    publish: createPublish(config),
    resolve: resolve_createResolve(config),
    pubsub: createPubsub(config)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/object/data.js



const createData = configure(api => {
  async function data(cid, options = {}) {
    const res = await api.post('object/data', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: `${ cid instanceof Uint8Array ? src_cid.CID.decode(cid) : cid }`,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.arrayBuffer();
    return new Uint8Array(data, 0, data.byteLength);
  }
  return data;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/object/get.js




const object_get_createGet = configure(api => {
  async function get(cid, options = {}) {
    const res = await api.post('object/get', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: `${ cid instanceof Uint8Array ? src_cid.CID.decode(cid) : cid }`,
        dataEncoding: 'base64',
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return {
      Data: (0,from_string.fromString)(data.Data, 'base64pad'),
      Links: (data.Links || []).map(link => ({
        Name: link.Name,
        Hash: src_cid.CID.parse(link.Hash),
        Tsize: link.Size
      }))
    };
  }
  return get;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/object/links.js



const createLinks = configure(api => {
  async function links(cid, options = {}) {
    const res = await api.post('object/links', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: `${ cid instanceof Uint8Array ? src_cid.CID.decode(cid) : cid }`,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return (data.Links || []).map(l => ({
      Name: l.Name,
      Tsize: l.Size,
      Hash: src_cid.CID.parse(l.Hash)
    }));
  }
  return links;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/object/new.js



const createNew = configure(api => {
  async function newObject(options = {}) {
    const res = await api.post('object/new', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: options.template,
        ...options
      }),
      headers: options.headers
    });
    const {Hash} = await res.json();
    return src_cid.CID.parse(Hash);
  }
  return newObject;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/object/put.js


const object_put_createPut = (codecs, options) => {
  const fn = configure(api => {
    const dagPut = put_createPut(codecs, options);
    async function put(obj, options = {}) {
      return dagPut(obj, {
        ...options,
        format: 'dag-pb',
        hashAlg: 'sha2-256',
        version: 0
      });
    }
    return put;
  });
  return fn(options);
};
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/object/stat.js



const object_stat_createStat = configure(api => {
  async function stat(cid, options = {}) {
    const res = await api.post('object/stat', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: `${ cid }`,
        ...options
      }),
      headers: options.headers
    });
    const output = await res.json();
    return {
      ...output,
      Hash: src_cid.CID.parse(output.Hash)
    };
  }
  return stat;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/object/patch/add-link.js



const createAddLink = configure(api => {
  async function addLink(cid, dLink, options = {}) {
    const res = await api.post('object/patch/add-link', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: [
          `${ cid }`,
          dLink.Name || dLink.name || '',
          (dLink.Hash || dLink.cid || '').toString() || null
        ],
        ...options
      }),
      headers: options.headers
    });
    const {Hash} = await res.json();
    return src_cid.CID.parse(Hash);
  }
  return addLink;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/object/patch/append-data.js






const createAppendData = configure(api => {
  async function appendData(cid, data, options = {}) {
    const controller = new native_abort_controller_src.AbortController();
    const signal = abortSignal(controller.signal, options.signal);
    const res = await api.post('object/patch/append-data', {
      signal,
      searchParams: toUrlSearchParams({
        arg: `${ cid }`,
        ...options
      }),
      ...await (0,multipart_request_browser/* multipartRequest */.x)([data], controller, options.headers)
    });
    const {Hash} = await res.json();
    return src_cid.CID.parse(Hash);
  }
  return appendData;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/object/patch/rm-link.js



const createRmLink = configure(api => {
  async function rmLink(cid, dLink, options = {}) {
    const res = await api.post('object/patch/rm-link', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: [
          `${ cid }`,
          dLink.Name || dLink.name || null
        ],
        ...options
      }),
      headers: options.headers
    });
    const {Hash} = await res.json();
    return src_cid.CID.parse(Hash);
  }
  return rmLink;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/object/patch/set-data.js






const createSetData = configure(api => {
  async function setData(cid, data, options = {}) {
    const controller = new native_abort_controller_src.AbortController();
    const signal = abortSignal(controller.signal, options.signal);
    const res = await api.post('object/patch/set-data', {
      signal,
      searchParams: toUrlSearchParams({
        arg: [`${ cid }`],
        ...options
      }),
      ...await (0,multipart_request_browser/* multipartRequest */.x)([data], controller, options.headers)
    });
    const {Hash} = await res.json();
    return src_cid.CID.parse(Hash);
  }
  return setData;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/object/patch/index.js




function createPatch(config) {
  return {
    addLink: createAddLink(config),
    appendData: createAppendData(config),
    rmLink: createRmLink(config),
    setData: createSetData(config)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/object/index.js







function createObject(codecs, config) {
  return {
    data: createData(config),
    get: object_get_createGet(config),
    links: createLinks(config),
    new: createNew(config),
    put: object_put_createPut(codecs, config),
    stat: object_stat_createStat(config),
    patch: createPatch(config)
  };
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/ipfs-core-utils@0.12.2/node_modules/ipfs-core-utils/esm/src/pins/normalise-input.js
var normalise_input = __webpack_require__(67994);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pin/add-all.js




const createAddAll = configure(api => {
  async function* addAll(source, options = {}) {
    for await (const {path, recursive, metadata} of (0,normalise_input/* normaliseInput */.f)(source)) {
      const res = await api.post('pin/add', {
        signal: options.signal,
        searchParams: toUrlSearchParams({
          ...options,
          arg: path,
          recursive,
          metadata: metadata ? JSON.stringify(metadata) : undefined,
          stream: true
        }),
        headers: options.headers
      });
      for await (const pin of res.ndjson()) {
        if (pin.Pins) {
          for (const cid of pin.Pins) {
            yield src_cid.CID.parse(cid);
          }
          continue;
        }
        yield src_cid.CID.parse(pin);
      }
    }
  }
  return addAll;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pin/add.js



function add_createAdd(config) {
  const all = createAddAll(config);
  return configure(() => {
    async function add(path, options = {}) {
      return it_last(all([{
          path,
          ...options
        }], options));
    }
    return add;
  })(config);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pin/ls.js



function toPin(type, cid, metadata) {
  const pin = {
    type,
    cid: src_cid.CID.parse(cid)
  };
  if (metadata) {
    pin.metadata = metadata;
  }
  return pin;
}
const pin_ls_createLs = configure(api => {
  async function* ls(options = {}) {
    let paths = [];
    if (options.paths) {
      paths = Array.isArray(options.paths) ? options.paths : [options.paths];
    }
    const res = await api.post('pin/ls', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        ...options,
        arg: paths.map(path => `${ path }`),
        stream: true
      }),
      headers: options.headers
    });
    for await (const pin of res.ndjson()) {
      if (pin.Keys) {
        for (const cid of Object.keys(pin.Keys)) {
          yield toPin(pin.Keys[cid].Type, cid, pin.Keys[cid].Metadata);
        }
        return;
      }
      yield toPin(pin.Type, pin.Cid, pin.Metadata);
    }
  }
  return ls;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pin/rm-all.js




const createRmAll = configure(api => {
  async function* rmAll(source, options = {}) {
    for await (const {path, recursive} of (0,normalise_input/* normaliseInput */.f)(source)) {
      const searchParams = new URLSearchParams(options.searchParams);
      searchParams.append('arg', `${ path }`);
      if (recursive != null)
        searchParams.set('recursive', String(recursive));
      const res = await api.post('pin/rm', {
        signal: options.signal,
        headers: options.headers,
        searchParams: toUrlSearchParams({
          ...options,
          arg: `${ path }`,
          recursive
        })
      });
      for await (const pin of res.ndjson()) {
        if (pin.Pins) {
          yield* pin.Pins.map(cid => src_cid.CID.parse(cid));
          continue;
        }
        yield src_cid.CID.parse(pin);
      }
    }
  }
  return rmAll;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pin/rm.js



const pin_rm_createRm = config => {
  const all = createRmAll(config);
  return configure(() => {
    async function rm(path, options = {}) {
      return it_last(all([{
          path,
          ...options
        }], options));
    }
    return rm;
  })(config);
};
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pin/remote/utils.js


const decodePin = ({
  Name: name,
  Status: status,
  Cid: cid
}) => {
  return {
    cid: src_cid.CID.parse(cid),
    name,
    status
  };
};
const encodeService = service => {
  if (typeof service === 'string' && service !== '') {
    return service;
  } else {
    throw new TypeError('service name must be passed');
  }
};
const encodeCID = cid => {
  if (src_cid.CID.asCID(cid)) {
    return cid.toString();
  } else {
    throw new TypeError(`CID instance expected instead of ${ typeof cid }`);
  }
};
const encodeQuery = ({service, cid, name, status, all}) => {
  const query = toUrlSearchParams({
    service: encodeService(service),
    name,
    force: all ? true : undefined
  });
  if (cid) {
    for (const value of cid) {
      query.append('cid', encodeCID(value));
    }
  }
  if (status) {
    for (const value of status) {
      query.append('status', value);
    }
  }
  return query;
};
const encodeAddParams = ({cid, service, background, name, origins}) => {
  const params = toUrlSearchParams({
    arg: encodeCID(cid),
    service: encodeService(service),
    name,
    background: background ? true : undefined
  });
  if (origins) {
    for (const origin of origins) {
      params.append('origin', origin.toString());
    }
  }
  return params;
};
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pin/remote/add.js

function remote_add_createAdd(client) {
  async function add(cid, {timeout, signal, headers, ...query}) {
    const response = await client.post('pin/remote/add', {
      timeout,
      signal,
      headers,
      searchParams: encodeAddParams({
        cid,
        ...query
      })
    });
    return decodePin(await response.json());
  }
  return add;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pin/remote/ls.js

function remote_ls_createLs(client) {
  async function* ls({timeout, signal, headers, ...query}) {
    const response = await client.post('pin/remote/ls', {
      timeout,
      signal,
      headers,
      searchParams: encodeQuery(query)
    });
    for await (const pin of response.ndjson()) {
      yield decodePin(pin);
    }
  }
  return ls;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pin/remote/rm.js

function remote_rm_createRm(client) {
  async function rm({timeout, signal, headers, ...query}) {
    await client.post('pin/remote/rm', {
      timeout,
      signal,
      headers,
      searchParams: encodeQuery({
        ...query,
        all: false
      })
    });
  }
  return rm;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pin/remote/rm-all.js

function rm_all_createRmAll(client) {
  async function rmAll({timeout, signal, headers, ...query}) {
    await client.post('pin/remote/rm', {
      timeout,
      signal,
      headers,
      searchParams: encodeQuery({
        ...query,
        all: true
      })
    });
  }
  return rmAll;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pin/remote/service/utils.js
function encodeEndpoint(url) {
  const href = String(url);
  if (href === 'undefined') {
    throw Error('endpoint is required');
  }
  return href[href.length - 1] === '/' ? href.slice(0, -1) : href;
}
function decodeRemoteService(json) {
  return {
    service: json.Service,
    endpoint: new URL(json.ApiEndpoint),
    ...json.Stat && { stat: decodeStat(json.Stat) }
  };
}
function decodeStat(json) {
  switch (json.Status) {
  case 'valid': {
      const {Pinning, Pinned, Queued, Failed} = json.PinCount;
      return {
        status: 'valid',
        pinCount: {
          queued: Queued,
          pinning: Pinning,
          pinned: Pinned,
          failed: Failed
        }
      };
    }
  case 'invalid': {
      return { status: 'invalid' };
    }
  default: {
      return { status: json.Status };
    }
  }
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pin/remote/service/add.js


function service_add_createAdd(client) {
  async function add(name, options) {
    const {endpoint, key, headers, timeout, signal} = options;
    await client.post('pin/remote/service/add', {
      timeout,
      signal,
      searchParams: toUrlSearchParams({
        arg: [
          name,
          encodeEndpoint(endpoint),
          key
        ]
      }),
      headers
    });
  }
  return add;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pin/remote/service/ls.js


function service_ls_createLs(client) {
  async function ls(options = {}) {
    const {stat, headers, timeout, signal} = options;
    const response = await client.post('pin/remote/service/ls', {
      timeout,
      signal,
      headers,
      searchParams: stat === true ? toUrlSearchParams({ stat }) : undefined
    });
    const {RemoteServices} = await response.json();
    return RemoteServices.map(decodeRemoteService);
  }
  return ls;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pin/remote/service/rm.js

function service_rm_createRm(client) {
  async function rm(name, options = {}) {
    await client.post('pin/remote/service/rm', {
      signal: options.signal,
      headers: options.headers,
      searchParams: toUrlSearchParams({ arg: name })
    });
  }
  return rm;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pin/remote/service/index.js




function createService(config) {
  const client = new Client(config);
  return {
    add: service_add_createAdd(client),
    ls: service_ls_createLs(client),
    rm: service_rm_createRm(client)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pin/remote/index.js






function createRemote(config) {
  const client = new Client(config);
  return {
    add: remote_add_createAdd(client),
    ls: remote_ls_createLs(client),
    rm: remote_rm_createRm(client),
    rmAll: rm_all_createRmAll(client),
    service: createService(config)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pin/index.js






function createPin(config) {
  return {
    addAll: createAddAll(config),
    add: add_createAdd(config),
    ls: pin_ls_createLs(config),
    rmAll: createRmAll(config),
    rm: pin_rm_createRm(config),
    remote: createRemote(config)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pubsub/ls.js


const pubsub_ls_createLs = configure(api => {
  async function ls(options = {}) {
    const {Strings} = await (await api.post('pubsub/ls', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })).json();
    return Strings || [];
  }
  return ls;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pubsub/peers.js


const createPeers = configure(api => {
  async function peers(topic, options = {}) {
    const res = await api.post('pubsub/peers', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: topic,
        ...options
      }),
      headers: options.headers
    });
    const {Strings} = await res.json();
    return Strings || [];
  }
  return peers;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pubsub/publish.js





const publish_createPublish = configure(api => {
  async function publish(topic, data, options = {}) {
    const searchParams = toUrlSearchParams({
      arg: topic,
      ...options
    });
    const controller = new native_abort_controller_src.AbortController();
    const signal = abortSignal(controller.signal, options.signal);
    const res = await api.post('pubsub/pub', {
      signal,
      searchParams,
      ...await (0,multipart_request_browser/* multipartRequest */.x)([data], controller, options.headers)
    });
    await res.text();
  }
  return publish;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pubsub/subscribe.js





const subscribe_log = browser('ipfs-http-client:pubsub:subscribe');
const createSubscribe = (options, subsTracker) => {
  return configure(api => {
    async function subscribe(topic, handler, options = {}) {
      options.signal = subsTracker.subscribe(topic, handler, options.signal);
      let done;
      let fail;
      const result = new Promise((resolve, reject) => {
        done = resolve;
        fail = reject;
      });
      const ffWorkaround = setTimeout(() => done(), 1000);
      api.post('pubsub/sub', {
        signal: options.signal,
        searchParams: toUrlSearchParams({
          arg: topic,
          ...options
        }),
        headers: options.headers
      }).catch(err => {
        subsTracker.unsubscribe(topic, handler);
        fail(err);
      }).then(response => {
        clearTimeout(ffWorkaround);
        if (!response) {
          return;
        }
        readMessages(response, {
          onMessage: handler,
          onEnd: () => subsTracker.unsubscribe(topic, handler),
          onError: options.onError
        });
        done();
      });
      return result;
    }
    return subscribe;
  })(options);
};
async function readMessages(response, {onMessage, onEnd, onError}) {
  onError = onError || subscribe_log;
  try {
    for await (const msg of response.ndjson()) {
      try {
        if (!msg.from) {
          continue;
        }
        onMessage({
          from: (0,to_string.toString)((0,from_string.fromString)(msg.from, 'base64pad'), 'base58btc'),
          data: (0,from_string.fromString)(msg.data, 'base64pad'),
          seqno: (0,from_string.fromString)(msg.seqno, 'base64pad'),
          topicIDs: msg.topicIDs
        });
      } catch (err) {
        err.message = `Failed to parse pubsub message: ${ err.message }`;
        onError(err, false, msg);
      }
    }
  } catch (err) {
    if (!isAbortError(err)) {
      onError(err, true);
    }
  } finally {
    onEnd();
  }
}
const isAbortError = error => {
  switch (error.type) {
  case 'aborted':
    return true;
  case 'abort':
    return true;
  default:
    return error.name === 'AbortError';
  }
};
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pubsub/unsubscribe.js
const createUnsubscribe = (options, subsTracker) => {
  async function unsubscribe(topic, handler) {
    subsTracker.unsubscribe(topic, handler);
  }
  return unsubscribe;
};
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pubsub/subscription-tracker.js

class SubscriptionTracker {
  constructor() {
    this._subs = new Map();
  }
  subscribe(topic, handler, signal) {
    const topicSubs = this._subs.get(topic) || [];
    if (topicSubs.find(s => s.handler === handler)) {
      throw new Error(`Already subscribed to ${ topic } with this handler`);
    }
    const controller = new native_abort_controller_src.AbortController();
    this._subs.set(topic, [{
        handler,
        controller
      }].concat(topicSubs));
    if (signal) {
      signal.addEventListener('abort', () => this.unsubscribe(topic, handler));
    }
    return controller.signal;
  }
  unsubscribe(topic, handler) {
    const subs = this._subs.get(topic) || [];
    let unsubs;
    if (handler) {
      this._subs.set(topic, subs.filter(s => s.handler !== handler));
      unsubs = subs.filter(s => s.handler === handler);
    } else {
      this._subs.set(topic, []);
      unsubs = subs;
    }
    if (!(this._subs.get(topic) || []).length) {
      this._subs.delete(topic);
    }
    unsubs.forEach(s => s.controller.abort());
  }
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/pubsub/index.js






function pubsub_createPubsub(config) {
  const subscriptionTracker = new SubscriptionTracker();
  return {
    ls: pubsub_ls_createLs(config),
    peers: createPeers(config),
    publish: publish_createPublish(config),
    subscribe: createSubscribe(config, subscriptionTracker),
    unsubscribe: createUnsubscribe(config, subscriptionTracker)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/refs/local.js



const createLocal = configure(api => {
  async function* refsLocal(options = {}) {
    const res = await api.post('refs/local', {
      signal: options.signal,
      transform: objectToCamel,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    });
    yield* res.ndjson();
  }
  return refsLocal;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/refs/index.js





const createRefs = configure((api, opts) => {
  const refs = async function* (args, options = {}) {
    const argsArr = Array.isArray(args) ? args : [args];
    const res = await api.post('refs', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: argsArr.map(arg => `${ arg instanceof Uint8Array ? src_cid.CID.decode(arg) : arg }`),
        ...options
      }),
      headers: options.headers,
      transform: objectToCamel
    });
    yield* res.ndjson();
  };
  return Object.assign(refs, { local: createLocal(opts) });
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/repo/gc.js



const createGc = configure(api => {
  async function* gc(options = {}) {
    const res = await api.post('repo/gc', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers,
      transform: res => {
        return {
          err: res.Error ? new Error(res.Error) : null,
          cid: (res.Key || {})['/'] ? src_cid.CID.parse(res.Key['/']) : null
        };
      }
    });
    yield* res.ndjson();
  }
  return gc;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/repo/stat.js


const repo_stat_createStat = configure(api => {
  async function stat(options = {}) {
    const res = await api.post('repo/stat', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    });
    const data = await res.json();
    return {
      numObjects: BigInt(data.NumObjects),
      repoSize: BigInt(data.RepoSize),
      repoPath: data.RepoPath,
      version: data.Version,
      storageMax: BigInt(data.StorageMax)
    };
  }
  return stat;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/repo/version.js


const createVersion = configure(api => {
  async function version(options = {}) {
    const res = await (await api.post('repo/version', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })).json();
    return res.Version;
  }
  return version;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/repo/index.js



function createRepo(config) {
  return {
    gc: createGc(config),
    stat: repo_stat_createStat(config),
    version: createVersion(config)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/stats/bw.js


const createBw = configure(api => {
  async function* bw(options = {}) {
    const res = await api.post('stats/bw', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers,
      transform: stats => ({
        totalIn: BigInt(stats.TotalIn),
        totalOut: BigInt(stats.TotalOut),
        rateIn: parseFloat(stats.RateIn),
        rateOut: parseFloat(stats.RateOut)
      })
    });
    yield* res.ndjson();
  }
  return bw;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/stats/index.js



function createStats(config) {
  return {
    bitswap: createStat(config),
    repo: repo_stat_createStat(config),
    bw: createBw(config)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/swarm/addrs.js



const createAddrs = configure(api => {
  async function addrs(options = {}) {
    const res = await api.post('swarm/addrs', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    });
    const {Addrs} = await res.json();
    return Object.keys(Addrs).map(id => ({
      id,
      addrs: (Addrs[id] || []).map(a => new multiaddr_src.Multiaddr(a))
    }));
  }
  return addrs;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/swarm/connect.js


const createConnect = configure(api => {
  async function connect(addr, options = {}) {
    const res = await api.post('swarm/connect', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: addr,
        ...options
      }),
      headers: options.headers
    });
    const {Strings} = await res.json();
    return Strings || [];
  }
  return connect;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/swarm/disconnect.js


const createDisconnect = configure(api => {
  async function disconnect(addr, options = {}) {
    const res = await api.post('swarm/disconnect', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: addr,
        ...options
      }),
      headers: options.headers
    });
    const {Strings} = await res.json();
    return Strings || [];
  }
  return disconnect;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/swarm/local-addrs.js



const createLocalAddrs = configure(api => {
  async function localAddrs(options = {}) {
    const res = await api.post('swarm/addrs/local', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    });
    const {Strings} = await res.json();
    return (Strings || []).map(a => new multiaddr_src.Multiaddr(a));
  }
  return localAddrs;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/swarm/peers.js



const peers_createPeers = configure(api => {
  async function peers(options = {}) {
    const res = await api.post('swarm/peers', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    });
    const {Peers} = await res.json();
    return (Peers || []).map(peer => {
      return {
        addr: new multiaddr_src.Multiaddr(peer.Addr),
        peer: peer.Peer,
        muxer: peer.Muxer,
        latency: peer.Latency,
        streams: peer.Streams,
        direction: peer.Direction == null ? undefined : peer.Direction === 0 ? 'inbound' : 'outbound'
      };
    });
  }
  return peers;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/swarm/index.js





function createSwarm(config) {
  return {
    addrs: createAddrs(config),
    connect: createConnect(config),
    disconnect: createDisconnect(config),
    localAddrs: createLocalAddrs(config),
    peers: peers_createPeers(config)
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/add-all.js







const add_all_createAddAll = configure(api => {
  async function* addAll(source, options = {}) {
    const controller = new native_abort_controller_src.AbortController();
    const signal = abortSignal(controller.signal, options.signal);
    const {headers, body, total, parts} = await (0,multipart_request_browser/* multipartRequest */.x)(source, controller, options.headers);
    const [progressFn, onUploadProgress] = typeof options.progress === 'function' ? createProgressHandler(total, parts, options.progress) : [
      undefined,
      undefined
    ];
    const res = await api.post('add', {
      searchParams: toUrlSearchParams({
        'stream-channels': true,
        ...options,
        progress: Boolean(progressFn)
      }),
      onUploadProgress,
      signal,
      headers,
      body
    });
    for await (let file of res.ndjson()) {
      file = objectToCamel(file);
      if (file.hash !== undefined) {
        yield add_all_toCoreInterface(file);
      } else if (progressFn) {
        progressFn(file.bytes || 0, file.name);
      }
    }
  }
  return addAll;
});
const createProgressHandler = (total, parts, progress) => parts ? [
  undefined,
  createOnUploadProgress(total, parts, progress)
] : [
  progress,
  undefined
];
const createOnUploadProgress = (size, parts, progress) => {
  let index = 0;
  const count = parts.length;
  return ({loaded, total}) => {
    const position = Math.floor(loaded / total * size);
    while (index < count) {
      const {start, end, name} = parts[index];
      if (position < end) {
        progress(position - start, name);
        break;
      } else {
        progress(end - start, name);
        index += 1;
      }
    }
  };
};
function add_all_toCoreInterface({name, hash, size, mode, mtime, mtimeNsecs}) {
  const output = {
    path: name,
    cid: src_cid.CID.parse(hash),
    size: parseInt(size)
  };
  if (mode != null) {
    output.mode = parseInt(mode, 8);
  }
  if (mtime != null) {
    output.mtime = {
      secs: mtime,
      nsecs: mtimeNsecs || 0
    };
  }
  return output;
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/ipfs-core-utils@0.12.2/node_modules/ipfs-core-utils/esm/src/files/normalise-input-single.js + 2 modules
var normalise_input_single = __webpack_require__(74207);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/add.js




function src_add_createAdd(options) {
  const all = add_all_createAddAll(options);
  return configure(() => {
    async function add(input, options = {}) {
      return await it_last(all((0,normalise_input_single/* normaliseInput */.f)(input), options));
    }
    return add;
  })(options);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/cat.js


const createCat = configure(api => {
  async function* cat(path, options = {}) {
    const res = await api.post('cat', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: path.toString(),
        ...options
      }),
      headers: options.headers
    });
    yield* res.iterator();
  }
  return cat;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/commands.js


const createCommands = configure(api => {
  const commands = async (options = {}) => {
    const res = await api.post('commands', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    });
    return res.json();
  };
  return commands;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/dns.js


const createDns = configure(api => {
  const dns = async (domain, options = {}) => {
    const res = await api.post('dns', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: domain,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return data.Path;
  };
  return dns;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/get-endpoint-config.js

const createGetEndpointConfig = configure(api => {
  return () => {
    const url = new URL(api.opts.base || '');
    return {
      host: url.hostname,
      port: url.port,
      protocol: url.protocol,
      pathname: url.pathname,
      'api-path': url.pathname
    };
  };
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/get.js



const src_get_createGet = configure(api => {
  async function* get(path, options = {}) {
    const opts = {
      arg: `${ path instanceof Uint8Array ? src_cid.CID.decode(path) : path }`,
      ...options
    };
    if (opts.compressionLevel) {
      opts['compression-level'] = opts.compressionLevel;
      delete opts.compressionLevel;
    }
    const res = await api.post('get', {
      signal: options.signal,
      searchParams: toUrlSearchParams(opts),
      headers: options.headers
    });
    yield* res.iterator();
  }
  return get;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/id.js




const createId = configure(api => {
  async function id(options = {}) {
    const res = await api.post('id', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: options.peerId ? options.peerId.toString() : undefined,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    const output = { ...objectToCamel(data) };
    if (output.addresses) {
      output.addresses = output.addresses.map(ma => new multiaddr_src.Multiaddr(ma));
    }
    return output;
  }
  return id;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/is-online.js

const createIsOnline = options => {
  const id = createId(options);
  async function isOnline(options = {}) {
    const res = await id(options);
    return Boolean(res && res.addresses && res.addresses.length);
  }
  return isOnline;
};
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/ls.js




const src_ls_createLs = configure((api, opts) => {
  async function* ls(path, options = {}) {
    const pathStr = `${ path instanceof Uint8Array ? src_cid.CID.decode(path) : path }`;
    async function mapLink(link) {
      let hash = link.Hash;
      if (hash.includes('/')) {
        const ipfsPath = hash.startsWith('/ipfs/') ? hash : `/ipfs/${ hash }`;
        const stats = await files_stat_createStat(opts)(ipfsPath);
        hash = stats.cid;
      } else {
        hash = src_cid.CID.parse(hash);
      }
      const entry = {
        name: link.Name,
        path: pathStr + (link.Name ? `/${ link.Name }` : ''),
        size: link.Size,
        cid: hash,
        type: typeOf(link)
      };
      if (link.Mode) {
        entry.mode = parseInt(link.Mode, 8);
      }
      if (link.Mtime !== undefined && link.Mtime !== null) {
        entry.mtime = { secs: link.Mtime };
        if (link.MtimeNsecs !== undefined && link.MtimeNsecs !== null) {
          entry.mtime.nsecs = link.MtimeNsecs;
        }
      }
      return entry;
    }
    const res = await api.post('ls', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: pathStr,
        ...options
      }),
      headers: options.headers
    });
    for await (let result of res.ndjson()) {
      result = result.Objects;
      if (!result) {
        throw new Error('expected .Objects in results');
      }
      result = result[0];
      if (!result) {
        throw new Error('expected one array in results.Objects');
      }
      const links = result.Links;
      if (!Array.isArray(links)) {
        throw new Error('expected one array in results.Objects[0].Links');
      }
      if (!links.length) {
        yield mapLink(result);
        return;
      }
      yield* links.map(mapLink);
    }
  }
  return ls;
});
function typeOf(link) {
  switch (link.Type) {
  case 1:
  case 5:
    return 'dir';
  case 2:
    return 'file';
  default:
    return 'file';
  }
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/mount.js



const createMount = configure(api => {
  async function mount(options = {}) {
    const res = await api.post('dns', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    });
    return objectToCamel(await res.json());
  }
  return mount;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/ping.js



const createPing = configure(api => {
  async function* ping(peerId, options = {}) {
    const res = await api.post('ping', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: `${ peerId }`,
        ...options
      }),
      headers: options.headers,
      transform: objectToCamel
    });
    yield* res.ndjson();
  }
  return ping;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/resolve.js


const src_resolve_createResolve = configure(api => {
  async function resolve(path, options = {}) {
    const res = await api.post('resolve', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: path,
        ...options
      }),
      headers: options.headers
    });
    const {Path} = await res.json();
    return Path;
  }
  return resolve;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/start.js


const createStart = configure(api => {
  const start = async (options = {}) => {
    throw err_code(new Error('Not implemented'), 'ERR_NOT_IMPLEMENTED');
  };
  return start;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/stop.js


const createStop = configure(api => {
  async function stop(options = {}) {
    const res = await api.post('shutdown', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    });
    await res.text();
  }
  return stop;
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/version.js



const version_createVersion = configure(api => {
  async function version(options = {}) {
    const res = await api.post('version', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    });
    return {
      ...objectToCamel(await res.json()),
      'ipfs-http-client': '1.0.0'
    };
  }
  return version;
});
// EXTERNAL MODULE: ipfs-utils/src/files/glob-source.js (ignored)
var glob_source_ignored_ = __webpack_require__(44902);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ipfs-utils@9.0.4/node_modules/ipfs-utils/src/files/url-source.js
var url_source = __webpack_require__(24279);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/index.js










































function create(options = {}) {
  const id = {
    name: identity.identity.name,
    code: identity.identity.code,
    encode: id => id,
    decode: id => id
  };
  const multibaseCodecs = Object.values(basics.bases);
  (options.ipld && options.ipld.bases ? options.ipld.bases : []).forEach(base => multibaseCodecs.push(base));
  const multibases = new src_multibases/* Multibases */.x({
    bases: multibaseCodecs,
    loadBase: options.ipld && options.ipld.loadBase
  });
  const blockCodecs = Object.values(basics.codecs);
  [
    src,
    esm,
    id
  ].concat(options.ipld && options.ipld.codecs || []).forEach(codec => blockCodecs.push(codec));
  const multicodecs = new src_multicodecs/* Multicodecs */.w({
    codecs: blockCodecs,
    loadCodec: options.ipld && options.ipld.loadCodec
  });
  const multihashHashers = Object.values(basics.hashes);
  (options.ipld && options.ipld.hashers ? options.ipld.hashers : []).forEach(hasher => multihashHashers.push(hasher));
  const multihashes = new src_multihashes/* Multihashes */.d({
    hashers: multihashHashers,
    loadHasher: options.ipld && options.ipld.loadHasher
  });
  const client = {
    add: src_add_createAdd(options),
    addAll: add_all_createAddAll(options),
    bitswap: createBitswap(options),
    block: createBlock(options),
    bootstrap: createBootstrap(options),
    cat: createCat(options),
    commands: createCommands(options),
    config: createConfig(options),
    dag: createDag(multicodecs, options),
    dht: createDht(options),
    diag: createDiag(options),
    dns: createDns(options),
    files: createFiles(options),
    get: src_get_createGet(options),
    getEndpointConfig: createGetEndpointConfig(options),
    id: createId(options),
    isOnline: createIsOnline(options),
    key: createKey(options),
    log: createLog(options),
    ls: src_ls_createLs(options),
    mount: createMount(options),
    name: createName(options),
    object: createObject(multicodecs, options),
    pin: createPin(options),
    ping: createPing(options),
    pubsub: pubsub_createPubsub(options),
    refs: createRefs(options),
    repo: createRepo(options),
    resolve: src_resolve_createResolve(options),
    start: createStart(options),
    stats: createStats(options),
    stop: createStop(options),
    swarm: createSwarm(options),
    version: version_createVersion(options),
    bases: multibases,
    codecs: multicodecs,
    hashers: multihashes
  };
  return client;
}



const globSource = (/* unused pure expression or super */ null && (globSourceImport));

/***/ })

}]);