"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9259],{

/***/ 93537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "hi": () => (/* binding */ toJpeg)
});

// UNUSED EXPORTS: getFontEmbedCSS, toBlob, toCanvas, toPixelData, toPng, toSvg

;// CONCATENATED MODULE: ../../node_modules/.pnpm/html-to-image@1.9.0/node_modules/html-to-image/es/util.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const WOFF = 'application/font-woff';
const JPEG = 'image/jpeg';
const mimes = {
    woff: WOFF,
    woff2: WOFF,
    ttf: 'application/font-truetype',
    eot: 'application/vnd.ms-fontobject',
    png: 'image/png',
    jpg: JPEG,
    jpeg: JPEG,
    gif: 'image/gif',
    tiff: 'image/tiff',
    svg: 'image/svg+xml',
};
function getExtension(url) {
    const match = /\.([^./]*?)$/g.exec(url);
    return match ? match[1] : '';
}
function getMimeType(url) {
    const extension = getExtension(url).toLowerCase();
    return mimes[extension] || '';
}
function resolveUrl(url, baseUrl) {
    // url is absolute already
    if (url.match(/^[a-z]+:\/\//i)) {
        return url;
    }
    // url is absolute already, without protocol
    if (url.match(/^\/\//)) {
        return window.location.protocol + url;
    }
    // dataURI, mailto:, tel:, etc.
    if (url.match(/^[a-z]+:/i)) {
        return url;
    }
    const doc = document.implementation.createHTMLDocument();
    const base = doc.createElement('base');
    const a = doc.createElement('a');
    doc.head.appendChild(base);
    doc.body.appendChild(a);
    if (baseUrl) {
        base.href = baseUrl;
    }
    a.href = url;
    return a.href;
}
function isDataUrl(url) {
    return url.search(/^(data:)/) !== -1;
}
function makeDataUrl(content, mimeType) {
    return `data:${mimeType};base64,${content}`;
}
function parseDataUrlContent(dataURL) {
    return dataURL.split(/,/)[1];
}
const uuid = (function uuid() {
    // generate uuid for className of pseudo elements.
    // We should not use GUIDs, otherwise pseudo elements sometimes cannot be captured.
    let counter = 0;
    // ref: http://stackoverflow.com/a/6248722/2519373
    const random = () => 
    // eslint-disable-next-line no-bitwise
    `0000${((Math.random() * Math.pow(36, 4)) << 0).toString(36)}`.slice(-4);
    return () => {
        counter += 1;
        return `u${random()}${counter}`;
    };
})();
const delay = (ms) => (args) => new Promise((resolve) => setTimeout(() => resolve(args), ms));
function toArray(arrayLike) {
    const arr = [];
    for (let i = 0, l = arrayLike.length; i < l; i += 1) {
        arr.push(arrayLike[i]);
    }
    return arr;
}
function px(node, styleProperty) {
    const val = window.getComputedStyle(node).getPropertyValue(styleProperty);
    return parseFloat(val.replace('px', ''));
}
function getNodeWidth(node) {
    const leftBorder = px(node, 'border-left-width');
    const rightBorder = px(node, 'border-right-width');
    return node.clientWidth + leftBorder + rightBorder;
}
function getNodeHeight(node) {
    const topBorder = px(node, 'border-top-width');
    const bottomBorder = px(node, 'border-bottom-width');
    return node.clientHeight + topBorder + bottomBorder;
}
function getPixelRatio() {
    let ratio;
    let FINAL_PROCESS;
    try {
        FINAL_PROCESS = process;
    }
    catch (e) {
        // pass
    }
    const val = FINAL_PROCESS && FINAL_PROCESS.env
        ? FINAL_PROCESS.env.devicePixelRatio
        : null;
    if (val) {
        ratio = parseInt(val, 10);
        if (Number.isNaN(ratio)) {
            ratio = 1;
        }
    }
    return ratio || window.devicePixelRatio || 1;
}
function util_canvasToBlob(canvas) {
    if (canvas.toBlob) {
        return new Promise((resolve) => canvas.toBlob(resolve));
    }
    return new Promise((resolve) => {
        const binaryString = window.atob(canvas.toDataURL().split(',')[1]);
        const len = binaryString.length;
        const binaryArray = new Uint8Array(len);
        for (let i = 0; i < len; i += 1) {
            binaryArray[i] = binaryString.charCodeAt(i);
        }
        resolve(new Blob([binaryArray], { type: 'image/png' }));
    });
}
function createImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.crossOrigin = 'anonymous';
        img.decoding = 'sync';
        img.src = url;
    });
}
function svgToDataURL(svg) {
    return __awaiter(this, void 0, void 0, function* () {
        return Promise.resolve()
            .then(() => new XMLSerializer().serializeToString(svg))
            .then(encodeURIComponent)
            .then((html) => `data:image/svg+xml;charset=utf-8,${html}`);
    });
}
function nodeToDataURL(node, width, height) {
    return __awaiter(this, void 0, void 0, function* () {
        const xmlns = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(xmlns, 'svg');
        const foreignObject = document.createElementNS(xmlns, 'foreignObject');
        svg.setAttribute('width', `${width}`);
        svg.setAttribute('height', `${height}`);
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        foreignObject.setAttribute('width', '100%');
        foreignObject.setAttribute('height', '100%');
        foreignObject.setAttribute('x', '0');
        foreignObject.setAttribute('y', '0');
        foreignObject.setAttribute('externalResourcesRequired', 'true');
        svg.appendChild(foreignObject);
        foreignObject.appendChild(node);
        return svgToDataURL(svg);
    });
}
//# sourceMappingURL=util.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/html-to-image@1.9.0/node_modules/html-to-image/es/getBlobFromURL.js

const cache = {};
function getCacheKey(url) {
    let key = url.replace(/\?.*/, '');
    // font resourse
    if (/ttf|otf|eot|woff2?/i.test(key)) {
        key = key.replace(/.*\//, '');
    }
    return key;
}
function getBlobFromURL(url, options) {
    const cacheKey = getCacheKey(url);
    if (cache[cacheKey] != null) {
        return cache[cacheKey];
    }
    // cache bypass so we dont have CORS issues with cached images
    // ref: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
    if (options.cacheBust) {
        // eslint-disable-next-line no-param-reassign
        url += (/\?/.test(url) ? '&' : '?') + new Date().getTime();
    }
    const failed = (reason) => {
        let placeholder = '';
        if (options.imagePlaceholder) {
            const parts = options.imagePlaceholder.split(/,/);
            if (parts && parts[1]) {
                placeholder = parts[1];
            }
        }
        let msg = `Failed to fetch resource: ${url}`;
        if (reason) {
            msg = typeof reason === 'string' ? reason : reason.message;
        }
        if (msg) {
            console.error(msg);
        }
        return {
            blob: placeholder,
            contentType: '',
        };
    };
    const deferred = window
        .fetch(url)
        .then((res) => 
    // eslint-disable-next-line promise/no-nesting
    res.blob().then((blob) => ({
        blob,
        contentType: res.headers.get('Content-Type') || '',
    })))
        .then(({ blob, contentType }) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve({
            contentType,
            blob: reader.result,
        });
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    }))
        .then(({ blob, contentType }) => ({
        contentType,
        blob: parseDataUrlContent(blob),
    }))
        // on failed
        .catch(failed);
    // cache result
    cache[cacheKey] = deferred;
    return deferred;
}
//# sourceMappingURL=getBlobFromURL.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/html-to-image@1.9.0/node_modules/html-to-image/es/clonePseudoElements.js

function formatCSSText(style) {
    const content = style.getPropertyValue('content');
    return `${style.cssText} content: '${content.replace(/'|"/g, '')}';`;
}
function formatCSSProperties(style) {
    return toArray(style)
        .map((name) => {
        const value = style.getPropertyValue(name);
        const priority = style.getPropertyPriority(name);
        return `${name}: ${value}${priority ? ' !important' : ''};`;
    })
        .join(' ');
}
function getPseudoElementStyle(className, pseudo, style) {
    const selector = `.${className}:${pseudo}`;
    const cssText = style.cssText
        ? formatCSSText(style)
        : formatCSSProperties(style);
    return document.createTextNode(`${selector}{${cssText}}`);
}
function clonePseudoElement(nativeNode, clonedNode, pseudo) {
    const style = window.getComputedStyle(nativeNode, pseudo);
    const content = style.getPropertyValue('content');
    if (content === '' || content === 'none') {
        return;
    }
    const className = uuid();
    try {
        clonedNode.className = `${clonedNode.className} ${className}`;
    }
    catch (err) {
        return;
    }
    const styleElement = document.createElement('style');
    styleElement.appendChild(getPseudoElementStyle(className, pseudo, style));
    clonedNode.appendChild(styleElement);
}
function clonePseudoElements(nativeNode, clonedNode) {
    clonePseudoElement(nativeNode, clonedNode, ':before');
    clonePseudoElement(nativeNode, clonedNode, ':after');
}
//# sourceMappingURL=clonePseudoElements.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/html-to-image@1.9.0/node_modules/html-to-image/es/cloneNode.js
var cloneNode_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function cloneCanvasElement(node) {
    return cloneNode_awaiter(this, void 0, void 0, function* () {
        const dataURL = node.toDataURL();
        if (dataURL === 'data:,') {
            return Promise.resolve(node.cloneNode(false));
        }
        return createImage(dataURL);
    });
}
function cloneVideoElement(node, options) {
    return cloneNode_awaiter(this, void 0, void 0, function* () {
        return Promise.resolve(node.poster)
            .then((url) => getBlobFromURL(url, options))
            .then((data) => makeDataUrl(data.blob, getMimeType(node.poster) || data.contentType))
            .then((dataURL) => createImage(dataURL));
    });
}
function cloneSingleNode(node, options) {
    return cloneNode_awaiter(this, void 0, void 0, function* () {
        if (node instanceof HTMLCanvasElement) {
            return cloneCanvasElement(node);
        }
        if (node instanceof HTMLVideoElement && node.poster) {
            return cloneVideoElement(node, options);
        }
        return Promise.resolve(node.cloneNode(false));
    });
}
const isSlotElement = (node) => node.tagName != null && node.tagName.toUpperCase() === 'SLOT';
function cloneChildren(nativeNode, clonedNode, options) {
    var _a;
    return cloneNode_awaiter(this, void 0, void 0, function* () {
        const children = isSlotElement(nativeNode) && nativeNode.assignedNodes
            ? toArray(nativeNode.assignedNodes())
            : toArray(((_a = nativeNode.shadowRoot) !== null && _a !== void 0 ? _a : nativeNode).childNodes);
        if (children.length === 0 || nativeNode instanceof HTMLVideoElement) {
            return Promise.resolve(clonedNode);
        }
        return children
            .reduce((deferred, child) => deferred
            // eslint-disable-next-line no-use-before-define
            .then(() => cloneNode(child, options))
            .then((clonedChild) => {
            // eslint-disable-next-line promise/always-return
            if (clonedChild) {
                clonedNode.appendChild(clonedChild);
            }
        }), Promise.resolve())
            .then(() => clonedNode);
    });
}
function cloneCSSStyle(nativeNode, clonedNode) {
    const source = window.getComputedStyle(nativeNode);
    const target = clonedNode.style;
    if (!target) {
        return;
    }
    if (source.cssText) {
        target.cssText = source.cssText;
    }
    else {
        toArray(source).forEach((name) => {
            target.setProperty(name, source.getPropertyValue(name), source.getPropertyPriority(name));
        });
    }
}
function cloneInputValue(nativeNode, clonedNode) {
    if (nativeNode instanceof HTMLTextAreaElement) {
        clonedNode.innerHTML = nativeNode.value;
    }
    if (nativeNode instanceof HTMLInputElement) {
        clonedNode.setAttribute('value', nativeNode.value);
    }
}
function decorate(nativeNode, clonedNode) {
    return cloneNode_awaiter(this, void 0, void 0, function* () {
        if (!(clonedNode instanceof Element)) {
            return Promise.resolve(clonedNode);
        }
        return Promise.resolve()
            .then(() => cloneCSSStyle(nativeNode, clonedNode))
            .then(() => clonePseudoElements(nativeNode, clonedNode))
            .then(() => cloneInputValue(nativeNode, clonedNode))
            .then(() => clonedNode);
    });
}
function cloneNode(node, options, isRoot) {
    return cloneNode_awaiter(this, void 0, void 0, function* () {
        if (!isRoot && options.filter && !options.filter(node)) {
            return Promise.resolve(null);
        }
        return Promise.resolve(node)
            .then((clonedNode) => cloneSingleNode(clonedNode, options))
            .then((clonedNode) => cloneChildren(node, clonedNode, options))
            .then((clonedNode) => decorate(node, clonedNode));
    });
}
//# sourceMappingURL=cloneNode.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/html-to-image@1.9.0/node_modules/html-to-image/es/embedResources.js
var embedResources_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const URL_REGEX = /url\((['"]?)([^'"]+?)\1\)/g;
const URL_WITH_FORMAT_REGEX = /url\([^)]+\)\s*format\((["'])([^"']+)\1\)/g;
const FONT_SRC_REGEX = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function toRegex(url) {
    // eslint-disable-next-line no-useless-escape
    const escaped = url.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
    return new RegExp(`(url\\(['"]?)(${escaped})(['"]?\\))`, 'g');
}
function parseURLs(cssText) {
    const result = [];
    cssText.replace(URL_REGEX, (raw, quotation, url) => {
        result.push(url);
        return raw;
    });
    return result.filter((url) => !isDataUrl(url));
}
function embedResources_embed(cssText, resourceURL, baseURL, options, get) {
    const resolvedURL = baseURL ? resolveUrl(resourceURL, baseURL) : resourceURL;
    return Promise.resolve(resolvedURL)
        .then((url) => get ? get(url) : getBlobFromURL(url, options))
        .then((data) => {
        if (typeof data === 'string') {
            return makeDataUrl(data, getMimeType(resourceURL));
        }
        return makeDataUrl(data.blob, getMimeType(resourceURL) || data.contentType);
    })
        .then((dataURL) => cssText.replace(toRegex(resourceURL), `$1${dataURL}$3`))
        .then((content) => content, () => resolvedURL);
}
function filterPreferredFontFormat(str, { preferredFontFormat }) {
    return !preferredFontFormat
        ? str
        : str.replace(FONT_SRC_REGEX, (match) => {
            // eslint-disable-next-line no-constant-condition
            while (true) {
                const [src, , format] = URL_WITH_FORMAT_REGEX.exec(match) || [];
                if (!format) {
                    return '';
                }
                if (format === preferredFontFormat) {
                    return `src: ${src};`;
                }
            }
        });
}
function shouldEmbed(url) {
    return url.search(URL_REGEX) !== -1;
}
function embedResources(cssText, baseUrl, options) {
    return embedResources_awaiter(this, void 0, void 0, function* () {
        if (!shouldEmbed(cssText)) {
            return Promise.resolve(cssText);
        }
        const filteredCSSText = filterPreferredFontFormat(cssText, options);
        return Promise.resolve(filteredCSSText)
            .then(parseURLs)
            .then((urls) => urls.reduce((deferred, url) => 
        // eslint-disable-next-line promise/no-nesting
        deferred.then((css) => embedResources_embed(css, url, baseUrl, options)), Promise.resolve(filteredCSSText)));
    });
}
//# sourceMappingURL=embedResources.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/html-to-image@1.9.0/node_modules/html-to-image/es/embedImages.js
var embedImages_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function embedBackground(clonedNode, options) {
    var _a;
    return embedImages_awaiter(this, void 0, void 0, function* () {
        const background = (_a = clonedNode.style) === null || _a === void 0 ? void 0 : _a.getPropertyValue('background');
        if (!background) {
            return Promise.resolve(clonedNode);
        }
        return Promise.resolve(background)
            .then((cssString) => embedResources(cssString, null, options))
            .then((cssString) => {
            clonedNode.style.setProperty('background', cssString, clonedNode.style.getPropertyPriority('background'));
            return clonedNode;
        });
    });
}
function embedImageNode(clonedNode, options) {
    return embedImages_awaiter(this, void 0, void 0, function* () {
        if (!(clonedNode instanceof HTMLImageElement && !isDataUrl(clonedNode.src)) &&
            !(clonedNode instanceof SVGImageElement &&
                !isDataUrl(clonedNode.href.baseVal))) {
            return Promise.resolve(clonedNode);
        }
        const src = clonedNode instanceof HTMLImageElement
            ? clonedNode.src
            : clonedNode.href.baseVal;
        return Promise.resolve(src)
            .then((url) => getBlobFromURL(url, options))
            .then((data) => makeDataUrl(data.blob, getMimeType(src) || data.contentType))
            .then((dataURL) => new Promise((resolve, reject) => {
            clonedNode.onload = resolve;
            clonedNode.onerror = reject;
            if (clonedNode instanceof HTMLImageElement) {
                clonedNode.srcset = '';
                clonedNode.src = dataURL;
            }
            else {
                clonedNode.href.baseVal = dataURL;
            }
        }))
            .then(() => clonedNode, () => clonedNode);
    });
}
function embedChildren(clonedNode, options) {
    return embedImages_awaiter(this, void 0, void 0, function* () {
        const children = toArray(clonedNode.childNodes);
        // eslint-disable-next-line no-use-before-define
        const deferreds = children.map((child) => embedImages(child, options));
        return Promise.all(deferreds).then(() => clonedNode);
    });
}
function embedImages(clonedNode, options) {
    return embedImages_awaiter(this, void 0, void 0, function* () {
        if (!(clonedNode instanceof Element)) {
            return Promise.resolve(clonedNode);
        }
        return Promise.resolve(clonedNode)
            .then((node) => embedBackground(node, options))
            .then((node) => embedImageNode(node, options))
            .then((node) => embedChildren(node, options));
    });
}
//# sourceMappingURL=embedImages.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/html-to-image@1.9.0/node_modules/html-to-image/es/applyStyleWithOptions.js
function applyStyleWithOptions(node, options) {
    const { style } = node;
    if (options.backgroundColor) {
        style.backgroundColor = options.backgroundColor;
    }
    if (options.width) {
        style.width = `${options.width}px`;
    }
    if (options.height) {
        style.height = `${options.height}px`;
    }
    const manual = options.style;
    if (manual != null) {
        Object.keys(manual).forEach((key) => {
            style[key] = manual[key];
        });
    }
    return node;
}
//# sourceMappingURL=applyStyleWithOptions.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/html-to-image@1.9.0/node_modules/html-to-image/es/embedWebFonts.js
var embedWebFonts_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const cssFetchCache = {};
function fetchCSS(url) {
    const cache = cssFetchCache[url];
    if (cache != null) {
        return cache;
    }
    const deferred = window.fetch(url).then((res) => ({
        url,
        cssText: res.text(),
    }));
    cssFetchCache[url] = deferred;
    return deferred;
}
function embedFonts(meta) {
    return embedWebFonts_awaiter(this, void 0, void 0, function* () {
        return meta.cssText.then((raw) => {
            let cssText = raw;
            const regexUrl = /url\(["']?([^"')]+)["']?\)/g;
            const fontLocs = cssText.match(/url\([^)]+\)/g) || [];
            const loadFonts = fontLocs.map((location) => {
                let url = location.replace(regexUrl, '$1');
                if (!url.startsWith('https://')) {
                    url = new URL(url, meta.url).href;
                }
                // eslint-disable-next-line promise/no-nesting
                return window
                    .fetch(url)
                    .then((res) => res.blob())
                    .then((blob) => new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        // Side Effect
                        cssText = cssText.replace(location, `url(${reader.result})`);
                        resolve([location, reader.result]);
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                }));
            });
            // eslint-disable-next-line promise/no-nesting
            return Promise.all(loadFonts).then(() => cssText);
        });
    });
}
function parseCSS(source) {
    if (source == null) {
        return [];
    }
    const result = [];
    const commentsRegex = /(\/\*[\s\S]*?\*\/)/gi;
    // strip out comments
    let cssText = source.replace(commentsRegex, '');
    const keyframesRegex = new RegExp('((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})', 'gi');
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const matches = keyframesRegex.exec(cssText);
        if (matches === null) {
            break;
        }
        result.push(matches[0]);
    }
    cssText = cssText.replace(keyframesRegex, '');
    const importRegex = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;
    // to match css & media queries together
    const combinedCSSRegex = '((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]' +
        '*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})';
    // unified regex
    const unifiedRegex = new RegExp(combinedCSSRegex, 'gi');
    // eslint-disable-next-line no-constant-condition
    while (true) {
        let matches = importRegex.exec(cssText);
        if (matches === null) {
            matches = unifiedRegex.exec(cssText);
            if (matches === null) {
                break;
            }
            else {
                importRegex.lastIndex = unifiedRegex.lastIndex;
            }
        }
        else {
            unifiedRegex.lastIndex = importRegex.lastIndex;
        }
        result.push(matches[0]);
    }
    return result;
}
function getCSSRules(styleSheets) {
    return embedWebFonts_awaiter(this, void 0, void 0, function* () {
        const ret = [];
        const deferreds = [];
        // First loop inlines imports
        styleSheets.forEach((sheet) => {
            if ('cssRules' in sheet) {
                try {
                    toArray(sheet.cssRules).forEach((item, index) => {
                        if (item.type === CSSRule.IMPORT_RULE) {
                            let importIndex = index + 1;
                            const url = item.href;
                            const deferred = fetchCSS(url)
                                .then((metadata) => (metadata ? embedFonts(metadata) : ''))
                                .then((cssText) => parseCSS(cssText).forEach((rule) => {
                                try {
                                    sheet.insertRule(rule, rule.startsWith('@import')
                                        ? (importIndex += 1)
                                        : sheet.cssRules.length);
                                }
                                catch (error) {
                                    console.error('Error inserting rule from remote css', {
                                        rule,
                                        error,
                                    });
                                }
                            }))
                                .catch((e) => {
                                console.error('Error loading remote css', e.toString());
                            });
                            deferreds.push(deferred);
                        }
                    });
                }
                catch (e) {
                    const inline = styleSheets.find((a) => a.href == null) || document.styleSheets[0];
                    if (sheet.href != null) {
                        deferreds.push(fetchCSS(sheet.href)
                            .then((metadata) => (metadata ? embedFonts(metadata) : ''))
                            .then((cssText) => parseCSS(cssText).forEach((rule) => {
                            inline.insertRule(rule, sheet.cssRules.length);
                        }))
                            .catch((err) => {
                            console.error('Error loading remote stylesheet', err.toString());
                        }));
                    }
                    console.error('Error inlining remote css file', e.toString());
                }
            }
        });
        return Promise.all(deferreds).then(() => {
            // Second loop parses rules
            styleSheets.forEach((sheet) => {
                if ('cssRules' in sheet) {
                    try {
                        toArray(sheet.cssRules).forEach((item) => {
                            ret.push(item);
                        });
                    }
                    catch (e) {
                        console.error(`Error while reading CSS rules from ${sheet.href}`, e.toString());
                    }
                }
            });
            return ret;
        });
    });
}
function getWebFontRules(cssRules) {
    return cssRules
        .filter((rule) => rule.type === CSSRule.FONT_FACE_RULE)
        .filter((rule) => shouldEmbed(rule.style.getPropertyValue('src')));
}
function parseWebFontRules(node) {
    return embedWebFonts_awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (node.ownerDocument == null) {
                reject(new Error('Provided element is not within a Document'));
            }
            resolve(toArray(node.ownerDocument.styleSheets));
        })
            .then((styleSheets) => getCSSRules(styleSheets))
            .then(getWebFontRules);
    });
}
function embedWebFonts_getWebFontCSS(node, options) {
    return embedWebFonts_awaiter(this, void 0, void 0, function* () {
        return parseWebFontRules(node)
            .then((rules) => Promise.all(rules.map((rule) => {
            const baseUrl = rule.parentStyleSheet
                ? rule.parentStyleSheet.href
                : null;
            return embedResources(rule.cssText, baseUrl, options);
        })))
            .then((cssTexts) => cssTexts.join('\n'));
    });
}
function embedWebFonts(clonedNode, options) {
    return embedWebFonts_awaiter(this, void 0, void 0, function* () {
        return (options.fontEmbedCSS != null
            ? Promise.resolve(options.fontEmbedCSS)
            : embedWebFonts_getWebFontCSS(clonedNode, options)).then((cssText) => {
            const styleNode = document.createElement('style');
            const sytleContent = document.createTextNode(cssText);
            styleNode.appendChild(sytleContent);
            if (clonedNode.firstChild) {
                clonedNode.insertBefore(styleNode, clonedNode.firstChild);
            }
            else {
                clonedNode.appendChild(styleNode);
            }
            return clonedNode;
        });
    });
}
//# sourceMappingURL=embedWebFonts.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/html-to-image@1.9.0/node_modules/html-to-image/es/index.js
var es_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function getImageSize(node, options = {}) {
    const width = options.width || getNodeWidth(node);
    const height = options.height || getNodeHeight(node);
    return { width, height };
}
function toSvg(node, options = {}) {
    return es_awaiter(this, void 0, void 0, function* () {
        const { width, height } = getImageSize(node, options);
        return Promise.resolve(node)
            .then((nativeNode) => cloneNode(nativeNode, options, true))
            .then((clonedNode) => embedWebFonts(clonedNode, options))
            .then((clonedNode) => embedImages(clonedNode, options))
            .then((clonedNode) => applyStyleWithOptions(clonedNode, options))
            .then((clonedNode) => nodeToDataURL(clonedNode, width, height));
    });
}
const dimensionCanvasLimit = 16384; // as per https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#maximum_canvas_size
function checkCanvasDimensions(canvas) {
    if (canvas.width > dimensionCanvasLimit ||
        canvas.height > dimensionCanvasLimit) {
        if (canvas.width > dimensionCanvasLimit &&
            canvas.height > dimensionCanvasLimit) {
            if (canvas.width > canvas.height) {
                canvas.height *= dimensionCanvasLimit / canvas.width;
                canvas.width = dimensionCanvasLimit;
            }
            else {
                canvas.width *= dimensionCanvasLimit / canvas.height;
                canvas.height = dimensionCanvasLimit;
            }
        }
        else if (canvas.width > dimensionCanvasLimit) {
            canvas.height *= dimensionCanvasLimit / canvas.width;
            canvas.width = dimensionCanvasLimit;
        }
        else {
            canvas.width *= dimensionCanvasLimit / canvas.height;
            canvas.height = dimensionCanvasLimit;
        }
    }
}
function toCanvas(node, options = {}) {
    return es_awaiter(this, void 0, void 0, function* () {
        return toSvg(node, options)
            .then(createImage)
            .then((img) => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            const ratio = options.pixelRatio || getPixelRatio();
            const { width, height } = getImageSize(node, options);
            const canvasWidth = options.canvasWidth || width;
            const canvasHeight = options.canvasHeight || height;
            canvas.width = canvasWidth * ratio;
            canvas.height = canvasHeight * ratio;
            if (!options.skipAutoScale) {
                checkCanvasDimensions(canvas);
            }
            canvas.style.width = `${canvasWidth}`;
            canvas.style.height = `${canvasHeight}`;
            if (options.backgroundColor) {
                context.fillStyle = options.backgroundColor;
                context.fillRect(0, 0, canvas.width, canvas.height);
            }
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
            return canvas;
        });
    });
}
function toPixelData(node, options = {}) {
    return es_awaiter(this, void 0, void 0, function* () {
        const { width, height } = getImageSize(node, options);
        return toCanvas(node, options).then((canvas) => {
            const ctx = canvas.getContext('2d');
            return ctx.getImageData(0, 0, width, height).data;
        });
    });
}
function toPng(node, options = {}) {
    return es_awaiter(this, void 0, void 0, function* () {
        return toCanvas(node, options).then((canvas) => canvas.toDataURL());
    });
}
function toJpeg(node, options = {}) {
    return es_awaiter(this, void 0, void 0, function* () {
        return toCanvas(node, options).then((canvas) => canvas.toDataURL('image/jpeg', options.quality || 1));
    });
}
function toBlob(node, options = {}) {
    return es_awaiter(this, void 0, void 0, function* () {
        return toCanvas(node, options).then(canvasToBlob);
    });
}
function getFontEmbedCSS(node, options = {}) {
    return es_awaiter(this, void 0, void 0, function* () {
        return getWebFontCSS(node, options);
    });
}
//# sourceMappingURL=index.js.map

/***/ })

}]);