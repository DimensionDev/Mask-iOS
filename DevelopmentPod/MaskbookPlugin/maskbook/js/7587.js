"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7587],{

/***/ 25789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
}


/***/ }),

/***/ 66525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FW": () => (/* reexport safe */ _social_network_encode_decode__WEBPACK_IMPORTED_MODULE_2__.FW),
/* harmony export */   "Ft": () => (/* reexport safe */ _image_steganography__WEBPACK_IMPORTED_MODULE_3__.Ft),
/* harmony export */   "G6": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.G6),
/* harmony export */   "Gq": () => (/* reexport safe */ _payload__WEBPACK_IMPORTED_MODULE_0__.Gq),
/* harmony export */   "HI": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.HI),
/* harmony export */   "Mk": () => (/* reexport safe */ _image_steganography__WEBPACK_IMPORTED_MODULE_3__.Mk),
/* harmony export */   "OF": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.OF),
/* harmony export */   "Pj": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.Pj),
/* harmony export */   "VC": () => (/* reexport safe */ _payload__WEBPACK_IMPORTED_MODULE_0__.VC),
/* harmony export */   "WZ": () => (/* reexport safe */ _payload__WEBPACK_IMPORTED_MODULE_0__.WZ),
/* harmony export */   "Ym": () => (/* reexport safe */ _social_network_encode_decode__WEBPACK_IMPORTED_MODULE_2__.Ym),
/* harmony export */   "cV": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.cV),
/* harmony export */   "gO": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.gO),
/* harmony export */   "oX": () => (/* reexport safe */ _image_steganography__WEBPACK_IMPORTED_MODULE_3__.oX),
/* harmony export */   "pe": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.pe),
/* harmony export */   "qx": () => (/* reexport safe */ _payload__WEBPACK_IMPORTED_MODULE_0__.qx),
/* harmony export */   "zl": () => (/* reexport safe */ _social_network_encode_decode__WEBPACK_IMPORTED_MODULE_2__.zl)
/* harmony export */ });
/* harmony import */ var _payload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91743);
/* harmony import */ var _encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60119);
/* harmony import */ var _social_network_encode_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61066);
/* harmony import */ var _image_steganography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27420);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53908);






// TODO: remove them in the future



/***/ }),

/***/ 55031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ LeftArrowIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const LeftArrowIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('LeftArrowIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.5655 4.93744C16.8779 5.24986 16.8779 5.75639 16.5655 6.06881L10.1312 12.5031L16.5655 18.9374C16.8779 19.2499 16.8779 19.7564 16.5655 20.0688C16.2531 20.3812 15.7465 20.3812 15.4341 20.0688L8.43412 13.0688C8.1217 12.7564 8.1217 12.2499 8.43412 11.9374L15.4341 4.93744C15.7465 4.62502 16.2531 4.62502 16.5655 4.93744Z",
        fill: "currentColor"
    })
}), '0 0 25 25');


/***/ }),

/***/ 64947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ RightArrowIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const RightArrowIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('RightArrowIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.93451 20.0626C8.62209 19.7501 8.62209 19.2436 8.93451 18.9312L15.3688 12.4969L8.93451 6.06256C8.62209 5.75014 8.62209 5.24361 8.93451 4.93119C9.24693 4.61877 9.75346 4.61877 10.0659 4.93119L17.0659 11.9312C17.3783 12.2436 17.3783 12.7501 17.0659 13.0626L10.0659 20.0626C9.75346 20.375 9.24693 20.375 8.93451 20.0626Z",
        fill: "currentColor"
    })
}), '0 0 25 25');


/***/ }),

/***/ 59146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ addMaskI18N)
});

// UNUSED EXPORTS: languages

;// CONCATENATED MODULE: ./shared-ui/locales/en-US.json
const en_US_namespaceObject = JSON.parse('{"promote":"🎭 🎭🎭 Tired of plaintext？Try to send encrypted message to you friends. Install Mask.io to send your first encrypted tweet.","promote_red_packet":"🧧🧧🧧 Try sending Lucky Drop to your friends with tokens or NFTs to share the joy now! Install Mask.io to send your first Lucky Drop.","promote_ito":"Launch decentralized assets freely and participate in token launch directly on Twitter! Install Mask.io to participate in your first token launch activity.","promote_ito_short":"Install Mask.io to launch dencentralized assests freely on Twitter!","promote_file_service":"📃📃📃 Try to permanently use decentralized file storage on Twitter. Install Mask.io to upload and share first permanent decentralized file, powered by mainstream decentralized storage solutions.","promote_savings":"Hi friends, I just deposit {{amount}} {{symbol}} on {{chain}}. Follow @{{account}} to find more staking projects.","promote_collectible":"Display collectibles in variable NFT marketplaces, make an offer directly on social media. Install Mask.io to try to browse NFTs directly on Twitter.","promote_snapshot":"Want to actively participate in proposal vote and move projects forward? Install Mask.io to vote proposals directly on Twitter.","database_backup":"Backup Database","database_overwrite":"Overwrite Database with backup","database_clear":"Clear Database","debug_new_bug_issue":"New bug issue","debug_metadata_title":"Add new metadata or replace existing metadata","debug_metadata_put_metadata":"Put metadata","edit":"Edit","clear":"Clear","connect":"Connect","back":"Back","more":"More","approve":"Approve","address":"Address","operation":"Operation","gas_limit":"Gas Limit","gas_price":"Gas Price","redirect_to":"Redirect to","sign":"Sign","reload":"Reload","load":"Load","load_all":"Load All","no_data":"No Data","tip":"Tip","tags":"Tags","contract":"Contract","plugins":"Plugins","persona_required":"Persona required.","initializing":"Initializing...","redirect_alert":"If your browser does not redirect, please <terms>click here</terms>.","typed_message_text_alert":"Only TypedMessageText is supported currently.","badge_renderer_provided_by_plugin":"Provided by plugin","add_token":"Add Token","add_nft_contract_search_hint":"Search NFT Contract Symbol Name or Address","applications":"Applications","application_settings":"Application Settings","application_tooltip_hint_sns_persona_unmatched":"Twitter ID verified persona({{currentSNSConnectedPersonaPublicKey}}) is not consistent with your current persona({{currentPersonaPublicKey}}). Please switch to persona({{currentSNSConnectedPersonaPublicKey}}) and try again.","application_tooltip_hint_verify":"Please verify your social account","application_tooltip_hint_create_persona":"Please create your persona and use it","application_tooltip_hint_connect_persona":"Please connect your persona","application_tooltip_hint_connect_wallet":"Please connect your wallet","application_tooltip_hint_switch_to_evm_wallet":"Please switch to EVM wallets","application_settings_tab_app_list":"APP list","application_settings_tab_plug_in_switch":"Plug-in switch","application_settings_tab_plug_app-list-unlisted":"Unlisted","application_settings_tab_plug_app-listed-placeholder":"Click the application icon to hide in the APP list.","application_display_tab_plug_app-unlisted-placeholder":"Click the setting icon to list it on the App board.","application_settings_tab_plug_app-unlisted-placeholder":"Click the application icon to list it on the App board.","additional_post_box__encrypted_post_pre":"Decrypt this post with #mask_io ! {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet_twitter_official_account":"Hi, claim this lucky drop with #mask_io @{{account}} \\n\\n$t(promote_red_packet)\\n {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet":"Hi, claim this lucky drop with #mask_io\\n$t(promote_red_packet) {{encrypted}}","additional_post_box__encrypted_post_pre_ito_twitter_official_account":"$t(promote_ito)\\n {{encrypted}}","additional_post_box__encrypted_post_pre_ito":"$t(promote_ito) {{encrypted}}","additional_post_box__encrypted_post_pre_file_service_twitter_official_account":"$t(promote_file_service)\\n {{encrypted}}","additional_post_box__encrypted_post_pre_file_service":"$t(promote_file_service) {{encrypted}}","additional_post_box__steganography_post_pre":"This image is encrypted with #mask_io.\\n{{random}}\\n$t(promote)","auto_paste_failed_dialog_title":"Paste manually","auto_paste_failed_dialog_content":"Please copy the following text and image (if there is any) and publish it.","auto_paste_failed_dialog_image_caption":"Open in a new tab","auto_paste_failed_snackbar":"Do you need to paste encrypted content manually?","auto_paste_failed_snackbar_action":"Show me how","auto_paste_failed_snackbar_action_close":"Close","compose_encrypt_method_text":"Text","compose_encrypt_method_text_sub_title":"Use text encryption","compose_encrypt_method_image":"Image","compose_encrypt_method_image_sub_title":"Encrypt messages in images","compose_no_local_key":"No local key","compose_encrypt_visible_to_all":"All","compose_encrypt_visible_to_all_sub":"Everyone","compose_encrypt_visible_to_private":"Private","compose_encrypt_visible_to_private_sub":"Just Me","compose_shared_friends_one":"1 friend","compose_shared_friends_other":"{{count}} friends","compose_encrypt_visible_to_share":"Share with","compose_encrypt_visible_to_share_sub":"Just Selected Contacts","compose_encrypt_share_dialog_empty":"No encrypted friends, you can try searching.","automation_request_click_post_button":"Please click the “Post” button to open the compose dialog.","try_again":"Try Again","ok":"OK","start":"Start","cancel":"Cancel","twitter_account":"realMaskNetwork","facebook_account":"masknetwork","hash_tag":"#mask_io","comment_box__placeholder":"Add an encrypted comment…","confirm":"Confirm","copy_text":"Copy text","loading_failed":"Loading failed","copy_image":"Copy image","copy_success_of_wallet_addr":"Copy wallet address successfully!","copy_success_of_text":"Copy text successfully!","copy_success_of_image":"Copy image successfully!","connecting":"Connecting…","collectibles_name":"Collectibles","select_an_nft":"Select an NFT","create":"Create","copied":"Copied","daily":"Daily","dashboard_no_collectible_found":"No collectible found.","dashboard_collectible_menu_all":"All ({{count}})","days":"Every {{days}} days","decrypted_postbox_add_recipients":"Append recipients","decrypted_postbox_decrypting":"Mask decrypting…","decrypted_postbox_decoding":"Mask decoding…","decrypted_postbox_decrypting_finding_person_key":"Mask is looking for the public key of the author…","decrypted_postbox_decrypting_finding_post_key":"Mask is retrieving the post key to decrypt this post…","decrypted_postbox_author_mismatch":"Originally posted by {{name}}","decrypted_postbox_title":"Decrypted by Mask:","dismiss":"Dismiss","delete":"Delete","delete_wallet":"Delete Wallet","hide_token":"Hide Token","hide_token_hint":"You can add <strong>{{token}}</strong> back in the future by going to \\"Add Token\\" in the wallet panel.","done":"Done","download":"Download","failed":"Failed","buy_now":"Buy Now","setup_guide_login":"Please sign up or log in to connect Mask network.","setup_guide_find_username_text":"Mask needs the username to connect your profile to your persona.","setup_guide_connect_auto":"Connect","setup_guide_connect_failed":"Re-Connect","setup_guide_verify":"Verfiy","setup_guide_verify_should_change_profile":"Inconsistent Account","setup_guide_verify_dismiss":"Don\'t show again.","setup_guide_verify_checking":"Checking","setup_guide_verify_post_not_found":"No verification post found","setup_guide_verifying":"Verifiying","setup_guide_verifying_failed":"Re-Verfiy","user_guide_tip_connected":"You have connected to this account successfully.","user_guide_tip_need_verify_on_next_id":"Mask Network requires you to post a verification tweet to access Next.ID-based products.","setup_guide_say_hello_content":"Hello Mask world. This is my first encrypted message. Install https://mask.io to send me encrypted post. ","setup_guide_say_hello_follow":"Follow {{account}} to explore Web 3.0.","setup_guide_pin_tip":"Don\'t forget to pin Mask Network in your browser toolbar to access web 3.0 easily.","setup_guide_pin_tip_step_click_left":"Click on ","setup_guide_pin_tip_step_click_right":" at top right of your browser.","setup_guide_pin_tip_step_find_left":"Find Mask Network in the list of extensions and click the ","setup_guide_pin_tip_step_find_right":" button.","setup_guide_pin_tip_successfully":"Pinned successfully.","user_guide_tip_1":"Explore multi-chain dApps.","user_guide_tip_2":"Connect and switch your wallet.","user_guide_tip_3":"Browse the Web 3 footprints of your Twitter friends, enjoy the freedom of Web 3.","user_guide_tip_4":"Click here to have a quick start.","plugin_avatar_setup_share_title":"NFT PFP","plugin_avatar_setup_pfp_share":"I just set my NFT PFP using Mask Extension for free! To browse other\'s unique NFT collections and web3 activities on Twitter, download the most powerful tool mask.io.","plugin_avatar_setup_success":"Set NFT PFP successfully.","plugin_avatar_asset":"Cannot found asset.","plugin_avatar_web3_error":"web3 error","plugin_avatar_chain_error":"Chain does not match.","plugin_avatar_input_token_address":"Input Contract Address","plugin_avatar_input_token_id":"Token ID","mask_network":"Mask Network","import":"Import","no_search_result":"No result","set_nft_profile_photo":"Set NFT Photo","use_nft":"Use NFT","loading":"Loading...","unlock":"Unlock","personas":"Personas","wallet":"Wallet","dashboard":"Dashboard","welcome_to_mask":"Welcome to Mask Network","welcome_description_congrats":"Congrats, you are in Web3!","welcome_description_content":"Explore the hottest NFTs, DAOs, ","welcome_description_content_second":"crypto trends with Mask Network.","browser_action_enter_dashboard":"Enter Dashboard","pending":"Pending...","beta_sup":"<sup>(beta)<sup>","post_dialog__button":"Encrypt","post_dialog__placeholder":"Tell selective friends what\'s happening...","post_dialog__title":"Encrypted Post","post_dialog_visible_to":"Visible To","post_dialog_encryption_method":"Encryption Method","post_dialog_enable_paste_auto":"Enable auto paste","post_dialog_share_with_input_placeholder":"eg:Twitter accounts, Persona public keys, wallet addresses","post_modal_hint__button":"Compose encrypted post","hide":"Hide","reset":"Reset","editor":"Editor","retry":"Retry","go_wrong":"Something went wrong.","search_box_placeholder":"Type here to search","select_all":"Select All","select_none":"Select None","all_friends":"All Friends","select_specific_friends_dialog__title":"Share with","select_friends_dialog_persona_connect":"This Persona connects to","service_decryption_failed":"Decryption failed.","service_username_invalid":"Invalid Username","speed_up":"Speed up","save":"Save","skip":"Skip","next":"Next","try":"Try","share":"Share","share_to":"Share to…","sharing":"Sharing","transfer":"Transfer","export":"Export","wallet_load_retry":"Failed to load {{symbol}}. Click to retry.","wallet_name":"Wallet Name","wallet_rename":"Rename Wallet","wallet_loading_nft_contract":"Loading NFT contract...","wallet_search_contract_no_result":"No results or contract address does not meet the query criteria.","wallet_search_no_result":"No results.","wallet_confirm_with_password":"Confirm with password","wallet_airdrop_nft_unclaimed_title":"NFT Airdrop Unclaimed:","plugin_external_unknown_plugin":"New unknown Mask plugins found. Do you want to load them?","plugin_external_loader_search_holder":"Search for an external plugin","plugin_external_loader_search_button":"Search for plugin","plugin_external_loader_search_sub_title":"Every external plugin has to hosted on an URL.","plugin_external_loader_alert":"IT WILL CHANGE. DO NOT BUILD OFFICIAL PRODUCT ON IT.","plugin_external_loader_example_github":"An official plugin example can be found at <terms>GitHub</terms>.","plugin_external_loader_intro":"Mask External plugin is an early stage feature of Mask Network that allows anyone to develop anexternal Mask plugin.","plugin_external_loader_alert_title":"External plugin: an experimental Mask Network feature!","plugin_external_plugin_url":"Plugin URL:","plugin_external_unverified_publisher":"Publisher: {{publisher}} (Unverified)","plugin_external_entry_title":"🧩 Load external plugins (Nightly feature)","plugin_external_name":"External plugin","plugin_external_get_started":"Let\'s get started","plugin_airdrop_nft_start_time":"Start Time: {{date}}","plugin_airdrop_nft_end_time":"End Time: {{date}}","plugin_airdrop_nft_expired":"Expired","plugin_airdrop_nft_claim":"Claim","plugin_airdrop_nft_claimed":"Claimed","plugin_airdrop_nft_check":"Check","plugin_airdrop_nft_check_address":"Check your Address","plugin_airdrop_nft_none_to_claim":"You don’t have airdrop to claim.","plugin_airdrop_nft_number_to_claim":"You have {{count}} {{name}} to claim.","plugin_airdrop_nft_claim_all":"Claim Token","plugin_airdrop_nft_claim_successful":"Token claimed successfully","plugin_airdrop_nft_claim_failed":"Token claimed failed","recent_transaction_pending":"Pending","recent_transaction_success":"Success","recent_transaction_failed":"Failed","recent_transaction_cancelled":"Cancelled","wallet_balance":"Balance","wallet_balance_eth":"Balance(ETH)","wallet_new":"New Wallet","wallet_status_pending":"Pending{{plural}}","wallet_status_pending_clear_all":"Clear All","wallet_status_pending_clear":"Clear","wallet_status_button_change":"Change","wallet_status_button_copy_address":"Copy Address","wallet_transfer_account":"Transfer Account","wallet_transfer_receiving_account":"Receiving Account","wallet_status_no_pending_transactions":"Your transactions will appear here...","wallet_transfer_to_address":"To Address","wallet_transfer_send":"Send","wallet_transfer_1559_placeholder":"Ens or Address(0x...)","wallet_transfer_title":"Transfer","wallet_transfer_error_amount_absence":"Enter an amount","wallet_transfer_error_address_absence":"Enter recipient address","wallet_transfer_error_same_address_with_current_account":"This receiving address is the same as the sending address. Please check again.","wallet_transfer_error_is_contract_address":"The receiving address is contract address. Please check again.","wallet_transfer_error_invalid_address":"Invalid recipient address","wallet_transfer_error_no_address_has_been_set_name":"The address of the receiver is invalid.","wallet_transfer_error_no_support_ens":"Network does not support ENS.","wallet_transfer_error_insufficient_balance":"Insufficient {{symbol}} balance","wallet_transfer_error_gas_price_absence":"Enter a gas price","wallet_transfer_error_gas_limit_absence":"Enter a gas limit","wallet_transfer_error_max_fee_absence":"Enter a max fee","wallet_transfer_error_max_priority_fee_absence":"Enter a max priority fee","wallet_transfer_error_max_fee_too_low":"Max fee is too low for network conditions.","wallet_transfer_error_max_fee_too_high":"Max fee is higher than necessary","wallet_transfer_error_max_priority_gas_fee_positive":"Max priority fee must be greater than 0 GWEI","wallet_transfer_error_max_priority_gas_fee_too_low":"Max priority fee is too low for network conditions","wallet_transfer_error_max_priority_gas_fee_too_high":"Max priority fee is higher than necessary. You may pay more than needed.","wallet_transfer_error_max_priority_gas_fee_imbalance":"Max fee cannot be lower than max priority fee","wallet_transfer_gwei":"GWEI","wallet_transfer_between_my_accounts":"Transfer between my accounts","wallet_risk_warning_dialog_title":"Risk Warning","wallet_risk_warning_no_select_wallet":"Not select wallet yet.","wallet_risk_warning_content":"Dear User,<br/><br/>When using any wallet-related plugins in Mask Network, please confirm the following usage risks:<br/><br/>Mask Network provides non-commercial free services. The plug-ins are provided by community members and other excellent third-party DApp teams. Due to the freedom of the decentralized network and other uncertain risk factors, users are requested to properly protect their sensitive information such as wallet mnemonic words and private keys. Please be cautious when conducting any blockchain contract interaction. The risks caused by any third-party DApps (plug-ins) are borne by the third-party DApps themselves. Clicking the confirm button means that you agree to bear the above possible risks.","weekly":"Weekly","wallet_risk_confirm_confirming":"Confirming","wallet_risk_confirm_failed":"Confirm Failed","relative_time_days_ago":"{{days}} days ago","relative_time_hours_ago":"{{hours}} hours ago","relative_time_minutes_ago":"{{minutes}} minutes ago","relative_time_months_ago":"{{months}} months ago","relative_time_seconds_ago":"{{seconds}} seconds ago","relative_time_years_ago":"{{years}} years ago","plugin_wallet_snackbar_wait_for_confirming":"Confirm this transaction in your wallet","plugin_wallet_snackbar_hash":"Transaction Submitted","plugin_wallet_snackbar_confirmed":"Transaction Confirmed","plugin_wallet_snackbar_success":"Transaction Succeed","plugin_wallet_snackbar_failed":"Transaction Failed","plugin_wallet_snackbar_swap_successful":"Successfully swapped Token","plugin_wallet_snackbar_swap_token":"Swap Token","plugin_wallet_choose_network":"Choose Network","plugin_wallet_choose_wallet":"Choose Wallet","plugin_wallet_connect_with":"Connect with","plugin_wallet_connect_with_retry":"Try Again","plugin_wallet_connected_with":"Connected with","plugin_wallet_metamask_error_already_request":"You\'ve opened the popup, please confirm.","plugin_wallet_connect_tip":"Please make sure that your {{providerName}} wallet is provided by the official <providerLink>{{providerShortenLink}}</providerLink>.","plugin_wallet_disconnect":"Disconnect","plugin_wallet_dialog_title":"Wallet Account","plugin_wallet_select_a_nft_contract":"Select an NFT Contract","plugin_wallet_select_a_nft_owner":"Select an NFT Contract Owner","plugin_wallet_select_a_nft_operator":"Select an NFT Contract Operator","plugin_wallet_fail_to_load_nft_contract":"Failed to load NFT Contract. Click to retry.","plugin_wallet_nft_approving_all":"Unlocking {{symbol}}...","plugin_wallet_approve_all_nft":"Unlock {{symbol}}","plugin_wallet_approve_all_nft_successfully":"Unlock {{symbol}} successfully","plugin_wallet_connect_a_wallet":"Connect Wallet","plugin_wallet_confirm_risk_warning":"Confirm Risk Warning","plugin_wallet_no_gas_fee":"No Gas Fee","plugin_wallet_update_gas_fee":"Updating Gas Fee…","plugin_wallet_invalid_network":"Invalid Network","plugin_wallet_select_a_wallet":"Select a Wallet","plugin_wallet_transaction":"Transaction","plugin_wallet_transaction_wait_for_confirmation":"Waiting for confirmation…","plugin_wallet_transaction_submitted":"Your transaction was submitted!","plugin_wallet_transaction_confirmed":"Your transaction was confirmed!","plugin_wallet_transaction_reverted":"Transaction was reverted!","plugin_wallet_transaction_rejected":"Transaction was rejected!","plugin_wallet_transaction_underpriced":"Transaction underpriced.","plugin_wallet_transaction_server_error":"Transaction was failed due to an internal JSON-RPC server error.","plugin_wallet_view_on_explorer":"View on Explorer","plugin_ito_placeholder_when_token_unselected":"Please Select a Token first","plugin_wallet_wrong_network_tip":"Please connect to an appropriate network.","plugin_wallet_on_create":"Create Wallet","plugin_wallet_on_connect":"Connect Wallet","plugin_wallet_wrong_network":"Wrong Network","plugin_wallet_pending_transactions":"{{count}} Pending{{plural}}","plugin_wallet_import_wallet":"Import Wallet","plugin_wallet_select_provider_dialog_title":"Connect Wallet","plugin_wallet_qr_code_with_wallet_connect":"Scan QR code with a WalletConnect-compatible wallet","plugin_wallet_token_unlock":"Exact Unlock","plugin_wallet_token_infinite_unlock":"Infinite Unlock","plugin_wallet_connect_dialog_title":"WalletConnect","plugin_wallet_connect_safari_metamask":"Connect to MetaMask","plugin_wallet_connect_safari_rainbow":"Connect to Rainbow","plugin_wallet_connect_safari_trust":"Connect to Trust","plugin_wallet_connect_safari_im_token":"Connect to imToken","plugin_wallet_on_connect_in_firefox":"Connect","plugin_wallet_return_mobile_wallet_options":"Return to Mobile Wallet Options","plugin_wallet_view_qr_code":"View QR Code","plugin_wallet_switch_network":"Switch to {{network}}","plugin_wallet_switch_network_under_going":"Switching to {{network}}","plugin_wallet_connect_tips":"You’re connected to a walletConnect\\nwallet. Please switch network in that wallet, \\nor switch to another wallet.","plugin_wallet_connect_network":"Connect {{network}} wallet","plugin_wallet_connect_network_under_going":"Connect {{network}} wallet","plugin_wallet_not_available_on":"Not available on {{network}} Network.","plugin_wallet_connect_wallet":"Connect Wallet","plugin_wallet_name_placeholder":"Enter 1-12 characters","plugin_wallet_cancel_sign":"Signature canceled.","plugin_nft_avatar_recommend_feature_description":"Set your NFT as profile picture with exclusive aura.","application_hint":"Socialize and show off your NFTs. People can bid,buy, view your valuable NFTs without leaving Twitter.","plugin_red_packet_create":"Create a Lucky Drop","plugin_red_packet_claimed":"Claimed","plugin_red_packet_claim":"Claim","plugin_red_packet_create_with_token":"Create a Lucky Drop with {{amount}} {{symbol}}","plugin_nft_red_packet_create":"Create an NFT Lucky Drop","plugin_red_packet_nft_account_name":"Wallet account","plugin_gitcoin_select_a_token":"Select a token","plugin_gitcoin_insufficient_balance":"Insufficient {{symbol}} balance","plugin_trader_fail_to_load":"Fail to load trending info from  ","plugin_trader_lbp_pool_in_balancer":"LBP Pool in Balancer","plugin_trader_swap_description":"Pop-up trading widget allows you to instantly view prices of the hottest Crypto/Stock and trade, also invest in the best performing managers.","plugin_trader_tutorial":"Tutorial","plugin_trader_what_is_lbp":"What\'s LBP?","plugin_trader_lbp_intro":"Solid blue line illustrates the historical price of {{symbol}} on the {{symbol}}\'s LBP. The price could continue to go down if no one buys. Please make your investment decision wisely.","plugin_trader_no_pools_found":"No pools found.","plugin_trader_safety_agree":"I understand","plugin_trader_view_on_etherscan":"View on Etherscan","plugin_trader_safety_alert_title":"Token Safety Alert","plugin_trader_safety_alert":"Anyone can create and name any ERC20 token on Ethereum, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token. Similar to Etherscan, this site automatically tracks analytics for all ERC20 tokens independent of token integrity. Please do your own research before interacting with any ERC20 token.","plugin_trader_total_supply":"Total Supply","plugin_trader_circulating_supply":"Circulating Supply","plugin_trader_volume_24":"Volume (24h)","plugin_trader_market_cap":"Market Cap","plugin_trader_data_source":"Data Source","plugin_trader_price_updated":"Price Updated","plugin_savings":"Savings","plugin_savings_asset":"Asset","plugin_savings_apr":"APR","plugin_savings_wallet":"Wallet","plugin_savings_operation":"Operation","plugin_savings_amount":"Amount","plugin_savings_deposit":"Deposit","plugin_savings_withdraw":"Withdraw","plugin_savings_process_deposit":"Processing Deposit","plugin_savings_process_withdraw":"Processing Withdrawal","plugin_trader_swap":"Swap","plugin_trader_wrap":"Wrap","plugin_trader_unwrap":"Unwrap","plugin_trader_buy":"Buy","plugin_trader_no_data":"No Data","plugin_trader_tab_market":"General","plugin_trader_tab_price":"Price","plugin_trader_tab_exchange":"Exchange","plugin_trader_tab_swap":"Swap 🔥","plugin_trader_table_exchange":"Exchange","plugin_trader_table_pair":"Pair","plugin_trader_table_price":"Price","plugin_trader_table_volume":"Volume (24h)","plugin_trader_table_updated":"Updated","plugin_trader_error_amount_absence":"Enter an amount","plugin_trader_error_insufficient_balance":"Insufficient {{symbol}} balance","plugin_trader_error_insufficient_lp":"Insufficient liquidity for this trade","plugin_trade_error_input_amount_less_minimum_amount":"Input amount is below the minimum amount","plugin_trader_slippage_tolerance":"Slippage Tolerance:","plugin_trader_swap_from":"From","plugin_trader_swap_to":"To(estimated)","plugin_trader_gas_fee":"Gas fee","plugin_trader_unlock_symbol":"Unlock {{symbol}}","plugin_trader_unlock_tips":"You must give the {{provider}} Smart contracts permission to use your {{symbol}}.You only have to do this once per token.","plugin_trader_swap_amount_symbol":"Swap {{amount}} {{symbol}} ","plugin_trader_confirm_from":"From","plugin_trader_confirm_to":"To","plugin_trader_confirm_max_price_slippage":"Max Price Slippage","plugin_trader_confirm_minimum_received":"Minimum Received","plugin_trader_confirm_tips":"Setting the max price slippage too low may cause a trade to fail due to price fluctuations.","plugin_trader_price_impact_warning_tips":"Setting the max price slippage too high may cause the minimum amount returned lower than the amount desired.","plugin_trader_confirm_swap":"Confirm Swap","plugin_trader_accept":"Accept","plugin_trader_price_impact":"Price Impact","plugin_trader_price_image_value":"Price Impact ({{percent}})","plugin_trader_slippage_warning":"You may receive 10% less with this level of slippage tolerance.","plugin_trader_confirm_price_impact":"Confirm Price Impact {{percent}}","plugin_trader_max_slippage":"Max Slippage","plugin_trader_gas_setting_instant":"Instant","plugin_trader_gas_setting_high":"High","plugin_trader_gas_setting_medium":"Medium","plugin_trader_gas_setting_standard":"Standard","plugin_trader_gas_setting_fast":"Fast","plugin_trader_gas_setting_custom":"Custom","plugin_trader_tx_cost_usd":"(~${{usd}})","plugin_trader_tx_cost_very_small":"({{usd}})","plugin_trader_gas_option":"{{option}} ({{value}}) Gwei","plugin_trader_no_enough_liquidity":"No enough liquidity","plugin_trader_no_trade":"Please select a trade","plugin_trader_gas":"GAS","plugin_poll_display_name":"Plugin: Poll","plugin_poll_question_hint":"Ask a question…","plugin_poll_options_hint":"choice","plugin_poll_length":"Poll length","plugin_poll_length_days":"Days","plugin_poll_length_hours":"Hours","plugin_poll_length_minutes":"Minutes","plugin_poll_length_unknown":"Unknown","plugin_poll_create_new":"Create New","plugin_poll_select_existing":"Past","plugin_poll_send_poll":"Send Poll","plugin_poll_status_closed":"Closed","plugin_poll_status_voting":"Voting","plugin_poll_status_voted":"Voted.","plugin_poll_deadline":"{{time}} left until vote ends","plugin_ito_empty_token":"No need to unlock any token on this ITO.","plugin_ito_locked":"ITO locked","plugin_ito_share":"Share","plugin_ito_enter":"Enter","plugin_ito_dialog_swap_title":"Swap {{token}}","plugin_ito_dialog_swap_reminder_title":"Swap Reminder","plugin_ito_dialog_swap_unlock_title":"Unlock Token In Advance","plugin_ito_dialog_swap_share_title":"Share","plugin_ito_dialog_swap_exchange":"In exchange for","plugin_ito_dialog_swap_panel_title":"Swap","plugin_ito_dialog_swap_exceed_wallet_limit":"Exceeds single wallet limit","plugin_ito_swap_ration_label":"Swap Ratio","plugin_ito_swap_only_once_remind":"Each wallet can only participate once.","plugin_ito_swap_title":"{{amount}} {{token}} per {{swap}} ","plugin_ito_swap_end_date":"End in {{date}}.","plugin_ito_dialog_claim_reminder_agree":"I Understand","plugin_ito_dialog_claim_reminder_text1":"Anyone can create a token on {{networkType}} with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.","plugin_ito_dialog_claim_reminder_text2":"This interface can load arbitrary tokens by token address. Please take extra caution and do your own research when interacting with arbitrary tokens.","plugin_ito_dialog_claim_reminder_text3":"If you purchase an arbitrary token, you might not be able to sell it back.","plugin_ito_dialog_claim_reminder_text4":"THE RIGHTS ARE NOT BEING OFFERED OR SOLD AND MAY NOT BE OFFERED OR SOLD, DIRECTLY OR INDIRECTLY, IN WHOLE OR IN PART, IN JURISDICTIONS OR TO WHOM SUCH AN OFFER WOULD BE UNLAWFUL.","plugin_ito_expired":"Expired","plugin_ito_create_new":"New","plugin_ito_claim_all_status_unclaimed":"Unclaimed","plugin_ito_claim_all_status_locked":"Locked","plugin_ito_claim_all_unlock_time":"Unlock Time: {{time}}","plugin_ito_claim_all_dialog_title":"Claim Your Tokens","plugin_ito_advanced":"Advanced","plugin_ito_advanced_ip_region":"IP Region Restrictions","plugin_ito_advanced_delay_unlocking":"Delay Unlocking Token","plugin_ito_advanced_contract":"Plugin Contract","plugin_ito_select_existing":"Past","plugin_ito_display_name":"ITO Composition Dialog","plugin_ito_sell_token":"Token","plugin_ito_sell_price":"Price","plugin_ito_sell_total_amount":"Input","plugin_ito_allocation_per_wallet":"Swap Limit {{limit}} {{token}}","plugin_ito_allocation_per_wallet_title":"Swap Limit","plugin_ito_begin_time_title":"Start Time","plugin_ito_wait_unlock_time":"Claim after {{unlockTime}} (UTC+8)","plugin_ito_claim":"Claim","plugin_ito_claiming":"Claiming...","plugin_ito_claim_all":"Claim All","plugin_ito_qualification_start_time":"Qualification Start Time:","plugin_ito_error_qualification_start_time":"Invalid: Qualification start time should be earlier than ITO end time","plugin_ito_end_time_title":"End Time","plugin_ito_error_invalid_qualification":"Invalid Qualification Address","plugin_ito_unlock_time_cert":"ITO Mask unlock time is {{date}}.","plugin_ito_unlock_time":"Unlock Time","plugin_ito_launch_campaign":"SocialFi Launch Campaign","plugin_ito_total_claimable_count":"Total: ","plugin_ito_qualification_label":"Plugin Contract","plugin_ito_message_label":"Title","plugin_ito_region_label":"IP Region Selection","plugin_ito_region_confirm_label":"IP Region","plugin_ito_region_list":"{{ select }} / {{ all }} regions","plugin_ito_region_all":"All regions","plugin_ito_region_search":"Type region name to search","plugin_ito_region_ban":"This Pool is banned by its creator at your region","plugin_ito_next":"Next","plugin_ito_name":"ITO","plugin_ito_description":"Launch decentralized asset freely and participate in token launch directly on Twitter.","plugin_ito_back":"Back","plugin_ito_transaction_dialog_summary_with_no_token":"Create an ITO.","plugin_ito_transaction_dialog_summary":"Create an ITO with {{amount}} {{symbol}}.","plugin_ito_swap":"Swap","plugin_ito_send_tip":"You can find your ITOs in the Past tab.","plugin_ito_send_text":"Send {{total}} {{symbol}}","plugin_ito_error_enter_amount":"Enter an amount","plugin_ito_error_select_token":"Select a Token","plugin_ito_error_enter_amount_and_token":"Enter an amount and Select a token","plugin_ito_error_allocation_absence":"Enter swap limit","plugin_ito_error_allocation_invalid":"Invalid amount","plugin_ito_error_exchange_time":"Invalid: start time cannot be later than end time","plugin_ito_error_unlock_time":"Invalid: end time cannot be later than unlock time","plugin_ito_error_balance":"Insufficient {{symbol}} balance","plugin_ito_list_start_date":"Start Time {{date}}","plugin_ito_list_end_date":"End Time {{date}}","plugin_ito_list_sold_total":"Swapped: ","plugin_ito_list_total":"Total: ","plugin_ito_list_table_type":"Type","plugin_ito_list_table_price":"Swap Ratio","plugin_ito_no_claimable_token":"Your wallet address does not have any tokens that can be claimed.","plugin_ito_list_table_sold":"Swapped","plugin_ito_list_table_got":"Balance","plugin_ito_list_button_send":"Send","plugin_ito_withdraw":"Withdraw","plugin_ito_withdrawn":"Withdrawn","plugin_ito_your_swapped_amount":"You swapped {{amount}} {{symbol}}","plugin_ito_your_claimed_amount":"You claimed {{amount}} {{symbol}}","plugin_ito_your_refund_amount":"return {{amount}} {{symbol}}.","plugin_ito_unlock_in_advance":"Unlock in Advance","plugin_ito_swapped_status":"{{remain}} / {{total}} {{token}} Swapped","plugin_ito_qualification_loading":"Verify qualification…","plugin_ito_qualification_failed":"The wallet address isn\'t on the list.","plugin_ito_congratulations":"Congratulations!","plugin_ito_out_of_stock_hit":"Better luck next time","plugin_ito_claim_success_share":"I just attended @{{user}}\'s #ITO with @{{account}} to swap ${{symbol}}.\\n$t(promote_ito_short)\\n{{link}}","plugin_ito_claim_success_share_no_official_account":"I just attended @{{user}}\'s #ITO to swap ${{symbol}}.\\n$t(promote_ito_short)\\n{{link}}","plugin_ito_claim_foreshow_share":"{{symbol}}({{name}}) is launching a new #ITO. Come and join it! Follow @{{account}} (mask.io) to find more events! \\n {{link}}\\n$t(promote_ito_short)\\n","plugin_ito_claim_foreshow_share_no_official_account":"{{symbol}}({{name}}) is launching a new #ITO. Come and join it! \\n {{link}}\\n$t(promote_ito_short)\\n","plugin_ito_password":"Password: {{password}}","plugin_ito_status_no_start":"Not started","plugin_ito_status_ongoing":"Ongoing","plugin_ito_status_out_of_stock":"Out of stock","plugin_ito_loading":"Loading ITO ...","plugin_ito_amount_unlocked":"Unlocked {{amount}} {{symbol}}","plugin_ito_amount_unlocked_infinity":"Unlocked infinity {{symbol}}","plugin_ito_unlocking_symbol":"Unlocking {{symbol}}","plugin_ito_continue":"Continue","plugin_ito_view_on_explorer":"View on Explorer","plugin_ito_unlock_tip":"Allow the contract <contractLink>{{address}}</contractLink> to use your {{symbol}} tokens when a new ITO round starts later.","plugin_ito_account_promote$default":"","plugin_ito_account_promote$twitter":"Follow @$t(twitter_account) (mask.io) to claim airdrop.","plugin_ito_account_promote$facebook":"Follow @$t(facebook_account) (mask.io) to claim airdrop.","plugin_ito_share_text":"I just claimed {{symbol}} with {{balance}}.{{account_promote}}\\n$t(hash_tag)\\n{{link}}","plugin_collectible_you":"You","plugin_collectible_done":"Done","plugin_collectible_retry":"Retry","plugin_collectible_get_more_token":"Get more {{token}}","plugin_collectible_sell":"Sell","plugin_collectible_checkout":"Checkout","plugin_collectible_place_bid":"Place Bid","plugin_collectible_buy_now":"Buy Now","plugin_collectible_make_offer":"Make Offer","plugin_collectible_post_listing":"Post Listing","plugin_collectible_description":"Current price is <strong>{{price}} {{symbol}}</strong>.","plugin_collectible_article":"Article","plugin_collectible_overview":"Overview","plugin_collectible_details":"Details","plugin_collectible_offers":"Offers","plugin_collectible_listing":"Listing","plugin_collectible_history":"History","plugin_collectible_event":"Event","plugin_collectible_unit_price":"Unit Price","plugin_collectible_price":"Price","plugin_collectible_from":"From","plugin_collectible_to":"To","plugin_collectible_date":"Date","plugin_collectible_quantity":"Quantity","plugin_collectible_expiration":"Expiration","plugin_collectible_no_offers":"No Offers","plugin_collectible_no_listings":"No Listings","plugin_collectible_base":"Base","plugin_collectible_properties":"Properties","plugin_collectible_about":"About","plugin_collectible_chain_info":"Chain Info","plugin_collectible_contract_address":"Contract Address","plugin_collectible_token_id":"Token ID","plugin_collectible_block_chain":"BlockChain","plugin_collectible_create_by":"Created by","plugin_collectible_owned_by":"Owned by","plugin_collectible_view_on":"View on","plugin_collectible_no_history":"No History","plugin_collectible_ensure_unreviewed_item":"Please ensure unreviewed item","plugin_collectible_check_tos_document":"Please check ToS document","plugin_collectible_insufficient_offer":"Insufficient Offer","plugin_collectible_not_been_reviewed_by_opensea":"This item has not been reviewed by OpenSea.","plugin_collectible_reviewed_tips":"You should proceed with extra caution. Anyone can create a digital item on a blockchain with any\\n                        name, including fake versions of existing items. Please take extra caution and do your research\\n                        when interacting with this item to ensure it\'s what it chains to be.","plugin_collectible_total":"Total","plugin_collectible_subtotal":"Subtotal","plugin_collectible_item":"Item","plugin_collectible_approved_tips":"By checking this box, I acknowledge that this item has not been reviewed\\n                                                or approved by OpenSea.","plugin_collectible_agree_terms":"By checking this box, I agree to OpenSea\'s <terms>Terms of Service</terms>.","plugin_collectible_convert_eth":"Convert ETH","plugin_collectible_sale_end":"Sale ends in {{time}}","plugin_collectible_set_initial_price":"Set an initial price.","plugin_collectible_ending_price_tip":"Will be on sale until you transfer this item or cancel it.","plugin_collectible_starting_price":"Starting Price","plugin_collectible_ending_price":"Ending Price","plugin_collectible_ending_price_less_than_staring":"Must be less than or equal to the starting price. The price will progress linearly to this amount until the expiration date.","plugin_collectible_expiration_date":"Expiration date","plugin_collectible_schedule_date":"Schedule Date","plugin_collectible_auto_cancel_tip":"Your listing will automatically end at this time. No need to cancel it!","plugin_collectible_schedule_future_date":"Schedule a future date.","plugin_collectible_buyer_address":"Buyer Address","plugin_collectible_buyer_address_placeholder":"Enter the buyer\'s address.","plugin_collectible_buyer_address_helper_text":"Only the buyer is allowed to buy it.","plugin_collectible_include_ending_price":"Include ending price","plugin_collectible_include_ending_price_helper":"Adding an ending price will allow this listing to expire, or for the price to be\\n                                    reduced until a buyer is found.","plugin_collectible_schedule_for_a_future_time":"Schedule for a future time","plugin_collectible_schedule_for_a_future_time_helper":"You can schedule this listing to only be buyable at a future data.","plugin_collectible_privacy":"Privacy","plugin_collectible_privacy_helper":"You can keep your listing public, or you can specify one address that\'s allowed to\\n                                    buy it.","plugin_collectible_enter_a_price":"Enter a price","plugin_collectible_insufficient_balance":"Insufficient balance","plugin_collectible_invalid_schedule_date":"Invalid schedule date","plugin_collectible_invalid_ending_price":"Invalid ending price","plugin_collectible_invalid_expiration_date":"Invalid expiration date","plugin_collectible_invalid_buyer_address":"Invalid buyer address","plugin_collectible_set_price":"Set Price","plugin_collectible_highest_bid":"Highest Bid","plugin_collectible_minimum_bid":"Minimum Bid","plugin_collectible_set_starting_bid_price":"Set your starting bid price.","plugin_collectible_reserve_price":"Reserve Price","plugin_collectible_reserve_price_helper":"Create a hidden limit by setting a reserve price. Reserve price must be greater than or equal to the start amount.","plugin_collectible_auction_auto_end":"Your auction will automatically end at this time and the highest bidder will win. No need to cancel it!","plugin_collectible_enter_minimum_bid":"Enter minimum bid","plugin_collectible_enter_reserve_price":"Enter reserve price","plugin_collectible_invalid_reserve_price":"Invalid reserve price","plugin_collectible_place_a_bid":"Place a Bid","plugin_collectible_make_an_offer":"Make an Offer","plugin_collectible_approved_by_opensea":"By checking this box, I acknowledge that this item has not been reviewed or approved by OpenSea.","plugin_collectible_legal_text":"By checking this box, I agree to OpenSea\'s <terms>Terms of Service</terms>.","plugin_collectibles_name":"Collectibles","plugin_collectibles_description":"Display specific information of collectibles in OpenSea and Rarible, make an offer directly on social media.","plugin_cryptoartai_description_title":"Description","plugin_cryptoartai_dapp_name":"CryptoartAI","plugin_cryptoartai_dapp_description":"Display Asia\'s largest authentic artworks and make offer on social media directly.","plugin_cryptoartai_edition":"Edition of","plugin_cryptoartai_operator":"Operator","plugin_cryptoartai_activity_type":"Type","plugin_cryptoartai_status":"Status","plugin_cryptoartai_time":"Time","plugin_cryptoartai_price":"Price","plugin_cryptoartai_tx":"Tx","plugin_cryptoartai_latest_bid":"Latest Bid","plugin_cryptoartai_description":"Current Bid is <strong>{{bidPrice}}{{symbol}}</strong>, price is <strong>{{price}}{{symbol}}</strong>. Edition {{soldNum}} of {{totalAvailable}} #{{editionNumber}}.","plugin_cryptoartai_no_price_description":"Current Bid is <strong>{{bidPrice}}{{symbol}}</strong>. Edition {{soldNum}} of {{totalAvailable}} #{{editionNumber}}.","plugin_cryptoartai_sold_description":"Sold for <strong>{{soldPrice}}{{symbol}}</strong>. Edition {{soldNum}} of {{totalAvailable}} #{{editionNumber}}.","plugin_cryptoartai_buy":"Buy","plugin_cryptoartai_buy_now":"Buy now","plugin_cryptoartai_current_balance":"Current balance","plugin_cryptoartai_current_highest_offer":"Current highest offer is ","plugin_cryptoartai_bid_least":"Your must bid at least ","plugin_cryptoartai_escrowed":"Your offer will be escrowed in the smart contract until it is accepted or you withdraw it","plugin_cryptoartai_current_balance_is":"Current balance is ","plugin_cryptoartai_auction_end":"Auction has ended","plugin_cryptoartai_auction_end_time":"Auction end time ","plugin_cryptoartai_share":"I just paid {{amount}} {{symbol}} for {{title}} on {{assetLink}}.\\nPlease install Mask plugin, and follow @{{account}} to join it too.\\n#mask_io","plugin_cryptoartai_share_no_official_account":"I just paid {{amount}} {{symbol}} for {{title}} on {{assetLink}}. Welcome to join.","plugin_cryptoartai_offer_share":"I just offered {{amount}} {{symbol}} for {{title}} on {{assetLink}}.\\nPlease install Mask plugin, and follow @{{account}} to join it too.\\n#mask_io","plugin_cryptoartai_offer_share_no_official_account":"I just offered {{amount}} {{symbol}} for {{title}} on {{assetLink}}. Welcome to join.","plugin_snapshot_info_title":"Information","plugin_snapshot_info_strategy":"Strategie(s)","plugin_snapshot_info_author":"Author","plugin_snapshot_info_ipfs":"IPFS","plugin_snapshot_info_start":"Start date","plugin_snapshot_info_end":"End date","plugin_snapshot_info_snapshot":"Snapshot","plugin_snapshot_description":"Display and vote for proposals directly on social media.","plugin_snapshot_result_title":"Results","plugin_snapshot_votes_title":"Votes","plugin_snapshot_no_power":"No power","plugin_snapshot_vote_success":"Your vote is in!","plugin_snapshot_vote":"Vote","plugin_snapshot_vote_choice":"Choice","plugin_snapshot_vote_power":"Your voting power","plugin_snapshot_vote_title":"Cast your vote","plugin_snapshot_vote_confirm_dialog_title":"Confirm Vote","plugin_snapshot_vote_confirm_dialog_choice":"Are you sure you want to vote \\"{{ choiceText }}\\"?","plugin_snapshot_vote_confirm_dialog_warning":"This action cannot be undone.","plugin_snapshot_current_result_title":"Current results","plugin_snapshot_download_report":"Download report","plugin_find_truman_display_name":"FindTruman - Statistics","plugin_find_truman_status_puzzle":"Story Puzzle","plugin_find_truman_status_poll":"Plot Voting","plugin_find_truman_status_result":"Stage Result","plugin_find_truman_status_puzzle_result":"Revealing Answer","plugin_find_truman_status_poll_result":"Plot Confirmation","plugin_find_truman_puzzle_to_be_revealed":"puzzle is left to be revealed.","plugin_find_truman_puzzles_to_be_revealed":"puzzles are left to be revealed","plugin_find_truman_poll_to_be_revealed":"vote continues to be tallied.","plugin_find_truman_polls_to_be_revealed":"votes continue to be tallied","plugin_find_truman_puzzle_underway":"The puzzle hasn\'t been revealed yet.","plugin_find_truman_puzzle_rate":"Accuracy: ","plugin_find_truman_voting_underway":"The voting continues to be tallied.","plugin_find_truman_voting_rate":"Hit rate: ","plugin_find_truman_submit_failed":"Failed to submit.","plugin_find_truman_vote":"vote","plugin_find_truman_votes":"votes","plugin_find_truman_selected":"Selected","plugin_find_truman_name":"FindTruman","plugin_find_truman_unselect":"Select","plugin_find_truman_answer":"Answer","plugin_find_truman_result":"Result","plugin_find_truman_buy":"BUY","plugin_find_truman_decrypted_by":"Decrypted by FindTruman:","plugin_find_truman_insufficient_nft":"The following specific NFTs are needed for this vote.","plugin_find_truman_buy_nft_tip":"At least {{count}} copy of this NFT is required.","plugin_find_truman_connect_wallet_tip":"Please connect to a wallet.","plugin_find_truman_no_participation_tip":"You have not participated in any vote yet.","plugin_dhedge_managed_by":"Managed by <manager>{{managerName}}</manager>","plugin_dhedge_manager_share":"Holds <share>{{managerShare}}%</share> of the pool","plugin_dhedge_manager_share_more_than_50":"Holds more than 50% of the pool","plugin_dhedge_value_managed":"VALUE MANAGED","plugin_dhedge_lifetime_return":"LIFETIME RETURN","plugin_dhedge_risk_factor":"RISK FACTOR","plugin_dhedge_tab_stats":"Stats","plugin_dhedge_tab_chart":"Chart","plugin_dhedge_strategy":"Strategy","plugin_dhedge_see_less":"See less","plugin_dhedge_see_more":"See more","plugin_dhedge_no_data":"No Data","plugin_dhedge_fetch_error":"Unable to fetch data, please try again!","plugin_dhedge_loading_chart":"Loading","plugin_dhedge_invest":"INVEST","plugin_dhedge_buy_token":"GET {{symbol}}","plugin_dhedge_enter_an_amount":"Enter an amount","plugin_dhedge_insufficient_balance":"Insufficient {{symbol}} balance","plugin_dhedge_pool_not_found":"Invalid pool address.","plugin_dhedge_smt_wrong":"Something went wrong!","plugin_dhedge_account_promote$default":"","plugin_dhedge_account_promote$twitter":"Follow @$t(twitter_account) (mask.io) to invest dHEDGE pools.","plugin_dhedge_account_promote$facebook":"Follow @$t(facebook_account) (mask.io) to invest dHEDGE pools.","plugin_dhedge_share_text":"I just invested {{amount}} {{symbol}} in {{pool}}. {{account_promote}}\\n$t(hash_tag)","plugin_pooltogether_tab_pools":"Pools","plugin_pooltogether_name":"PoolTogether","plugin_pooltogether_description":"Participate in lossless lottery on Twitter.","plugin_pooltogether_tab_account":"Account","plugin_pooltogether_no_pool":"There is no pool on this network.","plugin_pooltogether_pool_ended":"Awarded","plugin_pooltogether_deposit":"Deposit {{token}}","plugin_pooltogether_deposit_msg":"Deposit","plugin_pooltogether_apr":"Earn {{apr}}% APR in {{token}}","plugin_pooltogether_view_pool":"View pool","plugin_pooltogether_prize":"{{period}} Prize","plugin_pooltogether_share":"I just deposit {{amount}} {{cashTag}}{{symbol}} into the {{pool}}, can I win the lottery this week?\\nFollow @PoolTogether_ and @{{account}} (mask.io) to deposit in PoolTogether\'s pools.\\n#pooltogether #mask_io","plugin_pooltogether_share_no_official_account":"I just deposit {{amount}} {{cashTag}}{{symbol}} into the {{pool}}, can I win the lottery this week?","plugin_pooltogether_buy":"GET {{symbol}}","plugin_pooltogether_enter_an_amount":"Enter an amount","plugin_pooltogether_insufficient_balance":"Insufficient {{symbol}} balance","plugin_pooltogether_deposit_title":"Deposit {{token}} to win","plugin_pooltogether_odds_title":"New odds of winning:","plugin_pooltogether_odds_value":"1 in {{value}} {{period}}!","plugin_pooltogether_short_odds_value":"1 in {{value}}","plugin_pooltogether_my_deposits":"Total Deposits","plugin_pooltogether_no_account_pool":"You don\'t have any pool in this network","plugin_pooltogether_missing_pool":"Missing some deposits? Check the complete listing at:\\n","plugin_pooltogether_winning_odds":"Winning odds:","plugin_pooltogether_in":"in","plugin_pooltogether_manage":"Manage","plugin_pooltogether_token_not_found":"Token not found!","plugin_good_ghosting_loading_other_player_stats":"Loading other players\' stats","plugin_good_ghosting_loading_game_stats":"Loading game stats","plugin_good_ghosting_game_duration":"Game Duration","plugin_good_ghosting_current_round":"Current Round","plugin_good_ghosting_recurring_deposit":"Deposit Per Round","plugin_good_ghosting_round_length":"Round Length","plugin_good_ghosting_pool_apy":"Pool APY","plugin_good_ghosting_pool_earnings":"Pool Earnings","plugin_good_ghosting_extra_rewards":"Extra Rewards","plugin_good_ghosting_total_saved":"Total Saved","plugin_good_ghosting_game_launched":"Game Launched","plugin_good_ghosting_join_round":"Join Round","plugin_good_ghosting_join_deadline":"Join Deadline","plugin_good_ghosting_deposit":"Deposit {{index}}","plugin_good_ghosting_deposit_deadline":"Deposit Deadline {{index}}","plugin_good_ghosting_waiting_round":"Waiting Round","plugin_good_ghosting_waiting_round_end":"Waiting Period Ends","plugin_good_ghosting_withdraw":"Withdraw","plugin_good_ghosting_all_players_status_winning":"Winning","plugin_good_ghosting_all_players_status_waiting":"Waiting","plugin_good_ghosting_all_players_status_ghost":"Ghosts","plugin_good_ghosting_all_players_status_dropout":"Drop-outs","plugin_good_ghosting_status_winning":"Winning","plugin_good_ghosting_status_waiting":"Waiting","plugin_good_ghosting_status_ghost":"Ghost","plugin_good_ghosting_status_dropout":"Withdrawn","plugin_good_ghosting_status_unknown":"Unknown","plugin_good_ghosting_status":"Status","plugin_good_ghosting_deposits":"Deposits made","plugin_good_ghosting_total_deposited":"Total deposited","plugin_good_ghosting_address":"Address","plugin_good_ghosting_not_a_participant":"Looks like you\'re not a participant in this game.","plugin_good_ghosting_next_event":"Coming up next","plugin_good_ghosting_game_end":"This game has ended","plugin_good_ghosting_game_over":"Game Over","plugin_good_ghosting_participants_withdraw":"Participants can now withdraw their earnings!","plugin_good_ghosting_join_game":"Join Game","plugin_good_ghosting_make_deposit":"Make Deposit","plugin_good_ghosting_join_help_text":"Deposit your first {{amount}} {{token}} and join this savings pool. To win, you need to deposit money into the savings pool every round, prior to the round\'s deadline.","plugin_good_ghosting_deposit_help_text":"Deposit {{segmentPayment}} {{token}} for this round and continue to be a winner.","plugin_good_ghosting_withdraw_help_text":"The game has ended! You can now withdraw your deposits, along with any earnings that you won.","plugin_good_ghosting_leave_game":"Leave Game","plugin_good_ghosting_early_withdraw_info":"If you wish to withdraw from an ongoing game, you may be charged a small fee of {{amount}} {{token}} to compensate the remaining players in the savings pool.","plugin_good_ghosting_rules":"Rules","plugin_good_ghosting_game_rules":"Deposit {{amount}} {{token}} every round for {{roundCount}} rounds to win the game. If other players miss depositing in a round and become ghosts, their earnings will go to you.","plugin_good_ghosting_tx_fail":"Failed to complete the transaction.","plugin_good_ghosting_tx_timeout":"Cannot read transaction status.","plugin_good_ghosting_something_went_wrong":"Something went wrong, please try again.","plugin_good_ghosting_view_on_explorer":"View on Explorer","plugin_good_ghosting_checking_balance":"Checking Balance...","plugin_good_ghosting_insufficient_balance":"You need at least {{amount}} {{token}} in your wallet to do this.","plugin_good_ghosting_balance_error":"Failed to check balance. Click to retry.","plugin_unlockprotocol_buy_lock":"Buy Lock","plugin_unlockprotocol_buy_lock_alert":"Please look for and buy an active lock","plugin_unlockprotocol_no_access":"You don\'t have access to this content","plugin_unlockprotocol_select_unlock_lock":"Select Unlock Lock","plugin_unlockprotocol_no_lock_found":"No lock found. Create your own lock at <dashboard>Unlock protocol Creator Dashboard</dashboard>.","plugin_unlockprotocol_submit_post":"Submit Post","plugin_unlockprotocol_title":"Unlock Protocol","plugin_unlockprotocol_server_error":"Some Server error occurred, Please try again later.","plugin_furucombo_tab_pool":"Pool","plugin_furucombo_dapp_name":"Furucombo","plugin_furucombo_dapp_description":"Create customized DeFi legos and put all strategies into one transaction.","plugin_furucombo_tab_investments":"All investments","plugin_furucombo_liquidity":"Liquidity","plugin_furucombo_annual_percentage_yield":"Apy","plugin_furucombo_rewards":"Rewards","plugin_furucombo_invest":"Invest","plugin_furucombo_pool_not_found":"Invalid pool address.","plugin_furucombo_load_failed":"Load failed","plugin_furucombo_reload":"Reload","plugin_furucombo_head_pools":"Pools","plugin_furucombo_head_action":"Action","plugin_pets_dialog_title":"Non-Fungible Friends","plugin_pets_name":"Non-F Friends","plugin_pets_description":"Explore the endless possibilities of NFTs.","plugin_pets_dialog_title_share":"Successful","plugin_pets_dialog_contract":"NFT Contract","plugin_pets_dialog_token":"Token ID","plugin_pets_dialog_msg":"Greeting message","plugin_pets_dialog_msg_optional":"Optional, 100 characters max.","plugin_pets_dialog_btn":"Confirm","plugin_pets_dialog_btn_share":"Share","plugin_pets_dialog_preview":"Preview","plugin_pets_dialog_created":"Created by NonFFriend","plugin_pets_dialog_powered":"Powered by RSS3","plugin_pets_dialog_success":"Your Non-Fungible Friend has been set up successfully","plugin_pets_dialog_fail":"Setting failed, please try later","plugin_pets_dialog_check_title":"Show NFT friends on the profile page.","wallet_verify_persona_sign":"Persona Sign","wallet_verify_has_bound":"The wallet has been bound. Please switch wallets.","wallet_verify_persona_name":"{{personaName}} Sign","wallet_verify_empty_alert":"Please connect your wallet first.","wallet_verify_persona_sign_intro":"Sign seamlessly with Persona, ensure the validity of data.","waller_verify_wallet_sign_intro":"After two steps, you will own, view, utilize all your cyber identities through Next.ID. You can also disconnect them easily.","popups_add_wallet":"Add Wallet","popups_verify_persona_sign_success":"Persona signed successfully","popups_verify_persona_sign_failed":"Persona signed failed","popups_verify_wallet_sign_success":"Wallet signed successfully","popups_verify_wallet_sign_failed":"Wallet signed failed","popups_profile_photo":"Profile Photo","popups_public_key":"Public Key","popups_create_persona":"Create Persona","popups_restore_and_login":"Restore or Login","popups_name":"Name","popups_social_account":"Social Accounts","popups_connected_wallets":"Connected Wallets","popups_loading":"Loading","popups_connect_your_web2_social_accounts":"Connect your social media accounts","popups_connect_social_account":"Connect Social Account","popups_disconnect_success":" Disconnect successfully. ","popups_disconnect_failed":"Disconnect failed.","popups_verify_warning_alert":"Do you want to disconnect to {{persona}} from Twitter account @{{account}}?","popups_disconnect_warning_alert":"Your current Twitter account has not been verified by Next.ID. Please switch to @{{account}} to proceed.","popups_verify_account":"Verify Account","popups_disconnect_wallet_tip":"Are you sure to disconnect {{persona}} from wallet <strong>{{address}}<strong/>?","popups_add_and_verify_wallet":"Add and verify Wallet","popups_add_derive":"Add Derive","popups_rename":"Rename","popups_speed_up_transaction":"Speed up transaction","popups_cancel_transaction":"Cancel Transaction","popups_import_the_wallet":"Import the wallet","popups_delete_wallet":"Disconnect Wallet","popups_create_wallet":"Create Wallet","popups_back_up_the_wallet":"Back up the wallet","popups_recovery_wallet":"Wallet Recovered","popups_wallet_setting":"Wallet Setting","popups_gas_fee_settings":"Gas fee settings","popups_assets":"Assets","popups_send":"Send","popups_set_the_payment_password":"Set the payment password","popups_log_out":"Log out","popups_following_permissions":"The plugin ({{pluginName}}) (hosted on {{pluginURL}}) is going to request the following permissions:","popups_permissions":"Permissions","popups_sites":"Sites","popups_mask_requests_permission":"Mask needs the following permissions","popups_grant":"Grant","popups_permission_request":"Permission request","popups_permission_request_content":"To continue, Mask Network needs permission to access the following URL:","popups_permission_request_content2":"This gives Mask Network the necessary abilities to provide the requested function properly.","popups_welcome":"Welcome","popups_wallet_token":"Token","popups_wallet_dialog_legacy_wallet_tip":"Detected legacy wallets, please click confirm to restore them all.","popups_wallet_set_payment_password":"Set the payment password","popups_wallet_payment_password":"Payment Password","popups_wallet_re_payment_password":"Re-enter the payment password","popups_wallet_set_up_payment_password":"Set up payment password","popups_wallet_payment_password_tip":"The Payment password must be a combination of 2 categories out of numbers, letters, and special characters with a length of 8-20 characters.","popups_wallet_go_back":"Go back","popups_wallet_start_up_tip":"Connect to your wallet, create a new wallet or recover an existing wallet using a seed phrase.","popups_wallet_name_placeholder":"Enter 1-12 characters","popups_wallet_name_mnemonic":"Mnemonic","popups_wallet_name_json_file":"Json File","popups_wallet_name_private_key":"Private Key","popups_wallet_name_mnemonic_placeholder":"Please enter 12 mnemonic words separated by spaces","popups_wallet_name_origin_password":"Original Password","popups_wallet_tab_assets":"Assets","popups_wallet_tab_activity":"Activity","popups_wallet_derivation_path":"Derivation path ({{ path }})","popups_wallet_next":"Next","popups_wallet_backup_wallet":"Back up the wallet","popups_wallet_backup_json_file":"JSON File","popups_wallet_backup_private_key":"Private Key","popups_wallet_backup_json_file_confirm_password_tip":"This file has been encrypted and stored with your current password. Your current password is needed to decrypt this file when using it to import wallet.","popups_wallet_backup_private_key_tip":"Please don’t show anyone your private key. The private key can be used in any wallet that supports EVM-compatible chains without decryption.","popups_wallet_backup_input_password":"Input your password","popups_wallet_backup_json_file_drag_tip":"Drag your file into here…","popups_wallet_backup_json_file_click_tip":"Click or drag your file here","popups_wallet_enter_your_wallet_name":"Enter your wallet name","popups_wallet_delete_tip":"Are you sure you want to delete this wallet? Your wallet cannot be recovered without seed phrase.","popups_wallet_confirm_payment_password":"Confirm with payment password","popups_wallet_token_buy":"Buy","popups_wallet_token_send":"Send","popups_wallet_token_swap":"Swap","popups_wallet_disconnect_failed":"Wallet disconnect failed","popups_wallet_view_on_explorer":"View on Explorer","popups_wallet_gas_fee_settings":"Gas fee settings","popups_wallet_gas_fee_settings_description":"Gas fees are the fees for paying ethereum miners. The miners prefer to pack transactions with higher gas fees. Transactions with low gas fees might fail, and the paid gas fees won’t be returned.","popups_wallet_gas_fee_settings_low":"Low","popups_wallet_gas_fee_settings_medium":"Medium","popups_wallet_gas_fee_settings_high":"High","popups_wallet_gas_fee_settings_usd":" ≈ ${{usd}}","popups_wallet_gas_fee_settings_gas_limit":"Gas Limit","popups_wallet_gas_fee_settings_max_priority_fee":"Max priority fee","popups_wallet_gas_fee_settings_max_fee":"Max fee","popups_wallet_gas_fee_settings_min_gas_limit_tips":"Gas limit must be at least {{limit}}","popups_wallet_signature_request_title":"Signature Request","popups_wallet_signature_request":"Signature request","popups_wallet_signature_request_message":"Message","popups_wallet_contract_interaction":"Contract Interaction","popups_wallet_token_unlock_permission":"Token unlock permission","popups_wallet_token_infinite_unlock":"Infinite unlock","popups_wallet_contract_interaction_transfer":"Transfer","popups_wallet_contract_interaction_gas_fee":"Gas fee","popups_wallet_contract_interaction_edit":"Edit","popups_wallet_contract_interaction_total":"Total","popups_wallet_password_dont_match":"The password does not match.","popups_wallet_password_satisfied_requirement":"The password is not satisfied the requirement.","popups_wallet_password_length_error":"The password length is incorrect.","popups_wallet_unlock_wallet":"Unlock Wallet","popups_wallet_unlock_error_password":"Password is incorrect.","popups_wallet_activity_to_address":"To: {{address}}","popups_wallet_transfer_error_tip":"Network connection failure or contract error, send transaction failure.","popups_wallet_transactions_pending":"Pending...","popups_wallet_re_send":"Re-Send","popups_wallet_choose_token":"Choose Token","popups_wallet_gas_price":"Gas Price","popups_wallet_done":"Done","popups_wallet_recovered":"Wallet recovered","popups_wallet_no_transactions":"You have no transactions","popups_missing_parameter_caption":"Please close this page.","popups_persona_connect_to":"Connect to {{type}}","popups_persona_to_be_verified":"To be verified","popups_persona_disconnect":"Disconnect","popups_persona_disconnect_confirmation":"Disconnect confirmation","popups_persona_disconnect_confirmation_description":"This persona verification record will no longer show up in your verification profile page. Your\\n Mask friends can no longer send encrypted message to you by this persona or check your Web 3\\n products.","popups_persona":"Persona","popups_twitter_id":"Twitter ID","popups_persona_logout":"Log out","popups_persona_disconnect_tip":"After logging out, your associated social accounts can no longer decrypt past encrypted messages. If you need to reuse your account, you can recover your account with your identity, private key, local or cloud backup.","popups_persona_persona_name_exists":"The persona name already exists.","popups_persona_sign_request_title":"Signature request","popups_persona_sign_request_message":"message","popups_password_do_not_match":"Incorrect backup password","popups_backup_password":"Backup Password","popups_rename_error_tip":"Maximum length is {{length}} characters long.","nft_wallet_label":"Wallet","plugin_profile_no_wallets":"Connect your wallet here.<br/>This section will be shown to your encrypted friends.<br/>The display content includes digital art, donations, badges<br/>and other public information on chain.","plugin_vcent_last_offer_at":"LATEST OFFER at","nft_input_address_label":"Please input contract address","nft_input_tokenid_label":"Please input token ID","nft_owner_hint":"The contract address is incorrect or the collection does not belong to you","nft_add_dialog_title":"Add Collectible","nft_add_button_label":"Add","nft_add_button_label_checking":"Checking","nft_list_title":"NFT Avatar Setting","nft_wallet_change":"Change","nft_button_add_collectible":"Add Collectible","nft_avatar":"NFT PFP","web3_tab_hint":"No address found.","plugin_artblocks_not_active":"This project is no more active","plugin_artblocks_completed":"Completed","plugin_artblocks_paused":"Paused","plugin_artblocks_collection":"Collection","plugin_artblocks_details":"Details","plugin_artblocks_created_by":"Created by","plugin_artblocks_purchase":"Purchase","plugin_artblocks_purchasing":"Purchasing....","plugin_artblocks_legal_text":"By checking this box, I agree to ArtBlocks\'s <terms>Terms of Service</terms>.","plugin_artblocks_check_tos_document":"Please check ToS document","plugin_artblocks_price_per_mint":"Price per mint","plugin_artblocks_price_row":"Price:","plugin_artblocks_minted_row":"Minted:","plugin_artblocks_license_row":"License:","plugin_artblocks_library_row":"Library:","plugin_artblocks_website":"Website","plugin_artblocks_infos":"Infos","plugin_artblocks_chain":"Chain","plugin_artblocks_blockchain_row":"Blockchain:","plugin_artblocks_contract_row":"Contract:","plugin_artblocks_smt_wrong":"Something went wrong!","popups_wallet_disconnect_success":"Wallet disconnect successfully","plugin_artblocks_share":"I just purchased a beautiful piece of art from \'{{name}}\' collection for {{price}} {{symbol}}. Install @realMaskNetwork to get yours.","plugin_artblocks_share_no_official_account":"I just purchased a beautiful piece of art from \'{{name}}\' collection for {{price}} {{symbol}}. Welcome to join.","plugin_tips_disconnect_introduction":"Are you going to disconnect {{persona}} from wallet <strong>{{address}}<strong/>?","plugin_tips_not_evm_alert":"The tips feature currently supports only EVM chains. Support for other chains will be added in the future.","plugin_artblocks_description":"Artblocks allow you to pick a style that you like, pay for the work, and a randomly generated version of the content is created by an algorithm and sent to your Ethereum account.","plugin_artblocks_name":"Artblocks","plugin_dhedge_description":"Decentralized hedge funds on Ethereum and Polygon (Matic).","plugin_dhedge_name":"dHEDGE","nft_button_set_avatar":"Set NFT Avatar","plugin_good_ghosting_name":"GoodGhosting","plugin_good_ghosting_description":"Cultivate a weekly saving habit on Twitter.","plugin_mask_box_name":"MaskBox","plugin_mask_box_description":"Professional multi-chain decentralized platform for launching NFT mystery boxes.","plugin_transak_name":"Fiat On-Ramp","plugin_transak_description":"Fiat On-Ramp Aggregator on Twitter. Buy crypto in 60+ countries with Transak support.","plugin_valuables_name":"Valuables","plugin_valuables_description":"Buy & sell tweets autographed by their original creators.","popups_wallet_unsupported_network":"Unsupported network type","plugin_default_title":"Default","plugin_provider_by":"Provided by","plugin_enables":"Enable plugins"}');
;// CONCATENATED MODULE: ./shared-ui/locales/ja-JP.json
const ja_JP_namespaceObject = JSON.parse('{"add_token":"トークンを追加","additional_post_box__encrypted_post_pre":"#mask_io で復号しましょう！ {{encrypted}}","additional_post_box__steganography_post_pre":"この投稿は #mask_io によって暗号化されています。 📪🔑 mask.io をインストールして復号しましょう！ ([I:b]) {{random}}","auto_paste_failed_dialog_title":"手動でペーストする","auto_paste_failed_dialog_content":"以下の文字列と画像（存在すれば）をコピーし、公開しましょう。","auto_paste_failed_dialog_image_caption":"新しいタブで開く","auto_paste_failed_snackbar":"Mask が自動で投稿を作成できませんでした。手動でペーストしてください。","auto_paste_failed_snackbar_action":"方法を確認","automation_request_click_post_button":"[公開] ボタンをクリックして編集ダイアログを開きます。","cancel":"取り消す","comment_box__placeholder":"コメントを暗号化するには…","confirm":"確認する","copy_text":"テキストをコピー","copy_image":"画像をコピー","copy_success_of_wallet_addr":"ウォレットのコピーに成功しました","copy_success_of_text":"テキストのコピーに成功しました","copy_success_of_image":"画像のコピーに成功しました","connecting":"接続中…","create":"作成","dashboard_no_collectible_found":"コレクションが見つかりません","decrypted_postbox_add_recipients":"受信者を追加","decrypted_postbox_decrypting":"Mask が復号しています。","decrypted_postbox_decoding":"Mask が解読しています。","decrypted_postbox_decrypting_finding_person_key":"Mask は公開鍵を探しています…","decrypted_postbox_decrypting_finding_post_key":"Mask はこの投稿を復号するために ポストキーを取得しています…","decrypted_postbox_author_mismatch":"最初の作者は {{name}}","decrypted_postbox_title":"Mask で暗号化されています:","dismiss":"戻る","delete":"削除","delete_wallet":"ウォレットを削除する","hide_token":"トークンを隠す","hide_token_hint":"将来的には、ウォレットパネルで「トークンを追加」を選択することで、再び <strong>{{token}}</strong> を追加することができます。","done":"完了です！","download":"ダウンロード","buy_now":"今すぐ購入","setup_guide_find_username_text":"Mask のペルソナと接続するためにユーザー名が必要です。<br /> 正しいものを入力してください。","setup_guide_connect_auto":"接続する","setup_guide_connect_failed":"失敗しました… もう一度お試しください。","import":"インポート","no_search_result":"該当なし","personas":"ペルソナ","browser_action_enter_dashboard":"ダッシュボードに入る","post_dialog__button":"完了","post_dialog__placeholder":"ここにテキストを持ってきます","post_dialog__title":"Mask: 作成","post_modal_hint__button":"投稿を暗号化","hide":"隠す","reset":"リセットする","search_box_placeholder":"ここに打って検索","select_all":"全て選ぶ","select_none":"何も選んでいません。","select_specific_friends_dialog__title":"特定の連絡先を選ぶ","service_decryption_failed":"復号に失敗","service_username_invalid":"無効なユーザー名","skip":"スキップ","share":"共有","share_to":"共有先","sharing":"共有する","transfer":"転送","wallet_name":"ウォレット名","wallet_rename":"ウォレット名を変更","wallet_balance":"残高","wallet_new":"新規ウォレット名","wallet_status_button_change":"変更","wallet_status_button_copy_address":"アドレスをコピー","wallet_transfer_to_address":"宛先のアドレス","wallet_transfer_send":"送る","wallet_transfer_title":"転送","wallet_transfer_error_amount_absence":"量を入力","wallet_transfer_error_address_absence":"受け手のアドレスを入力","wallet_transfer_error_invalid_address":"無効な受け手のアドレス","relative_time_days_ago":"{{days}}日前","relative_time_hours_ago":"{{hours}}時間前","relative_time_minutes_ago":"{{minutes}}分前","relative_time_months_ago":"{{months}}月前","relative_time_seconds_ago":"{{seconds}}秒前","relative_time_years_ago":"{{years}}年前","plugin_wallet_connect_a_wallet":"ウォレットと接続","plugin_wallet_no_gas_fee":"ガス代が不足しています","plugin_wallet_update_gas_fee":"ガス代を更新中…","plugin_wallet_invalid_network":"無効のネットワーク","plugin_wallet_select_a_wallet":"ウォレットを選択","plugin_wallet_transaction":"取引","plugin_wallet_transaction_wait_for_confirmation":"確認を待っています","plugin_wallet_transaction_submitted":"取引は送信されました。","plugin_wallet_transaction_confirmed":"取引は成功しました。","plugin_wallet_transaction_reverted":"取引は元に戻されました。","plugin_wallet_transaction_rejected":"取引は拒否されました。","plugin_wallet_transaction_server_error":"取引は内部の JSON-RPC サーバーのエラーにより失敗しました。","plugin_wallet_view_on_explorer":"Explorer で見る","plugin_wallet_wrong_network_tip":"正しい Ethereum ネットワークを選択してください。","plugin_wallet_on_create":"ウォレットを作成","plugin_wallet_on_connect":"ウォレットに接続しています","plugin_wallet_select_provider_dialog_title":"ウォレットを接続","plugin_wallet_qr_code_with_wallet_connect":"WalletConnect 対応の QR コードを読みこむ","plugin_wallet_token_unlock":"確かにアンロックする","plugin_wallet_token_infinite_unlock":"永遠にアンロックする","plugin_wallet_connect_safari_metamask":"MetaMask に接続する","plugin_wallet_connect_safari_rainbow":"Rainbow に接続する","plugin_wallet_connect_safari_trust":"Trust に接続する","plugin_wallet_connect_safari_im_token":"imToken に接続する","plugin_wallet_on_connect_in_firefox":"接続する","plugin_wallet_return_mobile_wallet_options":"モバイルウォレットのオプションに戻る","plugin_wallet_view_qr_code":"QR コードを表示する","plugin_red_packet_create_with_token":"{{symbol}} で投げ銭を作成する","plugin_gitcoin_select_a_token":"トークンを選択する","plugin_gitcoin_insufficient_balance":"{{symbol}} の残高が足りません","plugin_trader_swap":"スワップ","plugin_trader_wrap":"ラップ","plugin_trader_unwrap":"アンラップ","plugin_trader_buy":"購入","plugin_trader_no_data":"データなし","plugin_trader_tab_market":"一般","plugin_trader_tab_price":"価格","plugin_trader_tab_exchange":"取引所","plugin_trader_tab_swap":"スワップ 🔥","plugin_trader_table_exchange":"ソース","plugin_trader_table_pair":"通貨ペア","plugin_trader_table_price":"価格","plugin_trader_table_volume":"取引高（24時間）","plugin_trader_table_updated":"更新","plugin_trader_error_amount_absence":"量を入力してください。","plugin_trader_error_insufficient_balance":"{{symbol}} の残高が足りません","plugin_trader_error_insufficient_lp":"流動性が足りません","plugin_trade_error_input_amount_less_minimum_amount":"入力量は最小量を下回っています","plugin_trader_slippage_tolerance":"スリッページの許容範囲：","plugin_poll_display_name":"プラグイン: 投票","plugin_poll_question_hint":"質問を入力してください...","plugin_poll_options_hint":"オプション","plugin_poll_length":"投票期限","plugin_poll_length_days":"日","plugin_poll_length_hours":"時間","plugin_poll_length_minutes":"分","plugin_poll_length_unknown":"知らない","plugin_poll_create_new":"新しい投票を作成","plugin_poll_select_existing":"既存の投票を選択","plugin_poll_send_poll":"投票を作成","plugin_poll_status_closed":"投票は終了しました","plugin_poll_status_voting":"投票しています","plugin_poll_status_voted":"投票した.","plugin_poll_deadline":"{{time}} で終了","plugin_ito_share":"共有","plugin_ito_enter":"参加","plugin_ito_dialog_swap_title":"{{token}} をスワップ","plugin_ito_dialog_swap_reminder_title":"スワップリマインダー","plugin_ito_dialog_swap_unlock_title":"事前にトークンをアンロックする","plugin_ito_dialog_swap_share_title":"共有","plugin_ito_dialog_swap_exchange":"交換する","plugin_ito_dialog_swap_panel_title":"スワップ","plugin_ito_dialog_swap_exceed_wallet_limit":"一つのウォレットの限度を超えています","plugin_ito_swap_ration_label":"スワップ比率","plugin_ito_swap_only_once_remind":"各ウォレットは一度しか参加できません。","plugin_ito_swap_title":"{{swap}} 分の {{amount}} {{token}}","plugin_ito_swap_end_date":"{{date}} に終了","plugin_ito_dialog_claim_reminder_agree":"了解しました","plugin_ito_dialog_claim_reminder_text1":"現存するトークンを偽ったものや、トークンを持っていないプロジェクトであるのに関わらずそれのトークンであると騙るように、誰もが Ethereum 上で任意の名前でトークンを作成することができます。","plugin_ito_dialog_claim_reminder_text2":"このインターフェイスはトークンアドレスから任意のトークンを読み込むことができます。任意の ERC20 のトークンをやり取りするときは、特に注意し、自分で調べてください。","plugin_ito_dialog_claim_reminder_text3":"もし任意のトークンを購入した場合、あなたはそれを払い戻すことができない可能性があります。","plugin_ito_dialog_claim_reminder_text4":"本権利は裁判において、もしくは正当な請求ではないと判断される者に対して、全体もしくは一部、直接的もしくは間接的に提供または販売されておらず、今後されることもありません。","plugin_ito_expired":"期限切れ","plugin_ito_create_new":"新しいもの","plugin_ito_claim_all_status_unclaimed":"未請求","plugin_ito_claim_all_status_locked":"ロックされています","plugin_ito_claim_all_unlock_time":"ロック解除：{{time}}","plugin_ito_claim_all_dialog_title":"あなたのトークンを請求する","plugin_ito_advanced":"進行中","plugin_ito_advanced_ip_region":"IP リージョン制限","plugin_ito_advanced_delay_unlocking":"トークンのロック解除時間を設定","plugin_ito_advanced_contract":"プラグインコントラクト","plugin_ito_select_existing":"古いもの","plugin_ito_display_name":"ITO 構成ダイアログ","plugin_ito_sell_token":"トークン","plugin_ito_sell_price":"価格","plugin_ito_sell_total_amount":"入力","plugin_ito_allocation_per_wallet":"スワップ上限 {{limit}} {{token}}","plugin_ito_wait_unlock_time":"{{unlockTime}} に請求","plugin_ito_claim":"請求","plugin_ito_claiming":"請求中","plugin_ito_claim_all":"全て請求","plugin_ito_qualification_start_time":"参加資格開始時間：","plugin_ito_error_qualification_start_time":"無効：資格開始時間は ITO の終了時間よりも前でなくてはいけません","plugin_ito_error_invalid_qualification":"無効な資格アドレス","plugin_ito_unlock_time":"ロック解除時間 {{zone}}","plugin_ito_qualification_label":"プラグインのコントラクト","plugin_ito_message_label":"タイトル","plugin_ito_region_label":"IP リージョンの選択","plugin_ito_region_confirm_label":"IP リージョン","plugin_ito_region_list":"{{ select }} / {{ all }} リージョン","plugin_ito_region_all":"全てのリージョン","plugin_ito_region_search":"リージョンの名前を入力して検索","plugin_ito_region_ban":"あなたのリージョンではこのプールはプールの作成者から Ban されています","plugin_ito_next":"次","plugin_ito_back":"戻る","plugin_ito_transaction_dialog_summary":"{{amount}} {{symbol}} で ITO を作成。","plugin_ito_swap":"スワップ","plugin_ito_send_tip":"過去のタブからあなたの行った ITO を探すことができます。","plugin_ito_send_text":"{{total}} {{symbol}} を送る","plugin_ito_error_enter_amount":"量を入力してください","plugin_ito_error_select_token":"トークンを選択してください","plugin_ito_error_enter_amount_and_token":"量を入力し、トークンを選択してください。","plugin_ito_error_allocation_absence":"スワップ上限を入力してください","plugin_ito_error_allocation_invalid":"無効の量","plugin_ito_error_exchange_time":"無効：開始時刻は終了時刻よりあとになっています","plugin_ito_error_unlock_time":"無効：終了時間はロック解除時間よりも後にはできません","plugin_ito_error_balance":"{{symbol}} の残高が足りません","plugin_ito_list_start_date":"開始時刻 {{date}}","plugin_ito_list_end_date":"終了時刻 {{date}}","plugin_ito_list_sold_total":"スワップしました","plugin_ito_list_total":"総量","plugin_ito_list_table_type":"形式","plugin_ito_list_table_price":"スワップ比率","plugin_ito_no_claimable_token":"トークンの請求権はありません。","plugin_ito_list_table_sold":"スワップしました","plugin_ito_list_table_got":"バランス","plugin_ito_list_button_send":"送る","plugin_ito_withdraw":"取り消す","plugin_ito_withdrawn":"取り消しました","plugin_ito_your_swapped_amount":"あなたは {{amount}} {{symbol}} を獲得しました","plugin_ito_your_claimed_amount":"あなたは {{amount}} {{symbol}} を請求しました","plugin_ito_your_refund_amount":"{{amount}} {{symbol}} を戻す","plugin_ito_unlock_in_advance":"事前にアンロックする","plugin_ito_swapped_status":"{{remain}} / {{total}} {{token}} をスワップしました","plugin_ito_qualification_loading":"資格認証中…","plugin_ito_qualification_failed":"ウォレットアドレスがリストにありません。","plugin_ito_congratulations":"おめでとうございます！","plugin_ito_out_of_stock_hit":"次の幸運を祈っています","plugin_ito_claim_success_share":".@{{account}} を使って ${{symbol}} をスワップし、 @{{user}} の #ITO に参加しました。mask.io をインストールして Initial Twitter Offering を始めましょう！ \\n {{link}}","plugin_ito_claim_foreshow_share":"{{symbol}}({{name}}) は新しい #ITO をローンチしました。参加してみましょう！ @{{account}} (mask.io) をフォローしてさらにイベントを見つけましょう。\\n {{link}}","plugin_ito_password":"パスワード: {{password}}","plugin_ito_status_no_start":"まだ開催されていません","plugin_ito_status_ongoing":"開催中","plugin_ito_status_out_of_stock":"品切れ","plugin_ito_loading":"ITO を読み込んでいます","plugin_ito_amount_unlocked":"ロック解除された {{amount}} {{symbol}}","plugin_ito_amount_unlocked_infinity":"永遠に {{symbol}} のロックを解除する","plugin_ito_unlocking_symbol":"{{symbol}} をアンロック中","plugin_ito_continue":"再開","plugin_ito_view_on_explorer":"Explorer で見る","plugin_collectible_you":"あなた","plugin_collectible_done":"完了","plugin_collectible_retry":"リトライ","plugin_collectible_sell":"売る","plugin_collectible_checkout":"チェックアウト","plugin_collectible_place_bid":"入札する","plugin_collectible_buy_now":"今買う","plugin_collectible_make_offer":"オファーする","plugin_collectible_post_listing":"投稿リスト","plugin_collectible_description":"現在の価格は <strong>{{price}} {{symbol}}</strong> です。","plugin_collectible_article":"品目","plugin_collectible_details":"詳細","plugin_collectible_offers":"オファー","plugin_collectible_listing":"リスティング","plugin_collectible_history":"履歴","plugin_collectible_event":"イベント","plugin_collectible_unit_price":"単価","plugin_collectible_price":"価格","plugin_collectible_date":"日にち","plugin_collectible_quantity":"量","plugin_collectible_expiration":"有効期限","plugin_collectible_no_offers":"オファーがありません","plugin_collectible_no_listings":"リストにありません","plugin_collectible_base":"ベース","plugin_collectible_properties":"プロパティ","plugin_collectible_about":"詳細","plugin_collectible_chain_info":"チェーン情報","plugin_collectible_contract_address":"コントラクトアドレス","plugin_collectible_token_id":"トークンID","plugin_collectible_block_chain":"ブロックチェーン","plugin_collectible_create_by":"作成者","plugin_collectible_owned_by":"所持者","plugin_collectible_no_history":"履歴がありません","plugin_collectible_ensure_unreviewed_item":"未レビューのアイテムを確認してください","plugin_collectible_check_tos_document":"ToS ドキュメントを確認してください","plugin_collectible_not_been_reviewed_by_opensea":"このアイテムは OpenSea でレビューされていません。","plugin_collectible_reviewed_tips":"注意して行動してください。ブロックチェーン上で誰もがどんな名前でデジタルアイテムを作成することができます。これは、既存のアイテムの偽のバージョンも含みます。デジタルアイテムを扱う際には十分に注意、調査をして、それがチェーン上にあるのか確かめてください。","plugin_collectible_total":"合計","plugin_collectible_subtotal":"小計","plugin_collectible_item":"アイテム","plugin_collectible_approved_tips":"このボックスをチェックすることで、このアイテムが OpenSea によってレビューまたは承認されていないことを認めます。","plugin_collectible_agree_terms":"このボックスをチェックすることで、OpenSea の<terms>利用規約</terms>に同意します。","plugin_collectible_convert_eth":"ETH を両替する","plugin_collectible_sale_end":"{{time}} に販売は終了します","plugin_collectible_set_initial_price":"初期価格を設定する。","plugin_collectible_ending_price_tip":"このアイテムはアイテムをあなたが転送もしくキャンセルするまで販売されます。","plugin_collectible_starting_price":"開始価格","plugin_collectible_ending_price":"終了価格","plugin_collectible_ending_price_less_than_staring":"終了価格は開始価格以下である必要があります。 価格は有効期限まで直線的に変動します。","plugin_collectible_expiration_date":"有効期限","plugin_collectible_schedule_date":"予定日","plugin_collectible_auto_cancel_tip":"あなたのリスティングは自動的にこの時間で終了します。あなたがキャンセル必要はありません！","plugin_collectible_schedule_future_date":"今後のスケジュールを立てる。","plugin_collectible_buyer_address":"買い手のアドレス","plugin_collectible_buyer_address_placeholder":"買い手のアドレスを入力する。","plugin_collectible_buyer_address_helper_text":"買い手だけが購入することができます。","plugin_collectible_include_ending_price":"終了価格を含む","plugin_collectible_include_ending_price_helper":"終了価格を追加すると、このリスティングが失効したり、買い手が見つかるまで価格が引き下げられたりします。","plugin_collectible_schedule_for_a_future_time":"未来の時間のスケジュールを立てる。","plugin_collectible_schedule_for_a_future_time_helper":"このリスティングは、未来のデータでのみ購入できるようにスケジュールを立てることができます。","plugin_collectible_privacy":"プライバシー","plugin_collectible_privacy_helper":"あなたはリスティングを公開にすることができますし、１つのアドレスだけが購入できるように指定することができます。","plugin_collectible_enter_a_price":"価格を入力","plugin_collectible_invalid_schedule_date":"無効な予定日","plugin_collectible_invalid_ending_price":"無効な終了価格","plugin_collectible_invalid_expiration_date":"無効な有効期限","plugin_collectible_invalid_buyer_address":"無効な買い手のアドレス","plugin_collectible_set_price":"価格を設定する","plugin_collectible_highest_bid":"最高の入札価格","plugin_collectible_minimum_bid":"最低の入札価格","plugin_collectible_set_starting_bid_price":"あなたの入札開始価格を設定する","plugin_collectible_reserve_price":"予約価格","plugin_collectible_reserve_price_helper":"予約価格を設定して、隠れた制限を作成します。 予約価格は開始価格以上である必要があります。","plugin_collectible_auction_auto_end":"この時点であなたのオークションは自動的に終了し、最高価格の入札者が落札します。キャンセルする必要はありません。","plugin_collectible_enter_minimum_bid":"最低入札価格の入力","plugin_collectible_enter_reserve_price":"予約価格の入力","plugin_collectible_invalid_reserve_price":"無効な予約価格","plugin_collectible_place_a_bid":"入札する","plugin_collectible_make_an_offer":"オファーする","plugin_collectible_legal_text":"このボックスをチェックすることで、OpenSea の<terms>利用規約</terms>に同意します。","plugin_snapshot_info_title":"情報","plugin_snapshot_info_strategy":"戦略家","plugin_snapshot_info_author":"著者","plugin_snapshot_info_start":"開始日","plugin_snapshot_info_end":"終了日","plugin_snapshot_result_title":"結果","plugin_snapshot_votes_title":"投票","plugin_snapshot_no_power":"投票権がありません","plugin_snapshot_vote_success":"投票されています！","plugin_snapshot_vote":"投票","plugin_snapshot_vote_choice":"選択","plugin_snapshot_vote_power":"あなたの投票力","plugin_snapshot_vote_title":"投票する","plugin_snapshot_vote_confirm_dialog_title":"投票の確認","plugin_snapshot_vote_confirm_dialog_choice":"本当に 「{{ choiceText }}」 に投票しますか？","plugin_snapshot_vote_confirm_dialog_warning":"このアクションは元に戻すことはできません。","plugin_snapshot_current_result_title":"現在の結果","plugin_snapshot_download_report":"レポートをダウンロードする","plugin_dhedge_managed_by":"<manager>{{managerName}}</manager> によって管理されています","plugin_dhedge_manager_share":"プールのうち <share>{{managerShare}}%</share> を所持しています","plugin_dhedge_value_managed":"価値が管理されています","plugin_dhedge_lifetime_return":"生涯リターン","plugin_dhedge_risk_factor":"リスク要因","plugin_dhedge_tab_stats":"統計","plugin_dhedge_tab_chart":"チャート","plugin_dhedge_strategy":"戦略家","plugin_dhedge_see_less":"閉じる","plugin_dhedge_see_more":"詳細","plugin_dhedge_no_data":"データがありません","plugin_dhedge_fetch_error":"データを取得できません。再度試してください。","plugin_dhedge_loading_chart":"ロード中","plugin_dhedge_invest":"投資する","plugin_dhedge_buy_token":"{{symbol}} を得る","plugin_dhedge_enter_an_amount":"量を入力","plugin_dhedge_insufficient_balance":"{{symbol}} の残高が不十分です","plugin_dhedge_pool_not_found":"無効なプールアドレスです！","plugin_dhedge_smt_wrong":"何か間違いが発生しました！"}');
;// CONCATENATED MODULE: ./shared-ui/locales/ko-KR.json
const ko_KR_namespaceObject = JSON.parse('{"database_backup":"데이터베이스 백업","database_overwrite":"백업으로 데이터베이스를 덮어쓰기","database_clear":"데이터베이스 지우기","debug_new_bug_issue":"새 버그 문제","debug_metadata_title":"메타데이터를 추가하거나 현존 메타데이터를 교체하기","debug_metadata_put_metadata":"메타데이터 넣기","edit":"편집","clear":"지우기","more":"더 보기","approve":"승인","address":"주소","operation":"조작","gas_limit":"가스 한도","gas_price":"가스 가격","redirect_to":"리다이렉트","sign":"사인","reload":"다시 로드","load":"로드","load_all":"모두 로드하기","no_data":"데이터 없음","tip":"팁","tags":"태그","contract":"컨트랙트","initializing":"초기화 중...","redirect_alert":"브라우저가 리다이렉트하지 않으면 <terms>여기 클릭</terms>","typed_message_text_alert":"현재 TypedMessageText만 지원합니다.","badge_renderer_provided_by_plugin":"플러그인으로 제공","add_token":"토큰 추가","add_nft_contract_search_hint":"NFT 컨트렉트 이름이나 주소를 검색하기","applications":"어플리케이션","additional_post_box__encrypted_post_pre":"#mask_io로 이 게시물을 해독하기. {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet_twitter_official_account":"레드 패킷을 수령하고 #mask_io @{{account}} {{encrypted}} 하세요.","additional_post_box__encrypted_post_pre_red_packet":"#mask_io {{encrypted}} 덧붙이고 레드 패킷을 수령하세요.","additional_post_box__steganography_post_pre":"암호화된 이미지입니다. 📪🔑 mask.io 설치하고 해독하세요. {{random}}","auto_paste_failed_dialog_title":"수동으로 붙여넣기","auto_paste_failed_dialog_content":"아래의 문자와 이미지(있으면)를 복사하고 공유하세요","auto_paste_failed_dialog_image_caption":"새로운 탭에서 열기","auto_paste_failed_snackbar":"암호화된 내용을 수동으로 붙여넣으세요?","auto_paste_failed_snackbar_action":"방법을 알려주세요.","auto_paste_failed_snackbar_action_close":"닫기","automation_request_click_post_button":"“포스트” 버튼을 눌러 대화 작성을 오픈하세요.","try_again":"다시 시도","cancel":"취소","twitter_account":"realMaskNetwork","facebook_account":"masknetwork","comment_box__placeholder":"암호화된 코멘트 추가","confirm":"확인","copy_text":"문자 복사","loading_failed":"로딩 실패","copy_image":"이미지 복사","copy_success_of_wallet_addr":"지갑 주소 복사 성공","copy_success_of_text":"문자 복사 성공","copy_success_of_image":"이미지 복사 성공","connecting":"연결 중","create":"만들기","copied":"복사됨","daily":"일일","dashboard_no_collectible_found":"수집품이 없습니다.","days":"{{days}} 일마다","decrypted_postbox_add_recipients":"받는사람 추가","decrypted_postbox_decrypting":"Mask 해독 중","decrypted_postbox_decoding":"Mask 디코딩 중","decrypted_postbox_decrypting_finding_person_key":"Mask가 상대방의 공개 키를 찾고 있습니다...","decrypted_postbox_decrypting_finding_post_key":"Mask가 이 게시글의 키를 검색하고 있습니다.","decrypted_postbox_author_mismatch":"{{name}}님이 이 글을 처음 게시했습니다.","decrypted_postbox_title":"Mask로 해독되었습니다:","dismiss":"확인","delete":"삭제","delete_wallet":"월렛 삭제","hide_token":"토큰 숨기기","hide_token_hint":"대시보드에서 「토큰 추가」 로 <strong>{{token}}</strong> 다시 추가할 수 있습니다.","done":"닫기","download":"다운로드","failed":"실패","buy_now":"바로 매수하기","setup_guide_find_username_text":"프로필과 페르소나를 연결시키려면 아이디가 필요합니다.","setup_guide_connect_auto":"연결","setup_guide_connect_failed":"실패했습니다... 다시 시도해 보세요.","user_guide_tip_connected":"해당 계정에 성공적으로 연결되었습니다.","user_guide_tip_1":"클릭하여 메인 기능을 확인하세요.","user_guide_tip_2":"여기서 월렛을 연결하세요. 여기서 네트워크나 월렛을 바꿀 수 있습니다.","mask_network":"Mask Network","import":"불러오기","no_search_result":"결과 없음","loading":"로딩 중","unlock":"언락","personas":"페르소나","browser_action_enter_dashboard":"대시보드로 들어가기","pending":"대기 중…","beta_sup":"<sup>(beta)<sup>","post_dialog__button":"끝내기","post_dialog__placeholder":"여기서 텍스트 치기...","post_dialog__title":"Mask: 편집","post_dialog_enable_paste_auto":"자동 붙이기 지원","post_modal_hint__button":"암호화된 메시지를 편집하기","hide":"숨기기","reset":"초기화","editor":"에디터","retry":"다시 시도","go_wrong":"오류가 발생합니다.","search_box_placeholder":"여기서 검색하기","select_all":"전체 선택","select_none":"전체 선택 취소","all_friends":"모든 친구들","select_specific_friends_dialog__title":"지정 연락처 선택","service_decryption_failed":"해독 실패","service_username_invalid":"무효한 아이디입니다","speed_up":"가속하기","save":"저장","skip":"넘어가기","next":"다음","try":"시도","share":"공유","share_to":"...에게 공유하기","sharing":"공유 중","transfer":"이체","wallet_name":"월렛 이름","wallet_rename":"월렛 이름 바꾸기","wallet_loading_nft_contract":"NFT 컨트렉트 로딩...","wallet_search_contract_no_result":"검색 포준에 맞추는 결과나 컨트렉트 주소가 없습니다.","wallet_search_no_result":"결과 없음.","wallet_airdrop_nft_unclaimed_title":"수령하지 않는 NFT 에어드랍:","plugin_airdrop_nft_start_time":"시작 시간: {{date}}","plugin_airdrop_nft_end_time":"종료 시간: {{date}}","plugin_airdrop_nft_expired":"만료됨","plugin_airdrop_nft_claim":"수령","plugin_airdrop_nft_claimed":"수령됨","plugin_airdrop_nft_check":"확인","plugin_airdrop_nft_check_address":"주소 확인","plugin_airdrop_nft_none_to_claim":"수령 가능한 에어드랍이 없습니다.","plugin_airdrop_nft_number_to_claim":"{{count}} {{name}} 수령이 가능합니다.","plugin_airdrop_nft_claim_all":"토큰 클레임","plugin_airdrop_nft_claim_successful":"토큰은 성공적으로 수령되었습니다.","plugin_airdrop_nft_claim_failed":"토큰 수령이 실패되었습니다","wallet_balance":"잔액","wallet_new":"새로운 월렛","wallet_status_button_change":"바꾸기","wallet_status_button_copy_address":"주소 복사","wallet_transfer_to_address":"주소","wallet_transfer_send":"보내기","wallet_transfer_title":"전송","wallet_transfer_error_amount_absence":"금액 입력","wallet_transfer_error_address_absence":"받는 주소 입력","wallet_transfer_error_invalid_address":"무효한 받는 주소","wallet_transfer_error_insufficient_balance":"{{symbol}} 잔액 부족","wallet_transfer_error_gas_price_absence":"가스비 입력","wallet_transfer_error_gas_limit_absence":"기스비 한도 입력","wallet_transfer_error_max_fee_absence":"최대 가스비 입력","wallet_transfer_error_max_priority_fee_absence":"최대 우선 가스비 입력","wallet_transfer_error_max_fee_too_low":"현재 네트워크 컨디션에서 최대 가스비가 너무 낮습니다.","wallet_transfer_error_max_fee_too_high":"최대 가스비는 필요한 것보다 높습니다.","wallet_transfer_error_max_priority_gas_fee_positive":"최대 우선 가스비는 0 GWEI보다 높아야 합니다","wallet_transfer_error_max_priority_gas_fee_too_low":"현재 네트워크 컨디션에서 최대 우선 가스비가 부족합니다","wallet_transfer_error_max_priority_gas_fee_too_high":"최대 우선 가스비가 필요한 것보다 높아서 필요 이상으로 지불할 수 있습니다.","wallet_transfer_error_max_priority_gas_fee_imbalance":"최대 기스비는 최대 우선 가스비보다 낮을 수 없습니다","wallet_transfer_gwei":"GWEI","wallet_risk_warning_dialog_title":"리스크 경고","wallet_risk_warning_no_select_wallet":"월렛 아직 선택하지 않습니다.","wallet_risk_warning_content":"유저님, <br/><br/>Mask Network의 월렛 관련된 플러그인을 사용하기 전에 다음의 이용 라스크를 확인하시길 바랍니다: <br/><br/> Mask Network는 비상업적 무료 서비스를 제공합니다. 플러그인은 커뮤니티 멤버들과 다른 제3자 DApp 팀이 제공하는 것입니다. 탈중앙화 네트워크의 자율성과 다른 기타 불확실한 리스크 요소때문에 사용자는 니모닉 단어, 개인키와 같은 중요한 정보를 적절히 보호해야 합니다. 블록체인 컨트렉트와 상호작용할 때 조심하시길 바랍니다. 제3자 DApp(플러그인) 으로 인한 리스크는 제3자 DApp 자체가 책임집니다. 확인 버튼을 클릭하면 위의 가능한 리스크를 감수하는 데 동의함을 의미합니다.","weekly":"주간","wallet_risk_confirm_confirming":"확인","wallet_risk_confirm_failed":"확인 실패","relative_time_days_ago":"{{days}} 일 전","relative_time_hours_ago":"{{hours}} 시간 전","relative_time_minutes_ago":"{{minutes}} 분 전","relative_time_months_ago":"{{months}} 월 전","relative_time_seconds_ago":"{{seconds}} 초 전","relative_time_years_ago":"{{years}} 년 전","plugin_wallet_select_a_nft_contract":"NFT 컨트렉트를 선택하세요.","plugin_wallet_select_a_nft_owner":"NFT 컨트렉트 소유자를 선택하세요.","plugin_wallet_select_a_nft_operator":"NFT 컨트렉트 오퍼레이터","plugin_wallet_fail_to_load_nft_contract":"NFT 컨트렉트 로드 실패. 다시 시도하세요.","plugin_wallet_nft_approving_all":"모든 NFT 승인 중...","plugin_wallet_approve_all_nft":"모든 NFT 승인되었습니다.","plugin_wallet_approve_all_nft_successfully":"모든 NFT는 성공적으로 승인되었습니다","plugin_wallet_connect_a_wallet":"월렛을 연결하기","plugin_wallet_confirm_risk_warning":"리스크 경고 확인","plugin_wallet_no_gas_fee":"가스비가 없습니다","plugin_wallet_update_gas_fee":"가스비 업데이트 중...","plugin_wallet_invalid_network":"잘못된 네트워크","plugin_wallet_select_a_wallet":"월렛 선택","plugin_wallet_transaction":"거래","plugin_wallet_transaction_wait_for_confirmation":"확인 중","plugin_wallet_transaction_submitted":"해당 거래는 이미 제출되었습니다.","plugin_wallet_transaction_confirmed":"해당 거래는 이미 확인되었습니다.","plugin_wallet_transaction_reverted":"해당 거래는 이미 복구되었습니다.","plugin_wallet_transaction_rejected":"해당 거래는 이미 거부되었습니다.","plugin_wallet_transaction_server_error":"JSON-RPC 오류 때문에 거래가 실패했습니다.","plugin_wallet_view_on_explorer":"Explorer에서 보기","plugin_ito_placeholder_when_token_unselected":"토큰을 선택하세요","plugin_wallet_wrong_network_tip":"정확한 이더리움 네트워크를 연결하세요.","plugin_wallet_on_create":"월렛 만들기","plugin_wallet_on_connect":"월렛 연결하기","plugin_wallet_wrong_network":"잘못된 네트워크","plugin_wallet_pending_transactions":"{{count}} 대기 중","plugin_wallet_import_wallet":"월렛 불러오기","plugin_wallet_select_provider_dialog_title":"월렛 연결","plugin_wallet_qr_code_with_wallet_connect":"WalletConnect와 호환성이 있는 월렛으로 QR 코드를 스칸하세요.","plugin_wallet_token_unlock":"정확 언락","plugin_wallet_token_infinite_unlock":"무한 언락","plugin_wallet_connect_dialog_title":"월렛 연결","plugin_wallet_connect_safari_metamask":"MetaMask 연결하기","plugin_wallet_connect_safari_rainbow":"Rainbow 연결하기","plugin_wallet_connect_safari_trust":"Trust 연결하기","plugin_wallet_connect_safari_im_token":"imToken 연결하기","plugin_wallet_on_connect_in_firefox":"연결","plugin_wallet_return_mobile_wallet_options":"모바일 월렛 옵션으로 돌아가기","plugin_wallet_view_qr_code":"QR 코드 보기","plugin_wallet_switch_network":"{{network}} 네트워크로 바꾸기","plugin_wallet_switch_network_under_going":"{{network}} 네트워크로 바꾸는 중...","plugin_wallet_not_available_on":"{{network}} 에서는 사용할 수 없습니다.","plugin_wallet_connect_wallet":"월렛 연결","plugin_wallet_name_placeholder":"1-12 자 입력하세요","plugin_wallet_cancel_sign":"서명이 실패되었습니다.","plugin_red_packet_create_with_token":"{{symbol}} 으로 빨간 백 만드는 중","plugin_red_packet_nft_account_name":"지갑 계정","plugin_gitcoin_select_a_token":"토큰 선택","plugin_gitcoin_insufficient_balance":"{{symbol}} 잔액 부족","plugin_trader_safety_alert_title":"토큰 안정성 알림","plugin_trader_safety_alert":"누구나 ERC20 토큰을 만들고 이름을 지을 수 있다. 토큰이 없는 프로젝트를 대표한다고 주장하는 토큰과 현존 토큰의 가짜 버전을 만드는 경우도 많습니다. Etherscan과 마찬가지로 이 사이트는 모든 ERC20 토큰에 대한 분석을 자동으로 추적합니다. ERC20 토큰과 상호 작용하기 전에 미리 잘 조사하시길 바랍니다.","plugin_trader_total_supply":"총 공급량","plugin_trader_circulating_supply":"유통량","plugin_trader_volume_24":"거래량 (24시간)","plugin_trader_market_cap":"시가 총액","plugin_trader_data_source":"데이터 소스","plugin_trader_price_updated":"가격은 업데이트뒤었습니다","plugin_trader_swap":"스왑","plugin_trader_wrap":"랩","plugin_trader_unwrap":"언랩","plugin_trader_buy":"구매","plugin_trader_no_data":"데이터 없음","plugin_trader_tab_market":"일반","plugin_trader_tab_price":"가격","plugin_trader_tab_exchange":"교환","plugin_trader_tab_swap":"스왑 🔥","plugin_trader_table_exchange":"교환","plugin_trader_table_pair":"짝","plugin_trader_table_price":"가격","plugin_trader_table_volume":"거래량(24h)","plugin_trader_table_updated":"업데이트","plugin_trader_error_amount_absence":"수액 입력","plugin_trader_error_insufficient_balance":"{{symbol}}잔액 부족","plugin_trader_error_insufficient_lp":"유동성 부족","plugin_trade_error_input_amount_less_minimum_amount":"입력 금액은 최소 금액 이하입니다.","plugin_trader_slippage_tolerance":"슬리피지 톨러런스:","plugin_trader_swap_from":"From","plugin_trader_swap_to":"To(estimated)","plugin_trader_gas_fee":"기스비","plugin_trader_unlock_symbol":"{{symbol}} 언락","plugin_trader_unlock_tips":"{{provider}}에게 {{symbol}} 이용할 수 있는 스마트 컨트랙트 권한을 줘야 합니다. 토큰당 이 작업을 한번만 수행하면 됩니다.","plugin_trader_swap_amount_symbol":"스왑 {{amount}} {{symbol}} ","plugin_trader_confirm_from":"From","plugin_trader_confirm_to":"To","plugin_trader_confirm_max_price_slippage":"최대 가격 슬리피지","plugin_trader_confirm_minimum_received":"촤소 받는 수액","plugin_trader_confirm_tips":"최대 가격 슬리피지를 너무 낮게 설정하면 가격 변동으로 인해 거래가 실패할 수 있습니다.","plugin_trader_max_slippage":"최대 슬리피지","plugin_trader_gas_setting_instant":"즉시","plugin_trader_gas_setting_high":"높음","plugin_trader_gas_setting_medium":"보통","plugin_trader_gas_setting_standard":"표준","plugin_trader_gas_setting_fast":"빠름","plugin_trader_gas_setting_custom":"커스텀","plugin_trader_tx_cost_usd":"(~${{usd}})","plugin_trader_gas_option":"{{option}} ({{value}}) Gwei","plugin_trader_no_enough_liquidity":"유동성 부족","plugin_trader_no_trade":"거래를 선택하세요","plugin_trader_gas":"GAS","plugin_poll_display_name":"플러그인: 투표","plugin_poll_question_hint":"질문하기","plugin_poll_options_hint":"항목","plugin_poll_length":"투표 시간","plugin_poll_length_days":"일","plugin_poll_length_hours":"시간","plugin_poll_length_minutes":"분","plugin_poll_length_unknown":"미지","plugin_poll_create_new":"새로운 투표 만들기","plugin_poll_select_existing":"기존 투표 선택","plugin_poll_send_poll":"투표 보내기","plugin_poll_status_closed":"종료됨","plugin_poll_status_voting":"투표 중","plugin_poll_status_voted":"투표 완료","plugin_poll_deadline":"{{time}} 남은 시간","plugin_ito_empty_token":"이번의 ITO에서 토큰 언락의 필요가 없습니다.","plugin_ito_locked":"ITO 락됨","plugin_ito_share":"공유하기","plugin_ito_enter":"들어가기","plugin_ito_dialog_swap_title":"스왑 {{token}}","plugin_ito_dialog_swap_reminder_title":"스왑 알림","plugin_ito_dialog_swap_unlock_title":"토큰 미리 언락","plugin_ito_dialog_swap_share_title":"공유","plugin_ito_dialog_swap_exchange":"교환 대상","plugin_ito_dialog_swap_panel_title":"스왑","plugin_ito_dialog_swap_exceed_wallet_limit":"한 월렛의 제한을 초과합니다.","plugin_ito_swap_ration_label":"스왑 비율","plugin_ito_swap_only_once_remind":"월렛마다 한번만 참여할 수 있습니다.","plugin_ito_swap_title":"{{swap}}마다 {{amount}} {{token}}","plugin_ito_swap_end_date":"종료 날짜: {{date}}","plugin_ito_dialog_claim_reminder_agree":"동의합니다.","plugin_ito_dialog_claim_reminder_text1":"ERC20 토큰은 누구나 이더리움에서 만들 수 있습니다. 기존 토큰의 가짜 버전과 토큰이 없는 프로젝트를 대표한다고 주장하는 토큰도 포함되어 있습니다.","plugin_ito_dialog_claim_reminder_text2":"이 화면은 토큰 주소로 arbitrary tokens 로드할 수 있습니다. arbitrary ERC20 tokens 로드할 때 해당 정보를 수집하고 많이 주의하셔야 합니다.","plugin_ito_dialog_claim_reminder_text3":"arbitrary token 매수하면 디시 매도하지 못할 가능성도 있습니다.","plugin_ito_dialog_claim_reminder_text4":"THE RIGHTS ARE NOT BEING OFFERED OR SOLD AND MAY NOT BE OFFERED OR SOLD, DIRECTLY OR INDIRECTLY, IN WHOLE OR IN PART, IN JURISDICTIONS OR TO WHOM SUCH AN OFFER WOULD BE UNLAWFUL","plugin_ito_expired":"만료됨","plugin_ito_create_new":"새로","plugin_ito_claim_all_status_unclaimed":"수령되지 않음","plugin_ito_claim_all_status_locked":"락","plugin_ito_claim_all_unlock_time":"언락 시간: {{time}}","plugin_ito_claim_all_dialog_title":"토큰 수령","plugin_ito_advanced":"고급 옵션","plugin_ito_advanced_ip_region":"IP 지역 제한","plugin_ito_advanced_delay_unlocking":"언락 지연","plugin_ito_advanced_contract":"플러그인 컨트랙트","plugin_ito_select_existing":"이전","plugin_ito_display_name":"ITO 설정","plugin_ito_sell_token":"토큰","plugin_ito_sell_price":"가격","plugin_ito_sell_total_amount":"입력","plugin_ito_allocation_per_wallet":"스왑 제한 {{limit}} {{token}}","plugin_ito_wait_unlock_time":"{{unlockTime}}에 수령하기","plugin_ito_claim":"수령","plugin_ito_claiming":"수령 중","plugin_ito_claim_all":"모두 수령","plugin_ito_qualification_start_time":"자격 인정 시작 시간","plugin_ito_error_qualification_start_time":"주의: 자격 인정 시작 시간이 ITO 종료 시간보다 빨아야 합니다.","plugin_ito_error_invalid_qualification":"무효한 인증 주소입니다.","plugin_ito_unlock_time_cert":"ITO Mask 언락 시간은 {{date}}.","plugin_ito_unlock_time":"언락 시간 {{zone}}","plugin_ito_launch_campaign":"SocialFi Launch Campaign","plugin_ito_total_claimable_count":"전체: ","plugin_ito_qualification_label":"플러그인 컨트랙트","plugin_ito_message_label":"제목","plugin_ito_region_label":"IP 지역 선택","plugin_ito_region_confirm_label":"IP 지역","plugin_ito_region_list":"{{ select }} / {{ all }} 지역","plugin_ito_region_all":"전체 지역","plugin_ito_region_search":"지역 이름을 입력하여 검색하기","plugin_ito_region_ban":"이 풀은 해당 지역의 크리에이터에 의해 금지됩니다.","plugin_ito_next":"다음","plugin_ito_back":"뒤로","plugin_ito_transaction_dialog_summary":"{{amount}} {{symbol}}로 ITO를 만들기","plugin_ito_swap":"스왑","plugin_ito_send_tip":"이전 탭에서 과거의  ITO를 찾을 수 있습니다.","plugin_ito_send_text":"{{total}} {{symbol}} 발송하기","plugin_ito_error_enter_amount":"수액 입력","plugin_ito_error_select_token":"토큰 선택","plugin_ito_error_enter_amount_and_token":"수액을 입력하고 토큰을 선택하세요.","plugin_ito_error_allocation_absence":"스왑 제한 입력","plugin_ito_error_allocation_invalid":"무효 수액","plugin_ito_error_exchange_time":"주의: 시작 시간은 종료 시간보다 늦으면 안됩니다.","plugin_ito_error_unlock_time":"주의: 종료 시간은 언락 시간보다 늦으면 안됩니다.","plugin_ito_error_balance":"{{symbol}} 잔액 부족","plugin_ito_list_start_date":"시작 시간 {{date}}","plugin_ito_list_end_date":"종료 시간 {{date}}","plugin_ito_list_sold_total":"스왑됨","plugin_ito_list_total":"전체:","plugin_ito_list_table_type":"유형","plugin_ito_list_table_price":"스왑 비율","plugin_ito_no_claimable_token":"수령 가능 토큰이 없습니다.","plugin_ito_list_table_sold":"스왑됨","plugin_ito_list_table_got":"잔액","plugin_ito_list_button_send":"발송","plugin_ito_withdraw":"철회","plugin_ito_withdrawn":"철회됨","plugin_ito_your_swapped_amount":"{{amount}} {{symbol}} 스왑되었습니다.","plugin_ito_your_claimed_amount":"{{amount}} {{symbol}} 수령되었습니다.","plugin_ito_your_refund_amount":"{{amount}} {{symbol}} 반환하기","plugin_ito_unlock_in_advance":"미리 언락하기","plugin_ito_swapped_status":"{{remain}} / {{total}} {{token}} 스왑됨","plugin_ito_qualification_loading":"자격 인증...","plugin_ito_qualification_failed":"이 월렛 주소는 리스트에 없습니다.","plugin_ito_congratulations":"축하합니다!","plugin_ito_out_of_stock_hit":"다음에 운이 더 좋으시길 바랍니다","plugin_ito_claim_success_share":"제가 @{{account}} 로 @{{user}}\'s #ITO에 참여하여 ${{symbol}} 스왑을 했습니다. Mask.io를 설치하고 자기만의 ITO를 시작하세요! \\n {{link}}","plugin_ito_claim_success_share_no_official_account":"제가 @{{user}}\'s #ITO에 참여하여 ${{symbol}} 스왑을 했습니다. Mask.io를 설치하고 자기만의 ITO를 시작하세요! \\n {{link}}","plugin_ito_claim_foreshow_share":"{{symbol}}({{name}}) 새로운 #ITO를 진행하고 있습니다. 어서 참가하세요! @{{account}} (mask.io) 팔로우하여 더 많은 이벤트를 참여하세요! \\n {{link}}","plugin_ito_claim_foreshow_share_no_official_account":"{{symbol}}({{name}}) 님이 #ITO를 진행하고 있습니다. 어서 참여하세요! \\n {{link}}","plugin_ito_password":"비밀번호: {{password}}","plugin_ito_status_no_start":"아직 시작하지 않음","plugin_ito_status_ongoing":"진행 중","plugin_ito_status_out_of_stock":"매진됨","plugin_ito_loading":"ITO 로딩 중...","plugin_ito_amount_unlocked":"{{amount}} {{symbol}} 언락됨","plugin_ito_amount_unlocked_infinity":"언락된 인피니티 {{symbol}}","plugin_ito_unlocking_symbol":"{{symbol}} 언락 중","plugin_ito_continue":"다음","plugin_ito_view_on_explorer":"Explorer에서 보기","plugin_collectible_you":"You","plugin_collectible_done":"닫기","plugin_collectible_retry":"다시 시도하기","plugin_collectible_sell":"매도","plugin_collectible_checkout":"확인하기","plugin_collectible_place_bid":"입찰","plugin_collectible_buy_now":"바로 구매","plugin_collectible_make_offer":"오퍼하기","plugin_collectible_post_listing":"포스트 리스팅","plugin_collectible_description":"현재의 가격은 <strong>{{price}} {{symbol}}</strong>.","plugin_collectible_article":"글","plugin_collectible_overview":"오버뷰","plugin_collectible_details":"디테일","plugin_collectible_offers":"오퍼","plugin_collectible_listing":"리스팅","plugin_collectible_history":"역사 기록","plugin_collectible_event":"이벤트","plugin_collectible_unit_price":"단위 가격","plugin_collectible_price":"가격","plugin_collectible_from":"보낸 사람","plugin_collectible_to":"받는 사람","plugin_collectible_date":"날짜","plugin_collectible_quantity":"수령","plugin_collectible_expiration":"종료","plugin_collectible_no_offers":"오버 없음","plugin_collectible_no_listings":"리스팅 없음","plugin_collectible_base":"베이스","plugin_collectible_properties":"속성","plugin_collectible_about":"정보","plugin_collectible_chain_info":"체인 정보","plugin_collectible_contract_address":"컨트랙트 주소","plugin_collectible_token_id":"토큰 ID","plugin_collectible_block_chain":"불록체인","plugin_collectible_create_by":"만든사람:","plugin_collectible_owned_by":"소유자:","plugin_collectible_view_on":"View on","plugin_collectible_no_history":"기록없음","plugin_collectible_ensure_unreviewed_item":"리뷰되지 않는 아이템을 확인하세요","plugin_collectible_check_tos_document":"ToS 파일을 확인하세요","plugin_collectible_insufficient_offer":"오버 보족","plugin_collectible_not_been_reviewed_by_opensea":"해당 아이템은 OpenSea에게 리뷰하지 않습니다.","plugin_collectible_reviewed_tips":"주의: 블록체인에서 임의\\n 이름으로 디지털 아이템을 만드는 것을 누구나 할 수 있습니다(기존 아이템의 가짜 버전도 포함됨). 해당 아이템과 상호작용할 때 주의하시고 사전 조사\\n  많이 하셔야 합니다.","plugin_collectible_total":"전체","plugin_collectible_subtotal":"소계","plugin_collectible_item":"아이템","plugin_collectible_approved_tips":"이 박스를 체크하면 해당 아이템은 아직 OpenSea에게 리뷰\\n 되거나 인증되지 않는 것을 인정합니다.","plugin_collectible_agree_terms":"이 박스를 체크하면 OpenSea의 <terms>항목과 서비스</terms> 동의합니다.","plugin_collectible_convert_eth":" ETH 전환","plugin_collectible_sale_end":"세일 종료 시간: {{time}}","plugin_collectible_set_initial_price":"시작 가격 설치","plugin_collectible_ending_price_tip":"해당 아이템이 바뀌거나 취소되지 않으면 세일은 계속 진행하겠습니다.","plugin_collectible_starting_price":"시작 가격","plugin_collectible_ending_price":"종료 가격","plugin_collectible_ending_price_less_than_staring":"시작 가격보다 낮거나 같아야 합니다. 가격은 종료시간이 되기 전에 이 금액까지 선형적으로 진행됩니다.","plugin_collectible_expiration_date":"종료 시간","plugin_collectible_schedule_date":"예정 시간","plugin_collectible_auto_cancel_tip":"해당 리스팅은 이 시간에 작동적으로 종료됩니다. 취소 안 해도 됩니다.","plugin_collectible_schedule_future_date":"미래의 시간을 정하세요.","plugin_collectible_buyer_address":"구매자 주소","plugin_collectible_buyer_address_placeholder":"구매자 주소 입력","plugin_collectible_buyer_address_helper_text":"해당 상품은 저정된 구매자만 구매 가능합니다.","plugin_collectible_include_ending_price":"종료 가격 추가","plugin_collectible_include_ending_price_helper":"종료 가격을 추가하면 해당 리스팅의 만료가 가능하게 되거나 구매자를 찾을 때까지 가격이 지속적으로 낮아지게 됩니다.","plugin_collectible_schedule_for_a_future_time":"미래 시간 예정","plugin_collectible_schedule_for_a_future_time_helper":"해당 리스팅은 지정된 시간에만 구매될 수 있도록 설치할 수 있습니다.","plugin_collectible_privacy":"프라이버시","plugin_collectible_privacy_helper":"해당 리스팅은 모든 이용자에게 공개하거나 저정된 주소만 구매 가능하도록 설치할 수 있습니다.","plugin_collectible_enter_a_price":"가격 입력","plugin_collectible_insufficient_balance":"잔액 부족","plugin_collectible_invalid_schedule_date":"무효한 일정 날짜","plugin_collectible_invalid_ending_price":"무효한 종료 가격","plugin_collectible_invalid_expiration_date":"무효한 종료 시간","plugin_collectible_invalid_buyer_address":"무효한 구매자 주소","plugin_collectible_set_price":"가격 설정","plugin_collectible_highest_bid":"최고 비드","plugin_collectible_minimum_bid":"최저 비드","plugin_collectible_set_starting_bid_price":"시작 경매 가격 설정","plugin_collectible_reserve_price":"최저 경매 가격","plugin_collectible_reserve_price_helper":"최저 경매 가격을 설치하여 숨겨진 제한을 만듭니다. 최저 경매 가격은 시작 가격보다 낮거나 같아야 합니다.","plugin_collectible_auction_auto_end":"이 사간에 해당 경매은 자동적으로 종료되고 최고 경매자가 낙찰됩니다. 최소 안 해도 됩니다.","plugin_collectible_enter_minimum_bid":"최저 비드 입력","plugin_collectible_enter_reserve_price":"최저 경매 가격 입력","plugin_collectible_invalid_reserve_price":"무효한 최저 경매 가격입니다.","plugin_collectible_place_a_bid":"입찰","plugin_collectible_make_an_offer":"오퍼하기","plugin_collectible_legal_text":"이 박스를 체크하면 OpenSea의 <terms>항목과 서비스</terms> 동의합니다.","plugin_cryptoartai_description_title":"설명","plugin_cryptoartai_edition":"Edition of","plugin_cryptoartai_operator":"오퍼레이터","plugin_cryptoartai_activity_type":"유형","plugin_cryptoartai_status":"상태","plugin_cryptoartai_time":"시간","plugin_cryptoartai_price":"가격","plugin_cryptoartai_tx":"Tx","plugin_cryptoartai_latest_bid":"최근 입찰","plugin_cryptoartai_description":"Current Bid is <strong>{{bidPrice}}{{symbol}}</strong>, price is <strong>{{price}}{{symbol}}</strong>. Edition {{soldNum}} of {{totalAvailable}} #{{editionNumber}}.","plugin_snapshot_info_title":"정보","plugin_snapshot_info_strategy":"전략","plugin_snapshot_info_author":"저자","plugin_snapshot_info_ipfs":"IPFS","plugin_snapshot_info_start":"시작 날짜","plugin_snapshot_info_end":"종료 날짜","plugin_snapshot_info_snapshot":"스냅숏","plugin_snapshot_result_title":"결과","plugin_snapshot_votes_title":"투표","plugin_snapshot_no_power":"파워없음","plugin_snapshot_vote_success":"투표가 시작되었습니다.","plugin_snapshot_vote":"투표","plugin_snapshot_vote_choice":"선택","plugin_snapshot_vote_power":"투표 파워","plugin_snapshot_vote_title":"투표하세요.","plugin_snapshot_vote_confirm_dialog_title":"투표 확인","plugin_snapshot_vote_confirm_dialog_choice":" 「{{ choiceText }}」 투표하시겠습니까?","plugin_snapshot_vote_confirm_dialog_warning":"이 조작은 취소할 수 없습니다.","plugin_snapshot_current_result_title":"현재 결과","plugin_snapshot_download_report":"다운로드 리포트","plugin_find_truman_no_participation_tip":"아직 아무 투표에 참여하지 않았습니다.","plugin_dhedge_managed_by":"관리자: <manager>{{managerName}}</manager>","plugin_dhedge_manager_share":"풀의 <share>{{managerShare}}%</share> 홀드합니다.","plugin_dhedge_manager_share_more_than_50":"이 풀의 50% 이상을 보유합니다","plugin_dhedge_value_managed":"VALUE MANAGED","plugin_dhedge_lifetime_return":"LIFETIME RETURN","plugin_dhedge_risk_factor":"RISK FACTOR","plugin_dhedge_tab_stats":"통계","plugin_dhedge_tab_chart":"차트","plugin_dhedge_strategy":"전략","plugin_dhedge_see_less":"접어 보기","plugin_dhedge_see_more":"더보기","plugin_dhedge_no_data":"데이터 없음","plugin_dhedge_fetch_error":"데이터를 불러올 수 없습니다. 다시 시도하세요!","plugin_dhedge_loading_chart":"로딩 중","plugin_dhedge_invest":"투자","plugin_dhedge_buy_token":"{{symbol}} 획득","plugin_dhedge_enter_an_amount":"수액 입력","plugin_dhedge_insufficient_balance":"{{symbol}} 잔액 부족","plugin_dhedge_pool_not_found":"무효한 풀 주소!","plugin_dhedge_smt_wrong":"오류가 발생합니다.","plugin_pooltogether_tab_pools":"풀(Pools)","plugin_pooltogether_tab_account":"계정","plugin_pooltogether_no_pool":"해당 네트워크에서 풀이 없습니다.","plugin_pooltogether_pool_ended":"수상됨","plugin_pooltogether_deposit":"입금 {{token}}","plugin_pooltogether_apr":"{{token}} 로 {{apr}}% APR 받습니다","plugin_pooltogether_view_pool":"View pool","plugin_pooltogether_prize":"{{period}} 가격","plugin_pooltogether_share":"I just deposit {{amount}} {{cashTag}}{{symbol}} into the {{pool}}, can I win the lottery this week?\\nFollow @PoolTogether_ and @{{account}} (mask.io) to deposit in PoolTogether\'s pools.\\n#pooltogether #mask_io","plugin_pooltogether_share_no_official_account":"{{pool}} 에서 {{amount}} {{cashTag}}{{symbol}} 예금했습니다, 이번 주 당첨될 수 있을까요?","plugin_pooltogether_buy":"{{symbol}} 획득","plugin_pooltogether_enter_an_amount":"금액 입력","plugin_pooltogether_insufficient_balance":"{{symbol}} 잔액 부족","plugin_pooltogether_deposit_title":"{{token}} 입금","plugin_pooltogether_odds_title":"새로운 우승 확률:","plugin_pooltogether_odds_value":"1 in {{value}} {{period}}!","plugin_pooltogether_short_odds_value":"1 in {{value}}","plugin_pooltogether_my_deposits":"입금 총액","plugin_pooltogether_no_account_pool":"해당 네트워크에서 풀이 없습니다.","plugin_pooltogether_missing_pool":"입금 좀 놓쳤나요? 전체 목록 확인:\\n","plugin_pooltogether_winning_odds":"우승 확율:","plugin_pooltogether_in":"in","plugin_pooltogether_manage":"관리","plugin_pooltogether_token_not_found":"토큰 찾을 수 없음","plugin_good_ghosting_loading_other_player_stats":"다른 참여자 정보 로딩","plugin_good_ghosting_loading_game_stats":"게임 정보 로딩","plugin_good_ghosting_game_duration":"게임 기간","plugin_good_ghosting_current_round":"현재 라운드","plugin_good_ghosting_recurring_deposit":"라운드당 입금","plugin_good_ghosting_round_length":"라운드 기간","plugin_good_ghosting_pool_apy":"풀 APY","plugin_good_ghosting_pool_earnings":"풀 수익","plugin_good_ghosting_extra_rewards":"추가 보상","plugin_good_ghosting_total_saved":"입금 총량","plugin_good_ghosting_game_launched":"게임 런칭","plugin_good_ghosting_join_round":"라운드 참여","plugin_good_ghosting_join_deadline":"마감 시간","plugin_good_ghosting_deposit":"입금 {{index}}","plugin_good_ghosting_deposit_deadline":"입금 마감 시간 {{index}}","plugin_good_ghosting_waiting_round":"대기 라운드","plugin_good_ghosting_waiting_round_end":"대기 기간 종료","plugin_good_ghosting_withdraw":"철회","plugin_good_ghosting_all_players_status_winning":"우승","plugin_good_ghosting_all_players_status_waiting":"대기 중","plugin_good_ghosting_all_players_status_ghost":"Ghosts","plugin_good_ghosting_all_players_status_dropout":"탈퇴자","plugin_good_ghosting_status_winning":"우승","plugin_good_ghosting_status_waiting":"대기 중","plugin_good_ghosting_status_ghost":"Ghost","plugin_good_ghosting_status_dropout":"철회됨","plugin_good_ghosting_status_unknown":"미지","plugin_good_ghosting_status":"상태","plugin_good_ghosting_deposits":"입금 만들기","plugin_good_ghosting_total_deposited":"입금 총액","plugin_good_ghosting_address":"주소","plugin_good_ghosting_not_a_participant":"게임에 참여하지 않은 것 같습니다.","plugin_good_ghosting_next_event":"다음으로 넘어갑니다","plugin_good_ghosting_game_end":"게임이 종료되었습니다","plugin_good_ghosting_game_over":"게임 종료","plugin_good_ghosting_participants_withdraw":"참여자들이 수익을 받을 수 있습니다.","plugin_good_ghosting_join_game":"게임 참여","plugin_good_ghosting_make_deposit":"입금하기","plugin_good_ghosting_join_help_text":"{{amount}} {{token}} 입금하여 해당 저금 풀에 참여하세요. 우승하려면 마감 시간 전에 저금 풀에서 돈을 입금해야 됩니다.","plugin_good_ghosting_deposit_help_text":"우승 기회를 얻으려면 이 라운드에서 {{segmentPayment}} {{token}} 입금하세요.","plugin_good_ghosting_withdraw_help_text":"게임은 이미 종료되었습니다. 입금과 수익을 받을 수 있습니다.","plugin_good_ghosting_leave_game":"게임에서 나가기","plugin_good_ghosting_early_withdraw_info":"진행 중인 게임에서 탈퇴하려면 나머지 참여자에게 보상하기 위해 {{amount}} {{token}} 부과될 수 있습니다.","plugin_good_ghosting_rules":"규칙","plugin_good_ghosting_game_rules":"우승을 위해 {{roundCount}} 라운드 기간에 라운드마다 {{amount}} {{token}} 입금해야 합니다. 다른 참여자가 입금을 놓쳐서 ghost가 되면 그의 수익은 당신의 수익의 일부가 될 수 있습니다.","plugin_good_ghosting_tx_fail":"거래를 완료하지 못했습니다.","plugin_good_ghosting_tx_timeout":"거래 상태를 확인할 수 없습니다.","plugin_good_ghosting_something_went_wrong":"오류가 발생했습니다. 다시 시도해주세요.","plugin_good_ghosting_view_on_explorer":"Explorer에서 보기","plugin_good_ghosting_checking_balance":"잔액 확인","plugin_good_ghosting_insufficient_balance":"월렛에서 최소 {{amount}} {{token}} 필요합니다.","plugin_good_ghosting_balance_error":"잔액 확인 실패. 다시 시도하세요.","plugin_unlockprotocol_buy_lock":"Buy Lock","plugin_unlockprotocol_no_access":"해당 내용에 접근할 수 없습니다.","plugin_unlockprotocol_select_unlock_lock":"언락 락 선택","plugin_unlockprotocol_no_lock_found":"락을 찾을 수 없습니다. <dashboard>크리에이터 대시보드</dashboard>에서 자기의 락을 만드세요.","plugin_unlockprotocol_submit_post":"포스트 제출","plugin_unlockprotocol_title":"언락 프로토콜","plugin_unlockprotocol_server_error":"서버 오류 발생했습니다. 다시 시도 하세요.","plugin_furucombo_tab_pool":"풀","plugin_furucombo_tab_investments":"전체 투자","plugin_furucombo_liquidity":"유동성","plugin_furucombo_annual_percentage_yield":"Apy","plugin_furucombo_rewards":"보상","plugin_furucombo_invest":"투자","plugin_furucombo_pool_not_found":"무효한 풀 주소.","plugin_furucombo_head_pools":"풀(Pools)","plugin_furucombo_head_action":"행동","popups_welcome":"환영합니다","popups_wallet_token":"토큰","popups_wallet_go_back":"돌아가기","popups_wallet_start_up_tip":"월렛 연결. 새로운 월렛을 만들거나 시드 문구로 기존 월렛을 복구하세요.","popups_wallet_name_placeholder":"1-12 자 입력하세요","popups_wallet_tab_assets":"자산","popups_wallet_tab_activity":"활동","popups_wallet_derivation_path":"파생 경로 ({{ path }})","popups_wallet_next":"다음","popups_wallet_backup_wallet":"월렛 백업","popups_wallet_backup_json_file":"JSON 파일","popups_wallet_backup_private_key":"개인 키","popups_wallet_backup_json_file_confirm_password_tip":"이 파일은 현재의 비밀번호로 암호화되어 저장되었습니다. 월렛을 불러올 때 이 파일 해독을 위해 현재의 비밀번호가 필요합니다.","popups_wallet_backup_private_key_tip":"다른 사람에게 개인 키를 보여주면 안됩니다. 개인 키은 EVM 호환 체인을 지원하는 모든 월렛에서 해독없이 사용할 수 있습니다.","popups_wallet_backup_input_password":"비밀번호 입력","popups_wallet_backup_json_file_drag_tip":"파일은 여기서 끌어들이세요.","popups_wallet_backup_json_file_click_tip":"클릭 또는 파일을 여기로 끌어들이세요","popups_wallet_enter_your_wallet_name":"월렛 이름 입력","popups_wallet_delete_tip":"이 월렛을 삭제하시겠습니까? 시드 문구가 없으면 월렛을 복구할 수 없습니다.","popups_wallet_confirm_payment_password":"지불 비밀번호로 확인하세요.","popups_wallet_token_buy":"구매","popups_wallet_token_send":"발송","popups_wallet_token_swap":"스왑","popups_wallet_view_on_explorer":"Explorer에서 보기","popups_wallet_gas_fee_settings":"기스비 설정","popups_wallet_gas_fee_settings_description":"기스비는 이더리움의 마이너에게 지불하는 겁니다. 마이너가 더 높은 가스비로 거래를 포장하기를 선호합니다. 낮은 가스비로 거래가 실패될 수 있고 지불된 가스비 반환될 수 없습니다.","popups_wallet_gas_fee_settings_low":"낮음","popups_wallet_gas_fee_settings_medium":"보통","popups_wallet_gas_fee_settings_high":"높음","popups_wallet_gas_fee_settings_usd":" ≈ ${{usd}}","popups_wallet_gas_fee_settings_gas_limit":"가스 한도","popups_wallet_gas_fee_settings_max_priority_fee":"최대 우선 가스비","popups_wallet_gas_fee_settings_max_fee":"최대 가스비","popups_wallet_gas_fee_settings_min_gas_limit_tips":"최소한 가스비는 {{limit}} 입니다","popups_wallet_signature_request":"서명","popups_wallet_signature_request_message":"메시지","popups_wallet_contract_interaction":"컨트렉트 인터액션","popups_wallet_contract_interaction_transfer":"전송","popups_wallet_contract_interaction_gas_fee":"기스비","popups_wallet_contract_interaction_edit":"수정","popups_wallet_contract_interaction_total":"총액","popups_wallet_unlock_wallet":"월렛 언락","popups_wallet_unlock_error_password":"잘못된 비밀번호","popups_wallet_activity_to_address":"받는 주소: {{address}}","popups_wallet_transfer_error_tip":"네트워크 연결 실패나 컨트렉트 오류때문에 발송 거래가 실패되었습니다.","popups_wallet_transactions_pending":"대기중...","popups_wallet_re_send":"다시 보내기","popups_wallet_choose_token":"토큰 선택","popups_wallet_gas_price":"가스 가격","popups_missing_parameter_caption":"이 페이지를 닫아세요.","popups_persona_connect_to":"{{type}} 에 연결하기","popups_persona_disconnect":"연결 끊기","popups_persona_logout":"로그아웃","popups_persona_disconnect_tip":"로그아웃 후, 연결된 소셜 계정은 더 이상 암호화하거나 해독할 수 없습나다. 계정을 다시 이용하려면 아이덴티티, 개인 키, 로컬이나 클라우드 백업으로 복원할 수 있습니다.","popups_persona_persona_name_exists":"이미 존재된 페르소나입니다","popups_password_do_not_match":"잘못된 백업 비밀번호","popups_backup_password":"백업 비밀번호","popups_rename_error_tip":"최대 길이는 {{length}} 자입니다.","nft_button_set_avatar":"NFT 아바타 설정","popups_wallet_unsupported_network":"지원되지 않는 네트워크"}');
;// CONCATENATED MODULE: ./shared-ui/locales/qya-AA.json
const qya_AA_namespaceObject = JSON.parse('{"promote":"crwdns17218:0crwdne17218:0","promote_red_packet":"crwdns16898:0crwdne16898:0","promote_ito":"crwdns16900:0crwdne16900:0","promote_ito_short":"crwdns16902:0crwdne16902:0","promote_file_service":"crwdns16904:0crwdne16904:0","promote_savings":"crwdns16906:0{{amount}}crwdnd16906:0{{symbol}}crwdnd16906:0{{chain}}crwdnd16906:0{{account}}crwdne16906:0","promote_collectible":"crwdns16908:0crwdne16908:0","promote_snapshot":"crwdns16910:0crwdne16910:0","database_backup":"crwdns10051:0crwdne10051:0","database_overwrite":"crwdns10053:0crwdne10053:0","database_clear":"crwdns10055:0crwdne10055:0","debug_new_bug_issue":"crwdns10057:0crwdne10057:0","debug_metadata_title":"crwdns10059:0crwdne10059:0","debug_metadata_put_metadata":"crwdns10061:0crwdne10061:0","edit":"crwdns10063:0crwdne10063:0","clear":"crwdns10065:0crwdne10065:0","connect":"crwdns16576:0crwdne16576:0","back":"crwdns16578:0crwdne16578:0","more":"crwdns10067:0crwdne10067:0","approve":"crwdns10069:0crwdne10069:0","address":"crwdns10071:0crwdne10071:0","operation":"crwdns10075:0crwdne10075:0","gas_limit":"crwdns10077:0crwdne10077:0","gas_price":"crwdns10079:0crwdne10079:0","redirect_to":"crwdns10081:0crwdne10081:0","sign":"crwdns10085:0crwdne10085:0","reload":"crwdns10087:0crwdne10087:0","load":"crwdns10089:0crwdne10089:0","load_all":"crwdns10093:0crwdne10093:0","no_data":"crwdns10097:0crwdne10097:0","tip":"crwdns10105:0crwdne10105:0","tags":"crwdns10107:0crwdne10107:0","contract":"crwdns10109:0crwdne10109:0","plugins":"crwdns16580:0crwdne16580:0","persona_required":"crwdns16582:0crwdne16582:0","initializing":"crwdns10111:0crwdne10111:0","redirect_alert":"crwdns10113:0crwdne10113:0","typed_message_text_alert":"crwdns10117:0crwdne10117:0","badge_renderer_provided_by_plugin":"crwdns10119:0crwdne10119:0","add_token":"crwdns3983:0crwdne3983:0","add_nft_contract_search_hint":"crwdns8123:0crwdne8123:0","applications":"crwdns9513:0crwdne9513:0","application_settings":"crwdns16220:0crwdne16220:0","application_tooltip_hint_sns_persona_unmatched":"crwdns16532:0{{currentSNSConnectedPersonaPublicKey}}crwdnd16532:0{{currentPersonaPublicKey}}crwdnd16532:0{{currentSNSConnectedPersonaPublicKey}}crwdne16532:0","application_tooltip_hint_verify":"crwdns16534:0crwdne16534:0","application_tooltip_hint_create_persona":"crwdns16536:0crwdne16536:0","application_tooltip_hint_connect_persona":"crwdns16538:0crwdne16538:0","application_tooltip_hint_connect_wallet":"crwdns16540:0crwdne16540:0","application_tooltip_hint_switch_to_evm_wallet":"crwdns16542:0crwdne16542:0","application_settings_tab_app_list":"crwdns16222:0crwdne16222:0","application_settings_tab_plug_in_switch":"crwdns16224:0crwdne16224:0","application_settings_tab_plug_app-list-unlisted":"crwdns16226:0crwdne16226:0","application_settings_tab_plug_app-listed-placeholder":"crwdns16228:0crwdne16228:0","application_display_tab_plug_app-unlisted-placeholder":"crwdns17254:0crwdne17254:0","application_settings_tab_plug_app-unlisted-placeholder":"crwdns16230:0crwdne16230:0","additional_post_box__encrypted_post_pre":"crwdns3991:0{{encrypted}}crwdne3991:0","additional_post_box__encrypted_post_pre_red_packet_twitter_official_account":"crwdns9169:0{{account}}crwdnd9169:0$t(promote_red_packet)crwdnd9169:0{{encrypted}}crwdne9169:0","additional_post_box__encrypted_post_pre_red_packet":"crwdns3995:0$t(promote_red_packet)crwdnd3995:0{{encrypted}}crwdne3995:0","additional_post_box__encrypted_post_pre_ito_twitter_official_account":"crwdns16912:0$t(promote_ito)crwdnd16912:0{{encrypted}}crwdne16912:0","additional_post_box__encrypted_post_pre_ito":"crwdns16914:0$t(promote_ito)crwdnd16914:0{{encrypted}}crwdne16914:0","additional_post_box__encrypted_post_pre_file_service_twitter_official_account":"crwdns16916:0$t(promote_file_service)crwdnd16916:0{{encrypted}}crwdne16916:0","additional_post_box__encrypted_post_pre_file_service":"crwdns16918:0$t(promote_file_service)crwdnd16918:0{{encrypted}}crwdne16918:0","additional_post_box__steganography_post_pre":"crwdns3997:0{{random}}crwdnd3997:0$t(promote)crwdne3997:0","auto_paste_failed_dialog_title":"crwdns3999:0crwdne3999:0","auto_paste_failed_dialog_content":"crwdns4001:0crwdne4001:0","auto_paste_failed_dialog_image_caption":"crwdns4003:0crwdne4003:0","auto_paste_failed_snackbar":"crwdns4005:0crwdne4005:0","auto_paste_failed_snackbar_action":"crwdns4007:0crwdne4007:0","auto_paste_failed_snackbar_action_close":"crwdns9363:0crwdne9363:0","compose_encrypt_method_text":"crwdns16584:0crwdne16584:0","compose_encrypt_method_text_sub_title":"crwdns16586:0crwdne16586:0","compose_encrypt_method_image":"crwdns16588:0crwdne16588:0","compose_encrypt_method_image_sub_title":"crwdns16590:0crwdne16590:0","compose_no_local_key":"crwdns16592:0crwdne16592:0","compose_encrypt_visible_to_all":"crwdns16594:0crwdne16594:0","compose_encrypt_visible_to_all_sub":"crwdns16596:0crwdne16596:0","compose_encrypt_visible_to_private":"crwdns16598:0crwdne16598:0","compose_encrypt_visible_to_private_sub":"crwdns16600:0crwdne16600:0","compose_shared_friends_one":"crwdns16690:0crwdne16690:0","compose_shared_friends_other":"crwdns16692:0{{count}}crwdne16692:0","compose_encrypt_visible_to_share":"crwdns16606:0crwdne16606:0","compose_encrypt_visible_to_share_sub":"crwdns16608:0crwdne16608:0","compose_encrypt_share_dialog_empty":"crwdns16610:0crwdne16610:0","automation_request_click_post_button":"crwdns4009:0crwdne4009:0","try_again":"crwdns8125:0crwdne8125:0","ok":"crwdns12997:0crwdne12997:0","start":"crwdns12999:0crwdne12999:0","cancel":"crwdns4025:0crwdne4025:0","twitter_account":"crwdns9171:0crwdne9171:0","facebook_account":"crwdns9173:0crwdne9173:0","hash_tag":"crwdns17258:0crwdne17258:0","comment_box__placeholder":"crwdns4027:0crwdne4027:0","confirm":"crwdns4029:0crwdne4029:0","copy_text":"crwdns4031:0crwdne4031:0","loading_failed":"crwdns8127:0crwdne8127:0","copy_image":"crwdns4033:0crwdne4033:0","copy_success_of_wallet_addr":"crwdns4035:0crwdne4035:0","copy_success_of_text":"crwdns4037:0crwdne4037:0","copy_success_of_image":"crwdns4039:0crwdne4039:0","connecting":"crwdns4043:0crwdne4043:0","collectibles_name":"crwdns16232:0crwdne16232:0","select_an_nft":"crwdns17246:0crwdne17246:0","create":"crwdns4047:0crwdne4047:0","copied":"crwdns9361:0crwdne9361:0","daily":"crwdns4057:0crwdne4057:0","dashboard_no_collectible_found":"crwdns4105:0crwdne4105:0","dashboard_collectible_menu_all":"crwdns14532:0{{count}}crwdne14532:0","days":"crwdns4107:0{{days}}crwdne4107:0","decrypted_postbox_add_recipients":"crwdns4109:0crwdne4109:0","decrypted_postbox_decrypting":"crwdns4111:0crwdne4111:0","decrypted_postbox_decoding":"crwdns4113:0crwdne4113:0","decrypted_postbox_decrypting_finding_person_key":"crwdns4115:0crwdne4115:0","decrypted_postbox_decrypting_finding_post_key":"crwdns4117:0crwdne4117:0","decrypted_postbox_author_mismatch":"crwdns4119:0{{name}}crwdne4119:0","decrypted_postbox_title":"crwdns4121:0crwdne4121:0","dismiss":"crwdns4123:0crwdne4123:0","delete":"crwdns4127:0crwdne4127:0","delete_wallet":"crwdns4135:0crwdne4135:0","hide_token":"crwdns4139:0crwdne4139:0","hide_token_hint":"crwdns4141:0{{token}}crwdne4141:0","done":"crwdns4145:0crwdne4145:0","download":"crwdns4147:0crwdne4147:0","failed":"crwdns9389:0crwdne9389:0","buy_now":"crwdns4169:0crwdne4169:0","setup_guide_login":"crwdns13001:0crwdne13001:0","setup_guide_find_username_text":"crwdns4175:0crwdne4175:0","setup_guide_connect_auto":"crwdns4177:0crwdne4177:0","setup_guide_connect_failed":"crwdns4179:0crwdne4179:0","setup_guide_verify":"crwdns14586:0crwdne14586:0","setup_guide_verify_should_change_profile":"crwdns14798:0crwdne14798:0","setup_guide_verify_dismiss":"crwdns14588:0crwdne14588:0","setup_guide_verify_checking":"crwdns14590:0crwdne14590:0","setup_guide_verify_post_not_found":"crwdns14592:0crwdne14592:0","setup_guide_verifying":"crwdns14594:0crwdne14594:0","setup_guide_verifying_failed":"crwdns14596:0crwdne14596:0","user_guide_tip_connected":"crwdns9081:0crwdne9081:0","user_guide_tip_need_verify_on_next_id":"crwdns14598:0crwdne14598:0","setup_guide_say_hello_content":"crwdns13003:0crwdne13003:0","setup_guide_say_hello_follow":"crwdns13167:0{{account}}crwdne13167:0","setup_guide_pin_tip":"crwdns14600:0crwdne14600:0","setup_guide_pin_tip_step_click_left":"crwdns14602:0crwdne14602:0","setup_guide_pin_tip_step_click_right":"crwdns14604:0crwdne14604:0","setup_guide_pin_tip_step_find_left":"crwdns14606:0crwdne14606:0","setup_guide_pin_tip_step_find_right":"crwdns14608:0crwdne14608:0","setup_guide_pin_tip_successfully":"crwdns14610:0crwdne14610:0","user_guide_tip_1":"crwdns9059:0crwdne9059:0","user_guide_tip_2":"crwdns9061:0crwdne9061:0","user_guide_tip_3":"crwdns13019:0crwdne13019:0","user_guide_tip_4":"crwdns16572:0crwdne16572:0","plugin_avatar_setup_share_title":"crwdns16920:0crwdne16920:0","plugin_avatar_setup_pfp_share":"crwdns16922:0crwdne16922:0","plugin_avatar_setup_success":"crwdns16924:0crwdne16924:0","plugin_avatar_asset":"crwdns17220:0crwdne17220:0","plugin_avatar_web3_error":"crwdns17222:0crwdne17222:0","plugin_avatar_chain_error":"crwdns17224:0crwdne17224:0","plugin_avatar_input_token_address":"crwdns17226:0crwdne17226:0","plugin_avatar_input_token_id":"crwdns17228:0crwdne17228:0","mask_network":"crwdns10321:0crwdne10321:0","import":"crwdns4193:0crwdne4193:0","no_search_result":"crwdns4217:0crwdne4217:0","set_nft_profile_photo":"crwdns14582:0crwdne14582:0","use_nft":"crwdns14584:0crwdne14584:0","loading":"crwdns8031:0crwdne8031:0","unlock":"crwdns8033:0crwdne8033:0","personas":"crwdns4237:0crwdne4237:0","wallet":"crwdns16298:0crwdne16298:0","dashboard":"crwdns16300:0crwdne16300:0","welcome_to_mask":"crwdns16302:0crwdne16302:0","welcome_description_congrats":"crwdns16304:0crwdne16304:0","welcome_description_content":"crwdns16306:0crwdne16306:0","welcome_description_content_second":"crwdns16308:0crwdne16308:0","browser_action_enter_dashboard":"crwdns4247:0crwdne4247:0","pending":"crwdns9391:0crwdne9391:0","beta_sup":"crwdns10125:0crwdne10125:0","post_dialog__button":"crwdns4257:0crwdne4257:0","post_dialog__placeholder":"crwdns4265:0crwdne4265:0","post_dialog__title":"crwdns4275:0crwdne4275:0","post_dialog_visible_to":"crwdns16612:0crwdne16612:0","post_dialog_encryption_method":"crwdns16614:0crwdne16614:0","post_dialog_enable_paste_auto":"crwdns10129:0crwdne10129:0","post_dialog_share_with_input_placeholder":"crwdns16616:0crwdne16616:0","post_modal_hint__button":"crwdns4277:0crwdne4277:0","hide":"crwdns4293:0crwdne4293:0","reset":"crwdns4301:0crwdne4301:0","editor":"crwdns10131:0crwdne10131:0","retry":"crwdns4303:0crwdne4303:0","go_wrong":"crwdns10133:0crwdne10133:0","search_box_placeholder":"crwdns4331:0crwdne4331:0","select_all":"crwdns4333:0crwdne4333:0","select_none":"crwdns4335:0crwdne4335:0","all_friends":"crwdns4337:0crwdne4337:0","select_specific_friends_dialog__title":"crwdns4341:0crwdne4341:0","select_friends_dialog_persona_connect":"crwdns16618:0crwdne16618:0","service_decryption_failed":"crwdns4343:0crwdne4343:0","service_username_invalid":"crwdns4359:0crwdne4359:0","speed_up":"crwdns9393:0crwdne9393:0","save":"crwdns10439:0crwdne10439:0","skip":"crwdns4463:0crwdne4463:0","next":"crwdns9067:0crwdne9067:0","try":"crwdns9083:0crwdne9083:0","share":"crwdns4465:0crwdne4465:0","share_to":"crwdns4467:0crwdne4467:0","sharing":"crwdns4469:0crwdne4469:0","transfer":"crwdns4471:0crwdne4471:0","export":"crwdns9305:0crwdne9305:0","wallet_load_retry":"crwdns10135:0{{symbol}}crwdne10135:0","wallet_name":"crwdns4487:0crwdne4487:0","wallet_rename":"crwdns4489:0crwdne4489:0","wallet_loading_nft_contract":"crwdns8135:0crwdne8135:0","wallet_search_contract_no_result":"crwdns8137:0crwdne8137:0","wallet_search_no_result":"crwdns8139:0crwdne8139:0","wallet_confirm_with_password":"crwdns10141:0crwdne10141:0","wallet_airdrop_nft_unclaimed_title":"crwdns8093:0crwdne8093:0","plugin_external_unknown_plugin":"crwdns10143:0crwdne10143:0","plugin_external_loader_search_holder":"crwdns10145:0crwdne10145:0","plugin_external_loader_search_button":"crwdns10147:0crwdne10147:0","plugin_external_loader_search_sub_title":"crwdns10149:0crwdne10149:0","plugin_external_loader_alert":"crwdns10151:0crwdne10151:0","plugin_external_loader_example_github":"crwdns10153:0crwdne10153:0","plugin_external_loader_intro":"crwdns10155:0crwdne10155:0","plugin_external_loader_alert_title":"crwdns10157:0crwdne10157:0","plugin_external_plugin_url":"crwdns10159:0crwdne10159:0","plugin_external_unverified_publisher":"crwdns10161:0{{publisher}}crwdne10161:0","plugin_external_entry_title":"crwdns10163:0crwdne10163:0","plugin_external_name":"crwdns10165:0crwdne10165:0","plugin_external_get_started":"crwdns10167:0crwdne10167:0","plugin_airdrop_nft_start_time":"crwdns8095:0{{date}}crwdne8095:0","plugin_airdrop_nft_end_time":"crwdns8097:0{{date}}crwdne8097:0","plugin_airdrop_nft_expired":"crwdns8099:0crwdne8099:0","plugin_airdrop_nft_claim":"crwdns8101:0crwdne8101:0","plugin_airdrop_nft_claimed":"crwdns8103:0crwdne8103:0","plugin_airdrop_nft_check":"crwdns8105:0crwdne8105:0","plugin_airdrop_nft_check_address":"crwdns8107:0crwdne8107:0","plugin_airdrop_nft_none_to_claim":"crwdns8111:0crwdne8111:0","plugin_airdrop_nft_number_to_claim":"crwdns8115:0{{count}}crwdnd8115:0{{name}}crwdne8115:0","plugin_airdrop_nft_claim_all":"crwdns8117:0crwdne8117:0","plugin_airdrop_nft_claim_successful":"crwdns8119:0crwdne8119:0","plugin_airdrop_nft_claim_failed":"crwdns8121:0crwdne8121:0","recent_transaction_pending":"crwdns16388:0crwdne16388:0","recent_transaction_success":"crwdns16390:0crwdne16390:0","recent_transaction_failed":"crwdns16392:0crwdne16392:0","recent_transaction_cancelled":"crwdns16394:0crwdne16394:0","wallet_balance":"crwdns4505:0crwdne4505:0","wallet_balance_eth":"crwdns10189:0crwdne10189:0","wallet_new":"crwdns4511:0crwdne4511:0","wallet_status_pending":"crwdns16396:0{{plural}}crwdne16396:0","wallet_status_pending_clear_all":"crwdns16398:0crwdne16398:0","wallet_status_pending_clear":"crwdns16400:0crwdne16400:0","wallet_status_button_change":"crwdns4519:0crwdne4519:0","wallet_status_button_copy_address":"crwdns4523:0crwdne4523:0","wallet_transfer_account":"crwdns10191:0crwdne10191:0","wallet_transfer_receiving_account":"crwdns10193:0crwdne10193:0","wallet_status_no_pending_transactions":"crwdns17212:0crwdne17212:0","wallet_transfer_to_address":"crwdns4529:0crwdne4529:0","wallet_transfer_send":"crwdns4539:0crwdne4539:0","wallet_transfer_1559_placeholder":"crwdns10433:0crwdne10433:0","wallet_transfer_title":"crwdns4541:0crwdne4541:0","wallet_transfer_error_amount_absence":"crwdns4543:0crwdne4543:0","wallet_transfer_error_address_absence":"crwdns4545:0crwdne4545:0","wallet_transfer_error_same_address_with_current_account":"crwdns11863:0crwdne11863:0","wallet_transfer_error_is_contract_address":"crwdns11865:0crwdne11865:0","wallet_transfer_error_invalid_address":"crwdns4547:0crwdne4547:0","wallet_transfer_error_no_address_has_been_set_name":"crwdns10435:0crwdne10435:0","wallet_transfer_error_no_support_ens":"crwdns10437:0crwdne10437:0","wallet_transfer_error_insufficient_balance":"crwdns7961:0{{symbol}}crwdne7961:0","wallet_transfer_error_gas_price_absence":"crwdns9051:0crwdne9051:0","wallet_transfer_error_gas_limit_absence":"crwdns9053:0crwdne9053:0","wallet_transfer_error_max_fee_absence":"crwdns9055:0crwdne9055:0","wallet_transfer_error_max_priority_fee_absence":"crwdns9057:0crwdne9057:0","wallet_transfer_error_max_fee_too_low":"crwdns8043:0crwdne8043:0","wallet_transfer_error_max_fee_too_high":"crwdns8045:0crwdne8045:0","wallet_transfer_error_max_priority_gas_fee_positive":"crwdns8047:0crwdne8047:0","wallet_transfer_error_max_priority_gas_fee_too_low":"crwdns8049:0crwdne8049:0","wallet_transfer_error_max_priority_gas_fee_too_high":"crwdns8051:0crwdne8051:0","wallet_transfer_error_max_priority_gas_fee_imbalance":"crwdns8053:0crwdne8053:0","wallet_transfer_gwei":"crwdns8055:0crwdne8055:0","wallet_transfer_between_my_accounts":"crwdns10195:0crwdne10195:0","wallet_risk_warning_dialog_title":"crwdns4561:0crwdne4561:0","wallet_risk_warning_no_select_wallet":"crwdns4563:0crwdne4563:0","wallet_risk_warning_content":"crwdns4565:0crwdne4565:0","weekly":"crwdns4567:0crwdne4567:0","wallet_risk_confirm_confirming":"crwdns4569:0crwdne4569:0","wallet_risk_confirm_failed":"crwdns4571:0crwdne4571:0","relative_time_days_ago":"crwdns4575:0{{days}}crwdne4575:0","relative_time_hours_ago":"crwdns4577:0{{hours}}crwdne4577:0","relative_time_minutes_ago":"crwdns4579:0{{minutes}}crwdne4579:0","relative_time_months_ago":"crwdns4581:0{{months}}crwdne4581:0","relative_time_seconds_ago":"crwdns4583:0{{seconds}}crwdne4583:0","relative_time_years_ago":"crwdns4585:0{{years}}crwdne4585:0","plugin_wallet_snackbar_wait_for_confirming":"crwdns10629:0crwdne10629:0","plugin_wallet_snackbar_hash":"crwdns10631:0crwdne10631:0","plugin_wallet_snackbar_confirmed":"crwdns10633:0crwdne10633:0","plugin_wallet_snackbar_success":"crwdns10635:0crwdne10635:0","plugin_wallet_snackbar_failed":"crwdns10637:0crwdne10637:0","plugin_wallet_snackbar_swap_successful":"crwdns10639:0crwdne10639:0","plugin_wallet_snackbar_swap_token":"crwdns10641:0crwdne10641:0","plugin_wallet_choose_network":"crwdns17250:0crwdne17250:0","plugin_wallet_choose_wallet":"crwdns17252:0crwdne17252:0","plugin_wallet_connect_with":"crwdns12981:0crwdne12981:0","plugin_wallet_connect_with_retry":"crwdns12983:0crwdne12983:0","plugin_wallet_connected_with":"crwdns12985:0crwdne12985:0","plugin_wallet_metamask_error_already_request":"crwdns12987:0crwdne12987:0","plugin_wallet_connect_tip":"crwdns12989:0{{providerName}}crwdnd12989:0{{providerShortenLink}}crwdne12989:0","plugin_wallet_disconnect":"crwdns17214:0crwdne17214:0","plugin_wallet_dialog_title":"crwdns17216:0crwdne17216:0","plugin_wallet_select_a_nft_contract":"crwdns7923:0crwdne7923:0","plugin_wallet_select_a_nft_owner":"crwdns7925:0crwdne7925:0","plugin_wallet_select_a_nft_operator":"crwdns7927:0crwdne7927:0","plugin_wallet_fail_to_load_nft_contract":"crwdns7929:0crwdne7929:0","plugin_wallet_nft_approving_all":"crwdns7931:0{{symbol}}crwdne7931:0","plugin_wallet_approve_all_nft":"crwdns7933:0{{symbol}}crwdne7933:0","plugin_wallet_approve_all_nft_successfully":"crwdns7935:0{{symbol}}crwdne7935:0","plugin_wallet_connect_a_wallet":"crwdns4591:0crwdne4591:0","plugin_wallet_confirm_risk_warning":"crwdns4593:0crwdne4593:0","plugin_wallet_no_gas_fee":"crwdns4595:0crwdne4595:0","plugin_wallet_update_gas_fee":"crwdns4597:0crwdne4597:0","plugin_wallet_invalid_network":"crwdns4599:0crwdne4599:0","plugin_wallet_select_a_wallet":"crwdns4601:0crwdne4601:0","plugin_wallet_transaction":"crwdns4603:0crwdne4603:0","plugin_wallet_transaction_wait_for_confirmation":"crwdns4605:0crwdne4605:0","plugin_wallet_transaction_submitted":"crwdns4607:0crwdne4607:0","plugin_wallet_transaction_confirmed":"crwdns4609:0crwdne4609:0","plugin_wallet_transaction_reverted":"crwdns4611:0crwdne4611:0","plugin_wallet_transaction_rejected":"crwdns4613:0crwdne4613:0","plugin_wallet_transaction_underpriced":"crwdns11871:0crwdne11871:0","plugin_wallet_transaction_server_error":"crwdns4615:0crwdne4615:0","plugin_wallet_view_on_explorer":"crwdns4617:0crwdne4617:0","plugin_ito_placeholder_when_token_unselected":"crwdns4619:0crwdne4619:0","plugin_wallet_wrong_network_tip":"crwdns4621:0crwdne4621:0","plugin_wallet_on_create":"crwdns4627:0crwdne4627:0","plugin_wallet_on_connect":"crwdns4629:0crwdne4629:0","plugin_wallet_wrong_network":"crwdns4631:0crwdne4631:0","plugin_wallet_pending_transactions":"crwdns7717:0{{count}}crwdnd7717:0{{plural}}crwdne7717:0","plugin_wallet_import_wallet":"crwdns4641:0crwdne4641:0","plugin_wallet_select_provider_dialog_title":"crwdns4663:0crwdne4663:0","plugin_wallet_qr_code_with_wallet_connect":"crwdns4665:0crwdne4665:0","plugin_wallet_token_unlock":"crwdns4667:0crwdne4667:0","plugin_wallet_token_infinite_unlock":"crwdns4669:0crwdne4669:0","plugin_wallet_connect_dialog_title":"crwdns4671:0crwdne4671:0","plugin_wallet_connect_safari_metamask":"crwdns4673:0crwdne4673:0","plugin_wallet_connect_safari_rainbow":"crwdns4675:0crwdne4675:0","plugin_wallet_connect_safari_trust":"crwdns4677:0crwdne4677:0","plugin_wallet_connect_safari_im_token":"crwdns4679:0crwdne4679:0","plugin_wallet_on_connect_in_firefox":"crwdns4681:0crwdne4681:0","plugin_wallet_return_mobile_wallet_options":"crwdns4683:0crwdne4683:0","plugin_wallet_view_qr_code":"crwdns4685:0crwdne4685:0","plugin_wallet_switch_network":"crwdns4687:0{{network}}crwdne4687:0","plugin_wallet_switch_network_under_going":"crwdns4689:0{{network}}crwdne4689:0","plugin_wallet_connect_tips":"crwdns16620:0crwdne16620:0","plugin_wallet_connect_network":"crwdns16622:0{{network}}crwdne16622:0","plugin_wallet_connect_network_under_going":"crwdns16624:0{{network}}crwdne16624:0","plugin_wallet_not_available_on":"crwdns7913:0{{network}}crwdne7913:0","plugin_wallet_connect_wallet":"crwdns4693:0crwdne4693:0","plugin_wallet_name_placeholder":"crwdns4705:0crwdne4705:0","plugin_wallet_cancel_sign":"crwdns4709:0crwdne4709:0","plugin_nft_avatar_recommend_feature_description":"crwdns16626:0crwdne16626:0","application_hint":"crwdns16628:0crwdne16628:0","plugin_red_packet_create":"crwdns11873:0crwdne11873:0","plugin_red_packet_claimed":"crwdns16926:0crwdne16926:0","plugin_red_packet_claim":"crwdns16954:0crwdne16954:0","plugin_red_packet_create_with_token":"crwdns4775:0{{amount}}crwdnd4775:0{{symbol}}crwdne4775:0","plugin_nft_red_packet_create":"crwdns11875:0crwdne11875:0","plugin_red_packet_nft_account_name":"crwdns8159:0crwdne8159:0","plugin_gitcoin_select_a_token":"crwdns4793:0crwdne4793:0","plugin_gitcoin_insufficient_balance":"crwdns4799:0{{symbol}}crwdne4799:0","plugin_trader_fail_to_load":"crwdns10207:0crwdne10207:0","plugin_trader_lbp_pool_in_balancer":"crwdns10209:0crwdne10209:0","plugin_trader_swap_description":"crwdns16242:0crwdne16242:0","plugin_trader_tutorial":"crwdns10211:0crwdne10211:0","plugin_trader_what_is_lbp":"crwdns10213:0crwdne10213:0","plugin_trader_lbp_intro":"crwdns10215:0{{symbol}}crwdnd10215:0{{symbol}}crwdne10215:0","plugin_trader_no_pools_found":"crwdns10217:0crwdne10217:0","plugin_trader_safety_agree":"crwdns10219:0crwdne10219:0","plugin_trader_view_on_etherscan":"crwdns10221:0crwdne10221:0","plugin_trader_safety_alert_title":"crwdns10223:0crwdne10223:0","plugin_trader_safety_alert":"crwdns10225:0crwdne10225:0","plugin_trader_total_supply":"crwdns10227:0crwdne10227:0","plugin_trader_circulating_supply":"crwdns10229:0crwdne10229:0","plugin_trader_volume_24":"crwdns10231:0crwdne10231:0","plugin_trader_market_cap":"crwdns10233:0crwdne10233:0","plugin_trader_data_source":"crwdns10235:0crwdne10235:0","plugin_trader_price_updated":"crwdns10237:0crwdne10237:0","plugin_savings":"crwdns13250:0crwdne13250:0","plugin_savings_asset":"crwdns14804:0crwdne14804:0","plugin_savings_apr":"crwdns13256:0crwdne13256:0","plugin_savings_wallet":"crwdns13258:0crwdne13258:0","plugin_savings_operation":"crwdns13260:0crwdne13260:0","plugin_savings_amount":"crwdns13262:0crwdne13262:0","plugin_savings_deposit":"crwdns13264:0crwdne13264:0","plugin_savings_withdraw":"crwdns13266:0crwdne13266:0","plugin_savings_process_deposit":"crwdns13268:0crwdne13268:0","plugin_savings_process_withdraw":"crwdns13270:0crwdne13270:0","plugin_trader_swap":"crwdns4881:0crwdne4881:0","plugin_trader_wrap":"crwdns4883:0crwdne4883:0","plugin_trader_unwrap":"crwdns4885:0crwdne4885:0","plugin_trader_buy":"crwdns4887:0crwdne4887:0","plugin_trader_no_data":"crwdns4889:0crwdne4889:0","plugin_trader_tab_market":"crwdns4891:0crwdne4891:0","plugin_trader_tab_price":"crwdns4893:0crwdne4893:0","plugin_trader_tab_exchange":"crwdns4895:0crwdne4895:0","plugin_trader_tab_swap":"crwdns4897:0crwdne4897:0","plugin_trader_table_exchange":"crwdns4899:0crwdne4899:0","plugin_trader_table_pair":"crwdns4901:0crwdne4901:0","plugin_trader_table_price":"crwdns4903:0crwdne4903:0","plugin_trader_table_volume":"crwdns4905:0crwdne4905:0","plugin_trader_table_updated":"crwdns4907:0crwdne4907:0","plugin_trader_error_amount_absence":"crwdns4915:0crwdne4915:0","plugin_trader_error_insufficient_balance":"crwdns4917:0{{symbol}}crwdne4917:0","plugin_trader_error_insufficient_lp":"crwdns4919:0crwdne4919:0","plugin_trade_error_input_amount_less_minimum_amount":"crwdns4923:0crwdne4923:0","plugin_trader_slippage_tolerance":"crwdns7917:0crwdne7917:0","plugin_trader_swap_from":"crwdns10441:0crwdne10441:0","plugin_trader_swap_to":"crwdns10443:0crwdne10443:0","plugin_trader_gas_fee":"crwdns10445:0crwdne10445:0","plugin_trader_unlock_symbol":"crwdns10447:0{{symbol}}crwdne10447:0","plugin_trader_unlock_tips":"crwdns10449:0{{provider}}crwdnd10449:0{{symbol}}crwdne10449:0","plugin_trader_swap_amount_symbol":"crwdns10451:0{{amount}}crwdnd10451:0{{symbol}}crwdne10451:0","plugin_trader_confirm_from":"crwdns10453:0crwdne10453:0","plugin_trader_confirm_to":"crwdns10455:0crwdne10455:0","plugin_trader_confirm_max_price_slippage":"crwdns10457:0crwdne10457:0","plugin_trader_confirm_minimum_received":"crwdns10459:0crwdne10459:0","plugin_trader_confirm_tips":"crwdns10461:0crwdne10461:0","plugin_trader_price_impact_warning_tips":"crwdns13021:0crwdne13021:0","plugin_trader_confirm_swap":"crwdns13023:0crwdne13023:0","plugin_trader_accept":"crwdns13025:0crwdne13025:0","plugin_trader_price_impact":"crwdns13027:0crwdne13027:0","plugin_trader_price_image_value":"crwdns13029:0{{percent}}crwdne13029:0","plugin_trader_slippage_warning":"crwdns13031:0crwdne13031:0","plugin_trader_confirm_price_impact":"crwdns13033:0{{percent}}crwdne13033:0","plugin_trader_max_slippage":"crwdns10463:0crwdne10463:0","plugin_trader_gas_setting_instant":"crwdns10465:0crwdne10465:0","plugin_trader_gas_setting_high":"crwdns10467:0crwdne10467:0","plugin_trader_gas_setting_medium":"crwdns10469:0crwdne10469:0","plugin_trader_gas_setting_standard":"crwdns10471:0crwdne10471:0","plugin_trader_gas_setting_fast":"crwdns10473:0crwdne10473:0","plugin_trader_gas_setting_custom":"crwdns10475:0crwdne10475:0","plugin_trader_tx_cost_usd":"crwdns10477:0{{usd}}crwdne10477:0","plugin_trader_tx_cost_very_small":"crwdns16490:0{{usd}}crwdne16490:0","plugin_trader_gas_option":"crwdns10479:0{{option}}crwdnd10479:0{{value}}crwdne10479:0","plugin_trader_no_enough_liquidity":"crwdns10481:0crwdne10481:0","plugin_trader_no_trade":"crwdns10483:0crwdne10483:0","plugin_trader_gas":"crwdns10485:0crwdne10485:0","plugin_poll_display_name":"crwdns4941:0crwdne4941:0","plugin_poll_question_hint":"crwdns4943:0crwdne4943:0","plugin_poll_options_hint":"crwdns4945:0crwdne4945:0","plugin_poll_length":"crwdns4947:0crwdne4947:0","plugin_poll_length_days":"crwdns4949:0crwdne4949:0","plugin_poll_length_hours":"crwdns4951:0crwdne4951:0","plugin_poll_length_minutes":"crwdns4953:0crwdne4953:0","plugin_poll_length_unknown":"crwdns4955:0crwdne4955:0","plugin_poll_create_new":"crwdns4957:0crwdne4957:0","plugin_poll_select_existing":"crwdns4959:0crwdne4959:0","plugin_poll_send_poll":"crwdns4961:0crwdne4961:0","plugin_poll_status_closed":"crwdns4963:0crwdne4963:0","plugin_poll_status_voting":"crwdns4965:0crwdne4965:0","plugin_poll_status_voted":"crwdns4967:0crwdne4967:0","plugin_poll_deadline":"crwdns4969:0{{time}}crwdne4969:0","plugin_ito_empty_token":"crwdns10241:0crwdne10241:0","plugin_ito_locked":"crwdns10243:0crwdne10243:0","plugin_ito_share":"crwdns4971:0crwdne4971:0","plugin_ito_enter":"crwdns4973:0crwdne4973:0","plugin_ito_dialog_swap_title":"crwdns4975:0{{token}}crwdne4975:0","plugin_ito_dialog_swap_reminder_title":"crwdns4977:0crwdne4977:0","plugin_ito_dialog_swap_unlock_title":"crwdns4979:0crwdne4979:0","plugin_ito_dialog_swap_share_title":"crwdns4981:0crwdne4981:0","plugin_ito_dialog_swap_exchange":"crwdns4983:0crwdne4983:0","plugin_ito_dialog_swap_panel_title":"crwdns4985:0crwdne4985:0","plugin_ito_dialog_swap_exceed_wallet_limit":"crwdns4987:0crwdne4987:0","plugin_ito_swap_ration_label":"crwdns4989:0crwdne4989:0","plugin_ito_swap_only_once_remind":"crwdns4993:0crwdne4993:0","plugin_ito_swap_title":"crwdns4995:0{{amount}}crwdnd4995:0{{token}}crwdnd4995:0{{swap}}crwdne4995:0","plugin_ito_swap_end_date":"crwdns4997:0{{date}}crwdne4997:0","plugin_ito_dialog_claim_reminder_agree":"crwdns4999:0crwdne4999:0","plugin_ito_dialog_claim_reminder_text1":"crwdns5001:0{{networkType}}crwdne5001:0","plugin_ito_dialog_claim_reminder_text2":"crwdns5003:0crwdne5003:0","plugin_ito_dialog_claim_reminder_text3":"crwdns5005:0crwdne5005:0","plugin_ito_dialog_claim_reminder_text4":"crwdns5007:0crwdne5007:0","plugin_ito_expired":"crwdns5009:0crwdne5009:0","plugin_ito_create_new":"crwdns5011:0crwdne5011:0","plugin_ito_claim_all_status_unclaimed":"crwdns5015:0crwdne5015:0","plugin_ito_claim_all_status_locked":"crwdns5017:0crwdne5017:0","plugin_ito_claim_all_unlock_time":"crwdns5019:0{{time}}crwdne5019:0","plugin_ito_claim_all_dialog_title":"crwdns5021:0crwdne5021:0","plugin_ito_advanced":"crwdns5025:0crwdne5025:0","plugin_ito_advanced_ip_region":"crwdns5027:0crwdne5027:0","plugin_ito_advanced_delay_unlocking":"crwdns5029:0crwdne5029:0","plugin_ito_advanced_contract":"crwdns5031:0crwdne5031:0","plugin_ito_select_existing":"crwdns5033:0crwdne5033:0","plugin_ito_display_name":"crwdns5035:0crwdne5035:0","plugin_ito_sell_token":"crwdns5037:0crwdne5037:0","plugin_ito_sell_price":"crwdns5039:0crwdne5039:0","plugin_ito_sell_total_amount":"crwdns5041:0crwdne5041:0","plugin_ito_allocation_per_wallet":"crwdns5043:0{{limit}}crwdnd5043:0{{token}}crwdne5043:0","plugin_ito_allocation_per_wallet_title":"crwdns13169:0crwdne13169:0","plugin_ito_begin_time_title":"crwdns13171:0crwdne13171:0","plugin_ito_wait_unlock_time":"crwdns5047:0{{unlockTime}}crwdne5047:0","plugin_ito_claim":"crwdns5049:0crwdne5049:0","plugin_ito_claiming":"crwdns5051:0crwdne5051:0","plugin_ito_claim_all":"crwdns5053:0crwdne5053:0","plugin_ito_qualification_start_time":"crwdns5061:0crwdne5061:0","plugin_ito_error_qualification_start_time":"crwdns5063:0crwdne5063:0","plugin_ito_end_time_title":"crwdns13173:0crwdne13173:0","plugin_ito_error_invalid_qualification":"crwdns5067:0crwdne5067:0","plugin_ito_unlock_time_cert":"crwdns10245:0{{date}}crwdne10245:0","plugin_ito_unlock_time":"crwdns5069:0crwdne5069:0","plugin_ito_launch_campaign":"crwdns10247:0crwdne10247:0","plugin_ito_total_claimable_count":"crwdns10249:0crwdne10249:0","plugin_ito_qualification_label":"crwdns5071:0crwdne5071:0","plugin_ito_message_label":"crwdns5073:0crwdne5073:0","plugin_ito_region_label":"crwdns5075:0crwdne5075:0","plugin_ito_region_confirm_label":"crwdns7919:0crwdne7919:0","plugin_ito_region_list":"crwdns5079:0{{ select }}crwdnd5079:0{{ all }}crwdne5079:0","plugin_ito_region_all":"crwdns5081:0crwdne5081:0","plugin_ito_region_search":"crwdns5083:0crwdne5083:0","plugin_ito_region_ban":"crwdns5085:0crwdne5085:0","plugin_ito_next":"crwdns5087:0crwdne5087:0","plugin_ito_name":"crwdns16244:0crwdne16244:0","plugin_ito_description":"crwdns16246:0crwdne16246:0","plugin_ito_back":"crwdns5089:0crwdne5089:0","plugin_ito_transaction_dialog_summary_with_no_token":"crwdns11877:0crwdne11877:0","plugin_ito_transaction_dialog_summary":"crwdns5091:0{{amount}}crwdnd5091:0{{symbol}}crwdne5091:0","plugin_ito_swap":"crwdns5093:0crwdne5093:0","plugin_ito_send_tip":"crwdns5095:0crwdne5095:0","plugin_ito_send_text":"crwdns5097:0{{total}}crwdnd5097:0{{symbol}}crwdne5097:0","plugin_ito_error_enter_amount":"crwdns5099:0crwdne5099:0","plugin_ito_error_select_token":"crwdns5101:0crwdne5101:0","plugin_ito_error_enter_amount_and_token":"crwdns5103:0crwdne5103:0","plugin_ito_error_allocation_absence":"crwdns5105:0crwdne5105:0","plugin_ito_error_allocation_invalid":"crwdns5107:0crwdne5107:0","plugin_ito_error_exchange_time":"crwdns5109:0crwdne5109:0","plugin_ito_error_unlock_time":"crwdns5111:0crwdne5111:0","plugin_ito_error_balance":"crwdns5113:0{{symbol}}crwdne5113:0","plugin_ito_list_start_date":"crwdns5115:0{{date}}crwdne5115:0","plugin_ito_list_end_date":"crwdns5117:0{{date}}crwdne5117:0","plugin_ito_list_sold_total":"crwdns5119:0crwdne5119:0","plugin_ito_list_total":"crwdns5121:0crwdne5121:0","plugin_ito_list_table_type":"crwdns5123:0crwdne5123:0","plugin_ito_list_table_price":"crwdns5125:0crwdne5125:0","plugin_ito_no_claimable_token":"crwdns5127:0crwdne5127:0","plugin_ito_list_table_sold":"crwdns5129:0crwdne5129:0","plugin_ito_list_table_got":"crwdns5131:0crwdne5131:0","plugin_ito_list_button_send":"crwdns5133:0crwdne5133:0","plugin_ito_withdraw":"crwdns5135:0crwdne5135:0","plugin_ito_withdrawn":"crwdns5141:0crwdne5141:0","plugin_ito_your_swapped_amount":"crwdns5143:0{{amount}}crwdnd5143:0{{symbol}}crwdne5143:0","plugin_ito_your_claimed_amount":"crwdns5145:0{{amount}}crwdnd5145:0{{symbol}}crwdne5145:0","plugin_ito_your_refund_amount":"crwdns5147:0{{amount}}crwdnd5147:0{{symbol}}crwdne5147:0","plugin_ito_unlock_in_advance":"crwdns5149:0crwdne5149:0","plugin_ito_swapped_status":"crwdns5151:0{{remain}}crwdnd5151:0{{total}}crwdnd5151:0{{token}}crwdne5151:0","plugin_ito_qualification_loading":"crwdns5137:0crwdne5137:0","plugin_ito_qualification_failed":"crwdns5139:0crwdne5139:0","plugin_ito_congratulations":"crwdns5153:0crwdne5153:0","plugin_ito_out_of_stock_hit":"crwdns5155:0crwdne5155:0","plugin_ito_claim_success_share":"crwdns5157:0{{user}}crwdnd5157:0{{account}}crwdnd5157:0{{symbol}}crwdnd5157:0$t(promote_ito_short)crwdnd5157:0{{link}}crwdne5157:0","plugin_ito_claim_success_share_no_official_account":"crwdns9179:0{{user}}crwdnd9179:0{{symbol}}crwdnd9179:0$t(promote_ito_short)crwdnd9179:0{{link}}crwdne9179:0","plugin_ito_claim_foreshow_share":"crwdns5159:0{{symbol}}crwdnd5159:0{{name}}crwdnd5159:0{{account}}crwdnd5159:0{{link}}crwdnd5159:0$t(promote_ito_short)crwdne5159:0","plugin_ito_claim_foreshow_share_no_official_account":"crwdns9181:0{{symbol}}crwdnd9181:0{{name}}crwdnd9181:0{{link}}crwdnd9181:0$t(promote_ito_short)crwdne9181:0","plugin_ito_password":"crwdns5161:0{{password}}crwdne5161:0","plugin_ito_status_no_start":"crwdns5163:0crwdne5163:0","plugin_ito_status_ongoing":"crwdns5165:0crwdne5165:0","plugin_ito_status_out_of_stock":"crwdns5167:0crwdne5167:0","plugin_ito_loading":"crwdns5169:0crwdne5169:0","plugin_ito_amount_unlocked":"crwdns5175:0{{amount}}crwdnd5175:0{{symbol}}crwdne5175:0","plugin_ito_amount_unlocked_infinity":"crwdns5177:0{{symbol}}crwdne5177:0","plugin_ito_unlocking_symbol":"crwdns5179:0{{symbol}}crwdne5179:0","plugin_ito_continue":"crwdns5181:0crwdne5181:0","plugin_ito_view_on_explorer":"crwdns5183:0crwdne5183:0","plugin_ito_unlock_tip":"crwdns10829:0{{address}}crwdnd10829:0{{symbol}}crwdne10829:0","plugin_ito_account_promote$default":"crwdns17260:0crwdne17260:0","plugin_ito_account_promote$twitter":"crwdns17262:0$t(twitter_account)crwdne17262:0","plugin_ito_account_promote$facebook":"crwdns17264:0$t(facebook_account)crwdne17264:0","plugin_ito_share_text":"crwdns17266:0{{symbol}}crwdnd17266:0{{balance}}crwdnd17266:0{{account_promote}}crwdnd17266:0$t(hash_tag)crwdnd17266:0{{link}}crwdne17266:0","plugin_collectible_you":"crwdns5185:0crwdne5185:0","plugin_collectible_done":"crwdns5187:0crwdne5187:0","plugin_collectible_retry":"crwdns5189:0crwdne5189:0","plugin_collectible_get_more_token":"crwdns10805:0{{token}}crwdne10805:0","plugin_collectible_sell":"crwdns5191:0crwdne5191:0","plugin_collectible_checkout":"crwdns5193:0crwdne5193:0","plugin_collectible_place_bid":"crwdns5195:0crwdne5195:0","plugin_collectible_buy_now":"crwdns5197:0crwdne5197:0","plugin_collectible_make_offer":"crwdns5199:0crwdne5199:0","plugin_collectible_post_listing":"crwdns5201:0crwdne5201:0","plugin_collectible_description":"crwdns5203:0{{price}}crwdnd5203:0{{symbol}}crwdne5203:0","plugin_collectible_article":"crwdns5205:0crwdne5205:0","plugin_collectible_overview":"crwdns10523:0crwdne10523:0","plugin_collectible_details":"crwdns5207:0crwdne5207:0","plugin_collectible_offers":"crwdns5209:0crwdne5209:0","plugin_collectible_listing":"crwdns5211:0crwdne5211:0","plugin_collectible_history":"crwdns5213:0crwdne5213:0","plugin_collectible_event":"crwdns5215:0crwdne5215:0","plugin_collectible_unit_price":"crwdns5217:0crwdne5217:0","plugin_collectible_price":"crwdns5219:0crwdne5219:0","plugin_collectible_from":"crwdns5221:0crwdne5221:0","plugin_collectible_to":"crwdns5223:0crwdne5223:0","plugin_collectible_date":"crwdns5225:0crwdne5225:0","plugin_collectible_quantity":"crwdns5227:0crwdne5227:0","plugin_collectible_expiration":"crwdns5229:0crwdne5229:0","plugin_collectible_no_offers":"crwdns5231:0crwdne5231:0","plugin_collectible_no_listings":"crwdns5233:0crwdne5233:0","plugin_collectible_base":"crwdns5235:0crwdne5235:0","plugin_collectible_properties":"crwdns5237:0crwdne5237:0","plugin_collectible_about":"crwdns5239:0crwdne5239:0","plugin_collectible_chain_info":"crwdns5241:0crwdne5241:0","plugin_collectible_contract_address":"crwdns5243:0crwdne5243:0","plugin_collectible_token_id":"crwdns5245:0crwdne5245:0","plugin_collectible_block_chain":"crwdns5247:0crwdne5247:0","plugin_collectible_create_by":"crwdns5249:0crwdne5249:0","plugin_collectible_owned_by":"crwdns5251:0crwdne5251:0","plugin_collectible_view_on":"crwdns10525:0crwdne10525:0","plugin_collectible_no_history":"crwdns5253:0crwdne5253:0","plugin_collectible_ensure_unreviewed_item":"crwdns5255:0crwdne5255:0","plugin_collectible_check_tos_document":"crwdns5257:0crwdne5257:0","plugin_collectible_insufficient_offer":"crwdns10615:0crwdne10615:0","plugin_collectible_not_been_reviewed_by_opensea":"crwdns5259:0crwdne5259:0","plugin_collectible_reviewed_tips":"crwdns5261:0crwdne5261:0","plugin_collectible_total":"crwdns5263:0crwdne5263:0","plugin_collectible_subtotal":"crwdns5265:0crwdne5265:0","plugin_collectible_item":"crwdns5267:0crwdne5267:0","plugin_collectible_approved_tips":"crwdns5269:0crwdne5269:0","plugin_collectible_agree_terms":"crwdns5271:0crwdne5271:0","plugin_collectible_convert_eth":"crwdns5273:0crwdne5273:0","plugin_collectible_sale_end":"crwdns5275:0{{time}}crwdne5275:0","plugin_collectible_set_initial_price":"crwdns5277:0crwdne5277:0","plugin_collectible_ending_price_tip":"crwdns5279:0crwdne5279:0","plugin_collectible_starting_price":"crwdns5281:0crwdne5281:0","plugin_collectible_ending_price":"crwdns5283:0crwdne5283:0","plugin_collectible_ending_price_less_than_staring":"crwdns5285:0crwdne5285:0","plugin_collectible_expiration_date":"crwdns5287:0crwdne5287:0","plugin_collectible_schedule_date":"crwdns5289:0crwdne5289:0","plugin_collectible_auto_cancel_tip":"crwdns5291:0crwdne5291:0","plugin_collectible_schedule_future_date":"crwdns5293:0crwdne5293:0","plugin_collectible_buyer_address":"crwdns5295:0crwdne5295:0","plugin_collectible_buyer_address_placeholder":"crwdns5297:0crwdne5297:0","plugin_collectible_buyer_address_helper_text":"crwdns5299:0crwdne5299:0","plugin_collectible_include_ending_price":"crwdns5301:0crwdne5301:0","plugin_collectible_include_ending_price_helper":"crwdns5303:0crwdne5303:0","plugin_collectible_schedule_for_a_future_time":"crwdns5305:0crwdne5305:0","plugin_collectible_schedule_for_a_future_time_helper":"crwdns5307:0crwdne5307:0","plugin_collectible_privacy":"crwdns5309:0crwdne5309:0","plugin_collectible_privacy_helper":"crwdns5311:0crwdne5311:0","plugin_collectible_enter_a_price":"crwdns5313:0crwdne5313:0","plugin_collectible_insufficient_balance":"crwdns7963:0crwdne7963:0","plugin_collectible_invalid_schedule_date":"crwdns5317:0crwdne5317:0","plugin_collectible_invalid_ending_price":"crwdns5319:0crwdne5319:0","plugin_collectible_invalid_expiration_date":"crwdns5321:0crwdne5321:0","plugin_collectible_invalid_buyer_address":"crwdns5323:0crwdne5323:0","plugin_collectible_set_price":"crwdns5325:0crwdne5325:0","plugin_collectible_highest_bid":"crwdns5327:0crwdne5327:0","plugin_collectible_minimum_bid":"crwdns5329:0crwdne5329:0","plugin_collectible_set_starting_bid_price":"crwdns5331:0crwdne5331:0","plugin_collectible_reserve_price":"crwdns5333:0crwdne5333:0","plugin_collectible_reserve_price_helper":"crwdns5335:0crwdne5335:0","plugin_collectible_auction_auto_end":"crwdns5337:0crwdne5337:0","plugin_collectible_enter_minimum_bid":"crwdns5339:0crwdne5339:0","plugin_collectible_enter_reserve_price":"crwdns5341:0crwdne5341:0","plugin_collectible_invalid_reserve_price":"crwdns5343:0crwdne5343:0","plugin_collectible_place_a_bid":"crwdns5345:0crwdne5345:0","plugin_collectible_make_an_offer":"crwdns5347:0crwdne5347:0","plugin_collectible_approved_by_opensea":"crwdns17022:0crwdne17022:0","plugin_collectible_legal_text":"crwdns5351:0crwdne5351:0","plugin_collectibles_name":"crwdns16248:0crwdne16248:0","plugin_collectibles_description":"crwdns16250:0crwdne16250:0","plugin_cryptoartai_description_title":"crwdns10527:0crwdne10527:0","plugin_cryptoartai_dapp_name":"crwdns16524:0crwdne16524:0","plugin_cryptoartai_dapp_description":"crwdns16526:0crwdne16526:0","plugin_cryptoartai_edition":"crwdns10529:0crwdne10529:0","plugin_cryptoartai_operator":"crwdns10531:0crwdne10531:0","plugin_cryptoartai_activity_type":"crwdns10533:0crwdne10533:0","plugin_cryptoartai_status":"crwdns10535:0crwdne10535:0","plugin_cryptoartai_time":"crwdns10537:0crwdne10537:0","plugin_cryptoartai_price":"crwdns10539:0crwdne10539:0","plugin_cryptoartai_tx":"crwdns10541:0crwdne10541:0","plugin_cryptoartai_latest_bid":"crwdns10543:0crwdne10543:0","plugin_cryptoartai_description":"crwdns10545:0{{bidPrice}}crwdnd10545:0{{symbol}}crwdnd10545:0{{price}}crwdnd10545:0{{symbol}}crwdnd10545:0{{soldNum}}crwdnd10545:0{{totalAvailable}}crwdnd10545:0{{editionNumber}}crwdne10545:0","plugin_cryptoartai_no_price_description":"crwdns10547:0{{bidPrice}}crwdnd10547:0{{symbol}}crwdnd10547:0{{soldNum}}crwdnd10547:0{{totalAvailable}}crwdnd10547:0{{editionNumber}}crwdne10547:0","plugin_cryptoartai_sold_description":"crwdns10549:0{{soldPrice}}crwdnd10549:0{{symbol}}crwdnd10549:0{{soldNum}}crwdnd10549:0{{totalAvailable}}crwdnd10549:0{{editionNumber}}crwdne10549:0","plugin_cryptoartai_buy":"crwdns10551:0crwdne10551:0","plugin_cryptoartai_buy_now":"crwdns10553:0crwdne10553:0","plugin_cryptoartai_current_balance":"crwdns10555:0crwdne10555:0","plugin_cryptoartai_current_highest_offer":"crwdns10557:0crwdne10557:0","plugin_cryptoartai_bid_least":"crwdns10559:0crwdne10559:0","plugin_cryptoartai_escrowed":"crwdns10561:0crwdne10561:0","plugin_cryptoartai_current_balance_is":"crwdns10563:0crwdne10563:0","plugin_cryptoartai_auction_end":"crwdns10565:0crwdne10565:0","plugin_cryptoartai_auction_end_time":"crwdns10567:0crwdne10567:0","plugin_cryptoartai_share":"crwdns10569:0{{amount}}crwdnd10569:0{{symbol}}crwdnd10569:0{{title}}crwdnd10569:0{{assetLink}}crwdnd10569:0{{account}}crwdne10569:0","plugin_cryptoartai_share_no_official_account":"crwdns10571:0{{amount}}crwdnd10571:0{{symbol}}crwdnd10571:0{{title}}crwdnd10571:0{{assetLink}}crwdne10571:0","plugin_cryptoartai_offer_share":"crwdns10573:0{{amount}}crwdnd10573:0{{symbol}}crwdnd10573:0{{title}}crwdnd10573:0{{assetLink}}crwdnd10573:0{{account}}crwdne10573:0","plugin_cryptoartai_offer_share_no_official_account":"crwdns10575:0{{amount}}crwdnd10575:0{{symbol}}crwdnd10575:0{{title}}crwdnd10575:0{{assetLink}}crwdne10575:0","plugin_snapshot_info_title":"crwdns5353:0crwdne5353:0","plugin_snapshot_info_strategy":"crwdns5355:0crwdne5355:0","plugin_snapshot_info_author":"crwdns5357:0crwdne5357:0","plugin_snapshot_info_ipfs":"crwdns5359:0crwdne5359:0","plugin_snapshot_info_start":"crwdns5361:0crwdne5361:0","plugin_snapshot_info_end":"crwdns5363:0crwdne5363:0","plugin_snapshot_info_snapshot":"crwdns5365:0crwdne5365:0","plugin_snapshot_description":"crwdns16252:0crwdne16252:0","plugin_snapshot_result_title":"crwdns5367:0crwdne5367:0","plugin_snapshot_votes_title":"crwdns5369:0crwdne5369:0","plugin_snapshot_no_power":"crwdns5371:0crwdne5371:0","plugin_snapshot_vote_success":"crwdns5373:0crwdne5373:0","plugin_snapshot_vote":"crwdns5375:0crwdne5375:0","plugin_snapshot_vote_choice":"crwdns5377:0crwdne5377:0","plugin_snapshot_vote_power":"crwdns5379:0crwdne5379:0","plugin_snapshot_vote_title":"crwdns5381:0crwdne5381:0","plugin_snapshot_vote_confirm_dialog_title":"crwdns5383:0crwdne5383:0","plugin_snapshot_vote_confirm_dialog_choice":"crwdns5385:0{{ choiceText }}crwdne5385:0","plugin_snapshot_vote_confirm_dialog_warning":"crwdns5387:0crwdne5387:0","plugin_snapshot_current_result_title":"crwdns5389:0crwdne5389:0","plugin_snapshot_download_report":"crwdns5391:0crwdne5391:0","plugin_find_truman_display_name":"crwdns10343:0crwdne10343:0","plugin_find_truman_status_puzzle":"crwdns10345:0crwdne10345:0","plugin_find_truman_status_poll":"crwdns10347:0crwdne10347:0","plugin_find_truman_status_result":"crwdns10349:0crwdne10349:0","plugin_find_truman_status_puzzle_result":"crwdns10351:0crwdne10351:0","plugin_find_truman_status_poll_result":"crwdns10353:0crwdne10353:0","plugin_find_truman_puzzle_to_be_revealed":"crwdns10355:0crwdne10355:0","plugin_find_truman_puzzles_to_be_revealed":"crwdns10357:0crwdne10357:0","plugin_find_truman_poll_to_be_revealed":"crwdns10359:0crwdne10359:0","plugin_find_truman_polls_to_be_revealed":"crwdns10361:0crwdne10361:0","plugin_find_truman_puzzle_underway":"crwdns10365:0crwdne10365:0","plugin_find_truman_puzzle_rate":"crwdns10367:0crwdne10367:0","plugin_find_truman_voting_underway":"crwdns10369:0crwdne10369:0","plugin_find_truman_voting_rate":"crwdns10371:0crwdne10371:0","plugin_find_truman_submit_failed":"crwdns10375:0crwdne10375:0","plugin_find_truman_vote":"crwdns10377:0crwdne10377:0","plugin_find_truman_votes":"crwdns10379:0crwdne10379:0","plugin_find_truman_selected":"crwdns10385:0crwdne10385:0","plugin_find_truman_name":"crwdns16254:0crwdne16254:0","plugin_find_truman_unselect":"crwdns10387:0crwdne10387:0","plugin_find_truman_answer":"crwdns10389:0crwdne10389:0","plugin_find_truman_result":"crwdns10391:0crwdne10391:0","plugin_find_truman_buy":"crwdns10393:0crwdne10393:0","plugin_find_truman_decrypted_by":"crwdns10397:0crwdne10397:0","plugin_find_truman_insufficient_nft":"crwdns10405:0crwdne10405:0","plugin_find_truman_buy_nft_tip":"crwdns10407:0{{count}}crwdne10407:0","plugin_find_truman_connect_wallet_tip":"crwdns10411:0crwdne10411:0","plugin_find_truman_no_participation_tip":"crwdns10413:0crwdne10413:0","plugin_dhedge_managed_by":"crwdns5393:0{{managerName}}crwdne5393:0","plugin_dhedge_manager_share":"crwdns5395:0{{managerShare}}crwdne5395:0","plugin_dhedge_manager_share_more_than_50":"crwdns5397:0crwdne5397:0","plugin_dhedge_value_managed":"crwdns5399:0crwdne5399:0","plugin_dhedge_lifetime_return":"crwdns5401:0crwdne5401:0","plugin_dhedge_risk_factor":"crwdns5403:0crwdne5403:0","plugin_dhedge_tab_stats":"crwdns5405:0crwdne5405:0","plugin_dhedge_tab_chart":"crwdns5407:0crwdne5407:0","plugin_dhedge_strategy":"crwdns5409:0crwdne5409:0","plugin_dhedge_see_less":"crwdns5411:0crwdne5411:0","plugin_dhedge_see_more":"crwdns5413:0crwdne5413:0","plugin_dhedge_no_data":"crwdns5415:0crwdne5415:0","plugin_dhedge_fetch_error":"crwdns5417:0crwdne5417:0","plugin_dhedge_loading_chart":"crwdns5419:0crwdne5419:0","plugin_dhedge_invest":"crwdns5421:0crwdne5421:0","plugin_dhedge_buy_token":"crwdns5423:0{{symbol}}crwdne5423:0","plugin_dhedge_enter_an_amount":"crwdns5425:0crwdne5425:0","plugin_dhedge_insufficient_balance":"crwdns5427:0{{symbol}}crwdne5427:0","plugin_dhedge_pool_not_found":"crwdns5431:0crwdne5431:0","plugin_dhedge_smt_wrong":"crwdns5433:0crwdne5433:0","plugin_dhedge_account_promote$default":"crwdns17268:0crwdne17268:0","plugin_dhedge_account_promote$twitter":"crwdns17270:0$t(twitter_account)crwdne17270:0","plugin_dhedge_account_promote$facebook":"crwdns17272:0$t(facebook_account)crwdne17272:0","plugin_dhedge_share_text":"crwdns17274:0{{amount}}crwdnd17274:0{{symbol}}crwdnd17274:0{{pool}}crwdnd17274:0{{account_promote}}crwdnd17274:0$t(hash_tag)crwdne17274:0","plugin_pooltogether_tab_pools":"crwdns5435:0crwdne5435:0","plugin_pooltogether_name":"crwdns16256:0crwdne16256:0","plugin_pooltogether_description":"crwdns16258:0crwdne16258:0","plugin_pooltogether_tab_account":"crwdns5437:0crwdne5437:0","plugin_pooltogether_no_pool":"crwdns5439:0crwdne5439:0","plugin_pooltogether_pool_ended":"crwdns5441:0crwdne5441:0","plugin_pooltogether_deposit":"crwdns5443:0{{token}}crwdne5443:0","plugin_pooltogether_deposit_msg":"crwdns13175:0crwdne13175:0","plugin_pooltogether_apr":"crwdns5445:0{{apr}}crwdnd5445:0{{token}}crwdne5445:0","plugin_pooltogether_view_pool":"crwdns5447:0crwdne5447:0","plugin_pooltogether_prize":"crwdns5449:0{{period}}crwdne5449:0","plugin_pooltogether_share":"crwdns5451:0{{amount}}crwdnd5451:0{{cashTag}}crwdnd5451:0{{symbol}}crwdnd5451:0{{pool}}crwdnd5451:0{{account}}crwdne5451:0","plugin_pooltogether_share_no_official_account":"crwdns9183:0{{amount}}crwdnd9183:0{{cashTag}}crwdnd9183:0{{symbol}}crwdnd9183:0{{pool}}crwdne9183:0","plugin_pooltogether_buy":"crwdns5453:0{{symbol}}crwdne5453:0","plugin_pooltogether_enter_an_amount":"crwdns5455:0crwdne5455:0","plugin_pooltogether_insufficient_balance":"crwdns5457:0{{symbol}}crwdne5457:0","plugin_pooltogether_deposit_title":"crwdns5459:0{{token}}crwdne5459:0","plugin_pooltogether_odds_title":"crwdns5461:0crwdne5461:0","plugin_pooltogether_odds_value":"crwdns5463:0{{value}}crwdnd5463:0{{period}}crwdne5463:0","plugin_pooltogether_short_odds_value":"crwdns5465:0{{value}}crwdne5465:0","plugin_pooltogether_my_deposits":"crwdns5467:0crwdne5467:0","plugin_pooltogether_no_account_pool":"crwdns5469:0crwdne5469:0","plugin_pooltogether_missing_pool":"crwdns5471:0crwdne5471:0","plugin_pooltogether_winning_odds":"crwdns5473:0crwdne5473:0","plugin_pooltogether_in":"crwdns5475:0crwdne5475:0","plugin_pooltogether_manage":"crwdns5477:0crwdne5477:0","plugin_pooltogether_token_not_found":"crwdns5479:0crwdne5479:0","plugin_good_ghosting_loading_other_player_stats":"crwdns10253:0crwdne10253:0","plugin_good_ghosting_loading_game_stats":"crwdns10255:0crwdne10255:0","plugin_good_ghosting_game_duration":"crwdns5481:0crwdne5481:0","plugin_good_ghosting_current_round":"crwdns5483:0crwdne5483:0","plugin_good_ghosting_recurring_deposit":"crwdns5485:0crwdne5485:0","plugin_good_ghosting_round_length":"crwdns5487:0crwdne5487:0","plugin_good_ghosting_pool_apy":"crwdns5489:0crwdne5489:0","plugin_good_ghosting_pool_earnings":"crwdns5491:0crwdne5491:0","plugin_good_ghosting_extra_rewards":"crwdns5493:0crwdne5493:0","plugin_good_ghosting_total_saved":"crwdns5495:0crwdne5495:0","plugin_good_ghosting_game_launched":"crwdns5497:0crwdne5497:0","plugin_good_ghosting_join_round":"crwdns5499:0crwdne5499:0","plugin_good_ghosting_join_deadline":"crwdns5501:0crwdne5501:0","plugin_good_ghosting_deposit":"crwdns5503:0{{index}}crwdne5503:0","plugin_good_ghosting_deposit_deadline":"crwdns5505:0{{index}}crwdne5505:0","plugin_good_ghosting_waiting_round":"crwdns5507:0crwdne5507:0","plugin_good_ghosting_waiting_round_end":"crwdns5509:0crwdne5509:0","plugin_good_ghosting_withdraw":"crwdns5511:0crwdne5511:0","plugin_good_ghosting_all_players_status_winning":"crwdns5513:0crwdne5513:0","plugin_good_ghosting_all_players_status_waiting":"crwdns5515:0crwdne5515:0","plugin_good_ghosting_all_players_status_ghost":"crwdns5517:0crwdne5517:0","plugin_good_ghosting_all_players_status_dropout":"crwdns5519:0crwdne5519:0","plugin_good_ghosting_status_winning":"crwdns5521:0crwdne5521:0","plugin_good_ghosting_status_waiting":"crwdns5523:0crwdne5523:0","plugin_good_ghosting_status_ghost":"crwdns5525:0crwdne5525:0","plugin_good_ghosting_status_dropout":"crwdns5527:0crwdne5527:0","plugin_good_ghosting_status_unknown":"crwdns5529:0crwdne5529:0","plugin_good_ghosting_status":"crwdns5531:0crwdne5531:0","plugin_good_ghosting_deposits":"crwdns5533:0crwdne5533:0","plugin_good_ghosting_total_deposited":"crwdns5535:0crwdne5535:0","plugin_good_ghosting_address":"crwdns5537:0crwdne5537:0","plugin_good_ghosting_not_a_participant":"crwdns5539:0crwdne5539:0","plugin_good_ghosting_next_event":"crwdns5541:0crwdne5541:0","plugin_good_ghosting_game_end":"crwdns5543:0crwdne5543:0","plugin_good_ghosting_game_over":"crwdns5545:0crwdne5545:0","plugin_good_ghosting_participants_withdraw":"crwdns5547:0crwdne5547:0","plugin_good_ghosting_join_game":"crwdns5549:0crwdne5549:0","plugin_good_ghosting_make_deposit":"crwdns5551:0crwdne5551:0","plugin_good_ghosting_join_help_text":"crwdns5553:0{{amount}}crwdnd5553:0{{token}}crwdne5553:0","plugin_good_ghosting_deposit_help_text":"crwdns5555:0{{segmentPayment}}crwdnd5555:0{{token}}crwdne5555:0","plugin_good_ghosting_withdraw_help_text":"crwdns5557:0crwdne5557:0","plugin_good_ghosting_leave_game":"crwdns5559:0crwdne5559:0","plugin_good_ghosting_early_withdraw_info":"crwdns5561:0{{amount}}crwdnd5561:0{{token}}crwdne5561:0","plugin_good_ghosting_rules":"crwdns5563:0crwdne5563:0","plugin_good_ghosting_game_rules":"crwdns5565:0{{amount}}crwdnd5565:0{{token}}crwdnd5565:0{{roundCount}}crwdne5565:0","plugin_good_ghosting_tx_fail":"crwdns5567:0crwdne5567:0","plugin_good_ghosting_tx_timeout":"crwdns5569:0crwdne5569:0","plugin_good_ghosting_something_went_wrong":"crwdns5571:0crwdne5571:0","plugin_good_ghosting_view_on_explorer":"crwdns5573:0crwdne5573:0","plugin_good_ghosting_checking_balance":"crwdns5575:0crwdne5575:0","plugin_good_ghosting_insufficient_balance":"crwdns5577:0{{amount}}crwdnd5577:0{{token}}crwdne5577:0","plugin_good_ghosting_balance_error":"crwdns5579:0crwdne5579:0","plugin_unlockprotocol_buy_lock":"crwdns10257:0crwdne10257:0","plugin_unlockprotocol_buy_lock_alert":"crwdns10259:0crwdne10259:0","plugin_unlockprotocol_no_access":"crwdns10261:0crwdne10261:0","plugin_unlockprotocol_select_unlock_lock":"crwdns7983:0crwdne7983:0","plugin_unlockprotocol_no_lock_found":"crwdns7985:0crwdne7985:0","plugin_unlockprotocol_submit_post":"crwdns7987:0crwdne7987:0","plugin_unlockprotocol_title":"crwdns7989:0crwdne7989:0","plugin_unlockprotocol_server_error":"crwdns7991:0crwdne7991:0","plugin_furucombo_tab_pool":"crwdns9113:0crwdne9113:0","plugin_furucombo_dapp_name":"crwdns16528:0crwdne16528:0","plugin_furucombo_dapp_description":"crwdns16530:0crwdne16530:0","plugin_furucombo_tab_investments":"crwdns9115:0crwdne9115:0","plugin_furucombo_liquidity":"crwdns9117:0crwdne9117:0","plugin_furucombo_annual_percentage_yield":"crwdns9119:0crwdne9119:0","plugin_furucombo_rewards":"crwdns9121:0crwdne9121:0","plugin_furucombo_invest":"crwdns9123:0crwdne9123:0","plugin_furucombo_pool_not_found":"crwdns9125:0crwdne9125:0","plugin_furucombo_load_failed":"crwdns16630:0crwdne16630:0","plugin_furucombo_reload":"crwdns16632:0crwdne16632:0","plugin_furucombo_head_pools":"crwdns9129:0crwdne9129:0","plugin_furucombo_head_action":"crwdns9131:0crwdne9131:0","plugin_pets_dialog_title":"crwdns13145:0crwdne13145:0","plugin_pets_name":"crwdns16260:0crwdne16260:0","plugin_pets_description":"crwdns16262:0crwdne16262:0","plugin_pets_dialog_title_share":"crwdns13272:0crwdne13272:0","plugin_pets_dialog_contract":"crwdns13147:0crwdne13147:0","plugin_pets_dialog_token":"crwdns13149:0crwdne13149:0","plugin_pets_dialog_msg":"crwdns13151:0crwdne13151:0","plugin_pets_dialog_msg_optional":"crwdns13153:0crwdne13153:0","plugin_pets_dialog_btn":"crwdns13155:0crwdne13155:0","plugin_pets_dialog_btn_share":"crwdns13274:0crwdne13274:0","plugin_pets_dialog_preview":"crwdns13157:0crwdne13157:0","plugin_pets_dialog_created":"crwdns13159:0crwdne13159:0","plugin_pets_dialog_powered":"crwdns13161:0crwdne13161:0","plugin_pets_dialog_success":"crwdns13163:0crwdne13163:0","plugin_pets_dialog_fail":"crwdns13165:0crwdne13165:0","plugin_pets_dialog_check_title":"crwdns13245:0crwdne13245:0","wallet_verify_persona_sign":"crwdns16310:0crwdne16310:0","wallet_verify_has_bound":"crwdns16312:0crwdne16312:0","wallet_verify_persona_name":"crwdns16314:0{{personaName}}crwdne16314:0","wallet_verify_empty_alert":"crwdns16408:0crwdne16408:0","wallet_verify_persona_sign_intro":"crwdns16316:0crwdne16316:0","waller_verify_wallet_sign_intro":"crwdns16318:0crwdne16318:0","popups_add_wallet":"crwdns16320:0crwdne16320:0","popups_verify_persona_sign_success":"crwdns16564:0crwdne16564:0","popups_verify_persona_sign_failed":"crwdns16566:0crwdne16566:0","popups_verify_wallet_sign_success":"crwdns16568:0crwdne16568:0","popups_verify_wallet_sign_failed":"crwdns16570:0crwdne16570:0","popups_profile_photo":"crwdns16322:0crwdne16322:0","popups_public_key":"crwdns16324:0crwdne16324:0","popups_create_persona":"crwdns16402:0crwdne16402:0","popups_restore_and_login":"crwdns16404:0crwdne16404:0","popups_name":"crwdns16326:0crwdne16326:0","popups_social_account":"crwdns16328:0crwdne16328:0","popups_connected_wallets":"crwdns16330:0crwdne16330:0","popups_loading":"crwdns16332:0crwdne16332:0","popups_connect_your_web2_social_accounts":"crwdns16338:0crwdne16338:0","popups_connect_social_account":"crwdns16340:0crwdne16340:0","popups_disconnect_success":"crwdns16342:0crwdne16342:0","popups_disconnect_failed":"crwdns16344:0crwdne16344:0","popups_verify_warning_alert":"crwdns16346:0{{persona}}crwdnd16346:0{{account}}crwdne16346:0","popups_disconnect_warning_alert":"crwdns16348:0{{account}}crwdne16348:0","popups_verify_account":"crwdns16350:0crwdne16350:0","popups_disconnect_wallet_tip":"crwdns16352:0{{persona}}crwdnd16352:0{{address}}crwdne16352:0","popups_add_and_verify_wallet":"crwdns16354:0crwdne16354:0","popups_add_derive":"crwdns16356:0crwdne16356:0","popups_rename":"crwdns16358:0crwdne16358:0","popups_speed_up_transaction":"crwdns16360:0crwdne16360:0","popups_cancel_transaction":"crwdns16362:0crwdne16362:0","popups_import_the_wallet":"crwdns16364:0crwdne16364:0","popups_delete_wallet":"crwdns16366:0crwdne16366:0","popups_create_wallet":"crwdns16368:0crwdne16368:0","popups_back_up_the_wallet":"crwdns16370:0crwdne16370:0","popups_recovery_wallet":"crwdns16372:0crwdne16372:0","popups_wallet_setting":"crwdns16374:0crwdne16374:0","popups_gas_fee_settings":"crwdns16376:0crwdne16376:0","popups_assets":"crwdns16378:0crwdne16378:0","popups_send":"crwdns16380:0crwdne16380:0","popups_set_the_payment_password":"crwdns16382:0crwdne16382:0","popups_log_out":"crwdns16384:0crwdne16384:0","popups_following_permissions":"crwdns10271:0{{pluginName}}crwdnd10271:0{{pluginURL}}crwdne10271:0","popups_permissions":"crwdns10281:0crwdne10281:0","popups_sites":"crwdns10283:0crwdne10283:0","popups_mask_requests_permission":"crwdns10285:0crwdne10285:0","popups_grant":"crwdns10287:0crwdne10287:0","popups_permission_request":"crwdns10289:0crwdne10289:0","popups_permission_request_content":"crwdns10291:0crwdne10291:0","popups_permission_request_content2":"crwdns10293:0crwdne10293:0","popups_welcome":"crwdns7757:0crwdne7757:0","popups_wallet_token":"crwdns7759:0crwdne7759:0","popups_wallet_dialog_legacy_wallet_tip":"crwdns9463:0crwdne9463:0","popups_wallet_set_payment_password":"crwdns9307:0crwdne9307:0","popups_wallet_payment_password":"crwdns9309:0crwdne9309:0","popups_wallet_re_payment_password":"crwdns10749:0crwdne10749:0","popups_wallet_set_up_payment_password":"crwdns9311:0crwdne9311:0","popups_wallet_payment_password_tip":"crwdns9313:0crwdne9313:0","popups_wallet_go_back":"crwdns7761:0crwdne7761:0","popups_wallet_start_up_tip":"crwdns7763:0crwdne7763:0","popups_wallet_name_placeholder":"crwdns7777:0crwdne7777:0","popups_wallet_name_mnemonic":"crwdns10751:0crwdne10751:0","popups_wallet_name_json_file":"crwdns10753:0crwdne10753:0","popups_wallet_name_private_key":"crwdns10755:0crwdne10755:0","popups_wallet_name_mnemonic_placeholder":"crwdns10757:0crwdne10757:0","popups_wallet_name_origin_password":"crwdns10759:0crwdne10759:0","popups_wallet_tab_assets":"crwdns7781:0crwdne7781:0","popups_wallet_tab_activity":"crwdns7783:0crwdne7783:0","popups_wallet_derivation_path":"crwdns7785:0{{ path }}crwdne7785:0","popups_wallet_next":"crwdns7789:0crwdne7789:0","popups_wallet_backup_wallet":"crwdns7797:0crwdne7797:0","popups_wallet_backup_json_file":"crwdns7799:0crwdne7799:0","popups_wallet_backup_private_key":"crwdns7801:0crwdne7801:0","popups_wallet_backup_json_file_confirm_password_tip":"crwdns7803:0crwdne7803:0","popups_wallet_backup_private_key_tip":"crwdns7805:0crwdne7805:0","popups_wallet_backup_input_password":"crwdns7807:0crwdne7807:0","popups_wallet_backup_json_file_drag_tip":"crwdns7809:0crwdne7809:0","popups_wallet_backup_json_file_click_tip":"crwdns7811:0crwdne7811:0","popups_wallet_enter_your_wallet_name":"crwdns7813:0crwdne7813:0","popups_wallet_delete_tip":"crwdns7815:0crwdne7815:0","popups_wallet_confirm_payment_password":"crwdns7817:0crwdne7817:0","popups_wallet_token_buy":"crwdns7819:0crwdne7819:0","popups_wallet_token_send":"crwdns7821:0crwdne7821:0","popups_wallet_token_swap":"crwdns7823:0crwdne7823:0","popups_wallet_disconnect_failed":"crwdns16336:0crwdne16336:0","popups_wallet_view_on_explorer":"crwdns8057:0crwdne8057:0","popups_wallet_gas_fee_settings":"crwdns7837:0crwdne7837:0","popups_wallet_gas_fee_settings_description":"crwdns7839:0crwdne7839:0","popups_wallet_gas_fee_settings_low":"crwdns7841:0crwdne7841:0","popups_wallet_gas_fee_settings_medium":"crwdns7843:0crwdne7843:0","popups_wallet_gas_fee_settings_high":"crwdns7845:0crwdne7845:0","popups_wallet_gas_fee_settings_usd":"crwdns7847:0{{usd}}crwdne7847:0","popups_wallet_gas_fee_settings_gas_limit":"crwdns7855:0crwdne7855:0","popups_wallet_gas_fee_settings_max_priority_fee":"crwdns7857:0crwdne7857:0","popups_wallet_gas_fee_settings_max_fee":"crwdns7859:0crwdne7859:0","popups_wallet_gas_fee_settings_min_gas_limit_tips":"crwdns8993:0{{limit}}crwdne8993:0","popups_wallet_signature_request_title":"crwdns16386:0crwdne16386:0","popups_wallet_signature_request":"crwdns7861:0crwdne7861:0","popups_wallet_signature_request_message":"crwdns8059:0crwdne8059:0","popups_wallet_contract_interaction":"crwdns8061:0crwdne8061:0","popups_wallet_token_unlock_permission":"crwdns13035:0crwdne13035:0","popups_wallet_token_infinite_unlock":"crwdns13037:0crwdne13037:0","popups_wallet_contract_interaction_transfer":"crwdns8065:0crwdne8065:0","popups_wallet_contract_interaction_gas_fee":"crwdns8067:0crwdne8067:0","popups_wallet_contract_interaction_edit":"crwdns8069:0crwdne8069:0","popups_wallet_contract_interaction_total":"crwdns8071:0crwdne8071:0","popups_wallet_password_dont_match":"crwdns9315:0crwdne9315:0","popups_wallet_password_satisfied_requirement":"crwdns9317:0crwdne9317:0","popups_wallet_password_length_error":"crwdns9319:0crwdne9319:0","popups_wallet_unlock_wallet":"crwdns8073:0crwdne8073:0","popups_wallet_unlock_error_password":"crwdns8075:0crwdne8075:0","popups_wallet_activity_to_address":"crwdns8211:0{{address}}crwdne8211:0","popups_wallet_transfer_error_tip":"crwdns8997:0crwdne8997:0","popups_wallet_transactions_pending":"crwdns9005:0crwdne9005:0","popups_wallet_re_send":"crwdns8999:0crwdne8999:0","popups_wallet_choose_token":"crwdns9001:0crwdne9001:0","popups_wallet_gas_price":"crwdns9003:0crwdne9003:0","popups_wallet_done":"crwdns9321:0crwdne9321:0","popups_wallet_recovered":"crwdns9323:0crwdne9323:0","popups_wallet_no_transactions":"crwdns9325:0crwdne9325:0","popups_missing_parameter_caption":"crwdns7827:0crwdne7827:0","popups_persona_connect_to":"crwdns8973:0{{type}}crwdne8973:0","popups_persona_to_be_verified":"crwdns14716:0crwdne14716:0","popups_persona_disconnect":"crwdns8975:0crwdne8975:0","popups_persona_disconnect_confirmation":"crwdns14718:0crwdne14718:0","popups_persona_disconnect_confirmation_description":"crwdns14720:0crwdne14720:0","popups_persona":"crwdns14722:0crwdne14722:0","popups_twitter_id":"crwdns14724:0crwdne14724:0","popups_persona_logout":"crwdns8977:0crwdne8977:0","popups_persona_disconnect_tip":"crwdns8979:0crwdne8979:0","popups_persona_persona_name_exists":"crwdns8981:0crwdne8981:0","popups_persona_sign_request_title":"crwdns13137:0crwdne13137:0","popups_persona_sign_request_message":"crwdns13139:0crwdne13139:0","popups_password_do_not_match":"crwdns8983:0crwdne8983:0","popups_backup_password":"crwdns8985:0crwdne8985:0","popups_rename_error_tip":"crwdns8987:0{{length}}crwdne8987:0","nft_wallet_label":"crwdns9205:0crwdne9205:0","plugin_profile_no_wallets":"crwdns9327:0crwdne9327:0","plugin_vcent_last_offer_at":"crwdns10295:0crwdne10295:0","nft_input_address_label":"crwdns9193:0crwdne9193:0","nft_input_tokenid_label":"crwdns9195:0crwdne9195:0","nft_owner_hint":"crwdns9197:0crwdne9197:0","nft_add_dialog_title":"crwdns9199:0crwdne9199:0","nft_add_button_label":"crwdns9201:0crwdne9201:0","nft_add_button_label_checking":"crwdns17298:0crwdne17298:0","nft_list_title":"crwdns9203:0crwdne9203:0","nft_wallet_change":"crwdns9207:0crwdne9207:0","nft_button_add_collectible":"crwdns9209:0crwdne9209:0","nft_avatar":"crwdns9211:0crwdne9211:0","web3_tab_hint":"crwdns14544:0crwdne14544:0","plugin_artblocks_not_active":"crwdns14480:0crwdne14480:0","plugin_artblocks_completed":"crwdns14482:0crwdne14482:0","plugin_artblocks_paused":"crwdns14484:0crwdne14484:0","plugin_artblocks_collection":"crwdns14486:0crwdne14486:0","plugin_artblocks_details":"crwdns14488:0crwdne14488:0","plugin_artblocks_created_by":"crwdns14490:0crwdne14490:0","plugin_artblocks_purchase":"crwdns14492:0crwdne14492:0","plugin_artblocks_purchasing":"crwdns14494:0crwdne14494:0","plugin_artblocks_legal_text":"crwdns14496:0crwdne14496:0","plugin_artblocks_check_tos_document":"crwdns14498:0crwdne14498:0","plugin_artblocks_price_per_mint":"crwdns14500:0crwdne14500:0","plugin_artblocks_price_row":"crwdns14502:0crwdne14502:0","plugin_artblocks_minted_row":"crwdns14504:0crwdne14504:0","plugin_artblocks_license_row":"crwdns14506:0crwdne14506:0","plugin_artblocks_library_row":"crwdns14508:0crwdne14508:0","plugin_artblocks_website":"crwdns14510:0crwdne14510:0","plugin_artblocks_infos":"crwdns14512:0crwdne14512:0","plugin_artblocks_chain":"crwdns14514:0crwdne14514:0","plugin_artblocks_blockchain_row":"crwdns14516:0crwdne14516:0","plugin_artblocks_contract_row":"crwdns14518:0crwdne14518:0","plugin_artblocks_smt_wrong":"crwdns14520:0crwdne14520:0","popups_wallet_disconnect_success":"crwdns16334:0crwdne16334:0","plugin_artblocks_share":"crwdns14522:0{{name}}crwdnd14522:0{{price}}crwdnd14522:0{{symbol}}crwdne14522:0","plugin_artblocks_share_no_official_account":"crwdns14524:0{{name}}crwdnd14524:0{{price}}crwdnd14524:0{{symbol}}crwdne14524:0","plugin_tips_disconnect_introduction":"crwdns16410:0{{persona}}crwdnd16410:0{{address}}crwdne16410:0","plugin_tips_not_evm_alert":"crwdns16414:0crwdne16414:0","plugin_artblocks_description":"crwdns16264:0crwdne16264:0","plugin_artblocks_name":"crwdns16266:0crwdne16266:0","plugin_dhedge_description":"crwdns16268:0crwdne16268:0","plugin_dhedge_name":"crwdns16270:0crwdne16270:0","nft_button_set_avatar":"crwdns9191:0crwdne9191:0","plugin_good_ghosting_name":"crwdns16272:0crwdne16272:0","plugin_good_ghosting_description":"crwdns16274:0crwdne16274:0","plugin_mask_box_name":"crwdns16276:0crwdne16276:0","plugin_mask_box_description":"crwdns16278:0crwdne16278:0","plugin_transak_name":"crwdns16280:0crwdne16280:0","plugin_transak_description":"crwdns16282:0crwdne16282:0","plugin_valuables_name":"crwdns16284:0crwdne16284:0","plugin_valuables_description":"crwdns16286:0crwdne16286:0","popups_wallet_unsupported_network":"crwdns8995:0crwdne8995:0","plugin_default_title":"crwdns16634:0crwdne16634:0","plugin_provider_by":"crwdns16636:0crwdne16636:0","plugin_enables":"crwdns16638:0crwdne16638:0"}');
;// CONCATENATED MODULE: ./shared-ui/locales/zh-CN.json
const zh_CN_namespaceObject = JSON.parse('{"promote_red_packet":"🧧🧧🧧 尝试给你的好友发送代币或 NFTs 红包，分享此时的喜悦吧！ 安装 Mask.io 发送你的第一个红包。","promote_file_service":"📃📃📃 尝试在推特上使用永久的、去中心化的文件存储功能。安装 Mask.io 上传并分享你的第一份永久的去中心化存储文件，由主流去中心化存储方案提供技术支持。","database_backup":"备份数据库","database_overwrite":"使用备份覆盖数据库","database_clear":"清空数据库","debug_new_bug_issue":"新问题","debug_metadata_title":"添加新元数据或替换现有元数据","debug_metadata_put_metadata":"放入元数据","edit":"编辑","clear":"清空","more":"更多","approve":"批准","address":"地址","operation":"操作","gas_limit":"Gas 上限","gas_price":"Gas 价格","redirect_to":"跳转至","sign":"签名","reload":"重新加载","load":"加载","load_all":"加载全部","no_data":"暂无数据","tip":"小费","tags":"标签","contract":"合约","initializing":"初始化中...","redirect_alert":"如果您的浏览器没有重新跳转，请 <terms>点击这里</terms>。","typed_message_text_alert":"当前只支持输入消息文本。","badge_renderer_provided_by_plugin":"插件提供：","add_token":"添加代币","add_nft_contract_search_hint":"搜索 NFT 合约名称或地址","applications":"应用程序","application_settings":"应用设置","application_settings_tab_app_list":"应用列表","application_settings_tab_plug_in_switch":"插件开关","application_settings_tab_plug_app-list-unlisted":"未显示","application_settings_tab_plug_app-listed-placeholder":"点击应用图标将会在应用列表中隐藏。","application_settings_tab_plug_app-unlisted-placeholder":"点击应用图标将会在应用列表中显示。","additional_post_box__encrypted_post_pre":"安装 #mask_io 解密此贴文 ！ {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet_twitter_official_account":"使用 #mask_io 来认领这个红包！@{{account}} {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet":"使用 #mask_io 来认领这个红包！@{{encrypted}}","additional_post_box__encrypted_post_pre_ito_twitter_official_account":"$t(promote_ito)\\n {{encrypted}}","additional_post_box__encrypted_post_pre_ito":"$t(promote_ito) {{encrypted}}","additional_post_box__encrypted_post_pre_file_service_twitter_official_account":"$t(promote_file_service)\\n {{encrypted}}","additional_post_box__encrypted_post_pre_file_service":"$t(promote_file_service) {{encrypted}}","additional_post_box__steganography_post_pre":"此图片使用#mask_io加密。📪🔑 安装mask.io解密它。 {{random}}","auto_paste_failed_dialog_title":"手动粘贴","auto_paste_failed_dialog_content":"请复制下面的文本和图片(如果有的话)再进行发布。","auto_paste_failed_dialog_image_caption":"在新分页中打开","auto_paste_failed_snackbar":"您需要手动粘贴加密内容吗？","auto_paste_failed_snackbar_action":"教我怎么做","auto_paste_failed_snackbar_action_close":"关闭","automation_request_click_post_button":"请点击“Post”按钮打开贴文发送框。","try_again":"再试一次","ok":"好的","start":"开始","cancel":"取消","twitter_account":"realMaskNetwork","facebook_account":"masknetwork","comment_box__placeholder":"添加加密评论…","confirm":"确认","copy_text":"复制文本","loading_failed":"加载失败","copy_image":"复制图片","copy_success_of_wallet_addr":"复制钱包地址成功！","copy_success_of_text":"复制文本成功!","copy_success_of_image":"复制图片成功!","connecting":"正在连接…","collectibles_name":"收藏品","create":"创建","copied":"已复制","daily":"每日","dashboard_no_collectible_found":"未找到任何收藏品","dashboard_collectible_menu_all":"全部 ({{count}})","days":"每隔 {{days}} 天","decrypted_postbox_add_recipients":"追加收件人","decrypted_postbox_decrypting":"Mask正在解密中…","decrypted_postbox_decoding":"Mask正在解码中…","decrypted_postbox_decrypting_finding_person_key":"Mask 正在寻找作者的公钥…","decrypted_postbox_decrypting_finding_post_key":"Mask 正在获取贴文密钥以解密此贴文…","decrypted_postbox_author_mismatch":"最初发布于 {{name}}","decrypted_postbox_title":"由Mask解密：","dismiss":"忽略","delete":"删除","delete_wallet":"删除钱包","hide_token":"隐藏代币","hide_token_hint":"您将来可以通过钱包页面中的“添加代币”重新添加 <strong>{{token}}</strong> 。","done":"完成!","download":"下载","failed":"失败","buy_now":"立即购买","setup_guide_login":"请注册或登录以连接Mask Network。","setup_guide_find_username_text":"Mask需要用户名来连接您的身份。<br /> 请确保正确无误。","setup_guide_connect_auto":"连接","setup_guide_connect_failed":"失败。请再试一次。","setup_guide_verify":"验证","setup_guide_verify_should_change_profile":"账户不一致","setup_guide_verify_dismiss":"不再提醒","setup_guide_verify_checking":"正在检查","setup_guide_verify_post_not_found":"未找到任何验证贴文","setup_guide_verifying":"正在验证","setup_guide_verifying_failed":"重新验证","user_guide_tip_connected":"您已成功连接到此帐户。","user_guide_tip_need_verify_on_next_id":"Mask Network要求您发布一个验证推文来访问基于Next.ID的产品。","setup_guide_say_hello_content":"你好，Mask世界。这是我发的第一条加密信息。安装 https://mask.io 来给我发送加密贴文吧。 ","setup_guide_say_hello_follow":"关注 {{account}} 来探索Web 3.0。","setup_guide_pin_tip":"请不要忘记在您的浏览器工具栏中固定Mask Network插件以便轻松访问 web 3.0。","setup_guide_pin_tip_step_click_left":"点击 ","setup_guide_pin_tip_step_click_right":" 在您的浏览器右上方。","setup_guide_pin_tip_step_find_left":"在扩展列表中查找Mask Network并点击 ","setup_guide_pin_tip_step_find_right":" 按钮。","setup_guide_pin_tip_successfully":"固定成功。","user_guide_tip_1":"点击这里快速访问主要功能。","user_guide_tip_2":"点击这里连接您的钱包。您可以在此选择网络或更改您的钱包。","user_guide_tip_3":"点击这里快速开始。","mask_network":"Mask Network","import":"导入","no_search_result":"没有任何结果。","set_nft_profile_photo":"设置NFT头像","use_nft":"设置NFT头像","loading":"加载中","unlock":"解锁","personas":"身份","wallet":"钱包","dashboard":"控制面板","welcome_to_mask":"欢迎来到 Mask Network！","welcome_description_congrats":"恭喜，您已身处Web3世界！","welcome_description_content":"探索现在最热门的NFT, DAOs, ","welcome_description_content_second":"加密趋势在Mask Network。","browser_action_enter_dashboard":"进入控制面板","pending":"待定中...","beta_sup":"<sup>(测试版)<sup>","post_dialog__button":"加密","post_dialog__placeholder":"文本在此处…","post_dialog__title":"Mask：编辑","post_dialog_enable_paste_auto":"启用自动粘贴","post_modal_hint__button":"编辑加密贴文","hide":"隐藏","reset":"重置","editor":"编辑器","retry":"重试","go_wrong":"出现了一些问题。","search_box_placeholder":"输入要搜索的内容","select_all":"全选","select_none":"全不选","all_friends":"全部好友","select_specific_friends_dialog__title":"选择特定联系人","service_decryption_failed":"解密失败","service_username_invalid":"无效的用户名","speed_up":"加速","save":"保存","skip":"跳过","next":"下一步","try":"试一下","share":"分享","share_to":"分享到...","sharing":"分享中","transfer":"转账","export":"导出","wallet_load_retry":"加载 {{symbol}} 失败，请点击重试。","wallet_name":"钱包名称","wallet_rename":"重新命名钱包","wallet_loading_nft_contract":"正在加载 NFT 合约...","wallet_search_contract_no_result":"没有结果或合同地址不符合查询标准。","wallet_search_no_result":"没有任何结果。","wallet_confirm_with_password":"使用密码确认","wallet_airdrop_nft_unclaimed_title":"未认领的NFT Airdrop：","plugin_external_unknown_plugin":"发现新的未知Mask插件，您想要加载它们吗？","plugin_external_loader_search_holder":"查找外部插件","plugin_external_loader_search_button":"查找插件","plugin_external_loader_search_sub_title":"每个外部插件必须托管在一个 URL 上。","plugin_external_loader_example_github":"官方插件示例可在 <terms>GitHub</terms> 找到。","plugin_external_loader_intro":"Mask外部插件是Mask Network的早期功能，其允许任何人开发外部Mask插件。","plugin_external_loader_alert_title":"外部插件：实验性Mask Network功能！","plugin_external_plugin_url":"插件 URL：","plugin_external_unverified_publisher":"发布者: {{publisher}} (未验证)","plugin_external_entry_title":"🧩 加载外部插件","plugin_external_name":"外部插件","plugin_external_get_started":"让我们开始吧！","plugin_airdrop_nft_start_time":"开始时间: {{date}}","plugin_airdrop_nft_end_time":"结束时间: {{date}}","plugin_airdrop_nft_expired":"已过期","plugin_airdrop_nft_claim":"认领","plugin_airdrop_nft_claimed":"已认领","plugin_airdrop_nft_check":"查看","plugin_airdrop_nft_check_address":"请检查您的地址","plugin_airdrop_nft_none_to_claim":"你没有可认领的空投。","plugin_airdrop_nft_number_to_claim":"您有 {{count}} {{name}} 可以认领。","plugin_airdrop_nft_claim_all":"认领代币","plugin_airdrop_nft_claim_successful":"代币已成功认领","plugin_airdrop_nft_claim_failed":"代币认领失败","wallet_balance":"余额","wallet_balance_eth":"余额(ETH)","wallet_new":"新建钱包","wallet_status_button_change":"切换","wallet_status_button_copy_address":"复制地址","wallet_transfer_account":"转账账户","wallet_transfer_receiving_account":"收款账户","wallet_transfer_to_address":"发送到地址","wallet_transfer_send":"发送","wallet_transfer_1559_placeholder":"ENS或地址(0x...)","wallet_transfer_title":"转账","wallet_transfer_error_amount_absence":"输入数额","wallet_transfer_error_address_absence":"输入收款人地址","wallet_transfer_error_same_address_with_current_account":"此接收地址与发送地址相同，请重新检查。","wallet_transfer_error_is_contract_address":"此接收地址为合约地址，请重新检查。","wallet_transfer_error_invalid_address":"收款人地址无效","wallet_transfer_error_no_address_has_been_set_name":"接收人地址无效。","wallet_transfer_error_no_support_ens":"网络不支持 ENS。","wallet_transfer_error_insufficient_balance":"{{symbol}} 余额不足","wallet_transfer_error_gas_price_absence":"输入Gas费","wallet_transfer_error_gas_limit_absence":"输入Gas Limit","wallet_transfer_error_max_fee_absence":"请输入Max fee","wallet_transfer_error_max_priority_fee_absence":"请输入Max priority fee","wallet_transfer_error_max_fee_too_low":"Max fee 在当前网络环境下过低","wallet_transfer_error_max_fee_too_high":"Max fee 高于必要值","wallet_transfer_error_max_priority_gas_fee_positive":"Max priority fee必须大于 0 GWEI","wallet_transfer_error_max_priority_gas_fee_too_low":"Max pirority fee 在当前网络环境下过低","wallet_transfer_error_max_priority_gas_fee_too_high":"Max priority fee过高。您或许支付了超过需要的费用。","wallet_transfer_error_max_priority_gas_fee_imbalance":"Max fee 不能低于 Max priority fee","wallet_transfer_gwei":"GWEI","wallet_transfer_between_my_accounts":"我的账户之间转账","wallet_risk_warning_dialog_title":"风险提示","wallet_risk_warning_no_select_wallet":"尚未选择钱包。","wallet_risk_warning_content":"亲爱的用户，<br/><br/>当再使用Mask Network中任何与钱包相关的插件时，请确认以下使用风险：<br/><br/>Mask Network提供非商业性免费服务。 该插件由社区成员和其他优秀的第三方去中心化应用团队提供。 由于去中心化网络的自由性和其他不确定的风险因素， 用户被要求适当地保护他们的敏感信息，例如钱包助记词和私钥。 请谨慎进行任何区块链合同交互。任何第三方去中心化应用(插件)造成的风险都由第三方去中心化应用自身承担。 点击确认按钮意味着您同意承担上述风险。","weekly":"每周","wallet_risk_confirm_confirming":"确认中","wallet_risk_confirm_failed":"确认失败","relative_time_days_ago":"{{days}} 天前","relative_time_hours_ago":"{{hours}} 小时前","relative_time_minutes_ago":"{{minutes}} 分钟前","relative_time_months_ago":"{{months}} 个月前","relative_time_seconds_ago":"{{seconds}} 秒前","relative_time_years_ago":"{{years}} 年前","plugin_wallet_snackbar_wait_for_confirming":"请在您的钱包中确认这笔交易","plugin_wallet_snackbar_hash":"交易已提交","plugin_wallet_snackbar_confirmed":"交易已确认","plugin_wallet_snackbar_success":"交易成功","plugin_wallet_snackbar_failed":"交易失败","plugin_wallet_snackbar_swap_successful":"已成功兑换代币","plugin_wallet_snackbar_swap_token":"兑换代币","plugin_wallet_connect_with":"连接到","plugin_wallet_connect_with_retry":"再试一次","plugin_wallet_connected_with":"连接到","plugin_wallet_metamask_error_already_request":"您已打开弹出窗口，请确认。","plugin_wallet_connect_tip":"请确保您的 {{providerName}} 钱包是由官方 <providerLink>{{providerShortenLink}}</providerLink> 提供的。","plugin_wallet_select_a_nft_contract":"选择 NFT 合约","plugin_wallet_select_a_nft_owner":"选择 NFT 合约持有者","plugin_wallet_select_a_nft_operator":"选择 NFT 合约","plugin_wallet_fail_to_load_nft_contract":"加载 NFT 合约失败。请点击重试。","plugin_wallet_nft_approving_all":"正在解锁 {{symbol}}...","plugin_wallet_approve_all_nft":"解锁 {{symbol}}","plugin_wallet_approve_all_nft_successfully":"解锁 {{symbol}} 成功","plugin_wallet_connect_a_wallet":"连接钱包","plugin_wallet_confirm_risk_warning":"确认风险提示","plugin_wallet_no_gas_fee":"不够Gas费用","plugin_wallet_update_gas_fee":"Gas费用更新中…","plugin_wallet_invalid_network":"网络无效","plugin_wallet_select_a_wallet":"选择一个钱包","plugin_wallet_transaction":"交易记录","plugin_wallet_transaction_wait_for_confirmation":"等待确认中…","plugin_wallet_transaction_submitted":"您的交易已提交！","plugin_wallet_transaction_confirmed":"您的交易已确认！","plugin_wallet_transaction_reverted":"您的交易已被回退！","plugin_wallet_transaction_rejected":"您的交易已拒绝。","plugin_wallet_transaction_underpriced":"交易价格过低。","plugin_wallet_transaction_server_error":"由于JSON-RPC服务器内部出错，交易失败。","plugin_wallet_view_on_explorer":"区块链浏览器查看","plugin_ito_placeholder_when_token_unselected":"请先选择一个代币","plugin_wallet_wrong_network_tip":"请连接到一个适当的网络。","plugin_wallet_on_create":"创建钱包","plugin_wallet_on_connect":"连接钱包","plugin_wallet_wrong_network":"网络错误","plugin_wallet_pending_transactions":"{{count}} 个待定","plugin_wallet_import_wallet":"导入钱包","plugin_wallet_select_provider_dialog_title":"连接钱包","plugin_wallet_qr_code_with_wallet_connect":"使用WalletConnect兼容的钱包扫描二维码","plugin_wallet_token_unlock":"精确解锁","plugin_wallet_token_infinite_unlock":"无限解锁","plugin_wallet_connect_dialog_title":"WalletConnect","plugin_wallet_connect_safari_metamask":"连接到 MetaMask","plugin_wallet_connect_safari_rainbow":"连接到 Rainbow","plugin_wallet_connect_safari_trust":"连接到 Trust","plugin_wallet_connect_safari_im_token":"连接到 imToken","plugin_wallet_on_connect_in_firefox":"连接","plugin_wallet_return_mobile_wallet_options":"返回到移动钱包选项","plugin_wallet_view_qr_code":"查看二维码","plugin_wallet_switch_network":"切换到 {{network}} 网络","plugin_wallet_switch_network_under_going":"正在切换到 {{network}} 网络…","plugin_wallet_not_available_on":"在 {{network}} 网络上不可用。","plugin_wallet_connect_wallet":"连接钱包","plugin_wallet_name_placeholder":"输入1-12 个字符","plugin_wallet_cancel_sign":"签名已取消。","plugin_red_packet_create":"创建一个红包","plugin_red_packet_create_with_token":"使用 {{symbol}} 创建红包","plugin_nft_red_packet_create":"创建一个NFT红包","plugin_red_packet_nft_account_name":"钱包账户","plugin_gitcoin_select_a_token":"选择代币","plugin_gitcoin_insufficient_balance":"{{symbol}} 余额不足","plugin_trader_fail_to_load":"无法加载趋势信息自  ","plugin_trader_lbp_pool_in_balancer":"Balancer 的 LBP 池","plugin_trader_tutorial":"教程","plugin_trader_what_is_lbp":"什么是LBP？","plugin_trader_lbp_intro":"蓝色实线表示在{{symbol}}\'s LBP上的{{symbol}} 的历史价格。如果没有人购买，价格可能会继续下降。请理性进行投资决策。","plugin_trader_no_pools_found":"未找到池。","plugin_trader_safety_agree":"我已知悉","plugin_trader_view_on_etherscan":"在 Etherscan 上查看","plugin_trader_safety_alert_title":"代币安全警告","plugin_trader_safety_alert":"任何人都可以在Etherum上创建和命名任何ERC20代币， 包括创建假冒的现有代币和假冒是已声称没有发行代币的项目方发行的代币。 与以太坊相似，这个网站自动跟踪所有ERC20代币，不受密码完整性的影响。 请在与任何ERC20 令牌交互之前进行您自己的研究。","plugin_trader_total_supply":"总供应量","plugin_trader_circulating_supply":"流通总量","plugin_trader_volume_24":"交易量 (24h)","plugin_trader_market_cap":"市值","plugin_trader_data_source":"数据源","plugin_trader_price_updated":"价格已更新","plugin_savings":"储蓄","plugin_savings_wallet":"钱包","plugin_savings_operation":"操作","plugin_savings_amount":"数额","plugin_savings_deposit":"存入","plugin_savings_withdraw":"取出","plugin_savings_process_deposit":"存入操作处理中","plugin_savings_process_withdraw":"取出操作处理中","plugin_trader_swap":"兑换","plugin_trader_wrap":"包装","plugin_trader_unwrap":"去包装","plugin_trader_buy":"买入","plugin_trader_no_data":"暂无数据","plugin_trader_tab_market":"概况","plugin_trader_tab_price":"价格","plugin_trader_tab_exchange":"交易","plugin_trader_tab_swap":"兑换 🔥","plugin_trader_table_exchange":"交易所","plugin_trader_table_pair":"交易对","plugin_trader_table_price":"价格","plugin_trader_table_volume":"交易量 (24h)","plugin_trader_table_updated":"更新时间","plugin_trader_error_amount_absence":"输入数额","plugin_trader_error_insufficient_balance":"{{symbol}} 余额不足","plugin_trader_error_insufficient_lp":"该交易的流动性不足","plugin_trade_error_input_amount_less_minimum_amount":"提交兑换的数额低于最低数额","plugin_trader_slippage_tolerance":"滑点容许值","plugin_trader_swap_from":"从","plugin_trader_swap_to":"至(预计)","plugin_trader_gas_fee":"Gas 费用","plugin_trader_unlock_symbol":"解锁 {{symbol}}","plugin_trader_unlock_tips":"您必须授予 {{provider}} 智能合约使用您的 {{symbol}} 的权限。每个代币只需要授权一次。","plugin_trader_swap_amount_symbol":"兑换 {{amount}} {{symbol}} ","plugin_trader_confirm_from":"从","plugin_trader_confirm_to":"至","plugin_trader_confirm_max_price_slippage":"最大价格滑点","plugin_trader_confirm_minimum_received":"收到的最低数额","plugin_trader_confirm_tips":"最大价格滑点设置过低可能会导致因价格波动而交易失败","plugin_trader_price_impact_warning_tips":"最大价格滑点设置过高可能会导致最低返回数额低于期望数额。","plugin_trader_confirm_swap":"确认兑换","plugin_trader_accept":"同意","plugin_trader_price_impact":"价格影响","plugin_trader_price_image_value":"价格影响({{percent}})","plugin_trader_slippage_warning":"在当前滑点设置下，您可能会少接收10%的期待值。","plugin_trader_confirm_price_impact":"确认价格影响 {{percent}}","plugin_trader_max_slippage":"最大滑点","plugin_trader_gas_setting_instant":"即时","plugin_trader_gas_setting_high":"高速","plugin_trader_gas_setting_medium":"中等","plugin_trader_gas_setting_standard":"标准","plugin_trader_gas_setting_fast":"快速","plugin_trader_gas_setting_custom":"自定义","plugin_trader_tx_cost_usd":"(~{{usd}} 美元)","plugin_trader_gas_option":"{{option}} ({{value}}) Gwei","plugin_trader_no_enough_liquidity":"流动性不足","plugin_trader_no_trade":"请选择一个交易","plugin_poll_display_name":"插件：投票","plugin_poll_question_hint":"询问...","plugin_poll_options_hint":"选项","plugin_poll_length":"投票时长","plugin_poll_length_days":"天","plugin_poll_length_hours":"小时","plugin_poll_length_minutes":"分钟","plugin_poll_length_unknown":"未知","plugin_poll_create_new":"创建新的","plugin_poll_send_poll":"发送投票","plugin_poll_status_voting":"正在投票中","plugin_poll_status_voted":"已投票。","plugin_poll_deadline":"距离投票结束还有{{time}}","plugin_ito_empty_token":"无需解锁此ITO上的任何代币。","plugin_ito_locked":"ITO 已锁定","plugin_ito_share":"分享","plugin_ito_enter":"参加","plugin_ito_dialog_swap_title":"兑换 {{token}}","plugin_ito_dialog_swap_reminder_title":"兑换提醒","plugin_ito_dialog_swap_unlock_title":"提前解锁代币","plugin_ito_dialog_swap_share_title":"分享","plugin_ito_dialog_swap_exchange":"以兑换","plugin_ito_dialog_swap_panel_title":"兑换","plugin_ito_dialog_swap_exceed_wallet_limit":"超过单个钱包限制","plugin_ito_swap_ration_label":"兑换率","plugin_ito_swap_only_once_remind":"每个钱包只能参与一次.","plugin_ito_swap_title":"{{amount}} {{token}} / {{swap}} ","plugin_ito_swap_end_date":"在 {{date}} 后结束。","plugin_ito_dialog_claim_reminder_agree":"我理解","plugin_ito_dialog_claim_reminder_text1":"任何人都可以在 {{networkType}} 上创建自命名名称的代币。 包括创建虚假版本的已有代币，以及没有任何实际项目的代币。","plugin_ito_dialog_claim_reminder_text2":"此接口可以通过代币地址加载任意代币。与任意代币进行交互前，请格外小心并对此进行研究确认。","plugin_ito_dialog_claim_reminder_text3":"如果您从这此处购买一些代币，您可能无法再将其售出。","plugin_ito_dialog_claim_reminder_text4":"该等权利并未在司法管辖区域内全部或部分，直接或间接提供出售，向其提供或出售该等权利将是非法的。","plugin_ito_expired":"已过期","plugin_ito_create_new":"新建","plugin_ito_claim_all_status_unclaimed":"未认领","plugin_ito_claim_all_status_locked":"被锁定","plugin_ito_claim_all_unlock_time":"解锁时间: {{time}}","plugin_ito_claim_all_dialog_title":"认领您的代币","plugin_ito_advanced":"高级选项","plugin_ito_advanced_ip_region":"IP 地区限制","plugin_ito_advanced_delay_unlocking":"延迟解锁代币","plugin_ito_advanced_contract":"插件合约","plugin_ito_select_existing":"历史","plugin_ito_display_name":"插件：ITO","plugin_ito_sell_token":"代币","plugin_ito_sell_price":"价格","plugin_ito_sell_total_amount":"输入","plugin_ito_allocation_per_wallet":"兑换限制 {{limit}} {{token}}","plugin_ito_wait_unlock_time":"在 {{unlockTime}} 后认领。","plugin_ito_claim":"认领","plugin_ito_claiming":"认领中...","plugin_ito_claim_all":"认领全部","plugin_ito_qualification_start_time":"资格认证开始时间：","plugin_ito_error_qualification_start_time":"无效：资格认证开始时间应该早于ITO结束时间","plugin_ito_error_invalid_qualification":"无效的资格认证地址","plugin_ito_unlock_time_cert":"ITO Mask 解锁时间为 {{date}}。","plugin_ito_unlock_time":"解锁时间","plugin_ito_total_claimable_count":"总计: ","plugin_ito_qualification_label":"插件合约","plugin_ito_message_label":"标题","plugin_ito_region_label":"IP 地区选择","plugin_ito_region_confirm_label":"IP 地区","plugin_ito_region_list":"{{ select }} / {{ all }} 地区","plugin_ito_region_all":"全部地区","plugin_ito_region_search":"输入要搜索的地区名称","plugin_ito_region_ban":"这个池被禁止对您所在区域开放","plugin_ito_next":"下一步","plugin_ito_back":"返回","plugin_ito_transaction_dialog_summary_with_no_token":"创建一个ITO。","plugin_ito_transaction_dialog_summary":"使用 {{amount}} {{symbol}} 创建一个 ITO","plugin_ito_swap":"兑换","plugin_ito_send_tip":"您可以在历史标签页中找到您过去的 ITO。","plugin_ito_send_text":"发送 {{total}} {{symbol}}","plugin_ito_error_enter_amount":"输入数额","plugin_ito_error_select_token":"选择代币","plugin_ito_error_enter_amount_and_token":"输入数额并选择一个代币","plugin_ito_error_allocation_absence":"请输入兑换限制","plugin_ito_error_allocation_invalid":"无效的数额","plugin_ito_error_exchange_time":"无效：开始时间不能晚于结束时间","plugin_ito_error_unlock_time":"无效：结束时间不能晚于解锁时间","plugin_ito_error_balance":"{{symbol}} 余额不足","plugin_ito_list_start_date":"开始时间 {{date}}","plugin_ito_list_end_date":"结束时间 {{date}}","plugin_ito_list_sold_total":"已兑换：","plugin_ito_list_total":"总共：","plugin_ito_list_table_type":"类型","plugin_ito_list_table_price":"兑换率","plugin_ito_no_claimable_token":"您的钱包地址没有任何可以认领的代币。","plugin_ito_list_table_sold":"已兑换","plugin_ito_list_table_got":"余额","plugin_ito_list_button_send":"发送","plugin_ito_withdraw":"提取","plugin_ito_withdrawn":"已提取","plugin_ito_your_swapped_amount":"你兑换了 {{amount}} {{symbol}}","plugin_ito_your_claimed_amount":"你认领了 {{amount}} {{symbol}}","plugin_ito_your_refund_amount":"退回 {{amount}} {{symbol}}.","plugin_ito_unlock_in_advance":"提前解锁","plugin_ito_swapped_status":"{{remain}} / {{total}} {{token}} 已兑换","plugin_ito_qualification_loading":"资格认证中…","plugin_ito_qualification_failed":"钱包地址不在列表内。","plugin_ito_congratulations":"祝贺您！","plugin_ito_out_of_stock_hit":"祝您下次好运","plugin_ito_claim_success_share":"我刚刚用 @{{account}} 来交换${{symbol}}，参加了 @{{user}}的 #ITO。 安装mask.io并开始您的初次推特优惠！ \\n {{link}}","plugin_ito_claim_success_share_no_official_account":"我刚刚交换了${{symbol}} 并参加了 @{{user}}的 #ITO。 安装mask.io并开始您的初次推特优惠！ \\n {{link}}","plugin_ito_claim_foreshow_share":"{{symbol}}({{name}}) 正在发布一个新的 #ITO。快来加入吧！关注 @{{account}} (mask.io) 来查找更多活动！ \\n {{link}}","plugin_ito_claim_foreshow_share_no_official_account":"{{symbol}}({{name}}) 正在发布一个新的 #ITO。快来加入吧！ \\n {{link}}","plugin_ito_password":"密码：{{password}}","plugin_ito_status_no_start":"尚未开始","plugin_ito_status_ongoing":"进行中","plugin_ito_status_out_of_stock":"售罄","plugin_ito_loading":"ITO 加载中...","plugin_ito_amount_unlocked":"已解锁 {{amount}} {{symbol}}","plugin_ito_amount_unlocked_infinity":"解锁无限的 {{symbol}}","plugin_ito_unlocking_symbol":"正在解锁 {{symbol}}","plugin_ito_continue":"继续","plugin_ito_view_on_explorer":"在区块链浏览器查看","plugin_ito_unlock_tip":"允许合约 <contractLink>{{address}}</contractLink> 在新的 ITO 回合开始时使用您的 {{symbol}} 代币。","plugin_collectible_you":"您","plugin_collectible_done":"完成","plugin_collectible_retry":"重试","plugin_collectible_get_more_token":"获取更多 {{token}}","plugin_collectible_sell":"出售","plugin_collectible_checkout":"付款","plugin_collectible_place_bid":"出价","plugin_collectible_buy_now":"立即购买","plugin_collectible_make_offer":"发出报价","plugin_collectible_post_listing":"上架","plugin_collectible_description":"当前价格是 <strong>{{price}} {{symbol}}</strong>","plugin_collectible_article":"文章","plugin_collectible_overview":"简介","plugin_collectible_details":"详情","plugin_collectible_offers":"报价","plugin_collectible_listing":"上架列表","plugin_collectible_history":"历史","plugin_collectible_event":"事项","plugin_collectible_unit_price":"单价","plugin_collectible_price":"价格","plugin_collectible_from":"从","plugin_collectible_to":"至","plugin_collectible_date":"日期","plugin_collectible_quantity":"数量","plugin_collectible_expiration":"有效期至","plugin_collectible_no_offers":"没有任何报价","plugin_collectible_no_listings":"没有任何上架历史","plugin_collectible_base":"底价","plugin_collectible_properties":"属性","plugin_collectible_about":"关于","plugin_collectible_chain_info":"区块链信息","plugin_collectible_contract_address":"合约地址","plugin_collectible_token_id":"Token ID","plugin_collectible_block_chain":"区块链","plugin_collectible_create_by":"创建者","plugin_collectible_owned_by":"持有者","plugin_collectible_view_on":"查看于","plugin_collectible_no_history":"无历史记录","plugin_collectible_ensure_unreviewed_item":"请确保未经审核的收藏品","plugin_collectible_check_tos_document":"请查阅 ToS 文档","plugin_collectible_not_been_reviewed_by_opensea":"此收藏品尚未经 OpenSea 审查。","plugin_collectible_reviewed_tips":"你需要格外谨慎。 任何人都可以在区块链上创建一个带有任何名称的收藏品。 包括现有收藏品的假版本。 请在与这个收藏品交互时格外小心并进行研究，以确保它是您想要的收藏品。","plugin_collectible_total":"总共","plugin_collectible_subtotal":"小计","plugin_collectible_item":"收藏品","plugin_collectible_approved_tips":"通过勾选此框，我承认此收藏品未经过OpenSeare审核\\n                                                或批准。","plugin_collectible_agree_terms":"通过勾选此框，我同意OpenSea的 <terms>服务条款</terms>。","plugin_collectible_convert_eth":"兑换 ETH","plugin_collectible_sale_end":"出售结束于 {{time}}","plugin_collectible_set_initial_price":"设置初始价格。","plugin_collectible_ending_price_tip":"在您转让或取消之前将会一直出售。","plugin_collectible_starting_price":"初始价格","plugin_collectible_ending_price":"结束价格","plugin_collectible_ending_price_less_than_staring":"必须小于或等于起始价格。价格将线性上升到此金额，直到失效日期为止。","plugin_collectible_expiration_date":"失效日期","plugin_collectible_schedule_date":"预定日期","plugin_collectible_auto_cancel_tip":"此时您上架的收藏品将自动结束。无需取消！","plugin_collectible_schedule_future_date":"预定一个未来日期。","plugin_collectible_buyer_address":"买家地址","plugin_collectible_buyer_address_placeholder":"请输入买家地址。","plugin_collectible_buyer_address_helper_text":"只允许买家购买。","plugin_collectible_include_ending_price":"包含结束价格","plugin_collectible_include_ending_price_helper":"添加一个结束价格将允许该上架收藏品过期，或允许降价，在找到买家为止。","plugin_collectible_schedule_for_a_future_time":"预定一个未来的日期","plugin_collectible_schedule_for_a_future_time_helper":"您可以将此上架收藏品预约为只能在未来的某个日期购买。","plugin_collectible_privacy":"隐私政策","plugin_collectible_privacy_helper":"您可以公开出售您上架的收藏品，或者指定一个买家地址允许购买您上架的收藏品。","plugin_collectible_enter_a_price":"请输入价格","plugin_collectible_insufficient_balance":"余额不足","plugin_collectible_invalid_schedule_date":"无效的预定日期","plugin_collectible_invalid_ending_price":"无效的结束价格","plugin_collectible_invalid_expiration_date":"无效的失效日期","plugin_collectible_invalid_buyer_address":"无效的买家地址","plugin_collectible_set_price":"设置价格","plugin_collectible_highest_bid":"最高竞价","plugin_collectible_minimum_bid":"最低出价","plugin_collectible_set_starting_bid_price":"设置您的起始竞价价格。","plugin_collectible_reserve_price":"底标价格","plugin_collectible_reserve_price_helper":"通过设置底标价格来建立一个隐形的限制。底标价格必须大于或等于起始价格。","plugin_collectible_auction_auto_end":"您的拍卖将在这个时候自动结束，最高出价者将将赢得拍卖。无需取消！","plugin_collectible_enter_minimum_bid":"输入最低出价","plugin_collectible_enter_reserve_price":"输入底标价格","plugin_collectible_invalid_reserve_price":"无效底标价格","plugin_collectible_place_a_bid":"出价","plugin_collectible_make_an_offer":"发出报价","plugin_collectible_legal_text":"通过勾选此框，我同意OpenSea的 <terms>服务条款</terms>。","plugin_cryptoartai_description_title":"描述","plugin_cryptoartai_edition":"版本：","plugin_cryptoartai_activity_type":"类型","plugin_cryptoartai_status":"状态","plugin_cryptoartai_time":"时间","plugin_cryptoartai_price":"价格","plugin_cryptoartai_latest_bid":"最新的标价","plugin_cryptoartai_buy":"购买","plugin_cryptoartai_buy_now":"立即购买","plugin_cryptoartai_current_balance":"当前余额","plugin_cryptoartai_current_highest_offer":"当前最高报价为 ","plugin_cryptoartai_bid_least":"您必须至少出价 ","plugin_snapshot_info_title":"相关信息","plugin_snapshot_info_strategy":"策略","plugin_snapshot_info_author":"作者","plugin_snapshot_info_ipfs":"IPFS","plugin_snapshot_info_start":"开始日期","plugin_snapshot_info_end":"结束日期","plugin_snapshot_info_snapshot":"Snapshot","plugin_snapshot_result_title":"结果","plugin_snapshot_votes_title":"投票","plugin_snapshot_no_power":"没有投票权","plugin_snapshot_vote_success":"投票成功！","plugin_snapshot_vote":"投票","plugin_snapshot_vote_choice":"选项","plugin_snapshot_vote_power":"您的投票权","plugin_snapshot_vote_title":"投出您的票","plugin_snapshot_vote_confirm_dialog_title":"确认投票","plugin_snapshot_vote_confirm_dialog_choice":"您确定要投票给 \\"{{ choiceText }}\\" 吗？","plugin_snapshot_vote_confirm_dialog_warning":"此操作不可撤销。","plugin_snapshot_current_result_title":"当前结果","plugin_snapshot_download_report":"下载报告","plugin_find_truman_status_puzzle":"故事解谜","plugin_find_truman_status_poll":"情节发展投票","plugin_find_truman_status_result":"阶段性结果","plugin_find_truman_status_puzzle_result":"揭晓答案","plugin_find_truman_status_poll_result":"情节发展确认","plugin_find_truman_puzzle_to_be_revealed":"谜题等待揭晓。","plugin_find_truman_puzzles_to_be_revealed":"谜题等待揭晓。","plugin_find_truman_poll_to_be_revealed":"投票仍在进行。","plugin_find_truman_polls_to_be_revealed":"投票仍在进行","plugin_find_truman_puzzle_underway":"这个谜题尚未被揭晓。","plugin_find_truman_puzzle_rate":"准确度： ","plugin_find_truman_voting_underway":"此投票仍在进行。","plugin_find_truman_voting_rate":"点击率： ","plugin_find_truman_submit_failed":"提交失败。","plugin_find_truman_vote":"投票","plugin_find_truman_votes":"投票","plugin_find_truman_selected":"已选择","plugin_find_truman_unselect":"选择","plugin_find_truman_answer":"答案","plugin_find_truman_result":"结果","plugin_find_truman_buy":"购买","plugin_find_truman_decrypted_by":"由FindTruman解密：","plugin_find_truman_insufficient_nft":"本次投票需要以下指定的NFT。","plugin_find_truman_buy_nft_tip":"至少需要此 NFT的{{count}} 个副本。","plugin_find_truman_connect_wallet_tip":"请连接一个钱包。","plugin_find_truman_no_participation_tip":"您当前还没有参与任何投票。","plugin_dhedge_managed_by":"由 <manager>{{managerName}}</manager> 管理","plugin_dhedge_manager_share":"持有 <share>{{managerShare}}%</share>份额的池子","plugin_dhedge_manager_share_more_than_50":"持有超过50% 的池子","plugin_dhedge_value_managed":"管理的金额","plugin_dhedge_lifetime_return":"终生回报","plugin_dhedge_risk_factor":"风险因子","plugin_dhedge_tab_stats":"统计信息","plugin_dhedge_tab_chart":"图表","plugin_dhedge_strategy":"策略","plugin_dhedge_see_less":"显示更少","plugin_dhedge_see_more":"显示更多","plugin_dhedge_no_data":"暂无数据","plugin_dhedge_fetch_error":"无法获取数据，请重试！","plugin_dhedge_loading_chart":"加载中","plugin_dhedge_invest":"投资","plugin_dhedge_buy_token":"获得 {{symbol}}","plugin_dhedge_enter_an_amount":"输入数额","plugin_dhedge_insufficient_balance":"{{symbol}} 余额不足","plugin_dhedge_pool_not_found":"无效的池子地址。","plugin_dhedge_smt_wrong":"发生了一些错误！","plugin_pooltogether_tab_pools":"池子","plugin_pooltogether_tab_account":"账号","plugin_pooltogether_no_pool":"此网络上没有池。","plugin_pooltogether_pool_ended":"已获奖励","plugin_pooltogether_deposit":"存入 {{token}}","plugin_pooltogether_apr":"在 {{token}} 中获得 {{apr}} % 的 APR","plugin_pooltogether_view_pool":"查看池","plugin_pooltogether_prize":"{{period}} 奖励","plugin_pooltogether_share":"我刚刚把 {{amount}} {{cashTag}}{{symbol}} 存入 {{pool}}，我能在本周赢得奖金吗？\\n跟随@PoolTogether_ 和 @{{account}} (mask.io)一起参与吧。\\n#pooltogether #mask_io","plugin_pooltogether_share_no_official_account":"我刚刚把 {{amount}} {{cashTag}}{{symbol}} 存入 {{pool}}，我能在本周赢得奖金吗？","plugin_pooltogether_buy":"获得 {{symbol}}","plugin_pooltogether_enter_an_amount":"输入数额","plugin_pooltogether_insufficient_balance":"{{symbol}} 余额不足","plugin_pooltogether_deposit_title":"存入 {{token}} 以获胜。","plugin_pooltogether_odds_title":"新的奖励几率：","plugin_pooltogether_odds_value":"{{value}} {{period}} 中的 1 个!","plugin_pooltogether_short_odds_value":"{{value}} 中的 1 个!","plugin_pooltogether_my_deposits":"存款总数","plugin_pooltogether_no_account_pool":"您在此网络中没有任何池","plugin_pooltogether_missing_pool":"缺少一些存款？请检查完整的列表：\\n","plugin_pooltogether_winning_odds":"奖励几率：","plugin_pooltogether_manage":"管理","plugin_pooltogether_token_not_found":"未找到代币！","plugin_good_ghosting_loading_other_player_stats":"正在加载其他玩家的统计数据","plugin_good_ghosting_loading_game_stats":"正在加载游戏统计数据","plugin_good_ghosting_game_duration":"游戏时长","plugin_good_ghosting_current_round":"当前轮数","plugin_good_ghosting_recurring_deposit":"每轮存款量","plugin_good_ghosting_round_length":"每轮时长","plugin_good_ghosting_pool_apy":"池的年化收益率","plugin_good_ghosting_pool_earnings":"池中收益","plugin_good_ghosting_extra_rewards":"额外奖励","plugin_good_ghosting_game_launched":"游戏已开始","plugin_good_ghosting_join_round":"加入此轮","plugin_good_ghosting_join_deadline":"加入截止时间","plugin_good_ghosting_deposit":"存入 {{index}}","plugin_good_ghosting_deposit_deadline":"存款截止时间 {{index}}","plugin_good_ghosting_game_over":"游戏结束","plugin_good_ghosting_join_game":"加入游戏","plugin_good_ghosting_early_withdraw_info":"如果您想要退出正在进行的游戏，您可能会被收取一笔小额费用{{amount}} {{token}}， 以补偿储蓄池中剩余的玩家。","plugin_good_ghosting_rules":"规则","plugin_good_ghosting_something_went_wrong":"出现错误。请重试。","plugin_good_ghosting_view_on_explorer":"在浏览器查看","plugin_good_ghosting_checking_balance":"查询账户余额...","plugin_good_ghosting_insufficient_balance":"您的钱包中需要至少有{{amount}} {{token}} 才能执行此操作。","plugin_good_ghosting_balance_error":"查询余额失败。点击重试。","plugin_unlockprotocol_no_access":"您没有访问此内容的权限","plugin_unlockprotocol_no_lock_found":"未找到任何锁。请在 <dashboard>创建主面板</dashboard> 创建自己的锁。","plugin_unlockprotocol_server_error":"服务器出现错误，请稍后重试。","popups_following_permissions":"插件 ({{pluginName}}) (托管于{{pluginURL}}) 将请求以下权限：","popups_permissions":"许可权限","popups_mask_requests_permission":"Mask Network需要以下权限","popups_permission_request":"请求授权","popups_permission_request_content":"为继续后续操作，Mask Network需要获取权限以访问以下URL：","popups_welcome":"欢迎","popups_wallet_token":"代币","popups_wallet_dialog_legacy_wallet_tip":"已检测到旧钱包，请点击确认以恢复所有钱包。","popups_wallet_set_payment_password":"设置支付密码","popups_wallet_payment_password":"支付密码","popups_wallet_re_payment_password":"再次输入支付密码","popups_wallet_set_up_payment_password":"设置支付密码","popups_wallet_payment_password_tip":"支付密码必须是数字、大小写字母和特殊字符中的2个类别的组合，长度为 8-20 个字符。","popups_wallet_go_back":"返回","popups_wallet_start_up_tip":"请连接到您的钱包，可选择创建一个新钱包或使用助记词恢复一个旧钱包。","popups_wallet_name_placeholder":"输入1-12 个字符","popups_wallet_name_mnemonic":"助记词","popups_wallet_name_json_file":"Json文件","popups_wallet_name_private_key":"私钥","popups_wallet_name_mnemonic_placeholder":"请输入以空格分隔的助记词","popups_wallet_name_origin_password":"原密码","popups_wallet_tab_assets":"资产","popups_wallet_tab_activity":"交易动态","popups_wallet_derivation_path":"派生路径 ({{ path }})","popups_wallet_next":"下一步","popups_wallet_backup_wallet":"备份钱包","popups_wallet_backup_json_file":"JSON 文件","popups_wallet_backup_private_key":"私钥","popups_wallet_backup_json_file_confirm_password_tip":"此文件已使用您当前的支付密码加密保存。 导入钱包时请使用当前支付密码解密此文件。","popups_wallet_backup_private_key_tip":"请不要向任何人暴露您的私钥。私钥不需要解密即可在任何支持EVM兼容的链上钱包中使用。","popups_wallet_backup_input_password":"输入您的密码","popups_wallet_backup_json_file_drag_tip":"将您的文件拖动到这里…","popups_wallet_backup_json_file_click_tip":"点击选择或拖放文件到这里","popups_wallet_enter_your_wallet_name":"输入钱包名称","popups_wallet_delete_tip":"您确定要删除这个钱包吗？如果没有助记词或私钥，您的钱包将无法恢复。","popups_wallet_confirm_payment_password":"使用支付密码确认","popups_wallet_token_buy":"购买","popups_wallet_token_send":"发送","popups_wallet_token_swap":"兑换","popups_wallet_view_on_explorer":"在区块链浏览器查看","popups_wallet_gas_fee_settings":"设置Gas费用","popups_wallet_gas_fee_settings_description":"Gas是向以太坊矿工支付的费用，矿工们偏向以较高的Gas费用进行交易。 Gas费用过低的交易可能会失败，支付的Gas费用将不会退回。","popups_wallet_gas_fee_settings_low":"低","popups_wallet_gas_fee_settings_medium":"中","popups_wallet_gas_fee_settings_high":"高","popups_wallet_gas_fee_settings_usd":" ≈ {{usd}} 美元","popups_wallet_gas_fee_settings_gas_limit":"Gas Limit","popups_wallet_gas_fee_settings_max_priority_fee":"Max priority fee","popups_wallet_gas_fee_settings_max_fee":"Max fee","popups_wallet_gas_fee_settings_min_gas_limit_tips":"Gas limit 必须至少 {{limit}}","popups_wallet_signature_request":"签名请求","popups_wallet_signature_request_message":"信息","popups_wallet_contract_interaction":"合约交互","popups_wallet_token_unlock_permission":"代币解锁权限","popups_wallet_token_infinite_unlock":"无限解锁","popups_wallet_contract_interaction_transfer":"转账","popups_wallet_contract_interaction_gas_fee":"Gas fee","popups_wallet_contract_interaction_edit":"编辑","popups_wallet_contract_interaction_total":"总共","popups_wallet_password_dont_match":"密码不一致。","popups_wallet_password_satisfied_requirement":"密码格式不符合要求。","popups_wallet_password_length_error":"密码长度不符合要求。","popups_wallet_unlock_wallet":"解锁钱包","popups_wallet_unlock_error_password":"密码不正确","popups_wallet_activity_to_address":"至: {{address}}","popups_wallet_transfer_error_tip":"网络连接失败或合约交互错误导致发送交易失败。","popups_wallet_transactions_pending":"待定中...","popups_wallet_re_send":"重新发送","popups_wallet_choose_token":"选择代币","popups_wallet_gas_price":"Gas费","popups_wallet_done":"完成","popups_wallet_recovered":"恢复的钱包","popups_wallet_no_transactions":"你没有任何交易。","popups_missing_parameter_caption":"请关闭此页面。","popups_persona_connect_to":"连接到 {{type}}","popups_persona_disconnect":"断开连接","popups_persona_logout":"登出","popups_persona_disconnect_tip":"身份登出后，您所关联的社交网络账户将不能解密过去的加密消息。 如果您需要重新使用您的身份，您可以使用您的身份助记词，身份私钥，本地或云端备份进行恢复。","popups_persona_persona_name_exists":"此身份名称已存在","popups_persona_sign_request_title":"签名请求","popups_persona_sign_request_message":"信息","popups_password_do_not_match":"备份密码不正确","popups_backup_password":"备份密码","popups_rename_error_tip":"最大长度为 {{length}} 个字符。","nft_wallet_label":"钱包","plugin_profile_no_wallets":"在此连接您的钱包。<br/>此部分将显示给您的加密朋友。<br/>显示内容包括数字艺术、捐赠、徽章<br/>和其他链上的公开信息。","plugin_vcent_last_offer_at":"最新的OFFER为","nft_input_address_label":"请输入合约地址","nft_input_tokenid_label":"请输入Token ID","nft_owner_hint":"此 NFT 不存在或不属于您。","nft_add_dialog_title":"添加收藏品","nft_add_button_label":"添加","nft_list_title":"NFT 头像","nft_wallet_change":"更改","nft_button_add_collectible":"添加收藏品","nft_avatar":"NFT 头像","web3_tab_hint":"未发现任何地址。","nft_button_set_avatar":"设置 NFT 头像","popups_wallet_unsupported_network":"不支持的网络类型"}');
;// CONCATENATED MODULE: ./shared-ui/locales/zh-TW.json
const zh_TW_namespaceObject = JSON.parse('{"database_backup":"備份資料庫","database_clear":"清除資料庫","edit":"編輯","clear":"清除","more":"更多","approve":"同意","address":"地址","gas_price":"礦工費","redirect_to":"跳轉至","sign":"簽署","reload":"重新讀取","load":"加載","no_data":"查無數據","tags":"標記","contract":"合約","initializing":"初始化中...","redirect_alert":"如果你的瀏覽器沒有跳轉， <terms>請點擊此處</terms>.","add_token":"新增代幣","add_nft_contract_search_hint":"檢索NFT合約名稱或地址","applications":"應用","additional_post_box__encrypted_post_pre":"使用 #mask_io 解密這篇貼文！ {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet_twitter_official_account":"用 #mask_io @{{account}} 開啟紅包 {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet":"用 #mask_io 開啟紅包 {{encrypted}}","additional_post_box__steganography_post_pre":"這張圖片是使用 #mask_io 加密。 📪🔑 安裝 mask.io 解密。 {{random}}","auto_paste_failed_dialog_title":"手動貼上","auto_paste_failed_dialog_content":"請複製下方文章或圖片 (如果有的話) 然後發佈它","auto_paste_failed_dialog_image_caption":"在新分頁中開啟","auto_paste_failed_snackbar":"您需要手動貼上加密的內容嗎?","auto_paste_failed_snackbar_action":"告訴我怎麼做","auto_paste_failed_snackbar_action_close":"關閉","automation_request_click_post_button":"請按「發文」按鈕以開啟發文對話框","try_again":"再試一次","ok":"確認","cancel":"取消","comment_box__placeholder":"添加加密留言…","confirm":"確認","copy_text":"複製文字","loading_failed":"讀取失敗","copy_image":"複製圖片","copy_success_of_wallet_addr":"複製錢包地址成功！","copy_success_of_text":"複製文字成功！","copy_success_of_image":"圖片複製成功！","connecting":"正在連接…","create":"建立","copied":"已複製","dashboard_no_collectible_found":"找不到收藏品","decrypted_postbox_add_recipients":"新增收件人","decrypted_postbox_decrypting":"Mask 正在解密…","decrypted_postbox_decoding":"Mask 正在解碼…","decrypted_postbox_decrypting_finding_person_key":"Mask 正在尋找這個作者的公鑰…","decrypted_postbox_decrypting_finding_post_key":"Mask 正在取得貼文金鑰以解密此貼文…","decrypted_postbox_author_mismatch":"最初由 {{name}} 發佈","decrypted_postbox_title":"已由 Mask 解密：","dismiss":"取消","delete":"刪除","delete_wallet":"刪除錢包","hide_token":"隱藏代幣","hide_token_hint":"您可以在將來新增 <strong>{{token}}</strong> 藉由到錢包面板中的「新增代幣」。","done":"完成！","download":"下載","failed":"失敗","buy_now":"立即購買","setup_guide_find_username_text":"Mask 需要使用者名稱將您的個人資料連接到您的角色。<br/>請確保它是正確的。","setup_guide_connect_auto":"連線","setup_guide_connect_failed":"連線失敗… 請再試一次。","user_guide_tip_connected":"已成功連接此帳號","import":"導入","no_search_result":"沒有結果","unlock":"解鎖","personas":"角色","browser_action_enter_dashboard":"進入儀錶板","post_dialog__button":"完成","post_dialog__placeholder":"在這裡輸入文字…","post_dialog__title":"Mask: 發表貼文","post_modal_hint__button":"發表加密貼文","hide":"隱藏","reset":"重設","editor":"編輯器","retry":"重試","go_wrong":"出錯了","search_box_placeholder":"在這裡輸入以搜尋","select_all":"選擇全部","select_none":"取消選擇全部","select_specific_friends_dialog__title":"選擇特定聯絡人","service_decryption_failed":"解密失敗。","service_username_invalid":"錯誤的使用者名稱","speed_up":"加速","save":"存檔","skip":"跳過","next":"下一個","try":"試一下","share":"分享","share_to":"分享至…","sharing":"分享中","transfer":"傳送","export":"導出","wallet_name":"錢包名稱","wallet_rename":"重新命名錢包","wallet_loading_nft_contract":"加載NFT合約中...","wallet_search_no_result":"無結果","wallet_confirm_with_password":"確認密碼","wallet_airdrop_nft_unclaimed_title":"尚未認領的NFT空投","plugin_external_loader_search_holder":"搜尋外部插件","plugin_external_loader_search_button":"搜尋插件","plugin_external_loader_example_github":"官方插件example？？？ <terms>GitHub</terms>.","plugin_external_plugin_url":"插件鏈接","plugin_external_unverified_publisher":"發佈者: {{publisher}} (Unverified)","plugin_external_name":"外部插件","plugin_external_get_started":"讓我們開始吧","plugin_airdrop_nft_start_time":"起始時間 {{date}}","plugin_airdrop_nft_end_time":"結束時間 {{date}}","plugin_airdrop_nft_expired":"已過期","plugin_airdrop_nft_claim":"認領","plugin_airdrop_nft_claimed":"已認領","plugin_airdrop_nft_check":"查看","plugin_airdrop_nft_check_address":"查看你的地址","plugin_airdrop_nft_none_to_claim":"尚無空投可認領","plugin_airdrop_nft_number_to_claim":"你有 {{count}} {{name}} 可認領","plugin_airdrop_nft_claim_all":"代幣認領","plugin_airdrop_nft_claim_successful":"代幣認領成功","plugin_airdrop_nft_claim_failed":"代幣認領失敗","wallet_balance":"餘額","wallet_balance_eth":"餘額（ETH）","wallet_new":"新錢包","wallet_status_button_change":"更改","wallet_status_button_copy_address":"複製地址","wallet_transfer_receiving_account":"接收地址","wallet_transfer_to_address":"接收地址","wallet_transfer_send":"發送","wallet_transfer_title":"傳送","wallet_transfer_error_amount_absence":"輸入一個金額","wallet_transfer_error_address_absence":"輸入接收人地址","wallet_transfer_error_invalid_address":"錯誤的接收人地址","wallet_transfer_error_no_address_has_been_set_name":"接收者地址無效","wallet_transfer_error_no_support_ens":"ENS網路不被支持","wallet_transfer_error_gas_price_absence":"輸入礦工費","wallet_transfer_error_gas_limit_absence":"輸入礦工費上限","wallet_transfer_error_max_fee_absence":"輸入總交易費用","wallet_transfer_error_max_priority_fee_absence":"輸入優先交易費用","wallet_transfer_error_max_priority_gas_fee_imbalance":"總交易費用不能低於優先交易費用","wallet_transfer_gwei":"GWEI","wallet_transfer_between_my_accounts":"在我的帳戶間轉帳","wallet_risk_warning_dialog_title":"風險提示","wallet_risk_warning_no_select_wallet":"還沒有選擇錢包。","wallet_risk_warning_content":"尊敬的用户：<br/>在使用任何 Mask Network 内任何跟钱包相关的插件，请确认以下使用风险。<br/>Mask Network 提供非商业免费服务。接入的插件均为社区成员和其他优秀第三方DApps团队提供，由于去中心化网络的自由性和其他不确定风险因素，请用户妥善保护自己的钱包助记词、私钥等敏感信息，进行任何区块链合约交互，请谨慎操作。任何第三方 DApps 插件所带来的风险均由第三方 DApps 承担。点击确认按钮即代表同意承担以上可能带来的风险。","wallet_risk_confirm_confirming":"確認中","wallet_risk_confirm_failed":"確認失敗","relative_time_days_ago":"{{days}} 天前","relative_time_hours_ago":"{{hours}} 小時前","relative_time_minutes_ago":"{{minutes}} 分鐘前","relative_time_months_ago":"{{months}} 月前","relative_time_seconds_ago":"{{seconds}} 秒前","relative_time_years_ago":"{{years}} 年前","plugin_wallet_select_a_nft_contract":"選擇一份NFT合約","plugin_wallet_select_a_nft_owner":"選擇一位NFT合約擁有者","plugin_wallet_select_a_nft_operator":"選擇一位NFT合約執行者","plugin_wallet_fail_to_load_nft_contract":"加載NFT合約失敗。點擊重試。","plugin_wallet_nft_approving_all":"解鎖 {{symbol}} 中...","plugin_wallet_approve_all_nft":"解鎖 {{symbol}}","plugin_wallet_approve_all_nft_successfully":"解鎖 {{symbol}} 成功","plugin_wallet_connect_a_wallet":"連接到錢包","plugin_wallet_confirm_risk_warning":"風險警告確認","plugin_wallet_no_gas_fee":"沒有 Gas 費用","plugin_wallet_update_gas_fee":"正在更新 Gas 費用…","plugin_wallet_invalid_network":"錯誤的網路","plugin_wallet_select_a_wallet":"選擇一個錢包","plugin_wallet_transaction":"交易","plugin_wallet_transaction_wait_for_confirmation":"等待確認中…","plugin_wallet_transaction_submitted":"你的交易已經被送出！","plugin_wallet_transaction_confirmed":"你的交易已經被確認！","plugin_wallet_transaction_reverted":"交易被復原！","plugin_wallet_transaction_rejected":"交易被拒絕！","plugin_wallet_transaction_server_error":"交易由於內部 JSON-RPC 伺服器錯誤而失敗。","plugin_wallet_view_on_explorer":"在區塊鏈瀏覽器上查看","plugin_ito_placeholder_when_token_unselected":"請先選擇一種代幣","plugin_wallet_wrong_network_tip":"請連接到適當的乙太坊網絡。","plugin_wallet_on_create":"建立錢包","plugin_wallet_on_connect":"連接錢包","plugin_wallet_wrong_network":"網路錯誤","plugin_wallet_import_wallet":"匯入錢包","plugin_wallet_select_provider_dialog_title":"連接錢包","plugin_wallet_qr_code_with_wallet_connect":"使用一個與 WalletConnect 相容的錢包掃描 QR code","plugin_wallet_token_unlock":"特定數量解鎖","plugin_wallet_token_infinite_unlock":"無限解鎖","plugin_wallet_connect_dialog_title":"WalletConnect","plugin_wallet_connect_safari_metamask":"連接到 MetaMask","plugin_wallet_connect_safari_rainbow":"連接到 Rainbow","plugin_wallet_connect_safari_trust":"連接到 Trust","plugin_wallet_connect_safari_im_token":"連接到 imToken","plugin_wallet_on_connect_in_firefox":"連接","plugin_wallet_return_mobile_wallet_options":"回到手機錢包選項","plugin_wallet_view_qr_code":"顯示 QR Code","plugin_wallet_switch_network":"切換至 {{network}}","plugin_wallet_switch_network_under_going":"切換至 {{network}} 中","plugin_wallet_not_available_on":"{{network}} 不可用","plugin_wallet_connect_wallet":"連接錢包","plugin_red_packet_create_with_token":"使用 {{symbol}} 建立紅包","plugin_gitcoin_select_a_token":"選擇一個代幣","plugin_gitcoin_insufficient_balance":"{{symbol}} 餘額不足","plugin_trader_tutorial":"新手教學","plugin_trader_safety_agree":"我瞭解","plugin_trader_total_supply":"供應總量","plugin_trader_market_cap":"市值","plugin_trader_swap":"交換","plugin_trader_wrap":"包裹","plugin_trader_unwrap":"展開","plugin_trader_buy":"購買","plugin_trader_no_data":"沒有資料","plugin_trader_tab_market":"一般","plugin_trader_tab_price":"價格","plugin_trader_tab_exchange":"交易所","plugin_trader_tab_swap":"交換","plugin_trader_table_exchange":"交易所","plugin_trader_table_pair":"交易對","plugin_trader_table_price":"價格","plugin_trader_table_volume":"交易量 (24h)","plugin_trader_table_updated":"已更新","plugin_trader_error_amount_absence":"輸入一個金額","plugin_trader_error_insufficient_balance":"{{symbol}} 餘額不足","plugin_trader_error_insufficient_lp":"本次交易流動性不足","plugin_trade_error_input_amount_less_minimum_amount":"輸入金額低於最小值","plugin_trader_slippage_tolerance":"滑動容許值：","plugin_trader_swap_from":"來自","plugin_trader_gas_fee":"礦工費","plugin_trader_unlock_tips":"你必須授予 {{provider}} 智能合約權限去使用你的 {{symbol}} 。 每個代幣只需授權一次。","plugin_trader_gas_option":"{{option}} ({{value}}) Gwei","plugin_trader_no_enough_liquidity":"流通性不足","plugin_trader_gas":"礦工費","plugin_poll_display_name":"插件：投票","plugin_poll_question_hint":"提出一個問題…","plugin_poll_options_hint":"選擇","plugin_poll_length":"投票長度","plugin_poll_length_days":"天","plugin_poll_length_hours":"小時","plugin_poll_length_minutes":"分鐘","plugin_poll_length_unknown":"未知","plugin_poll_create_new":"建立新的","plugin_poll_select_existing":"選擇現有的","plugin_poll_send_poll":"送出投票","plugin_poll_status_closed":"已關閉","plugin_poll_status_voting":"投票中","plugin_poll_status_voted":"已投票。","plugin_poll_deadline":"距離投票結束還有 {{time}}","plugin_ito_share":"分享","plugin_ito_enter":"輸入","plugin_ito_dialog_swap_title":"交換 {{token}}","plugin_ito_dialog_swap_reminder_title":"交換提醒","plugin_ito_dialog_swap_unlock_title":"事先解鎖代幣","plugin_ito_dialog_swap_share_title":"分享","plugin_ito_dialog_swap_exchange":"以換取","plugin_ito_dialog_swap_panel_title":"交換","plugin_ito_dialog_swap_exceed_wallet_limit":"超過單個錢包限制","plugin_ito_swap_ration_label":"交換比例","plugin_ito_swap_only_once_remind":"每個錢包只能參與一次。","plugin_ito_swap_title":"{{amount}} {{token}} 每 {{swap}} ","plugin_ito_swap_end_date":"於 {{date}} 結束。","plugin_ito_dialog_claim_reminder_agree":"我理解","plugin_ito_dialog_claim_reminder_text1":"任何人都可以用任何名稱在乙太坊上建立 ERC20 代幣，包括建立現有代幣的假版本，以及聲稱代表沒有代幣的項目的代幣。","plugin_ito_dialog_claim_reminder_text2":"此介面可以按代幣地址加載任意代幣。在與任意 ERC20 代幣互動時，請格外小心並了解相關資訊。","plugin_ito_dialog_claim_reminder_text3":"如果你購買了一個任意的代幣，你可能無法把它賣出去。","plugin_ito_dialog_claim_reminder_text4":"該等權利並未在司法管轄區內全部或部分提供或出售，也不得直接或間接提供或出售，或向其提供或出售該等權利將是非法的。","plugin_ito_expired":"已過期","plugin_ito_create_new":"新增","plugin_ito_claim_all_status_unclaimed":"未被認領","plugin_ito_claim_all_status_locked":"已鎖定","plugin_ito_claim_all_unlock_time":"解鎖時間：{{time}}","plugin_ito_claim_all_dialog_title":"認領你的代幣","plugin_ito_advanced":"進階","plugin_ito_advanced_ip_region":"IP 區域限制","plugin_ito_advanced_delay_unlocking":"延時解鎖代幣","plugin_ito_advanced_contract":"插件合約","plugin_ito_select_existing":"過去的","plugin_ito_display_name":"ITO 競賽視窗","plugin_ito_sell_token":"代幣","plugin_ito_sell_price":"價格","plugin_ito_sell_total_amount":"輸入","plugin_ito_allocation_per_wallet":"交換限制 {{limit}} {{token}}","plugin_ito_wait_unlock_time":"認領於 {{unlockTime}}","plugin_ito_claim":"認領","plugin_ito_claiming":"認領中","plugin_ito_claim_all":"認領全部","plugin_ito_qualification_start_time":"資格開始時間：","plugin_ito_error_qualification_start_time":"錯誤：資格開始時間應早於 ITO 結束時間","plugin_ito_error_invalid_qualification":"錯誤的資格地址","plugin_ito_unlock_time":"解鎖時間 {{zone}}","plugin_ito_total_claimable_count":"總計: ","plugin_ito_qualification_label":"插件合約","plugin_ito_message_label":"標題","plugin_ito_region_label":"IP 區域選擇","plugin_ito_region_confirm_label":"IP 區域","plugin_ito_region_list":"{{ select }} / {{ all }} 區域","plugin_ito_region_all":"所有區域","plugin_ito_region_search":"輸入區域名稱以搜尋","plugin_ito_region_ban":"此池已被您所在區域的建立者禁用","plugin_ito_next":"下一個","plugin_ito_back":"上一個","plugin_ito_transaction_dialog_summary":"使用 {{amount}} {{symbol}} 建立一個 ITO","plugin_ito_swap":"交換","plugin_ito_send_tip":"你可以在過去分頁中找到你的 ITO","plugin_ito_send_text":"送出 {{total}} {{symbol}}","plugin_ito_error_enter_amount":"輸入一個金額","plugin_ito_error_select_token":"選擇一個代幣","plugin_ito_error_enter_amount_and_token":"輸入一個金額和選擇一個代幣","plugin_ito_error_allocation_absence":"輸入交換限制","plugin_ito_error_allocation_invalid":"錯誤的金額","plugin_ito_error_exchange_time":"錯誤：開始時間不能晚於結束時間","plugin_ito_error_unlock_time":"錯誤：結束時間不能晚於解鎖時間","plugin_ito_error_balance":"{{symbol}} 餘額不足","plugin_ito_list_start_date":"開始時間 {{date}}","plugin_ito_list_end_date":"結束時間 {{date}}","plugin_ito_list_sold_total":"已交換：","plugin_ito_list_total":"總共：","plugin_ito_list_table_type":"類型","plugin_ito_list_table_price":"交換比例","plugin_ito_no_claimable_token":"你沒有可認領的代幣。","plugin_ito_list_table_sold":"已交換","plugin_ito_list_table_got":"餘額","plugin_ito_list_button_send":"送出","plugin_ito_withdraw":"提取","plugin_ito_withdrawn":"已提取","plugin_ito_your_swapped_amount":"你交換了 {{amount}} {{symbol}}","plugin_ito_your_claimed_amount":"你認領了 {{amount}} {{symbol}}","plugin_ito_your_refund_amount":"返還 {{amount}} {{symbol}}。","plugin_ito_unlock_in_advance":"預先解鎖","plugin_ito_swapped_status":"{{remain}} / {{total}} {{token}} 已交換","plugin_ito_qualification_loading":"驗證資格…","plugin_ito_qualification_failed":"錢包地址不在清單上。","plugin_ito_congratulations":"恭喜！","plugin_ito_out_of_stock_hit":"祝你下次好運","plugin_ito_claim_success_share":"我剛剛參與了 @{{user}} 在 @{{account}} 發起的 #ITO 以換取 ${{symbol}}。 安裝 mask.io 開始你自己的 Initial Twitter Offering！ \\n {{link}}","plugin_ito_claim_foreshow_share":"{{symbol}}({{name}}) 正在舉辦一個新的 #ITO。 過來參加吧！ 追隨 @{{account}} (mask.io) 以發現更多活動！ \\n {{link}}","plugin_ito_password":"密碼：{{password}}","plugin_ito_status_no_start":"尚未開始","plugin_ito_status_ongoing":"進行中","plugin_ito_status_out_of_stock":"缺貨","plugin_ito_loading":"讀取 ITO 中…","plugin_ito_amount_unlocked":"已解鎖 {{amount}} {{symbol}}","plugin_ito_amount_unlocked_infinity":"已解鎖無限 {{symbol}}","plugin_ito_unlocking_symbol":"解鎖中 {{symbol}}","plugin_ito_continue":"繼續","plugin_ito_view_on_explorer":"在區塊鏈瀏覽器上查看","plugin_collectible_you":"你","plugin_collectible_done":"完成","plugin_collectible_retry":"重試","plugin_collectible_sell":"販售","plugin_collectible_checkout":"結帳","plugin_collectible_place_bid":"投標","plugin_collectible_buy_now":"立即購買","plugin_collectible_make_offer":"報價","plugin_collectible_post_listing":"上架","plugin_collectible_description":"目前的價格是 <strong>{{price}} {{symbol}}</strong>。","plugin_collectible_article":"文章","plugin_collectible_overview":"總覽","plugin_collectible_details":"詳細資訊","plugin_collectible_offers":"報價","plugin_collectible_listing":"上架的物品","plugin_collectible_history":"歷史資訊","plugin_collectible_event":"事件","plugin_collectible_unit_price":"單位價格","plugin_collectible_price":"價格","plugin_collectible_from":"從","plugin_collectible_to":"到","plugin_collectible_date":"日期","plugin_collectible_quantity":"數量","plugin_collectible_expiration":"到期日","plugin_collectible_no_offers":"沒有報價","plugin_collectible_no_listings":"沒有任何上架的物品","plugin_collectible_base":"底價","plugin_collectible_properties":"屬性","plugin_collectible_about":"關於","plugin_collectible_chain_info":"區塊練資訊","plugin_collectible_contract_address":"合約地址","plugin_collectible_token_id":"代幣 ID","plugin_collectible_block_chain":"區塊練","plugin_collectible_create_by":"建立者","plugin_collectible_owned_by":"擁有者","plugin_collectible_no_history":"沒有歷史資運","plugin_collectible_ensure_unreviewed_item":"請確保未審核的物品","plugin_collectible_check_tos_document":"請查閱 ToS 文件","plugin_collectible_not_been_reviewed_by_opensea":"這個物品尚未被 OpenSea 審核","plugin_collectible_reviewed_tips":"你應該格外小心。任何人都可以使用任何名稱在區塊鏈上建立數位物品，包括現有物品的偽造版本。在與此物品互動時，請格外小心並進行\\n研究，以確保它是您想要的物品。","plugin_collectible_total":"總計","plugin_collectible_subtotal":"小計","plugin_collectible_item":"物品","plugin_collectible_approved_tips":"通過勾選此框，我確認此項目未經 OpenSea 審查。","plugin_collectible_agree_terms":"通過勾選此框，我同意 OpenSea 的<terms>使用者條約</terms>。","plugin_collectible_convert_eth":"轉換 ETH","plugin_collectible_sale_end":"拍賣將於 {{time}} 結束","plugin_collectible_set_initial_price":"設定一個初始價格","plugin_collectible_ending_price_tip":"在您轉讓或取消之前將一直銷售","plugin_collectible_starting_price":"初始價格","plugin_collectible_ending_price":"結束價格","plugin_collectible_ending_price_less_than_staring":"必須小於或等於起始價格。價格將直線上升到這個金額，直到到期日為止。","plugin_collectible_expiration_date":"到期日","plugin_collectible_schedule_date":"預約日期","plugin_collectible_auto_cancel_tip":"此時您上架的物品將自動結束。沒有必要取消","plugin_collectible_schedule_future_date":"預約一個未來的日期。","plugin_collectible_buyer_address":"購買者地址","plugin_collectible_buyer_address_placeholder":"輸入購買者的地址","plugin_collectible_buyer_address_helper_text":"只有購買者可以購買","plugin_collectible_include_ending_price":"包含結束價格","plugin_collectible_include_ending_price_helper":"新增結束價格將允許此上架物品過期，或允許降價，直到找到買家為止。","plugin_collectible_schedule_for_a_future_time":"預約未來的日期","plugin_collectible_schedule_for_a_future_time_helper":"您可以將此上架物品預約為只能在將來的某個日期購買","plugin_collectible_privacy":"隱私權","plugin_collectible_privacy_helper":"您可以公開您的上架物品，也可以指定一個允許購買您上架物品的地址。","plugin_collectible_enter_a_price":"輸入價格","plugin_collectible_insufficient_balance":"餘額不足","plugin_collectible_invalid_schedule_date":"預定日期錯誤","plugin_collectible_invalid_ending_price":"錯誤的結束價格","plugin_collectible_invalid_expiration_date":"錯誤的到期日","plugin_collectible_invalid_buyer_address":"錯誤的購買人地址","plugin_collectible_set_price":"設定價格","plugin_collectible_highest_bid":"最高出價","plugin_collectible_minimum_bid":"最低出嫁","plugin_collectible_set_starting_bid_price":"設定您的起始出價","plugin_collectible_reserve_price":"底標價格","plugin_collectible_reserve_price_helper":"通過設定底標價格來建立一個隱藏的限制。底價必須大於或等於起始出價。","plugin_collectible_auction_auto_end":"您的拍賣將自動在這個時候結束，最高出價者將贏得拍賣。沒有必要取消","plugin_collectible_enter_minimum_bid":"輸入最低出嫁","plugin_collectible_enter_reserve_price":"輸入底標價格","plugin_collectible_invalid_reserve_price":"錯誤的底標價格","plugin_collectible_place_a_bid":"出價","plugin_collectible_make_an_offer":"商議價格","plugin_collectible_legal_text":"通過勾選此框，我同意 OpenSea 的 <terms>使用者條約</terms>。","plugin_cryptoartai_description_title":"描述","plugin_cryptoartai_operator":"執行者","plugin_cryptoartai_activity_type":"類型","plugin_cryptoartai_status":"狀態","plugin_cryptoartai_time":"時間","plugin_cryptoartai_price":"價格","plugin_cryptoartai_buy_now":"立刻購買","plugin_cryptoartai_current_balance":"目前餘額","plugin_cryptoartai_bid_least":"需要至少出價","plugin_cryptoartai_current_balance_is":"當前餘額","plugin_cryptoartai_auction_end":"拍賣已結束","plugin_snapshot_info_title":"資訊","plugin_snapshot_info_strategy":"策略","plugin_snapshot_info_author":"作者","plugin_snapshot_info_start":"開始日期","plugin_snapshot_info_end":"結束日期","plugin_snapshot_info_snapshot":"快照","plugin_snapshot_result_title":"結果","plugin_snapshot_votes_title":"投票","plugin_snapshot_no_power":"沒有權力","plugin_snapshot_vote_success":"投票成功！","plugin_snapshot_vote":"投票","plugin_snapshot_vote_choice":"選擇","plugin_snapshot_vote_power":"你的投票權力","plugin_snapshot_vote_title":"投下你的一票","plugin_snapshot_vote_confirm_dialog_title":"確認投票","plugin_snapshot_vote_confirm_dialog_choice":"你確定要投票給 「{{ choiceText }}」 嗎?","plugin_snapshot_vote_confirm_dialog_warning":"這項操作無法復原。","plugin_snapshot_current_result_title":"目前的結果","plugin_snapshot_download_report":"下載報告","plugin_dhedge_managed_by":"由 <manager>{{managerName}}</manager> 管理","plugin_dhedge_manager_share":"持有 <share>{{managerShare}}%</share> 池","plugin_dhedge_value_managed":"託管的金額","plugin_dhedge_lifetime_return":"終身回報","plugin_dhedge_risk_factor":"風險因素","plugin_dhedge_tab_stats":"統計","plugin_dhedge_tab_chart":"圖表","plugin_dhedge_strategy":"策略","plugin_dhedge_see_less":"顯示更少","plugin_dhedge_see_more":"顯示更多","plugin_dhedge_no_data":"沒有資料","plugin_dhedge_fetch_error":"無法取得資料，請再試一次！","plugin_dhedge_loading_chart":"讀取中","plugin_dhedge_invest":"投資","plugin_dhedge_buy_token":"取得 {{symbol}}","plugin_dhedge_enter_an_amount":"輸入一個金額","plugin_dhedge_insufficient_balance":"{{symbol}} 餘額不足","plugin_dhedge_pool_not_found":"錯誤的池地址！","plugin_dhedge_smt_wrong":"出錯了！"}');
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
;// CONCATENATED MODULE: ./shared-ui/locales/languages.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts






const languages = {
    en: en_US_namespaceObject,
    ja: ja_JP_namespaceObject,
    ko: ko_KR_namespaceObject,
    qy: qya_AA_namespaceObject,
    'zh-CN': zh_CN_namespaceObject,
    zh: zh_TW_namespaceObject
};

const addMaskI18N = (0,src/* createI18NBundle */.C9)('mask', languages);
// @ts-ignore
if (false) {}


/***/ }),

/***/ 78778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K9": () => (/* binding */ Services),
/* harmony export */   "Ql": () => (/* binding */ ServicesWithProgress),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17889);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);
// Notice, this module itself is not HMR ready.
// If you change this file to add a new service, you need to reload.
// This file should not rely on any other in-project files unless it is HMR ready.



const SERVICE_HMR_EVENT = 'service-hmr';
const message = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.WebExtensionMessage({
    domain: 'services'
});
const log = {
    type: 'pretty',
    requestReplay: "production" === 'development'
};
const Services = {
    Crypto: add(()=>Promise.all(/* import() */[__webpack_require__.e(6739), __webpack_require__.e(3884), __webpack_require__.e(3437)]).then(__webpack_require__.bind(__webpack_require__, 23437))
    , 'Crypto'),
    Identity: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(6739), __webpack_require__.e(4544), __webpack_require__.e(2943), __webpack_require__.e(1993), __webpack_require__.e(9442), __webpack_require__.e(1950)]).then(__webpack_require__.bind(__webpack_require__, 61950))
    , 'Identity'),
    Backup: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(6739), __webpack_require__.e(4544), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(6045), __webpack_require__.e(6265), __webpack_require__.e(4859), __webpack_require__.e(1993), __webpack_require__.e(30), __webpack_require__.e(6685), __webpack_require__.e(871), __webpack_require__.e(8273)]).then(__webpack_require__.bind(__webpack_require__, 48273))
    , 'Backup'),
    Helper: add(()=>__webpack_require__.e(/* import() */ 7968).then(__webpack_require__.bind(__webpack_require__, 67968))
    , 'Helper'),
    SocialNetwork: add(()=>__webpack_require__.e(/* import() */ 2429).then(__webpack_require__.bind(__webpack_require__, 92429))
    , 'SocialNetwork'),
    Settings: add(()=>__webpack_require__.e(/* import() */ 9972).then(__webpack_require__.bind(__webpack_require__, 9972))
    , 'Settings'),
    ThirdPartyPlugin: add(()=>__webpack_require__.e(/* import() */ 7207).then(__webpack_require__.bind(__webpack_require__, 87207))
    , 'ThirdPartyPlugin')
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);
const ServicesWithProgress = add(()=>Promise.all(/* import() */[__webpack_require__.e(3884), __webpack_require__.e(7044)]).then(__webpack_require__.bind(__webpack_require__, 67044))
, 'ServicesWithProgress', true);
if (false) {}
/**
 * Helper to add a new service to Services.* / ServicesWithProgress.* namespace.
 * @param impl Implementation of the service. Should be things like () => import("./background-script/CryptoService")
 * @param key Name of the service. Used for better debugging.
 * @param generator Is the service is a generator?
 */ function add(impl, key, generator = false) {
    const channel = message.events[key].bind(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.MessageTarget.Broadcast);
    const isBackground = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.Environment.ManifestBackground);
    const RPC = generator ? async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncGeneratorCall */ .rc : async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE;
    const load = ()=>(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .getLocalImplementation */ .Bb)(isBackground, `Services.${key}`, impl, channel)
    ;
    const localImplementation = load();
    // No HMR support in MV3
     true && isBackground && /* unsupported import.meta.webpackHot */ undefined && 0;
    const service = RPC(localImplementation, {
        key,
        serializer: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM,
        log,
        channel,
        preferLocalImplementation: isBackground,
        strict: isBackground,
        thenable: false
    });
    if (isBackground) {
        localImplementation.then((val)=>{
            Reflect.set(globalThis, key + 'Service', val);
            if (isBackground) Reflect.set(Services, key, val);
        });
    } else {
        Reflect.set(globalThis, key + 'Service', service);
        if (isBackground) Reflect.set(Services, key, service);
    }
    return service;
}


/***/ }),

/***/ 14048:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(82192);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var base = __webpack_require__(5492);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/index.ts


(0,social_network/* defineSocialNetworkUI */.BE)({
    ...base/* facebookBase */.q,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(9759), __webpack_require__.e(7871), __webpack_require__.e(3294), __webpack_require__.e(8136), __webpack_require__.e(6912), __webpack_require__.e(2245), __webpack_require__.e(360), __webpack_require__.e(854), __webpack_require__.e(8580), __webpack_require__.e(4443), __webpack_require__.e(44), __webpack_require__.e(6174), __webpack_require__.e(8777)]).then(__webpack_require__.bind(__webpack_require__, 58777))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var twitter_com_base = __webpack_require__(72005);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/index.ts


(0,social_network/* defineSocialNetworkUI */.BE)({
    ...twitter_com_base/* twitterBase */.o,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(9759), __webpack_require__.e(7871), __webpack_require__.e(3294), __webpack_require__.e(8672), __webpack_require__.e(2486), __webpack_require__.e(8136), __webpack_require__.e(6912), __webpack_require__.e(7696), __webpack_require__.e(2245), __webpack_require__.e(3667), __webpack_require__.e(4806), __webpack_require__.e(360), __webpack_require__.e(854), __webpack_require__.e(8580), __webpack_require__.e(8106), __webpack_require__.e(4443), __webpack_require__.e(1940), __webpack_require__.e(44), __webpack_require__.e(4583), __webpack_require__.e(6608)]).then(__webpack_require__.bind(__webpack_require__, 36358))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

// EXTERNAL MODULE: ./src/social-network-adaptor/instagram.com/base.ts
var instagram_com_base = __webpack_require__(5832);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/index.ts


(0,social_network/* defineSocialNetworkUI */.BE)({
    ...instagram_com_base/* instagramBase */.j,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(9759), __webpack_require__.e(7871), __webpack_require__.e(3294), __webpack_require__.e(8136), __webpack_require__.e(6739), __webpack_require__.e(6912), __webpack_require__.e(360), __webpack_require__.e(854), __webpack_require__.e(8580), __webpack_require__.e(44), __webpack_require__.e(6174), __webpack_require__.e(660)]).then(__webpack_require__.bind(__webpack_require__, 80660))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var minds_com_base = __webpack_require__(8721);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/index.ts


(0,social_network/* defineSocialNetworkUI */.BE)({
    ...minds_com_base/* mindsBase */.N,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(9759), __webpack_require__.e(7871), __webpack_require__.e(3294), __webpack_require__.e(8136), __webpack_require__.e(6912), __webpack_require__.e(2245), __webpack_require__.e(360), __webpack_require__.e(854), __webpack_require__.e(4443), __webpack_require__.e(9127)]).then(__webpack_require__.bind(__webpack_require__, 79127))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

;// CONCATENATED MODULE: ./src/social-network-adaptor/index.ts



 // TODO: add opensea


/***/ }),

/***/ 8721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ mindsBase)
/* harmony export */ });
/* unused harmony export isMinds */
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66525);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);


const origins = [
    'https://www.minds.com/*',
    'https://minds.com/*',
    'https://cdn.minds.com/*'
];
const mindsBase = {
    networkIdentifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Minds */ .Jk.Minds,
    encryptionNetwork: _masknet_encryption__WEBPACK_IMPORTED_MODULE_0__/* .SocialNetworkEnum.Minds */ .Gq.Minds,
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith('minds.com');
    }
};
function isMinds(ui) {
    return ui.networkIdentifier === EnhanceableSite.Minds;
}


/***/ }),

/***/ 8529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ isMobileTwitter)
/* harmony export */ });
/* unused harmony export twitterDomain */
const isMobileTwitter = !!navigator.userAgent.match(/Mobile|mobile/);
const twitterDomain = (/* unused pure expression or super */ null && (isMobileTwitter ? 'https://mobile.twitter.com/' : 'https://twitter.com/'));


/***/ }),

/***/ 10863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wu": () => (/* binding */ hasEditor),
/* harmony export */   "iv": () => (/* binding */ isCompose),
/* harmony export */   "kt": () => (/* binding */ getEditorContent),
/* harmony export */   "uf": () => (/* binding */ hasFocus)
/* harmony export */ });
/* unused harmony export isMobile */
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38129);

const getEditorContent = ()=>{
    const editorNode = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .postEditorDraftContentSelector */ .Y5)().evaluate();
    if (!editorNode) return '';
    if (editorNode.tagName.toLowerCase() === 'div') return editorNode.innerText;
    return editorNode.value;
};
const isMobile = ()=>globalThis.location.host.includes('mobile')
;
const isCompose = ()=>globalThis.location.pathname.includes('compose')
;
const hasFocus = (x)=>x.evaluate() === document.activeElement
;
const hasEditor = ()=>!!(0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .postEditorDraftContentSelector */ .Y5)().evaluate()
;


/***/ }),

/***/ 38129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* binding */ postEditorContentInPopupSelector),
/* harmony export */   "Ab": () => (/* binding */ searchTweetAvatarSelector),
/* harmony export */   "Dc": () => (/* binding */ searchTwitterAvatarNFTSelector),
/* harmony export */   "Du": () => (/* binding */ rootSelector),
/* harmony export */   "Fe": () => (/* binding */ searchProfileTabSelector),
/* harmony export */   "Fv": () => (/* binding */ searchTwitterAvatarNFTLinkSelector),
/* harmony export */   "Hk": () => (/* binding */ searchAppBarBackSelector),
/* harmony export */   "IQ": () => (/* binding */ personalHomepageSelector),
/* harmony export */   "JN": () => (/* binding */ searchProfileTabListSelector),
/* harmony export */   "Kq": () => (/* binding */ searchSelfAvatarSelector),
/* harmony export */   "L2": () => (/* binding */ searchProfileTabListLastChildSelector),
/* harmony export */   "Ls": () => (/* binding */ searchAvatarSelector),
/* harmony export */   "N7": () => (/* binding */ searchTwitterAvatarLinkSelector),
/* harmony export */   "NN": () => (/* binding */ searchReplyToolbarSelector),
/* harmony export */   "Ps": () => (/* binding */ postEditorInTimelineSelector),
/* harmony export */   "QG": () => (/* binding */ composeAnchorSelector),
/* harmony export */   "QK": () => (/* binding */ bioPageUserIDSelector),
/* harmony export */   "R9": () => (/* binding */ searchResultHeadingSelector),
/* harmony export */   "Rd": () => (/* binding */ postEditorInPopupSelector),
/* harmony export */   "Rg": () => (/* binding */ searchWatcherAvatarSelector),
/* harmony export */   "Rj": () => (/* binding */ profileBioSelector),
/* harmony export */   "S": () => (/* binding */ searchAllProfileTabSelector),
/* harmony export */   "Sn": () => (/* binding */ searchSelfNicknameSelector),
/* harmony export */   "WU": () => (/* binding */ sideBarProfileSelector),
/* harmony export */   "XD": () => (/* binding */ postsContentSelector),
/* harmony export */   "Y5": () => (/* binding */ postEditorDraftContentSelector),
/* harmony export */   "YG": () => (/* binding */ floatingBioCardSelector),
/* harmony export */   "YX": () => (/* binding */ searchProfileEmptySelector),
/* harmony export */   "ag": () => (/* binding */ headingTextSelector),
/* harmony export */   "at": () => (/* binding */ profileFollowButtonSelector),
/* harmony export */   "b2": () => (/* binding */ profileMenuButtonSelector),
/* harmony export */   "bQ": () => (/* binding */ searchRetweetAvatarSelector),
/* harmony export */   "ch": () => (/* binding */ toolBoxInSideBarSelector),
/* harmony export */   "dA": () => (/* binding */ searchNFTAvatarSelector),
/* harmony export */   "nS": () => (/* binding */ newPostButtonSelector),
/* harmony export */   "p$": () => (/* binding */ searchTwitterAvatarSelector),
/* harmony export */   "pz": () => (/* binding */ searchAvatarMetaSelector),
/* harmony export */   "qB": () => (/* binding */ selfInfoSelectors),
/* harmony export */   "r$": () => (/* binding */ searchNewTweetButtonSelector),
/* harmony export */   "rf": () => (/* binding */ searchNickNameSelector),
/* harmony export */   "rk": () => (/* binding */ postsImageSelector),
/* harmony export */   "s8": () => (/* binding */ searchSelfHandleSelector),
/* harmony export */   "tk": () => (/* binding */ isReplyPageSelector),
/* harmony export */   "uy": () => (/* binding */ bioPageUserNickNameSelector),
/* harmony export */   "vL": () => (/* binding */ postAvatarsContentSelector),
/* harmony export */   "wP": () => (/* binding */ searchEditProfileSelector),
/* harmony export */   "xH": () => (/* binding */ composeAnchorTextSelector),
/* harmony export */   "xx": () => (/* binding */ searchProfileTabPageSelector),
/* harmony export */   "yR": () => (/* binding */ timelinePostContentSelector),
/* harmony export */   "zA": () => (/* binding */ searchProfileTabLoseConnectionPageSelector)
/* harmony export */ });
/* unused harmony exports querySelector, searchProfileSelector, searchProfileActiveTabSelector, searchProfileActiveTabStatusLineSelector, searchProfileActiveTabLabelSelector, searchForegroundColorSelector, bioCardSelector, postEditorToolbarSelector, twitterMainAvatarSelector, searchProfileAvatarSelector, searchProfileAvatarParentSelector, searchAvatarSelectorInput, searchAvatarSelectorImage, searchTwitterAvatarOpenFilesSelector, searchProfileSaveSelector, searchProfessionalButtonSelector, searchProfileSetAvatarSelector, searchUseCellSelector, searchRejectReplyTextSelector */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47675);
/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8529);
/* harmony import */ var _postBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10863);




const querySelector = (selector, singleMode = true)=>{
    const ls = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__.LiveSelector().querySelector(selector);
    return singleMode ? ls.enableSingleMode() : ls;
};
const querySelectorAll = (selector)=>{
    return new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__.LiveSelector().querySelectorAll(selector);
};
// #region "Enhanced Profile"
const searchProfileSelector = ()=>querySelector('[aria-label][role="navigation"]')
;
const searchProfileTabListLastChildSelector = ()=>querySelector('[data-testid="primaryColumn"] div + [role="navigation"][aria-label] [data-testid="ScrollSnap-nextButtonWrapper"]')
;
const searchProfileTabPageSelector = ()=>querySelector('[data-testid="primaryColumn"] [role="navigation"] + * > div[aria-label]:not([role="progressbar"])')
;
const searchProfileTabLoseConnectionPageSelector = ()=>querySelector('[data-testid="primaryColumn"] [role="navigation"] + * > div[dir="auto"]:not([role="progressbar"])')
;
const searchProfileEmptySelector = ()=>querySelector('[data-testid="primaryColumn"] [data-testid="emptyState"]')
;
const searchProfileActiveTabSelector = ()=>querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"][aria-selected="true"]')
;
const searchProfileTabSelector = ()=>querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"][aria-selected="false"]')
;
const searchAllProfileTabSelector = ()=>querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"]')
;
const searchAppBarBackSelector = ()=>querySelector('[data-testid="app-bar-back"] > div')
;
const searchProfileActiveTabStatusLineSelector = ()=>querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"][aria-selected="true"] > div > div')
;
const searchProfileActiveTabLabelSelector = ()=>querySelector('[aria-label][role="navigation"] [role="tablist"] [role="tab"][aria-selected="true"] > div')
;
const searchProfileTabListSelector = ()=>querySelectorAll('[aria-label][role="navigation"]  [role="tablist"][data-testid="ScrollSnap-List"] a')
;
const searchForegroundColorSelector = ()=>querySelector('[data-testid="primaryColumn"] > div > div > div > div > div > div > div > div > div > div')
;
const searchNewTweetButtonSelector = ()=>{
    const q = querySelector('[data-testid="FloatingActionButtons_Tweet_Button"]');
    if (q.evaluate()) return q;
    return querySelector('[data-testid="SideNav_NewTweet_Button"]');
};
const searchNickNameSelector = ()=>querySelector('[data-testid="primaryColumn"] [data-testid="UserName"] div[dir="auto"] > span > span')
;
const searchAvatarSelector = ()=>querySelector('[data-testid="primaryColumn"] a[href$="/photo"] img[src*="profile_images"]')
;
const searchNFTAvatarSelector = ()=>querySelector('[data-testid="primaryColumn"] a[href$="/nft"] img[src*="profile_images"]')
;
const searchAvatarMetaSelector = ()=>querySelector('head > meta[property="og:image"]:last-child')
;
const profileFollowButtonSelector = ()=>querySelector('[data-testid="primaryColumn"] [aria-haspopup="menu"][data-testid="userActions"] ~ [data-testid="placementTracking"]')
;
// To get margin bottom of menu button, and apply it to tip button to align it.
const profileMenuButtonSelector = ()=>querySelector('[data-testid="primaryColumn"] [aria-haspopup="menu"][data-testid="userActions"]')
;
const searchEditProfileSelector = ()=>querySelector('[data-testid="primaryColumn"] a[href="/settings/profile"]')
;
const bioCardSelector = (singleMode = true)=>querySelector([
        '.profile',
        'a[href*="header_photo"] ~ div',
        'div[data-testid="primaryColumn"] > div > div:last-child > div > div > div > div ~ div'
    ].join(), singleMode)
;
// #endregion
const rootSelector = ()=>querySelector('#react-root')
;
// `aside *` selectors are for mobile mode
const composeAnchorSelector = ()=>querySelector([
        'header[role=banner] a[href="/compose/tweet"]',
        'aside a[href="/compose/tweet"]',
        // can't see the compose button on share popup, use the tweetButton instead
        '[role=main] [role=button][data-testid=tweetButton]', 
    ].join())
;
const composeAnchorTextSelector = ()=>querySelector('header[role=banner] a[href="/compose/tweet"] div[dir],aside a[href="/compose/tweet"] div[dir]')
;
const headingTextSelector = ()=>querySelector('[role="banner"] [role="heading"]')
;
const postEditorContentInPopupSelector = ()=>querySelector('[aria-labelledby="modal-header"] > div:first-child > div:first-child > div:first-child > div:nth-child(3)')
;
const postEditorInPopupSelector = ()=>querySelector('[aria-labelledby="modal-header"]  div[data-testid="toolBar"] div[data-testid="geoButton"]')
;
const toolBoxInSideBarSelector = ()=>querySelector('[role="banner"] [role="navigation"] > div')
;
const sideBarProfileSelector = ()=>querySelector('[role="banner"] [role="navigation"] [data-testid="AppTabBar_Profile_Link"] > div')
;
const postEditorInTimelineSelector = ()=>querySelector('[role="main"] :not(aside) > [role="progressbar"] ~ div [role="button"][aria-label]:nth-child(6)')
;
const isReplyPageSelector = ()=>!!location.pathname.match(/^\/\w+\/status\/\d+$/)
;
const postEditorDraftContentSelector = ()=>{
    if (location.pathname === '/compose/tweet') {
        return querySelector('[contenteditable][aria-label][spellcheck],textarea[aria-label][spellcheck]');
    }
    if (isReplyPageSelector()) {
        return querySelector('div[data-testid="tweetTextarea_0"]');
    }
    return ((0,_postBox__WEBPACK_IMPORTED_MODULE_2__/* .isCompose */ .iv)() ? postEditorInPopupSelector() : postEditorInTimelineSelector()).querySelector('.public-DraftEditor-content, [contenteditable][aria-label][spellcheck]');
};
const searchResultHeadingSelector = ()=>querySelector('[role="main"] [data-testid="primaryColumn"] [role="region"] > [role="heading"]')
;
const postEditorToolbarSelector = ()=>querySelector('[data-testid="toolBar"] > div > *:last-child')
;
const twitterMainAvatarSelector = ()=>querySelector('[data-testid="toolBar"]').closest(4).querySelector('div > a > div > :nth-child(2) > div')
;
const newPostButtonSelector = ()=>querySelector('[data-testid="SideNav_NewTweet_Button"]')
;
const profileBioSelector = ()=>querySelector('[data-testid="UserDescription"]')
;
const personalHomepageSelector = ()=>querySelector('[data-testid="UserUrl"]')
;
const bioPageUserNickNameSelector = ()=>querySelector('[data-testid="UserDescription"]').map((x)=>x.parentElement?.parentElement?.previousElementSibling
    ).querySelector('div[dir]')
;
const bioPageUserIDSelector = (selector)=>selector().map((x)=>x.parentElement?.nextElementSibling?.innerText?.replace('@', '')
    )
;
const floatingBioCardSelector = ()=>querySelector('[style~="left:"] a[role=link] > div:first-child > div:first-child > div:first-child[dir="auto"]')
;
const postsImageSelector = (node)=>new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__.LiveSelector([
        node
    ]).querySelectorAll([
        '[data-testid="tweet"] > div > div img[src*="media"]',
        '[data-testid="tweet"] ~ div img[src*="media"]'
    ].join())
;
const timelinePostContentSelector = ()=>querySelectorAll([
        '[data-testid="tweet"] div + div div[lang]',
        '[data-testid="tweet"] div + div div[data-testid="card.wrapper"]'
    ].join())
;
const postsContentSelector = ()=>querySelectorAll([
        // tweets on timeline page
        '[data-testid="tweet"] div + div div[lang]',
        '[data-testid="tweet"] div + div div[data-testid="card.wrapper"]',
        // tweets on detailed page
        '[data-testid="tweet"] + div > div:first-child div[lang]',
        '[data-testid="tweet"] + div > div div[data-testid="card.wrapper"]',
        // quoted tweets
        '[data-testid="tweet"] + div div[role="link"] div[lang]',
        '[data-testid="tweet"] > div:last-child div[role="link"] div[lang]',
        // reply-tweets
        '[data-testid="tweet"] + div div div[lang][dir]', 
    ].join()).concat(querySelectorAll('[data-testid="tweet"] > div:last-child').map((x)=>{
        const textElement = x.querySelector('[role="group"]')?.parentElement?.querySelector('div[lang]');
        if (textElement) return textElement;
        // There's no textElement as there's only a twitter summary card parsed by a single url.
        const summaryCardElement = x.querySelector('[role="group"]')?.parentElement?.querySelector('[data-testid="card.wrapper"]')?.previousElementSibling;
        return summaryCardElement;
    }))
;
const postAvatarsContentSelector = ()=>querySelectorAll('[data-testid="tweet"] > div > div > div > :nth-child(2)')
;
const base = querySelector('#react-root ~ script');
const handle = /"screen_name":"(.*?)"/;
const name = /"name":"(.*?)"/;
const bio = /"description":"(.*?)"/;
const avatar = /"profile_image_url_https":"(.*?)"/;
/**
 * first matched element can be extracted by index zero, followings are all capture groups, if no 'g' specified.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 */ const p = (regex, index)=>{
    return base.clone().map((x)=>(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .regexMatch */ .ZB)(x.innerText, regex, index)
    );
};
const selfInfoSelectors = ()=>({
        handle: p(handle, 1),
        name: p(name, 1),
        bio: p(bio, 1),
        userAvatar: p(avatar, 1)
    })
;
// #region self info
const searchSelfHandleSelector = ()=>{
    return querySelector([
        '[data-testid="SideNav_AccountSwitcher_Button"] [dir="ltr"] span',
        '#layers [role="group"] [role="dialog"] [role="link"] [dir="ltr"] span'
    ].join());
};
const searchSelfNicknameSelector = ()=>{
    return querySelector([
        '[data-testid="SideNav_AccountSwitcher_Button"] [dir="auto"] span span',
        '#layers [role="group"] [role="dialog"] [role="link"] span span'
    ].join());
};
const searchWatcherAvatarSelector = ()=>querySelector('[data-testid="SideNav_AccountSwitcher_Button"] img')
;
const searchSelfAvatarSelector = ()=>{
    return querySelector([
        '#layers ~ div [role="banner"] [role="button"] img',
        '[data-testid="DashButton_ProfileIcon_Link"] [role="presentation"] img',
        '#layers [role="group"] [role="dialog"] [role="link"] img'
    ].join());
};
// #endregion
// #region twitter nft avatar
const searchProfileAvatarSelector = ()=>{
    return querySelectorAll('[data-testid="fileInput"]').at(1).closest(4);
};
const searchProfileAvatarParentSelector = ()=>querySelectorAll('[data-testid="fileInput"]').at(1).closest(2).evaluate()[0].firstChild?.firstChild?.lastChild?.firstChild
;
const searchAvatarSelectorInput = ()=>querySelectorAll('[data-testid="fileInput"]').at(1).closest(2).querySelector('div > div > :nth-child(2) > div > :first-child')
;
const searchAvatarSelectorImage = ()=>querySelectorAll('[data-testid="fileInput"]').at(1).closest(2).querySelector('div > div > :nth-child(2) > div > img')
;
const searchTwitterAvatarOpenFilesSelector = ()=>querySelectorAll('[data-testid="fileInput"]').at(1)
;
const searchProfileSaveSelector = ()=>querySelector('[data-testid="Profile_Save_Button"]')
;
const searchProfessionalButtonSelector = ()=>querySelector('[data-testid*="ProfessionalButton"]')
;
const searchProfileSetAvatarSelector = ()=>isMobileTwitter ? searchProfessionalButtonSelector().closest(4).querySelector('div > div:nth-child(2) >div > div:nth-child(2)') : querySelector('[data-testid^="ProfileBirthdate"]').closest(5).querySelector('div > div:nth-child(2) > div:nth-child(2)')
;
// #endregion
// #region avatar selector
const searchTwitterAvatarLinkSelector = ()=>querySelector('[data-testid="UserProfileHeader_Items"]').closest(2).querySelector('div  a')
;
const searchTwitterAvatarSelector = ()=>querySelector('a[href$="/photo"]').querySelector('img').closest(1)
;
// #endregion
// #region twitter avatar
const searchUseCellSelector = ()=>querySelector('[data-testid="UserCell"]')
;
// #endregion
const searchTweetAvatarSelector = ()=>querySelector('[data-testid="tweetButtonInline"]').closest(7)
;
const searchRetweetAvatarSelector = ()=>querySelector('[data-testid="tweetButton"]').closest(6)
;
const searchTwitterAvatarNFTSelector = ()=>querySelector('a[href$="/nft"]').closest(1).querySelector('a div:nth-child(3) > div')
;
const searchTwitterAvatarNFTLinkSelector = ()=>querySelector('a[href$="/nft"]')
;
const searchReplyToolbarSelector = ()=>querySelector('div[data-testid="primaryColumn"] div[data-testid="toolBar"]').querySelector('div[data-testid="geoButton"]')
;
const searchRejectReplyTextSelector = ()=>querySelector('div[data-testid="tweetTextarea_0"] > div > div > div > span')
;


/***/ }),

/***/ 25513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ creator),
/* harmony export */   "Z": () => (/* binding */ stateCreator)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23587);



const stateCreator = {
    profiles: ()=>new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.ValueRef([])
};
const creator = {
    EmptyIdentityResolveProviderState: ()=>new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.ValueRef({}, lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)
    ,
    EmptyPostProviderState: ()=>new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ObservableWeakMap */ .$f()
};


/***/ }),

/***/ 25986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ collectTwitterEmoji),
/* harmony export */   "a": () => (/* binding */ collectNodeText)
/* harmony export */ });
function collectTwitterEmoji(points) {
    if (points.length === 0) return '';
    if (points[0] < 0x23 || points[0] > 0x39) return String.fromCodePoint(...points);
    if (points.includes(0xfe0f)) return String.fromCodePoint(...points);
    return String.fromCodePoint(points[0], 0xfe0f, ...points.slice(1));
}
function collectNodeText(node, options = {}) {
    if (!node) return '';
    if (!node.querySelector('a, img')) return node.innerText;
    return [
        ...node.childNodes
    ].map((each)=>{
        if (each.nodeType === document.TEXT_NODE) return each.nodeValue || '';
        if (each instanceof HTMLAnchorElement) {
            const result = options.onHTMLAnchorElement?.(each);
            if (result?.some) return result.val;
            const href = each.getAttribute('href');
            return [
                href,
                each.innerText
            ].join(' ');
        }
        if (each instanceof HTMLImageElement) {
            const src = each.getAttribute('src');
            const alt = each.getAttribute('alt') ?? '';
            const matched = src?.match(/emoji\/v2\/svg\/([\w\-]+)\.svg/)?.[1];
            if (matched) return collectTwitterEmoji(matched.split('-').map((x)=>Number.parseInt(x, 16)
            )) || alt;
            return alt;
        }
        if (each instanceof HTMLElement) return collectNodeText(each, options);
        return '';
    }).join('');
}


/***/ }),

/***/ 21158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ untilElementAvailable)
/* harmony export */ });
/* unused harmony export nthChild */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__);


const untilElementAvailable = async (ls, timeout = 5000)=>{
    const w = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.IntervalWatcher(ls);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>reject()
        , timeout);
        w.useForeach(()=>{
            w.stopWatch();
            resolve();
        }).startWatch(500);
    });
};
function nthChild(n, ...childrenIndex) {
    let r = n;
    for (const v of childrenIndex){
        if (isUndefined(r)) break;
        r = r.children[v];
    }
    return r;
}


/***/ }),

/***/ 74280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$o": () => (/* binding */ isDarkTheme),
/* harmony export */   "_T": () => (/* binding */ isDark),
/* harmony export */   "aF": () => (/* binding */ getForegroundColor),
/* harmony export */   "dF": () => (/* binding */ getBackgroundColor),
/* harmony export */   "f2": () => (/* binding */ fromRGB),
/* harmony export */   "wj": () => (/* binding */ shade),
/* harmony export */   "xr": () => (/* binding */ toRGB)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8218);

function isDark([r, g, b]) {
    return r < 68 && g < 68 && b < 68;
}
function toRGB(channels) {
    if (!channels) return '';
    return `rgb(${channels.join()})`;
}
function fromRGB(rgb) {
    const matched = rgb.match(/rgb\(\s*(\d+?)\s*,\s*(\d+?)\s*,\s*(\d+?)\s*\)/);
    if (matched) {
        const [_, r, g, b] = matched;
        return [
            Number.parseInt(r, 10),
            Number.parseInt(g, 10),
            Number.parseInt(b, 10)
        ];
    }
    return;
}
function shade(channels, percentage) {
    return channels.map((c)=>(0,lodash_unified__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Math.floor(c * (100 + percentage) / 100), 0, 255)
    );
}
function fromRGBAtoRGB(color) {
    const matched = color.match(/^rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)$/);
    if (matched) {
        const [_, r, g, b, a] = matched;
        const rgba = [
            Number.parseInt(r, 10),
            Number.parseInt(g, 10),
            Number.parseInt(b, 10),
            Number.parseInt(a, 10), 
        ];
        return toRGB(shade(rgba.slice(0, 3), rgba[3] * 100));
    }
    return '';
}
function isRGBA(color) {
    return color.match(/^rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)$/);
}
function getBackgroundColor(element) {
    if (!element) return '';
    const color = getComputedStyle(element).backgroundColor;
    if (isRGBA(color)) {
        return fromRGBAtoRGB(color);
    }
    return color ? toRGB(fromRGB(color)) : '';
}
function getForegroundColor(element) {
    if (!element) return '';
    const color = getComputedStyle(element).color;
    if (isRGBA(color)) {
        return fromRGBAtoRGB(color);
    }
    return color ? toRGB(fromRGB(color)) : '';
}
function isDarkTheme(element = document.body) {
    const color = getComputedStyle(element).backgroundColor;
    let rgb;
    if (isRGBA(color)) {
        rgb = fromRGB(fromRGBAtoRGB(color));
    } else {
        rgb = fromRGB(color);
    }
    if (!rgb) return true;
    return isDark(rgb);
}


/***/ }),

/***/ 44887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ hasPayloadLike)
/* harmony export */ });

function hasPayloadLike(text) {
    return text.includes('\u{1F3BC}') && text.includes(':||');
}


/***/ }),

/***/ 93995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ startWatch)
/* harmony export */ });
function startWatch(watcher, signal) {
    watcher.setDOMProxyOption({
        afterShadowRootInit: {
            mode: 'closed'
        },
        beforeShadowRootInit: {
            mode: 'closed'
        }
    }).startWatch({
        subtree: true,
        childList: true
    }, signal);
    return watcher;
}


/***/ }),

/***/ 20778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ar": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_1__.Ar),
/* harmony export */   "Cp": () => (/* reexport safe */ _CompositionContext__WEBPACK_IMPORTED_MODULE_3__.C),
/* harmony export */   "D4": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_1__.D4),
/* harmony export */   "EK": () => (/* reexport safe */ _entry_dom__WEBPACK_IMPORTED_MODULE_0__.EK),
/* harmony export */   "H9": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_2__.H9),
/* harmony export */   "KP": () => (/* reexport safe */ _entry_dom__WEBPACK_IMPORTED_MODULE_0__.KP),
/* harmony export */   "Nw": () => (/* reexport safe */ _CompositionContext__WEBPACK_IMPORTED_MODULE_3__.N),
/* harmony export */   "Pz": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_1__.Pz),
/* harmony export */   "eS": () => (/* reexport safe */ _entry_dom__WEBPACK_IMPORTED_MODULE_0__.eS),
/* harmony export */   "eT": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_2__.eT),
/* harmony export */   "fI": () => (/* reexport safe */ _entry_dom__WEBPACK_IMPORTED_MODULE_0__.fI),
/* harmony export */   "i1": () => (/* reexport safe */ _entry_dom__WEBPACK_IMPORTED_MODULE_0__.i1),
/* harmony export */   "je": () => (/* reexport safe */ _entry_dom__WEBPACK_IMPORTED_MODULE_0__.je),
/* harmony export */   "oQ": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_2__.oQ)
/* harmony export */ });
/* harmony import */ var _entry_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89239);
/* harmony import */ var _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34604);
/* harmony import */ var _PostContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86843);
/* harmony import */ var _CompositionContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2532);






/***/ }),

/***/ 89239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EK": () => (/* reexport safe */ _utils_createInjectHooksRenderer__WEBPACK_IMPORTED_MODULE_1__.E),
/* harmony export */   "KP": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.KP),
/* harmony export */   "Rc": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.Rc),
/* harmony export */   "eS": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.eS),
/* harmony export */   "fI": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.fI),
/* harmony export */   "i1": () => (/* reexport safe */ _entry__WEBPACK_IMPORTED_MODULE_0__.i1),
/* harmony export */   "je": () => (/* reexport safe */ _entry__WEBPACK_IMPORTED_MODULE_0__.je)
/* harmony export */ });
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);
/* harmony import */ var _utils_createInjectHooksRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77319);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98119);





/***/ }),

/***/ 17635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useAllPluginsWeb3State)
/* harmony export */ });
/* harmony import */ var _manager_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87434);
/* harmony import */ var _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34604);


function useAllPluginsWeb3State() {
    const pluginsSNSAdaptor = (0,_manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_1__/* .useActivatedPluginsSNSAdaptor */ .Pz)('any');
    const pluginsDashboard = (0,_manager_dashboard__WEBPACK_IMPORTED_MODULE_0__/* .useActivatedPluginsDashboard */ .eE)();
    const entries = [
        ...pluginsSNSAdaptor,
        ...pluginsDashboard
    ].filter((definition)=>definition.Web3State
    ).map((definition)=>[
            definition.ID,
            definition.Web3State
        ]
    );
    return Object.fromEntries(entries);
}


/***/ }),

/***/ 62294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useAvailablePlugins)
/* harmony export */ });
function useAvailablePlugins(plugins) {
    return plugins;
}


/***/ }),

/***/ 34604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ar": () => (/* binding */ useActivatedPluginSNSAdaptor_Web3Supported),
/* harmony export */   "D4": () => (/* binding */ startPluginSNSAdaptor),
/* harmony export */   "Pz": () => (/* binding */ useActivatedPluginsSNSAdaptor),
/* harmony export */   "tn": () => (/* binding */ useActivatedPluginSNSAdaptor)
/* harmony export */ });
/* unused harmony export useIsMinimalMode */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14257);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46123);
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32670);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93996);





const { events , activated , startDaemon , minimalMode  } = (0,_manage__WEBPACK_IMPORTED_MODULE_3__/* .createManager */ .m)((def)=>def.SNSAdaptor
);
const activatedSub = {
    getCurrentValue: ()=>[
            ...activated.plugins
        ]
    ,
    subscribe: (f)=>events.on('activateChanged', f)
};
const minimalModeSub = {
    getCurrentValue: ()=>[
            ...minimalMode
        ]
    ,
    subscribe: (f)=>events.on('minimalModeChanged', f)
};
function useActivatedPluginsSNSAdaptor(minimalModeEqualsTo) {
    const minimalMode1 = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(minimalModeSub);
    const result = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(activatedSub);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (minimalModeEqualsTo === 'any') return result;
        else if (minimalModeEqualsTo === true) return result.filter((x)=>minimalMode1.includes(x.ID)
        );
        else if (minimalModeEqualsTo === false) return result.filter((x)=>!minimalMode1.includes(x.ID)
        );
        (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .unreachable */ .t1)(minimalModeEqualsTo);
    }, [
        result,
        minimalMode1,
        minimalModeEqualsTo
    ]);
}
useActivatedPluginsSNSAdaptor.visibility = {
    useMinimalMode: useActivatedPluginsSNSAdaptor.bind(null, true),
    useNotMinimalMode: useActivatedPluginsSNSAdaptor.bind(null, false),
    useAnyMode: useActivatedPluginsSNSAdaptor.bind(null, 'any')
};
function useIsMinimalMode(pluginID) {
    return useSubscription(minimalModeSub).includes(pluginID);
}
/**
 *
 * @param pluginID Get the plugin ID
 * @param visibility Should invisible plugin included?
 * @returns
 */ function useActivatedPluginSNSAdaptor(pluginID, minimalModeEqualsTo) {
    const plugins = useActivatedPluginsSNSAdaptor(minimalModeEqualsTo);
    const minimalMode2 = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(minimalModeSub);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const result = plugins.find((x)=>x.ID === pluginID
        );
        if (!result) return result;
        if (minimalModeEqualsTo === 'any') return result;
        else if (minimalModeEqualsTo === true) {
            if (minimalMode2.includes(result.ID)) return result;
            return undefined;
        } else if (minimalModeEqualsTo === false) {
            if (minimalMode2.includes(result.ID)) return undefined;
            return result;
        }
        (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .unreachable */ .t1)(minimalModeEqualsTo);
    }, [
        pluginID,
        plugins,
        minimalMode2,
        minimalModeEqualsTo
    ]);
}
function useActivatedPluginSNSAdaptor_Web3Supported(chainId, pluginID) {
    const plugins = useActivatedPluginsSNSAdaptor('any');
    const entries = plugins.map((plugin)=>{
        if (!plugin.enableRequirement.web3) return [
            plugin.ID,
            true
        ];
        const supportedChainIds = plugin.enableRequirement.web3?.[pluginID]?.supportedChainIds;
        return [
            plugin.ID,
            supportedChainIds?.includes(chainId) ?? false
        ];
    });
    return Object.fromEntries(entries);
}
function startPluginSNSAdaptor(currentNetwork, host) {
    startDaemon(host, (id)=>{
        const def = (0,_store__WEBPACK_IMPORTED_MODULE_4__/* .getPluginDefine */ ._W)(id);
        if (!def) return false;
        // boolean | undefined
        const status = def.enableRequirement.networks.networks[currentNetwork];
        if (def.enableRequirement.networks.type === 'opt-in' && status !== true) return false;
        if (def.enableRequirement.networks.type === 'opt-out' && status === true) return false;
        return true;
    });
}


/***/ }),

/***/ 787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_2__.ri)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87245);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21627);



(0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .registerPlugin */ .fo)({
    ..._base__WEBPACK_IMPORTED_MODULE_1__/* .base */ .u,
    SNSAdaptor: {
        load: ()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(405), __webpack_require__.e(6316), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1675)]).then(__webpack_require__.bind(__webpack_require__, 56812))
        ,
        hotModuleReload: (hot)=>{
            /* unsupported import.meta.webpackHot */ undefined && 0;
        }
    },
    Worker: {
        load: ()=>__webpack_require__.e(/* import() */ 7524).then(__webpack_require__.bind(__webpack_require__, 97524))
        ,
        hotModuleReload: (hot)=>{
            /* unsupported import.meta.webpackHot */ undefined && 0;
        }
    }
});


/***/ }),

/***/ 55028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ RelationFavor)
/* harmony export */ });
var RelationFavor;
(function(RelationFavor) {
    RelationFavor[RelationFavor["COLLECTED"] = -1] = "COLLECTED";
    RelationFavor[RelationFavor["UNCOLLECTED"] = 1] = "UNCOLLECTED";
    RelationFavor[RelationFavor["DEPRECATED"] = 0] = "DEPRECATED";
})(RelationFavor || (RelationFavor = {}));


/***/ }),

/***/ 52684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FW": () => (/* binding */ DataProvider),
/* harmony export */   "P7": () => (/* binding */ LanguageOptions),
/* harmony export */   "iu": () => (/* binding */ SupportedLanguages),
/* harmony export */   "z4": () => (/* binding */ TradeProvider)
/* harmony export */ });
/* unused harmony exports Appearance, LaunchPage */
var Appearance;
(function(Appearance) {
    Appearance["default"] = "default";
    Appearance["light"] = "light";
    Appearance["dark"] = "dark";
})(Appearance || (Appearance = {}));
var LaunchPage;
(function(LaunchPage) {
    LaunchPage["facebook"] = "facebook";
    LaunchPage["twitter"] = "twitter";
    LaunchPage["dashboard"] = "dashboard";
})(LaunchPage || (LaunchPage = {}));
var DataProvider;
(function(DataProvider) {
    DataProvider[DataProvider["COIN_GECKO"] = 0] = "COIN_GECKO";
    DataProvider[DataProvider["COIN_MARKET_CAP"] = 1] = "COIN_MARKET_CAP";
    DataProvider[DataProvider["UNISWAP_INFO"] = 2] = "UNISWAP_INFO";
})(DataProvider || (DataProvider = {}));
var TradeProvider;
(function(TradeProvider) {
    TradeProvider[TradeProvider["UNISWAP_V2"] = 0] = "UNISWAP_V2";
    TradeProvider[TradeProvider["ZRX"] = 1] = "ZRX";
    TradeProvider[TradeProvider["SUSHISWAP"] = 2] = "SUSHISWAP";
    TradeProvider[TradeProvider["SASHIMISWAP"] = 3] = "SASHIMISWAP";
    TradeProvider[TradeProvider["BALANCER"] = 4] = "BALANCER";
    TradeProvider[TradeProvider["QUICKSWAP"] = 5] = "QUICKSWAP";
    TradeProvider[TradeProvider["PANCAKESWAP"] = 6] = "PANCAKESWAP";
    TradeProvider[TradeProvider["DODO"] = 7] = "DODO";
    TradeProvider[TradeProvider["UNISWAP_V3"] = 8] = "UNISWAP_V3";
    TradeProvider[TradeProvider["BANCOR"] = 9] = "BANCOR";
    TradeProvider[TradeProvider["OPENOCEAN"] = 10] = "OPENOCEAN";
    TradeProvider[TradeProvider["WANNASWAP"] = 11] = "WANNASWAP";
    TradeProvider[TradeProvider["TRISOLARIS"] = 12] = "TRISOLARIS";
    TradeProvider[TradeProvider["TRADERJOE"] = 13] = "TRADERJOE";
    TradeProvider[TradeProvider["PANGOLIN"] = 14] = "PANGOLIN";
    TradeProvider[TradeProvider["MDEX"] = 15] = "MDEX";
    TradeProvider[TradeProvider["VENOMSWAP"] = 16] = "VENOMSWAP";
    TradeProvider[TradeProvider["OPENSWAP"] = 17] = "OPENSWAP";
    TradeProvider[TradeProvider["DEFIKINGDOMS"] = 18] = "DEFIKINGDOMS";
})(TradeProvider || (TradeProvider = {}));
var LanguageOptions;
(function(LanguageOptions) {
    LanguageOptions["__auto__"] = 'auto';
    LanguageOptions["enUS"] = 'en-US';
    LanguageOptions["zhCN"] = 'zh-CN';
    LanguageOptions["zhTW"] = 'zh-TW';
    LanguageOptions["koKR"] = 'ko-KR';
    LanguageOptions["jaJP"] = 'ja-JP';
})(LanguageOptions || (LanguageOptions = {}));
var SupportedLanguages;
(function(SupportedLanguages) {
    SupportedLanguages["enUS"] = 'en-US';
    SupportedLanguages["zhCN"] = 'zh-CN';
    SupportedLanguages["zhTW"] = 'zh-TW';
    SupportedLanguages["koKR"] = 'ko-KR';
    SupportedLanguages["jaJP"] = 'ja-JP';
})(SupportedLanguages || (SupportedLanguages = {}));


/***/ }),

/***/ 43477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "e": () => (/* reexport */ generateContactAvatarColor)
});

;// CONCATENATED MODULE: ../shared-base/src/color/avatar.ts
function generateContactAvatarColor(input, theme) {
    // eslint-disable-next-line unicorn/no-array-reduce
    const hash = [
        ...input
    ].reduce((prev, current)=>{
        // eslint-disable-next-line no-bitwise
        const next = current.charCodeAt(0) + (prev << 5) - prev;
        // eslint-disable-next-line no-bitwise
        return next & next;
    }, 0);
    const values = [
        hash % 360,
        theme === 'dark' ? '78%' : '98%',
        theme === 'dark' ? '50%' : '70%'
    ];
    return `hsl(${values.join(', ')})`;
}

;// CONCATENATED MODULE: ../shared-base/src/color/index.ts



/***/ }),

/***/ 45816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C9": () => (/* reexport */ register_ns/* createI18NBundle */.C),
  "BV": () => (/* reexport */ i18NextInstance),
  "BF": () => (/* reexport */ updateLanguage)
});

// EXTERNAL MODULE: ../shared-base/src/i18n/register-ns.ts
var register_ns = __webpack_require__(79717);
// EXTERNAL MODULE: ../public-api/src/index.ts
var src = __webpack_require__(60718);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next@21.8.2/node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(35927);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next-browser-languagedetector@6.1.4/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js + 2 modules
var i18nextBrowserLanguageDetector = __webpack_require__(52647);
;// CONCATENATED MODULE: ../shared-base/src/i18n/instance.ts



const i18NextInstance = i18next/* default */.ZP;
if (false) {}
if (!i18next/* default.isInitialized */.ZP.isInitialized) {
    i18next/* default.use */.ZP.use(i18nextBrowserLanguageDetector/* default */.Z).init({
        keySeparator: false,
        interpolation: {
            escapeValue: false
        },
        contextSeparator: '$',
        fallbackLng: {
            'zh-CN': [
                'zh-TW',
                'en'
            ],
            'zh-TW': [
                'zh-CN',
                'en'
            ],
            default: [
                'en'
            ]
        },
        defaultNS: 'mask',
        nonExplicitSupportedLngs: true,
        detection: {
            order: [
                'navigator'
            ]
        }
    });
}
function updateLanguage(next) {
    if (next === src/* LanguageOptions.__auto__ */.P7.__auto__) {
        const result = i18next/* default.services.languageDetector.detect */.ZP.services.languageDetector.detect();
        i18next/* default.changeLanguage */.ZP.changeLanguage(result[0] || src/* LanguageOptions.enUS */.P7.enUS);
    } else {
        i18next/* default.changeLanguage */.ZP.changeLanguage(next);
    }
}

;// CONCATENATED MODULE: ../shared-base/src/i18n/index.ts




/***/ }),

/***/ 42381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ CSSVariableInjector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76618);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83300);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _applyToDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31180);




function CSSVariableInjector(props) {
    const { current: useConsistentTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(props.useTheme || _mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const colorScheme = useConsistentTheme().palette.mode;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        styles: (0,_applyToDOM__WEBPACK_IMPORTED_MODULE_2__/* .CSSVariableInjectorCSS */ .P)(colorScheme)
    });
}


/***/ }),

/***/ 70950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ useDialogStackActor),
/* harmony export */   "y": () => (/* binding */ DialogStackingProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);


const StackingScopeEnabled = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
const Stack = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    level: -1,
    onHideChange (shouldHide) {}
});
/**
 * If you're using <Dialog> on its own and you want to support DialogStack, please use this hook.
 *
 * Your dialog component MUST support the following attributes with the same semantics with MUI Dialog component.
 *
 * - disableEscapeKeyDown
 * - disableScrollLock
 * - hideBackdrop
 * - style
 * - aria-hidden
 * - open
 * - transitionDuration
 * @example
 * function SomeComponent() {
 *     const [open, setOpen] = useState(false)
 *     const { shouldReplaceExitWithBack, extraProps } = useDialogStackConsumer(open)
 *     return <IncreaseStack>
 *         <button onClick={() => setOpen(true)}></button>
 *         <Dialog open={open} {...extraProps}>
 *             You MUST hide Close button and and BackButton based on the value of `shouldReplaceExitWithBack`
 *         </Dialog>
 *     </IncreaseStack>
 * }
 */ function useDialogStackActor(open) {
    const selfID = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(Math.random());
    const featureEnabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StackingScopeEnabled);
    const { level: upperLevel , onHideChange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Stack);
    // this is an object that stores all request hiding state of it's decedents.
    // e.g for component tree:
    // <Dialog1> (selfID=0)
    // ---- <Dialog2> (selfID=1)
    // ---- <Dialog3> (selfID=2)
    //
    // When dialog2 opened, it will set hide of Dialog1 to { 1: true }
    // If any value in hide is true, it means one of it decedents requested to hide this parent.
    const [hide1, setHide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const LatestOnHideChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(onHideChange);
    LatestOnHideChange.current = onHideChange;
    // Here we rely on the assumption that level is impossible to change.
    // because it requires a reorder in the component tree, which is not possible to happen
    // in React's reconciliation algorithm
    const Increase = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    if (!Increase.current) {
        Increase.current = function IncreaseStackLevel(props) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Stack.Provider, {
                children: props.children,
                value: {
                    level: upperLevel + 1,
                    onHideChange: (hide)=>{
                        setHide((val)=>({
                                ...val,
                                [selfID.current]: hide
                            })
                        );
                    }
                }
            });
        };
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!featureEnabled) return LatestOnHideChange.current(false);
        LatestOnHideChange.current(open);
    }, [
        featureEnabled,
        open
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return ()=>LatestOnHideChange.current(false)
        ;
    }, []);
    const returnVal = {
        shouldReplaceExitWithBack: upperLevel !== -1,
        extraProps: {
            open
        },
        IncreaseStack: Increase.current
    };
    if (!featureEnabled || !open) return returnVal;
    if (returnVal.shouldReplaceExitWithBack) {
        returnVal.extraProps.transitionDuration = 0;
    }
    if (Object.values(hide1).some(Boolean)) {
        returnVal.extraProps = {
            ...returnVal.extraProps,
            disableEscapeKeyDown: true,
            disableScrollLock: true,
            hideBackdrop: true,
            style: {
                visibility: 'hidden'
            },
            'aria-hidden': true
        };
    }
    return returnVal;
}
/**
 * This Provider can turn any `MaskDialog` or `InjectedDialog` in the subtree into a unified dialog.
 *
 * For example:
 *
 * ```tsx
 * <DialogStackingProvider>
 *    <Dialog1>
 *        <Dialog2></Dialog2>
 *    </Dialog1>
 * </DialogStackingProvider>
 * ```
 *
 * When Dialog1 and Dialog2 both opened, only Dialog2 will be visible and the left top button
 * becomes "BackArrow".
 */ function DialogStackingProvider(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StackingScopeEnabled.Provider, {
        children: props.children,
        value: !props.disabled
    });
}


/***/ }),

/***/ 18499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ ShadowRootIsolation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26736);
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6414);
/* harmony import */ var _ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48488);

/* eslint-disable react-hooks/rules-of-hooks */ 



/**
 * Render it's children inside a ShadowRoot to provide style isolation.
 */ function ShadowRootIsolation({ children , ...props }) {
    const disabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts__WEBPACK_IMPORTED_MODULE_3__/* .DisableShadowRootContext */ .AZ)).current;
    if (disabled) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        ...props,
        children: children
    });
    const [dom, setDOM] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const container = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    if (!container.current) {
        container.current = document.createElement('div');
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        if (!dom) return;
        if (dom.shadowRoot) return;
        const shadow = dom.attachShadow({
            mode: 'open'
        });
        shadow.appendChild(container.current);
    }, [
        dom
    ]);
    if (!dom?.shadowRoot) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        ...props,
        ref: (x)=>x !== dom ? setDOM(x) : undefined
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_4__/* .ShadowRootStyleProvider */ .q, {
            shadow: dom.shadowRoot,
            children: /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(children, container.current)
        })
    });
}


/***/ }),

/***/ 29938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ StyleSheet)
/* harmony export */ });
const shadowHeadMap = new WeakMap();
const constructableStyleSheetEnabled = true;
// There are 2 rendering mode of this ShadowRootStyleSheet.
// 1. If the host supports ConstructableStyleSheet proposal:
//      It is the fastest but only Chrome supports it.
// 2. style tags that being synchronize between all ShadowRoot.
//      See https://github.com/emotion-js/emotion/blob/main/packages/sheet/src/index.js
//      Note: We cannot use .sheet.insertRule (so called "speedy mode") because in our app,
//            the host of a ShadowRoot might be detached from the DOM and reattach to another place,
//            when a <style> tag is disconnected from the DOM, it's CSSStyleSheet object will be dropped.
class StyleSheet {
    addContainer(container) {
        this.implementation.addContainer(container, this.key);
    }
    hydrate() {
        throw new Error('Does not support SSR.');
    }
    insert(rule) {
        if (false) {}
        this.implementation.insert(rule);
    }
    flush() {
        this.implementation.flush();
        this._alreadyInsertedOrderInsensitiveRule = false;
    }
    constructor(options){
        // Unlucky, emotion will create it's own StyleSheet and use isSpeedy, tags, keys and container for Global components.
        this.tags = [];
        this.container = document.createElement('div');
        this.isSpeedy = false;
        this._alreadyInsertedOrderInsensitiveRule = false;
        this.key = options.key;
        if (options.container instanceof ShadowRoot) {
            this.implementation = constructableStyleSheetEnabled && 'adoptedStyleSheets' in Document.prototype ? new ConstructableStyleSheet() : new SynchronizeStyleSheet();
            this.addContainer(options.container);
            Reflect.set(this.container, 'sheet', this);
        } else {
            // global style
            const un_global = Reflect.get(options.container, 'sheet');
            if (!(un_global instanceof StyleSheet)) throw new TypeError();
            return {
                tags: [],
                key: options.key,
                insert: un_global.implementation.insertGlobal.bind(un_global.implementation),
                flush: un_global.implementation.flushGlobal.bind(un_global.implementation)
            };
        }
    }
}
class ConstructableStyleSheet {
    addContainer(container) {
        if (this.added.has(container)) return;
        this.added.add(container);
        container.adoptedStyleSheets = [
            this.globalSheet,
            ...container.adoptedStyleSheets || [],
            this.sheet
        ];
    }
    insert(rule) {
        insertRuleSpeedy(this.sheet, rule);
    }
    insertGlobal(rule) {
        insertRuleSpeedy(this.globalSheet, rule);
    }
    flush() {
        this.sheet.replaceSync('');
    }
    flushGlobal() {
        this.globalSheet.replaceSync('');
    }
    constructor(){
        this.sheet = new CSSStyleSheet();
        this.globalSheet = new CSSStyleSheet();
        this.added = new WeakSet();
    }
}
class SynchronizeStyleSheet {
    addContainer(container, tag) {
        if (this.containers.has(container)) return;
        // setup tags
        const head = getShadowRootHead(container);
        const localContainer = document.createElement('div');
        localContainer.dataset.styleContainer = tag;
        head.appendChild(localContainer);
        this.containers.set(container, localContainer);
        {
            const style = createStyleElement();
            style.dataset.globalStyleOf = tag;
            head.insertBefore(style, head.firstChild);
            this.globalStyles.set(container, style);
        }
        // copy styles
        const first = this.containers.entries().next();
        if (first.done) return; // there is no previous styles. we are done.
        const frag = document.createDocumentFragment();
        for (const x of first.value[1].children){
            frag.appendChild(x.cloneNode(true));
        }
        localContainer.appendChild(frag);
    }
    insert(rule) {
        if (this.ctr % 25 === 0) {
            this._insertTag();
        }
        for (const container of this.containers.values()){
            const tag = container.lastElementChild;
            tag.appendChild(document.createTextNode(rule));
        }
        this.ctr += 1;
    }
    insertGlobal(rule) {
        for (const style of this.globalStyles.values()){
            style.appendChild(document.createTextNode(rule));
        }
    }
    flush() {
        for (const container of this.containers.values()){
            for (const tag of container.children){
                tag.remove();
            }
        }
        this.ctr = 0;
    }
    flushGlobal() {
        this.globalStyles.forEach((x)=>x.innerText = ''
        );
    }
    constructor(){
        this.ctr = 0;
        this.containers = new Map();
        this._insertTag = ()=>{
            for (const container of this.containers.values()){
                container.appendChild(createStyleElement());
            }
        };
        this.globalStyles = new Map();
    }
}
function getShadowRootHead(shadow) {
    if (!shadowHeadMap.has(shadow)) {
        const head = document.createElement('head');
        shadowHeadMap.set(shadow, head);
        shadow.insertBefore(head, shadow.firstChild);
    }
    return shadowHeadMap.get(shadow);
}
function createStyleElement() {
    const tag = document.createElement('style');
    tag.appendChild(document.createTextNode(''));
    return tag;
}
function insertRuleSpeedy(sheet, rule) {
    try {
        sheet.insertRule(rule, sheet.cssRules.length);
    } catch (error) {
        if (false) {}
    }
}


/***/ }),

/***/ 42519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ createReactRootShadowedPartial)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70195);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21122);
/* harmony import */ var _ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48488);
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6414);






/**
 * @returns
 * A function that render the JSX in the ShadowRoot with emotion support.
 *
 * This function should be only call once for each config.key.
 */ function createReactRootShadowedPartial(hostConfig) {
    return function createReactRootShadowed(shadowRoot, options = {}) {
        let jsx = '';
        let root = null;
        function tryRender() {
            if (options.signal?.aborted) return;
            if (shadowRoot.host?.parentNode === null) return void setTimeout(tryRender, 20);
            root = mount(jsx, shadowRoot, options, hostConfig);
        }
        tryRender();
        return {
            render: (_jsx1)=>{
                if (!root) jsx = _jsx1;
                else root.render(_jsx1);
            },
            destroy: ()=>root?.destroy()
        };
    };
}
function mount(jsx1, shadow, options, { preventEventPropagationList , wrapJSX  }) {
    const tag = options.tag || 'main';
    const key = options.key || 'main';
    if (shadow.querySelector(`${tag}.${key}`)) {
        console.error('Tried to create root in', shadow, 'with key', key, ' which is already used. Skip rendering.');
        return {
            destroy: lodash_unified__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
            render: lodash_unified__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
        };
    }
    jsx1 = getJSX(jsx1);
    const container = shadow.appendChild(document.createElement(tag));
    container.className = key;
    const controller = new AbortController();
    const signal = controller.signal;
    // prevent event popup
    {
        const stop = (e)=>e.stopPropagation()
        ;
        for (const each of preventEventPropagationList){
            container.addEventListener(each, stop, {
                signal
            });
        }
    }
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__/* .createRoot */ .s)(container);
    root.render(jsx1);
    signal.addEventListener('abort', ()=>[
            root.unmount(),
            container.remove()
        ]
    , {
        signal
    });
    options.signal?.addEventListener('abort', ()=>controller.abort()
    , {
        signal
    });
    return {
        destroy: ()=>controller.abort()
        ,
        render: (jsx)=>{
            root.render(getJSX(jsx));
        }
    };
    function getJSX(jsx) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.StrictMode, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Contexts__WEBPACK_IMPORTED_MODULE_4__/* .PreventEventPropagationListContext.Provider */ .gt.Provider, {
                value: preventEventPropagationList,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_3__/* .ShadowRootStyleProvider */ .q, {
                    shadow: shadow,
                    children: wrapJSX ? wrapJSX(jsx) : jsx
                })
            })
        });
    }
}


/***/ }),

/***/ 88973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ez": () => (/* binding */ isCoreTypedMessages),
  "YN": () => (/* reexport */ empty/* isTypedMessageEmpty */.Y),
  "KV": () => (/* reexport */ promise/* isTypedMessagePromise */.K),
  "Rz": () => (/* reexport */ core_text/* isTypedMessageText */.Rz),
  "bZ": () => (/* reexport */ isTypedMessageTuple),
  "qT": () => (/* reexport */ isTypedMessageTupleSerializable),
  "WM": () => (/* reexport */ empty/* makeTypedMessageEmpty */.W),
  "as": () => (/* reexport */ makeTypedMessageImage),
  "Ng": () => (/* reexport */ promise/* makeTypedMessagePromise */.N),
  "P": () => (/* reexport */ core_text/* makeTypedMessageText */.P),
  "Zw": () => (/* reexport */ makeTypedMessageTuple),
  "n_": () => (/* reexport */ makeTypedMessageTupleFromList),
  "kT": () => (/* reexport */ makeTypedMessageTupleSerializable),
  "mv": () => (/* reexport */ unknown/* makeTypedMessageUnknown */.m)
});

// UNUSED EXPORTS: isTypedMessageImage, isTypedMessageTextV1, isTypedMessageUnknown, makeTypedMessageSerializableTupleFromList

// EXTERNAL MODULE: ../typed-message/base/core/empty.ts
var empty = __webpack_require__(77401);
// EXTERNAL MODULE: ../typed-message/base/core/text.ts
var core_text = __webpack_require__(6057);
// EXTERNAL MODULE: ../typed-message/base/utils/internal.ts
var internal = __webpack_require__(88554);
;// CONCATENATED MODULE: ../typed-message/base/core/image.ts

const isTypedMessageImage = (0,internal/* createIsType */.uO)('image');
function makeTypedMessageImage(image, size, meta) {
    return {
        type: 'image',
        serializable: false,
        image,
        width: size?.width,
        height: size?.height,
        meta
    };
}

// EXTERNAL MODULE: ../typed-message/base/utils/index.ts
var utils = __webpack_require__(97637);
;// CONCATENATED MODULE: ../typed-message/base/core/tuple.ts


const isTypedMessageTuple = (x)=>x.type === 'tuple'
;
const isTypedMessageTupleSerializable = (0,internal/* composeEvery */.mo)(isTypedMessageTuple, utils/* isSerializableTypedMessage */.fV);
function makeTypedMessageTuple(items, meta) {
    return {
        type: 'tuple',
        items,
        meta
    };
}
function makeTypedMessageTupleFromList(...args) {
    return {
        type: 'tuple',
        items: args
    };
}
function makeTypedMessageTupleSerializable(items, meta) {
    return {
        type: 'tuple',
        version: 1,
        serializable: true,
        items,
        meta
    };
}
function makeTypedMessageSerializableTupleFromList(...args) {
    return {
        type: 'tuple',
        version: 1,
        items: args,
        serializable: true
    };
}

// EXTERNAL MODULE: ../typed-message/base/core/unknown.ts
var unknown = __webpack_require__(95157);
// EXTERNAL MODULE: ../typed-message/base/core/promise.ts
var promise = __webpack_require__(76572);
;// CONCATENATED MODULE: ../typed-message/base/core/index.ts













const isCoreTypedMessages = (0,internal/* composeSome */.Vm)(empty/* isTypedMessageEmpty */.Y, core_text/* isTypedMessageText */.Rz, isTypedMessageImage, isTypedMessageTuple, unknown/* isTypedMessageUnknown */.q, promise/* isTypedMessagePromise */.K);


/***/ }),

/***/ 61436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "bj": () => (/* reexport */ isTypedMessageAnchor),
  "$6": () => (/* reexport */ MaskPayload/* isTypedMessageMaskPayload */.$),
  "SY": () => (/* binding */ isWellKnownExtensionTypedMessages),
  "Jv": () => (/* reexport */ makeTypedMessageAnchor),
  "Jq": () => (/* reexport */ MaskPayload/* makeTypedMessageMaskPayload */.J)
});

// EXTERNAL MODULE: ../typed-message/base/utils/internal.ts
var internal = __webpack_require__(88554);
// EXTERNAL MODULE: ../typed-message/base/core/index.ts + 2 modules
var core = __webpack_require__(88973);
;// CONCATENATED MODULE: ../typed-message/base/extension/anchor.ts


const isTypedMessageAnchor = (0,internal/* createIsType */.uO)('x-anchor');
function makeTypedMessageAnchor(category, href, content) {
    return {
        type: 'x-anchor',
        serializable: false,
        category,
        href,
        content,
        alt: (0,core/* makeTypedMessageText */.P)(`[${content}](${href})`)
    };
}

// EXTERNAL MODULE: ../typed-message/base/extension/MaskPayload.ts
var MaskPayload = __webpack_require__(85601);
;// CONCATENATED MODULE: ../typed-message/base/extension/index.ts





const isWellKnownExtensionTypedMessages = (0,internal/* composeSome */.Vm)(isTypedMessageAnchor, MaskPayload/* isTypedMessageMaskPayload */.$);


/***/ }),

/***/ 91810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ FlattenTypedMessage)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88973);
/* harmony import */ var _visitor_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59460);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97637);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18548);




function FlattenTypedMessage(message, context) {
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessagePromise */ .KV)(message) && message.promise.value) return message.promise.value;
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(message)) {
        const next = message.items.map((x)=>FlattenTypedMessage(x, context)
        ).flatMap((x)=>(0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(x) ? x.meta ? x : x.items : x
        ).filter((x)=>!(0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageEmpty */ .YN)(x)
        )// eslint-disable-next-line unicorn/no-array-reduce
        .reduce((result, current)=>{
            const lastItem = result.at(-1);
            if (!lastItem || lastItem.meta || current.meta) return result.concat(current);
            if (!(0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageText */ .Rz)(current) || !(0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageText */ .Rz)(lastItem)) return result.concat(current);
            // Only concat when last one and current one are both text and have no meta.
            result.pop();
            result.push((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageText */ .P)(`${lastItem.content} ${current.content}`));
            return result;
        }, []);
        if (!message.meta) {
            if (next.length === 0) return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageEmpty */ .WM)();
            if (next.length === 1) return next[0];
        }
        if (next.every(_utils_index_js__WEBPACK_IMPORTED_MODULE_2__/* .isSerializableTypedMessage */ .fV)) return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageTupleSerializable */ .kT)(next, message.meta);
        return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageTuple */ .Zw)(next, message.meta);
    }
    return (0,_visitor_index_js__WEBPACK_IMPORTED_MODULE_1__/* .visitEachTypedMessageChild */ .I)(message, FlattenTypedMessage, context);
}
FlattenTypedMessage.NoContext = (message)=>FlattenTypedMessage(message, _context_js__WEBPACK_IMPORTED_MODULE_3__/* .emptyTransformationContext */ .v)
;


/***/ }),

/***/ 33801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ composeTransformers)
/* harmony export */ });
function composeTransformers() {
    const event = new EventTarget();
    const onUpdate = ()=>event.dispatchEvent(new Event('update'))
    ;
    const transformers = new Set();
    function composed(message, context) {
        // eslint-disable-next-line unicorn/no-array-reduce
        return [
            ...transformers
        ].sort((a, b)=>b[1] - a[1]
        ).reduce((p, [c])=>c(p, context)
        , message);
    }
    const subscription = {
        getCurrentValue: ()=>(message, context)=>composed(message, context)
        ,
        subscribe (f) {
            event.addEventListener('update', f);
            return ()=>{
                event.removeEventListener('update', f);
            };
        }
    };
    return {
        subscription,
        addTransformer (t, priority, signal) {
            const f_priority = [
                typeof t === 'function' ? t : (message, context)=>t.getCurrentValue()(message, context)
                ,
                priority, 
            ];
            transformers.add(f_priority);
            onUpdate();
            const cancelSubscription = typeof t === 'function' ? ()=>{} : t.subscribe(onUpdate);
            const remove = ()=>{
                transformers.delete(f_priority);
                cancelSubscription();
                onUpdate();
            };
            signal?.addEventListener('abort', remove);
            return remove;
        }
    };
}


/***/ }),

/***/ 11514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ parseLink)
/* harmony export */ });
/* harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5670);

function parseLink(text) {
    // ESM-CJS cooperation
    const parsed = anchorme__WEBPACK_IMPORTED_MODULE_0__/* ["default"].list */ .Z.list(text);
    const result = [];
    let start = 0;
    for (const x1 of parsed){
        if (x1.isURL) {
            result.push({
                type: 'text',
                content: text.slice(start, x1.start)
            });
            result.push({
                type: 'link',
                content: x1.string,
                category: 'normal'
            });
        } else {
            result.push({
                type: 'text',
                content: text.slice(start, x1.end)
            });
        }
        start = x1.end;
    }
    result.push({
        type: 'text',
        content: text.slice(start, text.length)
    });
    return result.filter((x)=>x.content
    ).flatMap((x)=>x.type === 'text' ? parseTag(x.content) : x
    );
}
const TagLike = /([#$@][\w\-]+)/g;
const map = {
    '@': 'user',
    '#': 'hash',
    $: 'cash'
};
function parseTag(x2) {
    return x2.split(TagLike).map((x)=>TagLike.test(x) ? {
            type: 'link',
            content: x,
            category: map[x[0]] || 'normal'
        } : {
            type: 'text',
            content: x
        }
    );
}


/***/ }),

/***/ 77213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ hasCircular)
/* harmony export */ });
function hasCircular(message) {
    try {
        JSON.stringify(message);
        return false;
    } catch (err) {
        console.warn('[@masknet/typed-message] TypedMessage', message, 'may contains circular structure. Skip rendering.');
        return true;
    }
}


/***/ }),

/***/ 30003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "oP": () => (/* reexport */ DefaultRenderFragments),
  "gE": () => (/* reexport */ RegistryContext),
  "l3": () => (/* reexport */ RenderFragmentsContext),
  "QJ": () => (/* reexport */ TUPLE_RENDER_STYLE),
  "FG": () => (/* reexport */ TextResizeContext),
  "T6": () => (/* reexport */ TransformationContextProvider),
  "lG": () => (/* reexport */ TransformerProvider),
  "Ot": () => (/* reexport */ TypedMessageRender),
  "mC": () => (/* reexport */ Metadata/* createRenderWithMetadata */.mC),
  "Bi": () => (/* reexport */ Metadata/* createTypedMessageMetadataReader */.Bi),
  "dR": () => (/* reexport */ createTypedMessageRenderRegistry),
  "r1": () => (/* reexport */ Metadata/* editTypedMessageMeta */.r1),
  "CB": () => (/* reexport */ useTransformedValue)
});

// UNUSED EXPORTS: TypedMessageRenderInline, editMetadata, getKnownMetadataKeys, getMetadataSchema, isDataMatchJSONSchema, readTypedMessageMetadataUntyped, registerMetadataSchema, renderWithMetadataUntyped, useMetadataRender

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Core/Unknown.tsx

/** @internal */ const TypedMessageUnknownRenderer = /*#__PURE__*/ (0,react.memo)(function TypedMessageUnknownRenderer(props) {
    const warned = (0,react.useRef)(false);
    if (!warned.current) {
        warned.current = true;
        console.warn('[@masknet/typed-message] Trying to render an unknown TypedMessage (or a known TypedMessage with no renderer) with props', props);
    }
    return null;
});

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/utils/RegistryContext.tsx

const RegistryContext = /*#__PURE__*/ (0,react.createContext)(()=>{
    console.error('[@masknet/typed-message] Please create a TypedMessageRenderRegistry and provide it via RegistryContext');
    return undefined;
});

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/utils/RenderFragments.tsx


const DefaultRenderFragments = {
    Text: /*#__PURE__*/ (0,react.memo)((props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: props.children
        })
    ),
    Link: /*#__PURE__*/ (0,react.memo)((props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
            href: props.href,
            target: "_blank",
            rel: "noopener noreferrer",
            children: props.children
        })
    ),
    Image: /*#__PURE__*/ (0,react.memo)((props)=>props.width === 0 ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            src: props.src,
            width: props.width,
            height: props.height
        })
    ),
    Metadata: /*#__PURE__*/ (0,react.memo)(()=>null
    )
};
const RenderFragmentsContext = /*#__PURE__*/ (0,react.createContext)(DefaultRenderFragments);

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/utils/TextResizerContext.tsx

const TextResizeContext = /*#__PURE__*/ (0,react.createContext)(false);
/** @internal */ function useTextResize(shouldEnable) {
    const hasTextEnlarge = (0,react.useContext)(TextResizeContext);
    const [element, setElement] = (0,react.useState)(null);
    const enable = hasTextEnlarge && shouldEnable;
    (0,react.useEffect)(()=>{
        if (!element || !enable) return;
        const updateFontSize = ()=>{
            const length = Array.from(element.innerText).length;
            let fontSize = 1;
            if (length < 45) fontSize = 1.5;
            else if (length < 80) fontSize = 1.2;
            element.style.fontSize = `${fontSize}rem`;
        };
        updateFontSize();
    // const watcher = new MutationObserver(updateFontSize)
    // watcher.observe(element, { subtree: true, childList: true, characterData: true })
    // return () => watcher.disconnect()
    }, [
        enable,
        element
    ]);
    return setElement;
}

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Entry.tsx






function TypedMessageRender(props) {
    const { Container ='p'  } = (0,react.useContext)(RenderFragmentsContext);
    const isEmpty = props.message.type === 'empty';
    const textResize = useTextResize(!isEmpty);
    if (isEmpty) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        ref: textResize,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Container, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TypedMessageRenderInline, {
                ...props
            })
        })
    });
}
function TypedMessageRenderInline(props) {
    const { message  } = props;
    const Registry = (0,react.useContext)(RegistryContext);
    if (message.type === 'empty') return null;
    const Render = Registry(message.type)?.component || TypedMessageUnknownRenderer;
    if (false) {}
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Render, {
        ...message
    });
}

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/MetadataRender.tsx



function useMetadataRender(message) {
    const { Metadata  } = (0,react.useContext)(RenderFragmentsContext);
    if (!Metadata || !message.meta) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Metadata, {
        metadata: message.meta,
        message: message
    });
}

// EXTERNAL MODULE: ../typed-message/dom/Renderer/utils/circularDetect.ts
var circularDetect = __webpack_require__(77213);
;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Core/Tuple.tsx





// TODO: remove this after we switch to inline rendering of Mask payload.
const TUPLE_RENDER_STYLE = 'TUPLE_RENDER_STYLE';
const TypedMessageTupleRenderer = /*#__PURE__*/ (0,react.memo)(function TypedMessageTupleRenderer(props) {
    const meta = useMetadataRender(props);
    if ((0,react.useMemo)(()=>(0,circularDetect/* hasCircular */.N)(props.items)
    , [
        props.items
    ])) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        style: Object(props.meta?.get(TUPLE_RENDER_STYLE)),
        children: [
            props.items.map((message, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TypedMessageRenderInline, {
                    ...props,
                    message: message
                }, index)
            ),
            meta
        ]
    });
});

// EXTERNAL MODULE: ../typed-message/base/utils/parseLink.ts
var parseLink = __webpack_require__(11514);
;// CONCATENATED MODULE: ../typed-message/dom/Renderer/utils/renderText.tsx




/** @internal */ const RenderTextFragment = /*#__PURE__*/ (0,react.memo)(function RenderText(props) {
    const { Text =DefaultRenderFragments.Text  } = (0,react.useContext)(RenderFragmentsContext);
    return /*#__PURE__*/ (0,react.createElement)(react.Fragment, {}, ...parseText(props.text, Text));
});
/** @internal */ const RenderLinkFragment = /*#__PURE__*/ (0,react.memo)(function RenderLink(props) {
    const { children , href , category  } = props;
    const context = (0,react.useContext)(RenderFragmentsContext);
    const { Text =DefaultRenderFragments.Text , Link =DefaultRenderFragments.Link , AtLink =Text , CashLink =Text , HashLink =Text ,  } = context;
    if (category === 'cash') return /*#__PURE__*/ (0,jsx_runtime.jsx)(CashLink, {
        children: children
    });
    if (category === 'hash') return /*#__PURE__*/ (0,jsx_runtime.jsx)(HashLink, {
        children: children
    });
    if (category === 'user') return /*#__PURE__*/ (0,jsx_runtime.jsx)(AtLink, {
        children: children
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link, {
        children: children,
        href: href
    });
});
function parseText(string, Text) {
    const links = (0,parseLink/* parseLink */.V)(string).flatMap((x1)=>{
        if (x1.type === 'text') {
            return sliceString(x1.content).map((x)=>x === '\n' ? /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Text, {
                    children: x
                })
            );
        }
        if (x1.category === 'normal' && !x1.content.match(/^https?:\/\//gi)) x1.content = 'http://' + x1.content;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(RenderLinkFragment, {
            category: x1.category,
            href: x1.content,
            children: x1.content
        });
    });
    return links;
}
function sliceString(x) {
    const result = [];
    let pos = 0;
    let index = x.indexOf('\n');
    if (index === -1) return [
        x
    ];
    while(index !== -1){
        result.push(x.slice(pos, index), '\n');
        pos = index + 1;
        index = x.indexOf('\n', pos);
    }
    result.push(x.slice(pos));
    return result.filter(Boolean);
}

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Core/Text.tsx




const TypedMessageTextRenderer = /*#__PURE__*/ (0,react.memo)(function TypedMessageTextRenderer(props) {
    const { content  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RenderTextFragment, {
                text: content
            }),
            useMetadataRender(props)
        ]
    });
});

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Core/Image.tsx




const TypedMessageImageRenderer = /*#__PURE__*/ (0,react.memo)(function TypedMessageImageRenderer(props) {
    const { Image =DefaultRenderFragments.Image  } = (0,react.useContext)(RenderFragmentsContext);
    const { image , width , height  } = props;
    const [blobSrc, setBlobSrc] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        if (typeof image === 'string') return;
        const src = URL.createObjectURL(image);
        setBlobSrc(src);
        return ()=>{
            setBlobSrc(null);
            URL.revokeObjectURL(src);
        };
    }, [
        image
    ]);
    const finalSrc = blobSrc || image;
    const meta = useMetadataRender(props);
    if (typeof finalSrc !== 'string') return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Image, {
                src: finalSrc,
                width: width,
                height: height
            }),
            meta
        ]
    });
});

// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(80681);
;// CONCATENATED MODULE: ../typed-message/dom/Renderer/utils/TransformContext.ts


const TransformerProvider = (0,react.createContext)((x)=>x
);
const TransformationContextProvider = (0,react.createContext)(base/* emptyTransformationContext */.vg);
function useTransformedValue(message) {
    const transformer = (0,react.useContext)(TransformerProvider);
    const context = (0,react.useContext)(TransformationContextProvider);
    return (0,react.useMemo)(()=>{
        return message ? transformer(message, context) : undefined;
    }, [
        message,
        transformer,
        context
    ]);
}

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Core/Promise.tsx




const TypedMessagePromiseRenderer = /*#__PURE__*/ (0,react.memo)(function TypedMessagePromiseRenderer(props) {
    const { promise , alt  } = props;
    const _ = (0,react.useState)(0)[1];
    const rerender = ()=>_(Math.random())
    ;
    (0,react.useEffect)(()=>{
        promise.then(rerender);
    }, [
        promise,
        _
    ]);
    const transformedValue = useTransformedValue(promise.value);
    if (transformedValue) return /*#__PURE__*/ (0,jsx_runtime.jsx)(TypedMessageRenderInline, {
        message: transformedValue
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: alt ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TypedMessageRenderInline, {
            message: alt
        }) : null,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Await, {
            promise: promise
        })
    });
});
function Await(props) {
    throw props.promise;
}

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Extension/Anchor.tsx



const TypedMessageAnchorRenderer = /*#__PURE__*/ (0,react.memo)(function TypedMessageAnchorRenderer(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(RenderLinkFragment, {
        category: props.category,
        children: props.content,
        href: props.href
    });
});

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/registry.tsx






function createTypedMessageRenderRegistry() {
    const registry = new Map();
    const event = new EventTarget();
    function registerTypedMessageRender(type, config) {
        if (!registry.has(type)) registry.set(type, new Map());
        const map = registry.get(type);
        const id = config.id;
        map.set(id, config);
        event.dispatchEvent(new Event('update'));
        return ()=>{
            map.delete(id);
            event.dispatchEvent(new Event('update'));
        };
    }
    function getTypedMessageRender(type) {
        return Array.from(registry.get(type)?.values() || []).sort((a, b)=>b.priority - a.priority
        )[0];
    }
    const subscription = {
        // generate a new function everytime to make sure old !== new
        getCurrentValue: ()=>(type)=>getTypedMessageRender(type)
        ,
        subscribe: (f)=>{
            event.addEventListener('update', f);
            return ()=>event.removeEventListener('update', f)
            ;
        }
    };
    registerTypedMessageRender('text', {
        component: TypedMessageTextRenderer,
        id: Symbol('std.text'),
        priority: 0
    });
    registerTypedMessageRender('image', {
        component: TypedMessageImageRenderer,
        id: Symbol('std.image'),
        priority: 0
    });
    registerTypedMessageRender('unknown', {
        component: TypedMessageUnknownRenderer,
        id: Symbol('std.unknown'),
        priority: 0
    });
    registerTypedMessageRender('tuple', {
        component: TypedMessageTupleRenderer,
        id: Symbol('std.tuple'),
        priority: 0
    });
    registerTypedMessageRender('promise', {
        component: TypedMessagePromiseRenderer,
        id: Symbol('std.promise'),
        priority: 0
    });
    // Extension
    registerTypedMessageRender('x-anchor', {
        component: TypedMessageAnchorRenderer,
        id: Symbol('std.anchor'),
        priority: 0
    });
    return {
        registerTypedMessageRender,
        getTypedMessageRender,
        subscription
    };
}

// EXTERNAL MODULE: ../typed-message/dom/Metadata/index.ts
var Metadata = __webpack_require__(93179);
;// CONCATENATED MODULE: ../typed-message/dom/index.ts
// Render


// Render behavior


// Render Registry



// Transformation

// Metadata



/***/ }),

/***/ 19769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cy": () => (/* binding */ DeBank),
/* harmony export */   "HJ": () => (/* binding */ Alchemy_FLOW),
/* harmony export */   "IC": () => (/* binding */ MagicEden),
/* harmony export */   "KN": () => (/* binding */ Zerion),
/* harmony export */   "Nn": () => (/* binding */ OpenSea),
/* harmony export */   "S5": () => (/* binding */ RSS3),
/* harmony export */   "bC": () => (/* binding */ Explorer),
/* harmony export */   "bb": () => (/* reexport safe */ _opensea_utils__WEBPACK_IMPORTED_MODULE_20__.bb),
/* harmony export */   "cl": () => (/* binding */ KeyValue),
/* harmony export */   "de": () => (/* binding */ Alchemy_EVM),
/* harmony export */   "e": () => (/* binding */ GoPlusLabs),
/* harmony export */   "e8": () => (/* binding */ Rarible),
/* harmony export */   "mr": () => (/* binding */ Instagram),
/* harmony export */   "no": () => (/* binding */ TokenList),
/* harmony export */   "oD": () => (/* binding */ CoinGecko),
/* harmony export */   "q7": () => (/* binding */ NextIDProof),
/* harmony export */   "qy": () => (/* binding */ RiskWarning),
/* harmony export */   "tL": () => (/* binding */ Twitter),
/* harmony export */   "v0": () => (/* binding */ MetaSwap),
/* harmony export */   "wA": () => (/* binding */ NextIDStorage),
/* harmony export */   "yR": () => (/* binding */ EthereumWeb3)
/* harmony export */ });
/* unused harmony exports NFTScan, Zora */
/* harmony import */ var _coingecko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49889);
/* harmony import */ var _opensea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1478);
/* harmony import */ var _rarible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52698);
/* harmony import */ var _NFTScan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34231);
/* harmony import */ var _zora__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(11379);
/* harmony import */ var _explorer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38858);
/* harmony import */ var _risk_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51827);
/* harmony import */ var _rss3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65186);
/* harmony import */ var _kv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98311);
/* harmony import */ var _twitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90586);
/* harmony import */ var _token_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37894);
/* harmony import */ var _instagram__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(24986);
/* harmony import */ var _debank__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90131);
/* harmony import */ var _zerion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23975);
/* harmony import */ var _metaswap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44253);
/* harmony import */ var _gopluslabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(29128);
/* harmony import */ var _NextID__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(38641);
/* harmony import */ var _alchemy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(65520);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(47769);
/* harmony import */ var _MagicEden__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(73765);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7541);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3779);
/* harmony import */ var _opensea_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(87893);























const OpenSea = new _opensea__WEBPACK_IMPORTED_MODULE_1__/* .OpenSeaAPI */ .r();
const MagicEden = new _MagicEden__WEBPACK_IMPORTED_MODULE_17__/* .MagicEdenAPI */ .K();
const Rarible = new _rarible__WEBPACK_IMPORTED_MODULE_2__/* .RaribleAPI */ .I();
const NFTScan = new _NFTScan__WEBPACK_IMPORTED_MODULE_3__/* .NFTScanAPI */ .U();
const Zora = new _zora__WEBPACK_IMPORTED_MODULE_21__/* .ZoraAPI */ .c();
const CoinGecko = new _coingecko__WEBPACK_IMPORTED_MODULE_0__/* .CoinGeckoAPI */ .J();
const Explorer = new _explorer__WEBPACK_IMPORTED_MODULE_4__/* .NativeExplorerAPI */ .b();
const RiskWarning = new _risk_warning__WEBPACK_IMPORTED_MODULE_5__/* .RiskWarningAPI */ .o();
const RSS3 = new _rss3__WEBPACK_IMPORTED_MODULE_6__/* .RSS3API */ .M();
const KeyValue = new _kv__WEBPACK_IMPORTED_MODULE_7__/* .KeyValueAPI */ .Z();
const Twitter = new _twitter__WEBPACK_IMPORTED_MODULE_8__/* .TwitterAPI */ .I();
const Instagram = new _instagram__WEBPACK_IMPORTED_MODULE_22__/* .InstagramAPI */ .l();
const GoPlusLabs = new _gopluslabs__WEBPACK_IMPORTED_MODULE_13__/* .GoPlusLabsAPI */ .g();
const TokenList = new _token_list__WEBPACK_IMPORTED_MODULE_9__/* .TokenListAPI */ .U();
const DeBank = new _debank__WEBPACK_IMPORTED_MODULE_10__/* .DeBankAPI */ .V();
const Zerion = new _zerion__WEBPACK_IMPORTED_MODULE_11__/* .ZerionAPI */ .C();
const MetaSwap = new _metaswap__WEBPACK_IMPORTED_MODULE_12__/* .MetaSwapAPI */ .t();
const NextIDStorage = new _NextID__WEBPACK_IMPORTED_MODULE_14__/* .NextIDStorageAPI */ .I();
const EthereumWeb3 = new _web3__WEBPACK_IMPORTED_MODULE_16__/* .EthereumWeb3API */ .F();
const NextIDProof = new _NextID__WEBPACK_IMPORTED_MODULE_14__/* .NextIDProofAPI */ .N();
const Alchemy_EVM = new _alchemy__WEBPACK_IMPORTED_MODULE_15__/* .Alchemy_EVM_API */ .m8();
const Alchemy_FLOW = new _alchemy__WEBPACK_IMPORTED_MODULE_15__/* .Alchemy_FLOW_API */ .k0();


/***/ }),

/***/ 91339:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Cq": () => (/* reexport */ assertNonNull),
  "Yl": () => (/* reexport */ typescript_enum/* getEnumAsArray */.Y),
  "GT": () => (/* reexport */ isNonNull),
  "P": () => (/* reexport */ control_flow/* safeUnreachable */.P),
  "t1": () => (/* reexport */ control_flow/* unreachable */.t)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/typescript/control-flow.js
var control_flow = __webpack_require__(86598);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/typescript/enum.js
var typescript_enum = __webpack_require__(35972);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/typescript/nonNull.js
function assertNonNull(val, message = 'Unexpected nil value detected') {
    if (val === null || val === undefined)
        throw new Error(message);
    return val;
}
function isNonNull(x) {
    return x !== undefined && x !== null;
}
//# sourceMappingURL=nonNull.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/typescript/index.js



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7101:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ abortSignalTimeout)
/* harmony export */ });
/** @deprecated Use [AbortSignal.timeout](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout) instead. */
function abortSignalTimeout(ms) {
    const x = new AbortController();
    setTimeout(() => x.abort(), ms);
    return x.signal;
}
//# sourceMappingURL=abortSignalTimeout.js.map

/***/ })

}]);