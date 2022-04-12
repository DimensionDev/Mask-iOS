
function init() {
    'use strict'
    // This log is required by Gun's license.
    globalThis.console.log(
        'Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!',
    )
    function setTimeout() {
        return globalThis.setTimeout.apply(globalThis, arguments)
    }
    const location = new URL('https://example.com')
    const Object = {
        prototype: globalThis.Object.prototype,
        keys: globalThis.Object.keys,
        create: globalThis.Object.create,
        assign: globalThis.Object.assign,
    }
    const console = { log() {} }
    function String() {
        return globalThis.String.apply(this, arguments)
    }
    const window = {
        setTimeout,
        location,
        Object,
        console,
        String,
        TextEncoder: globalThis.TextEncoder,
        TextDecoder: globalThis.TextDecoder,
        crypto: globalThis.crypto,
        get localStorage() {
            return globalThis.localStorage
        },
        get sessionStorage() {
            return globalThis.sessionStorage
        },
        indexedDB: globalThis.indexedDB,
    }
    try {
        ;(function(){

  /* UNBUILD */
  function USE(arg, req){
    return req? require(arg) : arg.slice? USE[R(arg)] : function(mod, path){
      arg(mod = {exports: {}});
      USE[R(path)] = mod.exports;
    }
    function R(p){
      return p.split('/').slice(-1).toString().replace('.js','');
    }
  }
  if(typeof module !== "undefined"){ var MODULE = module }
  /* UNBUILD */

	;USE(function(module){
		// Shim for generic javascript utilities.
		String.random = function(l, c){
			var s = '';
			l = l || 24; // you are not going to make a 0 length random number, so no need to check type
			c = c || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz';
			while(l-- > 0){ s += c.charAt(Math.floor(Math.random() * c.length)) }
			return s;
		}
		String.match = function(t, o){ var tmp, u;
			if('string' !== typeof t){ return false }
			if('string' == typeof o){ o = {'=': o} }
			o = o || {};
			tmp = (o['='] || o['*'] || o['>'] || o['<']);
			if(t === tmp){ return true }
			if(u !== o['=']){ return false }
			tmp = (o['*'] || o['>']);
			if(t.slice(0, (tmp||'').length) === tmp){ return true }
			if(u !== o['*']){ return false }
			if(u !== o['>'] && u !== o['<']){
				return (t >= o['>'] && t <= o['<'])? true : false;
			}
			if(u !== o['>'] && t >= o['>']){ return true }
			if(u !== o['<'] && t <= o['<']){ return true }
			return false;
		}
		String.hash = function(s, c){ // via SO
			if(typeof s !== 'string'){ return }
	    c = c || 0; // CPU schedule hashing by
	    if(!s.length){ return c }
	    for(var i=0,l=s.length,n; i<l; ++i){
	      n = s.charCodeAt(i);
	      c = ((c<<5)-c)+n;
	      c |= 0;
	    }
	    return c;
	  }
		var has = Object.prototype.hasOwnProperty;
		Object.plain = function(o){ return o? (o instanceof globalThis.Object && o.constructor === globalThis.Object) || Object.prototype.toString.call(o).match(/^\[object (\w+)\]$/)[1] === 'Object' : false }
		Object.empty = function(o, n){
			for(var k in o){ if(has.call(o, k) && (!n || -1==n.indexOf(k))){ return false } }
			return true;
		}
		Object.keys = Object.keys || function(o){
			var l = [];
			for(var k in o){ if(has.call(o, k)){ l.push(k) } }
			return l;
		}
		;(function(){ // max ~1ms or before stack overflow 
			var u, sT = setTimeout, l = 0, c = 0, sI = (typeof setImmediate !== ''+u && setImmediate) || sT; // queueMicrotask faster but blocks UI
			sT.poll = sT.poll || function(f){ //f(); return; // for testing
				if((1 >= (+new Date - l)) && c++ < 3333){ f(); return }
				sI(function(){ l = +new Date; f() },c=0)
			}
		}());
		;(function(){ // Too many polls block, this "threads" them in turns over a single thread in time.
			var sT = setTimeout, t = sT.turn = sT.turn || function(f){ 1 == s.push(f) && p(T) }
			, s = t.s = [], p = sT.poll, i = 0, f, T = function(){
				if(f = s[i++]){ f() }
				if(i == s.length || 99 == i){
					s = t.s = s.slice(i);
					i = 0;
				}
				if(s.length){ p(T) }
			}
		}());
		;(function(){
			var u, sT = setTimeout, T = sT.turn;
			(sT.each = sT.each || function(l,f,e,S){ S = S || 9; (function t(s,L,r){
			  if(L = (s = (l||[]).splice(0,S)).length){
			  	for(var i = 0; i < L; i++){
			  		if(u !== (r = f(s[i]))){ break }
			  	}
			  	if(u === r){ T(t); return }
			  } e && e(r);
			}())})();
		}());
	})(USE, './shim');

	;USE(function(module){
		// On event emitter generic javascript utility.
		module.exports = function onto(tag, arg, as){
			if(!tag){ return {to: onto} }
			var u, f = 'function' == typeof arg, tag = (this.tag || (this.tag = {}))[tag] || f && (
				this.tag[tag] = {tag: tag, to: onto._ = { next: function(arg){ var tmp;
					if(tmp = this.to){ tmp.next(arg) }
			}}});
			if(f){
				var be = {
					off: onto.off ||
					(onto.off = function(){
						if(this.next === onto._.next){ return !0 }
						if(this === this.the.last){
							this.the.last = this.back;
						}
						this.to.back = this.back;
						this.next = onto._.next;
						this.back.to = this.to;
						if(this.the.last === this.the){
							delete this.on.tag[this.the.tag];
						}
					}),
					to: onto._,
					next: arg,
					the: tag,
					on: this,
					as: as,
				};
				(be.back = tag.last || tag).to = be;
				return tag.last = be;
			}
			if((tag = tag.to) && u !== arg){ tag.next(arg) }
			return tag;
		};
	})(USE, './onto');

	;USE(function(module){
		USE('./shim');
		module.exports = function(v){ // Valid values are a subset of JSON: null, binary, number (!Infinity), text, or a soul relation. Arrays need special algorithms to handle concurrency, so they are not supported directly. Use an extension that supports them if needed but research their problems first.
			if(v === undefined){ return false }
			if(v === null){ return true } // "deletes", nulling out keys.
			if(v === Infinity){ return false } // we want this to be, but JSON does not support it, sad face.
			if(v !== v){ return false } // can you guess what this checks for? ;)
			if('string' == typeof v // text!
			|| 'boolean' == typeof v
			|| 'number' == typeof v){
				return true; // simple values are valid.
			}
			if(v && ('string' == typeof (v['#']||0)) && Object.empty(v, ['#'])){ return v['#'] } // is link
			return false; // If not, everything else remaining is an invalid data type. Custom extensions can be built on top of these primitives to support other types.
		}
	})(USE, './valid');

	;USE(function(module){
		USE('./shim');
		function State(){
			var t = +new Date;
			if(last < t){
				return N = 0, last = t + State.drift;
			}
			return last = t + ((N += 1) / D) + State.drift;
		}
		State.drift = 0;
		var NI = -Infinity, N = 0, D = 999, last = NI, u; // WARNING! In the future, on machines that are D times faster than 2016AD machines, you will want to increase D by another several orders of magnitude so the processing speed never out paces the decimal resolution (increasing an integer effects the state accuracy).
		State.is = function(n, k, o){ // convenience function to get the state on a key on a node and return it.
			var tmp = (k && n && n._ && n._['>']) || o;
			if(!tmp){ return }
			return ('number' == typeof (tmp = tmp[k]))? tmp : NI;
		}
		State.ify = function(n, k, s, v, soul){ // put a key's state on a node.
			(n = n || {})._ = n._ || {}; // safety check or init.
			if(soul){ n._['#'] = soul } // set a soul if specified.
			var tmp = n._['>'] || (n._['>'] = {}); // grab the states data.
			if(u !== k && k !== '_'){
				if('number' == typeof s){ tmp[k] = s } // add the valid state.
				if(u !== v){ n[k] = v } // Note: Not its job to check for valid values!
			}
			return n;
		}
		module.exports = State;
	})(USE, './state');

	;USE(function(module){
		USE('./shim');
		function Dup(opt){
			var dup = {s:{}}, s = dup.s;
			opt = opt || {max: 999, age: 1000 * 9};//*/ 1000 * 9 * 3};
			dup.check = function(id){
				if(!s[id]){ return false }
				return dt(id);
			}
			var dt = dup.track = function(id){
				var it = s[id] || (s[id] = {});
				it.was = dup.now = +new Date;
				if(!dup.to){ dup.to = setTimeout(dup.drop, opt.age + 9) }
				return it;
			}
			dup.drop = function(age){
				dup.to = null;
				dup.now = +new Date;
				var l = Object.keys(s);
				console.STAT && console.STAT(dup.now, +new Date - dup.now, 'dup drop keys'); // prev ~20% CPU 7% RAM 300MB // now ~25% CPU 7% RAM 500MB
				setTimeout.each(l, function(id){ var it = s[id]; // TODO: .keys( is slow?
					if(it && (age || opt.age) > (dup.now - it.was)){ return }
					delete s[id];
				},0,99);
			}
			return dup;
		}
		module.exports = Dup;
	})(USE, './dup');

	;USE(function(module){
		// request / response module, for asking and acking messages.
		USE('./onto'); // depends upon onto!
		module.exports = function ask(cb, as){
			if(!this.on){ return }
			var lack = (this.opt||{}).lack || 9000;
			if(!('function' == typeof cb)){
				if(!cb){ return }
				var id = cb['#'] || cb, tmp = (this.tag||'')[id];
				if(!tmp){ return }
				if(as){
					tmp = this.on(id, as);
					clearTimeout(tmp.err);
					tmp.err = setTimeout(function(){ tmp.off() }, lack);
				}
				return true;
			}
			var id = (as && as['#']) || random(9);
			if(!cb){ return id }
			var to = this.on(id, cb, as);
			to.err = to.err || setTimeout(function(){ to.off();
				to.next({err: "Error: No ACK yet.", lack: true});
			}, lack);
			return id;
		}
		var random = String.random || function(){ return Math.random().toString(36).slice(2) }
	})(USE, './ask');

	;USE(function(module){

		function Gun(o){
			if(o instanceof Gun){ return (this._ = {$: this}).$ }
			if(!(this instanceof Gun)){ return new Gun(o) }
			return Gun.create(this._ = {$: this, opt: o});
		}

		Gun.is = function($){ return ($ instanceof Gun) || ($ && $._ && ($ === $._.$)) || false }

		Gun.version = 0.2020;

		Gun.chain = Gun.prototype;
		Gun.chain.toJSON = function(){};

		USE('./shim');
		Gun.valid = USE('./valid');
		Gun.state = USE('./state');
		Gun.on = USE('./onto');
		Gun.dup = USE('./dup');
		Gun.ask = USE('./ask');

		;(function(){
			Gun.create = function(at){
				at.root = at.root || at;
				at.graph = at.graph || {};
				at.on = at.on || Gun.on;
				at.ask = at.ask || Gun.ask;
				at.dup = at.dup || Gun.dup();
				var gun = at.$.opt(at.opt);
				if(!at.once){
					at.on('in', universe, at);
					at.on('out', universe, at);
					at.on('put', map, at);
					Gun.on('create', at);
					at.on('create', at);
				}
				at.once = 1;
				return gun;
			}
			function universe(msg){
				//if(!F){ var eve = this; setTimeout(function(){ universe.call(eve, msg,1) },Math.random() * 100);return; } // ADD F TO PARAMS!
				if(!msg){ return }
				if(msg.out === universe){ this.to.next(msg); return }
				var eve = this, as = eve.as, at = as.at || as, gun = at.$, dup = at.dup, tmp, DBG = msg.DBG;
				(tmp = msg['#']) || (tmp = msg['#'] = text_rand(9));
				if(dup.check(tmp)){ return } dup.track(tmp);
				tmp = msg._; msg._ = ('function' == typeof tmp)? tmp : function(){};
				(msg.$ && (msg.$ === (msg.$._||'').$)) || (msg.$ = gun);
				if(msg['@'] && !msg.put){ ack(msg) }
				if(!at.ask(msg['@'], msg)){ // is this machine listening for an ack?
					DBG && (DBG.u = +new Date);
					if(msg.put){ put(msg); return } else
					if(msg.get){ Gun.on.get(msg, gun) }
				}
				DBG && (DBG.uc = +new Date);
				eve.to.next(msg);
				DBG && (DBG.ua = +new Date);
				if(msg.nts || msg.NTS){ return } // TODO: This shouldn't be in core, but fast way to prevent NTS spread. Delete this line after all peers have upgraded to newer versions.
				msg.out = universe; at.on('out', msg);
				DBG && (DBG.ue = +new Date);
			}
			function put(msg){
				if(!msg){ return }
				var ctx = msg._||'', root = ctx.root = ((ctx.$ = msg.$||'')._||'').root;
				if(msg['@'] && ctx.faith && !ctx.miss){ // TODO: AXE may split/route based on 'put' what should we do here? Detect @ in AXE? I think we don't have to worry, as DAM will route it on @.
					msg.out = universe;
					root.on('out', msg);
					return;
				}
				ctx.latch = root.hatch; ctx.match = root.hatch = [];
				var put = msg.put;
				var DBG = ctx.DBG = msg.DBG, S = +new Date;
				if(put['#'] && put['.']){ /*root && root.on('put', msg);*/ return } // TODO: BUG! This needs to call HAM instead.
				DBG && (DBG.p = S);
				ctx['#'] = msg['#'];
				ctx.msg = msg;
				ctx.all = 0;
				ctx.stun = 1;
				var nl = Object.keys(put);//.sort(); // TODO: This is unbounded operation, large graphs will be slower. Write our own CPU scheduled sort? Or somehow do it in below? Keys itself is not O(1) either, create ES5 shim over ?weak map? or custom which is constant.
				console.STAT && console.STAT(S, ((DBG||ctx).pk = +new Date) - S, 'put sort');
				var ni = 0, nj, kl, soul, node, states, err, tmp;
				(function pop(o){
					if(nj != ni){ nj = ni;
						if(!(soul = nl[ni])){
							console.STAT && console.STAT(S, ((DBG||ctx).pd = +new Date) - S, 'put');
							fire(ctx);
							return;
						}
						if(!(node = put[soul])){ err = ERR+cut(soul)+"no node." } else
						if(!(tmp = node._)){ err = ERR+cut(soul)+"no meta." } else
						if(soul !== tmp['#']){ err = ERR+cut(soul)+"soul not same." } else
						if(!(states = tmp['>'])){ err = ERR+cut(soul)+"no state." }
						kl = Object.keys(node||{}); // TODO: .keys( is slow
					}
					if(err){
						msg.err = ctx.err = err; // invalid data should error and stun the message.
						fire(ctx);
						//console.log("handle error!", err) // handle!
						return;
					}
					var i = 0, key; o = o || 0;
					while(o++ < 9 && (key = kl[i++])){
						if('_' === key){ continue }
						var val = node[key], state = states[key];
						if(u === state){ err = ERR+cut(key)+"on"+cut(soul)+"no state."; break }
						if(!valid(val)){ err = ERR+cut(key)+"on"+cut(soul)+"bad "+(typeof val)+cut(val); break }
						//ctx.all++; //ctx.ack[soul+key] = '';
						ham(val, key, soul, state, msg);
					}
					if((kl = kl.slice(i)).length){ turn(pop); return }
					++ni; kl = null; pop(o);
				}());
			} Gun.on.put = put;
			console.log("BEWARE: BETA VERSION OF NEW GUN! NOT ALL FEATURES FINISHED!"); // clock below, reconnect sync, SEA certify wire merge, User.auth taking multiple times, // msg put, put, say ack, hear loop...
			function ham(val, key, soul, state, msg){
				var ctx = msg._||'', root = ctx.root, graph = root.graph, lot, tmp;
				var vertex = graph[soul] || empty, was = state_is(vertex, key, 1), known = vertex[key];
				
				var DBG = ctx.DBG; if(tmp = console.STAT){ if(!graph[soul] || !known){ tmp.has = (tmp.has || 0) + 1 } }

				var now = State(), u;
				if(state > now){
					setTimeout(function(){ ham(val, key, soul, state, msg) }, (tmp = state - now) > MD? MD : tmp); // Max Defer 32bit. :(
					console.STAT && console.STAT(((DBG||ctx).Hf = +new Date), tmp, 'future');
					return;
				}
				if(state < was){ /*old;*/ if(!ctx.miss){ return } } // but some chains have a cache miss that need to re-fire. // TODO: Improve in future. // for AXE this would reduce rebroadcast, but GUN does it on message forwarding.
				if(!ctx.faith){ // TODO: BUG? Can this be used for cache miss as well? // Yes this was a bug, need to check cache miss for RAD tests, but should we care about the faith check now? Probably not.
					if(state === was && (val === known || L(val) <= L(known))){ /*console.log("same");*/ /*same;*/ if(!ctx.miss){ return } } // same
				}
				ctx.stun++; // TODO: 'forget' feature in SEA tied to this, bad approach, but hacked in for now. Any changes here must update there.
				var aid = msg['#']+ctx.all++, id = {toString: function(){ return aid }, _: ctx}; id.toJSON = id.toString; // this *trick* makes it compatible between old & new versions.
				DBG && (DBG.ph = DBG.ph || +new Date);
				root.on('put', {'#': id, '@': msg['@'], put: {'#': soul, '.': key, ':': val, '>': state}, _: ctx});
			}
			function map(msg){
				var DBG; if(DBG = (msg._||'').DBG){ DBG.pa = +new Date; DBG.pm = DBG.pm || +new Date}
      	var eve = this, root = eve.as, graph = root.graph, ctx = msg._, put = msg.put, soul = put['#'], key = put['.'], val = put[':'], state = put['>'], id = msg['#'], tmp;
      	if((tmp = ctx.msg) && (tmp = tmp.put) && (tmp = tmp[soul])){ state_ify(tmp, key, state, val, soul) } // necessary! or else out messages do not get SEA transforms.
				graph[soul] = state_ify(graph[soul], key, state, val, soul);
				if(tmp = (root.next||'')[soul]){ tmp.on('in', msg) }
				fire(ctx);
				eve.to.next(msg);
			}
			function fire(ctx, msg){ var root;
				if(ctx.stop){ return }
				if(!ctx.err && 0 < --ctx.stun){ return } // TODO: 'forget' feature in SEA tied to this, bad approach, but hacked in for now. Any changes here must update there.
				ctx.stop = 1;
				if(!(root = ctx.root)){ return }
				var tmp = ctx.match; tmp.end = 1;
				if(tmp === root.hatch){ if(!(tmp = ctx.latch) || tmp.end){ delete root.hatch } else { root.hatch = tmp } }
				ctx.hatch && ctx.hatch(); // TODO: rename/rework how put & this interact.
				setTimeout.each(ctx.match, function(cb){cb && cb()}); 
				if(!(msg = ctx.msg) || ctx.err || msg.err){ return }
				msg.out = universe;
				ctx.root.on('out', msg);
			}
			function ack(msg){ // aggregate ACKs.
				var id = msg['@'] || '', ctx;
				if(!(ctx = id._)){ return }
				ctx.acks = (ctx.acks||0) + 1;
				if(ctx.err = msg.err){
					msg['@'] = ctx['#'];
					fire(ctx); // TODO: BUG? How it skips/stops propagation of msg if any 1 item is error, this would assume a whole batch/resync has same malicious intent.
				}
				if(!ctx.stop && !ctx.crack){ ctx.crack = ctx.match && ctx.match.push(function(){back(ctx)}) } // handle synchronous acks
				back(ctx);
			}
			function back(ctx){
				if(!ctx || !ctx.root){ return }
				if(ctx.stun || ctx.acks !== ctx.all){ return }
				ctx.root.on('in', {'@': ctx['#'], err: ctx.err, ok: ctx.err? u : {'':1}});
			}

			var ERR = "Error: Invalid graph!";
			var cut = function(s){ return " '"+(''+s).slice(0,9)+"...' " }
			var L = JSON.stringify, MD = 2147483647, State = Gun.state;

		}());

		;(function(){
			Gun.on.get = function(msg, gun){
				var root = gun._, get = msg.get, soul = get['#'], node = root.graph[soul], has = get['.'];
				var next = root.next || (root.next = {}), at = next[soul];
				// queue concurrent GETs?
				// TODO: consider tagging original message into dup for DAM.
				// TODO: ^ above? In chat app, 12 messages resulted in same peer asking for `#user.pub` 12 times. (same with #user GET too, yipes!) // DAM note: This also resulted in 12 replies from 1 peer which all had same ##hash but none of them deduped because each get was different.
				// TODO: Moving quick hacks fixing these things to axe for now.
				// TODO: a lot of GET #foo then GET #foo."" happening, why?
				// TODO: DAM's ## hash check, on same get ACK, producing multiple replies still, maybe JSON vs YSON?
				// TMP note for now: viMZq1slG was chat LEX query #.
				/*if(gun !== (tmp = msg.$) && (tmp = (tmp||'')._)){
					if(tmp.Q){ tmp.Q[msg['#']] = ''; return } // chain does not need to ask for it again.
					tmp.Q = {};
				}*/
				/*if(u === has){
					if(at.Q){
						//at.Q[msg['#']] = '';
						//return;
					}
					at.Q = {};
				}*/
				var ctx = msg._||{}, DBG = ctx.DBG = msg.DBG;
				DBG && (DBG.g = +new Date);
				//console.log("GET:", get, node, has);
				if(!node){ return root.on('get', msg) }
				if(has){
					if('string' != typeof has || u === node[has]){ return root.on('get', msg) }
					node = state_ify({}, has, state_is(node, has), node[has], soul);
					// If we have a key in-memory, do we really need to fetch?
					// Maybe... in case the in-memory key we have is a local write
					// we still need to trigger a pull/merge from peers.
				}
				//Gun.window? Gun.obj.copy(node) : node; // HNPERF: If !browser bump Performance? Is this too dangerous to reference root graph? Copy / shallow copy too expensive for big nodes. Gun.obj.to(node); // 1 layer deep copy // Gun.obj.copy(node); // too slow on big nodes
				node && ack(msg, node);
				root.on('get', msg); // send GET to storage adapters.
			}
			function ack(msg, node){
				var S = +new Date, ctx = msg._||{}, DBG = ctx.DBG = msg.DBG;
				var to = msg['#'], id = text_rand(9), keys = Object.keys(node||'').sort(), soul = ((node||'')._||'')['#'], kl = keys.length, j = 0, root = msg.$._.root, F = (node === root.graph[soul]);
				console.STAT && console.STAT(S, ((DBG||ctx).gk = +new Date) - S, 'got keys');
				// PERF: Consider commenting this out to force disk-only reads for perf testing? // TODO: .keys( is slow
				node && (function go(){
					S = +new Date;
					var i = 0, k, put = {}, tmp;
					while(i < 9 && (k = keys[i++])){
						state_ify(put, k, state_is(node, k), node[k], soul);
					}
					keys = keys.slice(i);
					(tmp = {})[soul] = put; put = tmp;
					var faith; if(F){ faith = function(){}; faith.ram = faith.faith = true; } // HNPERF: We're testing performance improvement by skipping going through security again, but this should be audited.
					tmp = keys.length;
					console.STAT && console.STAT(S, -(S - (S = +new Date)), 'got copied some');
					DBG && (DBG.ga = +new Date);
					root.on('in', {'@': to, '#': id, put: put, '%': (tmp? (id = text_rand(9)) : u), $: root.$, _: faith, DBG: DBG});
					console.STAT && console.STAT(S, +new Date - S, 'got in');
					if(!tmp){ return }
					setTimeout.turn(go);
				}());
				if(!node){ root.on('in', {'@': msg['#']}) } // TODO: I don't think I like this, the default lS adapter uses this but "not found" is a sensitive issue, so should probably be handled more carefully/individually.
			} Gun.on.get.ack = ack;
		}());

		;(function(){
			Gun.chain.opt = function(opt){
				opt = opt || {};
				var gun = this, at = gun._, tmp = opt.peers || opt;
				if(!Object.plain(opt)){ opt = {} }
				if(!Object.plain(at.opt)){ at.opt = opt }
				if('string' == typeof tmp){ tmp = [tmp] }
				if(tmp instanceof Array){
					if(!Object.plain(at.opt.peers)){ at.opt.peers = {}}
					tmp.forEach(function(url){
						var p = {}; p.id = p.url = url;
						at.opt.peers[url] = at.opt.peers[url] || p;
					})
				}
				at.opt.peers = at.opt.peers || {};
				obj_each(opt, function each(k){ var v = this[k];
					if((this && this.hasOwnProperty(k)) || 'string' == typeof v || Object.empty(v)){ this[k] = v; return }
					if(v && v.constructor !== globalThis.Object && !(v instanceof Array)){ return }
					obj_each(v, each);
				});
				Gun.on('opt', at);
				at.opt.uuid = at.opt.uuid || function uuid(l){ return Gun.state().toString(36).replace('.','') + String.random(l||12) }
				return gun;
			}
		}());

		var obj_each = function(o,f){ Object.keys(o).forEach(f,o) }, text_rand = String.random, turn = setTimeout.turn, valid = Gun.valid, state_is = Gun.state.is, state_ify = Gun.state.ify, u, empty = {}, C;

		Gun.log = function(){ return (!Gun.log.off && C.log.apply(C, arguments)), [].slice.call(arguments).join(' ') };
		Gun.log.once = function(w,s,o){ return (o = Gun.log.once)[w] = o[w] || 0, o[w]++ || Gun.log(s) };

		if(typeof window !== "undefined"){ (window.GUN = window.Gun = Gun).window = window }
		try{ if(typeof MODULE !== "undefined"){ MODULE.exports = Gun } }catch(e){}
		module.exports = Gun;
		
		(Gun.window||{}).console = (Gun.window||{}).console || {log: function(){}};
		(C = console).only = function(i, s){ return (C.only.i && i === C.only.i && C.only.i++) && (C.log.apply(C, arguments) || s) };

		;"Please do not remove welcome log unless you are paying for a monthly sponsorship, thanks!";
		Gun.log.once("welcome", "Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!");
	})(USE, './root');

	;USE(function(module){
		var Gun = USE('./root');
		Gun.chain.back = function(n, opt){ var tmp;
			n = n || 1;
			if(-1 === n || Infinity === n){
				return this._.root.$;
			} else
			if(1 === n){
				return (this._.back || this._).$;
			}
			var gun = this, at = gun._;
			if(typeof n === 'string'){
				n = n.split('.');
			}
			if(n instanceof Array){
				var i = 0, l = n.length, tmp = at;
				for(i; i < l; i++){
					tmp = (tmp||empty)[n[i]];
				}
				if(u !== tmp){
					return opt? gun : tmp;
				} else
				if((tmp = at.back)){
					return tmp.$.back(n, opt);
				}
				return;
			}
			if('function' == typeof n){
				var yes, tmp = {back: at};
				while((tmp = tmp.back)
				&& u === (yes = n(tmp, opt))){}
				return yes;
			}
			if('number' == typeof n){
				return (at.back || at).$.back(n - 1);
			}
			return this;
		}
		var empty = {}, u;
	})(USE, './back');

	;USE(function(module){
		// WARNING: GUN is very simple, but the JavaScript chaining API around GUN
		// is complicated and was extremely hard to build. If you port GUN to another
		// language, consider implementing an easier API to build.
		var Gun = USE('./root');
		Gun.chain.chain = function(sub){
			var gun = this, at = gun._, chain = new (sub || gun).constructor(gun), cat = chain._, root;
			cat.root = root = at.root;
			cat.id = ++root.once;
			cat.back = gun._;
			cat.on = Gun.on;
			cat.on('in', Gun.on.in, cat); // For 'in' if I add my own listeners to each then I MUST do it before in gets called. If I listen globally for all incoming data instead though, regardless of individual listeners, I can transform the data there and then as well.
			cat.on('out', Gun.on.out, cat); // However for output, there isn't really the global option. I must listen by adding my own listener individually BEFORE this one is ever called.
			return chain;
		}

		function output(msg){
			var put, get, at = this.as, back = at.back, root = at.root, tmp;
			if(!msg.$){ msg.$ = at.$ }
			this.to.next(msg);
			if(at.err){ at.on('in', {put: at.put = u, $: at.$}); return }
			if(get = msg.get){
				/*if(u !== at.put){
					at.on('in', at);
					return;
				}*/
				if(root.pass){ root.pass[at.id] = at; } // will this make for buggy behavior elsewhere?
				if(at.lex){ Object.keys(at.lex).forEach(function(k){ tmp[k] = at.lex[k] }, tmp = msg.get = msg.get || {}) }
				if(get['#'] || at.soul){
					get['#'] = get['#'] || at.soul;
					msg['#'] || (msg['#'] = text_rand(9)); // A3120 ?
					back = (root.$.get(get['#'])._);
					if(!(get = get['.'])){ // soul
						tmp = back.ask && back.ask['']; // check if we have already asked for the full node
						(back.ask || (back.ask = {}))[''] = back; // add a flag that we are now.
						if(u !== back.put){ // if we already have data,
							back.on('in', back); // send what is cached down the chain
							if(tmp){ return } // and don't ask for it again.
						}
						msg.$ = back.$;
					} else
					if(obj_has(back.put, get)){ // TODO: support #LEX !
						tmp = back.ask && back.ask[get];
						(back.ask || (back.ask = {}))[get] = back.$.get(get)._;
						back.on('in', {get: get, put: {'#': back.soul, '.': get, ':': back.put[get], '>': state_is(root.graph[back.soul], get)}});
						if(tmp){ return }
					}
						/*put = (back.$.get(get)._);
						if(!(tmp = put.ack)){ put.ack = -1 }
						back.on('in', {
							$: back.$,
							put: Gun.state.ify({}, get, Gun.state(back.put, get), back.put[get]),
							get: back.get
						});
						if(tmp){ return }
					} else
					if('string' != typeof get){
						var put = {}, meta = (back.put||{})._;
						Gun.obj.map(back.put, function(v,k){
							if(!Gun.text.match(k, get)){ return }
							put[k] = v;
						})
						if(!Gun.obj.empty(put)){
							put._ = meta;
							back.on('in', {$: back.$, put: put, get: back.get})
						}
						if(tmp = at.lex){
							tmp = (tmp._) || (tmp._ = function(){});
							if(back.ack < tmp.ask){ tmp.ask = back.ack }
							if(tmp.ask){ return }
							tmp.ask = 1;
						}
					}
					*/
					root.ask(ack, msg); // A3120 ?
					return root.on('in', msg);
				}
				//if(root.now){ root.now[at.id] = root.now[at.id] || true; at.pass = {} }
				if(get['.']){
					if(at.get){
						msg = {get: {'.': at.get}, $: at.$};
						(back.ask || (back.ask = {}))[at.get] = msg.$._; // TODO: PERFORMANCE? More elegant way?
						return back.on('out', msg);
					}
					msg = {get: at.lex? msg.get : {}, $: at.$};
					return back.on('out', msg);
				}
				(at.ask || (at.ask = {}))[''] = at;	 //at.ack = at.ack || -1;
				if(at.get){
					get['.'] = at.get;
					(back.ask || (back.ask = {}))[at.get] = msg.$._; // TODO: PERFORMANCE? More elegant way?
					return back.on('out', msg);
				}
			}
			return back.on('out', msg);
		}; Gun.on.out = output;

		function input(msg, cat){ cat = cat || this.as; // TODO: V8 may not be able to optimize functions with different parameter calls, so try to do benchmark to see if there is any actual difference.
			var root = cat.root, gun = msg.$ || (msg.$ = cat.$), at = (gun||'')._ || empty, tmp = msg.put||'', soul = tmp['#'], key = tmp['.'], change = (u !== tmp['='])? tmp['='] : tmp[':'], state = tmp['>'] || -Infinity, sat; // eve = event, at = data at, cat = chain at, sat = sub at (children chains).
			if(u !== msg.put && (u === tmp['#'] || u === tmp['.'] || (u === tmp[':'] && u === tmp['=']) || u === tmp['>'])){ // convert from old format
				if(!valid(tmp)){
					if(!(soul = ((tmp||'')._||'')['#'])){ console.log("chain not yet supported for", tmp, '...', msg, cat); return; }
					gun = cat.root.$.get(soul);
					return setTimeout.each(Object.keys(tmp).sort(), function(k){ // TODO: .keys( is slow // BUG? ?Some re-in logic may depend on this being sync?
						if('_' == k || u === (state = state_is(tmp, k))){ return }
						cat.on('in', {$: gun, put: {'#': soul, '.': k, '=': tmp[k], '>': state}, VIA: msg});
					});
				}
				cat.on('in', {$: at.back.$, put: {'#': soul = at.back.soul, '.': key = at.has || at.get, '=': tmp, '>': state_is(at.back.put, key)}, via: msg}); // TODO: This could be buggy! It assumes/approxes data, other stuff could have corrupted it.
				return;
			}
			if((msg.seen||'')[cat.id]){ return } (msg.seen || (msg.seen = function(){}))[cat.id] = cat; // help stop some infinite loops

			if(cat !== at){ // don't worry about this when first understanding the code, it handles changing contexts on a message. A soul chain will never have a different context.
				Object.keys(msg).forEach(function(k){ tmp[k] = msg[k] }, tmp = {}); // make copy of message
				tmp.get = cat.get || tmp.get;
				if(!cat.soul && !cat.has){ // if we do not recognize the chain type
					tmp.$$ = tmp.$$ || cat.$; // make a reference to wherever it came from.
				} else
				if(at.soul){ // a has (property) chain will have a different context sometimes if it is linked (to a soul chain). Anything that is not a soul or has chain, will always have different contexts.
					tmp.$ = cat.$;
					tmp.$ = tmp.$ || at.$;
				}
				msg = tmp; // use the message with the new context instead;
			}
			unlink(msg, cat);

			if(((cat.soul/* && (cat.ask||'')['']*/) || msg.$) && state >= state_is(root.graph[soul], key)){ // The root has an in-memory cache of the graph, but if our peer has asked for the data then we want a per deduplicated chain copy of the data that might have local edits on it.
				(tmp = root.$.get(soul)._).put = state_ify(tmp.put, key, state, change, soul);
			}
			if(!at.soul /*&& (at.ask||'')['']*/ && state >= state_is(root.graph[soul], key) && (sat = (root.$.get(soul)._.next||'')[key])){ // Same as above here, but for other types of chains. // TODO: Improve perf by preventing echoes recaching.
				sat.put = change; // update cache
				if('string' == typeof (tmp = valid(change))){
					sat.put = root.$.get(tmp)._.put || change; // share same cache as what we're linked to.
				}
			}

			this.to && this.to.next(msg); // 1st API job is to call all chain listeners.
			// TODO: Make input more reusable by only doing these (some?) calls if we are a chain we recognize? This means each input listener would be responsible for when listeners need to be called, which makes sense, as they might want to filter.
			cat.any && setTimeout.each(Object.keys(cat.any), function(any){ (any = cat.any[any]) && any(msg) },0,99); // 1st API job is to call all chain listeners. // TODO: .keys( is slow // BUG: Some re-in logic may depend on this being sync.
			cat.echo && setTimeout.each(Object.keys(cat.echo), function(lat){ (lat = cat.echo[lat]) && lat.on('in', msg) },0,99); // & linked at chains // TODO: .keys( is slow // BUG: Some re-in logic may depend on this being sync.

			if(((msg.$||'')._||at).soul){ // comments are linear, but this line of code is non-linear, so if I were to comment what it does, you'd have to read 42 other comments first... but you can't read any of those comments until you first read this comment. What!? // shouldn't this match link's check?
				// is there cases where it is a $ that we do NOT want to do the following? 
				if((sat = cat.next) && (sat = sat[key])){ // TODO: possible trick? Maybe have `ionmap` code set a sat? // TODO: Maybe we should do `cat.ask` instead? I guess does not matter.
					tmp = {}; Object.keys(msg).forEach(function(k){ tmp[k] = msg[k] });
					tmp.$ = (msg.$||msg.$).get(tmp.get = key); delete tmp.$; delete tmp.$$;
					sat.on('in', tmp);
				}
			}

			link(msg, cat);
		}; Gun.on.in = input;

		function link(msg, cat){ cat = cat || this.as || msg.$._;
			if(msg.$ && this !== Gun.on){ return } // $ means we came from a link, so we are at the wrong level, thus ignore it unless overruled manually by being called directly.
			if(!msg.put || cat.soul){ return } // But you cannot overrule being linked to nothing, or trying to link a soul chain - that must never happen.
			var put = msg.put||'', link = put['=']||put[':'], tmp;
			var root = cat.root, tat = root.$.get(put['#']).get(put['.'])._;
			if('string' != typeof (link = valid(link))){
				if(this === Gun.on){ (tat.echo || (tat.echo = {}))[cat.id] = cat } // allow some chain to explicitly force linking to simple data.
				return; // by default do not link to data that is not a link.
			}
			if((tat.echo || (tat.echo = {}))[cat.id] // we've already linked ourselves so we do not need to do it again. Except... (annoying implementation details)
				&& !(root.pass||'')[cat.id]){ return } // if a new event listener was added, we need to make a pass through for it. The pass will be on the chain, not always the chain passed down. 
			if(tmp = root.pass){ if(tmp[link+cat.id]){ return } tmp[link+cat.id] = 1 } // But the above edge case may "pass through" on a circular graph causing infinite passes, so we hackily add a temporary check for that.

			(tat.echo||(tat.echo={}))[cat.id] = cat; // set ourself up for the echo! // TODO: BUG? Echo to self no longer causes problems? Confirm.

			if(cat.has){ cat.link = link }
			var sat = root.$.get(tat.link = link)._; // grab what we're linking to.
			(sat.echo || (sat.echo = {}))[tat.id] = tat; // link it.
			var tmp = cat.ask||''; // ask the chain for what needs to be loaded next!
			if(tmp[''] || cat.lex){ // we might need to load the whole thing // TODO: cat.lex probably has edge case bugs to it, need more test coverage.
				sat.on('out', {get: {'#': link}});
			}
			setTimeout.each(Object.keys(tmp), function(get, sat){ // if sub chains are asking for data. // TODO: .keys( is slow // BUG? ?Some re-in logic may depend on this being sync?
				if(!get || !(sat = tmp[get])){ return }
				sat.on('out', {get: {'#': link, '.': get}}); // go get it.
			},0,99);
		}; Gun.on.link = link;

		function unlink(msg, cat){ // ugh, so much code for seemingly edge case behavior.
			var put = msg.put||'', change = (u !== put['='])? put['='] : put[':'], root = cat.root, link, tmp;
			if(u === change){ // 1st edge case: If we have a brand new database, no data will be found.
				// TODO: BUG! because emptying cache could be async from below, make sure we are not emptying a newer cache. So maybe pass an Async ID to check against?
				// TODO: BUG! What if this is a map? // Warning! Clearing things out needs to be robust against sync/async ops, or else you'll see `map val get put` test catastrophically fail because map attempts to link when parent graph is streamed before child value gets set. Need to differentiate between lack acks and force clearing.
				if(cat.soul && u !== cat.put){ return } // data may not be found on a soul, but if a soul already has data, then nothing can clear the soul as a whole.
				//if(!cat.has){ return }
				tmp = (msg.$||msg.$||'')._||'';
				if(msg['@'] && (u !== tmp.put || u !== cat.put)){ return } // a "not found" from other peers should not clear out data if we have already found it.
				//if(cat.has && u === cat.put && !(root.pass||'')[cat.id]){ return } // if we are already unlinked, do not call again, unless edge case. // TODO: BUG! This line should be deleted for "unlink deeply nested".
				if(link = cat.link || msg.linked){
					delete (root.$.get(link)._.echo||'')[cat.id];
				}
				if(cat.has){ // TODO: Empty out links, maps, echos, acks/asks, etc.?
					cat.link = null;
				}
				cat.put = u; // empty out the cache if, for example, alice's car's color no longer exists (relative to alice) if alice no longer has a car.
				// TODO: BUG! For maps, proxy this so the individual sub is triggered, not all subs.
				setTimeout.each(Object.keys(cat.next||''), function(get, sat){ // empty out all sub chains. // TODO: .keys( is slow // BUG? ?Some re-in logic may depend on this being sync? // TODO: BUG? This will trigger deeper put first, does put logic depend on nested order? // TODO: BUG! For map, this needs to be the isolated child, not all of them.
					if(!(sat = cat.next[get])){ return }
					//if(cat.has && u === sat.put && !(root.pass||'')[sat.id]){ return } // if we are already unlinked, do not call again, unless edge case. // TODO: BUG! This line should be deleted for "unlink deeply nested".
					if(link){ delete (root.$.get(link).get(get)._.echo||'')[sat.id] }
					sat.on('in', {get: get, put: u, $: sat.$}); // TODO: BUG? Add recursive seen check?
				},0,99);
				return;
			}
			if(cat.soul){ return } // a soul cannot unlink itself.
			if(msg.$){ return } // a linked chain does not do the unlinking, the sub chain does. // TODO: BUG? Will this cancel maps?
			link = valid(change); // need to unlink anytime we are not the same link, though only do this once per unlink (and not on init).
			tmp = msg.$._||'';
			if(link === tmp.link || (cat.has && !tmp.link)){
				if((root.pass||'')[cat.id] && 'string' !== typeof link){

				} else {
					return;
				}
			}
			delete (tmp.echo||'')[cat.id];
			unlink({get: cat.get, put: u, $: msg.$, linked: msg.linked = msg.linked || tmp.link}, cat); // unlink our sub chains.
		}; Gun.on.unlink = unlink;

		function ack(msg, ev){
			//if(!msg['%'] && (this||'').off){ this.off() } // do NOT memory leak, turn off listeners! Now handled by .ask itself
			// manhattan:
			var as = this.as, at = as.$._, root = at.root, get = as.get||'', tmp = (msg.put||'')[get['#']]||'';
			if(!msg.put || ('string' == typeof get['.'] && u === tmp[get['.']])){
				if(u !== at.put){ return }
				if(!at.soul && !at.has){ return } // TODO: BUG? For now, only core-chains will handle not-founds, because bugs creep in if non-core chains are used as $ but we can revisit this later for more powerful extensions.
				at.ack = (at.ack || 0) + 1;
				at.on('in', {
					get: at.get,
					put: at.put = u,
					$: at.$,
					'@': msg['@']
				});
				/*(tmp = at.Q) && setTimeout.each(Object.keys(tmp), function(id){ // TODO: Temporary testing, not integrated or being used, probably delete.
					Object.keys(msg).forEach(function(k){ tmp[k] = msg[k] }, tmp = {}); tmp['@'] = id; // copy message
					root.on('in', tmp);
				}); delete at.Q;*/
				return;
			}
			(msg._||{}).miss = 1;
			Gun.on.put(msg);
			return; // eom
		}

		var empty = {}, u, text_rand = String.random, valid = Gun.valid, obj_has = function(o, k){ return o && Object.prototype.hasOwnProperty.call(o, k) }, state = Gun.state, state_is = state.is, state_ify = state.ify;
	})(USE, './chain');

	;USE(function(module){
		var Gun = USE('./root');
		Gun.chain.get = function(key, cb, as){
			var gun, tmp;
			if(typeof key === 'string'){
				if(key.length == 0) {	
					(gun = this.chain())._.err = {err: Gun.log('0 length key!', key)};
					if(cb){ cb.call(gun, gun._.err) }
					return gun;
				}
				var back = this, cat = back._;
				var next = cat.next || empty;
				if(!(gun = next[key])){
					gun = key && cache(key, back);
				}
				gun = gun && gun.$;
			} else
			if('function' == typeof key){
				if(true === cb){ return soul(this, key, cb, as), this }
				gun = this;
				var cat = gun._, opt = cb || {}, root = cat.root, id;
				opt.at = cat;
				opt.ok = key;
				var wait = {}; // can we assign this to the at instead, like in once?
				//var path = []; cat.$.back(at => { at.get && path.push(at.get.slice(0,9))}); path = path.reverse().join('.');
				function any(msg, eve, f){
					if(any.stun){ return }
					if((tmp = root.pass) && !tmp[id]){ return }
					var at = msg.$._, sat = (msg.$||'')._, data = (sat||at).put, odd = (!at.has && !at.soul), test = {}, link, tmp;
					if(odd || u === data){ // handles non-core
						data = (u === ((tmp = msg.put)||'')['='])? (u === (tmp||'')[':'])? tmp : tmp[':'] : tmp['='];
					}
					if(link = ('string' == typeof (tmp = Gun.valid(data)))){
						data = (u === (tmp = root.$.get(tmp)._.put))? opt.not? u : data : tmp;
					}
					if(opt.not && u === data){ return }
					if(u === opt.stun){
						if((tmp = root.stun) && tmp.on){
							cat.$.back(function(a){ // our chain stunned?
								tmp.on(''+a.id, test = {});
								if((test.run || 0) < any.id){ return test } // if there is an earlier stun on gapless parents/self.
							});
							!test.run && tmp.on(''+at.id, test = {}); // this node stunned?
							!test.run && sat && tmp.on(''+sat.id, test = {}); // linked node stunned?
							if(any.id > test.run){
								if(!test.stun || test.stun.end){
									test.stun = tmp.on('stun');
									test.stun = test.stun && test.stun.last;
								}
								if(test.stun && !test.stun.end){
									//if(odd && u === data){ return }
									//if(u === msg.put){ return } // "not found" acks will be found if there is stun, so ignore these.
									(test.stun.add || (test.stun.add = {}))[id] = function(){ any(msg,eve,1) } // add ourself to the stun callback list that is called at end of the write.
									return;
								}
							}
						}
						if(/*odd &&*/ u === data){ f = 0 } // if data not found, keep waiting/trying.
						/*if(f && u === data){
							cat.on('out', opt.out);
							return;
						}*/
						if((tmp = root.hatch) && !tmp.end && u === opt.hatch && !f){ // quick hack! // What's going on here? Because data is streamed, we get things one by one, but a lot of developers would rather get a callback after each batch instead, so this does that by creating a wait list per chain id that is then called at the end of the batch by the hatch code in the root put listener.
							if(wait[at.$._.id]){ return } wait[at.$._.id] = 1;
							tmp.push(function(){any(msg,eve,1)});
							return;
						}; wait = {}; // end quick hack.
					}
					// call:
					if(root.pass){ if(root.pass[id+at.id]){ return } root.pass[id+at.id] = 1 }
					if(opt.on){ opt.ok.call(at.$, data, at.get, msg, eve || any); return } // TODO: Also consider breaking `this` since a lot of people do `=>` these days and `.call(` has slower performance.
					if(opt.v2020){ opt.ok(msg, eve || any); return }
					Object.keys(msg).forEach(function(k){ tmp[k] = msg[k] }, tmp = {}); msg = tmp; msg.put = data; // 2019 COMPATIBILITY! TODO: GET RID OF THIS!
					opt.ok.call(opt.as, msg, eve || any); // is this the right
				};
				any.at = cat;
				//(cat.any||(cat.any=function(msg){ setTimeout.each(Object.keys(cat.any||''), function(act){ (act = cat.any[act]) && act(msg) },0,99) }))[id = String.random(7)] = any; // maybe switch to this in future?
				(cat.any||(cat.any={}))[id = String.random(7)] = any;
				any.off = function(){ any.stun = 1; if(!cat.any){ return } delete cat.any[id] }
				any.rid = rid; // logic from old version, can we clean it up now?
				any.id = opt.run || ++root.once; // used in callback to check if we are earlier than a write. // will this ever cause an integer overflow?
				tmp = root.pass; (root.pass = {})[id] = 1; // Explanation: test trade-offs want to prevent recursion so we add/remove pass flag as it gets fulfilled to not repeat, however map map needs many pass flags - how do we reconcile?
				opt.out = opt.out || {get: {}};
				cat.on('out', opt.out);
				root.pass = tmp;
				return gun;
			} else
			if('number' == typeof key){
				return this.get(''+key, cb, as);
			} else
			if('string' == typeof (tmp = valid(key))){
				return this.get(tmp, cb, as);
			} else
			if(tmp = this.get.next){
				gun = tmp(this, key);
			}
			if(!gun){
				(gun = this.chain())._.err = {err: Gun.log('Invalid get request!', key)}; // CLEAN UP
				if(cb){ cb.call(gun, gun._.err) }
				return gun;
			}
			if(cb && 'function' == typeof cb){
				gun.get(cb, as);
			}
			return gun;
		}
		function cache(key, back){
			var cat = back._, next = cat.next, gun = back.chain(), at = gun._;
			if(!next){ next = cat.next = {} }
			next[at.get = key] = at;
			if(back === cat.root.$){
				at.soul = key;
			} else
			if(cat.soul || cat.has){
				at.has = key;
				//if(obj_has(cat.put, key)){
					//at.put = cat.put[key];
				//}
			}
			return at;
		}
		function soul(gun, cb, opt, as){
			var cat = gun._, acks = 0, tmp;
			if(tmp = cat.soul || cat.link){ return cb(tmp, as, cat) }
			if(cat.jam){ return cat.jam.push([cb, as]) }
			cat.jam = [[cb,as]];
			gun.get(function go(msg, eve){
				if(u === msg.put && !cat.root.opt.super && (tmp = Object.keys(cat.root.opt.peers).length) && ++acks <= tmp){ // TODO: super should not be in core code, bring AXE up into core instead to fix? // TODO: .keys( is slow
					return;
				}
				eve.rid(msg);
				var at = ((at = msg.$) && at._) || {}, i = 0, as;
				tmp = cat.jam; delete cat.jam; // tmp = cat.jam.splice(0, 100);
				//if(tmp.length){ process.nextTick(function(){ go(msg, eve) }) }
				while(as = tmp[i++]){ //Gun.obj.map(tmp, function(as, cb){
					var cb = as[0], id; as = as[1];
					cb && cb(id = at.link || at.soul || Gun.valid(msg.put) || ((msg.put||{})._||{})['#'], as, msg, eve);
				} //);
			}, {out: {get: {'.':true}}});
			return gun;
		}
		function rid(at){
			var cat = this.at || this.on;
			if(!at || cat.soul || cat.has){ return this.off() }
			if(!(at = (at = (at = at.$ || at)._ || at).id)){ return }
			var map = cat.map, tmp, seen;
			//if(!map || !(tmp = map[at]) || !(tmp = tmp.at)){ return }
			if(tmp = (seen = this.seen || (this.seen = {}))[at]){ return true }
			seen[at] = true;
			return;
			//tmp.echo[cat.id] = {}; // TODO: Warning: This unsubscribes ALL of this chain's listeners from this link, not just the one callback event.
			//obj.del(map, at); // TODO: Warning: This unsubscribes ALL of this chain's listeners from this link, not just the one callback event.
			return;
		}
		var empty = {}, valid = Gun.valid, u;
	})(USE, './get');

	;USE(function(module){
		var Gun = USE('./root');
		Gun.chain.put = function(data, cb, as){ // I rewrote it :)
			var gun = this, at = gun._, root = at.root;
			as = as || {};
			as.root = at.root;
			as.run || (as.run = root.once);
			stun(as, at.id); // set a flag for reads to check if this chain is writing.
			as.ack = as.ack || cb;
			as.via = as.via || gun;
			as.data = as.data || data;
			as.soul || (as.soul = at.soul || ('string' == typeof cb && cb));
			var s = as.state = as.state || Gun.state();
			if('function' == typeof data){ data(function(d){ as.data = d; gun.put(u,u,as) }); return gun }
			if(!as.soul){ return get(as), gun }
			as.$ = root.$.get(as.soul); // TODO: This may not allow user chaining and similar?
			as.todo = [{it: as.data, ref: as.$}];
			as.turn = as.turn || turn;
			as.ran = as.ran || ran;
			//var path = []; as.via.back(at => { at.get && path.push(at.get.slice(0,9)) }); path = path.reverse().join('.');
			// TODO: Perf! We only need to stun chains that are being modified, not necessarily written to.
			(function walk(){
				var to = as.todo, at = to.pop(), d = at.it, cid = at.ref && at.ref._.id, v, k, cat, tmp, g;
				stun(as, at.ref);
				if(tmp = at.todo){
					k = tmp.pop(); d = d[k];
					if(tmp.length){ to.push(at) }
				}
				k && (to.path || (to.path = [])).push(k);
				if(!(v = valid(d)) && !(g = Gun.is(d))){
					if(!Object.plain(d)){ (as.ack||noop).call(as, as.out = {err: as.err = Gun.log("Invalid data: " + ((d && (tmp = d.constructor) && tmp.name) || typeof d) + " at " + (as.via.back(function(at){at.get && tmp.push(at.get)}, tmp = []) || tmp.join('.'))+'.'+(to.path||[]).join('.'))}); as.ran(as); return }
					var seen = as.seen || (as.seen = []), i = seen.length;
					while(i--){ if(d === (tmp = seen[i]).it){ v = d = tmp.link; break } }
				}
				if(k && v){ at.node = state_ify(at.node, k, s, d) } // handle soul later.
				else {
					as.seen.push(cat = {it: d, link: {}, todo: g? [] : Object.keys(d).sort().reverse(), path: (to.path||[]).slice(), up: at}); // Any perf reasons to CPU schedule this .keys( ?
					at.node = state_ify(at.node, k, s, cat.link);
					!g && cat.todo.length && to.push(cat);
					// ---------------
					var id = as.seen.length;
					(as.wait || (as.wait = {}))[id] = '';
					tmp = (cat.ref = (g? d : k? at.ref.get(k) : at.ref))._;
					(tmp = (d && (d._||'')['#']) || tmp.soul || tmp.link)? resolve({soul: tmp}) : cat.ref.get(resolve, {run: as.run, /*hatch: 0,*/ v2020:1, out:{get:{'.':' '}}}); // TODO: BUG! This should be resolve ONLY soul to prevent full data from being loaded. // Fixed now?
					//setTimeout(function(){ if(F){ return } console.log("I HAVE NOT BEEN CALLED!", path, id, cat.ref._.id, k) }, 9000); var F; // MAKE SURE TO ADD F = 1 below!
					function resolve(msg, eve){
						var end = cat.link['#'];
						if(eve){ eve.off(); eve.rid(msg) } // TODO: Too early! Check all peers ack not found.
						// TODO: BUG maybe? Make sure this does not pick up a link change wipe, that it uses the changign link instead.
						var soul = end || msg.soul || (tmp = (msg.$||msg.$)._||'').soul || tmp.link || ((tmp = tmp.put||'')._||'')['#'] || tmp['#'] || (((tmp = msg.put||'') && msg.$)? tmp['#'] : (tmp['=']||tmp[':']||'')['#']);
						!end && stun(as, msg.$);
						if(!soul && !at.link['#']){ // check soul link above us
							(at.wait || (at.wait = [])).push(function(){ resolve(msg, eve) }) // wait
							return;
						}
						if(!soul){
							soul = [];
							(msg.$||msg.$).back(function(at){
								if(tmp = at.soul || at.link){ return soul.push(tmp) }
								soul.push(at.get);
							});
							soul = soul.reverse().join('/');
						}
						cat.link['#'] = soul;
						!g && (((as.graph || (as.graph = {}))[soul] = (cat.node || (cat.node = {_:{}})))._['#'] = soul);
						delete as.wait[id];
						cat.wait && setTimeout.each(cat.wait, function(cb){ cb && cb() });
						as.ran(as);
					};
					// ---------------
				}
				if(!to.length){ return as.ran(as) }
				as.turn(walk);
			}());
			return gun;
		}

		function stun(as, id){
			if(!id){ return } id = (id._||'').id||id;
			var run = as.root.stun || (as.root.stun = {on: Gun.on}), test = {}, tmp;
			as.stun || (as.stun = run.on('stun', function(){ }));
			if(tmp = run.on(''+id)){ tmp.the.last.next(test) }
			if(test.run >= as.run){ return }
			run.on(''+id, function(test){
				if(as.stun.end){
					this.off();
					this.to.next(test);
					return;
				}
				test.run = test.run || as.run;
				test.stun = test.stun || as.stun; return;
				if(this.to.to){
					this.the.last.next(test);
					return;
				}
				test.stun = as.stun;
			});
		}

		function ran(as){
			if(as.err){ ran.end(as.stun, as.root); return } // move log handle here.
			if(as.todo.length || as.end || !Object.empty(as.wait)){ return } as.end = 1;
			var cat = (as.$.back(-1)._), root = cat.root, ask = cat.ask(function(ack){
				root.on('ack', ack);
				if(ack.err){ Gun.log(ack) }
				if(++acks > (as.acks || 0)){ this.off() } // Adjustable ACKs! Only 1 by default.
				if(!as.ack){ return }
				as.ack(ack, this);
			}, as.opt), acks = 0, stun = as.stun, tmp;
			(tmp = function(){ // this is not official yet, but quick solution to hack in for now.
				if(!stun){ return }
				ran.end(stun, root);
				setTimeout.each(Object.keys(stun = stun.add||''), function(cb){ if(cb = stun[cb]){cb()} }); // resume the stunned reads // Any perf reasons to CPU schedule this .keys( ?
			}).hatch = tmp; // this is not official yet ^
			//console.log(1, "PUT", as.run, as.graph);
			(as.via._).on('out', {put: as.out = as.graph, opt: as.opt, '#': ask, _: tmp});
		}; ran.end = function(stun,root){
			stun.end = noop; // like with the earlier id, cheaper to make this flag a function so below callbacks do not have to do an extra type check.
			if(stun.the.to === stun && stun === stun.the.last){ delete root.stun }
			stun.off();
		}

		function get(as){
			var at = as.via._, tmp;
			as.via = as.via.back(function(at){
				if(at.soul || !at.get){ return at.$ }
				tmp = as.data; (as.data = {})[at.get] = tmp;
			});
			if(!as.via || !as.via._.soul){
				as.via = at.root.$.get(((as.data||'')._||'')['#'] || at.$.back('opt.uuid')())
			}
			as.via.put(as.data, as.ack, as);
			

			return;
			if(at.get && at.back.soul){
				tmp = as.data;
				as.via = at.back.$;
				(as.data = {})[at.get] = tmp; 
				as.via.put(as.data, as.ack, as);
				return;
			}
		}

		var u, empty = {}, noop = function(){}, turn = setTimeout.turn, valid = Gun.valid, state_ify = Gun.state.ify;
		var iife = function(fn,as){fn.call(as||empty)}
	})(USE, './put');

	;USE(function(module){
		var Gun = USE('./root');
		USE('./chain');
		USE('./back');
		USE('./put');
		USE('./get');
		module.exports = Gun;
	})(USE, './index');

	;USE(function(module){
		var Gun = USE('./index');
		Gun.chain.on = function(tag, arg, eas, as){ // don't rewrite!
			var gun = this, cat = gun._, root = cat.root, act, off, id, tmp;
			if(typeof tag === 'string'){
				if(!arg){ return cat.on(tag) }
				act = cat.on(tag, arg, eas || cat, as);
				if(eas && eas.$){
					(eas.subs || (eas.subs = [])).push(act);
				}
				return gun;
			}
			var opt = arg;
			(opt = (true === opt)? {change: true} : opt || {}).not = 1; opt.on = 1;
			//opt.at = cat;
			//opt.ok = tag;
			//opt.last = {};
			var wait = {}; // can we assign this to the at instead, like in once?
			gun.get(tag, opt);
			/*gun.get(function on(data,key,msg,eve){ var $ = this;
				if(tmp = root.hatch){ // quick hack!
					if(wait[$._.id]){ return } wait[$._.id] = 1;
					tmp.push(function(){on.call($, data,key,msg,eve)});
					return;
				}; wait = {}; // end quick hack.
				tag.call($, data,key,msg,eve);
			}, opt); // TODO: PERF! Event listener leak!!!?*/
			/*
			function one(msg, eve){
				if(one.stun){ return }
				var at = msg.$._, data = at.put, tmp;
				if(tmp = at.link){ data = root.$.get(tmp)._.put }
				if(opt.not===u && u === data){ return }
				if(opt.stun===u && (tmp = root.stun) && (tmp = tmp[at.id] || tmp[at.back.id]) && !tmp.end){ // Remember! If you port this into `.get(cb` make sure you allow stun:0 skip option for `.put(`.
					tmp[id] = function(){one(msg,eve)};
					return;
				}
				//tmp = one.wait || (one.wait = {}); console.log(tmp[at.id] === ''); if(tmp[at.id] !== ''){ tmp[at.id] = tmp[at.id] || setTimeout(function(){tmp[at.id]='';one(msg,eve)},1); return } delete tmp[at.id];
				// call:
				if(opt.as){
					opt.ok.call(opt.as, msg, eve || one);
				} else {
					opt.ok.call(at.$, data, msg.get || at.get, msg, eve || one);
				}
			};
			one.at = cat;
			(cat.act||(cat.act={}))[id = String.random(7)] = one;
			one.off = function(){ one.stun = 1; if(!cat.act){ return } delete cat.act[id] }
			cat.on('out', {get: {}});*/
			return gun;
		}
		// Rules:
		// 1. If cached, should be fast, but not read while write.
		// 2. Should not retrigger other listeners, should get triggered even if nothing found.
		// 3. If the same callback passed to many different once chains, each should resolve - an unsubscribe from the same callback should not effect the state of the other resolving chains, if you do want to cancel them all early you should mutate the callback itself with a flag & check for it at top of callback
		Gun.chain.once = function(cb, opt){ opt = opt || {}; // avoid rewriting
			if(!cb){ return none(this,opt) }
			var gun = this, cat = gun._, root = cat.root, data = cat.put, id = String.random(7), one, tmp;
			gun.get(function(data,key,msg,eve){
				var $ = this, at = $._, one = (at.one||(at.one={}));
				if(eve.stun){ return } if('' === one[id]){ return }
				if(true === (tmp = Gun.valid(data))){ once(); return }
				if('string' == typeof tmp){ return } // TODO: BUG? Will this always load?
				clearTimeout(one[id]); one[id] = setTimeout(once, opt.wait||99); // TODO: Bug? This doesn't handle plural chains.
				function once(){
					if(!at.has && !at.soul){ at = {put: data, get: key} } // handles non-core messages.
					if(u === (tmp = at.put)){ tmp = ((msg.$||'')._||'').put }
					if('string' == typeof Gun.valid(tmp)){ tmp = root.$.get(tmp)._.put; if(tmp === u){return} }
					if(eve.stun){ return } if('' === one[id]){ return } one[id] = '';
					if(cat.soul || cat.has){ eve.off() } // TODO: Plural chains? // else { ?.off() } // better than one check?
					cb.call($, tmp, at.get);
				};
			}, {on: 1});
			return gun;
		}
		function none(gun,opt,chain){
			Gun.log.once("valonce", "Chainable val is experimental, its behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");
			(chain = gun.chain())._.nix = gun.once(function(data, key){ chain._.on('in', this._) });
			chain._.lex = gun._.lex; // TODO: Better approach in future? This is quick for now.
			return chain;
		}

		Gun.chain.off = function(){
			// make off more aggressive. Warning, it might backfire!
			var gun = this, at = gun._, tmp;
			var cat = at.back;
			if(!cat){ return }
			at.ack = 0; // so can resubscribe.
			if(tmp = cat.next){
				if(tmp[at.get]){
					delete tmp[at.get];
				} else {

				}
			}
			// TODO: delete cat.one[map.id]?
			if(tmp = cat.ask){
				delete tmp[at.get];
			}
			if(tmp = cat.put){
				delete tmp[at.get];
			}
			if(tmp = at.soul){
				delete cat.root.graph[tmp];
			}
			if(tmp = at.map){
				Object.keys(tmp).forEach(function(i,at){ at = tmp[i]; //obj_map(tmp, function(at){
					if(at.link){
						cat.root.$.get(at.link).off();
					}
				});
			}
			if(tmp = at.next){
				Object.keys(tmp).forEach(function(i,neat){ neat = tmp[i]; //obj_map(tmp, function(neat){
					neat.$.off();
				});
			}
			at.on('off', {});
			return gun;
		}
		var empty = {}, noop = function(){}, u;
	})(USE, './on');

	;USE(function(module){
		var Gun = USE('./index'), next = Gun.chain.get.next;
		Gun.chain.get.next = function(gun, lex){ var tmp;
			if(!Object.plain(lex)){ return (next||noop)(gun, lex) }
			if(tmp = ((tmp = lex['#'])||'')['='] || tmp){ return gun.get(tmp) }
			(tmp = gun.chain()._).lex = lex; // LEX!
			gun.on('in', function(eve){
				if(String.match(eve.get|| (eve.put||'')['.'], lex['.'] || lex['#'] || lex)){
					tmp.on('in', eve);
				}
				this.to.next(eve);
			});
			return tmp.$;
		}
		Gun.chain.map = function(cb, opt, t){
			var gun = this, cat = gun._, lex, chain;
			if(Object.plain(cb)){ lex = cb['.']? cb : {'.': cb}; cb = u }
			if(!cb){
				if(chain = cat.each){ return chain }
				(cat.each = chain = gun.chain())._.lex = lex || chain._.lex || cat.lex;
				chain._.nix = gun.back('nix');
				gun.on('in', map, chain._);
				return chain;
			}
			Gun.log.once("mapfn", "Map functions are experimental, their behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");
			chain = gun.chain();
			gun.map().on(function(data, key, msg, eve){
				var next = (cb||noop).call(this, data, key, msg, eve);
				if(u === next){ return }
				if(data === next){ return chain._.on('in', msg) }
				if(Gun.is(next)){ return chain._.on('in', next._) }
				var tmp = {}; Object.keys(msg.put).forEach(function(k){ tmp[k] = msg.put[k] }, tmp); tmp['='] = next; 
				chain._.on('in', {get: key, put: tmp});
			});
			return chain;
		}
		function map(msg){ this.to.next(msg);
			var cat = this.as, gun = msg.$, at = gun._, put = msg.put, tmp;
			if(!at.soul && !msg.$){ return } // this line took hundreds of tries to figure out. It only works if core checks to filter out above chains during link tho. This says "only bother to map on a node" for this layer of the chain. If something is not a node, map should not work.
			if((tmp = cat.lex) && !String.match(msg.get|| (put||'')['.'], tmp['.'] || tmp['#'] || tmp)){ return }
			Gun.on.link(msg, cat);
		}
		var noop = function(){}, event = {stun: noop, off: noop}, u;
	})(USE, './map');

	;USE(function(module){
		var Gun = USE('./index');
		Gun.chain.set = function(item, cb, opt){
			var gun = this, root = gun.back(-1), soul, tmp;
			cb = cb || function(){};
			opt = opt || {}; opt.item = opt.item || item;
			if(soul = ((item||'')._||'')['#']){ (item = {})['#'] = soul } // check if node, make link.
			if('string' == typeof (tmp = Gun.valid(item))){ return gun.get(soul = tmp).put(item, cb, opt) } // check if link
			if(!Gun.is(item)){
				if(Object.plain(item)){
					item = root.get(soul = gun.back('opt.uuid')()).put(item);
				}
				return gun.get(soul || root.back('opt.uuid')(7)).put(item, cb, opt);
			}
			gun.put(function(go){
				item.get(function(soul, o, msg){ // TODO: BUG! We no longer have this option? & go error not handled?
					if(!soul){ return cb.call(gun, {err: Gun.log('Only a node can be linked! Not "' + msg.put + '"!')}) }
					(tmp = {})[soul] = {'#': soul}; go(tmp);
				},true);
			})
			return item;
		}
	})(USE, './set');

	;USE(function(module){
		USE('./shim');

		function Mesh(root){
			var mesh = function(){};
			var opt = root.opt || {};
			opt.log = opt.log || console.log;
			opt.gap = opt.gap || opt.wait || 0;
			opt.max = opt.max || (opt.memory? (opt.memory * 999 * 999) : 300000000) * 0.3;
			opt.pack = opt.pack || (opt.max * 0.01 * 0.01);
			opt.puff = opt.puff || 9; // IDEA: do a start/end benchmark, divide ops/result.
			var puff = setTimeout.turn || setTimeout;
			var parse = JSON.parseAsync || function(t,cb,r){ var u; try{ cb(u, JSON.parse(t,r)) }catch(e){ cb(e) } }
			var json = JSON.stringifyAsync || function(v,cb,r,s){ var u; try{ cb(u, JSON.stringify(v,r,s)) }catch(e){ cb(e) } }

			var dup = root.dup, dup_check = dup.check, dup_track = dup.track;

			var ST = +new Date, LT = ST;

			var hear = mesh.hear = function(raw, peer){
				if(!raw){ return }
				if(opt.max <= raw.length){ return mesh.say({dam: '!', err: "Message too big!"}, peer) }
				if(mesh === this){
					/*if('string' == typeof raw){ try{
						var stat = console.STAT || {};
						//console.log('HEAR:', peer.id, (raw||'').slice(0,250), ((raw||'').length / 1024 / 1024).toFixed(4));
						
						//console.log(setTimeout.turn.s.length, 'stacks', parseFloat((-(LT - (LT = +new Date))/1000).toFixed(3)), 'sec', parseFloat(((LT-ST)/1000 / 60).toFixed(1)), 'up', stat.peers||0, 'peers', stat.has||0, 'has', stat.memhused||0, stat.memused||0, stat.memax||0, 'heap mem max');
					}catch(e){ console.log('DBG err', e) }}*/
					hear.d += raw.length||0 ; ++hear.c } // STATS!
				var S = peer.SH = +new Date;
				var tmp = raw[0], msg;
				//raw && raw.slice && console.log("hear:", ((peer.wire||'').headers||'').origin, raw.length, raw.slice && raw.slice(0,50)); //tc-iamunique-tc-package-ds1
				if('[' === tmp){
					parse(raw, function(err, msg){
						if(err || !msg){ return mesh.say({dam: '!', err: "DAM JSON parse error."}, peer) }
						console.STAT && console.STAT(+new Date, msg.length, '# on hear batch');
						var P = opt.puff;
						(function go(){
							var S = +new Date;
							var i = 0, m; while(i < P && (m = msg[i++])){ hear(m, peer) }
							msg = msg.slice(i); // slicing after is faster than shifting during.
							console.STAT && console.STAT(S, +new Date - S, 'hear loop');
							flush(peer); // force send all synchronously batched acks.
							if(!msg.length){ return }
							puff(go, 0);
						}());
					});
					raw = ''; // 
					return;
				}
				if('{' === tmp || ((raw['#'] || Object.plain(raw)) && (msg = raw))){
					if(msg){ return hear.one(msg, peer, S) }
					parse(raw, function(err, msg){
						if(err || !msg){ return mesh.say({dam: '!', err: "DAM JSON parse error."}, peer) }
						hear.one(msg, peer, S);
					});
					return;
				}
			}
			hear.one = function(msg, peer, S){ // S here is temporary! Undo.
				var id, hash, tmp, ash, DBG;
				if(msg.DBG){ msg.DBG = DBG = {DBG: msg.DBG} }
				DBG && (DBG.h = S);
				DBG && (DBG.hp = +new Date);
				if(!(id = msg['#'])){ id = msg['#'] = String.random(9) }
				if(tmp = dup_check(id)){ return }
				// DAM logic:
				if(!(hash = msg['##']) && false && u !== msg.put){ /*hash = msg['##'] = Type.obj.hash(msg.put)*/ } // disable hashing for now // TODO: impose warning/penalty instead (?)
				if(hash && (tmp = msg['@'] || (msg.get && id)) && dup.check(ash = tmp+hash)){ return } // Imagine A <-> B <=> (C & D), C & D reply with same ACK but have different IDs, B can use hash to dedup. Or if a GET has a hash already, we shouldn't ACK if same.
				(msg._ = function(){}).via = mesh.leap = peer;
				if((tmp = msg['><']) && 'string' == typeof tmp){ tmp.slice(0,99).split(',').forEach(function(k){ this[k] = 1 }, (msg._).yo = {}) } // Peers already sent to, do not resend.
				// DAM ^
				if(tmp = msg.dam){
					if(tmp = mesh.hear[tmp]){
						tmp(msg, peer, root);
					}
					dup_track(id);
					return;
				}
				var S = +new Date;
				DBG && (DBG.is = S); peer.SI = id;
				root.on('in', mesh.last = msg);
				//ECHO = msg.put || ECHO; !(msg.ok !== -3740) && mesh.say({ok: -3740, put: ECHO, '@': msg['#']}, peer);
				DBG && (DBG.hd = +new Date);
				console.STAT && console.STAT(S, +new Date - S, msg.get? 'msg get' : msg.put? 'msg put' : 'msg');
				(tmp = dup_track(id)).via = peer; // don't dedup message ID till after, cause GUN has internal dedup check.
				if(msg.get){ tmp.it = msg }
				if(ash){ dup_track(ash) } //dup.track(tmp+hash, true).it = it(msg);
				mesh.leap = mesh.last = null; // warning! mesh.leap could be buggy.
			}
			var tomap = function(k,i,m){m(k,true)};
			var noop = function(){};
			hear.c = hear.d = 0;

			;(function(){
				var SMIA = 0;
				var loop;
				mesh.hash = function(msg, peer){ var h, s, t;
					var S = +new Date;
					json(msg.put, function hash(err, text){
						var ss = (s || (s = t = text||'')).slice(0, 32768); // 1024 * 32
					  h = String.hash(ss, h); s = s.slice(32768);
					  if(s){ puff(hash, 0); return }
						console.STAT && console.STAT(S, +new Date - S, 'say json+hash');
					  msg._.$put = t;
					  msg['##'] = h;
					  say(msg, peer);
					  delete msg._.$put;
					}, sort);
				}
				function sort(k, v){ var tmp;
					if(!(v instanceof globalThis.Object)){ return v }
					Object.keys(v).sort().forEach(sorta, {to: tmp = {}, on: v});
					return tmp;
				} function sorta(k){ this.to[k] = this.on[k] }

				var say = mesh.say = function(msg, peer){ var tmp;
					if((tmp = this) && (tmp = tmp.to) && tmp.next){ tmp.next(msg) } // compatible with middleware adapters.
					if(!msg){ return false }
					var id, hash, raw, ack = msg['@'];
//if(opt.super && (!ack || !msg.put)){ return } // TODO: MANHATTAN STUB //OBVIOUSLY BUG! But squelch relay. // :( get only is 100%+ CPU usage :(
					var meta = msg._||(msg._=function(){});
					var DBG = msg.DBG, S = +new Date; meta.y = meta.y || S; if(!peer){ DBG && (DBG.y = S) }
					if(!(id = msg['#'])){ id = msg['#'] = String.random(9) }
					!loop && dup_track(id);//.it = it(msg); // track for 9 seconds, default. Earth<->Mars would need more! // always track, maybe move this to the 'after' logic if we split function.
					if(msg.put && (msg.err || (dup.s[id]||'').err)){ return false } // TODO: in theory we should not be able to stun a message, but for now going to check if it can help network performance preventing invalid data to relay.
					if(!(hash = msg['##']) && u !== msg.put && !meta.via && ack){ mesh.hash(msg, peer); return } // TODO: Should broadcasts be hashed?
					if(!peer && ack){ peer = ((tmp = dup.s[ack]) && (tmp.via || ((tmp = tmp.it) && (tmp = tmp._) && tmp.via))) || ((tmp = mesh.last) && ack === tmp['#'] && mesh.leap) } // warning! mesh.leap could be buggy! mesh last check reduces this.
					if(!peer && ack){ // still no peer, then ack daisy chain lost.
						if(dup.s[ack]){ return } // in dups but no peer hints that this was ack to self, ignore.
						console.STAT && console.STAT(+new Date, ++SMIA, 'total no peer to ack to');
						return false;
					} // TODO: Temporary? If ack via trace has been lost, acks will go to all peers, which trashes browser bandwidth. Not relaying the ack will force sender to ask for ack again. Note, this is technically wrong for mesh behavior.
					if(!peer && mesh.way){ return mesh.way(msg) }
					DBG && (DBG.yh = +new Date);
					if(!(raw = meta.raw)){ mesh.raw(msg, peer); return }
					DBG && (DBG.yr = +new Date);
					if(!peer || !peer.id){
						if(!Object.plain(peer || opt.peers)){ return false }
						var S = +new Date;
						var P = opt.puff, ps = opt.peers, pl = Object.keys(peer || opt.peers || {}); // TODO: .keys( is slow
						console.STAT && console.STAT(S, +new Date - S, 'peer keys');
						;(function go(){
							var S = +new Date;
							//Type.obj.map(peer || opt.peers, each); // in case peer is a peer list.
							loop = 1; var wr = meta.raw; meta.raw = raw; // quick perf hack
							var i = 0, p; while(i < 9 && (p = (pl||'')[i++])){
								if(!(p = ps[p])){ continue }
								say(msg, p);
							}
							meta.raw = wr; loop = 0;
							pl = pl.slice(i); // slicing after is faster than shifting during.
							console.STAT && console.STAT(S, +new Date - S, 'say loop');
							if(!pl.length){ return }
							puff(go, 0);
							ack && dup_track(ack); // keep for later
						}());
						return;
					}
					// TODO: PERF: consider splitting function here, so say loops do less work.
					if(!peer.wire && mesh.wire){ mesh.wire(peer) }
					if(id === peer.last){ return } peer.last = id;  // was it just sent?
					if(peer === meta.via){ return false } // don't send back to self.
					if((tmp = meta.yo) && (tmp[peer.url] || tmp[peer.pid] || tmp[peer.id]) /*&& !o*/){ return false }
					console.STAT && console.STAT(S, ((DBG||meta).yp = +new Date) - (meta.y || S), 'say prep');
					!loop && ack && dup_track(ack); // streaming long responses needs to keep alive the ack.
					if(peer.batch){
						peer.tail = (tmp = peer.tail || 0) + raw.length;
						if(peer.tail <= opt.pack){
							peer.batch += (tmp?',':'')+raw;
							return;
						}
						flush(peer);
					}
					peer.batch = '['; // Prevents double JSON!
					var ST = +new Date;
					setTimeout(function(){
						console.STAT && console.STAT(ST, +new Date - ST, '0ms TO');
						flush(peer);
					}, opt.gap); // TODO: queuing/batching might be bad for low-latency video game performance! Allow opt out?
					send(raw, peer);
					console.STAT && (ack === peer.SI) && console.STAT(S, +new Date - peer.SH, 'say ack');
				}
				mesh.say.c = mesh.say.d = 0;
				// TODO: this caused a out-of-memory crash!
				mesh.raw = function(msg, peer){ // TODO: Clean this up / delete it / move logic out!
					if(!msg){ return '' }
					var meta = (msg._) || {}, put, tmp;
					if(tmp = meta.raw){ return tmp }
					if('string' == typeof msg){ return msg }
					var hash = msg['##'], ack = msg['@'];
					if(hash && ack){
						if(!meta.via && dup_check(ack+hash)){ return false } // for our own out messages, memory & storage may ack the same thing, so dedup that. Tho if via another peer, we already tracked it upon hearing, so this will always trigger false positives, so don't do that!
						if((tmp = (dup.s[ack]||'').it) || ((tmp = mesh.last) && ack === tmp['#'])){
							if(hash === tmp['##']){ return false } // if ask has a matching hash, acking is optional.
							if(!tmp['##']){ tmp['##'] = hash } // if none, add our hash to ask so anyone we relay to can dedup. // NOTE: May only check against 1st ack chunk, 2nd+ won't know and still stream back to relaying peers which may then dedup. Any way to fix this wasted bandwidth? I guess force rate limiting breaking change, that asking peer has to ask for next lexical chunk.
						}
					}
					if(!msg.dam){
						var i = 0, to = []; tmp = opt.peers;
						for(var k in tmp){ var p = tmp[k]; // TODO: Make it up peers instead!
							to.push(p.url || p.pid || p.id);
							if(++i > 6){ break }
						}
						if(i > 1){ msg['><'] = to.join() } // TODO: BUG! This gets set regardless of peers sent to! Detect?
					}
					if(put = meta.$put){
						tmp = {}; Object.keys(msg).forEach(function(k){ tmp[k] = msg[k] });
						tmp.put = ':])([:';
						json(tmp, function(err, raw){
							if(err){ return } // TODO: Handle!!
							var S = +new Date;
							tmp = raw.indexOf('"put":":])([:"');
							res(u, raw = raw.slice(0, tmp+6) + put + raw.slice(tmp + 14));
							console.STAT && console.STAT(S, +new Date - S, 'say slice');
						});
						return;
					}
					json(msg, res);
					function res(err, raw){
						if(err){ return } // TODO: Handle!!
						meta.raw = raw; //if(meta && (raw||'').length < (999 * 99)){ meta.raw = raw } // HNPERF: If string too big, don't keep in memory.
						say(msg, peer);
					}
				}
			}());

			function flush(peer){
				var tmp = peer.batch, t = 'string' == typeof tmp, l;
				if(t){ tmp += ']' }// TODO: Prevent double JSON!
				peer.batch = peer.tail = null;
				if(!tmp){ return }
				if(t? 3 > tmp.length : !tmp.length){ return } // TODO: ^
				if(!t){try{tmp = (1 === tmp.length? tmp[0] : JSON.stringify(tmp));
				}catch(e){return opt.log('DAM JSON stringify error', e)}}
				if(!tmp){ return }
				send(tmp, peer);
			}
			// for now - find better place later.
			function send(raw, peer){ try{
				//console.log('SAY:', peer.id, (raw||'').slice(0,250), ((raw||'').length / 1024 / 1024).toFixed(4));
				var wire = peer.wire;
				if(peer.say){
					peer.say(raw);
				} else
				if(wire.send){
					wire.send(raw);
				}
				mesh.say.d += raw.length||0; ++mesh.say.c; // STATS!
			}catch(e){
				(peer.queue = peer.queue || []).push(raw);
			}}

			mesh.hi = function(peer){
				var tmp = peer.wire || {};
				if(peer.id){
					opt.peers[peer.url || peer.id] = peer;
				} else {
					tmp = peer.id = peer.id || String.random(9);
					mesh.say({dam: '?', pid: root.opt.pid}, opt.peers[tmp] = peer);
					delete dup.s[peer.last]; // IMPORTANT: see https://gun.eco/docs/DAM#self
				}
				peer.met = peer.met || +(new Date);
				if(!tmp.hied){ root.on(tmp.hied = 'hi', peer) }
				// @rogowski I need this here by default for now to fix go1dfish's bug
				tmp = peer.queue; peer.queue = [];
				setTimeout.each(tmp||[],function(msg){
					send(msg, peer);
				},0,9);
				//Type.obj.native && Type.obj.native(); // dirty place to check if other JS polluted.
			}
			mesh.bye = function(peer){
				root.on('bye', peer);
				var tmp = +(new Date); tmp = (tmp - (peer.met||tmp));
				mesh.bye.time = ((mesh.bye.time || tmp) + tmp) / 2;
			}
			mesh.hear['!'] = function(msg, peer){ opt.log('Error:', msg.err) }
			mesh.hear['?'] = function(msg, peer){
				if(msg.pid){
					if(!peer.pid){ peer.pid = msg.pid }
					if(msg['@']){ return }
				}
				mesh.say({dam: '?', pid: opt.pid, '@': msg['#']}, peer);
				delete dup.s[peer.last]; // IMPORTANT: see https://gun.eco/docs/DAM#self
			}

			root.on('create', function(root){
				root.opt.pid = root.opt.pid || String.random(9);
				this.to.next(root);
				root.on('out', mesh.say);
			});

			root.on('bye', function(peer, tmp){
				peer = opt.peers[peer.id || peer] || peer;
				this.to.next(peer);
				peer.bye? peer.bye() : (tmp = peer.wire) && tmp.close && tmp.close();
				delete opt.peers[peer.id];
				peer.wire = null;
			});

			var gets = {};
			root.on('bye', function(peer, tmp){ this.to.next(peer);
				if(tmp = console.STAT){ tmp.peers = (tmp.peers || 0) - 1; }
				if(!(tmp = peer.url)){ return } gets[tmp] = true;
				setTimeout(function(){ delete gets[tmp] },opt.lack || 9000);
			});
			root.on('hi', function(peer, tmp){ this.to.next(peer);
				if(tmp = console.STAT){ tmp.peers = (tmp.peers || 0) + 1 }
				if(!(tmp = peer.url) || !gets[tmp]){ return } delete gets[tmp];
				if(opt.super){ return } // temporary (?) until we have better fix/solution?
				setTimeout.each(Object.keys(root.next), function(soul){ var node = root.next[soul]; // TODO: .keys( is slow
					tmp = {}; tmp[soul] = root.graph[soul]; tmp = String.hash(tmp); // TODO: BUG! This is broken.
					mesh.say({'##': tmp, get: {'#': soul}}, peer);
				});
			});

			return mesh;
		}
	  var empty = {}, ok = true, u;

	  try{ module.exports = Mesh }catch(e){}

	})(USE, './mesh');

	;USE(function(module){
		var Gun = USE('../index');
		Gun.Mesh = USE('./mesh');

		// TODO: resync upon reconnect online/offline
		//window.ononline = window.onoffline = function(){ console.log('online?', navigator.onLine) }

		Gun.on('opt', function(root){
			this.to.next(root);
			if(root.once){ return }
			var opt = root.opt;
			if(false === opt.WebSocket){ return }

			var env = Gun.window || {};
			var websocket = opt.WebSocket || env.WebSocket || env.webkitWebSocket || env.mozWebSocket;
			if(!websocket){ return }
			opt.WebSocket = websocket;

			var mesh = opt.mesh = opt.mesh || Gun.Mesh(root);

			var wire = mesh.wire || opt.wire;
			mesh.wire = opt.wire = open;
			function open(peer){ try{
				if(!peer || !peer.url){ return wire && wire(peer) }
				var url = peer.url.replace(/^http/, 'ws');
				var wire = peer.wire = new opt.WebSocket(url);
				wire.onclose = function(){
					opt.mesh.bye(peer);
					reconnect(peer);
				};
				wire.onerror = function(error){
					reconnect(peer);
				};
				wire.onopen = function(){
					opt.mesh.hi(peer);
				}
				wire.onmessage = function(msg){
					if(!msg){ return }
					opt.mesh.hear(msg.data || msg, peer);
				};
				return wire;
			}catch(e){}}

			setTimeout(function(){ !opt.super && root.on('out', {dam:'hi'}) },1); // it can take a while to open a socket, so maybe no longer lazy load for perf reasons?

			var wait = 2 * 999;
			function reconnect(peer){
				clearTimeout(peer.defer);
				if(doc && peer.retry <= 0){ return }
				peer.retry = (peer.retry || opt.retry+1 || 60) - ((-peer.tried + (peer.tried = +new Date) < wait*4)?1:0);
				peer.defer = setTimeout(function to(){
					if(doc && doc.hidden){ return setTimeout(to,wait) }
					open(peer);
				}, wait);
			}
			var doc = (''+u !== typeof document) && document;
		});
		var noop = function(){}, u;
	})(USE, './websocket');

	;USE(function(module){
		if(typeof Gun === 'undefined'){ return }

		var noop = function(){}, store, u;
		try{store = (Gun.window||noop).localStorage}catch(e){}
		if(!store){
			Gun.log("Warning: No localStorage exists to persist data to!");
			store = {setItem: function(k,v){this[k]=v}, removeItem: function(k){delete this[k]}, getItem: function(k){return this[k]}};
		}
		Gun.on('create', function lg(root){
			this.to.next(root);
			var opt = root.opt, graph = root.graph, acks = [], disk, to;
			if(false === opt.localStorage){ return }
			opt.prefix = opt.file || 'gun/';
			try{ disk = lg[opt.prefix] = lg[opt.prefix] || JSON.parse(store.getItem(opt.prefix)) || {}; // TODO: Perf! This will block, should we care, since limited to 5MB anyways?
			}catch(e){ disk = lg[opt.prefix] = {}; }

			root.on('get', function(msg){
				this.to.next(msg);
				var lex = msg.get, soul, data, tmp, u;
				if(!lex || !(soul = lex['#'])){ return }
				data = disk[soul] || u;
				if(data && (tmp = lex['.']) && !Object.plain(tmp)){ // pluck!
					data = Gun.state.ify({}, tmp, Gun.state.is(data, tmp), data[tmp], soul);
				}
				//if(data){ (tmp = {})[soul] = data } // back into a graph.
				//setTimeout(function(){
				Gun.on.get.ack(msg, data); //root.on('in', {'@': msg['#'], put: tmp, lS:1});// || root.$});
				//}, Math.random() * 10); // FOR TESTING PURPOSES!
			});

			root.on('put', function(msg){
				this.to.next(msg); // remember to call next middleware adapter
				var put = msg.put, soul = put['#'], key = put['.'], tmp; // pull data off wire envelope
				disk[soul] = Gun.state.ify(disk[soul], key, put['>'], put[':'], soul); // merge into disk object
				if(!msg['@']){ acks.push(msg['#']) } // then ack any non-ack write. // TODO: use batch id.
				if(to){ return }
				//flush();return;
				to = setTimeout(flush, opt.wait || 1); // that gets saved as a whole to disk every 1ms
			});
			function flush(){
				var err, ack = acks; clearTimeout(to); to = false; acks = [];
				try{store.setItem(opt.prefix, JSON.stringify(disk));
				}catch(e){
					Gun.log((err = (e || "localStorage failure")) + " Consider using GUN's IndexedDB plugin for RAD for more storage space, https://gun.eco/docs/RAD#install");
					root.on('localStorage:error', {err: err, get: opt.prefix, put: disk});
				}
				if(!err && !Object.empty(opt.peers)){ return } // only ack if there are no peers. // Switch this to probabilistic mode
				setTimeout.each(ack, function(id){
					root.on('in', {'@': id, err: err, ok: 0}); // localStorage isn't reliable, so make its `ok` code be a low number.
				});
			}
		
		});
	})(USE, './localStorage');

}());

/* BELOW IS TEMPORARY FOR OLD INTERNAL COMPATIBILITY, THEY ARE IMMEDIATELY DEPRECATED AND WILL BE REMOVED IN NEXT VERSION */
;(function(){
	var u;
	if(''+u == typeof Gun){ return }
	var DEP = function(n){ console.log("Warning! Deprecated internal utility will break in next version:", n) }
	// Generic javascript utilities.
	var Type = Gun;
	//Type.fns = Type.fn = {is: function(fn){ return (!!fn && fn instanceof Function) }}
	Type.fn = Type.fn || {is: function(fn){ DEP('fn'); return (!!fn && 'function' == typeof fn) }}
	Type.bi = Type.bi || {is: function(b){ DEP('bi');return (b instanceof Boolean || typeof b == 'boolean') }}
	Type.num = Type.num || {is: function(n){ DEP('num'); return !list_is(n) && ((n - parseFloat(n) + 1) >= 0 || Infinity === n || -Infinity === n) }}
	Type.text = Type.text || {is: function(t){ DEP('text'); return (typeof t == 'string') }}
	Type.text.ify = Type.text.ify || function(t){ DEP('text.ify');
		if(Type.text.is(t)){ return t }
		if(typeof JSON !== "undefined"){ return JSON.stringify(t) }
		return (t && t.toString)? t.toString() : t;
	}
	Type.text.random = Type.text.random || function(l, c){ DEP('text.random');
		var s = '';
		l = l || 24; // you are not going to make a 0 length random number, so no need to check type
		c = c || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz';
		while(l > 0){ s += c.charAt(Math.floor(Math.random() * c.length)); l-- }
		return s;
	}
	Type.text.match = Type.text.match || function(t, o){ var tmp, u; DEP('text.match');
		if('string' !== typeof t){ return false }
		if('string' == typeof o){ o = {'=': o} }
		o = o || {};
		tmp = (o['='] || o['*'] || o['>'] || o['<']);
		if(t === tmp){ return true }
		if(u !== o['=']){ return false }
		tmp = (o['*'] || o['>'] || o['<']);
		if(t.slice(0, (tmp||'').length) === tmp){ return true }
		if(u !== o['*']){ return false }
		if(u !== o['>'] && u !== o['<']){
			return (t >= o['>'] && t <= o['<'])? true : false;
		}
		if(u !== o['>'] && t >= o['>']){ return true }
		if(u !== o['<'] && t <= o['<']){ return true }
		return false;
	}
	Type.text.hash = Type.text.hash || function(s, c){ // via SO
		DEP('text.hash');
		if(typeof s !== 'string'){ return }
	  c = c || 0;
	  if(!s.length){ return c }
	  for(var i=0,l=s.length,n; i<l; ++i){
	    n = s.charCodeAt(i);
	    c = ((c<<5)-c)+n;
	    c |= 0;
	  }
	  return c;
	}
	Type.list = Type.list || {is: function(l){ DEP('list'); return (l instanceof Array) }}
	Type.list.slit = Type.list.slit || Array.prototype.slice;
	Type.list.sort = Type.list.sort || function(k){ // creates a new sort function based off some key
		DEP('list.sort');
		return function(A,B){
			if(!A || !B){ return 0 } A = A[k]; B = B[k];
			if(A < B){ return -1 }else if(A > B){ return 1 }
			else { return 0 }
		}
	}
	Type.list.map = Type.list.map || function(l, c, _){ DEP('list.map'); return obj_map(l, c, _) }
	Type.list.index = 1; // change this to 0 if you want non-logical, non-mathematical, non-matrix, non-convenient array notation
	Type.obj = Type.boj || {is: function(o){ DEP('obj'); return o? (o instanceof globalThis.Object && o.constructor === globalThis.Object) || Object.prototype.toString.call(o).match(/^\[object (\w+)\]$/)[1] === 'Object' : false }}
	Type.obj.put = Type.obj.put || function(o, k, v){ DEP('obj.put'); return (o||{})[k] = v, o }
	Type.obj.has = Type.obj.has || function(o, k){ DEP('obj.has'); return o && Object.prototype.hasOwnProperty.call(o, k) }
	Type.obj.del = Type.obj.del || function(o, k){ DEP('obj.del'); 
		if(!o){ return }
		o[k] = null;
		delete o[k];
		return o;
	}
	Type.obj.as = Type.obj.as || function(o, k, v, u){ DEP('obj.as'); return o[k] = o[k] || (u === v? {} : v) }
	Type.obj.ify = Type.obj.ify || function(o){ DEP('obj.ify'); 
		if(obj_is(o)){ return o }
		try{o = JSON.parse(o);
		}catch(e){o={}};
		return o;
	}
	;(function(){ var u;
		function map(v,k){
			if(obj_has(this,k) && u !== this[k]){ return }
			this[k] = v;
		}
		Type.obj.to = Type.obj.to || function(from, to){ DEP('obj.to'); 
			to = to || {};
			obj_map(from, map, to);
			return to;
		}
	}());
	Type.obj.copy = Type.obj.copy || function(o){ DEP('obj.copy'); // because http://web.archive.org/web/20140328224025/http://jsperf.com/cloning-an-object/2
		return !o? o : JSON.parse(JSON.stringify(o)); // is shockingly faster than anything else, and our data has to be a subset of JSON anyways!
	}
	;(function(){
		function empty(v,i){ var n = this.n, u;
			if(n && (i === n || (obj_is(n) && obj_has(n, i)))){ return }
			if(u !== i){ return true }
		}
		Type.obj.empty = Type.obj.empty || function(o, n){ DEP('obj.empty'); 
			if(!o){ return true }
			return obj_map(o,empty,{n:n})? false : true;
		}
	}());
	;(function(){
		function t(k,v){
			if(2 === arguments.length){
				t.r = t.r || {};
				t.r[k] = v;
				return;
			} t.r = t.r || [];
			t.r.push(k);
		};
		var keys = Object.keys, map, u;
		Object.keys = Object.keys || function(o){ return map(o, function(v,k,t){t(k)}) }
		Type.obj.map = map = Type.obj.map || function(l, c, _){ DEP('obj.map'); 
			var u, i = 0, x, r, ll, lle, f = 'function' == typeof c;
			t.r = u;
			if(keys && obj_is(l)){
				ll = keys(l); lle = true;
			}
			_ = _ || {};
			if(list_is(l) || ll){
				x = (ll || l).length;
				for(;i < x; i++){
					var ii = (i + Type.list.index);
					if(f){
						r = lle? c.call(_, l[ll[i]], ll[i], t) : c.call(_, l[i], ii, t);
						if(r !== u){ return r }
					} else {
						//if(Type.test.is(c,l[i])){ return ii } // should implement deep equality testing!
						if(c === l[lle? ll[i] : i]){ return ll? ll[i] : ii } // use this for now
					}
				}
			} else {
				for(i in l){
					if(f){
						if(obj_has(l,i)){
							r = _? c.call(_, l[i], i, t) : c(l[i], i, t);
							if(r !== u){ return r }
						}
					} else {
						//if(a.test.is(c,l[i])){ return i } // should implement deep equality testing!
						if(c === l[i]){ return i } // use this for now
					}
				}
			}
			return f? t.r : Type.list.index? 0 : -1;
		}
	}());
	Type.time = Type.time || {};
	Type.time.is = Type.time.is || function(t){ DEP('time'); return t? t instanceof Date : (+new Date().getTime()) }

	var fn_is = Type.fn.is;
	var list_is = Type.list.is;
	var obj = Type.obj, obj_is = obj.is, obj_has = obj.has, obj_map = obj.map;

	var Val = {};
	Val.is = function(v){ DEP('val.is'); // Valid values are a subset of JSON: null, binary, number (!Infinity), text, or a soul relation. Arrays need special algorithms to handle concurrency, so they are not supported directly. Use an extension that supports them if needed but research their problems first.
		if(v === u){ return false }
		if(v === null){ return true } // "deletes", nulling out keys.
		if(v === Infinity){ return false } // we want this to be, but JSON does not support it, sad face.
		if(text_is(v) // by "text" we mean strings.
		|| bi_is(v) // by "binary" we mean boolean.
		|| num_is(v)){ // by "number" we mean integers or decimals.
			return true; // simple values are valid.
		}
		return Val.link.is(v) || false; // is the value a soul relation? Then it is valid and return it. If not, everything else remaining is an invalid data type. Custom extensions can be built on top of these primitives to support other types.
	}
	Val.link = Val.rel = {_: '#'};
	;(function(){
		Val.link.is = function(v){ DEP('val.link.is'); // this defines whether an object is a soul relation or not, they look like this: {'#': 'UUID'}
			if(v && v[rel_] && !v._ && obj_is(v)){ // must be an object.
				var o = {};
				obj_map(v, map, o);
				if(o.id){ // a valid id was found.
					return o.id; // yay! Return it.
				}
			}
			return false; // the value was not a valid soul relation.
		}
		function map(s, k){ var o = this; // map over the object...
			if(o.id){ return o.id = false } // if ID is already defined AND we're still looping through the object, it is considered invalid.
			if(k == rel_ && text_is(s)){ // the key should be '#' and have a text value.
				o.id = s; // we found the soul!
			} else {
				return o.id = false; // if there exists anything else on the object that isn't the soul, then it is considered invalid.
			}
		}
	}());
	Val.link.ify = function(t){ DEP('val.link.ify'); return obj_put({}, rel_, t) } // convert a soul into a relation and return it.
	Type.obj.has._ = '.';
	var rel_ = Val.link._, u;
	var bi_is = Type.bi.is;
	var num_is = Type.num.is;
	var text_is = Type.text.is;
	var obj = Type.obj, obj_is = obj.is, obj_put = obj.put, obj_map = obj.map;

	Type.val = Type.val || Val;

	var Node = {_: '_'};
	Node.soul = function(n, o){ DEP('node.soul'); return (n && n._ && n._[o || soul_]) } // convenience function to check to see if there is a soul on a node and return it.
	Node.soul.ify = function(n, o){ DEP('node.soul.ify'); // put a soul on an object.
		o = (typeof o === 'string')? {soul: o} : o || {};
		n = n || {}; // make sure it exists.
		n._ = n._ || {}; // make sure meta exists.
		n._[soul_] = o.soul || n._[soul_] || text_random(); // put the soul on it.
		return n;
	}
	Node.soul._ = Val.link._;
	;(function(){
		Node.is = function(n, cb, as){ DEP('node.is'); var s; // checks to see if an object is a valid node.
			if(!obj_is(n)){ return false } // must be an object.
			if(s = Node.soul(n)){ // must have a soul on it.
				return !obj_map(n, map, {as:as,cb:cb,s:s,n:n});
			}
			return false; // nope! This was not a valid node.
		}
		function map(v, k){ // we invert this because the way we check for this is via a negation.
			if(k === Node._){ return } // skip over the metadata.
			if(!Val.is(v)){ return true } // it is true that this is an invalid node.
			if(this.cb){ this.cb.call(this.as, v, k, this.n, this.s) } // optionally callback each key/value.
		}
	}());
	;(function(){
		Node.ify = function(obj, o, as){ DEP('node.ify'); // returns a node from a shallow object.
			if(!o){ o = {} }
			else if(typeof o === 'string'){ o = {soul: o} }
			else if('function' == typeof o){ o = {map: o} }
			if(o.map){ o.node = o.map.call(as, obj, u, o.node || {}) }
			if(o.node = Node.soul.ify(o.node || {}, o)){
				obj_map(obj, map, {o:o,as:as});
			}
			return o.node; // This will only be a valid node if the object wasn't already deep!
		}
		function map(v, k){ var o = this.o, tmp, u; // iterate over each key/value.
			if(o.map){
				tmp = o.map.call(this.as, v, ''+k, o.node);
				if(u === tmp){
					obj_del(o.node, k);
				} else
				if(o.node){ o.node[k] = tmp }
				return;
			}
			if(Val.is(v)){
				o.node[k] = v;
			}
		}
	}());
	var obj = Type.obj, obj_is = obj.is, obj_del = obj.del, obj_map = obj.map;
	var text = Type.text, text_random = text.random;
	var soul_ = Node.soul._;
	var u;
	Type.node = Type.node || Node;

	var State = Type.state;
	State.lex = function(){ DEP('state.lex'); return State().toString(36).replace('.','') }
	State.to = function(from, k, to){ DEP('state.to'); 
		var val = (from||{})[k];
		if(obj_is(val)){
			val = obj_copy(val);
		}
		return State.ify(to, k, State.is(from, k), val, Node.soul(from));
	}
	;(function(){
		State.map = function(cb, s, as){ DEP('state.map'); var u; // for use with Node.ify
			var o = obj_is(o = cb || s)? o : null;
			cb = fn_is(cb = cb || s)? cb : null;
			if(o && !cb){
				s = num_is(s)? s : State();
				o[N_] = o[N_] || {};
				obj_map(o, map, {o:o,s:s});
				return o;
			}
			as = as || obj_is(s)? s : u;
			s = num_is(s)? s : State();
			return function(v, k, o, opt){
				if(!cb){
					map.call({o: o, s: s}, v,k);
					return v;
				}
				cb.call(as || this || {}, v, k, o, opt);
				if(obj_has(o,k) && u === o[k]){ return }
				map.call({o: o, s: s}, v,k);
			}
		}
		function map(v,k){
			if(N_ === k){ return }
			State.ify(this.o, k, this.s) ;
		}
	}());
	var obj = Type.obj, obj_as = obj.as, obj_has = obj.has, obj_is = obj.is, obj_map = obj.map, obj_copy = obj.copy;
	var num = Type.num, num_is = num.is;
	var fn = Type.fn, fn_is = fn.is;
	var N_ = Node._, u;

	var Graph = {};
	;(function(){
		Graph.is = function(g, cb, fn, as){ DEP('graph.is'); // checks to see if an object is a valid graph.
			if(!g || !obj_is(g) || obj_empty(g)){ return false } // must be an object.
			return !obj_map(g, map, {cb:cb,fn:fn,as:as}); // makes sure it wasn't an empty object.
		}
		function map(n, s){ // we invert this because the way'? we check for this is via a negation.
			if(!n || s !== Node.soul(n) || !Node.is(n, this.fn, this.as)){ return true } // it is true that this is an invalid graph.
			if(!this.cb){ return }
			nf.n = n; nf.as = this.as; // sequential race conditions aren't races.
			this.cb.call(nf.as, n, s, nf);
		}
		function nf(fn){ // optional callback for each node.
			if(fn){ Node.is(nf.n, fn, nf.as) } // where we then have an optional callback for each key/value.
		}
	}());
	;(function(){
		Graph.ify = function(obj, env, as){ DEP('graph.ify'); 
			var at = {path: [], obj: obj};
			if(!env){
				env = {};
			} else
			if(typeof env === 'string'){
				env = {soul: env};
			} else
			if('function' == typeof env){
				env.map = env;
			}
			if(typeof as === 'string'){
				env.soul = env.soul || as;
				as = u;
			}
			if(env.soul){
				at.link = Val.link.ify(env.soul);
			}
			env.shell = (as||{}).shell;
			env.graph = env.graph || {};
			env.seen = env.seen || [];
			env.as = env.as || as;
			node(env, at);
			env.root = at.node;
			return env.graph;
		}
		function node(env, at){ var tmp;
			if(tmp = seen(env, at)){ return tmp }
			at.env = env;
			at.soul = soul;
			if(Node.ify(at.obj, map, at)){
				at.link = at.link || Val.link.ify(Node.soul(at.node));
				if(at.obj !== env.shell){
					env.graph[Val.link.is(at.link)] = at.node;
				}
			}
			return at;
		}
		function map(v,k,n){
			var at = this, env = at.env, is, tmp;
			if(Node._ === k && obj_has(v,Val.link._)){
				return n._; // TODO: Bug?
			}
			if(!(is = valid(v,k,n, at,env))){ return }
			if(!k){
				at.node = at.node || n || {};
				if(obj_has(v, Node._) && Node.soul(v)){ // ? for safety ?
					at.node._ = obj_copy(v._);
				}
				at.node = Node.soul.ify(at.node, Val.link.is(at.link));
				at.link = at.link || Val.link.ify(Node.soul(at.node));
			}
			if(tmp = env.map){
				tmp.call(env.as || {}, v,k,n, at);
				if(obj_has(n,k)){
					v = n[k];
					if(u === v){
						obj_del(n, k);
						return;
					}
					if(!(is = valid(v,k,n, at,env))){ return }
				}
			}
			if(!k){ return at.node }
			if(true === is){
				return v;
			}
			tmp = node(env, {obj: v, path: at.path.concat(k)});
			if(!tmp.node){ return }
			return tmp.link; //{'#': Node.soul(tmp.node)};
		}
		function soul(id){ var at = this;
			var prev = Val.link.is(at.link), graph = at.env.graph;
			at.link = at.link || Val.link.ify(id);
			at.link[Val.link._] = id;
			if(at.node && at.node[Node._]){
				at.node[Node._][Val.link._] = id;
			}
			if(obj_has(graph, prev)){
				graph[id] = graph[prev];
				obj_del(graph, prev);
			}
		}
		function valid(v,k,n, at,env){ var tmp;
			if(Val.is(v)){ return true }
			if(obj_is(v)){ return 1 }
			if(tmp = env.invalid){
				v = tmp.call(env.as || {}, v,k,n);
				return valid(v,k,n, at,env);
			}
			env.err = "Invalid value at '" + at.path.concat(k).join('.') + "'!";
			if(Type.list.is(v)){ env.err += " Use `.set(item)` instead of an Array." }
		}
		function seen(env, at){
			var arr = env.seen, i = arr.length, has;
			while(i--){ has = arr[i];
				if(at.obj === has.obj){ return has }
			}
			arr.push(at);
		}
	}());
	Graph.node = function(node){ DEP('graph.node'); 
		var soul = Node.soul(node);
		if(!soul){ return }
		return obj_put({}, soul, node);
	}
	;(function(){
		Graph.to = function(graph, root, opt){ DEP('graph.to'); 
			if(!graph){ return }
			var obj = {};
			opt = opt || {seen: {}};
			obj_map(graph[root], map, {obj:obj, graph: graph, opt: opt});
			return obj;
		}
		function map(v,k){ var tmp, obj;
			if(Node._ === k){
				if(obj_empty(v, Val.link._)){
					return;
				}
				this.obj[k] = obj_copy(v);
				return;
			}
			if(!(tmp = Val.link.is(v))){
				this.obj[k] = v;
				return;
			}
			if(obj = this.opt.seen[tmp]){
				this.obj[k] = obj;
				return;
			}
			this.obj[k] = this.opt.seen[tmp] = Graph.to(this.graph, tmp, this.opt);
		}
	}());
	var fn_is = Type.fn.is;
	var obj = Type.obj, obj_is = obj.is, obj_del = obj.del, obj_has = obj.has, obj_empty = obj.empty, obj_put = obj.put, obj_map = obj.map, obj_copy = obj.copy;
	var u;
	Type.graph = Type.graph || Graph;
}());
;;(function(){

  /* UNBUILD */
  function USE(arg, req){
    return req? require(arg) : arg.slice? USE[R(arg)] : function(mod, path){
      arg(mod = {exports: {}});
      USE[R(path)] = mod.exports;
    }
    function R(p){
      return p.split('/').slice(-1).toString().replace('.js','');
    }
  }
  if(typeof module !== "undefined"){ var MODULE = module }
  /* UNBUILD */

  ;USE(function(module){
    // Security, Encryption, and Authorization: SEA.js
    // MANDATORY READING: https://gun.eco/explainers/data/security.html
    // IT IS IMPLEMENTED IN A POLYFILL/SHIM APPROACH.
    // THIS IS AN EARLY ALPHA!

    if(typeof window !== "undefined"){ module.window = window }

    var tmp = module.window || module, u;
    var SEA = tmp.SEA || {};

    if(SEA.window = module.window){ SEA.window.SEA = SEA }

    try{ if(u+'' !== typeof MODULE){ MODULE.exports = SEA } }catch(e){}
    module.exports = SEA;
  })(USE, './root');

  ;USE(function(module){
    var SEA = USE('./root');
    try{ if(SEA.window){
      if(location.protocol.indexOf('s') < 0
      && location.host.indexOf('localhost') < 0
      && ! /^127\.\d+\.\d+\.\d+$/.test(location.hostname)
      && location.protocol.indexOf('file:') < 0){
        console.warn('HTTPS needed for WebCrypto in SEA, redirecting...');
        location.protocol = 'https:'; // WebCrypto does NOT work without HTTPS!
      }
    } }catch(e){}
  })(USE, './https');

  ;USE(function(module){
    var u;
    if(u+''== typeof btoa){
      if(u+'' == typeof Buffer){
        try{ global.Buffer = USE("buffer", 1).Buffer }catch(e){ console.log("Please add `buffer` to your package.json!") }
      }
      global.btoa = function(data){ return Buffer.from(data, "binary").toString("base64") };
      global.atob = function(data){ return Buffer.from(data, "base64").toString("binary") };
    }
  })(USE, './base64');

  ;USE(function(module){
    USE('./base64');
    // This is Array extended to have .toString(['utf8'|'hex'|'base64'])
    function SeaArray() {}
    Object.assign(SeaArray, { from: Array.from })
    SeaArray.prototype = Object.create(Array.prototype)
    SeaArray.prototype.toString = function(enc, start, end) { enc = enc || 'utf8'; start = start || 0;
      const length = this.length
      if (enc === 'hex') {
        const buf = new Uint8Array(this)
        return [ ...Array(((end && (end + 1)) || length) - start).keys()]
        .map((i) => buf[ i + start ].toString(16).padStart(2, '0')).join('')
      }
      if (enc === 'utf8') {
        return Array.from(
          { length: (end || length) - start },
          (_, i) => String.fromCharCode(this[ i + start])
        ).join('')
      }
      if (enc === 'base64') {
        return btoa(this)
      }
    }
    module.exports = SeaArray;
  })(USE, './array');

  ;USE(function(module){
    USE('./base64');
    // This is Buffer implementation used in SEA. Functionality is mostly
    // compatible with NodeJS 'safe-buffer' and is used for encoding conversions
    // between binary and 'hex' | 'utf8' | 'base64'
    // See documentation and validation for safe implementation in:
    // https://github.com/feross/safe-buffer#update
    var SeaArray = USE('./array');
    function SafeBuffer(...props) {
      console.warn('new SafeBuffer() is depreciated, please use SafeBuffer.from()')
      return SafeBuffer.from(...props)
    }
    SafeBuffer.prototype = Object.create(Array.prototype)
    Object.assign(SafeBuffer, {
      // (data, enc) where typeof data === 'string' then enc === 'utf8'|'hex'|'base64'
      from() {
        if (!Object.keys(arguments).length || arguments[0]==null) {
          throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
        }
        const input = arguments[0]
        let buf
        if (typeof input === 'string') {
          const enc = arguments[1] || 'utf8'
          if (enc === 'hex') {
            const bytes = input.match(/([\da-fA-F]{2})/g)
            .map((byte) => parseInt(byte, 16))
            if (!bytes || !bytes.length) {
              throw new TypeError('Invalid first argument for type \'hex\'.')
            }
            buf = SeaArray.from(bytes)
          } else if (enc === 'utf8' || 'binary' === enc) { // EDIT BY MARK: I think this is safe, tested it against a couple "binary" strings. This lets SafeBuffer match NodeJS Buffer behavior more where it safely btoas regular strings.
            const length = input.length
            const words = new Uint16Array(length)
            Array.from({ length: length }, (_, i) => words[i] = input.charCodeAt(i))
            buf = SeaArray.from(words)
          } else if (enc === 'base64') {
            const dec = atob(input)
            const length = dec.length
            const bytes = new Uint8Array(length)
            Array.from({ length: length }, (_, i) => bytes[i] = dec.charCodeAt(i))
            buf = SeaArray.from(bytes)
          } else if (enc === 'binary') { // deprecated by above comment
            buf = SeaArray.from(input) // some btoas were mishandled.
          } else {
            console.info('SafeBuffer.from unknown encoding: '+enc)
          }
          return buf
        }
        const byteLength = input.byteLength // what is going on here? FOR MARTTI
        const length = input.byteLength ? input.byteLength : input.length
        if (length) {
          let buf
          if (input instanceof ArrayBuffer) {
            buf = new Uint8Array(input)
          }
          return SeaArray.from(buf || input)
        }
      },
      // This is 'safe-buffer.alloc' sans encoding support
      alloc(length, fill = 0 /*, enc*/ ) {
        return SeaArray.from(new Uint8Array(Array.from({ length: length }, () => fill)))
      },
      // This is normal UNSAFE 'buffer.alloc' or 'new Buffer(length)' - don't use!
      allocUnsafe(length) {
        return SeaArray.from(new Uint8Array(Array.from({ length : length })))
      },
      // This puts together array of array like members
      concat(arr) { // octet array
        if (!Array.isArray(arr)) {
          throw new TypeError('First argument must be Array containing ArrayBuffer or Uint8Array instances.')
        }
        return SeaArray.from(arr.reduce((ret, item) => ret.concat(Array.from(item)), []))
      }
    })
    SafeBuffer.prototype.from = SafeBuffer.from
    SafeBuffer.prototype.toString = SeaArray.prototype.toString

    module.exports = SafeBuffer;
  })(USE, './buffer');

  ;USE(function(module){
    const SEA = USE('./root')
    const api = {Buffer: USE('./buffer')}
    var o = {}, u;

    // ideally we can move away from JSON entirely? unlikely due to compatibility issues... oh well.
    JSON.parseAsync = JSON.parseAsync || function(t,cb,r){ var u; try{ cb(u, JSON.parse(t,r)) }catch(e){ cb(e) } }
    JSON.stringifyAsync = JSON.stringifyAsync || function(v,cb,r,s){ var u; try{ cb(u, JSON.stringify(v,r,s)) }catch(e){ cb(e) } }

    api.parse = function(t,r){ return new Promise(function(res, rej){
      JSON.parseAsync(t,function(err, raw){ err? rej(err) : res(raw) },r);
    })}
    api.stringify = function(v,r,s){ return new Promise(function(res, rej){
      JSON.stringifyAsync(v,function(err, raw){ err? rej(err) : res(raw) },r,s);
    })}

    if(SEA.window){
      api.crypto = window.crypto || window.msCrypto
      api.subtle = (api.crypto||o).subtle || (api.crypto||o).webkitSubtle;
      api.TextEncoder = window.TextEncoder;
      api.TextDecoder = window.TextDecoder;
      api.random = (len) => api.Buffer.from(api.crypto.getRandomValues(new Uint8Array(api.Buffer.alloc(len))));
    }
    if(!api.TextDecoder)
    {
      const { TextEncoder, TextDecoder } = USE((u+'' == typeof MODULE?'.':'')+'./lib/text-encoding', 1);
      api.TextDecoder = TextDecoder;
      api.TextEncoder = TextEncoder;
    }
    if(!api.crypto)
    {
      try
      {
      var crypto = USE('crypto', 1);
      Object.assign(api, {
        crypto,
        random: (len) => api.Buffer.from(crypto.randomBytes(len))
      });      
      const { Crypto: WebCrypto } = USE('@peculiar/webcrypto', 1);
      api.ossl = api.subtle = new WebCrypto({directory: 'ossl'}).subtle // ECDH
    }
    catch(e){
      console.log("Please add `@peculiar/webcrypto` to your package.json!");
    }}

    module.exports = api
  })(USE, './shim');

  ;USE(function(module){
    var SEA = USE('./root');
    var shim = USE('./shim');
    var s = {};
    s.pbkdf2 = {hash: {name : 'SHA-256'}, iter: 100000, ks: 64};
    s.ecdsa = {
      pair: {name: 'ECDSA', namedCurve: 'P-256'},
      sign: {name: 'ECDSA', hash: {name: 'SHA-256'}}
    };
    s.ecdh = {name: 'ECDH', namedCurve: 'P-256'};

    // This creates Web Cryptography API compliant JWK for sign/verify purposes
    s.jwk = function(pub, d){  // d === priv
      pub = pub.split('.');
      var x = pub[0], y = pub[1];
      var jwk = {kty: "EC", crv: "P-256", x: x, y: y, ext: true};
      jwk.key_ops = d ? ['sign'] : ['verify'];
      if(d){ jwk.d = d }
      return jwk;
    };
    
    s.keyToJwk = function(keyBytes) {
      const keyB64 = keyBytes.toString('base64');
      const k = keyB64.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
      return { kty: 'oct', k: k, ext: false, alg: 'A256GCM' };
    }

    s.recall = {
      validity: 12 * 60 * 60, // internally in seconds : 12 hours
      hook: function(props){ return props } // { iat, exp, alias, remember } // or return new Promise((resolve, reject) => resolve(props)
    };

    s.check = function(t){ return (typeof t == 'string') && ('SEA{' === t.slice(0,4)) }
    s.parse = async function p(t){ try {
      var yes = (typeof t == 'string');
      if(yes && 'SEA{' === t.slice(0,4)){ t = t.slice(3) }
      return yes ? await shim.parse(t) : t;
      } catch (e) {}
      return t;
    }

    SEA.opt = s;
    module.exports = s
  })(USE, './settings');

  ;USE(function(module){
    var shim = USE('./shim');
    module.exports = async function(d, o){
      var t = (typeof d == 'string')? d : await shim.stringify(d);
      var hash = await shim.subtle.digest({name: o||'SHA-256'}, new shim.TextEncoder().encode(t));
      return shim.Buffer.from(hash);
    }
  })(USE, './sha256');

  ;USE(function(module){
    // This internal func returns SHA-1 hashed data for KeyID generation
    const __shim = USE('./shim')
    const subtle = __shim.subtle
    const ossl = __shim.ossl ? __shim.ossl : subtle
    const sha1hash = (b) => ossl.digest({name: 'SHA-1'}, new ArrayBuffer(b))
    module.exports = sha1hash
  })(USE, './sha1');

  ;USE(function(module){
    var SEA = USE('./root');
    var shim = USE('./shim');
    var S = USE('./settings');
    var sha = USE('./sha256');
    var u;

    SEA.work = SEA.work || (async (data, pair, cb, opt) => { try { // used to be named `proof`
      var salt = (pair||{}).epub || pair; // epub not recommended, salt should be random!
      opt = opt || {};
      if(salt instanceof Function){
        cb = salt;
        salt = u;
      }
      data = (typeof data == 'string')? data : await shim.stringify(data);
      if('sha' === (opt.name||'').toLowerCase().slice(0,3)){
        var rsha = shim.Buffer.from(await sha(data, opt.name), 'binary').toString(opt.encode || 'base64')
        if(cb){ try{ cb(rsha) }catch(e){console.log(e)} }
        return rsha;
      }
      salt = salt || shim.random(9);
      var key = await (shim.ossl || shim.subtle).importKey('raw', new shim.TextEncoder().encode(data), {name: opt.name || 'PBKDF2'}, false, ['deriveBits']);
      var work = await (shim.ossl || shim.subtle).deriveBits({
        name: opt.name || 'PBKDF2',
        iterations: opt.iterations || S.pbkdf2.iter,
        salt: new shim.TextEncoder().encode(opt.salt || salt),
        hash: opt.hash || S.pbkdf2.hash,
      }, key, opt.length || (S.pbkdf2.ks * 8))
      data = shim.random(data.length)  // Erase data in case of passphrase
      var r = shim.Buffer.from(work, 'binary').toString(opt.encode || 'base64')
      if(cb){ try{ cb(r) }catch(e){console.log(e)} }
      return r;
    } catch(e) { 
      console.log(e);
      SEA.err = e;
      if(SEA.throw){ throw e }
      if(cb){ cb() }
      return;
    }});

    module.exports = SEA.work;
  })(USE, './work');

  ;USE(function(module){
    var SEA = USE('./root');
    var shim = USE('./shim');
    var S = USE('./settings');

    SEA.name = SEA.name || (async (cb, opt) => { try {
      if(cb){ try{ cb() }catch(e){console.log(e)} }
      return;
    } catch(e) {
      console.log(e);
      SEA.err = e;
      if(SEA.throw){ throw e }
      if(cb){ cb() }
      return;
    }});

    //SEA.pair = async (data, proof, cb) => { try {
    SEA.pair = SEA.pair || (async (cb, opt) => { try {

      var ecdhSubtle = shim.ossl || shim.subtle;
      // First: ECDSA keys for signing/verifying...
      var sa = await shim.subtle.generateKey({name: 'ECDSA', namedCurve: 'P-256'}, true, [ 'sign', 'verify' ])
      .then(async (keys) => {
        // privateKey scope doesn't leak out from here!
        //const { d: priv } = await shim.subtle.exportKey('jwk', keys.privateKey)
        var key = {};
        key.priv = (await shim.subtle.exportKey('jwk', keys.privateKey)).d;
        var pub = await shim.subtle.exportKey('jwk', keys.publicKey);
        //const pub = Buff.from([ x, y ].join(':')).toString('base64') // old
        key.pub = pub.x+'.'+pub.y; // new
        // x and y are already base64
        // pub is UTF8 but filename/URL safe (https://www.ietf.org/rfc/rfc3986.txt)
        // but split on a non-base64 letter.
        return key;
      })
      
      // To include PGPv4 kind of keyId:
      // const pubId = await SEA.keyid(keys.pub)
      // Next: ECDH keys for encryption/decryption...

      try{
      var dh = await ecdhSubtle.generateKey({name: 'ECDH', namedCurve: 'P-256'}, true, ['deriveKey'])
      .then(async (keys) => {
        // privateKey scope doesn't leak out from here!
        var key = {};
        key.epriv = (await ecdhSubtle.exportKey('jwk', keys.privateKey)).d;
        var pub = await ecdhSubtle.exportKey('jwk', keys.publicKey);
        //const epub = Buff.from([ ex, ey ].join(':')).toString('base64') // old
        key.epub = pub.x+'.'+pub.y; // new
        // ex and ey are already base64
        // epub is UTF8 but filename/URL safe (https://www.ietf.org/rfc/rfc3986.txt)
        // but split on a non-base64 letter.
        return key;
      })
      }catch(e){
        if(SEA.window){ throw e }
        if(e == 'Error: ECDH is not a supported algorithm'){ console.log('Ignoring ECDH...') }
        else { throw e }
      } dh = dh || {};

      var r = { pub: sa.pub, priv: sa.priv, /* pubId, */ epub: dh.epub, epriv: dh.epriv }
      if(cb){ try{ cb(r) }catch(e){console.log(e)} }
      return r;
    } catch(e) {
      console.log(e);
      SEA.err = e;
      if(SEA.throw){ throw e }
      if(cb){ cb() }
      return;
    }});

    module.exports = SEA.pair;
  })(USE, './pair');

  ;USE(function(module){
    var SEA = USE('./root');
    var shim = USE('./shim');
    var S = USE('./settings');
    var sha = USE('./sha256');
    var u;

    SEA.sign = SEA.sign || (async (data, pair, cb, opt) => { try {
      opt = opt || {};
      if(!(pair||opt).priv){
        if(!SEA.I){ throw 'No signing key.' }
        pair = await SEA.I(null, {what: data, how: 'sign', why: opt.why});
      }
      if(u === data){ throw '`undefined` not allowed.' }
      var json = await S.parse(data);
      var check = opt.check = opt.check || json;
      if(SEA.verify && (SEA.opt.check(check) || (check && check.s && check.m))
      && u !== await SEA.verify(check, pair)){ // don't sign if we already signed it.
        var r = await S.parse(check);
        if(!opt.raw){ r = 'SEA' + await shim.stringify(r) }
        if(cb){ try{ cb(r) }catch(e){console.log(e)} }
        return r;
      }
      var pub = pair.pub;
      var priv = pair.priv;
      var jwk = S.jwk(pub, priv);
      var hash = await sha(json);
      var sig = await (shim.ossl || shim.subtle).importKey('jwk', jwk, {name: 'ECDSA', namedCurve: 'P-256'}, false, ['sign'])
      .then((key) => (shim.ossl || shim.subtle).sign({name: 'ECDSA', hash: {name: 'SHA-256'}}, key, new Uint8Array(hash))) // privateKey scope doesn't leak out from here!
      var r = {m: json, s: shim.Buffer.from(sig, 'binary').toString(opt.encode || 'base64')}
      if(!opt.raw){ r = 'SEA' + await shim.stringify(r) }

      if(cb){ try{ cb(r) }catch(e){console.log(e)} }
      return r;
    } catch(e) {
      console.log(e);
      SEA.err = e;
      if(SEA.throw){ throw e }
      if(cb){ cb() }
      return;
    }});

    module.exports = SEA.sign;
  })(USE, './sign');

  ;USE(function(module){
    var SEA = USE('./root');
    var shim = USE('./shim');
    var S = USE('./settings');
    var sha = USE('./sha256');
    var u;

    SEA.verify = SEA.verify || (async (data, pair, cb, opt) => { try {
      var json = await S.parse(data);
      if(false === pair){ // don't verify!
        var raw = await S.parse(json.m);
        if(cb){ try{ cb(raw) }catch(e){console.log(e)} }
        return raw;
      }
      opt = opt || {};
      // SEA.I // verify is free! Requires no user permission.
      var pub = pair.pub || pair;
      var key = SEA.opt.slow_leak? await SEA.opt.slow_leak(pub) : await (shim.ossl || shim.subtle).importKey('jwk', S.jwk(pub), {name: 'ECDSA', namedCurve: 'P-256'}, false, ['verify']);
      var hash = await sha(json.m);
      var buf, sig, check, tmp; try{
        buf = shim.Buffer.from(json.s, opt.encode || 'base64'); // NEW DEFAULT!
        sig = new Uint8Array(buf);
        check = await (shim.ossl || shim.subtle).verify({name: 'ECDSA', hash: {name: 'SHA-256'}}, key, sig, new Uint8Array(hash));
        if(!check){ throw "Signature did not match." }
      }catch(e){
        if(SEA.opt.fallback){
          return await SEA.opt.fall_verify(data, pair, cb, opt);
        }
      }
      var r = check? await S.parse(json.m) : u;

      if(cb){ try{ cb(r) }catch(e){console.log(e)} }
      return r;
    } catch(e) {
      console.log(e); // mismatched owner FOR MARTTI
      SEA.err = e;
      if(SEA.throw){ throw e }
      if(cb){ cb() }
      return;
    }});

    module.exports = SEA.verify;
    // legacy & ossl leak mitigation:

    var knownKeys = {};
    var keyForPair = SEA.opt.slow_leak = pair => {
      if (knownKeys[pair]) return knownKeys[pair];
      var jwk = S.jwk(pair);
      knownKeys[pair] = (shim.ossl || shim.subtle).importKey("jwk", jwk, {name: 'ECDSA', namedCurve: 'P-256'}, false, ["verify"]);
      return knownKeys[pair];
    };

    var O = SEA.opt;
    SEA.opt.fall_verify = async function(data, pair, cb, opt, f){
      if(f === SEA.opt.fallback){ throw "Signature did not match" } f = f || 1;
      var tmp = data||'';
      data = SEA.opt.unpack(data) || data;
      var json = await S.parse(data), pub = pair.pub || pair, key = await SEA.opt.slow_leak(pub);
      var hash = (f <= SEA.opt.fallback)? shim.Buffer.from(await shim.subtle.digest({name: 'SHA-256'}, new shim.TextEncoder().encode(await S.parse(json.m)))) : await sha(json.m); // this line is old bad buggy code but necessary for old compatibility.
      var buf; var sig; var check; try{
        buf = shim.Buffer.from(json.s, opt.encode || 'base64') // NEW DEFAULT!
        sig = new Uint8Array(buf)
        check = await (shim.ossl || shim.subtle).verify({name: 'ECDSA', hash: {name: 'SHA-256'}}, key, sig, new Uint8Array(hash))
        if(!check){ throw "Signature did not match." }
      }catch(e){ try{
        buf = shim.Buffer.from(json.s, 'utf8') // AUTO BACKWARD OLD UTF8 DATA!
        sig = new Uint8Array(buf)
        check = await (shim.ossl || shim.subtle).verify({name: 'ECDSA', hash: {name: 'SHA-256'}}, key, sig, new Uint8Array(hash))
        }catch(e){
        if(!check){ throw "Signature did not match." }
        }
      }
      var r = check? await S.parse(json.m) : u;
      O.fall_soul = tmp['#']; O.fall_key = tmp['.']; O.fall_val = data; O.fall_state = tmp['>'];
      if(cb){ try{ cb(r) }catch(e){console.log(e)} }
      return r;
    }
    SEA.opt.fallback = 2;

  })(USE, './verify');

  ;USE(function(module){
    var shim = USE('./shim');
    var S = USE('./settings');
    var sha256hash = USE('./sha256');

    const importGen = async (key, salt, opt) => {
      //const combo = shim.Buffer.concat([shim.Buffer.from(key, 'utf8'), salt || shim.random(8)]).toString('utf8') // old
      opt = opt || {};
      const combo = key + (salt || shim.random(8)).toString('utf8'); // new
      const hash = shim.Buffer.from(await sha256hash(combo), 'binary')
      
      const jwkKey = S.keyToJwk(hash)      
      return await shim.subtle.importKey('jwk', jwkKey, {name:'AES-GCM'}, false, ['encrypt', 'decrypt'])
    }
    module.exports = importGen;
  })(USE, './aeskey');

  ;USE(function(module){
    var SEA = USE('./root');
    var shim = USE('./shim');
    var S = USE('./settings');
    var aeskey = USE('./aeskey');
    var u;

    SEA.encrypt = SEA.encrypt || (async (data, pair, cb, opt) => { try {
      opt = opt || {};
      var key = (pair||opt).epriv || pair;
      if(u === data){ throw '`undefined` not allowed.' }
      if(!key){
        if(!SEA.I){ throw 'No encryption key.' }
        pair = await SEA.I(null, {what: data, how: 'encrypt', why: opt.why});
        key = pair.epriv || pair;
      }
      var msg = (typeof data == 'string')? data : await shim.stringify(data);
      var rand = {s: shim.random(9), iv: shim.random(15)}; // consider making this 9 and 15 or 18 or 12 to reduce == padding.
      var ct = await aeskey(key, rand.s, opt).then((aes) => (/*shim.ossl ||*/ shim.subtle).encrypt({ // Keeping the AES key scope as private as possible...
        name: opt.name || 'AES-GCM', iv: new Uint8Array(rand.iv)
      }, aes, new shim.TextEncoder().encode(msg)));
      var r = {
        ct: shim.Buffer.from(ct, 'binary').toString(opt.encode || 'base64'),
        iv: rand.iv.toString(opt.encode || 'base64'),
        s: rand.s.toString(opt.encode || 'base64')
      }
      if(!opt.raw){ r = 'SEA' + await shim.stringify(r) }

      if(cb){ try{ cb(r) }catch(e){console.log(e)} }
      return r;
    } catch(e) { 
      console.log(e);
      SEA.err = e;
      if(SEA.throw){ throw e }
      if(cb){ cb() }
      return;
    }});

    module.exports = SEA.encrypt;
  })(USE, './encrypt');

  ;USE(function(module){
    var SEA = USE('./root');
    var shim = USE('./shim');
    var S = USE('./settings');
    var aeskey = USE('./aeskey');

    SEA.decrypt = SEA.decrypt || (async (data, pair, cb, opt) => { try {
      opt = opt || {};
      var key = (pair||opt).epriv || pair;
      if(!key){
        if(!SEA.I){ throw 'No decryption key.' }
        pair = await SEA.I(null, {what: data, how: 'decrypt', why: opt.why});
        key = pair.epriv || pair;
      }
      var json = await S.parse(data);
      var buf, bufiv, bufct; try{
        buf = shim.Buffer.from(json.s, opt.encode || 'base64');
        bufiv = shim.Buffer.from(json.iv, opt.encode || 'base64');
        bufct = shim.Buffer.from(json.ct, opt.encode || 'base64');
        var ct = await aeskey(key, buf, opt).then((aes) => (/*shim.ossl ||*/ shim.subtle).decrypt({  // Keeping aesKey scope as private as possible...
          name: opt.name || 'AES-GCM', iv: new Uint8Array(bufiv), tagLength: 128
        }, aes, new Uint8Array(bufct)));
      }catch(e){
        if('utf8' === opt.encode){ throw "Could not decrypt" }
        if(SEA.opt.fallback){
          opt.encode = 'utf8';
          return await SEA.decrypt(data, pair, cb, opt);
        }
      }
      var r = await S.parse(new shim.TextDecoder('utf8').decode(ct));
      if(cb){ try{ cb(r) }catch(e){console.log(e)} }
      return r;
    } catch(e) { 
      console.log(e);
      SEA.err = e;
      if(SEA.throw){ throw e }
      if(cb){ cb() }
      return;
    }});

    module.exports = SEA.decrypt;
  })(USE, './decrypt');

  ;USE(function(module){
    var SEA = USE('./root');
    var shim = USE('./shim');
    var S = USE('./settings');
    // Derive shared secret from other's pub and my epub/epriv 
    SEA.secret = SEA.secret || (async (key, pair, cb, opt) => { try {
      opt = opt || {};
      if(!pair || !pair.epriv || !pair.epub){
        if(!SEA.I){ throw 'No secret mix.' }
        pair = await SEA.I(null, {what: key, how: 'secret', why: opt.why});
      }
      var pub = key.epub || key;
      var epub = pair.epub;
      var epriv = pair.epriv;
      var ecdhSubtle = shim.ossl || shim.subtle;
      var pubKeyData = keysToEcdhJwk(pub);
      var props = Object.assign({ public: await ecdhSubtle.importKey(...pubKeyData, true, []) },{name: 'ECDH', namedCurve: 'P-256'}); // Thanks to @sirpy !
      var privKeyData = keysToEcdhJwk(epub, epriv);
      var derived = await ecdhSubtle.importKey(...privKeyData, false, ['deriveBits']).then(async (privKey) => {
        // privateKey scope doesn't leak out from here!
        var derivedBits = await ecdhSubtle.deriveBits(props, privKey, 256);
        var rawBits = new Uint8Array(derivedBits);
        var derivedKey = await ecdhSubtle.importKey('raw', rawBits,{ name: 'AES-GCM', length: 256 }, true, [ 'encrypt', 'decrypt' ]);
        return ecdhSubtle.exportKey('jwk', derivedKey).then(({ k }) => k);
      })
      var r = derived;
      if(cb){ try{ cb(r) }catch(e){console.log(e)} }
      return r;
    } catch(e) {
      console.log(e);
      SEA.err = e;
      if(SEA.throw){ throw e }
      if(cb){ cb() }
      return;
    }});

    // can this be replaced with settings.jwk?
    var keysToEcdhJwk = (pub, d) => { // d === priv
      //var [ x, y ] = shim.Buffer.from(pub, 'base64').toString('utf8').split(':') // old
      var [ x, y ] = pub.split('.') // new
      var jwk = d ? { d: d } : {}
      return [  // Use with spread returned value...
        'jwk',
        Object.assign(
          jwk,
          { x: x, y: y, kty: 'EC', crv: 'P-256', ext: true }
        ), // ??? refactor
        {name: 'ECDH', namedCurve: 'P-256'}
      ]
    }

    module.exports = SEA.secret;
  })(USE, './secret');

  ;USE(function(module){
    var SEA = USE('./root');
    // This is to certify that a group of "certificants" can "put" anything at a group of matched "paths" to the certificate authority's graph
    SEA.certify = SEA.certify || (async (certificants, policy = {}, authority, cb, opt = {}) => { try {
      /*
      IMPORTANT: A Certificate is like a Signature. No one knows who (authority) created/signed a cert until you put it into their graph.
      "certificants": '*' or a String (Bob.pub) || an Object that contains "pub" as a key || an array of [object || string]. These people will have the rights.
      "policy": A string ('inbox'), or a RAD/LEX object {'*': 'inbox'}, or an Array of RAD/LEX objects or strings. RAD/LEX object can contain key "?" with indexOf("*") > -1 to force key equals certificant pub. This rule is used to check against soul+'/'+key using Gun.text.match or String.match.
      "authority": Key pair or priv of the certificate authority.
      "cb": A callback function after all things are done.
      "opt": If opt.expiry (a timestamp) is set, SEA won't sync data after opt.expiry. If opt.blacklist is set, SEA will look for blacklist before syncing.
      */
      console.log('SEA.certify() is an early experimental community supported method that may change API behavior without warning in any future version.')

      certificants = (() => {
        var data = []
        if (certificants) {
          if ((typeof certificants === 'string' || Array.isArray(certificants)) && certificants.indexOf('*') !== -1) return '*'
          if (typeof certificants === 'string') {
            return certificants
          }

          if (Array.isArray(certificants)) {
            if (certificants.length === 1 && certificants[0]) return typeof certificants[0] === 'object' && certificants[0].pub ? certificants[0].pub : typeof certificants[0] === 'string' ? certificants[0] : null
            certificants.map(certificant => {
              if (typeof certificant ==='string') data.push(certificant)
              else if (typeof certificant === 'object' && certificant.pub) data.push(certificant.pub)
            })
          }

          if (typeof certificants === 'object' && certificants.pub) return certificants.pub
          return data.length > 0 ? data : null
        }
        return null
      })()

      if (!certificants) return console.log("No certificant found.")

      const expiry = opt.expiry && (typeof opt.expiry === 'number' || typeof opt.expiry === 'string') ? parseFloat(opt.expiry) : null
      const readPolicy = (policy || {}).read ? policy.read : null
      const writePolicy = (policy || {}).write ? policy.write : typeof policy === 'string' || Array.isArray(policy) || policy["+"] || policy["#"] || policy["."] || policy["="] || policy["*"] || policy[">"] || policy["<"] ? policy : null
      const readBlacklist = ((opt || {}).blacklist || {}).read && (typeof opt.blacklist.read === 'string' || opt.blacklist.read['#']) ? opt.blacklist.read : null
      const writeBlacklist = typeof (opt || {}).blacklist === 'string' || (((opt || {}).blacklist || {}).write || {})['#'] ? opt.blacklist : ((opt || {}).blacklist || {}).write && (typeof opt.blacklist.write === 'string' || opt.blacklist.write['#']) ? opt.blacklist.write : null

      if (!readPolicy && !writePolicy) return console.log("No policy found.")

      // reserved keys: c, e, r, w, rb, wb
      const data = JSON.stringify({
        c: certificants,
        ...(expiry ? {e: expiry} : {}), // inject expiry if possible
        ...(readPolicy ? {r: readPolicy }  : {}), // "r" stands for read, which means read permission.
        ...(writePolicy ? {w: writePolicy} : {}), // "w" stands for write, which means write permission.
        ...(readBlacklist ? {rb: readBlacklist} : {}), // inject READ blacklist if possible
        ...(writeBlacklist ? {wb: writeBlacklist} : {}), // inject WRITE blacklist if possible
      })

      const certificate = await SEA.sign(data, authority, null, {raw:1})

      var r = certificate
      if(!opt.raw){ r = 'SEA'+JSON.stringify(r) }
      if(cb){ try{ cb(r) }catch(e){console.log(e)} }
      return r;
    } catch(e) {
      SEA.err = e;
      if(SEA.throw){ throw e }
      if(cb){ cb() }
      return;
    }});

    module.exports = SEA.certify;
  })(USE, './certify');

  ;USE(function(module){
    var shim = USE('./shim');
    // Practical examples about usage found in tests.
    var SEA = USE('./root');
    SEA.work = USE('./work');
    SEA.sign = USE('./sign');
    SEA.verify = USE('./verify');
    SEA.encrypt = USE('./encrypt');
    SEA.decrypt = USE('./decrypt');
    SEA.certify = USE('./certify');
    //SEA.opt.aeskey = USE('./aeskey'); // not official! // this causes problems in latest WebCrypto.

    SEA.random = SEA.random || shim.random;

    // This is Buffer used in SEA and usable from Gun/SEA application also.
    // For documentation see https://nodejs.org/api/buffer.html
    SEA.Buffer = SEA.Buffer || USE('./buffer');

    // These SEA functions support now ony Promises or
    // async/await (compatible) code, use those like Promises.
    //
    // Creates a wrapper library around Web Crypto API
    // for various AES, ECDSA, PBKDF2 functions we called above.
    // Calculate public key KeyID aka PGPv4 (result: 8 bytes as hex string)
    SEA.keyid = SEA.keyid || (async (pub) => {
      try {
        // base64('base64(x):base64(y)') => shim.Buffer(xy)
        const pb = shim.Buffer.concat(
          pub.replace(/-/g, '+').replace(/_/g, '/').split('.')
          .map((t) => shim.Buffer.from(t, 'base64'))
        )
        // id is PGPv4 compliant raw key
        const id = shim.Buffer.concat([
          shim.Buffer.from([0x99, pb.length / 0x100, pb.length % 0x100]), pb
        ])
        const sha1 = await sha1hash(id)
        const hash = shim.Buffer.from(sha1, 'binary')
        return hash.toString('hex', hash.length - 8)  // 16-bit ID as hex
      } catch (e) {
        console.log(e)
        throw e
      }
    });
    // all done!
    // Obviously it is missing MANY necessary features. This is only an alpha release.
    // Please experiment with it, audit what I've done so far, and complain about what needs to be added.
    // SEA should be a full suite that is easy and seamless to use.
    // Again, scroll naer the top, where I provide an EXAMPLE of how to create a user and sign in.
    // Once logged in, the rest of the code you just read handled automatically signing/validating data.
    // But all other behavior needs to be equally easy, like opinionated ways of
    // Adding friends (trusted public keys), sending private messages, etc.
    // Cheers! Tell me what you think.
    ((SEA.window||{}).GUN||{}).SEA = SEA;

    module.exports = SEA
    // -------------- END SEA MODULES --------------------
    // -- BEGIN SEA+GUN MODULES: BUNDLED BY DEFAULT UNTIL OTHERS USE SEA ON OWN -------
  })(USE, './sea');

  ;USE(function(module){
    var SEA = USE('./sea'), Gun, u;
    if(SEA.window){
      Gun = SEA.window.GUN || {chain:{}};
    } else {
      Gun = USE((u+'' == typeof MODULE?'.':'')+'./gun', 1);
    }
    SEA.GUN = Gun;

    function User(root){ 
      this._ = {$: this};
    }
    User.prototype = (function(){ function F(){}; F.prototype = Gun.chain; return new F() }()) // Object.create polyfill
    User.prototype.constructor = User;

    // let's extend the gun chain with a `user` function.
    // only one user can be logged in at a time, per gun instance.
    Gun.chain.user = function(pub){
      var gun = this, root = gun.back(-1), user;
      if(pub){
        pub = SEA.opt.pub((pub._||'')['#']) || pub;
        return root.get('~'+pub);
      }
      if(user = root.back('user')){ return user }
      var root = (root._), at = root, uuid = at.opt.uuid || lex;
      (at = (user = at.user = gun.chain(new User))._).opt = {};
      at.opt.uuid = function(cb){
        var id = uuid(), pub = root.user;
        if(!pub || !(pub = pub.is) || !(pub = pub.pub)){ return id }
        id = '~' + pub + '/' + id;
        if(cb && cb.call){ cb(null, id) }
        return id;
      }
      return user;
    }
    function lex(){ return Gun.state().toString(36).replace('.','') }
    Gun.User = User;
    User.GUN = Gun;
    User.SEA = Gun.SEA = SEA;
    module.exports = User;
  })(USE, './user');

  ;USE(function(module){
    var u, Gun = (''+u != typeof window)? (window.Gun||{chain:{}}) : USE((''+u === typeof MODULE?'.':'')+'./gun', 1);
    Gun.chain.then = function(cb, opt){
      var gun = this, p = (new Promise(function(res, rej){
        gun.once(res, opt);
      }));
      return cb? p.then(cb) : p;
    }
  })(USE, './then');

  ;USE(function(module){
    var User = USE('./user'), SEA = User.SEA, Gun = User.GUN, noop = function(){};

    // Well first we have to actually create a user. That is what this function does.
    User.prototype.create = function(...args){
      var pair = typeof args[0] === 'object' && (args[0].pub || args[0].epub) ? args[0] : typeof args[1] === 'object' && (args[1].pub || args[1].epub) ? args[1] : null;
      var alias = pair && (pair.pub || pair.epub) ? pair.pub : typeof args[0] === 'string' ? args[0] : null;
      var pass = pair && (pair.pub || pair.epub) ? pair : alias && typeof args[1] === 'string' ? args[1] : null;
      var cb = args.filter(arg => typeof arg === 'function')[0] || null; // cb now can stand anywhere, after alias/pass or pair
      var opt = args && args.length > 1 && typeof args[args.length-1] === 'object' ? args[args.length-1] : {}; // opt is always the last parameter which typeof === 'object' and stands after cb
      
      var gun = this, cat = (gun._), root = gun.back(-1);
      cb = cb || noop;
      opt = opt || {};
      if(false !== opt.check){
        var err;
        if(!alias){ err = "No user." }
        if((pass||'').length < 8){ err = "Password too short!" }
        if(err){
          cb({err: Gun.log(err)});
          return gun;
        }
      }
      if(cat.ing){
        (cb || noop)({err: Gun.log("User is already being created or authenticated!"), wait: true});
        return gun;
      }
      cat.ing = true;
      var act = {}, u;
      act.a = function(pubs){
        act.pubs = pubs;
        if(pubs && !opt.already){
          // If we can enforce that a user name is already taken, it might be nice to try, but this is not guaranteed.
          var ack = {err: Gun.log('User already created!')};
          cat.ing = false;
          (cb || noop)(ack);
          gun.leave();
          return;
        }
        act.salt = String.random(64); // pseudo-randomly create a salt, then use PBKDF2 function to extend the password with it.
        SEA.work(pass, act.salt, act.b); // this will take some short amount of time to produce a proof, which slows brute force attacks.
      }
      act.b = function(proof){
        act.proof = proof;
        pair ? act.c(pair) : SEA.pair(act.c) // generate a brand new key pair or use the existing.
      }
      act.c = function(pair){
        var tmp
        act.pair = pair || {};
        if(tmp = cat.root.user){
          tmp._.sea = pair;
          tmp.is = {pub: pair.pub, epub: pair.epub, alias: alias};
        }
        // the user's public key doesn't need to be signed. But everything else needs to be signed with it! // we have now automated it! clean up these extra steps now!
        act.data = {pub: pair.pub};
        act.d();
      }
      act.d = function(){
        act.data.alias = alias;
        act.e();
      }
      act.e = function(){
        act.data.epub = act.pair.epub; 
        SEA.encrypt({priv: act.pair.priv, epriv: act.pair.epriv}, act.proof, act.f, {raw:1}); // to keep the private key safe, we AES encrypt it with the proof of work!
      }
      act.f = function(auth){
        act.data.auth = JSON.stringify({ek: auth, s: act.salt}); 
        act.g(act.data.auth);
      }
      act.g = function(auth){ var tmp;
        act.data.auth = act.data.auth || auth;
        root.get(tmp = '~'+act.pair.pub).put(act.data).on(act.h); // awesome, now we can actually save the user with their public key as their ID.
        var link = {}; link[tmp] = {'#': tmp}; root.get('~@'+alias).put(link).get(tmp).on(act.i); // next up, we want to associate the alias with the public key. So we add it to the alias list.
      }
      act.h = function(data, key, msg, eve){
        eve.off(); act.h.ok = 1; act.i();
      }
      act.i = function(data, key, msg, eve){
        if(eve){ act.i.ok = 1; eve.off() }
        if(!act.h.ok || !act.i.ok){ return }
        cat.ing = false;
        cb({ok: 0, pub: act.pair.pub}); // callback that the user has been created. (Note: ok = 0 because we didn't wait for disk to ack)
        if(noop === cb){ pair? gun.auth(pair) : gun.auth(alias, pass) } // if no callback is passed, auto-login after signing up.
      }
      root.get('~@'+alias).once(act.a);
      return gun;
    }
    User.prototype.leave = function(opt, cb){
      var gun = this, user = (gun.back(-1)._).user;
      if(user){
        delete user.is;
        delete user._.is;
        delete user._.sea;
      }
      if(SEA.window){
        try{var sS = {};
        sS = window.sessionStorage;
        delete sS.recall;
        delete sS.pair;
        }catch(e){};
      }
      return gun;
    }
  })(USE, './create');

  ;USE(function(module){
    var User = USE('./user'), SEA = User.SEA, Gun = User.GUN, noop = function(){};
    // now that we have created a user, we want to authenticate them!
    User.prototype.auth = function(...args){ // TODO: this PR with arguments need to be cleaned up / refactored.
      var pair = typeof args[0] === 'object' && (args[0].pub || args[0].epub) ? args[0] : typeof args[1] === 'object' && (args[1].pub || args[1].epub) ? args[1] : null;
      var alias = !pair && typeof args[0] === 'string' ? args[0] : null;
      var pass = alias && typeof args[1] === 'string' ? args[1] : null;
      var cb = args.filter(arg => typeof arg === 'function')[0] || null; // cb now can stand anywhere, after alias/pass or pair
      var opt = args && args.length > 1 && typeof args[args.length-1] === 'object' ? args[args.length-1] : {}; // opt is always the last parameter which typeof === 'object' and stands after cb
      
      var gun = this, cat = (gun._), root = gun.back(-1);
      
      if(cat.ing){
        (cb || noop)({err: Gun.log("User is already being created or authenticated!"), wait: true});
        return gun;
      }
      cat.ing = true;
      
      var act = {}, u;
      act.a = function(data){
        if(!data){ return act.b() }
        if(!data.pub){
          var tmp = []; Object.keys(data).forEach(function(k){ if('_'==k){ return } tmp.push(data[k]) })
          return act.b(tmp);
        }
        if(act.name){ return act.f(data) }
        act.c((act.data = data).auth);
      }
      act.b = function(list){
        var get = (act.list = (act.list||[]).concat(list||[])).shift();
        if(u === get){
          if(act.name){ return act.err('Your user account is not published for dApps to access, please consider syncing it online, or allowing local access by adding your device as a peer.') }
          return act.err('Wrong user or password.') 
        }
        root.get(get).once(act.a);
      }
      act.c = function(auth){
        if(u === auth){ return act.b() }
        if('string' == typeof auth){ return act.c(obj_ify(auth)) } // in case of legacy
        SEA.work(pass, (act.auth = auth).s, act.d, act.enc); // the proof of work is evidence that we've spent some time/effort trying to log in, this slows brute force.
      }
      act.d = function(proof){
        SEA.decrypt(act.auth.ek, proof, act.e, act.enc);
      }
      act.e = function(half){
        if(u === half){
          if(!act.enc){ // try old format
            act.enc = {encode: 'utf8'};
            return act.c(act.auth);
          } act.enc = null; // end backwards
          return act.b();
        }
        act.half = half;
        act.f(act.data);
      }
      act.f = function(pair){
        var half = act.half || {}, data = act.data || {};
        act.g(act.lol = {pub: pair.pub || data.pub, epub: pair.epub || data.epub, priv: pair.priv || half.priv, epriv: pair.epriv || half.epriv});
      }
      act.g = function(pair){
        if(!pair || !pair.pub || !pair.epub){ return act.b() }
        act.pair = pair;
        var user = (root._).user, at = (user._);
        var tmp = at.tag;
        var upt = at.opt;
        at = user._ = root.get('~'+pair.pub)._;
        at.opt = upt;
        // add our credentials in-memory only to our root user instance
        user.is = {pub: pair.pub, epub: pair.epub, alias: alias || pair};
        at.sea = act.pair;
        cat.ing = false;
        try{if(pass && u == (obj_ify(cat.root.graph['~'+pair.pub].auth)||'')[':']){ opt.shuffle = opt.change = pass; } }catch(e){} // migrate UTF8 & Shuffle!
        opt.change? act.z() : (cb || noop)(at);
        if(SEA.window && ((gun.back('user')._).opt||opt).remember){
          // TODO: this needs to be modular.
          try{var sS = {};
          sS = window.sessionStorage;
          sS.recall = true;
          sS.pair = JSON.stringify(pair); // auth using pair is more reliable than alias/pass
          }catch(e){}
        }
        try{
          if(root._.tag.auth){ // auth handle might not be registered yet
          (root._).on('auth', at) // TODO: Deprecate this, emit on user instead! Update docs when you do.
          } else { setTimeout(function(){ (root._).on('auth', at) },1) } // if not, hackily add a timeout.
          //at.on('auth', at) // Arrgh, this doesn't work without event "merge" code, but "merge" code causes stack overflow and crashes after logging in & trying to write data.
        }catch(e){
          Gun.log("Your 'auth' callback crashed with:", e);
        }
      }
      act.z = function(){
        // password update so encrypt private key using new pwd + salt
        act.salt = String.random(64); // pseudo-random
        SEA.work(opt.change, act.salt, act.y);
      }
      act.y = function(proof){
        SEA.encrypt({priv: act.pair.priv, epriv: act.pair.epriv}, proof, act.x, {raw:1});
      }
      act.x = function(auth){
        act.w(JSON.stringify({ek: auth, s: act.salt}));
      }
      act.w = function(auth){
        if(opt.shuffle){ // delete in future!
          console.log('migrate core account from UTF8 & shuffle');
          var tmp = {}; Object.keys(act.data).forEach(function(k){ tmp[k] = act.data[k] });
          delete tmp._;
          tmp.auth = auth;
          root.get('~'+act.pair.pub).put(tmp);
        } // end delete
        root.get('~'+act.pair.pub).get('auth').put(auth, cb || noop);
      }
      act.err = function(e){
        var ack = {err: Gun.log(e || 'User cannot be found!')};
        cat.ing = false;
        (cb || noop)(ack);
      }
      act.plugin = function(name){
        if(!(act.name = name)){ return act.err() }
        var tmp = [name];
        if('~' !== name[0]){
          tmp[1] = '~'+name;
          tmp[2] = '~@'+name;
        }
        act.b(tmp);
      }
      if(pair){
        act.g(pair);
      } else
      if(alias){
        root.get('~@'+alias).once(act.a);
      } else
      if(!alias && !pass){
        SEA.name(act.plugin);
      }
      return gun;
    }
    function obj_ify(o){
      if('string' != typeof o){ return o }
      try{o = JSON.parse(o);
      }catch(e){o={}};
      return o;
    }
  })(USE, './auth');

  ;USE(function(module){
    var User = USE('./user'), SEA = User.SEA, Gun = User.GUN;
    User.prototype.recall = function(opt, cb){
      var gun = this, root = gun.back(-1), tmp;
      opt = opt || {};
      if(opt && opt.sessionStorage){
        if(SEA.window){
          try{
            var sS = {};
            sS = window.sessionStorage;
            if(sS){
              (root._).opt.remember = true;
              ((gun.back('user')._).opt||opt).remember = true;
              if(sS.recall || sS.pair) root.user().auth(JSON.parse(sS.pair), cb); // pair is more reliable than alias/pass
            }
          }catch(e){}
        }
        return gun;
      }
      /*
        TODO: copy mhelander's expiry code back in.
        Although, we should check with community,
        should expiry be core or a plugin?
      */
      return gun;
    }
  })(USE, './recall');

  ;USE(function(module){
    var User = USE('./user'), SEA = User.SEA, Gun = User.GUN, noop = function(){};
    User.prototype.pair = function(){
      var user = this, proxy; // undeprecated, hiding with proxies.
      try{ proxy = new Proxy({DANGER:'\u2620'}, {get: function(t,p,r){
        if(!user.is || !(user._||'').sea){ return }
        return user._.sea[p];
      }})}catch(e){}
      return proxy;
    }
    // If authenticated user wants to delete his/her account, let's support it!
    User.prototype.delete = async function(alias, pass, cb){
      console.log("user.delete() IS DEPRECATED AND WILL BE MOVED TO A MODULE!!!");
      var gun = this, root = gun.back(-1), user = gun.back('user');
      try {
        user.auth(alias, pass, function(ack){
          var pub = (user.is||{}).pub;
          // Delete user data
          user.map().once(function(){ this.put(null) });
          // Wipe user data from memory
          user.leave();
          (cb || noop)({ok: 0});
        });
      } catch (e) {
        Gun.log('User.delete failed! Error:', e);
      }
      return gun;
    }
    User.prototype.alive = async function(){
      console.log("user.alive() IS DEPRECATED!!!");
      const gunRoot = this.back(-1)
      try {
        // All is good. Should we do something more with actual recalled data?
        await authRecall(gunRoot)
        return gunRoot._.user._
      } catch (e) {
        const err = 'No session!'
        Gun.log(err)
        throw { err }
      }
    }
    User.prototype.trust = async function(user){
      console.log("`.trust` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
      // TODO: BUG!!! SEA `node` read listener needs to be async, which means core needs to be async too.
      //gun.get('alice').get('age').trust(bob);
      if (Gun.is(user)) {
        user.get('pub').get((ctx, ev) => {
          console.log(ctx, ev)
        })
      }
      user.get('trust').get(path).put(theirPubkey);

      // do a lookup on this gun chain directly (that gets bob's copy of the data)
      // do a lookup on the metadata trust table for this path (that gets all the pubkeys allowed to write on this path)
      // do a lookup on each of those pubKeys ON the path (to get the collab data "layers")
      // THEN you perform Jachen's mix operation
      // and return the result of that to...
    }
    User.prototype.grant = function(to, cb){
      console.log("`.grant` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
      var gun = this, user = gun.back(-1).user(), pair = user._.sea, path = '';
      gun.back(function(at){ if(at.is){ return } path += (at.get||'') });
      (async function(){
      var enc, sec = await user.get('grant').get(pair.pub).get(path).then();
      sec = await SEA.decrypt(sec, pair);
      if(!sec){
        sec = SEA.random(16).toString();
        enc = await SEA.encrypt(sec, pair);
        user.get('grant').get(pair.pub).get(path).put(enc);
      }
      var pub = to.get('pub').then();
      var epub = to.get('epub').then();
      pub = await pub; epub = await epub;
      var dh = await SEA.secret(epub, pair);
      enc = await SEA.encrypt(sec, dh);
      user.get('grant').get(pub).get(path).put(enc, cb);
      }());
      return gun;
    }
    User.prototype.secret = function(data, cb){
      console.log("`.secret` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
      var gun = this, user = gun.back(-1).user(), pair = user.pair(), path = '';
      gun.back(function(at){ if(at.is){ return } path += (at.get||'') });
      (async function(){
      var enc, sec = await user.get('trust').get(pair.pub).get(path).then();
      sec = await SEA.decrypt(sec, pair);
      if(!sec){
        sec = SEA.random(16).toString();
        enc = await SEA.encrypt(sec, pair);
        user.get('trust').get(pair.pub).get(path).put(enc);
      }
      enc = await SEA.encrypt(data, sec);
      gun.put(enc, cb);
      }());
      return gun;
    }

    /**
     * returns the decrypted value, encrypted by secret
     * @returns {Promise<any>}
     // Mark needs to review 1st before officially supported
    User.prototype.decrypt = function(cb) {
      let gun = this,
        path = ''
      gun.back(function(at) {
        if (at.is) {
          return
        }
        path += at.get || ''
      })
      return gun
        .then(async data => {
          if (data == null) {
            return
          }
          const user = gun.back(-1).user()
          const pair = user.pair()
          let sec = await user
            .get('trust')
            .get(pair.pub)
            .get(path)
          sec = await SEA.decrypt(sec, pair)
          if (!sec) {
            return data
          }
          let decrypted = await SEA.decrypt(data, sec)
          return decrypted
        })
        .then(res => {
          cb && cb(res)
          return res
        })
    }
    */
    module.exports = User
  })(USE, './share');

  ;USE(function(module){
    var SEA = USE('./sea'), S = USE('./settings'), noop = function() {}, u;
    var Gun = (''+u != typeof window)? (window.Gun||{on:noop}) : USE((''+u === typeof MODULE?'.':'')+'./gun', 1);
    // After we have a GUN extension to make user registration/login easy, we then need to handle everything else.

    // We do this with a GUN adapter, we first listen to when a gun instance is created (and when its options change)
    Gun.on('opt', function(at){
      if(!at.sea){ // only add SEA once per instance, on the "at" context.
        at.sea = {own: {}};
        at.on('put', check, at); // SEA now runs its firewall on HAM diffs, not all i/o.
      }
      this.to.next(at); // make sure to call the "next" middleware adapter.
    });

    // Alright, this next adapter gets run at the per node level in the graph database.
    // correction: 2020 it gets run on each key/value pair in a node upon a HAM diff.
    // This will let us verify that every property on a node has a value signed by a public key we trust.
    // If the signature does not match, the data is just `undefined` so it doesn't get passed on.
    // If it does match, then we transform the in-memory "view" of the data into its plain value (without the signature).
    // Now NOTE! Some data is "system" data, not user data. Example: List of public keys, aliases, etc.
    // This data is self-enforced (the value can only match its ID), but that is handled in the `security` function.
    // From the self-enforced data, we can see all the edges in the graph that belong to a public key.
    // Example: ~ASDF is the ID of a node with ASDF as its public key, signed alias and salt, and
    // its encrypted private key, but it might also have other signed values on it like `profile = <ID>` edge.
    // Using that directed edge's ID, we can then track (in memory) which IDs belong to which keys.
    // Here is a problem: Multiple public keys can "claim" any node's ID, so this is dangerous!
    // This means we should ONLY trust our "friends" (our key ring) public keys, not any ones.
    // I have not yet added that to SEA yet in this alpha release. That is coming soon, but beware in the meanwhile!

    function check(msg){ // REVISE / IMPROVE, NO NEED TO PASS MSG/EVE EACH SUB?
      var eve = this, at = eve.as, put = msg.put, soul = put['#'], key = put['.'], val = put[':'], state = put['>'], id = msg['#'], tmp;
      if(!soul || !key){ return }
      if((msg._||'').faith && (at.opt||'').faith && 'function' == typeof msg._){
        SEA.opt.pack(put, function(raw){
        SEA.verify(raw, false, function(data){ // this is synchronous if false
          put['='] = SEA.opt.unpack(data);
          eve.to.next(msg);
        })})
        return 
      }
      var no = function(why){ at.on('in', {'@': id, err: msg.err = why}) }; // exploit internal relay stun for now, maybe violates spec, but testing for now. // Note: this may be only the sharded message, not original batch.
      //var no = function(why){ msg.ack(why) };
      (msg._||'').DBG && ((msg._||'').DBG.c = +new Date);
      if(0 <= soul.indexOf('<?')){ // special case for "do not sync data X old" forget
        // 'a~pub.key/b<?9'
        tmp = parseFloat(soul.split('<?')[1]||'');
        if(tmp && (state < (Gun.state() - (tmp * 1000)))){ // sec to ms
          (tmp = msg._) && (tmp.stun) && (tmp.stun--); // THIS IS BAD CODE! It assumes GUN internals do something that will probably change in future, but hacking in now.
          return; // omit!
        }
      }
      
      if('~@' === soul){  // special case for shared system data, the list of aliases.
        check.alias(eve, msg, val, key, soul, at, no); return;
      }
      if('~@' === soul.slice(0,2)){ // special case for shared system data, the list of public keys for an alias.
        check.pubs(eve, msg, val, key, soul, at, no); return;
      }
      //if('~' === soul.slice(0,1) && 2 === (tmp = soul.slice(1)).split('.').length){ // special case, account data for a public key.
      if(tmp = SEA.opt.pub(soul)){ // special case, account data for a public key.
        check.pub(eve, msg, val, key, soul, at, no, at.user||'', tmp); return;
      }
      if(0 <= soul.indexOf('#')){ // special case for content addressing immutable hashed data.
        check.hash(eve, msg, val, key, soul, at, no); return;
      } 
      check.any(eve, msg, val, key, soul, at, no, at.user||''); return;
      eve.to.next(msg); // not handled
    }
    check.hash = function(eve, msg, val, key, soul, at, no){
      SEA.work(val, null, function(data){
        if(data && data === key.split('#').slice(-1)[0]){ return eve.to.next(msg) }
        no("Data hash not same as hash!");
      }, {name: 'SHA-256'});
    }
    check.alias = function(eve, msg, val, key, soul, at, no){ // Example: {_:#~@, ~@alice: {#~@alice}}
      if(!val){ return no("Data must exist!") } // data MUST exist
      if('~@'+key === link_is(val)){ return eve.to.next(msg) } // in fact, it must be EXACTLY equal to itself
      no("Alias not same!"); // if it isn't, reject.
    };
    check.pubs = function(eve, msg, val, key, soul, at, no){ // Example: {_:#~@alice, ~asdf: {#~asdf}}
      if(!val){ return no("Alias must exist!") } // data MUST exist
      if(key === link_is(val)){ return eve.to.next(msg) } // and the ID must be EXACTLY equal to its property
      no("Alias not same!"); // that way nobody can tamper with the list of public keys.
    };
    check.pub = async function(eve, msg, val, key, soul, at, no, user, pub){ var tmp // Example: {_:#~asdf, hello:'world'~fdsa}}
      const raw = await S.parse(val) || {}
      const verify = (certificate, certificant, cb) => {
        if (certificate.m && certificate.s && certificant && pub)
          // now verify certificate
          return SEA.verify(certificate, pub, data => { // check if "pub" (of the graph owner) really issued this cert
            if (u !== data && u !== data.e && msg.put['>'] && msg.put['>'] > parseFloat(data.e)) return no("Certificate expired.") // certificate expired
            // "data.c" = a list of certificants/certified users
            // "data.w" = lex WRITE permission, in the future, there will be "data.r" which means lex READ permission
            if (u !== data && data.c && data.w && (data.c === certificant || data.c.indexOf('*' || certificant) > -1)) {
              // ok, now "certificant" is in the "certificants" list, but is "path" allowed? Check path
              let path = soul.indexOf('/') > -1 ? soul.replace(soul.substring(0, soul.indexOf('/') + 1), '') : ''
              String.match = String.match || Gun.text.match
              const w = Array.isArray(data.w) ? data.w : typeof data.w === 'object' || typeof data.w === 'string' ? [data.w] : []
              for (const lex of w) {
                if ((String.match(path, lex['#']) && String.match(key, lex['.'])) || (!lex['.'] && String.match(path, lex['#'])) || (!lex['#'] && String.match(key, lex['.'])) || String.match((path ? path + '/' + key : key), lex['#'] || lex)) {
                  // is Certificant forced to present in Path
                  if (lex['+'] && lex['+'].indexOf('*') > -1 && path && path.indexOf(certificant) == -1 && key.indexOf(certificant) == -1) return no(`Path "${path}" or key "${key}" must contain string "${certificant}".`)
                  // path is allowed, but is there any WRITE blacklist? Check it out
                  if (data.wb && (typeof data.wb === 'string' || ((data.wb || {})['#']))) { // "data.wb" = path to the WRITE blacklist
                    var root = at.$.back(-1)
                    if (typeof data.wb === 'string' && '~' !== data.wb.slice(0, 1)) root = root.get('~' + pub)
                    return root.get(data.wb).get(certificant).once(value => {
                      if (value && (value === 1 || value === true)) return no("Certificant blacklisted.")
                      return cb(data)
                    })
                  }
                  return cb(data)
                }
              }
              return no("Certificate verification fail.")
            }
          })
        return
      }
      
      if ('pub' === key && '~' + pub === soul) {
        if (val === pub) return eve.to.next(msg) // the account MUST match `pub` property that equals the ID of the public key.
        return no("Account not same!")
      }

      if ((tmp = user.is) && tmp.pub && !raw['*'] && !raw['+'] && (pub === tmp.pub || (pub !== tmp.pub && ((msg._.msg || {}).opt || {}).cert))){
        SEA.opt.pack(msg.put, packed => {
          SEA.sign(packed, (user._).sea, async function(data) {
            if (u === data) return no(SEA.err || 'Signature fail.')
            msg.put[':'] = {':': tmp = SEA.opt.unpack(data.m), '~': data.s}
            msg.put['='] = tmp
  
            // if writing to own graph, just allow it
            if (pub === user.is.pub) {
              if (tmp = link_is(val)) (at.sea.own[tmp] = at.sea.own[tmp] || {})[pub] = 1
              JSON.stringifyAsync(msg.put[':'], function(err,s){
                if(err){ return no(err || "Stringify error.") }
                msg.put[':'] = s;
                return eve.to.next(msg);
              })
              return
            }
  
            // if writing to other's graph, check if cert exists then try to inject cert into put, also inject self pub so that everyone can verify the put
            if (pub !== user.is.pub && ((msg._.msg || {}).opt || {}).cert) {
              const cert = await S.parse(msg._.msg.opt.cert)
              // even if cert exists, we must verify it
              if (cert && cert.m && cert.s)
                verify(cert, user.is.pub, _ => {
                  msg.put[':']['+'] = cert // '+' is a certificate
                  msg.put[':']['*'] = user.is.pub // '*' is pub of the user who puts
                  JSON.stringifyAsync(msg.put[':'], function(err,s){
                    if(err){ return no(err || "Stringify error.") }
                    msg.put[':'] = s;
                    return eve.to.next(msg);
                  })
                  return
                })
            }
          }, {raw: 1})
        })
        return;
      }

      SEA.opt.pack(msg.put, packed => {
        SEA.verify(packed, raw['*'] || pub, function(data){ var tmp;
          data = SEA.opt.unpack(data);
          if (u === data) return no("Unverified data.") // make sure the signature matches the account it claims to be on. // reject any updates that are signed with a mismatched account.
          if ((tmp = link_is(data)) && pub === SEA.opt.pub(tmp)) (at.sea.own[tmp] = at.sea.own[tmp] || {})[pub] = 1
          
          // check if cert ('+') and putter's pub ('*') exist
          if (raw['+'] && raw['+']['m'] && raw['+']['s'] && raw['*'])
            // now verify certificate
            verify(raw['+'], raw['*'], _ => {
              msg.put['='] = data;
              return eve.to.next(msg);
            })
          else {
            msg.put['='] = data;
            return eve.to.next(msg);
          }
        });
      })
      return
    };
    check.any = function(eve, msg, val, key, soul, at, no, user){ var tmp, pub;
      if(at.opt.secure){ return no("Soul missing public key at '" + key + "'.") }
      // TODO: Ask community if should auto-sign non user-graph data.
      at.on('secure', function(msg){ this.off();
        if(!at.opt.secure){ return eve.to.next(msg) }
        no("Data cannot be changed.");
      }).on.on('secure', msg);
      return;
    }

    var valid = Gun.valid, link_is = function(d,l){ return 'string' == typeof (l = valid(d)) && l }, state_ify = (Gun.state||'').ify;

    var pubcut = /[^\w_-]/; // anything not alphanumeric or _ -
    SEA.opt.pub = function(s){
      if(!s){ return }
      s = s.split('~');
      if(!s || !(s = s[1])){ return }
      s = s.split(pubcut).slice(0,2);
      if(!s || 2 != s.length){ return }
      if('@' === (s[0]||'')[0]){ return }
      s = s.slice(0,2).join('.');
      return s;
    }
    SEA.opt.stringy = function(t){
      // TODO: encrypt etc. need to check string primitive. Make as breaking change.
    }
    SEA.opt.pack = function(d,cb,k, n,s){ var tmp, f; // pack for verifying
      if(SEA.opt.check(d)){ return cb(d) }
      if(d && d['#'] && d['.'] && d['>']){ tmp = d[':']; f = 1 }
      JSON.parseAsync(f? tmp : d, function(err, meta){
        var sig = ((u !== (meta||'')[':']) && (meta||'')['~']); // or just ~ check?
        if(!sig){ cb(d); return }
        cb({m: {'#':s||d['#'],'.':k||d['.'],':':(meta||'')[':'],'>':d['>']||Gun.state.is(n, k)}, s: sig});
      });
    }
    var O = SEA.opt;
    SEA.opt.unpack = function(d, k, n){ var tmp;
      if(u === d){ return }
      if(d && (u !== (tmp = d[':']))){ return tmp }
      k = k || O.fall_key; if(!n && O.fall_val){ n = {}; n[k] = O.fall_val }
      if(!k || !n){ return }
      if(d === n[k]){ return d }
      if(!SEA.opt.check(n[k])){ return d }
      var soul = (n && n._ && n._['#']) || O.fall_soul, s = Gun.state.is(n, k) || O.fall_state;
      if(d && 4 === d.length && soul === d[0] && k === d[1] && fl(s) === fl(d[3])){
        return d[2];
      }
      if(s < SEA.opt.shuffle_attack){
        return d;
      }
    }
    SEA.opt.shuffle_attack = 1546329600000; // Jan 1, 2019
    var fl = Math.floor; // TODO: Still need to fix inconsistent state issue.
    // TODO: Potential bug? If pub/priv key starts with `-`? IDK how possible.

  })(USE, './index');
}());
;;(function(){

	function Radix(){
		var radix = function(key, val, t){
			radix.unit = 0;
			if(!t && u !== val){ 
				radix.last = (''+key < radix.last)? radix.last : ''+key;
				delete (radix.$||{})[_];
			}
			t = t || radix.$ || (radix.$ = {});
			if(!key && Object.keys(t).length){ return t }
			key = ''+key;
			var i = 0, l = key.length-1, k = key[i], at, tmp;
			while(!(at = t[k]) && i < l){
				k += key[++i];
			}
			if(!at){
				if(!each(t, function(r, s){
					var ii = 0, kk = '';
					if((s||'').length){ while(s[ii] == key[ii]){
						kk += s[ii++];
					} }
					if(kk){
						if(u === val){
							if(ii <= l){ return }
							(tmp || (tmp = {}))[s.slice(ii)] = r;
							//(tmp[_] = function $(){ $.sort = Object.keys(tmp).sort(); return $ }()); // get rid of this one, cause it is on read?
							return r;
						}
						var __ = {};
						__[s.slice(ii)] = r;
						ii = key.slice(ii);
						('' === ii)? (__[''] = val) : ((__[ii] = {})[''] = val);
						//(__[_] = function $(){ $.sort = Object.keys(__).sort(); return $ }());
						t[kk] = __;
						if(Radix.debug && 'undefined' === ''+kk){ console.log(0, kk); debugger }
						delete t[s];
						//(t[_] = function $(){ $.sort = Object.keys(t).sort(); return $ }());
						return true;
					}
				})){
					if(u === val){ return; }
					(t[k] || (t[k] = {}))[''] = val;
					if(Radix.debug && 'undefined' === ''+k){ console.log(1, k); debugger }
					//(t[_] = function $(){ $.sort = Object.keys(t).sort(); return $ }());
				}
				if(u === val){
					return tmp;
				}
			} else 
			if(i == l){
				//if(u === val){ return (u === (tmp = at['']))? at : tmp } // THIS CODE IS CORRECT, below is
				if(u === val){ return (u === (tmp = at['']))? at : ((radix.unit = 1) && tmp) } // temporary help??
				at[''] = val;
				//(at[_] = function $(){ $.sort = Object.keys(at).sort(); return $ }());
			} else {
				if(u !== val){ delete at[_] }
				//at && (at[_] = function $(){ $.sort = Object.keys(at).sort(); return $ }());
				return radix(key.slice(++i), val, at || (at = {}));
			}
		}
		return radix;
	};

	Radix.map = function rap(radix, cb, opt, pre){ pre = pre || []; // TODO: BUG: most out-of-memory crashes come from here.
		var t = ('function' == typeof radix)? radix.$ || {} : radix;
		//!opt && console.log("WHAT IS T?", JSON.stringify(t).length);
		if(!t){ return }
		if('string' == typeof t){ if(Radix.debug){ throw ['BUG:', radix, cb, opt, pre] } return; }
		var keys = (t[_]||no).sort || (t[_] = function $(){ $.sort = Object.keys(t).sort(); return $ }()).sort, rev; // ONLY 17% of ops are pre-sorted!
		//var keys = Object.keys(t).sort();
		opt = (true === opt)? {branch: true} : (opt || {});
		if(rev = opt.reverse){ keys = keys.slice(0).reverse() }
		var start = opt.start, end = opt.end, END = '\uffff';
		var i = 0, l = keys.length;
		for(;i < l; i++){ var key = keys[i], tree = t[key], tmp, p, pt;
			if(!tree || '' === key || _ === key){ continue }
			p = pre.slice(0); p.push(key);
			pt = p.join('');
			if(u !== start && pt < (start||'').slice(0,pt.length)){ continue }
			if(u !== end && (end || END) < pt){ continue }
			if(rev){ // children must be checked first when going in reverse.
				tmp = rap(tree, cb, opt, p);
				if(u !== tmp){ return tmp }
			}
			if(u !== (tmp = tree[''])){
				var yes = 1;
				if(u !== start && pt < (start||'')){ yes = 0 }
				if(u !== end && pt > (end || END)){ yes = 0 }
				if(yes){
					tmp = cb(tmp, pt, key, pre);
					if(u !== tmp){ return tmp }
				}
			} else
			if(opt.branch){
				tmp = cb(u, pt, key, pre);
				if(u !== tmp){ return tmp }
			}
			pre = p;
			if(!rev){
				tmp = rap(tree, cb, opt, pre);
				if(u !== tmp){ return tmp }
			}
			pre.pop();
		}
	};

	if(typeof window !== "undefined"){
	  window.Radix = Radix;
	} else { 
		try{ module.exports = Radix }catch(e){}
	}
	var each = Radix.object = function(o, f, r){
		for(var k in o){
			if(!o.hasOwnProperty(k)){ continue }
			if((r = f(o[k], k)) !== u){ return r }
		}
	}, no = {}, u;
	var _ = String.fromCharCode(24);
	
}());
;;(function(){

	function Radisk(opt){

		opt = opt || {};
		opt.log = opt.log || console.log;
		opt.file = String(opt.file || 'radata');
		var has = (Radisk.has || (Radisk.has = {}))[opt.file];
		if(has){ return has }

		opt.max = opt.max || (opt.memory? (opt.memory * 999 * 999) : 300000000) * 0.3;
		opt.until = opt.until || opt.wait || 250;
		opt.batch = opt.batch || (10 * 1000);
		opt.chunk = opt.chunk || (1024 * 1024 * 1); // 1MB
		opt.code = opt.code || {};
		opt.code.from = opt.code.from || '!';
		opt.jsonify = true;


		function ename(t){ return encodeURIComponent(t).replace(/\*/g, '%2A') } // TODO: Hash this also, but allow migration!
		function atomic(v){ return u !== v && (!v || 'object' != typeof v) }
		var timediate = (''+u === typeof setImmediate)? setTimeout : setImmediate;
		var puff = setTimeout.turn || timediate, u;
		var map = Radix.object;
		var ST = 0;

		if(!opt.store){
			return opt.log("ERROR: Radisk needs `opt.store` interface with `{get: fn, put: fn (, list: fn)}`!");
		}
		if(!opt.store.put){
			return opt.log("ERROR: Radisk needs `store.put` interface with `(file, data, cb)`!");
		}
		if(!opt.store.get){
			return opt.log("ERROR: Radisk needs `store.get` interface with `(file, cb)`!");
		}
		if(!opt.store.list){
			//opt.log("WARNING: `store.list` interface might be needed!");
		}

		if(''+u != typeof require){ require('./yson') }
		var parse = JSON.parseAsync || function(t,cb,r){ var u; try{ cb(u, JSON.parse(t,r)) }catch(e){ cb(e) } }
		var json = JSON.stringifyAsync || function(v,cb,r,s){ var u; try{ cb(u, JSON.stringify(v,r,s)) }catch(e){ cb(e) } }
		/*
			Any and all storage adapters should...
			1. Because writing to disk takes time, we should batch data to disk. This improves performance, and reduces potential disk corruption.
			2. If a batch exceeds a certain number of writes, we should immediately write to disk when physically possible. This caps total performance, but reduces potential loss.
		*/
		var r = function(key, data, cb, tag, DBG){
			if('function' === typeof data){
				var o = cb || {};
				cb = data;
				r.read(key, cb, o, DBG || tag);
				return;
			}
			//var tmp = (tmp = r.batch = r.batch || {})[key] = tmp[key] || {};
			//var tmp = (tmp = r.batch = r.batch || {})[key] = data;
			r.save(key, data, cb, tag, DBG);
		}
		r.save = function(key, data, cb, tag, DBG){
			var s = {key: key}, tags, f, d, q;
			s.find = function(file){ var tmp;
				s.file = file || (file = opt.code.from);
				DBG && (DBG = DBG[file] = DBG[file] || {});
				DBG && (DBG.sf = DBG.sf || +new Date);
				//console.only.i && console.log('found', file);
				if(tmp = r.disk[file]){ s.mix(u, tmp); return }
				r.parse(file, s.mix, u, DBG);
			}
			s.mix = function(err, disk){
				DBG && (DBG.sml = +new Date);
				DBG && (DBG.sm = DBG.sm || +new Date);
				if(s.err = err || s.err){ cb(err); return } // TODO: HANDLE BATCH EMIT
				var file = s.file = (disk||'').file || s.file, tmp;
				if(!disk && file !== opt.code.from){ // corrupt file?
					r.find.bad(file); // remove from dir list
					r.save(key, data, cb, tag); // try again
					return;
				}
				(disk = r.disk[file] || (r.disk[file] = disk || Radix())).file || (disk.file = file);
				if(opt.compare){
					data = opt.compare(disk(key), data, key, file);
					if(u === data){ cb(err, -1); return } // TODO: HANDLE BATCH EMIT
				}
				(s.disk = disk)(key, data);
				if(tag){
					(tmp = (tmp = disk.tags || (disk.tags = {}))[tag] || (tmp[tag] = r.tags[tag] || (r.tags[tag] = {})))[file] || (tmp[file] = r.one[tag] || (r.one[tag] = cb));
					cb = null;
				}
				DBG && (DBG.st = DBG.st || +new Date);
				//console.only.i && console.log('mix', disk.Q);
				if(disk.Q){ cb && disk.Q.push(cb); return } disk.Q = (cb? [cb] : []);
				disk.to = setTimeout(s.write, opt.until);
			}
			s.write = function(){
				DBG && (DBG.sto = DBG.sto || +new Date);
				var file = f = s.file, disk = d = s.disk;
				q = s.q = disk.Q;
				tags = s.tags = disk.tags;
				delete disk.Q;
				delete r.disk[file];
				delete disk.tags;
				//console.only.i && console.log('write', file, disk, 'was saving:', key, data);
				r.write(file, disk, s.ack, u, DBG);
			}
			s.ack = function(err, ok){
				DBG && (DBG.sa = DBG.sa || +new Date);
				DBG && (DBG.sal = q.length);
				var ack, tmp;
				// TODO!!!! CHANGE THIS INTO PUFF!!!!!!!!!!!!!!!!
				for(var id in r.tags){
					if(!r.tags.hasOwnProperty(id)){ continue } var tag = r.tags[id];
					if((tmp = r.disk[f]) && (tmp = tmp.tags) && tmp[tag]){ continue }
					ack = tag[f];
					delete tag[f];
					var ne; for(var k in tag){ if(tag.hasOwnProperty(k)){ ne = true; break } } // is not empty?
					if(ne){ continue } //if(!obj_empty(tag)){ continue }
					delete r.tags[tag];
					ack && ack(err, ok);
				}
				!q && (q = '');
				var l = q.length, i = 0;
				// TODO: PERF: Why is acks so slow, what work do they do??? CHECK THIS!!
				// TODO: PERF: Why is acks so slow, what work do they do??? CHECK THIS!!
				// TODO: PERF: Why is acks so slow, what work do they do??? CHECK THIS!!
				// TODO: PERF: Why is acks so slow, what work do they do??? CHECK THIS!!
				// TODO: PERF: Why is acks so slow, what work do they do??? CHECK THIS!!
				// TODO: PERF: Why is acks so slow, what work do they do??? CHECK THIS!!
				// TODO: PERF: Why is acks so slow, what work do they do??? CHECK THIS!!
				var S = +new Date;
				for(;i < l; i++){ (ack = q[i]) && ack(err, ok) }
				console.STAT && console.STAT(S, +new Date - S, 'rad acks', ename(s.file));
				console.STAT && console.STAT(S, q.length, 'rad acks #', ename(s.file));
			}
			cb || (cb = function(err, ok){ // test delete!
				if(!err){ return }
			});
			//console.only.i && console.log('save', key);
			r.find(key, s.find);
    }
    r.disk = {};
    r.one = {};
    r.tags = {};

		/*
			Any storage engine at some point will have to do a read in order to write.
			This is true of even systems that use an append only log, if they support updates.
			Therefore it is unavoidable that a read will have to happen,
			the question is just how long you delay it.
		*/
		var RWC = 0;
		r.write = function(file, rad, cb, o, DBG){
			if(!rad){ cb('No radix!'); return }
			o = ('object' == typeof o)? o : {force: o};
			var f = function Fractal(){}, a, b;
			f.text = '';
			f.file = file = rad.file || (rad.file = file);
			if(!file){ cb('What file?'); return }
			f.write = function(){
				var text = rad.raw = f.text;
				r.disk[file = rad.file || f.file || file] = rad;
				var S = +new Date;
				DBG && (DBG.wd = S);
				//console.only.i && console.log('add', file);
				r.find.add(file, function add(err){
					DBG && (DBG.wa = +new Date);
					if(err){ cb(err); return }
					//console.only.i && console.log('disk', file, text);
					opt.store.put(ename(file), text, function safe(err, ok){
						DBG && (DBG.wp = +new Date);
						console.STAT && console.STAT(S, ST = +new Date - S, "wrote disk", JSON.stringify(file), ++RWC, 'total all writes.');
						//console.only.i && console.log('done', err, ok || 1, cb);
						cb(err, ok || 1);
						if(!rad.Q){ delete r.disk[file] } // VERY IMPORTANT! Clean up memory, but not if there is already queued writes on it!
					});
				});
			}
			f.split = function(){
				var S = +new Date;
				DBG && (DBG.wf = S);
				f.text = '';
				if(!f.count){ f.count = 0;
					Radix.map(rad, function count(){ f.count++ }); // TODO: Perf? Any faster way to get total length?
				}
				DBG && (DBG.wfc = f.count);
				f.limit = Math.ceil(f.count/2);
				var SC = f.count;
				f.count = 0;
				DBG && (DBG.wf1 = +new Date);
				f.sub = Radix();
				Radix.map(rad, f.slice, {reverse: 1}); // IMPORTANT: DO THIS IN REVERSE, SO LAST HALF OF DATA MOVED TO NEW FILE BEFORE DROPPING FROM CURRENT FILE.
				DBG && (DBG.wf2 = +new Date);
				r.write(f.end, f.sub, f.both, o);
				DBG && (DBG.wf3 = +new Date);
				f.hub = Radix();
				Radix.map(rad, f.stop);
				DBG && (DBG.wf4 = +new Date);
				r.write(rad.file, f.hub, f.both, o);
				DBG && (DBG.wf5 = +new Date);
				console.STAT && console.STAT(S, +new Date - S, "rad split", ename(rad.file), SC);
				return true;
			}
			f.slice = function(val, key){
				f.sub(f.end = key, val);
				if(f.limit <= (++f.count)){ return true }
			}
			f.stop = function(val, key){
				if(key >= f.end){ return true }
				f.hub(key, val);
			}
			f.both = function(err, ok){
				DBG && (DBG.wfd = +new Date);
				if(b){ cb(err || b); return }
				if(a){ cb(err, ok); return }
				a = true;
				b = err;
			}
			f.each = function(val, key, k, pre){
				if(u !== val){ f.count++ }
				if(opt.max <= (val||'').length){ return cb("Data too big!"), true }
				var enc = Radisk.encode(pre.length) +'#'+ Radisk.encode(k) + (u === val? '' : ':'+ Radisk.encode(val)) +'\n';
				if((opt.chunk < f.text.length + enc.length) && (1 < f.count) && !o.force){
					return f.split();
				}
				f.text += enc;
			}
			//console.only.i && console.log('writing');
			if(opt.jsonify){ r.write.jsonify(f, rad, cb, o, DBG); return } // temporary testing idea
			if(!Radix.map(rad, f.each, true)){ f.write() }
		}

		r.write.jsonify = function(f, rad, cb, o, DBG){
			var raw;
			var S = +new Date;
			DBG && (DBG.w = S);
			try{raw = JSON.stringify(rad.$);
			}catch(e){ cb("Cannot radisk!"); return }
			DBG && (DBG.ws = +new Date);
			console.STAT && console.STAT(S, +new Date - S, "rad stringified JSON");
			if(opt.chunk < raw.length && !o.force){
				var c = 0;
				Radix.map(rad, function(){
					if(c++){ return true } // more than 1 item
				});
				if(c > 1){
					return f.split();
				}
			}
			f.text = raw;
			f.write();
		}

		r.range = function(tree, o){
			if(!tree || !o){ return }
			if(u === o.start && u === o.end){ return tree }
			if(atomic(tree)){ return tree }
			var sub = Radix();
			Radix.map(tree, function(v,k){ sub(k,v) }, o); // ONLY PLACE THAT TAKES TREE, maybe reduce API for better perf?
			return sub('');
		}

		;(function(){
			r.read = function(key, cb, o, DBG){
				o = o || {};
				var g = {key: key};
				g.find = function(file){ var tmp;
					g.file = file || (file = opt.code.from);
					DBG && (DBG = DBG[file] = DBG[file] || {});
					DBG && (DBG.rf = DBG.rf || +new Date);
					if(tmp = r.disk[g.file = file]){ g.check(u, tmp); return }
					r.parse(file, g.check, u, DBG);
				}
				g.get = function(err, disk, info){
					DBG && (DBG.rgl = +new Date);
					DBG && (DBG.rg = DBG.rg || +new Date);
					if(g.err = err || g.err){ cb(err); return }
					var file = g.file = (disk||'').file || g.file;
					if(!disk && file !== opt.code.from){ // corrupt file?
						r.find.bad(file); // remove from dir list
						r.read(key, cb, o); // try again
						return;
					}
					disk = r.disk[file] || (r.disk[file] = disk);
					if(!disk){ cb(file === opt.code.from? u : "No file!"); return }
					disk.file || (disk.file = file);
					var data = r.range(disk(key), o);
					DBG && (DBG.rr = +new Date);
					o.unit = disk.unit;
					o.chunks = (o.chunks || 0) + 1;
					o.parsed = (o.parsed || 0) + ((info||'').parsed||(o.chunks*opt.chunk));
					o.more = 1;
					o.next = u;
					Radix.map(r.list, function next(v,f){
						if(!v || file === f){ return }
						o.next = f;
						return 1;
					}, o.reverse? {reverse: 1, end: file} : {start: file});
					DBG && (DBG.rl = +new Date);
					if(!o.next){ o.more = 0 }
					if(o.next){
						if(!o.reverse && ((key < o.next && 0 != o.next.indexOf(key)) || (u !== o.end && (o.end || '\uffff') < o.next))){ o.more = 0 }
						if(o.reverse && ((key > o.next && 0 != key.indexOf(o.next)) || ((u !== o.start && (o.start || '') > o.next && file <= o.start)))){ o.more = 0 }
					}
					//console.log(5, process.memoryUsage().heapUsed);
					if(!o.more){ cb(g.err, data, o); return }
					if(data){ cb(g.err, data, o) }
					if(o.parsed >= o.limit){ return }
					var S = +new Date;
					DBG && (DBG.rm = S);
					var next = o.next;
					timediate(function(){
						console.STAT && console.STAT(S, +new Date - S, 'rad more');
						r.parse(next, g.check);
					},0);
				}
				g.check = function(err, disk, info){
					//console.log(4, process.memoryUsage().heapUsed);
					g.get(err, disk, info);
					if(!disk || disk.check){ return } disk.check = 1;
					var S = +new Date;
					(info || (info = {})).file || (info.file = g.file);
					Radix.map(disk, function(val, key){
						// assume in memory for now, since both write/read already call r.find which will init it.
						r.find(key, function(file){
							if((file || (file = opt.code.from)) === info.file){ return }
							var id = (''+Math.random()).slice(-3);
							puff(function(){
							r.save(key, val, function ack(err, ok){
								if(err){ r.save(key, val, ack); return } // ad infinitum???
								// TODO: NOTE!!! Mislocated data could be because of a synchronous `put` from the `g.get(` other than perf shouldn't we do the check first before acking?
								console.STAT && console.STAT("MISLOCATED DATA CORRECTED", id, ename(key), ename(info.file), ename(file));
							});
							},0);
						})
					});
					console.STAT && console.STAT(S, +new Date - S, "rad check");
				}
				r.find(key || (o.reverse? (o.end||'') : (o.start||'')), g.find); 
			}
			function rev(a,b){ return b }
			var revo = {reverse: true};
		}());

		;(function(){
			/*
				Let us start by assuming we are the only process that is
				changing the directory or bucket. Not because we do not want
				to be multi-process/machine, but because we want to experiment
				with how much performance and scale we can get out of only one.
				Then we can work on the harder problem of being multi-process.
			*/
			var RPC = 0;
			var Q = {}, s = String.fromCharCode(31);
			r.parse = function(file, cb, raw, DBG){ var q;
				if(!file){ return cb(); }
				if(q = Q[file]){ q.push(cb); return } q = Q[file] = [cb];
				var p = function Parse(){}, info = {file: file};
				(p.disk = Radix()).file = file;
				p.read = function(err, data){ var tmp;
					DBG && (DBG.rpg = +new Date);
					console.STAT && console.STAT(S, +new Date - S, 'read disk', JSON.stringify(file), ++RPC, 'total all parses.');
					//console.log(2, process.memoryUsage().heapUsed);
					if((p.err = err) || (p.not = !data)){
						delete Q[file];
						p.map(q, p.ack);
						return;
					}
					if('string' !== typeof data){
						try{
							if(opt.max <= data.length){
								p.err = "Chunk too big!";
							} else {
								data = data.toString(); // If it crashes, it crashes here. How!?? We check size first!
							}
						}catch(e){ p.err = e }
						if(p.err){
							delete Q[file];
							p.map(q, p.ack);
							return;
						}
					}
					info.parsed = data.length;
					DBG && (DBG.rpl = info.parsed);
					DBG && (DBG.rpa = q.length);
					S = +new Date;
					if(!(opt.jsonify || '{' === data[0])){
						p.radec(err, data);
						return;
					}
					parse(data, function(err, tree){
						//console.log(3, process.memoryUsage().heapUsed);
						if(!err){
							delete Q[file];
							p.disk.$ = tree;
							console.STAT && (ST = +new Date - S) > 9 && console.STAT(S, ST, 'rad parsed JSON');
							DBG && (DBG.rpd = +new Date);
							p.map(q, p.ack); // hmmm, v8 profiler can't see into this cause of try/catch?
							return;
						}
						if('{' === data[0]){
							delete Q[file];
							p.err = tmp || "JSON error!";
							p.map(q, p.ack);
							return;
						}
						p.radec(err, data);
					});
				}
				p.map = function(){ // switch to setTimeout.each now?
					if(!q || !q.length){ return }
					//var i = 0, l = q.length, ack;
					var S = +new Date;
					var err = p.err, data = p.not? u : p.disk;
					var i = 0, ack; while(i < 9 && (ack = q[i++])){ ack(err, data, info) } // too much?
					console.STAT && console.STAT(S, +new Date - S, 'rad packs', ename(file));
					console.STAT && console.STAT(S, i, 'rad packs #', ename(file)); 
					if(!(q = q.slice(i)).length){ return }
					puff(p.map, 0);
				}
				p.ack = function(cb){
					if(!cb){ return }
					if(p.err || p.not){
						cb(p.err, u, info);
						return;
					}
					cb(u, p.disk, info);
				}
				p.radec = function(err, data){
					delete Q[file];
					S = +new Date;
					var tmp = p.split(data), pre = [], i, k, v;
					if(!tmp || 0 !== tmp[1]){
						p.err = "File '"+file+"' does not have root radix! ";
						p.map(q, p.ack);
						return; 
					}
					while(tmp){
						k = v = u;
						i = tmp[1];
						tmp = p.split(tmp[2])||'';
						if('#' == tmp[0]){
							k = tmp[1];
							pre = pre.slice(0,i);
							if(i <= pre.length){
								pre.push(k);
							}
						}
						tmp = p.split(tmp[2])||'';
						if('\n' == tmp[0]){ continue }
						if('=' == tmp[0] || ':' == tmp[0]){ v = tmp[1] }
						if(u !== k && u !== v){ p.disk(pre.join(''), v) }
						tmp = p.split(tmp[2]);
					}
					console.STAT && console.STAT(S, +new Date - S, 'parsed RAD');
					p.map(q, p.ack);
				};
				p.split = function(t){
					if(!t){ return }
					var l = [], o = {}, i = -1, a = '', b, c;
					i = t.indexOf(s);
					if(!t[i]){ return }
					a = t.slice(0, i);
					l[0] = a;
					l[1] = b = Radisk.decode(t.slice(i), o);
					l[2] = t.slice(i + o.i);
					return l;
				}
				if(r.disk){ raw || (raw = (r.disk[file]||'').raw) }
				var S = +new Date, SM, SL;
				DBG && (DBG.rp = S);
				if(raw){ return puff(function(){ p.read(u, raw) }, 0) }
				opt.store.get(ename(file), p.read);
				// TODO: What if memory disk gets filled with updates, and we get an old one back?
			}
		}());

		;(function(){
			var dir, f = String.fromCharCode(28), Q;
			r.find = function(key, cb){
				if(!dir){
					if(Q){ Q.push([key, cb]); return } Q = [[key, cb]];
					r.parse(f, init);
					return;
				}
				Radix.map(r.list = dir, function(val, key){
					if(!val){ return }
					return cb(key) || true;
				}, {reverse: 1, end: key}) || cb(opt.code.from);
			}
			r.find.add = function(file, cb){
				var has = dir(file);
				if(has || file === f){ cb(u, 1); return }
				dir(file, 1);
				cb.found = (cb.found || 0) + 1;
				r.write(f, dir, function(err, ok){
					if(err){ cb(err); return }
					cb.found = (cb.found || 0) - 1;
					if(0 !== cb.found){ return }
					cb(u, 1);
				}, true);
			}
			r.find.bad = function(file, cb){
				dir(file, 0);
				r.write(f, dir, cb||noop);
			}
			function init(err, disk){
				if(err){
					opt.log('list', err);
					setTimeout(function(){ r.parse(f, init) }, 1000);
					return;
				}
				if(disk){ drain(disk); return }
				dir = dir || disk || Radix();
				if(!opt.store.list){ drain(dir); return }
				// import directory.
				opt.store.list(function(file){
					if(!file){ drain(dir); return }
					r.find.add(file, noop);
				});
			}
			function drain(rad, tmp){
				dir = dir || rad;
				dir.file = f;
				tmp = Q; Q = null;
				map(tmp, function(arg){
					r.find(arg[0], arg[1]);
				});
			}
		}());

		try{ !Gun.window && require('./radmigtmp')(r) }catch(e){}

		var noop = function(){}, RAD, u;
		Radisk.has[opt.file] = r;
		return r;
	}

	;(function(){
		var _ = String.fromCharCode(31), u;
		Radisk.encode = function(d, o, s){ s = s || _;
			var t = s, tmp;
			if(typeof d == 'string'){
				var i = d.indexOf(s);
				while(i != -1){ t += s; i = d.indexOf(s, i+1) }
				return t + '"' + d + s;
			} else
			if(d && d['#'] && 1 === globalThis.Object.keys(d).length){
				return t + '#' + tmp + t;
			} else
			if('number' == typeof d){
				return t + '+' + (d||0) + t;
			} else
			if(null === d){
				return t + ' ' + t;
			} else
			if(true === d){
				return t + '+' + t;
			} else
			if(false === d){
				return t + '-' + t;
			}// else
			//if(binary){}
		}
		Radisk.decode = function(t, o, s){ s = s || _;
			var d = '', i = -1, n = 0, c, p;
			if(s !== t[0]){ return }
			while(s === t[++i]){ ++n }
			p = t[c = n] || true;
			while(--n >= 0){ i = t.indexOf(s, i+1) }
			if(i == -1){ i = t.length }
			d = t.slice(c+1, i);
			if(o){ o.i = i+1 }
			if('"' === p){
				return d;
			} else
			if('#' === p){
				return {'#':d};
			} else
			if('+' === p){
				if(0 === d.length){
					return true;
				}
				return parseFloat(d);
			} else
			if(' ' === p){
				return null;
			} else
			if('-' === p){
				return false;
			}
		}
	}());

	if(typeof window !== "undefined"){
	  var Gun = window.Gun;
	  var Radix = window.Radix;
	  window.Radisk = Radisk;
	} else { 
	  var Gun = require('../gun');
		var Radix = require('./radix');
		//var Radix = require('./radix2'); Radisk = require('./radisk2');
		try{ module.exports = Radisk }catch(e){}
	}

	Radisk.Radix = Radix;

}());
;var Gun = (typeof window !== "undefined")? window.Gun : require('../gun');

Gun.on('create', function(root){
    if(Gun.TESTING){ root.opt.file = 'radatatest' }
    this.to.next(root);
    var opt = root.opt, empty = {}, u;
    if(false === opt.rad || false === opt.radisk){ return }
    var Radisk = (Gun.window && Gun.window.Radisk) || require('./radisk');
    var Radix = Radisk.Radix;
    var dare = Radisk(opt), esc = String.fromCharCode(27);
    var ST = 0;
 
    root.on('put', function(msg){
        this.to.next(msg);
        if((msg._||'').rad){ return } // don't save what just came from a read.
        var id = msg['#'], put = msg.put, soul = put['#'], key = put['.'], val = put[':'], state = put['>'], tmp;
        var DBG = (msg._||'').DBG; DBG && (DBG.sp = DBG.sp || +new Date);
        //var lot = (msg._||'').lot||''; count[id] = (count[id] || 0) + 1; 
        var S = (msg._||'').RPS || ((msg._||'').RPS = +new Date);
        //console.log("PUT ------->>>", soul,key, val, state);
        //dare(soul+esc+key, {':': val, '>': state}, dare.one[id] || function(err, ok){
        dare(soul+esc+key, {':': val, '>': state}, function(err, ok){
            //console.log("<<<------- PAT", soul,key, val, state, 'in', +new Date - S);
            DBG && (DBG.spd = DBG.spd || +new Date);
            console.STAT && console.STAT(S, +new Date - S, 'put');
            //if(!err && count[id] !== lot.s){ console.log(err = "Disk count not same as ram count."); console.STAT && console.STAT(+new Date, lot.s - count[id], 'put ack != count') } delete count[id];
            if(err){ root.on('in', {'@': id, err: err, DBG: DBG}); return }
            root.on('in', {'@': id, ok: ok, DBG: DBG});
        //}, id, DBG && (DBG.r = DBG.r || {}));
        }, false && id, DBG && (DBG.r = DBG.r || {}));
        DBG && (DBG.sps = DBG.sps || +new Date);
    });
    var count = {}, obj_empty = Object.empty;
 
    root.on('get', function(msg){
        this.to.next(msg);
        var ctx = msg._||'', DBG = ctx.DBG = msg.DBG; DBG && (DBG.sg = +new Date);
        var id = msg['#'], get = msg.get, soul = msg.get['#'], has = msg.get['.']||'', o = {}, graph, lex, key, tmp, force;
        if('string' == typeof soul){
            key = soul;
        } else 
        if(soul){
            if(u !== (tmp = soul['*'])){ o.limit = force = 1 }
            if(u !== soul['>']){ o.start = soul['>'] }
            if(u !== soul['<']){ o.end = soul['<'] }
            key = force? (''+tmp) : tmp || soul['='];
            force = null;
        }
        if(key && !o.limit){ // a soul.has must be on a soul, and not during soul*
            if('string' == typeof has){
                key = key+esc+(o.atom = has);
            } else 
            if(has){
                if(u !== has['>']){ o.start = has['>']; o.limit = 1 }
                if(u !== has['<']){ o.end = has['<']; o.limit = 1 }
                if(u !== (tmp = has['*'])){ o.limit = force = 1 }
                if(key){ key = key+esc + (force? (''+(tmp||'')) : tmp || (o.atom = has['='] || '')) }
            }
        }
        if((tmp = get['%']) || o.limit){
            o.limit = (tmp <= (o.pack || (1000 * 100)))? tmp : 1;
        }
        if(has['-'] || (soul||{})['-'] || get['-']){ o.reverse = true }
        if((tmp = (root.next||'')[soul]) && tmp.put){
            if(o.atom){
                tmp = (tmp.next||'')[o.atom] ;
                if(tmp && tmp.rad){ return }
            } else
            if(tmp && tmp.rad){ return }
        }
        var now = Gun.state();
        var S = (+new Date), C = 0, SPT = 0; // STATS!
        DBG && (DBG.sgm = S);
        //var GID = String.random(3); console.log("GET ------->>>", GID, key, o, '?', get);
        dare(key||'', function(err, data, info){
            //console.log("<<<------- GOT", GID, +new Date - S, err, data);
            DBG && (DBG.sgr = +new Date);
            DBG && (DBG.sgi = info);
            try{opt.store.stats.get.time[statg % 50] = (+new Date) - S; ++statg;
                opt.store.stats.get.count++;
                if(err){ opt.store.stats.get.err = err }
            }catch(e){} // STATS!
            //if(u === data && info.chunks > 1){ return } // if we already sent a chunk, ignore ending empty responses. // this causes tests to fail.
            console.STAT && console.STAT(S, +new Date - S, 'got', JSON.stringify(key)); S = +new Date;
            info = info || '';
            var va, ve;
            if(info.unit && data && u !== (va = data[':']) && u !== (ve = data['>'])){ // new format
                var tmp = key.split(esc), so = tmp[0], ha = tmp[1];
                (graph = graph || {})[so] = Gun.state.ify(graph[so], ha, ve, va, so);
                root.$.get(so).get(ha)._.rad = now;
                // REMEMBER TO ADD _rad TO NODE/SOUL QUERY!
            } else
            if(data){ // old code path
                if(typeof data !== 'string'){
                    if(o.atom){
                        data = u;
                    } else {
                        Radix.map(data, each, o); // IS A RADIX TREE, NOT FUNCTION!
                    }
                }
                if(!graph && data){ each(data, '') }
                // TODO: !has what about soul lookups?
                if(!o.atom && !has & 'string' == typeof soul && !o.limit && !o.more){
                    root.$.get(soul)._.rad = now;
                }
            }
            DBG && (DBG.sgp = +new Date);
            // TODO: PERF NOTES! This is like 0.2s, but for each ack, or all? Can you cache these preps?
            // TODO: PERF NOTES! This is like 0.2s, but for each ack, or all? Can you cache these preps?
            // TODO: PERF NOTES! This is like 0.2s, but for each ack, or all? Can you cache these preps?
            // TODO: PERF NOTES! This is like 0.2s, but for each ack, or all? Can you cache these preps?
            // TODO: PERF NOTES! This is like 0.2s, but for each ack, or all? Can you cache these preps?
            // Or benchmark by reusing first start date.
            if(console.STAT && (ST = +new Date - S) > 9){ console.STAT(S, ST, 'got prep time'); console.STAT(S, C, 'got prep #') } SPT += ST; C = 0; S = +new Date;
            var faith = function(){}; faith.faith = true; faith.rad = get; // HNPERF: We're testing performance improvement by skipping going through security again, but this should be audited.
            root.on('in', {'@': id, put: graph, '%': info.more? 1 : u, err: err? err : u, _: faith, DBG: DBG});
            console.STAT && (ST = +new Date - S) > 9 && console.STAT(S, ST, 'got emit', Object.keys(graph||{}).length);
            graph = u; // each is outside our scope, we have to reset graph to nothing!
        }, o, DBG && (DBG.r = DBG.r || {}));
        DBG && (DBG.sgd = +new Date);
        console.STAT && (ST = +new Date - S) > 9 && console.STAT(S, ST, 'get call'); // TODO: Perf: this was half a second??????
        function each(val, has, a,b){ // TODO: THIS CODE NEEDS TO BE FASTER!!!!
            C++;
            if(!val){ return }
            has = (key+has).split(esc);
            var soul = has.slice(0,1)[0];
            has = has.slice(-1)[0];
            if(o.limit && o.limit <= o.count){ return true }
            var va, ve, so = soul, ha = has;
            //if(u !== (va = val[':']) && u !== (ve = val['>'])){ // THIS HANDLES NEW CODE!
            if('string' != typeof val){ // THIS HANDLES NEW CODE!
                va = val[':']; ve = val['>'];
                (graph = graph || {})[so] = Gun.state.ify(graph[so], ha, ve, va, so);
                //root.$.get(so).get(ha)._.rad = now;
                o.count = (o.count || 0) + ((va||'').length || 9);
                return;
            }
            o.count = (o.count || 0) + val.length;
            var tmp = val.lastIndexOf('>');
            var state = Radisk.decode(val.slice(tmp+1), null, esc);
            val = Radisk.decode(val.slice(0,tmp), null, esc);
            (graph = graph || {})[soul] = Gun.state.ify(graph[soul], has, state, val, soul);
        }
    });
    var val_is = Gun.valid;
    (opt.store||{}).stats = {get:{time:{}, count:0}, put: {time:{}, count:0}}; // STATS!
    var statg = 0, statp = 0; // STATS!
});
;;(function(){
/* // from @jabis
if (navigator.storage && navigator.storage.estimate) {
  const quota = await navigator.storage.estimate();
  // quota.usage -> Number of bytes used.
  // quota.quota -> Maximum number of bytes available.
  const percentageUsed = (quota.usage / quota.quota) * 100;
  console.log(`You've used ${percentageUsed}% of the available storage.`);
  const remaining = quota.quota - quota.usage;
  console.log(`You can write up to ${remaining} more bytes.`);
}
*/
  function Store(opt){
    opt = opt || {};
    opt.file = String(opt.file || 'radata');
    var store = Store[opt.file], db = null, u;

    if(store){
      console.log("Warning: reusing same IndexedDB store and options as 1st.");
      return Store[opt.file];
    }
    store = Store[opt.file] = function(){};

    try{opt.indexedDB = opt.indexedDB || Store.indexedDB || indexedDB}catch(e){}
    try{if(!opt.indexedDB || 'file:' == location.protocol){
      var s = store.d || (store.d = {});
      store.put = function(f, d, cb){ s[f] = d; setTimeout(function(){ cb(null, 1) },250) };
      store.get = function(f, cb){ setTimeout(function(){ cb(null, s[f] || u) },5) };
      console.log('Warning: No indexedDB exists to persist data to!');
      return store;
    }}catch(e){}
    

    store.start = function(){
      var o = indexedDB.open(opt.file, 1);
      o.onupgradeneeded = function(eve){ (eve.target.result).createObjectStore(opt.file) }
      o.onsuccess = function(){ db = o.result }
      o.onerror = function(eve){ console.log(eve||1); }
    }; store.start();

    store.put = function(key, data, cb){
      if(!db){ setTimeout(function(){ store.put(key, data, cb) },1); return }
      var tx = db.transaction([opt.file], 'readwrite');
      var obj = tx.objectStore(opt.file);
      var req = obj.put(data, ''+key);
      req.onsuccess = obj.onsuccess = tx.onsuccess = function(){ cb(null, 1) }
      req.onabort = obj.onabort = tx.onabort = function(eve){ cb(eve||'put.tx.abort') }
      req.onerror = obj.onerror = tx.onerror = function(eve){ cb(eve||'put.tx.error') }
    }

    store.get = function(key, cb){
      if(!db){ setTimeout(function(){ store.get(key, cb) },9); return }
      var tx = db.transaction([opt.file], 'readonly');
      var obj = tx.objectStore(opt.file);
      var req = obj.get(''+key);
      req.onsuccess = function(){ cb(null, req.result) }
      req.onabort = function(eve){ cb(eve||4) }
      req.onerror = function(eve){ cb(eve||5) }
    }
    setInterval(function(){ db && db.close(); db = null; store.start() }, 1000 * 15); // reset webkit bug?
    return store;
  }

  if(typeof window !== "undefined"){
    (Store.window = window).RindexedDB = Store;
    Store.indexedDB = window.indexedDB; // safari bug
  } else {
    try{ module.exports = Store }catch(e){}
  }

  try{
    var Gun = Store.window.Gun || require('../gun');
    Gun.on('create', function(root){
      this.to.next(root);
      root.opt.store = root.opt.store || Store(root.opt);
    });
  }catch(e){}

}());
    } finally {
        return window
    }
};
globalThis.Gun = init().Gun;
undefined;
