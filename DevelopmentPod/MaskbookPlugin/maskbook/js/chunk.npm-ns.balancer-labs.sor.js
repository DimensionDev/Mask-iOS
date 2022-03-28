"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[211],{

/***/ 42389:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const bignumber_1 = __webpack_require__(40199);
exports.BONE = new bignumber_1.BigNumber(10).pow(18);
exports.TWOBONE = exports.BONE.times(new bignumber_1.BigNumber(2));
const BPOW_PRECISION = exports.BONE.idiv(new bignumber_1.BigNumber(10).pow(10));
exports.MAX_IN_RATIO = exports.BONE.times(new bignumber_1.BigNumber(0.499999999999999)); // Leave some room for bignumber rounding errors
exports.MAX_OUT_RATIO = exports.BONE.times(new bignumber_1.BigNumber(0.333333333333333)); // Leave some room for bignumber rounding errors
function scale(input, decimalPlaces) {
    const scalePow = new bignumber_1.BigNumber(decimalPlaces.toString());
    const scaleMul = new bignumber_1.BigNumber(10).pow(scalePow);
    return input.times(scaleMul);
}
exports.scale = scale;
function bnum(val) {
    return new bignumber_1.BigNumber(val.toString());
}
exports.bnum = bnum;
function calcOutGivenIn(tokenBalanceIn, tokenWeightIn, tokenBalanceOut, tokenWeightOut, tokenAmountIn, swapFee) {
    let weightRatio = bdiv(tokenWeightIn, tokenWeightOut);
    let adjustedIn = exports.BONE.minus(swapFee);
    adjustedIn = bmul(tokenAmountIn, adjustedIn);
    let y = bdiv(tokenBalanceIn, tokenBalanceIn.plus(adjustedIn));
    let foo = bpow(y, weightRatio);
    let bar = exports.BONE.minus(foo);
    let tokenAmountOut = bmul(tokenBalanceOut, bar);
    return tokenAmountOut;
}
exports.calcOutGivenIn = calcOutGivenIn;
function calcInGivenOut(tokenBalanceIn, tokenWeightIn, tokenBalanceOut, tokenWeightOut, tokenAmountOut, swapFee) {
    let weightRatio = bdiv(tokenWeightOut, tokenWeightIn);
    let diff = tokenBalanceOut.minus(tokenAmountOut);
    let y = bdiv(tokenBalanceOut, diff);
    let foo = bpow(y, weightRatio);
    foo = foo.minus(exports.BONE);
    let tokenAmountIn = exports.BONE.minus(swapFee);
    tokenAmountIn = bdiv(bmul(tokenBalanceIn, foo), tokenAmountIn);
    return tokenAmountIn;
}
exports.calcInGivenOut = calcInGivenOut;
function calcSpotPrice(tokenBalanceIn, tokenWeightIn, tokenBalanceOut, tokenWeightOut, swapFee) {
    const numer = bdiv(tokenBalanceIn, tokenWeightIn);
    const denom = bdiv(tokenBalanceOut, tokenWeightOut);
    const ratio = bdiv(numer, denom);
    const scale = bdiv(exports.BONE, bsubSign(exports.BONE, swapFee).res);
    return bmul(ratio, scale);
}
exports.calcSpotPrice = calcSpotPrice;
function bmul(a, b) {
    let c0 = a.times(b);
    let c1 = c0.plus(exports.BONE.div(new bignumber_1.BigNumber(2)));
    let c2 = c1.idiv(exports.BONE);
    return c2;
}
exports.bmul = bmul;
function bdiv(a, b) {
    let c0 = a.times(exports.BONE);
    let c1 = c0.plus(b.div(new bignumber_1.BigNumber(2)));
    let c2 = c1.idiv(b);
    return c2;
}
exports.bdiv = bdiv;
function btoi(a) {
    return a.idiv(exports.BONE);
}
exports.btoi = btoi;
function bfloor(a) {
    return btoi(a).times(exports.BONE);
}
exports.bfloor = bfloor;
function bsubSign(a, b) {
    if (a.gte(b)) {
        let res = a.minus(b);
        let bool = false;
        return { res, bool };
    }
    else {
        let res = b.minus(a);
        let bool = true;
        return { res, bool };
    }
}
exports.bsubSign = bsubSign;
function bpowi(a, n) {
    let z = !n.modulo(new bignumber_1.BigNumber(2)).eq(new bignumber_1.BigNumber(0)) ? a : exports.BONE;
    for (n = n.idiv(new bignumber_1.BigNumber(2)); !n.eq(new bignumber_1.BigNumber(0)); n = n.idiv(new bignumber_1.BigNumber(2))) {
        a = bmul(a, a);
        if (!n.modulo(new bignumber_1.BigNumber(2)).eq(new bignumber_1.BigNumber(0))) {
            z = bmul(z, a);
        }
    }
    return z;
}
function bpow(base, exp) {
    let whole = bfloor(exp);
    let remain = exp.minus(whole);
    let wholePow = bpowi(base, btoi(whole));
    if (remain.eq(new bignumber_1.BigNumber(0))) {
        return wholePow;
    }
    let partialResult = bpowApprox(base, remain, BPOW_PRECISION);
    return bmul(wholePow, partialResult);
}
exports.bpow = bpow;
function bpowApprox(base, exp, precision) {
    let a = exp;
    let { res: x, bool: xneg } = bsubSign(base, exports.BONE);
    let term = exports.BONE;
    let sum = term;
    let negative = false;
    for (let i = 1; term.gte(precision); i++) {
        let bigK = new bignumber_1.BigNumber(i).times(exports.BONE);
        let { res: c, bool: cneg } = bsubSign(a, bigK.minus(exports.BONE));
        term = bmul(term, bmul(c, x));
        term = bdiv(term, bigK);
        if (term.eq(new bignumber_1.BigNumber(0)))
            break;
        if (xneg)
            negative = !negative;
        if (cneg)
            negative = !negative;
        if (negative) {
            sum = sum.minus(term);
        }
        else {
            sum = sum.plus(term);
        }
    }
    return sum;
}


/***/ }),

/***/ 55543:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const address_1 = __webpack_require__(99747);
const contracts_1 = __webpack_require__(58063);
const solidity_1 = __webpack_require__(85396);
const bignumber_1 = __webpack_require__(40199);
const bmath_1 = __webpack_require__(42389);
const FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';
const INIT_CODE_HASH = '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f';
function getAddress(tokenA, tokenB) {
    const tokens = tokenA.toLowerCase() < tokenB.toLowerCase()
        ? [tokenA, tokenB]
        : [tokenB, tokenA];
    let address = address_1.getCreate2Address(FACTORY_ADDRESS, solidity_1.keccak256(['bytes'], [solidity_1.pack(['address', 'address'], [tokens[0], tokens[1]])]), INIT_CODE_HASH);
    return address;
}
exports.getAddress = getAddress;
function getOnChainReserves(PairAddr, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        const uniswapV2PairAbi = __webpack_require__(30635);
        const pairContract = new contracts_1.Contract(PairAddr, uniswapV2PairAbi, provider);
        let [reserve0, reserve1, blockTimestamp] = yield pairContract.getReserves();
        return [reserve0, reserve1];
    });
}
exports.getOnChainReserves = getOnChainReserves;
function getTokenWeiPrice(TokenAddr, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        const WETH = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
        if (TokenAddr.toLowerCase() === WETH.toLowerCase())
            return new bignumber_1.BigNumber(bmath_1.BONE);
        let addr = getAddress(WETH, TokenAddr);
        let [reserve0, reserve1] = yield getOnChainReserves(addr, provider);
        const numerator = new bignumber_1.BigNumber(reserve0.toString());
        const denominator = new bignumber_1.BigNumber(reserve1.toString());
        const price1eth = numerator.div(denominator);
        return price1eth.times(bmath_1.BONE);
    });
}
exports.getTokenWeiPrice = getTokenWeiPrice;
function calculateTotalSwapCost(TokenPrice, SwapCost, GasPriceWei) {
    return GasPriceWei.times(SwapCost)
        .times(TokenPrice)
        .div(bmath_1.BONE);
}
exports.calculateTotalSwapCost = calculateTotalSwapCost;
function getCostOutputToken(TokenAddr, GasPriceWei, SwapGasCost, Provider, ChainId = undefined) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!ChainId) {
            let network = yield Provider.getNetwork();
            ChainId = network.chainId;
        }
        // If not mainnet return 0 as UniSwap price unlikely to be correct?
        // Provider can be used to fetch token data (i.e. Decimals) via UniSwap SDK when Ethers V5 is used
        if (ChainId !== 1)
            return new bignumber_1.BigNumber(0);
        let tokenPrice = new bignumber_1.BigNumber(0);
        try {
            tokenPrice = yield getTokenWeiPrice(TokenAddr, Provider);
        }
        catch (err) {
            // console.log(err)
            // If no pool for provided address (or addr incorrect) then default to 0
            console.log('Error Getting Token Price. Defaulting to 0.');
        }
        let costOutputToken = calculateTotalSwapCost(tokenPrice, SwapGasCost, GasPriceWei);
        return costOutputToken;
    });
}
exports.getCostOutputToken = getCostOutputToken;


/***/ }),

/***/ 93256:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const bignumber_1 = __webpack_require__(40199);
const address_1 = __webpack_require__(99747);
const bmath_1 = __webpack_require__(42389);
const disabled_tokens_json_1 = __importDefault(__webpack_require__(14511));
function getLimitAmountSwap(poolPairData, swapType) {
    if (swapType === 'swapExactIn') {
        return bmath_1.bmul(poolPairData.balanceIn, bmath_1.MAX_IN_RATIO);
    }
    else {
        return bmath_1.bmul(poolPairData.balanceOut, bmath_1.MAX_OUT_RATIO);
    }
}
exports.getLimitAmountSwap = getLimitAmountSwap;
function getLimitAmountSwapPath(pools, path, swapType, poolPairData) {
    let swaps = path.swaps;
    if (swaps.length == 1) {
        let id = `${swaps[0].pool}${swaps[0].tokenIn}${swaps[0].tokenOut}`;
        let poolPairDataSwap1 = poolPairData[id];
        return getLimitAmountSwap(poolPairDataSwap1.poolPairData, swapType);
    }
    else if (swaps.length == 2) {
        let id = `${swaps[0].pool}${swaps[0].tokenIn}${swaps[0].tokenOut}`;
        let poolPairDataSwap1 = poolPairData[id];
        id = `${swaps[1].pool}${swaps[1].tokenIn}${swaps[1].tokenOut}`;
        let poolPairDataSwap2 = poolPairData[id];
        if (swapType === 'swapExactIn') {
            return bignumber_1.BigNumber.min(
            // The limit is either set by limit_IN of poolPairData 1 or indirectly by limit_IN of poolPairData 2
            getLimitAmountSwap(poolPairDataSwap1.poolPairData, swapType), bmath_1.bmul(getLimitAmountSwap(poolPairDataSwap2.poolPairData, swapType), poolPairDataSwap1.sp) // we need to multiply the limit_IN of
            // poolPairData 2 by the spotPrice of poolPairData 1 to get the equivalent in token IN
            );
        }
        else {
            return bignumber_1.BigNumber.min(
            // The limit is either set by limit_OUT of poolPairData 2 or indirectly by limit_OUT of poolPairData 1
            getLimitAmountSwap(poolPairDataSwap2.poolPairData, swapType), bmath_1.bdiv(getLimitAmountSwap(poolPairDataSwap1.poolPairData, swapType), poolPairDataSwap2.sp) // we need to divide the limit_OUT of
            // poolPairData 1 by the spotPrice of poolPairData 2 to get the equivalent in token OUT
            );
        }
    }
    else {
        throw new Error('Path with more than 2 swaps not supported');
    }
}
exports.getLimitAmountSwapPath = getLimitAmountSwapPath;
function getSpotPricePath(pools, path, poolPairData) {
    let swaps = path.swaps;
    if (swaps.length == 1) {
        let id = `${swaps[0].pool}${swaps[0].tokenIn}${swaps[0].tokenOut}`;
        let poolPairDataSwap1 = poolPairData[id];
        return poolPairDataSwap1.sp;
    }
    else if (swaps.length == 2) {
        let id = `${swaps[0].pool}${swaps[0].tokenIn}${swaps[0].tokenOut}`;
        let poolPairDataSwap1 = poolPairData[id];
        id = `${swaps[1].pool}${swaps[1].tokenIn}${swaps[1].tokenOut}`;
        let poolPairDataSwap2 = poolPairData[id];
        return bmath_1.bmul(poolPairDataSwap1.sp, poolPairDataSwap2.sp);
    }
    else {
        throw new Error('Path with more than 2 swaps not supported');
    }
}
exports.getSpotPricePath = getSpotPricePath;
function getSpotPrice(poolPairData) {
    let inRatio = bmath_1.bdiv(poolPairData.balanceIn, poolPairData.weightIn);
    let outRatio = bmath_1.bdiv(poolPairData.balanceOut, poolPairData.weightOut);
    if (outRatio.isEqualTo(bmath_1.bnum(0))) {
        return bmath_1.bnum(0);
    }
    else {
        return bmath_1.bdiv(bmath_1.bdiv(inRatio, outRatio), bmath_1.BONE.minus(poolPairData.swapFee));
    }
}
exports.getSpotPrice = getSpotPrice;
function getSlippageLinearizedSpotPriceAfterSwapPath(pools, path, swapType, poolPairData) {
    let swaps = path.swaps;
    if (swaps.length == 1) {
        let id = `${swaps[0].pool}${swaps[0].tokenIn}${swaps[0].tokenOut}`;
        let poolPairDataSwap1 = poolPairData[id].poolPairData;
        return getSlippageLinearizedSpotPriceAfterSwap(poolPairDataSwap1, swapType);
    }
    else if (swaps.length == 2) {
        let id = `${swaps[0].pool}${swaps[0].tokenIn}${swaps[0].tokenOut}`;
        let p1 = poolPairData[id].poolPairData;
        id = `${swaps[1].pool}${swaps[1].tokenIn}${swaps[1].tokenOut}`;
        let p2 = poolPairData[id].poolPairData;
        if (p1.balanceIn.isEqualTo(bmath_1.bnum(0)) ||
            p2.balanceIn.isEqualTo(bmath_1.bnum(0))) {
            return bmath_1.bnum(0);
        }
        else {
            // Since the numerator is the same for both 'swapExactIn' and 'swapExactOut' we do this first
            // See formulas on https://one.wolframcloud.com/env/fernando.martinel/SOR_multihop_analysis.nb
            let numerator1 = bmath_1.bmul(bmath_1.bmul(bmath_1.bmul(bmath_1.BONE.minus(p1.swapFee), bmath_1.BONE.minus(p2.swapFee)), // In mathematica both terms are the negative (which compensates)
            p1.balanceOut), bmath_1.bmul(p1.weightIn, p2.weightIn));
            let numerator2 = bmath_1.bmul(bmath_1.bmul(p1.balanceOut.plus(p2.balanceIn), bmath_1.BONE.minus(p1.swapFee) // In mathematica this is the negative but we add (instead of subtracting) numerator2 to compensate
            ), bmath_1.bmul(p1.weightIn, p2.weightOut));
            let numerator3 = bmath_1.bmul(p2.balanceIn, bmath_1.bmul(p1.weightOut, p2.weightOut));
            let numerator = numerator1.plus(numerator2).plus(numerator3);
            // The denominator is different for 'swapExactIn' and 'swapExactOut'
            if (swapType === 'swapExactIn') {
                let denominator1 = bmath_1.bmul(p1.balanceIn, p1.weightOut);
                let denominator2 = bmath_1.bmul(p2.balanceIn, p2.weightOut);
                return bmath_1.bdiv(bmath_1.bdiv(numerator, denominator1), denominator2);
            }
            else {
                let denominator1 = bmath_1.bmul(bmath_1.BONE.minus(p1.swapFee), bmath_1.bmul(p1.balanceOut, p1.weightIn));
                let denominator2 = bmath_1.bmul(bmath_1.BONE.minus(p2.swapFee), bmath_1.bmul(p2.balanceOut, p2.weightIn));
                return bmath_1.bdiv(bmath_1.bdiv(numerator, denominator1), denominator2);
            }
        }
    }
    else {
        throw new Error('Path with more than 2 swaps not supported');
    }
}
exports.getSlippageLinearizedSpotPriceAfterSwapPath = getSlippageLinearizedSpotPriceAfterSwapPath;
function getSlippageLinearizedSpotPriceAfterSwap(poolPairData, swapType) {
    let { weightIn, weightOut, balanceIn, balanceOut, swapFee } = poolPairData;
    if (swapType === 'swapExactIn') {
        if (balanceIn.isEqualTo(bmath_1.bnum(0))) {
            return bmath_1.bnum(0);
        }
        else {
            return bmath_1.bdiv(bmath_1.bmul(bmath_1.BONE.minus(swapFee), bmath_1.bdiv(weightIn, weightOut)).plus(bmath_1.BONE), balanceIn);
        }
    }
    else {
        if (balanceOut.isEqualTo(bmath_1.bnum(0))) {
            return bmath_1.bnum(0);
        }
        else {
            return bmath_1.bdiv(bmath_1.bdiv(weightOut, bmath_1.bmul(bmath_1.BONE.minus(swapFee), weightIn)).plus(bmath_1.BONE), balanceOut);
        }
    }
}
exports.getSlippageLinearizedSpotPriceAfterSwap = getSlippageLinearizedSpotPriceAfterSwap;
function getReturnAmountSwapPath(pools, path, swapType, amount) {
    let swaps = path.swaps;
    if (swaps.length == 1) {
        let swap1 = swaps[0];
        let poolSwap1 = pools[swap1.pool];
        let poolPairDataSwap1 = exports.parsePoolPairData(poolSwap1, swap1.tokenIn, swap1.tokenOut);
        return getReturnAmountSwap(pools, poolPairDataSwap1, swapType, amount);
    }
    else if (swaps.length == 2) {
        let swap1 = swaps[0];
        let poolSwap1 = pools[swap1.pool];
        let poolPairDataSwap1 = exports.parsePoolPairData(poolSwap1, swap1.tokenIn, swap1.tokenOut);
        let swap2 = swaps[1];
        let poolSwap2 = pools[swap2.pool];
        let poolPairDataSwap2 = exports.parsePoolPairData(poolSwap2, swap2.tokenIn, swap2.tokenOut);
        if (swapType === 'swapExactIn') {
            // The outputAmount is number of tokenOut we receive from the second poolPairData
            let returnAmountSwap1 = getReturnAmountSwap(pools, poolPairDataSwap1, swapType, amount);
            return getReturnAmountSwap(pools, poolPairDataSwap2, swapType, returnAmountSwap1);
        }
        else {
            // The outputAmount is number of tokenIn we send to the first poolPairData
            let returnAmountSwap2 = getReturnAmountSwap(pools, poolPairDataSwap2, swapType, amount);
            return getReturnAmountSwap(pools, poolPairDataSwap1, swapType, returnAmountSwap2);
        }
    }
    else {
        throw new Error('Path with more than 2 swaps not supported');
    }
}
exports.getReturnAmountSwapPath = getReturnAmountSwapPath;
function getReturnAmountSwap(pools, poolPairData, swapType, amount) {
    let { weightIn, weightOut, balanceIn, balanceOut, swapFee, tokenIn, tokenOut, } = poolPairData;
    let returnAmount;
    if (swapType === 'swapExactIn') {
        if (balanceIn.isEqualTo(bmath_1.bnum(0))) {
            return bmath_1.bnum(0);
        }
        else {
            returnAmount = bmath_1.calcOutGivenIn(balanceIn, weightIn, balanceOut, weightOut, amount, swapFee);
            // Update balances of tokenIn and tokenOut
            pools[poolPairData.id] = updateTokenBalanceForPool(pools[poolPairData.id], tokenIn, balanceIn.plus(amount));
            pools[poolPairData.id] = updateTokenBalanceForPool(pools[poolPairData.id], tokenOut, balanceOut.minus(returnAmount));
            return returnAmount;
        }
    }
    else {
        if (balanceOut.isEqualTo(bmath_1.bnum(0))) {
            return bmath_1.bnum(0);
        }
        else if (amount.times(3).gte(balanceOut)) {
            // The maximum amoutOut you can have is 1/3 of the balanceOut to ensure binomial approximation diverges
            return bmath_1.bnum(0);
        }
        else {
            returnAmount = bmath_1.calcInGivenOut(balanceIn, weightIn, balanceOut, weightOut, amount, swapFee);
            // Update balances of tokenIn and tokenOut
            pools[poolPairData.id] = updateTokenBalanceForPool(pools[poolPairData.id], tokenIn, balanceIn.plus(returnAmount));
            pools[poolPairData.id] = updateTokenBalanceForPool(pools[poolPairData.id], tokenOut, balanceOut.minus(amount));
            return returnAmount;
        }
    }
}
exports.getReturnAmountSwap = getReturnAmountSwap;
// Updates the balance of a given token for a given pool passed as parameter
function updateTokenBalanceForPool(pool, token, balance) {
    // console.log("pool")
    // console.log(pool)
    // console.log("token")
    // console.log(token)
    // console.log("balance")
    // console.log(balance)
    // Scale down back as balances are stored scaled down by the decimals
    let T = pool.tokens.find(t => t.address === token);
    T.balance = balance;
    return pool;
}
exports.updateTokenBalanceForPool = updateTokenBalanceForPool;
// Based on the function of same name of file onchain-sor in file: BRegistry.sol
// Normalized liquidity is not used in any calculationf, but instead for comparison between poolPairDataList only
// so we can find the most liquid poolPairData considering the effect of uneven weigths
function getNormalizedLiquidity(poolPairData) {
    let { weightIn, weightOut, balanceIn, balanceOut, swapFee } = poolPairData;
    return bmath_1.bdiv(bmath_1.bmul(balanceOut, weightIn), weightIn.plus(weightOut));
}
exports.getNormalizedLiquidity = getNormalizedLiquidity;
// LEGACY FUNCTION - Keep Input/Output Format
exports.parsePoolData = (directPools, tokenIn, tokenOut, mostLiquidPoolsFirstHop = [], mostLiquidPoolsSecondHop = [], hopTokens = []) => {
    let pathDataList = [];
    let pools = {};
    // First add direct pair paths
    for (let idKey in directPools) {
        let p = directPools[idKey];
        // Add pool to the set with all pools (only adds if it's still not present in dict)
        pools[idKey] = p;
        let swap = {
            pool: p.id,
            tokenIn: tokenIn,
            tokenOut: tokenOut,
        };
        let path = {
            id: p.id,
            swaps: [swap],
        };
        pathDataList.push(path);
    }
    // Now add multi-hop paths.
    // mostLiquidPoolsFirstHop and mostLiquidPoolsSecondHop always has the same
    // lengh of hopTokens
    for (let i = 0; i < hopTokens.length; i++) {
        // Add pools to the set with all pools (only adds if it's still not present in dict)
        pools[mostLiquidPoolsFirstHop[i].id] = mostLiquidPoolsFirstHop[i];
        pools[mostLiquidPoolsSecondHop[i].id] = mostLiquidPoolsSecondHop[i];
        let swap1 = {
            pool: mostLiquidPoolsFirstHop[i].id,
            tokenIn: tokenIn,
            tokenOut: hopTokens[i],
        };
        let swap2 = {
            pool: mostLiquidPoolsSecondHop[i].id,
            tokenIn: hopTokens[i],
            tokenOut: tokenOut,
        };
        let path = {
            id: mostLiquidPoolsFirstHop[i].id + mostLiquidPoolsSecondHop[i].id,
            swaps: [swap1, swap2],
        };
        pathDataList.push(path);
    }
    return [pools, pathDataList];
};
exports.parsePoolPairData = (p, tokenIn, tokenOut) => {
    let tI = p.tokens.find(t => address_1.getAddress(t.address) === address_1.getAddress(tokenIn));
    // console.log("tI")
    // console.log(tI.balance.toString());
    // console.log(tI)
    let tO = p.tokens.find(t => address_1.getAddress(t.address) === address_1.getAddress(tokenOut));
    // console.log("tO")
    // console.log(tO.balance.toString());
    // console.log(tO)
    let poolPairData = {
        id: p.id,
        tokenIn: tokenIn,
        tokenOut: tokenOut,
        decimalsIn: tI.decimals,
        decimalsOut: tO.decimals,
        balanceIn: bmath_1.bnum(tI.balance),
        balanceOut: bmath_1.bnum(tO.balance),
        weightIn: bmath_1.scale(bmath_1.bnum(tI.denormWeight).div(bmath_1.bnum(p.totalWeight)), 18),
        weightOut: bmath_1.scale(bmath_1.bnum(tO.denormWeight).div(bmath_1.bnum(p.totalWeight)), 18),
        swapFee: bmath_1.bnum(p.swapFee),
    };
    return poolPairData;
};
function filterPoolsWithoutToken(pools, token) {
    let found;
    let OutputPools = {};
    for (let i in pools) {
        found = false;
        for (let k = 0; k < pools[i].tokensList.length; k++) {
            if (pools[i].tokensList[k].toLowerCase() == token.toLowerCase()) {
                found = true;
                break;
            }
        }
        //Add pool if token not found
        if (!found)
            OutputPools[i] = pools[i];
    }
    return OutputPools;
}
exports.formatSubgraphPools = pools => {
    for (let pool of pools.pools) {
        pool.swapFee = bmath_1.scale(bmath_1.bnum(pool.swapFee), 18);
        pool.totalWeight = bmath_1.scale(bmath_1.bnum(pool.totalWeight), 18);
        pool.tokens.forEach(token => {
            token.balance = bmath_1.scale(bmath_1.bnum(token.balance), token.decimals);
            token.denormWeight = bmath_1.scale(bmath_1.bnum(token.denormWeight), 18);
        });
    }
};
function filterPools(allPools, // The complete information of the pools
tokenIn, tokenOut, maxPools, disabledOptions = { isOverRide: false, disabledTokens: [] }) {
    // If pool contains token add all its tokens to direct list
    // Multi-hop trades: we find the best pools that connect tokenIn and tokenOut through a multi-hop (intermediate) token
    // First: we get all tokens that can be used to be traded with tokenIn excluding
    // tokens that are in pools that already contain tokenOut (in which case multi-hop is not necessary)
    let poolsDirect = {};
    let poolsTokenOne = {};
    let poolsTokenTwo = {};
    let tokenInPairedTokens = new Set();
    let tokenOutPairedTokens = new Set();
    let disabledTokens = disabled_tokens_json_1.default.tokens;
    if (disabledOptions.isOverRide)
        disabledTokens = disabledOptions.disabledTokens;
    allPools.forEach(pool => {
        let tokenListSet = new Set(pool.tokensList);
        disabledTokens.forEach(token => tokenListSet.delete(token.address));
        if (tokenListSet.has(tokenIn) && tokenListSet.has(tokenOut)) {
            poolsDirect[pool.id] = pool;
            return;
        }
        if (maxPools > 1) {
            let containsTokenIn = tokenListSet.has(tokenIn);
            let containsTokenOut = tokenListSet.has(tokenOut);
            if (containsTokenIn && !containsTokenOut) {
                tokenInPairedTokens = new Set([
                    ...tokenInPairedTokens,
                    ...tokenListSet,
                ]);
                poolsTokenOne[pool.id] = pool;
            }
            else if (!containsTokenIn && containsTokenOut) {
                tokenOutPairedTokens = new Set([
                    ...tokenOutPairedTokens,
                    ...tokenListSet,
                ]);
                poolsTokenTwo[pool.id] = pool;
            }
        }
    });
    // We find the intersection of the two previous sets so we can trade tokenIn for tokenOut with 1 multi-hop
    const hopTokensSet = [...tokenInPairedTokens].filter(x => tokenOutPairedTokens.has(x));
    // Transform set into Array
    const hopTokens = [...hopTokensSet];
    return [poolsDirect, hopTokens, poolsTokenOne, poolsTokenTwo];
}
exports.filterPools = filterPools;
function sortPoolsMostLiquid(tokenIn, tokenOut, hopTokens, poolsTokenInNoTokenOut, poolsTokenOutNoTokenIn) {
    // Find the most liquid pool for each pair (tokenIn -> hopToken). We store an object in the form:
    // mostLiquidPoolsFirstHop = {hopToken1: mostLiquidPool, hopToken2: mostLiquidPool, ... , hopTokenN: mostLiquidPool}
    // Here we could query subgraph for all pools with pair (tokenIn -> hopToken), but to
    // minimize subgraph calls we loop through poolsTokenInNoTokenOut, and check the liquidity
    // only for those that have hopToken
    let mostLiquidPoolsFirstHop = [];
    let mostLiquidPoolsSecondHop = [];
    let poolPair = {}; // Store pair liquidity incase it is reused
    for (let i = 0; i < hopTokens.length; i++) {
        let highestNormalizedLiquidityFirst = bmath_1.bnum(0); // Aux variable to find pool with most liquidity for pair (tokenIn -> hopToken)
        let highestNormalizedLiquidityFirstPoolId; // Aux variable to find pool with most liquidity for pair (tokenIn -> hopToken)
        for (let k in poolsTokenInNoTokenOut) {
            // If this pool has hopTokens[i] calculate its normalized liquidity
            if (new Set(poolsTokenInNoTokenOut[k].tokensList).has(hopTokens[i])) {
                let normalizedLiquidity = getNormalizedLiquidity(exports.parsePoolPairData(poolsTokenInNoTokenOut[k], tokenIn, hopTokens[i].toString()));
                if (normalizedLiquidity.isGreaterThanOrEqualTo(
                // Cannot be strictly greater otherwise
                // highestNormalizedLiquidityPoolId = 0 if hopTokens[i] balance is 0 in this pool.
                highestNormalizedLiquidityFirst)) {
                    highestNormalizedLiquidityFirst = normalizedLiquidity;
                    highestNormalizedLiquidityFirstPoolId = k;
                }
            }
        }
        mostLiquidPoolsFirstHop[i] =
            poolsTokenInNoTokenOut[highestNormalizedLiquidityFirstPoolId];
        let highestNormalizedLiquidity = bmath_1.bnum(0); // Aux variable to find pool with most liquidity for pair (tokenIn -> hopToken)
        let highestNormalizedLiquidityPoolId; // Aux variable to find pool with most liquidity for pair (tokenIn -> hopToken)
        for (let k in poolsTokenOutNoTokenIn) {
            // If this pool has hopTokens[i] calculate its normalized liquidity
            if (new Set(poolsTokenOutNoTokenIn[k].tokensList).has(hopTokens[i])) {
                let normalizedLiquidity = getNormalizedLiquidity(exports.parsePoolPairData(poolsTokenOutNoTokenIn[k], hopTokens[i].toString(), tokenOut));
                if (normalizedLiquidity.isGreaterThanOrEqualTo(
                // Cannot be strictly greater otherwise
                // highestNormalizedLiquidityPoolId = 0 if hopTokens[i] balance is 0 in this pool.
                highestNormalizedLiquidity)) {
                    highestNormalizedLiquidity = normalizedLiquidity;
                    highestNormalizedLiquidityPoolId = k;
                }
            }
        }
        mostLiquidPoolsSecondHop[i] =
            poolsTokenOutNoTokenIn[highestNormalizedLiquidityPoolId];
    }
    return [mostLiquidPoolsFirstHop, mostLiquidPoolsSecondHop];
}
exports.sortPoolsMostLiquid = sortPoolsMostLiquid;
function getMarketSpotPrice(paths) {
    if (paths.length === 0)
        return bmath_1.bnum(0);
    let min = bmath_1.bnum(paths[0].slippage);
    let marketSp = bmath_1.bnum(paths[0].spotPrice);
    for (let i = 1; i < paths.length; i++) {
        let value = bmath_1.bnum(paths[i].slippage);
        if (value.lt(min) || min.eq(0)) {
            min = value;
            marketSp = bmath_1.bnum(paths[i].spotPrice);
        }
    }
    return marketSp;
}
exports.getMarketSpotPrice = getMarketSpotPrice;


/***/ }),

/***/ 15092:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var sor_1 = __webpack_require__(65860);
exports.smartOrderRouterMultiHopEpsOfInterest = sor_1.smartOrderRouterMultiHopEpsOfInterest;
exports.processPaths = sor_1.processPaths;
exports.processEpsOfInterestMultiHop = sor_1.processEpsOfInterestMultiHop;
var helpers_1 = __webpack_require__(93256);
exports.parsePoolData = helpers_1.parsePoolData;
exports.formatSubgraphPools = helpers_1.formatSubgraphPools;
exports.filterPools = helpers_1.filterPools;
exports.sortPoolsMostLiquid = helpers_1.sortPoolsMostLiquid;
exports.getMarketSpotPrice = helpers_1.getMarketSpotPrice;
var multicall_1 = __webpack_require__(85876);
exports.getAllPoolDataOnChain = multicall_1.getAllPoolDataOnChain;
const bmath = __importStar(__webpack_require__(42389));
exports.bmath = bmath;
var costToken_1 = __webpack_require__(55543);
exports.getCostOutputToken = costToken_1.getCostOutputToken;
var pools_1 = __webpack_require__(76753);
exports.POOLS = pools_1.POOLS;
var wrapper_1 = __webpack_require__(50796);
exports.SOR = wrapper_1.SOR;


/***/ }),

/***/ 85876:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const contracts_1 = __webpack_require__(58063);
const bmath = __importStar(__webpack_require__(42389));
function getAllPoolDataOnChain(pools, multiAddress, provider) {
    return __awaiter(this, void 0, void 0, function* () {
        if (pools.pools.length === 0)
            throw Error('There are no pools.');
        const customMultiAbi = __webpack_require__(23388);
        const contract = new contracts_1.Contract(multiAddress, customMultiAbi, provider);
        let addresses = [];
        let total = 0;
        for (let i = 0; i < pools.pools.length; i++) {
            let pool = pools.pools[i];
            addresses.push([pool.id]);
            total++;
            pool.tokens.forEach(token => {
                addresses[i].push(token.address);
                total++;
            });
        }
        let results = yield contract.getPoolInfo(addresses, total);
        let j = 0;
        let onChainPools = { pools: [] };
        for (let i = 0; i < pools.pools.length; i++) {
            let tokens = [];
            let p = {
                id: pools.pools[i].id,
                swapFee: bmath.scale(bmath.bnum(pools.pools[i].swapFee), 18),
                totalWeight: bmath.scale(bmath.bnum(pools.pools[i].totalWeight), 18),
                tokens: tokens,
                tokensList: pools.pools[i].tokensList,
            };
            pools.pools[i].tokens.forEach(token => {
                let bal = bmath.bnum(results[j]);
                j++;
                p.tokens.push({
                    address: token.address,
                    balance: bal,
                    decimals: Number(token.decimals),
                    denormWeight: bmath.scale(bmath.bnum(token.denormWeight), 18),
                });
            });
            onChainPools.pools.push(p);
        }
        return onChainPools;
    });
}
exports.getAllPoolDataOnChain = getAllPoolDataOnChain;


/***/ }),

/***/ 76753:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const isomorphic_fetch_1 = __importDefault(__webpack_require__(39060));
const bmath = __importStar(__webpack_require__(42389));
class POOLS {
    getAllPublicSwapPools(URL) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield isomorphic_fetch_1.default(URL);
            const allPools = result.json();
            return allPools;
        });
    }
    formatPoolsBigNumber(pools) {
        return __awaiter(this, void 0, void 0, function* () {
            let onChainPools = { pools: [] };
            for (let i = 0; i < pools.pools.length; i++) {
                let tokens = [];
                let p = {
                    id: pools.pools[i].id,
                    swapFee: bmath.scale(bmath.bnum(pools.pools[i].swapFee), 18),
                    totalWeight: bmath.scale(bmath.bnum(pools.pools[i].totalWeight), 18),
                    tokens: tokens,
                    tokensList: pools.pools[i].tokensList,
                };
                pools.pools[i].tokens.forEach(token => {
                    let decimals = Number(token.decimals);
                    p.tokens.push({
                        address: token.address,
                        balance: bmath.scale(bmath.bnum(token.balance), decimals),
                        decimals: decimals,
                        denormWeight: bmath.scale(bmath.bnum(token.denormWeight), 18),
                    });
                });
                onChainPools.pools.push(p);
            }
            return onChainPools;
        });
    }
}
exports.POOLS = POOLS;


/***/ }),

/***/ 65860:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const helpers_1 = __webpack_require__(93256);
const bmath_1 = __webpack_require__(42389);
const bignumber_1 = __webpack_require__(40199);
const constants_1 = __webpack_require__(24769);
// TODO give the option to choose a % of slippage beyond current price?
exports.MAX_UINT = constants_1.MaxUint256;
const minAmountOut = 0;
const maxAmountIn = exports.MAX_UINT;
const maxPrice = exports.MAX_UINT;
function processPaths(paths, pools, swapType) {
    let poolPairData = {};
    paths.forEach(path => {
        let swaps = path.swaps;
        // Get and store PoolPairData for swaps in path as these are used across all following get functions
        if (swaps.length == 1) {
            let swap1 = swaps[0];
            let id = `${swap1.pool}${swap1.tokenIn}${swap1.tokenOut}`;
            if (poolPairData[id] === undefined) {
                let poolSwap1 = pools[swap1.pool];
                let poolPairDataSwap1 = helpers_1.parsePoolPairData(poolSwap1, swap1.tokenIn, swap1.tokenOut);
                let sp = helpers_1.getSpotPrice(poolPairDataSwap1);
                poolPairData[id] = { poolPairData: poolPairDataSwap1, sp: sp };
            }
        }
        else if (swaps.length == 2) {
            let swap1 = swaps[0];
            let id = `${swap1.pool}${swap1.tokenIn}${swap1.tokenOut}`;
            if (poolPairData[id] === undefined) {
                let poolSwap1 = pools[swap1.pool];
                let poolPairDataSwap1 = helpers_1.parsePoolPairData(poolSwap1, swap1.tokenIn, swap1.tokenOut);
                let sp = helpers_1.getSpotPrice(poolPairDataSwap1);
                poolPairData[id] = { poolPairData: poolPairDataSwap1, sp: sp };
            }
            let swap2 = swaps[1];
            id = `${swap2.pool}${swap2.tokenIn}${swap2.tokenOut}`;
            if (poolPairData[id] === undefined) {
                let poolSwap2 = pools[swap2.pool];
                let poolPairDataSwap2 = helpers_1.parsePoolPairData(poolSwap2, swap2.tokenIn, swap2.tokenOut);
                let sp = helpers_1.getSpotPrice(poolPairDataSwap2);
                poolPairData[id] = { poolPairData: poolPairDataSwap2, sp: sp };
            }
        }
        path.spotPrice = helpers_1.getSpotPricePath(pools, path, poolPairData);
        path.slippage = helpers_1.getSlippageLinearizedSpotPriceAfterSwapPath(pools, path, swapType, poolPairData);
        path.limitAmount = helpers_1.getLimitAmountSwapPath(pools, path, swapType, poolPairData);
    });
    let sortedPaths = paths.sort((a, b) => {
        return a.spotPrice.minus(b.spotPrice).toNumber();
    });
    return sortedPaths;
}
exports.processPaths = processPaths;
function processEpsOfInterestMultiHop(sortedPaths, swapType, maxPools) {
    // Given sortedPaths, this function builds the list of prices of interest  
    // wich is composed of all the spot prices of each of the paths and also 
    // all the swap prices, i.e. prices where the chart of spot price after trade vs. 
    // amount traded of any two pools cross. This means that up until that swap price 
    // it's better to trade with one pool, but after that swap price it's better to trade with
    // the other. 
    let pricesOfInterest = getPricesOfInterest(sortedPaths, swapType);
    // Sort all prices of interest in ascending order
    pricesOfInterest = pricesOfInterest.sort((a, b) => {
        return a.price.minus(b.price).toNumber();
    });
    // For each price of interest we calculate the list of best paths. 
    // This list is built based on the information of prices of interest where 
    // paths cross (i.e. one becomes better that the other). We only keep a list 
    // of up to maxPools pathIds as we know we won't ever need more than that 
    // since each path has at least one pool 
    pricesOfInterest = calculateBestPathIdsForPricesOfInterest(pricesOfInterest, maxPools);
    // For each price of interest and list of best path ids, calculate how much 
    // each of these paths would trade in order to get to that price of interest
    pricesOfInterest.forEach(poi => {
        let pathIds = poi.bestPathsIds;
        let price = poi.price;
        poi.amounts = getSwapAmountsForPriceOfInterest(sortedPaths, pathIds, price);
    });
    return pricesOfInterest;
}
exports.processEpsOfInterestMultiHop = processEpsOfInterestMultiHop;
/*
< INPUTS >
pools: pools information
paths: paths information
swapType: 'swapExactIn' or 'swapExactOut'.
totalSwapAmount: the amount of tokenIn to sell if swapType == 'swapExactIn' OR
                 the amount of tokenOut to buy if swapType == 'swapExactOut'
maxPools: the maximum number of pools accepted for the SOR final swaps suggestion
costReturnToken: how much in outputToken the gas for trading with one pool costs
                 Notice that outputToken is tokenOut if swapType == 'swapExactIn'
                 and tokenIn if swapType == 'swapExactOut'
pricesOfInterest: pricesOfInterest built previously by other functions

< OUTPUTS >
swaps: information of the optimal swaps
bestTotalReturn: amount of tokenOut the swaps will return if swapType == 'swapExactIn'
                amount of tokenIn the swaps will pull if swapType == 'swapExactOut'
*/
exports.smartOrderRouterMultiHopEpsOfInterest = (pools, paths, swapType, totalSwapAmount, maxPools, costReturnToken, pricesOfInterest) => {
    let bestTotalReturn = new bignumber_1.BigNumber(0);
    let bestTotalReturnConsideringFees = new bignumber_1.BigNumber(0);
    let highestPoiNotEnough = true;
    let pathIds, totalReturn, totalReturnConsideringFees;
    let bestSwapAmounts = [], bestPathIds, swapAmounts;
    let bmin = paths.length + 1;
    // First get the optimal totalReturn to trade 'totalSwapAmount' with
    // one path only (b=1). Then increase the number of pools as long as  
    // improvementCondition is true (see more information below) 
    for (let b = 1; b <= bmin; b++) {
        totalReturn = 0;
        let priceBefore, swapAmountsPriceBefore, swapAmountsPriceAfter;
        // Sweep all pricesOfInterest until we reach the amount we aim for (totalSwapAmount) 
        for (let i = 0; i < pricesOfInterest.length; i++) {
            if (i === 0) {
                priceBefore = pricesOfInterest[i];
                continue;
            }
            let swapAmountsAfter = pricesOfInterest[i].amounts;
            let totalInputAmountAfter = swapAmountsAfter
                .slice(0, b)
                .reduce((a, b) => a.plus(b));
            // If totalInputAmountAfter is greater than totalSwapAmount we know 
            // we found a solution to trade, now all we need to do is interpolate
            // between swapAmountsPriceBefore and swapAmountsPriceAfter
            if (totalInputAmountAfter.isGreaterThan(totalSwapAmount)) {
                pathIds = priceBefore.bestPathsIds.slice(0, b);
                swapAmountsPriceBefore = priceBefore.amounts.slice(0, b);
                swapAmountsPriceAfter = pricesOfInterest[i].amounts.slice(0, b);
                swapAmounts = getExactSwapAmounts(swapAmountsPriceBefore, swapAmountsPriceAfter, totalSwapAmount);
                // We found a priceOfInterest that can yield enough amount for trade
                highestPoiNotEnough = false;
                break;
            }
            priceBefore = pricesOfInterest[i];
        }
        // If we swept the whole table with pricesOfInterest and didn't get enough amounts
        // it means that Balancer does not have enough liquidity for this totalSwapAmount.
        // We return an empty list of swaps to represent this exception case.
        if (highestPoiNotEnough) {
            pathIds = [];
            swapAmounts = [];
        }
        totalReturn = exports.calcTotalReturn(pools, paths, swapType, pathIds, swapAmounts);
        // Calculates the number of pools in all the paths to include the gas costs
        let totalNumberOfPools = 0;
        pathIds.forEach((pathId, i) => {
            // Find path data
            const path = paths.find(p => p.id === pathId);
            totalNumberOfPools += path.swaps.length;
        });
        // improvementCondition is true if we are improving the totalReturn 
        // Notice that totalReturn has to be maximized for 'swapExactIn' 
        // and MINIMIZED for 'swapExactOut'
        // This is because for the case of 'swapExactOut', totalReturn means the 
        // amount of tokenIn needed to buy totalSwapAmount of tokenOut
        let improvementCondition = false;
        if (totalNumberOfPools <= maxPools) {
            if (swapType === 'swapExactIn') {
                totalReturnConsideringFees = totalReturn.minus(bmath_1.bmul(new bignumber_1.BigNumber(totalNumberOfPools).times(bmath_1.BONE), costReturnToken));
                improvementCondition =
                    totalReturnConsideringFees.isGreaterThan(bestTotalReturnConsideringFees) || b === 1; // b === 1 means its the first iteration so bestTotalReturnConsideringFees isn't currently a value
            }
            else {
                totalReturnConsideringFees = totalReturn.plus(bmath_1.bmul(new bignumber_1.BigNumber(totalNumberOfPools).times(bmath_1.BONE), costReturnToken));
                improvementCondition =
                    totalReturnConsideringFees.isLessThan(bestTotalReturnConsideringFees) || b === 1; // b === 1 means its the first iteration so bestTotalReturnConsideringFees isn't currently a value
            }
        }
        if (improvementCondition === true) {
            bestSwapAmounts = swapAmounts;
            bestPathIds = pathIds;
            bestTotalReturn = totalReturn;
            bestTotalReturnConsideringFees = totalReturnConsideringFees;
        }
        else {
            break;
        }
    }
    //// Prepare swap data from paths
    let swaps = [];
    let totalSwapAmountWithRoundingErrors = new bignumber_1.BigNumber(0);
    let dust = new bignumber_1.BigNumber(0);
    let lenghtFirstPath;
    // TODO: change all inputAmount variable names to swapAmount
    bestSwapAmounts.forEach((swapAmount, i) => {
        totalSwapAmountWithRoundingErrors = totalSwapAmountWithRoundingErrors.plus(swapAmount);
        // Find path data
        const path = paths.find(p => p.id === bestPathIds[i]);
        if (!path) {
            throw new Error('[Invariant] No pool found for selected pool index' +
                bestPathIds[i]);
        }
        // // TODO: remove. To debug only!
        // printSpotPricePathBeforeAndAfterSwap(path, swapType, swapAmount);
        if (i == 0)
            // Store lenght of first path to add dust to correct rounding error at the end
            lenghtFirstPath = path.swaps.length;
        if (path.swaps.length == 1) {
            // Direct trade: add swap from only pool
            let swap = {
                pool: path.swaps[0].pool,
                tokenIn: path.swaps[0].tokenIn,
                tokenOut: path.swaps[0].tokenOut,
                swapAmount: swapAmount.toString(),
                limitReturnAmount: swapType === 'swapExactIn'
                    ? minAmountOut.toString()
                    : maxAmountIn.toString(),
                maxPrice: maxPrice.toString(),
            };
            swaps.push([swap]);
        }
        else {
            // Multi-hop:
            let swap1 = path.swaps[0];
            let poolSwap1 = pools[swap1.pool];
            let poolPairDataSwap1 = helpers_1.parsePoolPairData(poolSwap1, swap1.tokenIn, swap1.tokenOut);
            let swap2 = path.swaps[1];
            let poolSwap2 = pools[swap2.pool];
            let poolPairDataSwap2 = helpers_1.parsePoolPairData(poolSwap2, swap2.tokenIn, swap2.tokenOut);
            // Add swap from first pool
            let swap1hop = {
                pool: path.swaps[0].pool,
                tokenIn: path.swaps[0].tokenIn,
                tokenOut: path.swaps[0].tokenOut,
                swapAmount: swapType === 'swapExactIn'
                    ? swapAmount.toString()
                    : helpers_1.getReturnAmountSwap(pools, poolPairDataSwap2, swapType, swapAmount).toString(),
                limitReturnAmount: swapType === 'swapExactIn'
                    ? minAmountOut.toString()
                    : maxAmountIn.toString(),
                maxPrice: maxPrice.toString(),
            };
            // Add swap from second pool
            let swap2hop = {
                pool: path.swaps[1].pool,
                tokenIn: path.swaps[1].tokenIn,
                tokenOut: path.swaps[1].tokenOut,
                swapAmount: swapType === 'swapExactIn'
                    ? helpers_1.getReturnAmountSwap(pools, poolPairDataSwap1, swapType, swapAmount).toString()
                    : swapAmount.toString(),
                limitReturnAmount: swapType === 'swapExactIn'
                    ? minAmountOut.toString()
                    : maxAmountIn.toString(),
                maxPrice: maxPrice.toString(),
            };
            swaps.push([swap1hop, swap2hop]);
        }
        // Updates the pools in the path with the swaps so that if
        // the new paths use these pools they will have the updated balances
        helpers_1.getReturnAmountSwapPath(pools, path, swapType, swapAmount);
    });
    // Since the individual swapAmounts for each path are integers, the sum of all swapAmounts
    // might not be exactly equal to the totalSwapAmount the user requested. We need to correct that rounding error
    // and we do that by adding the rounding error to the first path.
    if (swaps.length > 0) {
        dust = totalSwapAmount.minus(totalSwapAmountWithRoundingErrors);
        if (swapType === 'swapExactIn') {
            swaps[0][0].swapAmount = new bignumber_1.BigNumber(swaps[0][0].swapAmount)
                .plus(dust)
                .toString(); // Add dust to first swapExactIn
        }
        else {
            if (lenghtFirstPath == 1)
                // First path is a direct path (only one pool)
                swaps[0][0].swapAmount = new bignumber_1.BigNumber(swaps[0][0].swapAmount)
                    .plus(dust)
                    .toString();
            // Add dust to first swapExactOut
            // First path is a multihop path (two pools)
            else
                swaps[0][1].swapAmount = new bignumber_1.BigNumber(swaps[0][1].swapAmount)
                    .plus(dust)
                    .toString(); // Add dust to second swapExactOut
        }
    }
    return [swaps, bestTotalReturn];
};
function getPricesOfInterest(sortedPaths, swapType) {
    let pricesOfInterest = [];
    sortedPaths.forEach((path, i) => {
        // For every new path we get the spotPrice of the path as a price of interest
        let pi = {};
        pi.price = path.spotPrice;
        pi.id = path.id;
        pricesOfInterest.push(pi);
        // Get the max amount that can be traded for this path
        pi = {};
        pi.price = path.spotPrice.plus(bmath_1.bmul(bmath_1.bmul(path.limitAmount, path.slippage), path.spotPrice));
        pi.maxAmount = path.id;
        // Add price of interest
        pricesOfInterest.push(pi);
        // slippagePriceFactor is the slope of the chart for this path. 
        // Slippage (SL) has to be multiplied by spotPrice (SP) because 
        // we have defined the linearized spot price after trade (SPaT) as:
        // SPaT (A) = SP * (1 + SL * A)      so if we want the slope we do:
        // SPaT (A) = SP + SL*SP * A         the slope is therefore SL * SP      
        path.slippagePriceFactor = bmath_1.bmul(path.slippage, path.spotPrice);
        // Now we have to check if this path we just added will cross with other
        // previously added paths. For that we need to run a for loop with all the 
        // previous paths and analyse all the different possibilities of them crossing.
        // A detailed explanation of each of the cases can be found here: 
        // https://drive.google.com/file/d/1vNWyfAMGtieWK6Vksj4oUJcOKF7FqanV/view
        for (let k = 0; k < i; k++) {
            let prevPath = sortedPaths[k];
            // let prevSlippageFactor = slippageFactors[prevPath.id];
            let prevSlippageFactor = prevPath.slippagePriceFactor;
            // If the slippagePriceFactor of this path is less than that of the 
            // previous than they will cross at amountCross: 
            if (path.slippagePriceFactor.isLessThan(prevSlippageFactor)) {
                let amountCross = bmath_1.bdiv(path.spotPrice.minus(prevPath.spotPrice), prevSlippageFactor.minus(path.slippagePriceFactor));
                // Check for case A
                if (amountCross.isLessThan(path.limitAmount) &&
                    amountCross.isLessThan(prevPath.limitAmount)) {
                    let epiA = {};
                    epiA.price = path.spotPrice.plus(bmath_1.bmul(amountCross, path.slippagePriceFactor));
                    // Add price of interest with the information of the paths ids 
                    // that are crossing in the format [demoted path, promoted path],
                    // which means the first pathId is the one that's becoming worse after
                    // the cross, and the second path is becoming better.
                    epiA.swap = [prevPath.id, path.id]; // TODO change 'swap' for 'cross' to avoid confusion
                    pricesOfInterest.push(epiA);
                }
                // Check for case B
                if (prevPath.limitAmount.isLessThan(path.limitAmount) &&
                    prevPath.limitAmount.isLessThan(amountCross)) {
                    let epiB = {};
                    epiB.price = path.spotPrice.plus(bmath_1.bmul(prevPath.limitAmount, path.slippagePriceFactor));
                    // Add cross information similarly to case A above
                    epiB.swap = [prevPath.id, path.id];
                    pricesOfInterest.push(epiB);
                }
                // Check for case C
                if (path.limitAmount.isLessThan(prevPath.limitAmount) &&
                    amountCross.isLessThan(path.limitAmount)) {
                    let epiC = {};
                    epiC.price = prevPath.spotPrice.plus(bmath_1.bmul(path.limitAmount, prevSlippageFactor));
                    // Add cross information similarly to case A above
                    epiC.swap = [path.id, prevPath.id];
                    pricesOfInterest.push(epiC);
                }
            }
            else {
                // This means the paths won't normally cross, so only case where 
                // this could happen is if the limitAmount of the previous path 
                // is lower than that of this path
                if (prevPath.limitAmount.isLessThan(path.limitAmount)) {
                    let epiD = {};
                    epiD.price = path.spotPrice.plus(bmath_1.bmul(prevPath.limitAmount, path.slippagePriceFactor));
                    // Add cross information similarly to case A above
                    epiD.swap = [prevPath.id, path.id];
                    pricesOfInterest.push(epiD);
                }
            }
        }
    });
    return pricesOfInterest;
}
function calculateBestPathIdsForPricesOfInterest(pricesOfInterest, maxPools) {
    let bestPathsIds = [];
    pricesOfInterest.forEach((poi, i) => {
        if (poi.id != null) {
            // Only add to bestPathsIds if the amount of paths length hasn't reached maxPools
            // This is a conservative choice as with with number of paths = maxPools we guarantee we have information
            // necessary to find up to maxPools pools, as each path has at least 1 pool.
            if (bestPathsIds.length < maxPools)
                bestPathsIds.push(poi.id);
        }
        else if (poi.swap) {
            let index1 = bestPathsIds.indexOf(poi.swap[0]);
            let index2 = bestPathsIds.indexOf(poi.swap[1]);
            if (index1 != -1) {
                if (index2 != -1) {
                    // If both paths are already in bestPaths then we have to
                    // make sure index1 < index2 to avoid a bug in an edge case
                    // where multiple paths swaps happen at the exact same priceOfInterest
                    if (index1 < index2) {
                        let bestPath1 = bestPathsIds[index1];
                        let bestPath2 = bestPathsIds[index2];
                        bestPathsIds[index1] = bestPath2;
                        bestPathsIds[index2] = bestPath1;
                    }
                }
                else {
                    bestPathsIds[index1] = poi.swap[1];
                }
            }
        }
        else if (poi.maxAmount) {
            // Do nothing
        }
        else {
            console.log(poi);
            console.error('ERROR: poolID or swap not found in pricesOfInterest');
        }
        pricesOfInterest[i].bestPathsIds = bestPathsIds.slice();
    });
    return pricesOfInterest;
}
function getSwapAmountsForPriceOfInterest(paths, pathIds, poi) {
    let swapAmounts = [];
    pathIds.forEach((bid, i) => {
        let path = paths.find(obj => {
            return obj.id === bid;
        });
        let inputAmount = bmath_1.bdiv(poi.minus(path.spotPrice), path.slippagePriceFactor);
        if (inputAmount.isNaN())
            inputAmount = bmath_1.bnum(0);
        if (path.limitAmount.isLessThan(inputAmount)) {
            inputAmount = path.limitAmount;
        }
        swapAmounts.push(inputAmount);
    });
    return swapAmounts;
}
exports.calcTotalReturn = (pools, paths, swapType, pathIds, swapAmounts) => {
    let path;
    let totalReturn = new bignumber_1.BigNumber(0);
    let poolsClone = JSON.parse(JSON.stringify(pools)); // we create a clone to avoid
    // changing the contents of pools (parameter passed as reference)
    pathIds.forEach((b, i) => {
        path = paths.find(obj => {
            return obj.id === b;
        });
        totalReturn = totalReturn.plus(helpers_1.getReturnAmountSwapPath(poolsClone, path, swapType, swapAmounts[i]));
    });
    return totalReturn;
};
function getExactSwapAmounts(swapAmountsPriceBefore, swapAmountsPriceAfter, totalSwapAmountWithRoundingErrors) {
    let deltaBeforeAfterAmounts = [];
    if (swapAmountsPriceAfter[swapAmountsPriceAfter.length - 1].isEqualTo(new bignumber_1.BigNumber(0)))
        swapAmountsPriceAfter.pop();
    swapAmountsPriceAfter.forEach((a, i) => {
        let diff = a.minus(swapAmountsPriceBefore[i]);
        deltaBeforeAfterAmounts.push(diff);
    });
    let totalInputBefore = swapAmountsPriceBefore.reduce((a, b) => a.plus(b));
    let totalInputAfter = swapAmountsPriceAfter.reduce((a, b) => a.plus(b));
    let deltaTotalInput = totalInputAfter.minus(totalInputBefore);
    let deltaTimesTarget = [];
    deltaBeforeAfterAmounts.forEach((a, i) => {
        let ratio = bmath_1.bdiv(totalSwapAmountWithRoundingErrors.minus(totalInputBefore), deltaTotalInput);
        let deltaAmount = bmath_1.bmul(ratio, a);
        deltaTimesTarget.push(deltaAmount);
    });
    let swapAmounts = [];
    swapAmountsPriceBefore.forEach((a, i) => {
        let add = a.plus(deltaTimesTarget[i]);
        swapAmounts.push(add);
    });
    return swapAmounts;
}


/***/ }),

/***/ 40199:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const bignumber_js_1 = __webpack_require__(42263);
exports.BigNumber = bignumber_js_1.BigNumber;
bignumber_js_1.BigNumber.config({
    EXPONENTIAL_AT: [-100, 100],
    ROUNDING_MODE: 1,
    DECIMAL_PLACES: 18,
});


/***/ }),

/***/ 50796:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const bignumber_1 = __webpack_require__(40199);
const bmath_1 = __webpack_require__(42389);
const sor = __importStar(__webpack_require__(15092));
class SOR {
    constructor(Provider, GasPrice, MaxPools, ChainId, PoolsUrl) {
        // avg Balancer swap cost. Can be updated manually if required.
        this.swapCost = new bignumber_1.BigNumber('100000');
        this.tokenCost = {};
        this.onChainCache = { pools: [] };
        this.poolsForPairsCache = {};
        this.processedDataCache = {};
        this.isAllFetched = false;
        this.MULTIADDR = {
            1: '0x514053acec7177e277b947b1ebb5c08ab4c4580e',
            42: '0x71c7f1086aFca7Aa1B0D4d73cfa77979d10D3210',
        };
        this.provider = Provider;
        this.gasPrice = GasPrice;
        this.maxPools = MaxPools;
        this.chainId = ChainId;
        this.poolsUrl = PoolsUrl;
        this.pools = new sor.POOLS();
    }
    /*
    Find and cache cost of token.
    */
    setCostOutputToken(TokenOut, Cost = null) {
        return __awaiter(this, void 0, void 0, function* () {
            TokenOut = TokenOut.toLowerCase();
            if (Cost === null) {
                // This calculates the cost to make a swap which is used as an input to SOR to allow it to make gas efficient recommendations
                const costOutputToken = yield sor.getCostOutputToken(TokenOut, this.gasPrice, this.swapCost, this.provider, this.chainId);
                this.tokenCost[TokenOut] = costOutputToken;
            }
            else {
                this.tokenCost[TokenOut] = Cost;
            }
        });
    }
    // Fetch allPools from URL then retrieve OnChain balances
    fetchPools() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let allPools = yield this.pools.getAllPublicSwapPools(this.poolsUrl);
                let previousStringify = JSON.stringify(this.onChainCache); // Used for compare
                this.onChainCache = yield this.fetchOnChainPools(allPools);
                // If new pools are different from previous then any previous processed data is out of date so clear
                if (previousStringify !== JSON.stringify(this.onChainCache)) {
                    this.processedDataCache = {};
                }
                this.isAllFetched = true;
                return true;
            }
            catch (err) {
                // On error clear all caches and return false so user knows to try again.
                this.isAllFetched = false;
                this.onChainCache = { pools: [] };
                this.processedDataCache = {};
                console.error(`Error: fetchPools(): ${err.message}`);
                return false;
            }
        });
    }
    /*
    Uses multicall contact to fetch all onchain balances for pools.
    */
    fetchOnChainPools(SubgraphPools) {
        return __awaiter(this, void 0, void 0, function* () {
            if (SubgraphPools.pools.length === 0) {
                console.error('ERROR: No Pools To Fetch.');
                return { pools: [] };
            }
            let onChainPools = yield sor.getAllPoolDataOnChain(SubgraphPools, this.MULTIADDR[this.chainId], this.provider);
            // Error with multicall
            if (!onChainPools)
                return { pools: [] };
            return onChainPools;
        });
    }
    /*
    Main function to retrieve swap information.
    */
    getSwaps(TokenIn, TokenOut, SwapType, SwapAmt) {
        return __awaiter(this, void 0, void 0, function* () {
            // The Subgraph returns tokens in lower case format so we must match this
            TokenIn = TokenIn.toLowerCase();
            TokenOut = TokenOut.toLowerCase();
            let swaps, total, marketSp;
            if (this.isAllFetched) {
                // All Pools with OnChain Balances is already fetched so use that
                [swaps, total, marketSp] = yield this.processSwaps(TokenIn, TokenOut, SwapType, SwapAmt, this.onChainCache);
            }
            else {
                // Haven't retrieved all pools/balances so we use the pools for pairs if previously fetched
                if (!this.poolsForPairsCache[this.createKey(TokenIn, TokenOut)])
                    return [[[]], bmath_1.bnum(0), bmath_1.bnum(0)];
                [swaps, total, marketSp] = yield this.processSwaps(TokenIn, TokenOut, SwapType, SwapAmt, this.poolsForPairsCache[this.createKey(TokenIn, TokenOut)], false);
            }
            return [swaps, total, marketSp];
        });
    }
    // Will process swap/pools data and return best swaps
    // UserProcessCache can be false to force fresh processing of paths/prices
    processSwaps(TokenIn, TokenOut, SwapType, SwapAmt, OnChainPools, UserProcessCache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (OnChainPools.pools.length === 0)
                return [[[]], bmath_1.bnum(0), bmath_1.bnum(0)];
            let pools, paths, epsOfInterest, marketSp;
            // If token pair has been processed before that info can be reused to speed up execution
            let cache = this.processedDataCache[`${TokenIn}${TokenOut}${SwapType}`];
            // UserProcessCache can be false to force fresh processing of paths/prices
            if (!UserProcessCache || !cache) {
                // If not previously cached we must process all paths/prices.
                // Always use onChain info
                // Some functions alter pools list directly but we want to keep original so make a copy to work from
                let poolsList = JSON.parse(JSON.stringify(OnChainPools));
                let pathData;
                [pools, pathData] = this.processPairPools(TokenIn, TokenOut, poolsList);
                [paths, epsOfInterest, marketSp] = this.processPathsAndPrices(pathData, pools, SwapType);
                // Update cache if used
                if (UserProcessCache)
                    this.processedDataCache[`${TokenIn}${TokenOut}${SwapType}`] = {
                        pools: pools,
                        paths: paths,
                        epsOfInterest: epsOfInterest,
                        marketSp: marketSp,
                    };
            }
            else {
                // Using pre-processed data from cache
                pools = cache.pools;
                paths = cache.paths;
                epsOfInterest = cache.epsOfInterest;
                marketSp = cache.marketSp;
            }
            // Use previously stored value if exists else default to 0
            let costOutputToken = this.tokenCost[TokenOut];
            if (costOutputToken === undefined) {
                costOutputToken = new bignumber_1.BigNumber(0);
            }
            // Returns list of swaps
            // swapExactIn - total = total amount swap will return of TokenOut
            // swapExactOut - total = total amount of TokenIn required for swap
            let swaps, total;
            [swaps, total] = sor.smartOrderRouterMultiHopEpsOfInterest(JSON.parse(JSON.stringify(pools)), // Need to keep original pools for cache
            paths, SwapType, SwapAmt, this.maxPools, costOutputToken, epsOfInterest);
            return [swaps, total, marketSp];
        });
    }
    /*
    This is used as a quicker alternative to fetching all pools information.
    A subset of pools for token pair is found by checking swaps for range of input amounts.
    The onchain balances for the subset of pools is retrieved and cached for future swap calculations (i.e. when amts change).
    */
    fetchFilteredPairPools(TokenIn, TokenOut) {
        return __awaiter(this, void 0, void 0, function* () {
            TokenIn = TokenIn.toLowerCase();
            TokenOut = TokenOut.toLowerCase();
            try {
                // Get all IPFS pools (with balance)
                let allPoolsNonBig = yield this.pools.getAllPublicSwapPools(this.poolsUrl);
                // Convert to BigNumber format
                let allPools = yield this.pools.formatPoolsBigNumber(allPoolsNonBig);
                let decimalsIn = 0;
                let decimalsOut = 0;
                // Find token decimals for scaling
                for (let i = 0; i < allPools.pools.length; i++) {
                    for (let j = 0; j < allPools.pools[i].tokens.length; j++) {
                        if (allPools.pools[i].tokens[j].address === TokenIn) {
                            decimalsIn = Number(allPools.pools[i].tokens[j].decimals);
                            if (decimalsIn > 0 && decimalsOut > 0)
                                break;
                        }
                        else if (allPools.pools[i].tokens[j].address === TokenOut) {
                            decimalsOut = Number(allPools.pools[i].tokens[j].decimals);
                            if (decimalsIn > 0 && decimalsOut > 0)
                                break;
                        }
                    }
                    if (decimalsIn > 0 && decimalsOut > 0)
                        break;
                }
                // These can be shared for both swap Types
                let pools, pathData;
                [pools, pathData] = this.processPairPools(TokenIn, TokenOut, allPools);
                // Find paths and prices for swap types
                let pathsExactIn, epsExactIn;
                [pathsExactIn, epsExactIn] = this.processPathsAndPrices(JSON.parse(JSON.stringify(pathData)), pools, 'swapExactIn');
                let pathsExactOut, epsExactOut;
                [pathsExactOut, epsExactOut] = this.processPathsAndPrices(pathData, pools, 'swapExactOut');
                // Use previously stored value if exists else default to 0
                let costOutputToken = this.tokenCost[TokenOut];
                if (costOutputToken === undefined) {
                    costOutputToken = new bignumber_1.BigNumber(0);
                }
                let allSwaps = [];
                let range = [
                    bmath_1.bnum('0.01'),
                    bmath_1.bnum('0.1'),
                    bmath_1.bnum('1'),
                    bmath_1.bnum('10'),
                    bmath_1.bnum('100'),
                    bmath_1.bnum('1000'),
                ];
                // Calculate swaps for swapExactIn/Out over range and save swaps (with pools) returned
                range.forEach(amt => {
                    let amtIn = bmath_1.scale(amt, decimalsIn);
                    let amtOut = amtIn;
                    if (decimalsIn !== decimalsOut)
                        amtOut = bmath_1.scale(amt, decimalsOut);
                    let swaps, total;
                    [swaps, total] = sor.smartOrderRouterMultiHopEpsOfInterest(JSON.parse(JSON.stringify(pools)), // Need to keep original pools
                    pathsExactIn, 'swapExactIn', amtIn, this.maxPools, costOutputToken, epsExactIn);
                    allSwaps.push(swaps);
                    [swaps, total] = sor.smartOrderRouterMultiHopEpsOfInterest(JSON.parse(JSON.stringify(pools)), // Need to keep original pools
                    pathsExactOut, 'swapExactOut', amtOut, this.maxPools, costOutputToken, epsExactOut);
                    allSwaps.push(swaps);
                });
                // List of unique pool addresses
                let filteredPools = [];
                // get unique swap pools
                allSwaps.forEach(swap => {
                    swap.forEach(seq => {
                        seq.forEach(p => {
                            if (!filteredPools.includes(p.pool))
                                filteredPools.push(p.pool);
                        });
                    });
                });
                // Get list of pool infos for pools of interest
                let poolsOfInterest = [];
                for (let i = 0; i < allPoolsNonBig.pools.length; i++) {
                    let index = filteredPools.indexOf(allPoolsNonBig.pools[i].id);
                    if (index > -1) {
                        filteredPools.splice(index, 1);
                        poolsOfInterest.push(allPoolsNonBig.pools[i]);
                        if (filteredPools.length === 0)
                            break;
                    }
                }
                let onChainPools = { pools: [] };
                if (poolsOfInterest.length !== 0) {
                    // Retrieves onchain balances for pools list
                    onChainPools = yield sor.getAllPoolDataOnChain({ pools: poolsOfInterest }, this.MULTIADDR[this.chainId], this.provider);
                }
                // Add to cache for future use
                this.poolsForPairsCache[this.createKey(TokenIn, TokenOut)] = onChainPools;
                return true;
            }
            catch (err) {
                console.error(`Error: fetchFilteredPairPools(): ${err.message}`);
                // Add to cache for future use
                this.poolsForPairsCache[this.createKey(TokenIn, TokenOut)] = {
                    pools: [],
                };
                return false;
            }
        });
    }
    // Finds pools and paths for token pairs. Independent of swap type.
    processPairPools(TokenIn, TokenOut, poolsList) {
        // Retrieves intermediate pools along with tokens that are contained in these.
        let directPools, hopTokens, poolsTokenIn, poolsTokenOut;
        [directPools, hopTokens, poolsTokenIn, poolsTokenOut] = sor.filterPools(poolsList.pools, TokenIn, TokenOut, this.maxPools);
        // Sort intermediate pools by order of liquidity
        let mostLiquidPoolsFirstHop, mostLiquidPoolsSecondHop;
        [
            mostLiquidPoolsFirstHop,
            mostLiquidPoolsSecondHop,
        ] = sor.sortPoolsMostLiquid(TokenIn, TokenOut, hopTokens, poolsTokenIn, poolsTokenOut);
        // Finds the possible paths to make the swap
        let pathData;
        let pools;
        [pools, pathData] = sor.parsePoolData(directPools, TokenIn, TokenOut, mostLiquidPoolsFirstHop, mostLiquidPoolsSecondHop, hopTokens);
        return [pools, pathData];
    }
    // SwapType dependent - calculates paths prices/amounts
    processPathsAndPrices(PathArray, PoolsDict, SwapType) {
        const paths = sor.processPaths(PathArray, PoolsDict, SwapType);
        const bestSpotPrice = sor.getMarketSpotPrice(paths);
        const eps = sor.processEpsOfInterestMultiHop(paths, SwapType, this.maxPools);
        return [paths, eps, bestSpotPrice];
    }
    // Used for cache ids
    createKey(Token1, Token2) {
        return Token1 < Token2 ? `${Token1}${Token2}` : `${Token2}${Token1}`;
    }
    // Check if pair data already fetched (using fetchFilteredPairPools)
    hasDataForPair(TokenIn, TokenOut) {
        TokenIn = TokenIn.toLowerCase();
        TokenOut = TokenOut.toLowerCase();
        if (this.isAllFetched ||
            this.poolsForPairsCache[this.createKey(TokenIn, TokenOut)])
            return true;
        else
            return false;
    }
}
exports.SOR = SOR;


/***/ }),

/***/ 30635:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]');

/***/ }),

/***/ 23388:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[{"internalType":"address[][]","name":"pools","type":"address[][]"},{"internalType":"uint256","name":"length","type":"uint256"}],"name":"getPoolInfo","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]');

/***/ }),

/***/ 14511:
/***/ ((module) => {

module.exports = JSON.parse('{"tokens":[{"address":"0x985dd3d42de1e256d09e1c10f112bccb8015ad41","symbol":"OCEAN"},{"address":"0x7afebbb46fdb47ed17b22ed075cde2447694fb9e","symbol":"OCEAN2"}]}');

/***/ })

}]);