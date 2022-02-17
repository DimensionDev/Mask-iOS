"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9979],{

/***/ 91391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ instagramShared)
/* harmony export */ });
/* harmony import */ var _social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74762);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77287);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76745);



const instagramShared = {
    ..._base__WEBPACK_IMPORTED_MODULE_2__/* .instagramBase */ .j,
    utils: {
        getHomePage: ()=>'https://www.instagram.com/'
        ,
        createPostContext: (0,_social_network_utils_create_post_context__WEBPACK_IMPORTED_MODULE_0__/* .createSNSAdaptorSpecializedPostContext */ .k)({
            payloadParser: _utils__WEBPACK_IMPORTED_MODULE_1__/* .deconstructPayload */ .Qn
        })
    }
};


/***/ }),

/***/ 99979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76745);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91391);


const define = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .instagramWorkerBase */ .x,
    ..._shared__WEBPACK_IMPORTED_MODULE_1__/* .instagramShared */ .U,
    tasks: {
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (define);


/***/ }),

/***/ 74762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ createSNSAdaptorSpecializedPostContext),
/* harmony export */   "T": () => (/* binding */ createRefsForCreatePostContext)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63371);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64614);



function createSNSAdaptorSpecializedPostContext(create) {
    return function createPostContext(opt) {
        var ref, ref1, ref2, ref3;
        const cancel = [];
        (ref = opt.signal) === null || ref === void 0 ? void 0 : ref.addEventListener('abort', ()=>{
            return cancel.forEach((fn)=>{
                return fn === null || fn === void 0 ? void 0 : fn();
            });
        });
        //#region Post text content
        const postContent = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(extractText());
        cancel.push(opt.rawMessage.subscribe(()=>postContent.value = extractText()
        ));
        function extractText() {
            return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.extractTextFromTypedMessage)(opt.rawMessage.getCurrentValue()).unwrapOr('');
        }
        //#endregion
        //#region Mentioned links
        const links = new _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ObservableSet();
        cancel.push(postContent.addListener((post)=>{
            var ref4;
            links.clear();
            (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.parseURL)(post).forEach((link)=>links.add(link)
            );
            (ref4 = opt.postMentionedLinksProvider) === null || ref4 === void 0 ? void 0 : ref4.getCurrentValue().forEach((link)=>links.add(link)
            );
        }));
        cancel.push((ref1 = opt.postMentionedLinksProvider) === null || ref1 === void 0 ? void 0 : ref1.subscribe(()=>{
            var // Not clean old links cause post content not changed
            ref5;
            (ref5 = opt.postMentionedLinksProvider) === null || ref5 === void 0 ? void 0 : ref5.getCurrentValue().forEach((link)=>links.add(link)
            );
        }));
        const linksSubscribe = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDebug)({
            getCurrentValue: ()=>[
                    ...links
                ]
            ,
            subscribe: (sub)=>links.event.on(_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ALL_EVENTS, sub)
        });
        //#endregion
        //#region Parse payload
        const postPayload = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef((0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG)(new Error('Empty')));
        parsePayload();
        cancel.push(postContent.addListener(parsePayload));
        cancel.push(linksSubscribe.subscribe(parsePayload));
        function parsePayload() {
            // TODO: Also parse for payload in the image.
            let lastResult = (0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG)(new Error('No candidate'));
            for (const each of (create.payloadDecoder || ((x)=>[
                    x
                ]
            ))(postContent.value + linksSubscribe.getCurrentValue().join('\n'))){
                lastResult = create.payloadParser(each);
                if (lastResult.ok) {
                    postPayload.value = lastResult;
                    return;
                }
            }
            if (postPayload.value.err) postPayload.value = lastResult;
        }
        //#endregion
        const author = {
            avatarURL: opt.avatarURL,
            nickname: opt.nickname,
            postBy: opt.postBy,
            postID: opt.postID
        };
        const transformedPostContent = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef((0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.makeTypedMessageTupleFromList)(), _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.isTypedMessageEqual);
        const postIdentifier = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDebug)({
            getCurrentValue: ()=>{
                const by = opt.postBy.getCurrentValue();
                const id = opt.postID.getCurrentValue();
                if (by.isUnknown || id === null) return null;
                return new _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.PostIdentifier(by, id);
            },
            subscribe: (sub)=>{
                const a = opt.postBy.subscribe(sub);
                const b = opt.postID.subscribe(sub);
                return ()=>void [
                        a(),
                        b()
                    ]
                ;
            }
        });
        return {
            ...author,
            get rootNode () {
                return opt.rootElement.realCurrent;
            },
            rootNodeProxy: opt.rootElement,
            postContentNode: opt.suggestedInjectionPoint,
            comment: opt.comments,
            commentBoxSelector: (ref2 = opt.comments) === null || ref2 === void 0 ? void 0 : ref2.commentBoxSelector,
            commentsSelector: (ref3 = opt.comments) === null || ref3 === void 0 ? void 0 : ref3.commentsSelector,
            postIdentifier,
            url: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDebug)({
                getCurrentValue: ()=>{
                    var ref6;
                    const id = postIdentifier.getCurrentValue();
                    if (id) return ((ref6 = create.getURLFromPostIdentifier) === null || ref6 === void 0 ? void 0 : ref6.call(create, id)) || null;
                    return null;
                },
                subscribe: (sub)=>postIdentifier.subscribe(sub)
            }),
            postMentionedLinks: linksSubscribe,
            postMetadataImages: opt.postImagesProvider || (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDebug)({
                getCurrentValue: ()=>[]
                ,
                subscribe: ()=>()=>{
                    }
            }),
            postMetadataMentionedLinks: linksSubscribe,
            postMessage: opt.rawMessage,
            transformedPostContent,
            postContent: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionFromValueRef)(postContent),
            postPayload: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionFromValueRef)(postPayload),
            decryptedPayloadForImage: new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(null),
            iv: new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(null),
            publicShared: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDebug)({
                getCurrentValue: ()=>postPayload.value.map((val)=>val.version === -38 && val.sharedPublic
                    ).unwrapOr(undefined)
                ,
                subscribe: (sub)=>postPayload.addListener(sub)
            })
        };
    };
}
function createRefsForCreatePostContext() {
    const avatarURL = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(null);
    const nickname = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(null);
    const postBy = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ProfileIdentifier.unknown, _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ProfileIdentifier.equals);
    const postID = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(null);
    const url = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(null);
    const postMessage = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef((0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.makeTypedMessageTupleFromList)());
    const postMetadataImages = new _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ObservableSet();
    const postMetadataMentionedLinks = new _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ObservableMap();
    const subscriptions = {
        avatarURL: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionFromValueRef)(avatarURL),
        nickname: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionFromValueRef)(nickname),
        postBy: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionFromValueRef)(postBy),
        postID: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionFromValueRef)(postID),
        rawMessage: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionFromValueRef)(postMessage),
        postImagesProvider: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDebug)({
            getCurrentValue: ()=>[
                    ...postMetadataImages
                ]
            ,
            subscribe: (sub)=>postMetadataImages.event.on(_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ALL_EVENTS, sub)
        }),
        postMentionedLinksProvider: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDebug)({
            getCurrentValue: ()=>[
                    ...postMetadataMentionedLinks.values()
                ]
            ,
            subscribe: (sub)=>postMetadataMentionedLinks.event.on(_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ALL_EVENTS, sub)
        })
    };
    return {
        subscriptions,
        avatarURL,
        nickname,
        postBy,
        postID,
        postMessage,
        postMetadataMentionedLinks,
        postMetadataImages
    };
}


/***/ })

}]);