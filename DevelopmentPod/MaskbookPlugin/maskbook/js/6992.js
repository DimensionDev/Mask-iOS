"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6992],{

/***/ 69157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ TabContext),
/* harmony export */   "_i": () => (/* binding */ useTabContext),
/* harmony export */   "pQ": () => (/* binding */ getTabId),
/* harmony export */   "uU": () => (/* binding */ getPanelId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71999);


/**
 * @type {React.Context<{ idPrefix: string; value: string } | null>}
 */


const Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

if (false) {}

function useUniquePrefix() {
  const [id, setId] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    setId(`mui-p-${Math.round(Math.random() * 1e5)}`);
  }, []);
  return id;
}

function TabContext(props) {
  const {
    children,
    value
  } = props;
  const idPrefix = useUniquePrefix();
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      idPrefix,
      value
    };
  }, [idPrefix, value]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider, {
    value: context,
    children: children
  });
}
 false ? 0 : void 0;
/**
 * @returns {unknown}
 */

function useTabContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);
}
function getPanelId(context, value) {
  const {
    idPrefix
  } = context;

  if (idPrefix === null) {
    return null;
  }

  return `${context.idPrefix}-P-${value}`;
}
function getTabId(context, value) {
  const {
    idPrefix
  } = context;

  if (idPrefix === null) {
    return null;
  }

  return `${context.idPrefix}-T-${value}`;
}

/***/ }),

/***/ 86248:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(36260);
} else {}


/***/ }),

/***/ 15011:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../dashboard/src/entry.tsx + 2 modules
var entry = __webpack_require__(51347);
;// CONCATENATED MODULE: ./shared-ui/locales/en-US.json
const en_US_namespaceObject = JSON.parse('{"database_backup":"Backup Database","database_overwrite":"Overwrite Database with backup","database_clear":"Clear Database","debug_new_bug_issue":"New bug issue","debug_metadata_title":"Add new metadata or replace existing metadata","debug_metadata_put_metadata":"Put metadata","edit":"Edit","clear":"Clear","more":"More","approve":"Approve","address":"Address","operation":"Operation","gas_limit":"Gas Limit","gas_price":"Gas Price","redirect_to":"Redirect to","sign":"Sign","reload":"Reload","load":"Load","load_all":"Load All","no_data":"No Data","tip":"Tip","tags":"Tags","contract":"Contract","initializing":"Initializing...","redirect_alert":"If your browser does not redirect, please <terms>click here</terms>.","typed_message_text_alert":"Only TypedMessageText is supported currently.","badge_renderer_provided_by_plugin":"Provided by plugin","add_token":"Add Token","add_nft_contract_search_hint":"Search NFT Contract Symbol Name or Address","applications":"Applications","additional_post_box__encrypted_post_pre":"Decrypt this post with #mask_io ! {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet_twitter_official_account":"Hi, claim this lucky drop with #mask_io @{{account}} {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet":"Hi, claim this lucky drop with #mask_io {{encrypted}}","additional_post_box__steganography_post_pre":"This image is encrypted with #mask_io. 📪🔑 Install mask.io to decrypt it. {{random}}","auto_paste_failed_dialog_title":"Paste manually","auto_paste_failed_dialog_content":"Please copy the following text and image (if there is any) and publish it.","auto_paste_failed_dialog_image_caption":"Open in a new tab","auto_paste_failed_snackbar":"Do you need to paste encrypted content manually?","auto_paste_failed_snackbar_action":"Show me how","auto_paste_failed_snackbar_action_close":"Close","automation_request_click_post_button":"Please click the “Post” button to open the compose dialog.","try_again":"Try Again","ok":"OK","start":"Start","cancel":"Cancel","twitter_account":"realMaskNetwork","facebook_account":"masknetwork","comment_box__placeholder":"Add an encrypted comment…","confirm":"Confirm","copy_text":"Copy text","loading_failed":"Loading failed","copy_image":"Copy image","copy_success_of_wallet_addr":"Copy wallet address successfully!","copy_success_of_text":"Copy text successfully!","copy_success_of_image":"Copy image successfully!","connecting":"Connecting…","create":"Create","copied":"Copied","daily":"Daily","dashboard_tab_collectibles":"Collectibles","dashboard_no_collectible_found":"No collectible found.","dashboard_collectible_menu_all":"All ({{count}})","days":"Every {{days}} days","decrypted_postbox_add_recipients":"Append recipients","decrypted_postbox_decrypting":"Mask decrypting…","decrypted_postbox_decoding":"Mask decoding…","decrypted_postbox_decrypting_finding_person_key":"Mask is looking for the public key of the author…","decrypted_postbox_decrypting_finding_post_key":"Mask is retrieving the post key to decrypt this post…","decrypted_postbox_author_mismatch":"Originally posted by {{name}}","decrypted_postbox_title":"Decrypted by Mask:","dismiss":"Dismiss","delete":"Delete","delete_wallet":"Delete Wallet","hide_token":"Hide Token","hide_token_hint":"You can add <strong>{{token}}</strong> back in the future by going to \\"Add Token\\" in the wallet panel.","done":"Done!","download":"Download","failed":"Failed","buy_now":"Buy Now","setup_guide_login":"Please sign up or log in to connect Mask network.","setup_guide_find_username_text":"Mask needs the username to connect your profile to your persona.","setup_guide_connect_auto":"Connect","setup_guide_connect_failed":"Re-Connect","setup_guide_verify":"Verfiy","setup_guide_verify_should_change_profile":"Inconsistent Account","setup_guide_verify_dismiss":"Don\'t show again.","setup_guide_verify_checking":"Checking","setup_guide_verify_post_not_found":"No verification post found","setup_guide_verifying":"Verfiying","setup_guide_verifying_failed":"Re-Verfiy","user_guide_tip_connected":"You have connected to this account successfully.","user_guide_tip_need_verify_on_next_id":"Mask Network requires you to post a verification tweet to access Next.ID-based products.","setup_guide_say_hello_content":"Hello Mask world. This is my first encrypted message. Install https://mask.io to send me encrypted post. ","setup_guide_say_hello_follow":"Follow {{account}} to explore Web 3.0.","setup_guide_pin_tip":"Don\'t forget to pin Mask Network in your browser toolbar to access web 3.0 easily.","setup_guide_pin_tip_step_click_left":"Click on ","setup_guide_pin_tip_step_click_right":" at top right of your browser.","setup_guide_pin_tip_step_find_left":"Find Mask Network in the list of extensions and click the ","setup_guide_pin_tip_step_find_right":" button.","setup_guide_pin_tip_successfully":"Pinned successfully.","user_guide_tip_1":"Connect wallet to explore multi-chain dApps.","user_guide_tip_2":"Setup your exclusive NFT Avatar, explore the endless possibilities of Web 3.0.","user_guide_tip_3":"Click here to have a quick start.","create_persona":"Create persona","connect_persona":"Connect persona","please_create_persona":"Please create persona","please_connect_persona":"Please connect persona","mask_network":"Mask Network","import":"Import","no_search_result":"No result","set_nft_profile_photo":"Set NFT Photo","use_nft":"Use NFT","loading":"Loading...","unlock":"Unlock","payload_bad":"This post seems to be corrupted. Mask cannot decrypt it.","payload_incomplete":"This post is incomplete. You need to view the full post to decrypt it.","payload_not_found":"Payload not found.","payload_throw_in_alpha41":"Support for Alpha41 is deprecated. Tell your friends to upgrade Mask!","personas":"Personas","browser_action_enter_dashboard":"Enter Dashboard","pending":"Pending...","popups_initial_tips":"Please sign in or sign up to use the {{type}}.","beta_sup":"<sup>(beta)<sup>","post_dialog_plugins_experimental":"Plugins <sup>(Experimental)</sup>","post_dialog__button":"Encrypt","post_dialog__image_payload":"Image Payload","post_dialog__more_options_title":"More Options","post_dialog__placeholder":"Text goes here…","post_dialog__select_recipients_end_to_end":"Myself","post_dialog__select_recipients_share_to_everyone":"Everyone","post_dialog__select_recipients_title":"Select Recipients","post_dialog__select_specific_e2e_target_title":"and Mask Network users ({{selected}} selected)","post_dialog__title":"Mask: Compose","post_dialog_enable_paste_auto":"Enable auto paste","post_modal_hint__button":"Compose encrypted post","hide":"Hide","reset":"Reset","editor":"Editor","retry":"Retry","rename":"Rename","search":"Search","go_wrong":"Something went wrong.","search_box_placeholder":"Type here to search","select_all":"Select All","select_none":"Select None","all_friends":"All Friends","select_specific_friends_dialog__button":"Done","select_specific_friends_dialog__title":"Select Specific Contacts","service_decryption_failed":"Decryption failed.","service_invalid_backup_file":"This does not seem like a backup of Mask.","service_unknown_payload":"Unknown post version. You may need to update Mask.","service_username_invalid":"Invalid Username","speed_up":"Speed up","save":"Save","skip":"Skip","next":"Next","try":"Try","share":"Share","share_to":"Share to…","sharing":"Sharing","transfer":"Transfer","export":"Export","wallet_load_retry":"Failed to load {{symbol}}. Click to retry.","wallet_name":"Wallet Name","wallet_rename":"Rename Wallet","wallet_add_nft_invalid_owner":"The collectible does not belong to you.","wallet_add_nft_already_added":"The collectible has already been added.","wallet_loading_token":"Loading token...","wallet_loading_nft_contract":"Loading NFT contract...","wallet_search_contract_no_result":"No results or contract address does not meet the query criteria.","wallet_search_no_result":"No results.","wallet_confirm_with_password":"Confirm with password","wallet_airdrop_nft_unclaimed_title":"NFT Airdrop Unclaimed:","plugin_not_enabled":"{{plugin}} (Not Enabled)","plugin_external_unknown_plugin":"New unknown Mask plugins found. Do you want to load them?","plugin_external_loader_search_holder":"Search for an external plugin","plugin_external_loader_search_button":"Search for plugin","plugin_external_loader_search_sub_title":"Every external plugin has to hosted on an URL.","plugin_external_loader_alert":"IT WILL CHANGE. DO NOT BUILD OFFICIAL PRODUCT ON IT.","plugin_external_loader_example_github":"An official plugin example can be found at <terms>GitHub</terms>.","plugin_external_loader_intro":"Mask External plugin is an early stage feature of Mask Network that allows anyone to develop anexternal Mask plugin.","plugin_external_loader_alert_title":"External plugin: an experimental Mask Network feature!","plugin_external_plugin_url":"Plugin URL:","plugin_external_unverified_publisher":"Publisher: {{publisher}} (Unverified)","plugin_external_entry_title":"🧩 Load external plugins (Nightly feature)","plugin_external_name":"External plugin","plugin_external_get_started":"Let\'s get started","plugin_airdrop_nft_start_time":"Start Time: {{date}}","plugin_airdrop_nft_end_time":"End Time: {{date}}","plugin_airdrop_nft_expired":"Expired","plugin_airdrop_nft_claim":"Claim","plugin_airdrop_nft_claimed":"Claimed","plugin_airdrop_nft_check":"Check","plugin_airdrop_nft_check_address":"Check your Address","plugin_airdrop_nft_none_to_claim":"You don’t have airdrop to claim.","plugin_airdrop_nft_number_to_claim":"You have {{count}} {{name}} to claim.","plugin_airdrop_nft_claim_all":"Claim Token","plugin_airdrop_nft_claim_successful":"Token claimed successfully","plugin_airdrop_nft_claim_failed":"Token claimed failed","wallet_balance":"Balance","wallet_balance_eth":"Balance(ETH)","wallet_new":"New Wallet","wallets":"Wallets","wallet_status_button_change":"Change","wallet_status_button_disconnect":"Disconnect","wallet_status_button_disconnecting":"Disconnecting","wallet_status_button_copy_address":"Copy Address","wallet_transfer_account":"Transfer Account","wallet_transfer_receiving_account":"Receiving Account","wallet_transfer_to_address":"To Address","wallet_transfer_send":"Send","wallet_transfer_1559_placeholder":"Ens or Address(0x...)","wallet_transfer_title":"Transfer","wallet_transfer_error_amount_absence":"Enter an amount","wallet_transfer_error_address_absence":"Enter recipient address","wallet_transfer_error_same_address_with_current_account":"This receiving address is the same as the sending address. Please check again.","wallet_transfer_error_is_contract_address":"The receiving address is contract address. Please check again.","wallet_transfer_error_invalid_address":"Invalid recipient address","wallet_transfer_error_no_address_has_been_set_name":"The address of the receiver is invalid.","wallet_transfer_error_no_support_ens":"Network does not support ENS.","wallet_transfer_error_insufficient_balance":"Insufficient {{symbol}} balance","wallet_transfer_error_gas_price_absence":"Enter a gas price","wallet_transfer_error_gas_limit_absence":"Enter a gas limit","wallet_transfer_error_max_fee_absence":"Enter a max fee","wallet_transfer_error_max_priority_fee_absence":"Enter a max priority fee","wallet_transfer_error_max_fee_too_low":"Max fee is too low for network conditions.","wallet_transfer_error_max_fee_too_high":"Max fee is higher than necessary","wallet_transfer_error_max_priority_gas_fee_positive":"Max priority fee must be greater than 0 GWEI","wallet_transfer_error_max_priority_gas_fee_too_low":"Max priority fee is too low for network conditions","wallet_transfer_error_max_priority_gas_fee_too_high":"Max priority fee is higher than necessary. You may pay more than needed.","wallet_transfer_error_max_priority_gas_fee_imbalance":"Max fee cannot be lower than max priority fee","wallet_transfer_gwei":"GWEI","wallet_transfer_between_my_accounts":"Transfer between my accounts","wallet_risk_warning_dialog_title":"Risk Warning","wallet_risk_warning_no_select_wallet":"Not select wallet yet.","wallet_risk_warning_content":"Dear User,<br/><br/>When using any wallet-related plugins in Mask Network, please confirm the following usage risks:<br/><br/>Mask Network provides non-commercial free services. The plug-ins are provided by community members and other excellent third-party DApp teams. Due to the freedom of the decentralized network and other uncertain risk factors, users are requested to properly protect their sensitive information such as wallet mnemonic words and private keys. Please be cautious when conducting any blockchain contract interaction. The risks caused by any third-party DApps (plug-ins) are borne by the third-party DApps themselves. Clicking the confirm button means that you agree to bear the above possible risks.","weekly":"Weekly","wallet_risk_confirm_confirming":"Confirming","wallet_risk_confirm_failed":"Confirm Failed","relative_time_days_ago":"{{days}} days ago","relative_time_hours_ago":"{{hours}} hours ago","relative_time_minutes_ago":"{{minutes}} minutes ago","relative_time_months_ago":"{{months}} months ago","relative_time_seconds_ago":"{{seconds}} seconds ago","relative_time_years_ago":"{{years}} years ago","plugin_chain_not_supported":"Not supported on {{chain}} yet.","plugin_wallet_snackbar_wait_for_confirming":"Confirm this transaction in your wallet","plugin_wallet_snackbar_hash":"Transaction Submitted","plugin_wallet_snackbar_confirmed":"Transaction Confirmed","plugin_wallet_snackbar_success":"Transaction Succeed","plugin_wallet_snackbar_failed":"Transaction Failed","plugin_wallet_snackbar_swap_successful":"Successfully swapped Token","plugin_wallet_snackbar_swap_token":"Swap Token","plugin_wallet_guiding_step_1":"1. Choose Network","plugin_wallet_guiding_step_2":"2. Choose Wallet","plugin_wallet_connect_with":"Connect with","plugin_wallet_connect_with_retry":"Try Again","plugin_wallet_connected_with":"Connected with","plugin_wallet_connecting_with":"Connecting with","plugin_wallet_metamask_error_already_request":"You\'ve opened the popup, please confirm.","plugin_wallet_connect_tip":"Please make sure that your {{providerName}} wallet is provided by the offical <providerLink>{{providerShortenLink}}</providerLink>.","plugin_wallet_collections":"Collections","plugin_wallet_select_a_token":"Select a Token","plugin_wallet_select_a_nft_contract":"Select an NFT Contract","plugin_wallet_select_a_nft_owner":"Select an NFT Contract Owner","plugin_wallet_select_a_nft_operator":"Select an NFT Contract Operator","plugin_wallet_fail_to_load_nft_contract":"Failed to load NFT Contract. Click to retry.","plugin_wallet_nft_approving_all":"Unlocking {{symbol}}...","plugin_wallet_approve_all_nft":"Unlock {{symbol}}","plugin_wallet_approve_all_nft_successfully":"Unlock {{symbol}} successfully","plugin_wallet_connect_a_wallet":"Connect a Wallet","plugin_wallet_confirm_risk_warning":"Confirm Risk Warning","plugin_wallet_no_gas_fee":"No Gas Fee","plugin_wallet_update_gas_fee":"Updating Gas Fee…","plugin_wallet_invalid_network":"Invalid Network","plugin_wallet_select_a_wallet":"Select a Wallet","plugin_wallet_transaction":"Transaction","plugin_wallet_transaction_wait_for_confirmation":"Waiting for confirmation…","plugin_wallet_transaction_submitted":"Your transaction was submitted!","plugin_wallet_transaction_confirmed":"Your transaction was confirmed!","plugin_wallet_transaction_reverted":"Transaction was reverted!","plugin_wallet_transaction_rejected":"Transaction was rejected!","plugin_wallet_transaction_underpriced":"Transaction underpriced.","plugin_wallet_transaction_server_error":"Transaction was failed due to an internal JSON-RPC server error.","plugin_wallet_view_on_explorer":"View on Explorer","plugin_ito_placeholder_when_token_unselected":"Please Select a Token first","plugin_wallet_wrong_network_tip":"Please connect to an appropriate network.","plugin_wallet_on_create":"Create Wallet","plugin_wallet_on_connect":"Connect Wallet","plugin_wallet_wrong_network":"Wrong Network","plugin_wallet_pending_transactions":"{{count}} Pending","plugin_wallet_import_wallet":"Import Wallet","plugin_wallet_select_provider_dialog_title":"Connect Wallet","plugin_wallet_qr_code_with_wallet_connect":"Scan QR code with a WalletConnect-compatible wallet","plugin_wallet_token_unlock":"Exact Unlock","plugin_wallet_token_infinite_unlock":"Infinite Unlock","plugin_wallet_connect_dialog_title":"WalletConnect","plugin_wallet_connect_safari_metamask":"Connect to MetaMask","plugin_wallet_connect_safari_rainbow":"Connect to Rainbow","plugin_wallet_connect_safari_trust":"Connect to Trust","plugin_wallet_connect_safari_im_token":"Connect to imToken","plugin_wallet_on_connect_in_firefox":"Connect","plugin_wallet_return_mobile_wallet_options":"Return to Mobile Wallet Options","plugin_wallet_view_qr_code":"View QR Code","plugin_wallet_switch_network":"Switch to {{network}} Network","plugin_wallet_switch_network_under_going":"Switching to {{network}} Network…","plugin_wallet_not_available_on":"Not available on {{network}} Network.","plugin_wallet_connect_wallet":"Connect Wallet","plugin_wallet_connect_wallet_tip":"Please connect to a wallet.","plugin_wallet_name_placeholder":"Enter 1-12 characters","plugin_wallet_fail_to_sign":"Failed to sign password.","plugin_wallet_cancel_sign":"Signature canceled.","plugin_red_packet_display_name":"Plugin: Lucky Drop","plugin_red_packet_claimed":"Claimed","plugin_red_packet_erc20_tab_title":"Token","plugin_red_packet_erc721_tab_title":"Collectibles","plugin_red_packet_erc721_insufficient_balance":"Insufficient Balance","plugin_red_packet_details":"Lucky Drop Details","plugin_red_packet_split_mode":"Split Mode","plugin_red_packet_average":"Average","plugin_red_packet_random":"Random","plugin_red_packet_shares":"Shares","plugin_red_packet_best_wishes":"Best Wishes!","plugin_red_packet_create_new":"New","plugin_red_packet_claim":"Claim","plugin_red_packet_claiming":"Claiming...","plugin_red_packet_refund":"Refund","plugin_red_packet_empty":"Empty","plugin_red_packet_data_broken":"The Lucky Drop can’t be sent due to data damage. Please withdraw the assets after {{duration}}.","plugin_red_packet_refunding":"Refunding","plugin_red_packet_select_existing":"Past","plugin_red_packet_share_unclaimed_message_official_account":"Hi friends, I just found a lucky drop sent by @{{sender}} on {{network}} network. Follow @{{account}} (mask.io) to claim lucky drops.\\n#mask_io #LuckyDrop\\n{{payload}}","plugin_red_packet_share_unclaimed_message_not_twitter":"Hi friends, I just found a lucky drop sent by @{{sender}} on {{network}} network. \\n{{payload}}","plugin_red_packet_share_message_official_account":"I just claimed a lucky drop from @{{sender}} on {{network}} network. Follow @{{account}} (mask.io) to claim lucky drops.\\n#mask_io #LuckyDrop\\n{{payload}}","plugin_red_packet_share_message_not_twitter":"I just claimed a lucky drop from @{{sender}} on {{network}} network. \\n{{payload}}","plugin_red_packet_nft_share_foreshow_message":"@{{sender}} is sending an NFT lucky drop on {{network}} network. Follow @{{account}} (mask.io) to claim NFT lucky drops.\\n#mask_io #LuckyDrop\\n{{payload}}","plugin_red_packet_nft_share_foreshow_message_not_twitter":"@{{sender}} is sending an NFT lucky drop on {{network}} network. \\n{{payload}}","plugin_red_packet_nft_share_claimed_message":"I just claimed an NFT lucky drop from @{{sender}} on {{network}} network. Follow @{{account}} (mask.io) to claim NFT lucky drops.\\n#mask_io #LuckyDrop\\n{{payload}}","plugin_red_packet_nft_share_claimed_message_not_twitter":"I just claimed an NFT lucky drop from @{{sender}} on {{network}} network. \\n{{payload}}","plugin_red_packet_nft_tip":"This is an NFT lucky drop.","plugin_red_packet_nft_no_history":"You haven’t created any NFT lucky drop yet. Try to create and share lucky with your friends.","plugin_red_packet_attached_message":"Attached Message","plugin_red_packet_from":"From: @{{name}}","plugin_red_packet_description_claimed":"You got {{amount}} {{symbol}}","plugin_red_packet_description_expired":"The Lucky Drop is expired.","plugin_red_packet_description_refunded":"The Lucky Drop has been refunded.","plugin_red_packet_description_refund":"You could refund {{balance}} {{symbol}}.","plugin_red_packet_description_empty":"The Lucky Drop is empty.","plugin_red_packet_description_broken":"The Lucky Drop is broken.","plugin_red_packet_description_failover":"{{shares}} shares / {{total}} {{symbol}}","plugin_red_packet_claiming_from":"Claiming Lucky Drop from {{name}}","plugin_red_packet_amount_per_share":"Amount per Share","plugin_red_packet_send_symbol":"Send {{amount}} {{symbol}}","plugin_red_packet_amount_total":"Amount Total","plugin_red_packet_next":"Next","plugin_red_packet_back":"Back","plugin_red_packet_hint":"You can withdraw the remaining balance 24 hours after the Lucky Drop is sent.","plugin_red_packet_token":"Token","plugin_red_packet_message_label":"Title","plugin_red_packet_create":"Create a Lucky Drop","plugin_red_packet_create_with_token":"Create a Lucky Drop with {{amount}} {{symbol}}","plugin_red_packet_history_duration":"Time: {{startTime}} ~ {{endTime}} (UTC+8)","plugin_red_packet_history_total_amount":"Total Amount: {{amount}} {{symbol}}","plugin_red_packet_history_total_claimed_amount":"Total: <span><strong>{{claimedAmount}}/{{amount}}</strong></span> {{symbol}}","plugin_red_packet_history_claimed":"Claimed: <strong>{{claimedShares}}/{{shares}}</strong> Share","plugin_red_packet_history_split_mode":"Split Mode: {{mode}}","plugin_red_packet_history_send":"Send","plugin_nft_red_packet_create":"Create an NFT Lucky Drop","plugin_red_packet_nft_account_name":"Wallet account","plugin_red_packet_nft_attached_message":"Attached Message","plugin_red_packet_nft_total_amount":"Total Amount","plugin_red_packet_nft_select_collection":"Choose your collection","plugin_red_packet_nft_max_shares":"The maximum number of NFTs to be sold in NFT lucky drop contract is {{amount}}.","plugin_red_packet_nft_max_shares_tip":"The NFT lucky drop supports up to {{amount}} NFTs selected for one time.","plugin_red_packet_nft_shift_select_tip":"You can also use <text>{{text}}</text> to select multiple NFTs.","plugin_red_packet_nft_non_existed_tip":"Token ID <tokenIdList></tokenIdList> does not exist or belong to you.","plugin_red_packet_nft_select_all_option":"ALL ({{total}} NFT)","plugin_red_packet_nft_select_partially_option":"Select partially","plugin_red_packet_nft_unapproved_tip":"You can get the rest of your NFTs back after 24 hours of sending.","plugin_red_packet_nft_approve_all_tip":"Note: When selecting approve all, all NFTs in the contract will be authorized for sale by default, including the NFTs transfered later.","plugin_red_packet_completed":"Completed","plugin_red_packet_expired":"Expired","plugin_red_packet_indivisible":"The minimum amount for each share is {{amount}} {{symbol}}","plugin_nft_red_packet_data_broken":"The Lucky Drop can’t be sent due to data damage.","plugin_gitcoin_readme":"By using this service, you will also be contributing 5% of your contribution to the <fund>Gitcoin grants development fund</fund>.","plugin_gitcoin_readme_fund_link":"https://gitcoin.co/grants/86/gitcoin-sustainability-fund","plugin_gitcoin_select_a_token":"Select a token","plugin_gitcoin_enter_an_amount":"Enter an amount","plugin_gitcoin_grant_not_available":"Grant not available","plugin_gitcoin_insufficient_balance":"Insufficient {{symbol}} balance","plugin_gitcoin_donate":"Donate","plugin_gitcoin_last_updated":"Last update:","plugin_gitcoin_by":"By","plugin_gitcoin_view_on":"View on Gitcoin","plugin_trader_fail_to_load":"Fail to load trending info from  ","plugin_trader_lbp_pool_in_balancer":"LBP Pool in Balancer","plugin_trader_tutorial":"Tutorial","plugin_trader_what_is_lbp":"What\'s LBP?","plugin_trader_lbp_intro":"Solid blue line illustrates the historical price of {{symbol}} on the {{symbol}}\'s LBP. The price could continue to go down if no one buys. Please make your investment decision wisely.","plugin_trader_no_pools_found":"No pools found.","plugin_trader_safety_agree":"i understand","plugin_trader_view_on_etherscan":"View on Etherscan","plugin_trader_safety_alert_title":"Token Safety Alert","plugin_trader_safety_alert":"Anyone can create and name any ERC20 token on Ethereum, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token. Similar to Etherscan, this site automatically tracks analytics for all ERC20 tokens independent of token integrity. Please do your own research before interacting with any ERC20 token.","plugin_trader_total_supply":"Total Supply","plugin_trader_circulating_supply":"Circulating Supply","plugin_trader_volume_24":"Volume (24h)","plugin_trader_market_cap":"Market Cap","plugin_trader_data_source":"Data Source","plugin_trader_price_updated":"Price Updated","plugin_savings":"Savings","plugin_savings_asset":"Asset","plugin_no_protocol_available":"No savings protocols available on this network","plugin_savings_apr":"APR","plugin_savings_wallet":"Wallet","plugin_savings_operation":"Operation","plugin_savings_amount":"Amount","plugin_savings_deposit":"Deposit","plugin_savings_withdraw":"Withdraw","plugin_savings_process_deposit":"Processing Deposit","plugin_savings_process_withdraw":"Processing Withdrawal","plugin_trader_swap":"Swap","plugin_trader_wrap":"Wrap","plugin_trader_unwrap":"Unwrap","plugin_trader_buy":"Buy","plugin_trader_no_data":"No Data","plugin_trader_tab_market":"General","plugin_trader_tab_price":"Price","plugin_trader_tab_exchange":"Exchange","plugin_trader_tab_swap":"Swap 🔥","plugin_trader_table_exchange":"Exchange","plugin_trader_table_pair":"Pair","plugin_trader_table_price":"Price","plugin_trader_table_volume":"Volume (24h)","plugin_trader_table_updated":"Updated","plugin_trader_error_amount_absence":"Enter an amount","plugin_trader_error_insufficient_balance":"Insufficient {{symbol}} balance","plugin_trader_error_insufficient_lp":"Insufficient liquidity for this trade","plugin_trade_error_input_amount_less_minimum_amount":"Input amount is below the minimum amount","plugin_trader_slippage_tolerance":"Slippage Tolerance:","plugin_trader_swap_from":"From","plugin_trader_swap_to":"To(estimated)","plugin_trader_gas_fee":"Gas fee","plugin_trader_unlock_symbol":"Unlock {{symbol}}","plugin_trader_unlock_tips":"You must give the {{provider}} Smart contracts permission to use your {{symbol}}.You only have to do this once per token.","plugin_trader_swap_amount_symbol":"Swap {{amount}} {{symbol}} ","plugin_trader_confirm_from":"From","plugin_trader_confirm_to":"To","plugin_trader_confirm_max_price_slippage":"Max Price Slippage","plugin_trader_confirm_minimum_received":"Minimum Received","plugin_trader_confirm_tips":"Setting the max price slippage too low may cause a trade to fail due to price fluctuations.","plugin_trader_price_impact_warning_tips":"Setting the max price slippage too high may cause the minimum amount returned lower than the amount desired.","plugin_trader_confirm_swap":"Confirm Swap","plugin_trader_accept":"Accept","plugin_trader_price_impact":"Price Impact","plugin_trader_price_image_value":"Price Impact ({{percent}})","plugin_trader_slippage_warning":"You may receive 10% less with this level of slippage tolerance.","plugin_trader_confirm_price_impact":"Confirm Price Impact {{percent}}","plugin_trader_max_slippage":"Max Slippage","plugin_trader_gas_setting_instant":"Instant","plugin_trader_gas_setting_high":"High","plugin_trader_gas_setting_medium":"Medium","plugin_trader_gas_setting_standard":"Standard","plugin_trader_gas_setting_fast":"Fast","plugin_trader_gas_setting_custom":"Custom","plugin_trader_tx_cost_usd":"(~${{usd}})","plugin_trader_gas_option":"{{option}} ({{value}}) Gwei","plugin_trader_no_enough_liquidity":"No enough liquidity","plugin_trader_no_trade":"Please select a trade","plugin_trader_gas":"GAS","plugin_poll_display_name":"Plugin: Poll","plugin_poll_question_hint":"Ask a question…","plugin_poll_options_hint":"choice","plugin_poll_length":"Poll length","plugin_poll_length_days":"Days","plugin_poll_length_hours":"Hours","plugin_poll_length_minutes":"Minutes","plugin_poll_length_unknown":"Unknown","plugin_poll_create_new":"Create New","plugin_poll_select_existing":"Past","plugin_poll_send_poll":"Send Poll","plugin_poll_status_closed":"Closed","plugin_poll_status_voting":"Voting","plugin_poll_status_voted":"Voted.","plugin_poll_deadline":"{{time}} left until vote ends","plugin_ito_empty_token":"No need to unlock any token on this ITO.","plugin_ito_locked":"ITO locked","plugin_ito_share":"Share","plugin_ito_enter":"Enter","plugin_ito_dialog_swap_title":"Swap {{token}}","plugin_ito_dialog_swap_reminder_title":"Swap Reminder","plugin_ito_dialog_swap_unlock_title":"Unlock Token In Advance","plugin_ito_dialog_swap_share_title":"Share","plugin_ito_dialog_swap_exchange":"In exchange for","plugin_ito_dialog_swap_panel_title":"Swap","plugin_ito_dialog_swap_exceed_wallet_limit":"Exceeds single wallet limit","plugin_ito_swap_ration_label":"Swap Ratio","plugin_ito_swap_unlucky_fail":"Not lucky enough, please check the reason from the Etherscan link, then try it again.","plugin_ito_swap_only_once_remind":"Each wallet can only participate once.","plugin_ito_swap_title":"{{amount}} {{token}} per {{swap}} ","plugin_ito_swap_end_date":"End in {{date}}.","plugin_ito_dialog_claim_reminder_agree":"I Understand","plugin_ito_dialog_claim_reminder_text1":"Anyone can create a token on {{networkType}} with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.","plugin_ito_dialog_claim_reminder_text2":"This interface can load arbitrary tokens by token address. Please take extra caution and do your own research when interacting with arbitrary tokens.","plugin_ito_dialog_claim_reminder_text3":"If you purchase an arbitrary token, you might not be able to sell it back.","plugin_ito_dialog_claim_reminder_text4":"THE RIGHTS ARE NOT BEING OFFERED OR SOLD AND MAY NOT BE OFFERED OR SOLD, DIRECTLY OR INDIRECTLY, IN WHOLE OR IN PART, IN JURISDICTIONS OR TO WHOM SUCH AN OFFER WOULD BE UNLAWFUL.","plugin_ito_expired":"Expired","plugin_ito_create_new":"New","plugin_ito_claim_all_title":"Claim Token","plugin_ito_claim_all_status_unclaimed":"Unclaimed","plugin_ito_claim_all_status_locked":"Locked","plugin_ito_claim_all_unlock_time":"Unlock Time: {{time}}","plugin_ito_claim_all_dialog_title":"Claim Your Tokens","plugin_ito_swapping":"You will get {{amount}} {{symbol}} if you are lucky. Otherwise, you will receive a refund if the ITO out of stock hits.","plugin_ito_advanced":"Advanced","plugin_ito_advanced_ip_region":"IP Region Restrictions","plugin_ito_advanced_delay_unlocking":"Delay Unlocking Token","plugin_ito_advanced_contract":"Plugin Contract","plugin_ito_select_existing":"Past","plugin_ito_display_name":"ITO Composition Dialog","plugin_ito_sell_token":"Token","plugin_ito_sell_price":"Price","plugin_ito_sell_total_amount":"Input","plugin_ito_allocation_per_wallet":"Swap Limit {{limit}} {{token}}","plugin_ito_allocation_per_wallet_title":"Swap Limit","plugin_ito_begin_time_title":"Start Time","plugin_ito_wait_unlock_time":"Claim after {{unlockTime}} (UTC+8)","plugin_ito_claim":"Claim","plugin_ito_claiming":"Claiming...","plugin_ito_claim_all":"Claim All","plugin_ito_qualification_start_time":"Qualification Start Time:","plugin_ito_error_qualification_start_time":"Invalid: Qualification start time should be earlier than ITO end time","plugin_ito_end_time_title":"End Time","plugin_ito_error_invalid_qualification":"Invalid Qualification Address","plugin_ito_unlock_time_cert":"ITO Mask unlock time is {{date}}.","plugin_ito_unlock_time":"Unlock Time","plugin_ito_launch_campaign":"SocialFi Launch Campaign","plugin_ito_total_claimable_count":"Total: ","plugin_ito_qualification_label":"Plugin Contract","plugin_ito_message_label":"Title","plugin_ito_region_label":"IP Region Selection","plugin_ito_region_confirm_label":"IP Region","plugin_ito_region_list":"{{ select }} / {{ all }} regions","plugin_ito_region_all":"All regions","plugin_ito_region_search":"Type region name to search","plugin_ito_region_ban":"This Pool is banned by its creator at your region","plugin_ito_next":"Next","plugin_ito_back":"Back","plugin_ito_transaction_dialog_summary_with_no_token":"Create an ITO.","plugin_ito_transaction_dialog_summary":"Create an ITO with {{amount}} {{symbol}}.","plugin_ito_swap":"Swap","plugin_ito_send_tip":"You can find your ITOs in the Past tab.","plugin_ito_send_text":"Send {{total}} {{symbol}}","plugin_ito_error_enter_amount":"Enter an amount","plugin_ito_error_select_token":"Select a Token","plugin_ito_error_enter_amount_and_token":"Enter an amount and Select a token","plugin_ito_error_allocation_absence":"Enter swap limit","plugin_ito_error_allocation_invalid":"Invalid amount","plugin_ito_error_exchange_time":"Invalid: start time cannot be later than end time","plugin_ito_error_unlock_time":"Invalid: end time cannot be later than unlock time","plugin_ito_error_balance":"Insufficient {{symbol}} balance","plugin_ito_list_start_date":"Start Time {{date}}","plugin_ito_list_end_date":"End Time {{date}}","plugin_ito_list_sold_total":"Swapped: ","plugin_ito_list_total":"Total: ","plugin_ito_list_table_type":"Type","plugin_ito_list_table_price":"Swap Ratio","plugin_ito_no_claimable_token":"Your wallet address does not have any tokens that can be claimed.","plugin_ito_list_table_sold":"Swapped","plugin_ito_list_table_got":"Balance","plugin_ito_list_button_send":"Send","plugin_ito_withdraw":"Withdraw","plugin_ito_qualification_loading":"Verify qualification…","plugin_ito_qualification_failed":"The wallet address isn\'t on the list.","plugin_ito_withdrawn":"Withdrawn","plugin_ito_your_swapped_amount":"You swapped {{amount}} {{symbol}}","plugin_ito_your_claimed_amount":"You claimed {{amount}} {{symbol}}","plugin_ito_your_refund_amount":"return {{amount}} {{symbol}}.","plugin_ito_unlock_in_advance":"Unlock in Advance","plugin_ito_swapped_status":"{{remain}} / {{total}} {{token}} Swapped","plugin_ito_congratulations":"Congratulations!","plugin_ito_out_of_stock_hit":"Better luck next time","plugin_ito_claim_success_share":"I just attended @{{user}}\'s #ITO with @{{account}} to swap ${{symbol}}. Install mask.io and start your own Initial Twitter Offering! \\n {{link}}","plugin_ito_claim_success_share_no_official_account":"I just attended @{{user}}\'s #ITO to swap ${{symbol}}. Install mask.io and start your own Initial Twitter Offering! \\n {{link}}","plugin_ito_claim_foreshow_share":"{{symbol}}({{name}}) is launching a new #ITO. Come and join it! Follow @{{account}} (mask.io) to find more events! \\n {{link}}","plugin_ito_claim_foreshow_share_no_official_account":"{{symbol}}({{name}}) is launching a new #ITO. Come and join it! \\n {{link}}","plugin_ito_password":"Password: {{password}}","plugin_ito_status_no_start":"Not started","plugin_ito_status_ongoing":"Ongoing","plugin_ito_status_out_of_stock":"Out of stock","plugin_ito_loading":"Loading ITO ...","plugin_ito_amount_unlocked":"Unlocked {{amount}} {{symbol}}","plugin_ito_amount_unlocked_infinity":"Unlocked infinity {{symbol}}","plugin_ito_unlocking_symbol":"Unlocking {{symbol}}","plugin_ito_continue":"Continue","plugin_ito_view_on_explorer":"View on Explorer","plugin_ito_unlock_tip":"Allow the contract <contractLink>{{address}}</contractLink> to use your {{symbol}} tokens when a new ITO round starts later.","plugin_collectible_you":"You","plugin_collectible_done":"Done","plugin_collectible_retry":"Retry","plugin_collectible_get_more_token":"Get more {{token}}","plugin_collectible_sell":"Sell","plugin_collectible_checkout":"Checkout","plugin_collectible_place_bid":"Place Bid","plugin_collectible_buy_now":"Buy Now","plugin_collectible_make_offer":"Make Offer","plugin_collectible_post_listing":"Post Listing","plugin_collectible_description":"Current price is <strong>{{price}} {{symbol}}</strong>.","plugin_collectible_article":"Article","plugin_collectible_overview":"Overview","plugin_collectible_details":"Details","plugin_collectible_offers":"Offers","plugin_collectible_listing":"Listing","plugin_collectible_history":"History","plugin_collectible_event":"Event","plugin_collectible_unit_price":"Unit Price","plugin_collectible_price":"Price","plugin_collectible_from":"From","plugin_collectible_to":"To","plugin_collectible_date":"Date","plugin_collectible_quantity":"Quantity","plugin_collectible_expiration":"Expiration","plugin_collectible_no_offers":"No Offers","plugin_collectible_no_listings":"No Listings","plugin_collectible_base":"Base","plugin_collectible_properties":"Properties","plugin_collectible_about":"About","plugin_collectible_chain_info":"Chain Info","plugin_collectible_contract_address":"Contract Address","plugin_collectible_token_id":"Token ID","plugin_collectible_block_chain":"BlockChain","plugin_collectible_create_by":"Created by","plugin_collectible_owned_by":"Owned by","plugin_collectible_view_on":"View on","plugin_collectible_no_history":"No History","plugin_collectible_ensure_unreviewed_item":"Please ensure unreviewed item","plugin_collectible_check_tos_document":"Please check ToS document","plugin_collectible_insufficient_offer":"Insufficient Offer","plugin_collectible_not_been_reviewed_by_opensea":"This item has not been reviewed by OpenSea.","plugin_collectible_reviewed_tips":"You should proceed with extra caution. Anyone can create a digital item on a blockchain with any\\n                        name, including fake versions of existing items. Please take extra caution and do your research\\n                        when interacting with this item to ensure it\'s what it chains to be.","plugin_collectible_total":"Total","plugin_collectible_subtotal":"Subtotal","plugin_collectible_item":"Item","plugin_collectible_approved_tips":"By checking this box, I acknowledge that this item has not been reviewed\\n                                                or approved by OpenSea.","plugin_collectible_agree_terms":"By checking this box, I agree to OpenSea\'s <terms>Terms of Service</terms>.","plugin_collectible_convert_eth":"Convert ETH","plugin_collectible_sale_end":"Sale ends in {{time}}","plugin_collectible_set_initial_price":"Set an initial price.","plugin_collectible_ending_price_tip":"Will be on sale until you transfer this item or cancel it.","plugin_collectible_starting_price":"Starting Price","plugin_collectible_ending_price":"Ending Price","plugin_collectible_ending_price_less_than_staring":"Must be less than or equal to the starting price. The price will progress linearly to this amount until the expiration date.","plugin_collectible_expiration_date":"Expiration date","plugin_collectible_schedule_date":"Schedule Date","plugin_collectible_auto_cancel_tip":"Your listing will automatically end at this time. No need to cancel it!","plugin_collectible_schedule_future_date":"Schedule a future date.","plugin_collectible_buyer_address":"Buyer Address","plugin_collectible_buyer_address_placeholder":"Enter the buyer\'s address.","plugin_collectible_buyer_address_helper_text":"Only the buyer is allowed to buy it.","plugin_collectible_include_ending_price":"Include ending price","plugin_collectible_include_ending_price_helper":"Adding an ending price will allow this listing to expire, or for the price to be\\n                                    reduced until a buyer is found.","plugin_collectible_schedule_for_a_future_time":"Schedule for a future time","plugin_collectible_schedule_for_a_future_time_helper":"You can schedule this listing to only be buyable at a future data.","plugin_collectible_privacy":"Privacy","plugin_collectible_privacy_helper":"You can keep your listing public, or you can specify one address that\'s allowed to\\n                                    buy it.","plugin_collectible_enter_a_price":"Enter a price","plugin_collectible_insufficient_balance":"Insufficient balance","plugin_collectible_invalid_schedule_date":"Invalid schedule date","plugin_collectible_invalid_ending_price":"Invalid ending price","plugin_collectible_invalid_expiration_date":"Invalid expiration date","plugin_collectible_invalid_buyer_address":"Invalid buyer address","plugin_collectible_set_price":"Set Price","plugin_collectible_highest_bid":"Highest Bid","plugin_collectible_minimum_bid":"Minimum Bid","plugin_collectible_set_starting_bid_price":"Set your starting bid price.","plugin_collectible_reserve_price":"Reserve Price","plugin_collectible_reserve_price_helper":"Create a hidden limit by setting a reserve price. Reserve price must be greater than or equal to the start amount.","plugin_collectible_auction_auto_end":"Your auction will automatically end at this time and the highest bidder will win. No need to cancel it!","plugin_collectible_enter_minimum_bid":"Enter minimum bid","plugin_collectible_enter_reserve_price":"Enter reserve price","plugin_collectible_invalid_reserve_price":"Invalid reserve price","plugin_collectible_place_a_bid":"Place a Bid","plugin_collectible_make_an_offer":"Make an Offer","plugin_collectible_approved_by_open_sea":"By checking this box, I acknowledge that this item has not been reviewed or approved by OpenSea.","plugin_collectible_legal_text":"By checking this box, I agree to OpenSea\'s <terms>Terms of Service</terms>.","plugin_cryptoartai_description_title":"Description","plugin_cryptoartai_edition":"Edition of","plugin_cryptoartai_operator":"Operator","plugin_cryptoartai_activity_type":"Type","plugin_cryptoartai_status":"Status","plugin_cryptoartai_time":"Time","plugin_cryptoartai_price":"Price","plugin_cryptoartai_tx":"Tx","plugin_cryptoartai_latest_bid":"Latest Bid","plugin_cryptoartai_description":"Current Bid is <strong>{{bidPrice}}{{symbol}}</strong>, price is <strong>{{price}}{{symbol}}</strong>. Edition {{soldNum}} of {{totalAvailable}} #{{editionNumber}}.","plugin_cryptoartai_no_price_description":"Current Bid is <strong>{{bidPrice}}{{symbol}}</strong>. Edition {{soldNum}} of {{totalAvailable}} #{{editionNumber}}.","plugin_cryptoartai_sold_description":"Sold for <strong>{{soldPrice}}{{symbol}}</strong>. Edition {{soldNum}} of {{totalAvailable}} #{{editionNumber}}.","plugin_cryptoartai_buy":"Buy","plugin_cryptoartai_buy_now":"Buy now","plugin_cryptoartai_current_balance":"Current balance","plugin_cryptoartai_current_highest_offer":"Current highest offer is ","plugin_cryptoartai_bid_least":"Your must bid at least ","plugin_cryptoartai_escrowed":"Your offer will be escrowed in the smart contract until it is accepted or you withdraw it","plugin_cryptoartai_current_balance_is":"Current balance is ","plugin_cryptoartai_auction_end":"Auction has ended","plugin_cryptoartai_auction_end_time":"Auction end time ","plugin_cryptoartai_share":"I just paid {{amount}} {{symbol}} for {{title}} on {{assetLink}}.\\nPlease install Mask plugin, and follow @{{account}} to join it too.\\n#mask_io","plugin_cryptoartai_share_no_official_account":"I just paid {{amount}} {{symbol}} for {{title}} on {{assetLink}}. Welcome to join.","plugin_cryptoartai_offer_share":"I just offered {{amount}} {{symbol}} for {{title}} on {{assetLink}}.\\nPlease install Mask plugin, and follow @{{account}} to join it too.\\n#mask_io","plugin_cryptoartai_offer_share_no_official_account":"I just offered {{amount}} {{symbol}} for {{title}} on {{assetLink}}. Welcome to join.","plugin_snapshot_info_title":"Information","plugin_snapshot_info_strategy":"Strategie(s)","plugin_snapshot_info_author":"Author","plugin_snapshot_info_ipfs":"IPFS","plugin_snapshot_info_start":"Start date","plugin_snapshot_info_end":"End date","plugin_snapshot_info_snapshot":"Snapshot","plugin_snapshot_result_title":"Results","plugin_snapshot_votes_title":"Votes","plugin_snapshot_no_power":"No power","plugin_snapshot_vote_success":"Your vote is in!","plugin_snapshot_vote":"Vote","plugin_snapshot_vote_choice":"Choice","plugin_snapshot_vote_power":"Your voting power","plugin_snapshot_vote_title":"Cast your vote","plugin_snapshot_vote_confirm_dialog_title":"Confirm Vote","plugin_snapshot_vote_confirm_dialog_choice":"Are you sure you want to vote \\"{{ choiceText }}\\"?","plugin_snapshot_vote_confirm_dialog_warning":"This action cannot be undone.","plugin_snapshot_current_result_title":"Current results","plugin_snapshot_download_report":"Download report","plugin_find_truman_display_name":"FindTruman - Statistics","plugin_find_truman_status_puzzle":"Story Puzzle","plugin_find_truman_status_poll":"Plot Voting","plugin_find_truman_status_result":"Stage Result","plugin_find_truman_status_puzzle_result":"Revealing Answer","plugin_find_truman_status_poll_result":"Plot Confirmation","plugin_find_truman_puzzle_to_be_revealed":"puzzle is left to be revealed.","plugin_find_truman_puzzles_to_be_revealed":"puzzles are left to be revealed","plugin_find_truman_poll_to_be_revealed":"vote continues to be tallied.","plugin_find_truman_polls_to_be_revealed":"votes continue to be tallied","plugin_find_truman_puzzle_underway":"The puzzle hasn\'t been revealed yet.","plugin_find_truman_puzzle_rate":"Accuracy: ","plugin_find_truman_voting_underway":"The voting continues to be tallied.","plugin_find_truman_voting_rate":"Hit rate: ","plugin_find_truman_submit_failed":"Failed to submit.","plugin_find_truman_vote":"vote","plugin_find_truman_votes":"votes","plugin_find_truman_selected":"Selected","plugin_find_truman_unselect":"Select","plugin_find_truman_answer":"Answer","plugin_find_truman_result":"Result","plugin_find_truman_buy":"BUY","plugin_find_truman_decrypted_by":"Decrypted by FindTruman:","plugin_find_truman_insufficient_nft":"The following specific NFTs are needed for this vote.","plugin_find_truman_buy_nft_tip":"At least {{count}} copy of this NFT is required.","plugin_find_truman_connect_wallet_tip":"Please connect to a wallet.","plugin_find_truman_no_participation_tip":"You have not participated in any vote yet.","plugin_dhedge_managed_by":"Managed by <manager>{{managerName}}</manager>","plugin_dhedge_manager_share":"Holds <share>{{managerShare}}%</share> of the pool","plugin_dhedge_manager_share_more_than_50":"Holds more than 50% of the pool","plugin_dhedge_value_managed":"VALUE MANAGED","plugin_dhedge_lifetime_return":"LIFETIME RETURN","plugin_dhedge_risk_factor":"RISK FACTOR","plugin_dhedge_tab_stats":"Stats","plugin_dhedge_tab_chart":"Chart","plugin_dhedge_strategy":"Strategy","plugin_dhedge_see_less":"See less","plugin_dhedge_see_more":"See more","plugin_dhedge_no_data":"No Data","plugin_dhedge_fetch_error":"Unable to fetch data, please try again!","plugin_dhedge_loading_chart":"Loading","plugin_dhedge_invest":"INVEST","plugin_dhedge_buy_token":"GET {{symbol}}","plugin_dhedge_enter_an_amount":"Enter an amount","plugin_dhedge_insufficient_balance":"Insufficient {{symbol}} balance","plugin_dhedge_loading":"Loading...","plugin_dhedge_pool_not_found":"Invalid pool address.","plugin_dhedge_smt_wrong":"Something went wrong!","plugin_pooltogether_tab_pools":"Pools","plugin_pooltogether_tab_account":"Account","plugin_pooltogether_no_pool":"There is no pool on this network.","plugin_pooltogether_pool_ended":"Awarded","plugin_pooltogether_deposit":"Deposit {{token}}","plugin_pooltogether_deposit_msg":"Deposit","plugin_pooltogether_apr":"Earn {{apr}}% APR in {{token}}","plugin_pooltogether_view_pool":"View pool","plugin_pooltogether_prize":"{{period}} Prize","plugin_pooltogether_share":"I just deposit {{amount}} {{cashTag}}{{symbol}} into the {{pool}}, can I win the lottery this week?\\nFollow @PoolTogether_ and @{{account}} (mask.io) to deposit in PoolTogether\'s pools.\\n#pooltogether #mask_io","plugin_pooltogether_share_no_official_account":"I just deposit {{amount}} {{cashTag}}{{symbol}} into the {{pool}}, can I win the lottery this week?","plugin_pooltogether_buy":"GET {{symbol}}","plugin_pooltogether_enter_an_amount":"Enter an amount","plugin_pooltogether_insufficient_balance":"Insufficient {{symbol}} balance","plugin_pooltogether_deposit_title":"Deposit {{token}} to win","plugin_pooltogether_odds_title":"New odds of winning:","plugin_pooltogether_odds_value":"1 in {{value}} {{period}}!","plugin_pooltogether_short_odds_value":"1 in {{value}}","plugin_pooltogether_my_deposits":"Total Deposits","plugin_pooltogether_no_account_pool":"You don\'t have any pool in this network","plugin_pooltogether_missing_pool":"Missing some deposits? Check the complete listing at:\\n","plugin_pooltogether_winning_odds":"Winning odds:","plugin_pooltogether_in":"in","plugin_pooltogether_manage":"Manage","plugin_pooltogether_token_not_found":"Token not found!","plugin_good_ghosting_loading_other_player_stats":"Loading other players\' stats","plugin_good_ghosting_loading_game_stats":"Loading game stats","plugin_good_ghosting_game_duration":"Game Duration","plugin_good_ghosting_current_round":"Current Round","plugin_good_ghosting_recurring_deposit":"Deposit Per Round","plugin_good_ghosting_round_length":"Round Length","plugin_good_ghosting_pool_apy":"Pool APY","plugin_good_ghosting_pool_earnings":"Pool Earnings","plugin_good_ghosting_extra_rewards":"Extra Rewards","plugin_good_ghosting_total_saved":"Total Saved","plugin_good_ghosting_game_launched":"Game Launched","plugin_good_ghosting_join_round":"Join Round","plugin_good_ghosting_join_deadline":"Join Deadline","plugin_good_ghosting_deposit":"Deposit {{index}}","plugin_good_ghosting_deposit_deadline":"Deposit Deadline {{index}}","plugin_good_ghosting_waiting_round":"Waiting Round","plugin_good_ghosting_waiting_round_end":"Waiting Period Ends","plugin_good_ghosting_withdraw":"Withdraw","plugin_good_ghosting_all_players_status_winning":"Winning","plugin_good_ghosting_all_players_status_waiting":"Waiting","plugin_good_ghosting_all_players_status_ghost":"Ghosts","plugin_good_ghosting_all_players_status_dropout":"Drop-outs","plugin_good_ghosting_status_winning":"Winning","plugin_good_ghosting_status_waiting":"Waiting","plugin_good_ghosting_status_ghost":"Ghost","plugin_good_ghosting_status_dropout":"Withdrawn","plugin_good_ghosting_status_unknown":"Unknown","plugin_good_ghosting_status":"Status","plugin_good_ghosting_deposits":"Deposits made","plugin_good_ghosting_total_deposited":"Total deposited","plugin_good_ghosting_address":"Address","plugin_good_ghosting_not_a_participant":"Looks like you\'re not a participant in this game.","plugin_good_ghosting_next_event":"Coming up next","plugin_good_ghosting_game_end":"This game has ended","plugin_good_ghosting_game_over":"Game Over","plugin_good_ghosting_participants_withdraw":"Participants can now withdraw their earnings!","plugin_good_ghosting_join_game":"Join Game","plugin_good_ghosting_make_deposit":"Make Deposit","plugin_good_ghosting_join_help_text":"Deposit your first {{amount}} {{token}} and join this savings pool. To win, you need to deposit money into the savings pool every round, prior to the round\'s deadline.","plugin_good_ghosting_deposit_help_text":"Deposit {{segmentPayment}} {{token}} for this round and continue to be a winner.","plugin_good_ghosting_withdraw_help_text":"The game has ended! You can now withdraw your deposits, along with any earnings that you won.","plugin_good_ghosting_leave_game":"Leave Game","plugin_good_ghosting_early_withdraw_info":"If you wish to withdraw from an ongoing game, you may be charged a small fee of {{amount}} {{token}} to compensate the remaining players in the savings pool.","plugin_good_ghosting_rules":"Rules","plugin_good_ghosting_game_rules":"Deposit {{amount}} {{token}} every round for {{roundCount}} rounds to win the game. If other players miss depositing in a round and become ghosts, their earnings will go to you.","plugin_good_ghosting_tx_fail":"Failed to complete the transaction.","plugin_good_ghosting_tx_timeout":"Cannot read transaction status.","plugin_good_ghosting_something_went_wrong":"Something went wrong, please try again.","plugin_good_ghosting_view_on_explorer":"View on Explorer","plugin_good_ghosting_checking_balance":"Checking Balance...","plugin_good_ghosting_insufficient_balance":"You need at least {{amount}} {{token}} in your wallet to do this.","plugin_good_ghosting_balance_error":"Failed to check balance. Click to retry.","plugin_unlockprotocol_buy_lock":"Buy Lock","plugin_unlockprotocol_buy_lock_alert":"Please look for and buy an active lock","plugin_unlockprotocol_no_access":"You don\'t have access to this content","plugin_unlockprotocol_select_unlock_lock":"Select Unlock Lock","plugin_unlockprotocol_no_lock_found":"No lock found. Create your own lock at <dashboard>Unlock protocol Creator Dashboard</dashboard>.","plugin_unlockprotocol_submit_post":"Submit Post","plugin_unlockprotocol_title":"Unlock Protocol","plugin_unlockprotocol_server_error":"Some Server error occured, Please try again later.","plugin_furucombo_tab_pool":"Pool","plugin_furucombo_tab_investments":"All investments","plugin_furucombo_liquidity":"Liquidity","plugin_furucombo_annual_percentage_yield":"Apy","plugin_furucombo_rewards":"Rewards","plugin_furucombo_invest":"Invest","plugin_furucombo_pool_not_found":"Invalid pool address.","plugin_furucombo_smt_wrong":"Something went wrong!","plugin_furucombo_head_pools":"Pools","plugin_furucombo_head_action":"Action","plugin_pets_dialog_title":"Non-Fungible Friends","plugin_pets_dialog_title_share":"Successful","plugin_pets_dialog_contract":"NFT Contract","plugin_pets_dialog_token":"Token ID","plugin_pets_dialog_msg":"Greeting message","plugin_pets_dialog_msg_optional":"Optional, 100 characters max.","plugin_pets_dialog_btn":"Confirm","plugin_pets_dialog_btn_share":"Share","plugin_pets_dialog_preview":"Preview","plugin_pets_dialog_created":"Created by MintTeam","plugin_pets_dialog_powered":"Powered by RSS3","plugin_pets_dialog_success":"Your Non-Fungible Friend has been set up successfully","plugin_pets_dialog_fail":"Setting failed, please try later","plugin_pets_dialog_check_title":"Show NFT friends on the profile page.","popups_following_permissions":"The plugin ({{pluginName}}) (hosted on {{pluginURL}}) is going to request the following permissions:","popups_permissions":"Permissions","popups_sites":"Sites","popups_mask_requests_permission":"Mask needs the following permissions","popups_grant":"Grant","popups_permission_request":"Permission request","popups_permission_request_content":"To continue, Mask Network needs permission to access the following URL:","popups_permission_request_content2":"This gives Mask Network the necessary abilities to provide the requested function properly.","popups_welcome":"Welcome","popups_wallet_token":"Token","popups_wallet_dialog_legacy_wallet_tip":"Detected legacy wallets, please click confirm to restore them all.","popups_wallet_set_payment_password":"Set the payment password","popups_wallet_payment_password":"Payment Password","popups_wallet_re_payment_password":"Re-enter the payment password","popups_wallet_set_up_payment_password":"Set up payment password","popups_wallet_payment_password_tip":"The Payment password must be a combination of 2 categories out of numbers, letters, and special characters with a length of 8-20 characters.","popups_wallet_go_back":"Go back","popups_wallet_start_up_tip":"Connect to your wallet, create a new wallet or recover an existing wallet using a seed phrase.","popups_wallet_name_placeholder":"Enter 1-12 characters","popups_wallet_name_mnemonic":"Mnemonic","popups_wallet_name_json_file":"Json File","popups_wallet_name_private_key":"Private Key","popups_wallet_name_mnemonic_placeholder":"Please enter 12 mnemonic words separated by spaces","popups_wallet_name_origin_password":"Original Password","popups_wallet_tab_assets":"Assets","popups_wallet_tab_activity":"Activity","popups_wallet_derivation_path":"Derivation path ({{ path }})","popups_wallet_next":"Next","popups_wallet_backup_wallet":"Back up the wallet","popups_wallet_backup_json_file":"JSON File","popups_wallet_backup_private_key":"Private Key","popups_wallet_backup_json_file_confirm_password_tip":"This file has been encrypted and stored with your current password. Your current password is needed to decrypt this file when using it to import wallet.","popups_wallet_backup_private_key_tip":"Please don’t show anyone your private key. The private key can be used in any wallet that supports EVM-compatible chains without decryption.","popups_wallet_backup_input_password":"Input your password","popups_wallet_backup_json_file_drag_tip":"Drag your file into here…","popups_wallet_backup_json_file_click_tip":"Click or drag your file here","popups_wallet_enter_your_wallet_name":"Enter your wallet name","popups_wallet_delete_tip":"Are you sure you want to delete this wallet? Your wallet cannot be recovered without seed phrase.","popups_wallet_confirm_payment_password":"Confirm with payment password","popups_wallet_token_buy":"Buy","popups_wallet_token_send":"Send","popups_wallet_token_swap":"Swap","popups_wallet_view_on_explorer":"View on Explorer","popups_wallet_gas_fee_settings":"Gas fee settings","popups_wallet_gas_fee_settings_description":"Gas fees are the fees for paying ethereum miners. The miners prefer to pack transactions with higher gas fees. Transactions with low gas fees might fail, and the paid gas fees won’t be returned.","popups_wallet_gas_fee_settings_low":"Low","popups_wallet_gas_fee_settings_medium":"Medium","popups_wallet_gas_fee_settings_high":"High","popups_wallet_gas_fee_settings_usd":" ≈ ${{usd}}","popups_wallet_gas_fee_settings_gas_limit":"Gas Limit","popups_wallet_gas_fee_settings_max_priority_fee":"Max priority fee","popups_wallet_gas_fee_settings_max_fee":"Max fee","popups_wallet_gas_fee_settings_min_gas_limit_tips":"Gas limit must be at least {{limit}}","popups_wallet_unsupported_network":"Unsupported network type","popups_wallet_signature_request":"Signature request","popups_wallet_signature_request_message":"Message","popups_wallet_contract_interaction":"Contract Interaction","popups_wallet_token_unlock_permission":"Token unlock permission","popups_wallet_token_infinite_unlock":"Infinite unlock","popups_wallet_contract_interaction_transfer":"Transfer","popups_wallet_contract_interaction_gas_fee":"Gas fee","popups_wallet_contract_interaction_edit":"Edit","popups_wallet_contract_interaction_total":"Total","popups_wallet_password_dont_match":"The password does not match.","popups_wallet_password_satisfied_requirement":"The password is not satisfied the requirement.","popups_wallet_password_length_error":"The password length is incorrect.","popups_wallet_unlock_wallet":"Unlock Wallet","popups_wallet_unlock_error_password":"Password is incorrect","popups_wallet_activity_to_address":"To: {{address}}","popups_wallet_transfer_error_tip":"Network connection failure or contract error, send transaction failure.","popups_wallet_transactions_pending":"Pending...","popups_wallet_re_send":"Re-Send","popups_wallet_choose_token":"Choose Token","popups_wallet_gas_price":"Gas Price","popups_wallet_done":"Done","popups_wallet_recovered":"Wallet recovered","popups_wallet_no_transactions":"You have no transactions","popups_missing_parameter_caption":"Please close this page.","popups_persona_connect_to":"Connect to {{type}}","popups_persona_to_be_verified":"To be verified","popups_persona_disconnect":"Disconnect","popups_persona_disconnect_confirmation":"Disconnect confirmation?","popups_persona_disconnect_confirmation_description":"This persona verification record will no longer show up in your verification profile page. Your\\n Mask friends can no longer send encrypted message to you by this persona or check your Web 3\\n products","popups_persona":"Persona","popups_twitter_id":"Twitter ID","popups_persona_logout":"Log out","popups_persona_disconnect_tip":"After logging out, your associated social accounts can no longer decrypt past encrypted messages. If you need to reuse your account, you can recover your account with your identity, private key, local or cloud backup.","popups_persona_persona_name_exists":"The persona name already exists","popups_persona_sign_request_title":"Signature request","popups_persona_sign_request_message":"message","popups_password_do_not_match":"Incorrect backup password","popups_backup_password":"Backup Password","popups_rename_error_tip":"Maximum length is {{length}} characters long.","nft_wallet_label":"Wallet","plugin_profile_no_wallets":"Connect your wallet here.<br/>This section will be shown to your encrypted friends.<br/>The display content includes digital art, donations, badges<br/>and other public information on chain.","plugin_vcent_last_offer_at":"LATEST OFFER at","nft_input_address_label":"Please input contract address","nft_input_tokenid_label":"Please input token ID","nft_owner_hint":"This NFT does not exist or does not belong to you.","nft_add_dialog_title":"Add Collectible","nft_add_button_label":"Add","nft_list_title":"NFT Avatar Setting","nft_wallet_change":"Change","nft_button_add_collectible":"Add Collectible","nft_avatar":"NFT Avatar","web3_tab_hint":"No address found.","plugin_artblocks_not_active":"This project is no more active","plugin_artblocks_completed":"Completed","plugin_artblocks_paused":"Paused","plugin_artblocks_collection":"Collection","plugin_artblocks_details":"Details","plugin_artblocks_created_by":"Created by","plugin_artblocks_purchase":"Purchase","plugin_artblocks_purchasing":"Purchasing....","plugin_artblocks_legal_text":"By checking this box, I agree to ArtBlocks\'s <terms>Terms of Service</terms>.","plugin_artblocks_check_tos_document":"Please check ToS document","plugin_artblocks_price_per_mint":"Price per mint","plugin_artblocks_price_row":"Price:","plugin_artblocks_minted_row":"Minted:","plugin_artblocks_license_row":"License:","plugin_artblocks_library_row":"Library:","plugin_artblocks_website":"Website","plugin_artblocks_infos":"Infos","plugin_artblocks_chain":"Chain","plugin_artblocks_blockchain_row":"Blockchain:","plugin_artblocks_contract_row":"Contract:","plugin_artblocks_smt_wrong":"Something went wrong!","plugin_artblocks_share":"I just purchased a beautiful piece of art from \'{{name}}\' collection for {{price}} {{symbol}}. Install @realMaskNetwork to get yours.","plugin_artblocks_share_no_official_account":"I just purchased a beautiful piece of art from \'{{name}}\' collection for {{price}} {{symbol}}. Welcome to join.","nft_button_set_avatar":"Set NFT Avatar"}');
;// CONCATENATED MODULE: ./shared-ui/locales/ja-JP.json
const ja_JP_namespaceObject = JSON.parse('{"add_token":"トークンを追加","additional_post_box__encrypted_post_pre":"#mask_io で復号しましょう！ {{encrypted}}","additional_post_box__steganography_post_pre":"この投稿は #mask_io によって暗号化されています。 📪🔑 mask.io をインストールして復号しましょう！ ([I:b]) {{random}}","auto_paste_failed_dialog_title":"手動でペーストする","auto_paste_failed_dialog_content":"以下の文字列と画像（存在すれば）をコピーし、公開しましょう。","auto_paste_failed_dialog_image_caption":"新しいタブで開く","auto_paste_failed_snackbar":"Mask が自動で投稿を作成できませんでした。手動でペーストしてください。","auto_paste_failed_snackbar_action":"方法を確認","automation_request_click_post_button":"[公開] ボタンをクリックして編集ダイアログを開きます。","cancel":"取り消す","comment_box__placeholder":"コメントを暗号化するには…","confirm":"確認する","copy_text":"テキストをコピー","copy_image":"画像をコピー","copy_success_of_wallet_addr":"ウォレットのコピーに成功しました","copy_success_of_text":"テキストのコピーに成功しました","copy_success_of_image":"画像のコピーに成功しました","connecting":"接続中…","create":"作成","dashboard_tab_collectibles":"コレクション","dashboard_no_collectible_found":"コレクションが見つかりません","decrypted_postbox_add_recipients":"受信者を追加","decrypted_postbox_decrypting":"Mask が復号しています。","decrypted_postbox_decoding":"Mask が解読しています。","decrypted_postbox_decrypting_finding_person_key":"Mask は公開鍵を探しています…","decrypted_postbox_decrypting_finding_post_key":"Mask はこの投稿を復号するために ポストキーを取得しています…","decrypted_postbox_author_mismatch":"最初の作者は {{name}}","decrypted_postbox_title":"Mask で暗号化されています:","dismiss":"戻る","delete":"削除","delete_wallet":"ウォレットを削除する","hide_token":"トークンを隠す","hide_token_hint":"将来的には、ウォレットパネルで「トークンを追加」を選択することで、再び <strong>{{token}}</strong> を追加することができます。","done":"完了です！","download":"ダウンロード","buy_now":"今すぐ購入","setup_guide_find_username_text":"Mask のペルソナと接続するためにユーザー名が必要です。<br /> 正しいものを入力してください。","setup_guide_connect_auto":"接続する","setup_guide_connect_failed":"失敗しました… もう一度お試しください。","import":"インポート","no_search_result":"該当なし","payload_bad":"この投稿は破損しているため、Mask で復号できません。","payload_incomplete":"この投稿は不完全です。全文を見ることにより復号が可能になります。","payload_not_found":"ペイロードが見つかりませんでした。","payload_throw_in_alpha41":"Alpha41方式は使用できません。Mask をアップデートしてください。","personas":"ペルソナ","browser_action_enter_dashboard":"ダッシュボードに入る","post_dialog__button":"完了","post_dialog__image_payload":"画像で暗号化","post_dialog__more_options_title":"他のオプション","post_dialog__placeholder":"ここにテキストを持ってきます","post_dialog__select_recipients_share_to_everyone":"全てのユーザー","post_dialog__select_recipients_title":"閲覧可能な人を選ぶ","post_dialog__title":"Mask: 作成","post_modal_hint__button":"投稿を暗号化","hide":"隠す","reset":"リセットする","rename":"名前を変える","search":"検索","search_box_placeholder":"ここに打って検索","select_all":"全て選ぶ","select_none":"何も選んでいません。","select_specific_friends_dialog__button":"完了","select_specific_friends_dialog__title":"特定の連絡先を選ぶ","service_decryption_failed":"復号に失敗","service_invalid_backup_file":"これは Mask のバックアップではないかもしれません。","service_unknown_payload":"投稿のバージョンが不明です。Mask のアップデートが必要かもしれません。","service_username_invalid":"無効なユーザー名","skip":"スキップ","share":"共有","share_to":"共有先","sharing":"共有する","transfer":"転送","wallet_name":"ウォレット名","wallet_rename":"ウォレット名を変更","wallet_balance":"残高","wallet_new":"新規ウォレット名","wallets":"ウォレット","wallet_status_button_change":"変更","wallet_status_button_disconnect":"接続を外す","wallet_status_button_copy_address":"アドレスをコピー","wallet_transfer_to_address":"宛先のアドレス","wallet_transfer_send":"送る","wallet_transfer_title":"転送","wallet_transfer_error_amount_absence":"量を入力","wallet_transfer_error_address_absence":"受け手のアドレスを入力","wallet_transfer_error_invalid_address":"無効な受け手のアドレス","relative_time_days_ago":"{{days}}日前","relative_time_hours_ago":"{{hours}}時間前","relative_time_minutes_ago":"{{minutes}}分前","relative_time_months_ago":"{{months}}月前","relative_time_seconds_ago":"{{seconds}}秒前","relative_time_years_ago":"{{years}}年前","plugin_wallet_select_a_token":"トークンを選択","plugin_wallet_connect_a_wallet":"ウォレットと接続","plugin_wallet_no_gas_fee":"ガス代が不足しています","plugin_wallet_update_gas_fee":"ガス代を更新中…","plugin_wallet_invalid_network":"無効のネットワーク","plugin_wallet_select_a_wallet":"ウォレットを選択","plugin_wallet_transaction":"取引","plugin_wallet_transaction_wait_for_confirmation":"確認を待っています","plugin_wallet_transaction_submitted":"取引は送信されました。","plugin_wallet_transaction_confirmed":"取引は成功しました。","plugin_wallet_transaction_reverted":"取引は元に戻されました。","plugin_wallet_transaction_rejected":"取引は拒否されました。","plugin_wallet_transaction_server_error":"取引は内部の JSON-RPC サーバーのエラーにより失敗しました。","plugin_wallet_view_on_explorer":"Explorer で見る","plugin_wallet_wrong_network_tip":"正しい Ethereum ネットワークを選択してください。","plugin_wallet_on_create":"ウォレットを作成","plugin_wallet_on_connect":"ウォレットに接続しています","plugin_wallet_select_provider_dialog_title":"ウォレットを接続","plugin_wallet_qr_code_with_wallet_connect":"WalletConnect 対応の QR コードを読みこむ","plugin_wallet_token_unlock":"確かにアンロックする","plugin_wallet_token_infinite_unlock":"永遠にアンロックする","plugin_wallet_connect_safari_metamask":"MetaMask に接続する","plugin_wallet_connect_safari_rainbow":"Rainbow に接続する","plugin_wallet_connect_safari_trust":"Trust に接続する","plugin_wallet_connect_safari_im_token":"imToken に接続する","plugin_wallet_on_connect_in_firefox":"接続する","plugin_wallet_return_mobile_wallet_options":"モバイルウォレットのオプションに戻る","plugin_wallet_view_qr_code":"QR コードを表示する","plugin_red_packet_display_name":"プラグイン: 投げ銭","plugin_red_packet_split_mode":"分割モード","plugin_red_packet_average":"平均","plugin_red_packet_random":"ランダム","plugin_red_packet_shares":"株数","plugin_red_packet_best_wishes":"幸運を祈ります！","plugin_red_packet_create_new":"新しい投げ銭を作成","plugin_red_packet_claim":"受け取る","plugin_red_packet_refund":"無効","plugin_red_packet_select_existing":"既存の投げ銭を選択","plugin_red_packet_attached_message":"メッセージを追加","plugin_red_packet_from":"送信者：{{name}}","plugin_red_packet_description_expired":"期限切れです","plugin_red_packet_description_refunded":"無効です","plugin_red_packet_description_refund":"{{balance}}{{symbol}}を受け取れます","plugin_red_packet_description_empty":"期限切れです","plugin_red_packet_description_broken":"破損しています","plugin_red_packet_description_failover":"{{amount}} {{symbol}} / {{shares}} 株","plugin_red_packet_claiming_from":"{{name}} から投げ銭を請求中","plugin_red_packet_amount_per_share":"1株当たりの金額","plugin_red_packet_send_symbol":"{{symbol}} を送る","plugin_red_packet_create_with_token":"{{symbol}} で投げ銭を作成する","plugin_gitcoin_readme":"このサービスを利用するにあたり、寄付金額の 5% が <fund>Gitcoin grants development fund</fund> に寄付されます","plugin_gitcoin_select_a_token":"トークンを選択する","plugin_gitcoin_enter_an_amount":"量を決める","plugin_gitcoin_grant_not_available":"Grantは有効ではありません","plugin_gitcoin_insufficient_balance":"{{symbol}} の残高が足りません","plugin_gitcoin_donate":"寄付する","plugin_gitcoin_last_updated":"最新の更新：","plugin_gitcoin_view_on":"Gitcoin で見る","plugin_trader_swap":"スワップ","plugin_trader_wrap":"ラップ","plugin_trader_unwrap":"アンラップ","plugin_trader_buy":"購入","plugin_trader_no_data":"データなし","plugin_trader_tab_market":"一般","plugin_trader_tab_price":"価格","plugin_trader_tab_exchange":"取引所","plugin_trader_tab_swap":"スワップ 🔥","plugin_trader_table_exchange":"ソース","plugin_trader_table_pair":"通貨ペア","plugin_trader_table_price":"価格","plugin_trader_table_volume":"取引高（24時間）","plugin_trader_table_updated":"更新","plugin_trader_error_amount_absence":"量を入力してください。","plugin_trader_error_insufficient_balance":"{{symbol}} の残高が足りません","plugin_trader_error_insufficient_lp":"流動性が足りません","plugin_trade_error_input_amount_less_minimum_amount":"入力量は最小量を下回っています","plugin_trader_slippage_tolerance":"スリッページの許容範囲：","plugin_poll_display_name":"プラグイン: 投票","plugin_poll_question_hint":"質問を入力してください...","plugin_poll_options_hint":"オプション","plugin_poll_length":"投票期限","plugin_poll_length_days":"日","plugin_poll_length_hours":"時間","plugin_poll_length_minutes":"分","plugin_poll_length_unknown":"知らない","plugin_poll_create_new":"新しい投票を作成","plugin_poll_select_existing":"既存の投票を選択","plugin_poll_send_poll":"投票を作成","plugin_poll_status_closed":"投票は終了しました","plugin_poll_status_voting":"投票しています","plugin_poll_status_voted":"投票した.","plugin_poll_deadline":"{{time}} で終了","plugin_ito_share":"共有","plugin_ito_enter":"参加","plugin_ito_dialog_swap_title":"{{token}} をスワップ","plugin_ito_dialog_swap_reminder_title":"スワップリマインダー","plugin_ito_dialog_swap_unlock_title":"事前にトークンをアンロックする","plugin_ito_dialog_swap_share_title":"共有","plugin_ito_dialog_swap_exchange":"交換する","plugin_ito_dialog_swap_panel_title":"スワップ","plugin_ito_dialog_swap_exceed_wallet_limit":"一つのウォレットの限度を超えています","plugin_ito_swap_ration_label":"スワップ比率","plugin_ito_swap_unlucky_fail":"残念でした。失敗した理由を Etherscan リンクから確認してからもう一度試してください。","plugin_ito_swap_only_once_remind":"各ウォレットは一度しか参加できません。","plugin_ito_swap_title":"{{swap}} 分の {{amount}} {{token}}","plugin_ito_swap_end_date":"{{date}} に終了","plugin_ito_dialog_claim_reminder_agree":"了解しました","plugin_ito_dialog_claim_reminder_text1":"現存するトークンを偽ったものや、トークンを持っていないプロジェクトであるのに関わらずそれのトークンであると騙るように、誰もが Ethereum 上で任意の名前でトークンを作成することができます。","plugin_ito_dialog_claim_reminder_text2":"このインターフェイスはトークンアドレスから任意のトークンを読み込むことができます。任意の ERC20 のトークンをやり取りするときは、特に注意し、自分で調べてください。","plugin_ito_dialog_claim_reminder_text3":"もし任意のトークンを購入した場合、あなたはそれを払い戻すことができない可能性があります。","plugin_ito_dialog_claim_reminder_text4":"本権利は裁判において、もしくは正当な請求ではないと判断される者に対して、全体もしくは一部、直接的もしくは間接的に提供または販売されておらず、今後されることもありません。","plugin_ito_expired":"期限切れ","plugin_ito_create_new":"新しいもの","plugin_ito_claim_all_status_unclaimed":"未請求","plugin_ito_claim_all_status_locked":"ロックされています","plugin_ito_claim_all_unlock_time":"ロック解除：{{time}}","plugin_ito_claim_all_dialog_title":"あなたのトークンを請求する","plugin_ito_swapping":"幸運ならあなたは {{amount}} {{symbol}} を得ることができます。また、ITO の在庫切れが発生した場合は返金されます。","plugin_ito_advanced":"進行中","plugin_ito_advanced_ip_region":"IP リージョン制限","plugin_ito_advanced_delay_unlocking":"トークンのロック解除時間を設定","plugin_ito_advanced_contract":"プラグインコントラクト","plugin_ito_select_existing":"古いもの","plugin_ito_display_name":"ITO 構成ダイアログ","plugin_ito_sell_token":"トークン","plugin_ito_sell_price":"価格","plugin_ito_sell_total_amount":"入力","plugin_ito_allocation_per_wallet":"スワップ上限 {{limit}} {{token}}","plugin_ito_wait_unlock_time":"{{unlockTime}} に請求","plugin_ito_claim":"請求","plugin_ito_claiming":"請求中","plugin_ito_claim_all":"全て請求","plugin_ito_qualification_start_time":"参加資格開始時間：","plugin_ito_error_qualification_start_time":"無効：資格開始時間は ITO の終了時間よりも前でなくてはいけません","plugin_ito_error_invalid_qualification":"無効な資格アドレス","plugin_ito_unlock_time":"ロック解除時間 {{zone}}","plugin_ito_qualification_label":"プラグインのコントラクト","plugin_ito_message_label":"タイトル","plugin_ito_region_label":"IP リージョンの選択","plugin_ito_region_confirm_label":"IP リージョン","plugin_ito_region_list":"{{ select }} / {{ all }} リージョン","plugin_ito_region_all":"全てのリージョン","plugin_ito_region_search":"リージョンの名前を入力して検索","plugin_ito_region_ban":"あなたのリージョンではこのプールはプールの作成者から Ban されています","plugin_ito_next":"次","plugin_ito_back":"戻る","plugin_ito_transaction_dialog_summary":"{{amount}} {{symbol}} で ITO を作成。","plugin_ito_swap":"スワップ","plugin_ito_send_tip":"過去のタブからあなたの行った ITO を探すことができます。","plugin_ito_send_text":"{{total}} {{symbol}} を送る","plugin_ito_error_enter_amount":"量を入力してください","plugin_ito_error_select_token":"トークンを選択してください","plugin_ito_error_enter_amount_and_token":"量を入力し、トークンを選択してください。","plugin_ito_error_allocation_absence":"スワップ上限を入力してください","plugin_ito_error_allocation_invalid":"無効の量","plugin_ito_error_exchange_time":"無効：開始時刻は終了時刻よりあとになっています","plugin_ito_error_unlock_time":"無効：終了時間はロック解除時間よりも後にはできません","plugin_ito_error_balance":"{{symbol}} の残高が足りません","plugin_ito_list_start_date":"開始時刻 {{date}}","plugin_ito_list_end_date":"終了時刻 {{date}}","plugin_ito_list_sold_total":"スワップしました","plugin_ito_list_total":"総量","plugin_ito_list_table_type":"形式","plugin_ito_list_table_price":"スワップ比率","plugin_ito_no_claimable_token":"トークンの請求権はありません。","plugin_ito_list_table_sold":"スワップしました","plugin_ito_list_table_got":"バランス","plugin_ito_list_button_send":"送る","plugin_ito_withdraw":"取り消す","plugin_ito_qualification_loading":"資格認証中…","plugin_ito_qualification_failed":"ウォレットアドレスがリストにありません。","plugin_ito_withdrawn":"取り消しました","plugin_ito_your_swapped_amount":"あなたは {{amount}} {{symbol}} を獲得しました","plugin_ito_your_claimed_amount":"あなたは {{amount}} {{symbol}} を請求しました","plugin_ito_your_refund_amount":"{{amount}} {{symbol}} を戻す","plugin_ito_unlock_in_advance":"事前にアンロックする","plugin_ito_swapped_status":"{{remain}} / {{total}} {{token}} をスワップしました","plugin_ito_congratulations":"おめでとうございます！","plugin_ito_out_of_stock_hit":"次の幸運を祈っています","plugin_ito_claim_success_share":".@{{account}} を使って ${{symbol}} をスワップし、 @{{user}} の #ITO に参加しました。mask.io をインストールして Initial Twitter Offering を始めましょう！ \\n {{link}}","plugin_ito_claim_foreshow_share":"{{symbol}}({{name}}) は新しい #ITO をローンチしました。参加してみましょう！ @{{account}} (mask.io) をフォローしてさらにイベントを見つけましょう。\\n {{link}}","plugin_ito_password":"パスワード: {{password}}","plugin_ito_status_no_start":"まだ開催されていません","plugin_ito_status_ongoing":"開催中","plugin_ito_status_out_of_stock":"品切れ","plugin_ito_loading":"ITO を読み込んでいます","plugin_ito_amount_unlocked":"ロック解除された {{amount}} {{symbol}}","plugin_ito_amount_unlocked_infinity":"永遠に {{symbol}} のロックを解除する","plugin_ito_unlocking_symbol":"{{symbol}} をアンロック中","plugin_ito_continue":"再開","plugin_ito_view_on_explorer":"Explorer で見る","plugin_collectible_you":"あなた","plugin_collectible_done":"完了","plugin_collectible_retry":"リトライ","plugin_collectible_sell":"売る","plugin_collectible_checkout":"チェックアウト","plugin_collectible_place_bid":"入札する","plugin_collectible_buy_now":"今買う","plugin_collectible_make_offer":"オファーする","plugin_collectible_post_listing":"投稿リスト","plugin_collectible_description":"現在の価格は <strong>{{price}} {{symbol}}</strong> です。","plugin_collectible_article":"品目","plugin_collectible_details":"詳細","plugin_collectible_offers":"オファー","plugin_collectible_listing":"リスティング","plugin_collectible_history":"履歴","plugin_collectible_event":"イベント","plugin_collectible_unit_price":"単価","plugin_collectible_price":"価格","plugin_collectible_date":"日にち","plugin_collectible_quantity":"量","plugin_collectible_expiration":"有効期限","plugin_collectible_no_offers":"オファーがありません","plugin_collectible_no_listings":"リストにありません","plugin_collectible_base":"ベース","plugin_collectible_properties":"プロパティ","plugin_collectible_about":"詳細","plugin_collectible_chain_info":"チェーン情報","plugin_collectible_contract_address":"コントラクトアドレス","plugin_collectible_token_id":"トークンID","plugin_collectible_block_chain":"ブロックチェーン","plugin_collectible_create_by":"作成者","plugin_collectible_owned_by":"所持者","plugin_collectible_no_history":"履歴がありません","plugin_collectible_ensure_unreviewed_item":"未レビューのアイテムを確認してください","plugin_collectible_check_tos_document":"ToS ドキュメントを確認してください","plugin_collectible_not_been_reviewed_by_opensea":"このアイテムは OpenSea でレビューされていません。","plugin_collectible_reviewed_tips":"注意して行動してください。ブロックチェーン上で誰もがどんな名前でデジタルアイテムを作成することができます。これは、既存のアイテムの偽のバージョンも含みます。デジタルアイテムを扱う際には十分に注意、調査をして、それがチェーン上にあるのか確かめてください。","plugin_collectible_total":"合計","plugin_collectible_subtotal":"小計","plugin_collectible_item":"アイテム","plugin_collectible_approved_tips":"このボックスをチェックすることで、このアイテムが OpenSea によってレビューまたは承認されていないことを認めます。","plugin_collectible_agree_terms":"このボックスをチェックすることで、OpenSea の<terms>利用規約</terms>に同意します。","plugin_collectible_convert_eth":"ETH を両替する","plugin_collectible_sale_end":"{{time}} に販売は終了します","plugin_collectible_set_initial_price":"初期価格を設定する。","plugin_collectible_ending_price_tip":"このアイテムはアイテムをあなたが転送もしくキャンセルするまで販売されます。","plugin_collectible_starting_price":"開始価格","plugin_collectible_ending_price":"終了価格","plugin_collectible_ending_price_less_than_staring":"終了価格は開始価格以下である必要があります。 価格は有効期限まで直線的に変動します。","plugin_collectible_expiration_date":"有効期限","plugin_collectible_schedule_date":"予定日","plugin_collectible_auto_cancel_tip":"あなたのリスティングは自動的にこの時間で終了します。あなたがキャンセル必要はありません！","plugin_collectible_schedule_future_date":"今後のスケジュールを立てる。","plugin_collectible_buyer_address":"買い手のアドレス","plugin_collectible_buyer_address_placeholder":"買い手のアドレスを入力する。","plugin_collectible_buyer_address_helper_text":"買い手だけが購入することができます。","plugin_collectible_include_ending_price":"終了価格を含む","plugin_collectible_include_ending_price_helper":"終了価格を追加すると、このリスティングが失効したり、買い手が見つかるまで価格が引き下げられたりします。","plugin_collectible_schedule_for_a_future_time":"未来の時間のスケジュールを立てる。","plugin_collectible_schedule_for_a_future_time_helper":"このリスティングは、未来のデータでのみ購入できるようにスケジュールを立てることができます。","plugin_collectible_privacy":"プライバシー","plugin_collectible_privacy_helper":"あなたはリスティングを公開にすることができますし、１つのアドレスだけが購入できるように指定することができます。","plugin_collectible_enter_a_price":"価格を入力","plugin_collectible_invalid_schedule_date":"無効な予定日","plugin_collectible_invalid_ending_price":"無効な終了価格","plugin_collectible_invalid_expiration_date":"無効な有効期限","plugin_collectible_invalid_buyer_address":"無効な買い手のアドレス","plugin_collectible_set_price":"価格を設定する","plugin_collectible_highest_bid":"最高の入札価格","plugin_collectible_minimum_bid":"最低の入札価格","plugin_collectible_set_starting_bid_price":"あなたの入札開始価格を設定する","plugin_collectible_reserve_price":"予約価格","plugin_collectible_reserve_price_helper":"予約価格を設定して、隠れた制限を作成します。 予約価格は開始価格以上である必要があります。","plugin_collectible_auction_auto_end":"この時点であなたのオークションは自動的に終了し、最高価格の入札者が落札します。キャンセルする必要はありません。","plugin_collectible_enter_minimum_bid":"最低入札価格の入力","plugin_collectible_enter_reserve_price":"予約価格の入力","plugin_collectible_invalid_reserve_price":"無効な予約価格","plugin_collectible_place_a_bid":"入札する","plugin_collectible_make_an_offer":"オファーする","plugin_collectible_approved_by_open_sea":"このボックスをチェックすることで、このアイテムが OpenSea によってレビューまたは承認されていないことを認めます。","plugin_collectible_legal_text":"このボックスをチェックすることで、OpenSea の<terms>利用規約</terms>に同意します。","plugin_snapshot_info_title":"情報","plugin_snapshot_info_strategy":"戦略家","plugin_snapshot_info_author":"著者","plugin_snapshot_info_start":"開始日","plugin_snapshot_info_end":"終了日","plugin_snapshot_result_title":"結果","plugin_snapshot_votes_title":"投票","plugin_snapshot_no_power":"投票権がありません","plugin_snapshot_vote_success":"投票されています！","plugin_snapshot_vote":"投票","plugin_snapshot_vote_choice":"選択","plugin_snapshot_vote_power":"あなたの投票力","plugin_snapshot_vote_title":"投票する","plugin_snapshot_vote_confirm_dialog_title":"投票の確認","plugin_snapshot_vote_confirm_dialog_choice":"本当に 「{{ choiceText }}」 に投票しますか？","plugin_snapshot_vote_confirm_dialog_warning":"このアクションは元に戻すことはできません。","plugin_snapshot_current_result_title":"現在の結果","plugin_snapshot_download_report":"レポートをダウンロードする","plugin_dhedge_managed_by":"<manager>{{managerName}}</manager> によって管理されています","plugin_dhedge_manager_share":"プールのうち <share>{{managerShare}}%</share> を所持しています","plugin_dhedge_value_managed":"価値が管理されています","plugin_dhedge_lifetime_return":"生涯リターン","plugin_dhedge_risk_factor":"リスク要因","plugin_dhedge_tab_stats":"統計","plugin_dhedge_tab_chart":"チャート","plugin_dhedge_strategy":"戦略家","plugin_dhedge_see_less":"閉じる","plugin_dhedge_see_more":"詳細","plugin_dhedge_no_data":"データがありません","plugin_dhedge_fetch_error":"データを取得できません。再度試してください。","plugin_dhedge_loading_chart":"ロード中","plugin_dhedge_invest":"投資する","plugin_dhedge_buy_token":"{{symbol}} を得る","plugin_dhedge_enter_an_amount":"量を入力","plugin_dhedge_insufficient_balance":"{{symbol}} の残高が不十分です","plugin_dhedge_loading":"ロード中…","plugin_dhedge_pool_not_found":"無効なプールアドレスです！","plugin_dhedge_smt_wrong":"何か間違いが発生しました！"}');
;// CONCATENATED MODULE: ./shared-ui/locales/ko-KR.json
const ko_KR_namespaceObject = JSON.parse('{"database_backup":"데이터베이스 백업","database_overwrite":"백업으로 데이터베이스를 덮어쓰기","database_clear":"데이터베이스 지우기","debug_new_bug_issue":"새 버그 문제","debug_metadata_title":"메타데이터를 추가하거나 현존 메타데이터를 교체하기","debug_metadata_put_metadata":"메타데이터 넣기","edit":"편집","clear":"지우기","more":"더 보기","approve":"승인","address":"주소","operation":"조작","gas_limit":"가스 한도","gas_price":"가스 가격","redirect_to":"리다이렉트","sign":"사인","reload":"다시 로드","load":"로드","load_all":"모두 로드하기","no_data":"데이터 없음","tip":"팁","tags":"태그","contract":"컨트랙트","initializing":"초기화 중...","redirect_alert":"브라우저가 리다이렉트하지 않으면 <terms>여기 클릭</terms>","typed_message_text_alert":"현재 TypedMessageText만 지원합니다.","badge_renderer_provided_by_plugin":"플러그인으로 제공","add_token":"토큰 추가","add_nft_contract_search_hint":"NFT 컨트렉트 이름이나 주소를 검색하기","applications":"어플리케이션","additional_post_box__encrypted_post_pre":"#mask_io로 이 게시물을 해독하기. {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet_twitter_official_account":"레드 패킷을 수령하고 #mask_io @{{account}} {{encrypted}} 하세요.","additional_post_box__encrypted_post_pre_red_packet":"#mask_io {{encrypted}} 덧붙이고 레드 패킷을 수령하세요.","additional_post_box__steganography_post_pre":"암호화된 이미지입니다. 📪🔑 mask.io 설치하고 해독하세요. {{random}}","auto_paste_failed_dialog_title":"수동으로 붙여넣기","auto_paste_failed_dialog_content":"아래의 문자와 이미지(있으면)를 복사하고 공유하세요","auto_paste_failed_dialog_image_caption":"새로운 탭에서 열기","auto_paste_failed_snackbar":"암호화된 내용을 수동으로 붙여넣으세요?","auto_paste_failed_snackbar_action":"방법을 알려주세요.","auto_paste_failed_snackbar_action_close":"닫기","automation_request_click_post_button":"“포스트” 버튼을 눌러 대화 작성을 오픈하세요.","try_again":"다시 시도","cancel":"취소","twitter_account":"realMaskNetwork","facebook_account":"masknetwork","comment_box__placeholder":"암호화된 코멘트 추가","confirm":"확인","copy_text":"문자 복사","loading_failed":"로딩 실패","copy_image":"이미지 복사","copy_success_of_wallet_addr":"지갑 주소 복사 성공","copy_success_of_text":"문자 복사 성공","copy_success_of_image":"이미지 복사 성공","connecting":"연결 중","create":"만들기","copied":"복사됨","daily":"일일","dashboard_tab_collectibles":"수집품","dashboard_no_collectible_found":"수집품이 없습니다.","days":"{{days}} 일마다","decrypted_postbox_add_recipients":"받는사람 추가","decrypted_postbox_decrypting":"Mask 해독 중","decrypted_postbox_decoding":"Mask 디코딩 중","decrypted_postbox_decrypting_finding_person_key":"Mask가 상대방의 공개 키를 찾고 있습니다...","decrypted_postbox_decrypting_finding_post_key":"Mask가 이 게시글의 키를 검색하고 있습니다.","decrypted_postbox_author_mismatch":"{{name}}님이 이 글을 처음 게시했습니다.","decrypted_postbox_title":"Mask로 해독되었습니다:","dismiss":"확인","delete":"삭제","delete_wallet":"월렛 삭제","hide_token":"토큰 숨기기","hide_token_hint":"대시보드에서 「토큰 추가」 로 <strong>{{token}}</strong> 다시 추가할 수 있습니다.","done":"닫기","download":"다운로드","failed":"실패","buy_now":"바로 매수하기","setup_guide_find_username_text":"프로필과 페르소나를 연결시키려면 아이디가 필요합니다.","setup_guide_connect_auto":"연결","setup_guide_connect_failed":"실패했습니다... 다시 시도해 보세요.","user_guide_tip_connected":"해당 계정에 성공적으로 연결되었습니다.","user_guide_tip_1":"클릭하여 메인 기능을 확인하세요.","user_guide_tip_2":"여기서 월렛을 연결하세요. 여기서 네트워크나 월렛을 바꿀 수 있습니다.","create_persona":"페르소나 만들기","connect_persona":"페로소나 연결하기","mask_network":"Mask Network","import":"불러오기","no_search_result":"결과 없음","loading":"로딩 중","unlock":"언락","payload_bad":"이 게시물은 손상된 것 같습니다. Mask가 해독할 수 없습니다.","payload_incomplete":"불완전한 게시물입니다. 해독하려면 완전한 게시물이 필요합니다.","payload_not_found":"페이로드를 찾을 수 없습니다.","payload_throw_in_alpha41":"Alpha41 이미 지원하 않습니다. 상대방에게 Mask를 업그레이드하라고 하세요!","personas":"페르소나","browser_action_enter_dashboard":"대시보드로 들어가기","pending":"대기 중…","popups_initial_tips":"{{type}} 로 로그인하거나 가입하세요.","beta_sup":"<sup>(beta)<sup>","post_dialog_plugins_experimental":"Plugins <sup>(Experimental)</sup>","post_dialog__button":"끝내기","post_dialog__image_payload":"이미지 페이로드","post_dialog__more_options_title":"추가 옵션","post_dialog__placeholder":"여기서 텍스트 치기...","post_dialog__select_recipients_end_to_end":"Myself","post_dialog__select_recipients_share_to_everyone":"모두에게","post_dialog__select_recipients_title":"받는사람 선택","post_dialog__select_specific_e2e_target_title":"또한 Mask Network 유저 ({{selected}} selected)","post_dialog__title":"Mask: 편집","post_dialog_enable_paste_auto":"자동 붙이기 지원","post_modal_hint__button":"암호화된 메시지를 편집하기","hide":"숨기기","reset":"초기화","editor":"에디터","retry":"다시 시도","rename":"이름 바꾸기","search":"검색","go_wrong":"오류가 발생합니다.","search_box_placeholder":"여기서 검색하기","select_all":"전체 선택","select_none":"전체 선택 취소","all_friends":"모든 친구들","select_specific_friends_dialog__button":"닫기","select_specific_friends_dialog__title":"지정 연락처 선택","service_decryption_failed":"해독 실패","service_invalid_backup_file":"Mask의 백업이 아닌 것 같습니다.","service_unknown_payload":"알 수 없는 게시물 버전입니다. Mask를 업데이트하세요.","service_username_invalid":"무효한 아이디입니다","speed_up":"가속하기","save":"저장","skip":"넘어가기","next":"다음","try":"시도","share":"공유","share_to":"...에게 공유하기","sharing":"공유 중","transfer":"이체","wallet_name":"월렛 이름","wallet_rename":"월렛 이름 바꾸기","wallet_add_nft_invalid_owner":"해당 수집품은 존재하지 않거나 유저님의 것이 아닙니다.","wallet_add_nft_already_added":"이미 추가된 수집품입니다.","wallet_loading_token":"토큰 로딩...","wallet_loading_nft_contract":"NFT 컨트렉트 로딩...","wallet_search_contract_no_result":"검색 포준에 맞추는 결과나 컨트렉트 주소가 없습니다.","wallet_search_no_result":"결과 없음.","wallet_airdrop_nft_unclaimed_title":"수령하지 않는 NFT 에어드랍:","plugin_airdrop_nft_start_time":"시작 시간: {{date}}","plugin_airdrop_nft_end_time":"종료 시간: {{date}}","plugin_airdrop_nft_expired":"만료됨","plugin_airdrop_nft_claim":"수령","plugin_airdrop_nft_claimed":"수령됨","plugin_airdrop_nft_check":"확인","plugin_airdrop_nft_check_address":"주소 확인","plugin_airdrop_nft_none_to_claim":"수령 가능한 에어드랍이 없습니다.","plugin_airdrop_nft_number_to_claim":"{{count}} {{name}} 수령이 가능합니다.","plugin_airdrop_nft_claim_all":"토큰 클레임","plugin_airdrop_nft_claim_successful":"토큰은 성공적으로 수령되었습니다.","plugin_airdrop_nft_claim_failed":"토큰 수령이 실패되었습니다","wallet_balance":"잔액","wallet_new":"새로운 월렛","wallets":"월렛","wallet_status_button_change":"바꾸기","wallet_status_button_disconnect":"연결 끊기","wallet_status_button_copy_address":"주소 복사","wallet_transfer_to_address":"주소","wallet_transfer_send":"보내기","wallet_transfer_title":"전송","wallet_transfer_error_amount_absence":"금액 입력","wallet_transfer_error_address_absence":"받는 주소 입력","wallet_transfer_error_invalid_address":"무효한 받는 주소","wallet_transfer_error_insufficient_balance":"{{symbol}} 잔액 부족","wallet_transfer_error_gas_price_absence":"가스비 입력","wallet_transfer_error_gas_limit_absence":"기스비 한도 입력","wallet_transfer_error_max_fee_absence":"최대 가스비 입력","wallet_transfer_error_max_priority_fee_absence":"최대 우선 가스비 입력","wallet_transfer_error_max_fee_too_low":"현재 네트워크 컨디션에서 최대 가스비가 너무 낮습니다.","wallet_transfer_error_max_fee_too_high":"최대 가스비는 필요한 것보다 높습니다.","wallet_transfer_error_max_priority_gas_fee_positive":"최대 우선 가스비는 0 GWEI보다 높아야 합니다","wallet_transfer_error_max_priority_gas_fee_too_low":"현재 네트워크 컨디션에서 최대 우선 가스비가 부족합니다","wallet_transfer_error_max_priority_gas_fee_too_high":"최대 우선 가스비가 필요한 것보다 높아서 필요 이상으로 지불할 수 있습니다.","wallet_transfer_error_max_priority_gas_fee_imbalance":"최대 기스비는 최대 우선 가스비보다 낮을 수 없습니다","wallet_transfer_gwei":"GWEI","wallet_risk_warning_dialog_title":"리스크 경고","wallet_risk_warning_no_select_wallet":"월렛 아직 선택하지 않습니다.","wallet_risk_warning_content":"유저님, <br/><br/>Mask Network의 월렛 관련된 플러그인을 사용하기 전에 다음의 이용 라스크를 확인하시길 바랍니다: <br/><br/> Mask Network는 비상업적 무료 서비스를 제공합니다. 플러그인은 커뮤니티 멤버들과 다른 제3자 DApp 팀이 제공하는 것입니다. 탈중앙화 네트워크의 자율성과 다른 기타 불확실한 리스크 요소때문에 사용자는 니모닉 단어, 개인키와 같은 중요한 정보를 적절히 보호해야 합니다. 블록체인 컨트렉트와 상호작용할 때 조심하시길 바랍니다. 제3자 DApp(플러그인) 으로 인한 리스크는 제3자 DApp 자체가 책임집니다. 확인 버튼을 클릭하면 위의 가능한 리스크를 감수하는 데 동의함을 의미합니다.","weekly":"주간","wallet_risk_confirm_confirming":"확인","wallet_risk_confirm_failed":"확인 실패","relative_time_days_ago":"{{days}} 일 전","relative_time_hours_ago":"{{hours}} 시간 전","relative_time_minutes_ago":"{{minutes}} 분 전","relative_time_months_ago":"{{months}} 월 전","relative_time_seconds_ago":"{{seconds}} 초 전","relative_time_years_ago":"{{years}} 년 전","plugin_wallet_collections":"컬렉션","plugin_wallet_select_a_token":"토큰을 선택하기","plugin_wallet_select_a_nft_contract":"NFT 컨트렉트를 선택하세요.","plugin_wallet_select_a_nft_owner":"NFT 컨트렉트 소유자를 선택하세요.","plugin_wallet_select_a_nft_operator":"NFT 컨트렉트 오퍼레이터","plugin_wallet_fail_to_load_nft_contract":"NFT 컨트렉트 로드 실패. 다시 시도하세요.","plugin_wallet_nft_approving_all":"모든 NFT 승인 중...","plugin_wallet_approve_all_nft":"모든 NFT 승인되었습니다.","plugin_wallet_approve_all_nft_successfully":"모든 NFT는 성공적으로 승인되었습니다","plugin_wallet_connect_a_wallet":"월렛을 연결하기","plugin_wallet_confirm_risk_warning":"리스크 경고 확인","plugin_wallet_no_gas_fee":"가스비가 없습니다","plugin_wallet_update_gas_fee":"가스비 업데이트 중...","plugin_wallet_invalid_network":"잘못된 네트워크","plugin_wallet_select_a_wallet":"월렛 선택","plugin_wallet_transaction":"거래","plugin_wallet_transaction_wait_for_confirmation":"확인 중","plugin_wallet_transaction_submitted":"해당 거래는 이미 제출되었습니다.","plugin_wallet_transaction_confirmed":"해당 거래는 이미 확인되었습니다.","plugin_wallet_transaction_reverted":"해당 거래는 이미 복구되었습니다.","plugin_wallet_transaction_rejected":"해당 거래는 이미 거부되었습니다.","plugin_wallet_transaction_server_error":"JSON-RPC 오류 때문에 거래가 실패했습니다.","plugin_wallet_view_on_explorer":"Explorer에서 보기","plugin_ito_placeholder_when_token_unselected":"토큰을 선택하세요","plugin_wallet_wrong_network_tip":"정확한 이더리움 네트워크를 연결하세요.","plugin_wallet_on_create":"월렛 만들기","plugin_wallet_on_connect":"월렛 연결하기","plugin_wallet_wrong_network":"잘못된 네트워크","plugin_wallet_pending_transactions":"{{count}} 대기 중","plugin_wallet_import_wallet":"월렛 불러오기","plugin_wallet_select_provider_dialog_title":"월렛 연결","plugin_wallet_qr_code_with_wallet_connect":"WalletConnect와 호환성이 있는 월렛으로 QR 코드를 스칸하세요.","plugin_wallet_token_unlock":"정확 언락","plugin_wallet_token_infinite_unlock":"무한 언락","plugin_wallet_connect_dialog_title":"월렛 연결","plugin_wallet_connect_safari_metamask":"MetaMask 연결하기","plugin_wallet_connect_safari_rainbow":"Rainbow 연결하기","plugin_wallet_connect_safari_trust":"Trust 연결하기","plugin_wallet_connect_safari_im_token":"imToken 연결하기","plugin_wallet_on_connect_in_firefox":"연결","plugin_wallet_return_mobile_wallet_options":"모바일 월렛 옵션으로 돌아가기","plugin_wallet_view_qr_code":"QR 코드 보기","plugin_wallet_switch_network":"{{network}} 네트워크로 바꾸기","plugin_wallet_switch_network_under_going":"{{network}} 네트워크로 바꾸는 중...","plugin_wallet_not_available_on":"{{network}} 에서는 사용할 수 없습니다.","plugin_wallet_connect_wallet":"월렛 연결","plugin_wallet_connect_wallet_tip":"월렛을 연결하세요.","plugin_wallet_name_placeholder":"1-12 자 입력하세요","plugin_wallet_fail_to_sign":"비밀번호 사인 실패합니다.","plugin_wallet_cancel_sign":"서명이 실패되었습니다.","plugin_red_packet_display_name":"플러그인: 빨간 백","plugin_red_packet_erc20_tab_title":"토큰","plugin_red_packet_erc721_tab_title":"수집품","plugin_red_packet_erc721_insufficient_balance":"잔액 부족","plugin_red_packet_details":"행운 드랍 디테일","plugin_red_packet_split_mode":"분할 모드","plugin_red_packet_average":"평균","plugin_red_packet_random":"렌덤","plugin_red_packet_shares":"공유","plugin_red_packet_best_wishes":"행운을 빌어요!","plugin_red_packet_create_new":"새로운 것 만들기","plugin_red_packet_claim":"수령","plugin_red_packet_claiming":"수령 중...","plugin_red_packet_refund":"반환","plugin_red_packet_empty":"비어 있음","plugin_red_packet_data_broken":"데이터 손상으로 인해 레드 패킷을 보낼 수 없습니다. {{duration}} 후 자산을 인출할 수 있습니다.","plugin_red_packet_refunding":"환급 중","plugin_red_packet_select_existing":"기존 빨간 백 선택","plugin_red_packet_share_message_official_account":"{{network}} 네트워크에서 @{{sender}}의 레트 패킷을 받았어요. @{{account}} (mask.io) 팔로우하고 레드 패킷을 받으세요.\\n#mask_io #LuckyDrop\\n{{payload}}","plugin_red_packet_share_message_not_twitter":"{{network}} 에서 @{{sender}} 의 레드 패킷을 클레임했습니다.\\n{{payload}}","plugin_red_packet_nft_share_foreshow_message":"@{{network}} 네트워크에서 @{{sender}} 레트 패킷을 보내고 있습니다. @{{account}} (mask.io) 팔로우하고 NFT 레드 패킷을 받으세요.\\n#mask_io #LuckyDrop\\n{{payload}}","plugin_red_packet_nft_share_foreshow_message_not_twitter":"@{{network}} 네트워크에서 @{{sender}} NFT 레트 패킷을 보내고 있습니다. \\n{{payload}}","plugin_red_packet_nft_share_claimed_message":"{{network}} 네트워크에서 @{{sender}}의 NFT 레트 패킷을 받았어요. @{{account}} (mask.io) 팔로우하고 NFT 레드 패킷을 받으세요.\\n#mask_io #LuckyDrop\\n{{payload}}","plugin_red_packet_nft_share_claimed_message_not_twitter":"{{network}} 에서 @{{sender}} 의 NFT 레드 패킷을 클레임했습니다.\\n{{payload}}","plugin_red_packet_nft_tip":"이것은 NFT 레드 패킷입니다.","plugin_red_packet_attached_message":"첨부 메시지","plugin_red_packet_from":"보낸사람: {{name}}","plugin_red_packet_description_claimed":"이미 수령하였습니다.","plugin_red_packet_description_expired":"이 빨간 백 이미 만료되었습니다.","plugin_red_packet_description_refunded":"이 빨간 백 이미 반환되었습니다.","plugin_red_packet_description_refund":"{{balance}} {{symbol} 반환 가능합니다.","plugin_red_packet_description_empty":"빈 빨간 백입니다.","plugin_red_packet_description_broken":"파손된 빨간 백입니다.","plugin_red_packet_description_failover":"{{name}} / {{shares}}에서  / {{total}} {{symbol}} 공유합니다.","plugin_red_packet_claiming_from":"{{name}}에서 빨간 팩 받는 중","plugin_red_packet_amount_per_share":"공유 총액","plugin_red_packet_send_symbol":"{{symbol}} 보내기","plugin_red_packet_amount_total":"총액","plugin_red_packet_next":"다음","plugin_red_packet_back":"뒤로","plugin_red_packet_hint":"레드 패킷이 공유된 후 24시간 후에 나머지 잔액을 인출할 수 있습니다.","plugin_red_packet_token":"토큰","plugin_red_packet_message_label":"제목","plugin_red_packet_create_with_token":"{{symbol}} 으로 빨간 백 만드는 중","plugin_red_packet_history_duration":"시간: {{startTime}} ~ {{endTime}} (UTC+8)","plugin_red_packet_history_total_amount":"총액: {{amount}} {{symbol}}","plugin_red_packet_history_total_claimed_amount":"전체: <span><strong>{{claimedAmount}}/{{amount}}</strong></span> {{symbol}}","plugin_red_packet_history_claimed":"수령됨: <strong>{{claimedShares}}/{{shares}}</strong> 공유","plugin_red_packet_history_split_mode":"Split Mode: {{mode}}","plugin_red_packet_history_send":"발송","plugin_red_packet_nft_account_name":"지갑 계정","plugin_red_packet_nft_attached_message":"첨부 메시지","plugin_red_packet_nft_total_amount":"총 금액","plugin_red_packet_completed":"완료됨","plugin_red_packet_expired":"만료됨","plugin_nft_red_packet_data_broken":"테이터 훼손때문에 해당 레드 패킷을 보낼 수 없습니다.","plugin_gitcoin_readme":"이 서비스를 이용하면 <fund>Gitcoin 개발 기금에 당신의 기여금</fund>의 5%를 기부할 것이다.","plugin_gitcoin_readme_fund_link":"https://gitcoin.co/grants/86/gitcoin-sustainability-fund","plugin_gitcoin_select_a_token":"토큰 선택","plugin_gitcoin_enter_an_amount":"수액 입력","plugin_gitcoin_grant_not_available":"이용 불가","plugin_gitcoin_insufficient_balance":"{{symbol}} 잔액 부족","plugin_gitcoin_donate":"기부","plugin_gitcoin_last_updated":"신규 업데이트","plugin_gitcoin_by":"By","plugin_gitcoin_view_on":"Gitcoin에서 보기","plugin_trader_safety_alert_title":"토큰 안정성 알림","plugin_trader_safety_alert":"누구나 ERC20 토큰을 만들고 이름을 지을 수 있다. 토큰이 없는 프로젝트를 대표한다고 주장하는 토큰과 현존 토큰의 가짜 버전을 만드는 경우도 많습니다. Etherscan과 마찬가지로 이 사이트는 모든 ERC20 토큰에 대한 분석을 자동으로 추적합니다. ERC20 토큰과 상호 작용하기 전에 미리 잘 조사하시길 바랍니다.","plugin_trader_total_supply":"총 공급량","plugin_trader_circulating_supply":"유통량","plugin_trader_volume_24":"거래량 (24시간)","plugin_trader_market_cap":"시가 총액","plugin_trader_data_source":"데이터 소스","plugin_trader_price_updated":"가격은 업데이트뒤었습니다","plugin_trader_swap":"스왑","plugin_trader_wrap":"랩","plugin_trader_unwrap":"언랩","plugin_trader_buy":"구매","plugin_trader_no_data":"데이터 없음","plugin_trader_tab_market":"일반","plugin_trader_tab_price":"가격","plugin_trader_tab_exchange":"교환","plugin_trader_tab_swap":"스왑 🔥","plugin_trader_table_exchange":"교환","plugin_trader_table_pair":"짝","plugin_trader_table_price":"가격","plugin_trader_table_volume":"거래량(24h)","plugin_trader_table_updated":"업데이트","plugin_trader_error_amount_absence":"수액 입력","plugin_trader_error_insufficient_balance":"{{symbol}}잔액 부족","plugin_trader_error_insufficient_lp":"유동성 부족","plugin_trade_error_input_amount_less_minimum_amount":"입력 금액은 최소 금액 이하입니다.","plugin_trader_slippage_tolerance":"슬리피지 톨러런스:","plugin_trader_swap_from":"From","plugin_trader_swap_to":"To(estimated)","plugin_trader_gas_fee":"기스비","plugin_trader_unlock_symbol":"{{symbol}} 언락","plugin_trader_unlock_tips":"{{provider}}에게 {{symbol}} 이용할 수 있는 스마트 컨트랙트 권한을 줘야 합니다. 토큰당 이 작업을 한번만 수행하면 됩니다.","plugin_trader_swap_amount_symbol":"스왑 {{amount}} {{symbol}} ","plugin_trader_confirm_from":"From","plugin_trader_confirm_to":"To","plugin_trader_confirm_max_price_slippage":"최대 가격 슬리피지","plugin_trader_confirm_minimum_received":"촤소 받는 수액","plugin_trader_confirm_tips":"최대 가격 슬리피지를 너무 낮게 설정하면 가격 변동으로 인해 거래가 실패할 수 있습니다.","plugin_trader_max_slippage":"최대 슬리피지","plugin_trader_gas_setting_instant":"즉시","plugin_trader_gas_setting_high":"높음","plugin_trader_gas_setting_medium":"보통","plugin_trader_gas_setting_standard":"표준","plugin_trader_gas_setting_fast":"빠름","plugin_trader_gas_setting_custom":"커스텀","plugin_trader_tx_cost_usd":"(~${{usd}})","plugin_trader_gas_option":"{{option}} ({{value}}) Gwei","plugin_trader_no_enough_liquidity":"유동성 부족","plugin_trader_no_trade":"거래를 선택하세요","plugin_trader_gas":"GAS","plugin_poll_display_name":"플러그인: 투표","plugin_poll_question_hint":"질문하기","plugin_poll_options_hint":"항목","plugin_poll_length":"투표 시간","plugin_poll_length_days":"일","plugin_poll_length_hours":"시간","plugin_poll_length_minutes":"분","plugin_poll_length_unknown":"미지","plugin_poll_create_new":"새로운 투표 만들기","plugin_poll_select_existing":"기존 투표 선택","plugin_poll_send_poll":"투표 보내기","plugin_poll_status_closed":"종료됨","plugin_poll_status_voting":"투표 중","plugin_poll_status_voted":"투표 완료","plugin_poll_deadline":"{{time}} 남은 시간","plugin_ito_empty_token":"이번의 ITO에서 토큰 언락의 필요가 없습니다.","plugin_ito_locked":"ITO 락됨","plugin_ito_share":"공유하기","plugin_ito_enter":"들어가기","plugin_ito_dialog_swap_title":"스왑 {{token}}","plugin_ito_dialog_swap_reminder_title":"스왑 알림","plugin_ito_dialog_swap_unlock_title":"토큰 미리 언락","plugin_ito_dialog_swap_share_title":"공유","plugin_ito_dialog_swap_exchange":"교환 대상","plugin_ito_dialog_swap_panel_title":"스왑","plugin_ito_dialog_swap_exceed_wallet_limit":"한 월렛의 제한을 초과합니다.","plugin_ito_swap_ration_label":"스왑 비율","plugin_ito_swap_unlucky_fail":"운이 안 좋은 것 같습니다. 이더리움 링크에서 원인을 확인하고 다시 시도하세요.","plugin_ito_swap_only_once_remind":"월렛마다 한번만 참여할 수 있습니다.","plugin_ito_swap_title":"{{swap}}마다 {{amount}} {{token}}","plugin_ito_swap_end_date":"종료 날짜: {{date}}","plugin_ito_dialog_claim_reminder_agree":"동의합니다.","plugin_ito_dialog_claim_reminder_text1":"ERC20 토큰은 누구나 이더리움에서 만들 수 있습니다. 기존 토큰의 가짜 버전과 토큰이 없는 프로젝트를 대표한다고 주장하는 토큰도 포함되어 있습니다.","plugin_ito_dialog_claim_reminder_text2":"이 화면은 토큰 주소로 arbitrary tokens 로드할 수 있습니다. arbitrary ERC20 tokens 로드할 때 해당 정보를 수집하고 많이 주의하셔야 합니다.","plugin_ito_dialog_claim_reminder_text3":"arbitrary token 매수하면 디시 매도하지 못할 가능성도 있습니다.","plugin_ito_dialog_claim_reminder_text4":"THE RIGHTS ARE NOT BEING OFFERED OR SOLD AND MAY NOT BE OFFERED OR SOLD, DIRECTLY OR INDIRECTLY, IN WHOLE OR IN PART, IN JURISDICTIONS OR TO WHOM SUCH AN OFFER WOULD BE UNLAWFUL","plugin_ito_expired":"만료됨","plugin_ito_create_new":"새로","plugin_ito_claim_all_title":"토큰 클레임","plugin_ito_claim_all_status_unclaimed":"수령되지 않음","plugin_ito_claim_all_status_locked":"락","plugin_ito_claim_all_unlock_time":"언락 시간: {{time}}","plugin_ito_claim_all_dialog_title":"토큰 수령","plugin_ito_swapping":"운이 좋으면 {{amount}} {{symbol}} 획득 가능합니다. 아니면 ITO 종료된 후, 반환금을 받을 수 있습니다.","plugin_ito_advanced":"고급 옵션","plugin_ito_advanced_ip_region":"IP 지역 제한","plugin_ito_advanced_delay_unlocking":"언락 지연","plugin_ito_advanced_contract":"플러그인 컨트랙트","plugin_ito_select_existing":"이전","plugin_ito_display_name":"ITO 설정","plugin_ito_sell_token":"토큰","plugin_ito_sell_price":"가격","plugin_ito_sell_total_amount":"입력","plugin_ito_allocation_per_wallet":"스왑 제한 {{limit}} {{token}}","plugin_ito_wait_unlock_time":"{{unlockTime}}에 수령하기","plugin_ito_claim":"수령","plugin_ito_claiming":"수령 중","plugin_ito_claim_all":"모두 수령","plugin_ito_qualification_start_time":"자격 인정 시작 시간","plugin_ito_error_qualification_start_time":"주의: 자격 인정 시작 시간이 ITO 종료 시간보다 빨아야 합니다.","plugin_ito_error_invalid_qualification":"무효한 인증 주소입니다.","plugin_ito_unlock_time_cert":"ITO Mask 언락 시간은 {{date}}.","plugin_ito_unlock_time":"언락 시간 {{zone}}","plugin_ito_launch_campaign":"SocialFi Launch Campaign","plugin_ito_total_claimable_count":"전체: ","plugin_ito_qualification_label":"플러그인 컨트랙트","plugin_ito_message_label":"제목","plugin_ito_region_label":"IP 지역 선택","plugin_ito_region_confirm_label":"IP 지역","plugin_ito_region_list":"{{ select }} / {{ all }} 지역","plugin_ito_region_all":"전체 지역","plugin_ito_region_search":"지역 이름을 입력하여 검색하기","plugin_ito_region_ban":"이 풀은 해당 지역의 크리에이터에 의해 금지됩니다.","plugin_ito_next":"다음","plugin_ito_back":"뒤로","plugin_ito_transaction_dialog_summary":"{{amount}} {{symbol}}로 ITO를 만들기","plugin_ito_swap":"스왑","plugin_ito_send_tip":"이전 탭에서 과거의  ITO를 찾을 수 있습니다.","plugin_ito_send_text":"{{total}} {{symbol}} 발송하기","plugin_ito_error_enter_amount":"수액 입력","plugin_ito_error_select_token":"토큰 선택","plugin_ito_error_enter_amount_and_token":"수액을 입력하고 토큰을 선택하세요.","plugin_ito_error_allocation_absence":"스왑 제한 입력","plugin_ito_error_allocation_invalid":"무효 수액","plugin_ito_error_exchange_time":"주의: 시작 시간은 종료 시간보다 늦으면 안됩니다.","plugin_ito_error_unlock_time":"주의: 종료 시간은 언락 시간보다 늦으면 안됩니다.","plugin_ito_error_balance":"{{symbol}} 잔액 부족","plugin_ito_list_start_date":"시작 시간 {{date}}","plugin_ito_list_end_date":"종료 시간 {{date}}","plugin_ito_list_sold_total":"스왑됨","plugin_ito_list_total":"전체:","plugin_ito_list_table_type":"유형","plugin_ito_list_table_price":"스왑 비율","plugin_ito_no_claimable_token":"수령 가능 토큰이 없습니다.","plugin_ito_list_table_sold":"스왑됨","plugin_ito_list_table_got":"잔액","plugin_ito_list_button_send":"발송","plugin_ito_withdraw":"철회","plugin_ito_qualification_loading":"자격 인증...","plugin_ito_qualification_failed":"이 월렛 주소는 리스트에 없습니다.","plugin_ito_withdrawn":"철회됨","plugin_ito_your_swapped_amount":"{{amount}} {{symbol}} 스왑되었습니다.","plugin_ito_your_claimed_amount":"{{amount}} {{symbol}} 수령되었습니다.","plugin_ito_your_refund_amount":"{{amount}} {{symbol}} 반환하기","plugin_ito_unlock_in_advance":"미리 언락하기","plugin_ito_swapped_status":"{{remain}} / {{total}} {{token}} 스왑됨","plugin_ito_congratulations":"축하합니다!","plugin_ito_out_of_stock_hit":"다음에 운이 더 좋으시길 바랍니다","plugin_ito_claim_success_share":"제가 @{{account}} 로 @{{user}}\'s #ITO에 참여하여 ${{symbol}} 스왑을 했습니다. Mask.io를 설치하고 자기만의 ITO를 시작하세요! \\n {{link}}","plugin_ito_claim_success_share_no_official_account":"제가 @{{user}}\'s #ITO에 참여하여 ${{symbol}} 스왑을 했습니다. Mask.io를 설치하고 자기만의 ITO를 시작하세요! \\n {{link}}","plugin_ito_claim_foreshow_share":"{{symbol}}({{name}}) 새로운 #ITO를 진행하고 있습니다. 어서 참가하세요! @{{account}} (mask.io) 팔로우하여 더 많은 이벤트를 참여하세요! \\n {{link}}","plugin_ito_claim_foreshow_share_no_official_account":"{{symbol}}({{name}}) 님이 #ITO를 진행하고 있습니다. 어서 참여하세요! \\n {{link}}","plugin_ito_password":"비밀번호: {{password}}","plugin_ito_status_no_start":"아직 시작하지 않음","plugin_ito_status_ongoing":"진행 중","plugin_ito_status_out_of_stock":"매진됨","plugin_ito_loading":"ITO 로딩 중...","plugin_ito_amount_unlocked":"{{amount}} {{symbol}} 언락됨","plugin_ito_amount_unlocked_infinity":"언락된 인피니티 {{symbol}}","plugin_ito_unlocking_symbol":"{{symbol}} 언락 중","plugin_ito_continue":"다음","plugin_ito_view_on_explorer":"Explorer에서 보기","plugin_collectible_you":"You","plugin_collectible_done":"닫기","plugin_collectible_retry":"다시 시도하기","plugin_collectible_sell":"매도","plugin_collectible_checkout":"확인하기","plugin_collectible_place_bid":"입찰","plugin_collectible_buy_now":"바로 구매","plugin_collectible_make_offer":"오퍼하기","plugin_collectible_post_listing":"포스트 리스팅","plugin_collectible_description":"현재의 가격은 <strong>{{price}} {{symbol}}</strong>.","plugin_collectible_article":"글","plugin_collectible_overview":"오버뷰","plugin_collectible_details":"디테일","plugin_collectible_offers":"오퍼","plugin_collectible_listing":"리스팅","plugin_collectible_history":"역사 기록","plugin_collectible_event":"이벤트","plugin_collectible_unit_price":"단위 가격","plugin_collectible_price":"가격","plugin_collectible_from":"보낸 사람","plugin_collectible_to":"받는 사람","plugin_collectible_date":"날짜","plugin_collectible_quantity":"수령","plugin_collectible_expiration":"종료","plugin_collectible_no_offers":"오버 없음","plugin_collectible_no_listings":"리스팅 없음","plugin_collectible_base":"베이스","plugin_collectible_properties":"속성","plugin_collectible_about":"정보","plugin_collectible_chain_info":"체인 정보","plugin_collectible_contract_address":"컨트랙트 주소","plugin_collectible_token_id":"토큰 ID","plugin_collectible_block_chain":"불록체인","plugin_collectible_create_by":"만든사람:","plugin_collectible_owned_by":"소유자:","plugin_collectible_view_on":"View on","plugin_collectible_no_history":"기록없음","plugin_collectible_ensure_unreviewed_item":"리뷰되지 않는 아이템을 확인하세요","plugin_collectible_check_tos_document":"ToS 파일을 확인하세요","plugin_collectible_insufficient_offer":"오버 보족","plugin_collectible_not_been_reviewed_by_opensea":"해당 아이템은 OpenSea에게 리뷰하지 않습니다.","plugin_collectible_reviewed_tips":"주의: 블록체인에서 임의\\n 이름으로 디지털 아이템을 만드는 것을 누구나 할 수 있습니다(기존 아이템의 가짜 버전도 포함됨). 해당 아이템과 상호작용할 때 주의하시고 사전 조사\\n  많이 하셔야 합니다.","plugin_collectible_total":"전체","plugin_collectible_subtotal":"소계","plugin_collectible_item":"아이템","plugin_collectible_approved_tips":"이 박스를 체크하면 해당 아이템은 아직 OpenSea에게 리뷰\\n 되거나 인증되지 않는 것을 인정합니다.","plugin_collectible_agree_terms":"이 박스를 체크하면 OpenSea의 <terms>항목과 서비스</terms> 동의합니다.","plugin_collectible_convert_eth":" ETH 전환","plugin_collectible_sale_end":"세일 종료 시간: {{time}}","plugin_collectible_set_initial_price":"시작 가격 설치","plugin_collectible_ending_price_tip":"해당 아이템이 바뀌거나 취소되지 않으면 세일은 계속 진행하겠습니다.","plugin_collectible_starting_price":"시작 가격","plugin_collectible_ending_price":"종료 가격","plugin_collectible_ending_price_less_than_staring":"시작 가격보다 낮거나 같아야 합니다. 가격은 종료시간이 되기 전에 이 금액까지 선형적으로 진행됩니다.","plugin_collectible_expiration_date":"종료 시간","plugin_collectible_schedule_date":"예정 시간","plugin_collectible_auto_cancel_tip":"해당 리스팅은 이 시간에 작동적으로 종료됩니다. 취소 안 해도 됩니다.","plugin_collectible_schedule_future_date":"미래의 시간을 정하세요.","plugin_collectible_buyer_address":"구매자 주소","plugin_collectible_buyer_address_placeholder":"구매자 주소 입력","plugin_collectible_buyer_address_helper_text":"해당 상품은 저정된 구매자만 구매 가능합니다.","plugin_collectible_include_ending_price":"종료 가격 추가","plugin_collectible_include_ending_price_helper":"종료 가격을 추가하면 해당 리스팅의 만료가 가능하게 되거나 구매자를 찾을 때까지 가격이 지속적으로 낮아지게 됩니다.","plugin_collectible_schedule_for_a_future_time":"미래 시간 예정","plugin_collectible_schedule_for_a_future_time_helper":"해당 리스팅은 지정된 시간에만 구매될 수 있도록 설치할 수 있습니다.","plugin_collectible_privacy":"프라이버시","plugin_collectible_privacy_helper":"해당 리스팅은 모든 이용자에게 공개하거나 저정된 주소만 구매 가능하도록 설치할 수 있습니다.","plugin_collectible_enter_a_price":"가격 입력","plugin_collectible_insufficient_balance":"잔액 부족","plugin_collectible_invalid_schedule_date":"무효한 일정 날짜","plugin_collectible_invalid_ending_price":"무효한 종료 가격","plugin_collectible_invalid_expiration_date":"무효한 종료 시간","plugin_collectible_invalid_buyer_address":"무효한 구매자 주소","plugin_collectible_set_price":"가격 설정","plugin_collectible_highest_bid":"최고 비드","plugin_collectible_minimum_bid":"최저 비드","plugin_collectible_set_starting_bid_price":"시작 경매 가격 설정","plugin_collectible_reserve_price":"최저 경매 가격","plugin_collectible_reserve_price_helper":"최저 경매 가격을 설치하여 숨겨진 제한을 만듭니다. 최저 경매 가격은 시작 가격보다 낮거나 같아야 합니다.","plugin_collectible_auction_auto_end":"이 사간에 해당 경매은 자동적으로 종료되고 최고 경매자가 낙찰됩니다. 최소 안 해도 됩니다.","plugin_collectible_enter_minimum_bid":"최저 비드 입력","plugin_collectible_enter_reserve_price":"최저 경매 가격 입력","plugin_collectible_invalid_reserve_price":"무효한 최저 경매 가격입니다.","plugin_collectible_place_a_bid":"입찰","plugin_collectible_make_an_offer":"오퍼하기","plugin_collectible_approved_by_open_sea":"이 백스를 체크하면 OpenSea에서 이 항목을 리뷰받거나 승인받지 않았다는 것을 알 수 있습니다.","plugin_collectible_legal_text":"이 박스를 체크하면 OpenSea의 <terms>항목과 서비스</terms> 동의합니다.","plugin_cryptoartai_description_title":"설명","plugin_cryptoartai_edition":"Edition of","plugin_cryptoartai_operator":"오퍼레이터","plugin_cryptoartai_activity_type":"유형","plugin_cryptoartai_status":"상태","plugin_cryptoartai_time":"시간","plugin_cryptoartai_price":"가격","plugin_cryptoartai_tx":"Tx","plugin_cryptoartai_latest_bid":"최근 입찰","plugin_cryptoartai_description":"Current Bid is <strong>{{bidPrice}}{{symbol}}</strong>, price is <strong>{{price}}{{symbol}}</strong>. Edition {{soldNum}} of {{totalAvailable}} #{{editionNumber}}.","plugin_snapshot_info_title":"정보","plugin_snapshot_info_strategy":"전략","plugin_snapshot_info_author":"저자","plugin_snapshot_info_ipfs":"IPFS","plugin_snapshot_info_start":"시작 날짜","plugin_snapshot_info_end":"종료 날짜","plugin_snapshot_info_snapshot":"스냅숏","plugin_snapshot_result_title":"결과","plugin_snapshot_votes_title":"투표","plugin_snapshot_no_power":"파워없음","plugin_snapshot_vote_success":"투표가 시작되었습니다.","plugin_snapshot_vote":"투표","plugin_snapshot_vote_choice":"선택","plugin_snapshot_vote_power":"투표 파워","plugin_snapshot_vote_title":"투표하세요.","plugin_snapshot_vote_confirm_dialog_title":"투표 확인","plugin_snapshot_vote_confirm_dialog_choice":" 「{{ choiceText }}」 투표하시겠습니까?","plugin_snapshot_vote_confirm_dialog_warning":"이 조작은 취소할 수 없습니다.","plugin_snapshot_current_result_title":"현재 결과","plugin_snapshot_download_report":"다운로드 리포트","plugin_find_truman_no_participation_tip":"아직 아무 투표에 참여하지 않았습니다.","plugin_dhedge_managed_by":"관리자: <manager>{{managerName}}</manager>","plugin_dhedge_manager_share":"풀의 <share>{{managerShare}}%</share> 홀드합니다.","plugin_dhedge_manager_share_more_than_50":"이 풀의 50% 이상을 보유합니다","plugin_dhedge_value_managed":"VALUE MANAGED","plugin_dhedge_lifetime_return":"LIFETIME RETURN","plugin_dhedge_risk_factor":"RISK FACTOR","plugin_dhedge_tab_stats":"통계","plugin_dhedge_tab_chart":"차트","plugin_dhedge_strategy":"전략","plugin_dhedge_see_less":"접어 보기","plugin_dhedge_see_more":"더보기","plugin_dhedge_no_data":"데이터 없음","plugin_dhedge_fetch_error":"데이터를 불러올 수 없습니다. 다시 시도하세요!","plugin_dhedge_loading_chart":"로딩 중","plugin_dhedge_invest":"투자","plugin_dhedge_buy_token":"{{symbol}} 획득","plugin_dhedge_enter_an_amount":"수액 입력","plugin_dhedge_insufficient_balance":"{{symbol}} 잔액 부족","plugin_dhedge_loading":"로딩 중","plugin_dhedge_pool_not_found":"무효한 풀 주소!","plugin_dhedge_smt_wrong":"오류가 발생합니다.","plugin_pooltogether_tab_pools":"풀(Pools)","plugin_pooltogether_tab_account":"계정","plugin_pooltogether_no_pool":"해당 네트워크에서 풀이 없습니다.","plugin_pooltogether_pool_ended":"수상됨","plugin_pooltogether_deposit":"입금 {{token}}","plugin_pooltogether_apr":"{{token}} 로 {{apr}}% APR 받습니다","plugin_pooltogether_view_pool":"View pool","plugin_pooltogether_prize":"{{period}} 가격","plugin_pooltogether_share":"I just deposit {{amount}} {{cashTag}}{{symbol}} into the {{pool}}, can I win the lottery this week?\\nFollow @PoolTogether_ and @{{account}} (mask.io) to deposit in PoolTogether\'s pools.\\n#pooltogether #mask_io","plugin_pooltogether_share_no_official_account":"{{pool}} 에서 {{amount}} {{cashTag}}{{symbol}} 예금했습니다, 이번 주 당첨될 수 있을까요?","plugin_pooltogether_buy":"{{symbol}} 획득","plugin_pooltogether_enter_an_amount":"금액 입력","plugin_pooltogether_insufficient_balance":"{{symbol}} 잔액 부족","plugin_pooltogether_deposit_title":"{{token}} 입금","plugin_pooltogether_odds_title":"새로운 우승 확률:","plugin_pooltogether_odds_value":"1 in {{value}} {{period}}!","plugin_pooltogether_short_odds_value":"1 in {{value}}","plugin_pooltogether_my_deposits":"입금 총액","plugin_pooltogether_no_account_pool":"해당 네트워크에서 풀이 없습니다.","plugin_pooltogether_missing_pool":"입금 좀 놓쳤나요? 전체 목록 확인:\\n","plugin_pooltogether_winning_odds":"우승 확율:","plugin_pooltogether_in":"in","plugin_pooltogether_manage":"관리","plugin_pooltogether_token_not_found":"토큰 찾을 수 없음","plugin_good_ghosting_loading_other_player_stats":"다른 참여자 정보 로딩","plugin_good_ghosting_loading_game_stats":"게임 정보 로딩","plugin_good_ghosting_game_duration":"게임 기간","plugin_good_ghosting_current_round":"현재 라운드","plugin_good_ghosting_recurring_deposit":"라운드당 입금","plugin_good_ghosting_round_length":"라운드 기간","plugin_good_ghosting_pool_apy":"풀 APY","plugin_good_ghosting_pool_earnings":"풀 수익","plugin_good_ghosting_extra_rewards":"추가 보상","plugin_good_ghosting_total_saved":"입금 총량","plugin_good_ghosting_game_launched":"게임 런칭","plugin_good_ghosting_join_round":"라운드 참여","plugin_good_ghosting_join_deadline":"마감 시간","plugin_good_ghosting_deposit":"입금 {{index}}","plugin_good_ghosting_deposit_deadline":"입금 마감 시간 {{index}}","plugin_good_ghosting_waiting_round":"대기 라운드","plugin_good_ghosting_waiting_round_end":"대기 기간 종료","plugin_good_ghosting_withdraw":"철회","plugin_good_ghosting_all_players_status_winning":"우승","plugin_good_ghosting_all_players_status_waiting":"대기 중","plugin_good_ghosting_all_players_status_ghost":"Ghosts","plugin_good_ghosting_all_players_status_dropout":"탈퇴자","plugin_good_ghosting_status_winning":"우승","plugin_good_ghosting_status_waiting":"대기 중","plugin_good_ghosting_status_ghost":"Ghost","plugin_good_ghosting_status_dropout":"철회됨","plugin_good_ghosting_status_unknown":"미지","plugin_good_ghosting_status":"상태","plugin_good_ghosting_deposits":"입금 만들기","plugin_good_ghosting_total_deposited":"입금 총액","plugin_good_ghosting_address":"주소","plugin_good_ghosting_not_a_participant":"게임에 참여하지 않은 것 같습니다.","plugin_good_ghosting_next_event":"다음으로 넘어갑니다","plugin_good_ghosting_game_end":"게임이 종료되었습니다","plugin_good_ghosting_game_over":"게임 종료","plugin_good_ghosting_participants_withdraw":"참여자들이 수익을 받을 수 있습니다.","plugin_good_ghosting_join_game":"게임 참여","plugin_good_ghosting_make_deposit":"입금하기","plugin_good_ghosting_join_help_text":"{{amount}} {{token}} 입금하여 해당 저금 풀에 참여하세요. 우승하려면 마감 시간 전에 저금 풀에서 돈을 입금해야 됩니다.","plugin_good_ghosting_deposit_help_text":"우승 기회를 얻으려면 이 라운드에서 {{segmentPayment}} {{token}} 입금하세요.","plugin_good_ghosting_withdraw_help_text":"게임은 이미 종료되었습니다. 입금과 수익을 받을 수 있습니다.","plugin_good_ghosting_leave_game":"게임에서 나가기","plugin_good_ghosting_early_withdraw_info":"진행 중인 게임에서 탈퇴하려면 나머지 참여자에게 보상하기 위해 {{amount}} {{token}} 부과될 수 있습니다.","plugin_good_ghosting_rules":"규칙","plugin_good_ghosting_game_rules":"우승을 위해 {{roundCount}} 라운드 기간에 라운드마다 {{amount}} {{token}} 입금해야 합니다. 다른 참여자가 입금을 놓쳐서 ghost가 되면 그의 수익은 당신의 수익의 일부가 될 수 있습니다.","plugin_good_ghosting_tx_fail":"거래를 완료하지 못했습니다.","plugin_good_ghosting_tx_timeout":"거래 상태를 확인할 수 없습니다.","plugin_good_ghosting_something_went_wrong":"오류가 발생했습니다. 다시 시도해주세요.","plugin_good_ghosting_view_on_explorer":"Explorer에서 보기","plugin_good_ghosting_checking_balance":"잔액 확인","plugin_good_ghosting_insufficient_balance":"월렛에서 최소 {{amount}} {{token}} 필요합니다.","plugin_good_ghosting_balance_error":"잔액 확인 실패. 다시 시도하세요.","plugin_unlockprotocol_buy_lock":"Buy Lock","plugin_unlockprotocol_no_access":"해당 내용에 접근할 수 없습니다.","plugin_unlockprotocol_select_unlock_lock":"언락 락 선택","plugin_unlockprotocol_no_lock_found":"락을 찾을 수 없습니다. <dashboard>크리에이터 대시보드</dashboard>에서 자기의 락을 만드세요.","plugin_unlockprotocol_submit_post":"포스트 제출","plugin_unlockprotocol_title":"언락 프로토콜","plugin_unlockprotocol_server_error":"서버 오류 발생했습니다. 다시 시도 하세요.","plugin_furucombo_tab_pool":"풀","plugin_furucombo_tab_investments":"전체 투자","plugin_furucombo_liquidity":"유동성","plugin_furucombo_annual_percentage_yield":"Apy","plugin_furucombo_rewards":"보상","plugin_furucombo_invest":"투자","plugin_furucombo_pool_not_found":"무효한 풀 주소.","plugin_furucombo_smt_wrong":"오류가 발생합니다!","plugin_furucombo_head_pools":"풀(Pools)","plugin_furucombo_head_action":"행동","popups_welcome":"환영합니다","popups_wallet_token":"토큰","popups_wallet_go_back":"돌아가기","popups_wallet_start_up_tip":"월렛 연결. 새로운 월렛을 만들거나 시드 문구로 기존 월렛을 복구하세요.","popups_wallet_name_placeholder":"1-12 자 입력하세요","popups_wallet_tab_assets":"자산","popups_wallet_tab_activity":"활동","popups_wallet_derivation_path":"파생 경로 ({{ path }})","popups_wallet_next":"다음","popups_wallet_backup_wallet":"월렛 백업","popups_wallet_backup_json_file":"JSON 파일","popups_wallet_backup_private_key":"개인 키","popups_wallet_backup_json_file_confirm_password_tip":"이 파일은 현재의 비밀번호로 암호화되어 저장되었습니다. 월렛을 불러올 때 이 파일 해독을 위해 현재의 비밀번호가 필요합니다.","popups_wallet_backup_private_key_tip":"다른 사람에게 개인 키를 보여주면 안됩니다. 개인 키은 EVM 호환 체인을 지원하는 모든 월렛에서 해독없이 사용할 수 있습니다.","popups_wallet_backup_input_password":"비밀번호 입력","popups_wallet_backup_json_file_drag_tip":"파일은 여기서 끌어들이세요.","popups_wallet_backup_json_file_click_tip":"클릭 또는 파일을 여기로 끌어들이세요","popups_wallet_enter_your_wallet_name":"월렛 이름 입력","popups_wallet_delete_tip":"이 월렛을 삭제하시겠습니까? 시드 문구가 없으면 월렛을 복구할 수 없습니다.","popups_wallet_confirm_payment_password":"지불 비밀번호로 확인하세요.","popups_wallet_token_buy":"구매","popups_wallet_token_send":"발송","popups_wallet_token_swap":"스왑","popups_wallet_view_on_explorer":"Explorer에서 보기","popups_wallet_gas_fee_settings":"기스비 설정","popups_wallet_gas_fee_settings_description":"기스비는 이더리움의 마이너에게 지불하는 겁니다. 마이너가 더 높은 가스비로 거래를 포장하기를 선호합니다. 낮은 가스비로 거래가 실패될 수 있고 지불된 가스비 반환될 수 없습니다.","popups_wallet_gas_fee_settings_low":"낮음","popups_wallet_gas_fee_settings_medium":"보통","popups_wallet_gas_fee_settings_high":"높음","popups_wallet_gas_fee_settings_usd":" ≈ ${{usd}}","popups_wallet_gas_fee_settings_gas_limit":"가스 한도","popups_wallet_gas_fee_settings_max_priority_fee":"최대 우선 가스비","popups_wallet_gas_fee_settings_max_fee":"최대 가스비","popups_wallet_gas_fee_settings_min_gas_limit_tips":"최소한 가스비는 {{limit}} 입니다","popups_wallet_unsupported_network":"지원되지 않는 네트워크","popups_wallet_signature_request":"서명","popups_wallet_signature_request_message":"메시지","popups_wallet_contract_interaction":"컨트렉트 인터액션","popups_wallet_contract_interaction_transfer":"전송","popups_wallet_contract_interaction_gas_fee":"기스비","popups_wallet_contract_interaction_edit":"수정","popups_wallet_contract_interaction_total":"총액","popups_wallet_unlock_wallet":"월렛 언락","popups_wallet_unlock_error_password":"잘못된 비밀번호","popups_wallet_activity_to_address":"받는 주소: {{address}}","popups_wallet_transfer_error_tip":"네트워크 연결 실패나 컨트렉트 오류때문에 발송 거래가 실패되었습니다.","popups_wallet_transactions_pending":"대기중...","popups_wallet_re_send":"다시 보내기","popups_wallet_choose_token":"토큰 선택","popups_wallet_gas_price":"가스 가격","popups_missing_parameter_caption":"이 페이지를 닫아세요.","popups_persona_connect_to":"{{type}} 에 연결하기","popups_persona_disconnect":"연결 끊기","popups_persona_logout":"로그아웃","popups_persona_disconnect_tip":"로그아웃 후, 연결된 소셜 계정은 더 이상 암호화하거나 해독할 수 없습나다. 계정을 다시 이용하려면 아이덴티티, 개인 키, 로컬이나 클라우드 백업으로 복원할 수 있습니다.","popups_persona_persona_name_exists":"이미 존재된 페르소나입니다","popups_password_do_not_match":"잘못된 백업 비밀번호","popups_backup_password":"백업 비밀번호","popups_rename_error_tip":"최대 길이는 {{length}} 자입니다.","nft_button_set_avatar":"NFT 아바타 설정"}');
;// CONCATENATED MODULE: ./shared-ui/locales/qya-AA.json
const qya_AA_namespaceObject = JSON.parse('{"database_backup":"crwdns10051:0crwdne10051:0","database_overwrite":"crwdns10053:0crwdne10053:0","database_clear":"crwdns10055:0crwdne10055:0","debug_new_bug_issue":"crwdns10057:0crwdne10057:0","debug_metadata_title":"crwdns10059:0crwdne10059:0","debug_metadata_put_metadata":"crwdns10061:0crwdne10061:0","edit":"crwdns10063:0crwdne10063:0","clear":"crwdns10065:0crwdne10065:0","more":"crwdns10067:0crwdne10067:0","approve":"crwdns10069:0crwdne10069:0","address":"crwdns10071:0crwdne10071:0","operation":"crwdns10075:0crwdne10075:0","gas_limit":"crwdns10077:0crwdne10077:0","gas_price":"crwdns10079:0crwdne10079:0","redirect_to":"crwdns10081:0crwdne10081:0","sign":"crwdns10085:0crwdne10085:0","reload":"crwdns10087:0crwdne10087:0","load":"crwdns10089:0crwdne10089:0","load_all":"crwdns10093:0crwdne10093:0","no_data":"crwdns10097:0crwdne10097:0","tip":"crwdns10105:0crwdne10105:0","tags":"crwdns10107:0crwdne10107:0","contract":"crwdns10109:0crwdne10109:0","initializing":"crwdns10111:0crwdne10111:0","redirect_alert":"crwdns10113:0crwdne10113:0","typed_message_text_alert":"crwdns10117:0crwdne10117:0","badge_renderer_provided_by_plugin":"crwdns10119:0crwdne10119:0","add_token":"crwdns3983:0crwdne3983:0","add_nft_contract_search_hint":"crwdns8123:0crwdne8123:0","applications":"crwdns9513:0crwdne9513:0","additional_post_box__encrypted_post_pre":"crwdns3991:0{{encrypted}}crwdne3991:0","additional_post_box__encrypted_post_pre_red_packet_twitter_official_account":"crwdns9169:0{{account}}crwdnd9169:0{{encrypted}}crwdne9169:0","additional_post_box__encrypted_post_pre_red_packet":"crwdns3995:0{{encrypted}}crwdne3995:0","additional_post_box__steganography_post_pre":"crwdns3997:0{{random}}crwdne3997:0","auto_paste_failed_dialog_title":"crwdns3999:0crwdne3999:0","auto_paste_failed_dialog_content":"crwdns4001:0crwdne4001:0","auto_paste_failed_dialog_image_caption":"crwdns4003:0crwdne4003:0","auto_paste_failed_snackbar":"crwdns4005:0crwdne4005:0","auto_paste_failed_snackbar_action":"crwdns4007:0crwdne4007:0","auto_paste_failed_snackbar_action_close":"crwdns9363:0crwdne9363:0","automation_request_click_post_button":"crwdns4009:0crwdne4009:0","try_again":"crwdns8125:0crwdne8125:0","ok":"crwdns12997:0crwdne12997:0","start":"crwdns12999:0crwdne12999:0","cancel":"crwdns4025:0crwdne4025:0","twitter_account":"crwdns9171:0crwdne9171:0","facebook_account":"crwdns9173:0crwdne9173:0","comment_box__placeholder":"crwdns4027:0crwdne4027:0","confirm":"crwdns4029:0crwdne4029:0","copy_text":"crwdns4031:0crwdne4031:0","loading_failed":"crwdns8127:0crwdne8127:0","copy_image":"crwdns4033:0crwdne4033:0","copy_success_of_wallet_addr":"crwdns4035:0crwdne4035:0","copy_success_of_text":"crwdns4037:0crwdne4037:0","copy_success_of_image":"crwdns4039:0crwdne4039:0","connecting":"crwdns4043:0crwdne4043:0","create":"crwdns4047:0crwdne4047:0","copied":"crwdns9361:0crwdne9361:0","daily":"crwdns4057:0crwdne4057:0","dashboard_tab_collectibles":"crwdns4063:0crwdne4063:0","dashboard_no_collectible_found":"crwdns4105:0crwdne4105:0","dashboard_collectible_menu_all":"crwdns14532:0{{count}}crwdne14532:0","days":"crwdns4107:0{{days}}crwdne4107:0","decrypted_postbox_add_recipients":"crwdns4109:0crwdne4109:0","decrypted_postbox_decrypting":"crwdns4111:0crwdne4111:0","decrypted_postbox_decoding":"crwdns4113:0crwdne4113:0","decrypted_postbox_decrypting_finding_person_key":"crwdns4115:0crwdne4115:0","decrypted_postbox_decrypting_finding_post_key":"crwdns4117:0crwdne4117:0","decrypted_postbox_author_mismatch":"crwdns4119:0{{name}}crwdne4119:0","decrypted_postbox_title":"crwdns4121:0crwdne4121:0","dismiss":"crwdns4123:0crwdne4123:0","delete":"crwdns4127:0crwdne4127:0","delete_wallet":"crwdns4135:0crwdne4135:0","hide_token":"crwdns4139:0crwdne4139:0","hide_token_hint":"crwdns4141:0{{token}}crwdne4141:0","done":"crwdns4145:0crwdne4145:0","download":"crwdns4147:0crwdne4147:0","failed":"crwdns9389:0crwdne9389:0","buy_now":"crwdns4169:0crwdne4169:0","setup_guide_login":"crwdns13001:0crwdne13001:0","setup_guide_find_username_text":"crwdns4175:0crwdne4175:0","setup_guide_connect_auto":"crwdns4177:0crwdne4177:0","setup_guide_connect_failed":"crwdns4179:0crwdne4179:0","setup_guide_verify":"crwdns14586:0crwdne14586:0","setup_guide_verify_should_change_profile":"crwdns14798:0crwdne14798:0","setup_guide_verify_dismiss":"crwdns14588:0crwdne14588:0","setup_guide_verify_checking":"crwdns14590:0crwdne14590:0","setup_guide_verify_post_not_found":"crwdns14592:0crwdne14592:0","setup_guide_verifying":"crwdns14594:0crwdne14594:0","setup_guide_verifying_failed":"crwdns14596:0crwdne14596:0","user_guide_tip_connected":"crwdns9081:0crwdne9081:0","user_guide_tip_need_verify_on_next_id":"crwdns14598:0crwdne14598:0","setup_guide_say_hello_content":"crwdns13003:0crwdne13003:0","setup_guide_say_hello_follow":"crwdns13167:0{{account}}crwdne13167:0","setup_guide_pin_tip":"crwdns14600:0crwdne14600:0","setup_guide_pin_tip_step_click_left":"crwdns14602:0crwdne14602:0","setup_guide_pin_tip_step_click_right":"crwdns14604:0crwdne14604:0","setup_guide_pin_tip_step_find_left":"crwdns14606:0crwdne14606:0","setup_guide_pin_tip_step_find_right":"crwdns14608:0crwdne14608:0","setup_guide_pin_tip_successfully":"crwdns14610:0crwdne14610:0","user_guide_tip_1":"crwdns9059:0crwdne9059:0","user_guide_tip_2":"crwdns9061:0crwdne9061:0","user_guide_tip_3":"crwdns13019:0crwdne13019:0","create_persona":"crwdns10317:0crwdne10317:0","connect_persona":"crwdns10319:0crwdne10319:0","please_create_persona":"crwdns10807:0crwdne10807:0","please_connect_persona":"crwdns10809:0crwdne10809:0","mask_network":"crwdns10321:0crwdne10321:0","import":"crwdns4193:0crwdne4193:0","no_search_result":"crwdns4217:0crwdne4217:0","set_nft_profile_photo":"crwdns14582:0crwdne14582:0","use_nft":"crwdns14584:0crwdne14584:0","loading":"crwdns8031:0crwdne8031:0","unlock":"crwdns8033:0crwdne8033:0","payload_bad":"crwdns4227:0crwdne4227:0","payload_incomplete":"crwdns4229:0crwdne4229:0","payload_not_found":"crwdns4231:0crwdne4231:0","payload_throw_in_alpha41":"crwdns4233:0crwdne4233:0","personas":"crwdns4237:0crwdne4237:0","browser_action_enter_dashboard":"crwdns4247:0crwdne4247:0","pending":"crwdns9391:0crwdne9391:0","popups_initial_tips":"crwdns7755:0{{type}}crwdne7755:0","beta_sup":"crwdns10125:0crwdne10125:0","post_dialog_plugins_experimental":"crwdns10127:0crwdne10127:0","post_dialog__button":"crwdns4257:0crwdne4257:0","post_dialog__image_payload":"crwdns4261:0crwdne4261:0","post_dialog__more_options_title":"crwdns4263:0crwdne4263:0","post_dialog__placeholder":"crwdns4265:0crwdne4265:0","post_dialog__select_recipients_end_to_end":"crwdns7719:0crwdne7719:0","post_dialog__select_recipients_share_to_everyone":"crwdns4269:0crwdne4269:0","post_dialog__select_recipients_title":"crwdns4271:0crwdne4271:0","post_dialog__select_specific_e2e_target_title":"crwdns7721:0{{selected}}crwdne7721:0","post_dialog__title":"crwdns4275:0crwdne4275:0","post_dialog_enable_paste_auto":"crwdns10129:0crwdne10129:0","post_modal_hint__button":"crwdns4277:0crwdne4277:0","hide":"crwdns4293:0crwdne4293:0","reset":"crwdns4301:0crwdne4301:0","editor":"crwdns10131:0crwdne10131:0","retry":"crwdns4303:0crwdne4303:0","rename":"crwdns4309:0crwdne4309:0","search":"crwdns4327:0crwdne4327:0","go_wrong":"crwdns10133:0crwdne10133:0","search_box_placeholder":"crwdns4331:0crwdne4331:0","select_all":"crwdns4333:0crwdne4333:0","select_none":"crwdns4335:0crwdne4335:0","all_friends":"crwdns4337:0crwdne4337:0","select_specific_friends_dialog__button":"crwdns4339:0crwdne4339:0","select_specific_friends_dialog__title":"crwdns4341:0crwdne4341:0","service_decryption_failed":"crwdns4343:0crwdne4343:0","service_invalid_backup_file":"crwdns4345:0crwdne4345:0","service_unknown_payload":"crwdns4357:0crwdne4357:0","service_username_invalid":"crwdns4359:0crwdne4359:0","speed_up":"crwdns9393:0crwdne9393:0","save":"crwdns10439:0crwdne10439:0","skip":"crwdns4463:0crwdne4463:0","next":"crwdns9067:0crwdne9067:0","try":"crwdns9083:0crwdne9083:0","share":"crwdns4465:0crwdne4465:0","share_to":"crwdns4467:0crwdne4467:0","sharing":"crwdns4469:0crwdne4469:0","transfer":"crwdns4471:0crwdne4471:0","export":"crwdns9305:0crwdne9305:0","wallet_load_retry":"crwdns10135:0{{symbol}}crwdne10135:0","wallet_name":"crwdns4487:0crwdne4487:0","wallet_rename":"crwdns4489:0crwdne4489:0","wallet_add_nft_invalid_owner":"crwdns7723:0crwdne7723:0","wallet_add_nft_already_added":"crwdns8131:0crwdne8131:0","wallet_loading_token":"crwdns8133:0crwdne8133:0","wallet_loading_nft_contract":"crwdns8135:0crwdne8135:0","wallet_search_contract_no_result":"crwdns8137:0crwdne8137:0","wallet_search_no_result":"crwdns8139:0crwdne8139:0","wallet_confirm_with_password":"crwdns10141:0crwdne10141:0","wallet_airdrop_nft_unclaimed_title":"crwdns8093:0crwdne8093:0","plugin_not_enabled":"crwdns10811:0{{plugin}}crwdne10811:0","plugin_external_unknown_plugin":"crwdns10143:0crwdne10143:0","plugin_external_loader_search_holder":"crwdns10145:0crwdne10145:0","plugin_external_loader_search_button":"crwdns10147:0crwdne10147:0","plugin_external_loader_search_sub_title":"crwdns10149:0crwdne10149:0","plugin_external_loader_alert":"crwdns10151:0crwdne10151:0","plugin_external_loader_example_github":"crwdns10153:0crwdne10153:0","plugin_external_loader_intro":"crwdns10155:0crwdne10155:0","plugin_external_loader_alert_title":"crwdns10157:0crwdne10157:0","plugin_external_plugin_url":"crwdns10159:0crwdne10159:0","plugin_external_unverified_publisher":"crwdns10161:0{{publisher}}crwdne10161:0","plugin_external_entry_title":"crwdns10163:0crwdne10163:0","plugin_external_name":"crwdns10165:0crwdne10165:0","plugin_external_get_started":"crwdns10167:0crwdne10167:0","plugin_airdrop_nft_start_time":"crwdns8095:0{{date}}crwdne8095:0","plugin_airdrop_nft_end_time":"crwdns8097:0{{date}}crwdne8097:0","plugin_airdrop_nft_expired":"crwdns8099:0crwdne8099:0","plugin_airdrop_nft_claim":"crwdns8101:0crwdne8101:0","plugin_airdrop_nft_claimed":"crwdns8103:0crwdne8103:0","plugin_airdrop_nft_check":"crwdns8105:0crwdne8105:0","plugin_airdrop_nft_check_address":"crwdns8107:0crwdne8107:0","plugin_airdrop_nft_none_to_claim":"crwdns8111:0crwdne8111:0","plugin_airdrop_nft_number_to_claim":"crwdns8115:0{{count}}crwdnd8115:0{{name}}crwdne8115:0","plugin_airdrop_nft_claim_all":"crwdns8117:0crwdne8117:0","plugin_airdrop_nft_claim_successful":"crwdns8119:0crwdne8119:0","plugin_airdrop_nft_claim_failed":"crwdns8121:0crwdne8121:0","wallet_balance":"crwdns4505:0crwdne4505:0","wallet_balance_eth":"crwdns10189:0crwdne10189:0","wallet_new":"crwdns4511:0crwdne4511:0","wallets":"crwdns4515:0crwdne4515:0","wallet_status_button_change":"crwdns4519:0crwdne4519:0","wallet_status_button_disconnect":"crwdns4521:0crwdne4521:0","wallet_status_button_disconnecting":"crwdns10415:0crwdne10415:0","wallet_status_button_copy_address":"crwdns4523:0crwdne4523:0","wallet_transfer_account":"crwdns10191:0crwdne10191:0","wallet_transfer_receiving_account":"crwdns10193:0crwdne10193:0","wallet_transfer_to_address":"crwdns4529:0crwdne4529:0","wallet_transfer_send":"crwdns4539:0crwdne4539:0","wallet_transfer_1559_placeholder":"crwdns10433:0crwdne10433:0","wallet_transfer_title":"crwdns4541:0crwdne4541:0","wallet_transfer_error_amount_absence":"crwdns4543:0crwdne4543:0","wallet_transfer_error_address_absence":"crwdns4545:0crwdne4545:0","wallet_transfer_error_same_address_with_current_account":"crwdns11863:0crwdne11863:0","wallet_transfer_error_is_contract_address":"crwdns11865:0crwdne11865:0","wallet_transfer_error_invalid_address":"crwdns4547:0crwdne4547:0","wallet_transfer_error_no_address_has_been_set_name":"crwdns10435:0crwdne10435:0","wallet_transfer_error_no_support_ens":"crwdns10437:0crwdne10437:0","wallet_transfer_error_insufficient_balance":"crwdns7961:0{{symbol}}crwdne7961:0","wallet_transfer_error_gas_price_absence":"crwdns9051:0crwdne9051:0","wallet_transfer_error_gas_limit_absence":"crwdns9053:0crwdne9053:0","wallet_transfer_error_max_fee_absence":"crwdns9055:0crwdne9055:0","wallet_transfer_error_max_priority_fee_absence":"crwdns9057:0crwdne9057:0","wallet_transfer_error_max_fee_too_low":"crwdns8043:0crwdne8043:0","wallet_transfer_error_max_fee_too_high":"crwdns8045:0crwdne8045:0","wallet_transfer_error_max_priority_gas_fee_positive":"crwdns8047:0crwdne8047:0","wallet_transfer_error_max_priority_gas_fee_too_low":"crwdns8049:0crwdne8049:0","wallet_transfer_error_max_priority_gas_fee_too_high":"crwdns8051:0crwdne8051:0","wallet_transfer_error_max_priority_gas_fee_imbalance":"crwdns8053:0crwdne8053:0","wallet_transfer_gwei":"crwdns8055:0crwdne8055:0","wallet_transfer_between_my_accounts":"crwdns10195:0crwdne10195:0","wallet_risk_warning_dialog_title":"crwdns4561:0crwdne4561:0","wallet_risk_warning_no_select_wallet":"crwdns4563:0crwdne4563:0","wallet_risk_warning_content":"crwdns4565:0crwdne4565:0","weekly":"crwdns4567:0crwdne4567:0","wallet_risk_confirm_confirming":"crwdns4569:0crwdne4569:0","wallet_risk_confirm_failed":"crwdns4571:0crwdne4571:0","relative_time_days_ago":"crwdns4575:0{{days}}crwdne4575:0","relative_time_hours_ago":"crwdns4577:0{{hours}}crwdne4577:0","relative_time_minutes_ago":"crwdns4579:0{{minutes}}crwdne4579:0","relative_time_months_ago":"crwdns4581:0{{months}}crwdne4581:0","relative_time_seconds_ago":"crwdns4583:0{{seconds}}crwdne4583:0","relative_time_years_ago":"crwdns4585:0{{years}}crwdne4585:0","plugin_chain_not_supported":"crwdns10689:0{{chain}}crwdne10689:0","plugin_wallet_snackbar_wait_for_confirming":"crwdns10629:0crwdne10629:0","plugin_wallet_snackbar_hash":"crwdns10631:0crwdne10631:0","plugin_wallet_snackbar_confirmed":"crwdns10633:0crwdne10633:0","plugin_wallet_snackbar_success":"crwdns10635:0crwdne10635:0","plugin_wallet_snackbar_failed":"crwdns10637:0crwdne10637:0","plugin_wallet_snackbar_swap_successful":"crwdns10639:0crwdne10639:0","plugin_wallet_snackbar_swap_token":"crwdns10641:0crwdne10641:0","plugin_wallet_guiding_step_1":"crwdns10197:0crwdne10197:0","plugin_wallet_guiding_step_2":"crwdns10199:0crwdne10199:0","plugin_wallet_connect_with":"crwdns12981:0crwdne12981:0","plugin_wallet_connect_with_retry":"crwdns12983:0crwdne12983:0","plugin_wallet_connected_with":"crwdns12985:0crwdne12985:0","plugin_wallet_connecting_with":"crwdns14612:0crwdne14612:0","plugin_wallet_metamask_error_already_request":"crwdns12987:0crwdne12987:0","plugin_wallet_connect_tip":"crwdns12989:0{{providerName}}crwdnd12989:0{{providerShortenLink}}crwdne12989:0","plugin_wallet_collections":"crwdns8141:0crwdne8141:0","plugin_wallet_select_a_token":"crwdns4589:0crwdne4589:0","plugin_wallet_select_a_nft_contract":"crwdns7923:0crwdne7923:0","plugin_wallet_select_a_nft_owner":"crwdns7925:0crwdne7925:0","plugin_wallet_select_a_nft_operator":"crwdns7927:0crwdne7927:0","plugin_wallet_fail_to_load_nft_contract":"crwdns7929:0crwdne7929:0","plugin_wallet_nft_approving_all":"crwdns7931:0{{symbol}}crwdne7931:0","plugin_wallet_approve_all_nft":"crwdns7933:0{{symbol}}crwdne7933:0","plugin_wallet_approve_all_nft_successfully":"crwdns7935:0{{symbol}}crwdne7935:0","plugin_wallet_connect_a_wallet":"crwdns4591:0crwdne4591:0","plugin_wallet_confirm_risk_warning":"crwdns4593:0crwdne4593:0","plugin_wallet_no_gas_fee":"crwdns4595:0crwdne4595:0","plugin_wallet_update_gas_fee":"crwdns4597:0crwdne4597:0","plugin_wallet_invalid_network":"crwdns4599:0crwdne4599:0","plugin_wallet_select_a_wallet":"crwdns4601:0crwdne4601:0","plugin_wallet_transaction":"crwdns4603:0crwdne4603:0","plugin_wallet_transaction_wait_for_confirmation":"crwdns4605:0crwdne4605:0","plugin_wallet_transaction_submitted":"crwdns4607:0crwdne4607:0","plugin_wallet_transaction_confirmed":"crwdns4609:0crwdne4609:0","plugin_wallet_transaction_reverted":"crwdns4611:0crwdne4611:0","plugin_wallet_transaction_rejected":"crwdns4613:0crwdne4613:0","plugin_wallet_transaction_underpriced":"crwdns11871:0crwdne11871:0","plugin_wallet_transaction_server_error":"crwdns4615:0crwdne4615:0","plugin_wallet_view_on_explorer":"crwdns4617:0crwdne4617:0","plugin_ito_placeholder_when_token_unselected":"crwdns4619:0crwdne4619:0","plugin_wallet_wrong_network_tip":"crwdns4621:0crwdne4621:0","plugin_wallet_on_create":"crwdns4627:0crwdne4627:0","plugin_wallet_on_connect":"crwdns4629:0crwdne4629:0","plugin_wallet_wrong_network":"crwdns4631:0crwdne4631:0","plugin_wallet_pending_transactions":"crwdns7717:0{{count}}crwdne7717:0","plugin_wallet_import_wallet":"crwdns4641:0crwdne4641:0","plugin_wallet_select_provider_dialog_title":"crwdns4663:0crwdne4663:0","plugin_wallet_qr_code_with_wallet_connect":"crwdns4665:0crwdne4665:0","plugin_wallet_token_unlock":"crwdns4667:0crwdne4667:0","plugin_wallet_token_infinite_unlock":"crwdns4669:0crwdne4669:0","plugin_wallet_connect_dialog_title":"crwdns4671:0crwdne4671:0","plugin_wallet_connect_safari_metamask":"crwdns4673:0crwdne4673:0","plugin_wallet_connect_safari_rainbow":"crwdns4675:0crwdne4675:0","plugin_wallet_connect_safari_trust":"crwdns4677:0crwdne4677:0","plugin_wallet_connect_safari_im_token":"crwdns4679:0crwdne4679:0","plugin_wallet_on_connect_in_firefox":"crwdns4681:0crwdne4681:0","plugin_wallet_return_mobile_wallet_options":"crwdns4683:0crwdne4683:0","plugin_wallet_view_qr_code":"crwdns4685:0crwdne4685:0","plugin_wallet_switch_network":"crwdns4687:0{{network}}crwdne4687:0","plugin_wallet_switch_network_under_going":"crwdns4689:0{{network}}crwdne4689:0","plugin_wallet_not_available_on":"crwdns7913:0{{network}}crwdne7913:0","plugin_wallet_connect_wallet":"crwdns4693:0crwdne4693:0","plugin_wallet_connect_wallet_tip":"crwdns4695:0crwdne4695:0","plugin_wallet_name_placeholder":"crwdns4705:0crwdne4705:0","plugin_wallet_fail_to_sign":"crwdns4707:0crwdne4707:0","plugin_wallet_cancel_sign":"crwdns4709:0crwdne4709:0","plugin_red_packet_display_name":"crwdns4711:0crwdne4711:0","plugin_red_packet_claimed":"crwdns10205:0crwdne10205:0","plugin_red_packet_erc20_tab_title":"crwdns8143:0crwdne8143:0","plugin_red_packet_erc721_tab_title":"crwdns8145:0crwdne8145:0","plugin_red_packet_erc721_insufficient_balance":"crwdns8147:0crwdne8147:0","plugin_red_packet_details":"crwdns9071:0crwdne9071:0","plugin_red_packet_split_mode":"crwdns4713:0crwdne4713:0","plugin_red_packet_average":"crwdns4715:0crwdne4715:0","plugin_red_packet_random":"crwdns4717:0crwdne4717:0","plugin_red_packet_shares":"crwdns4719:0crwdne4719:0","plugin_red_packet_best_wishes":"crwdns4721:0crwdne4721:0","plugin_red_packet_create_new":"crwdns4723:0crwdne4723:0","plugin_red_packet_claim":"crwdns4725:0crwdne4725:0","plugin_red_packet_claiming":"crwdns4727:0crwdne4727:0","plugin_red_packet_refund":"crwdns4729:0crwdne4729:0","plugin_red_packet_empty":"crwdns4731:0crwdne4731:0","plugin_red_packet_data_broken":"crwdns7999:0{{duration}}crwdne7999:0","plugin_red_packet_refunding":"crwdns4733:0crwdne4733:0","plugin_red_packet_select_existing":"crwdns4735:0crwdne4735:0","plugin_red_packet_share_unclaimed_message_official_account":"crwdns14614:0{{sender}}crwdnd14614:0{{network}}crwdnd14614:0{{account}}crwdnd14614:0{{payload}}crwdne14614:0","plugin_red_packet_share_unclaimed_message_not_twitter":"crwdns14616:0{{sender}}crwdnd14616:0{{network}}crwdnd14616:0{{payload}}crwdne14616:0","plugin_red_packet_share_message_official_account":"crwdns9175:0{{sender}}crwdnd9175:0{{network}}crwdnd9175:0{{account}}crwdnd9175:0{{payload}}crwdne9175:0","plugin_red_packet_share_message_not_twitter":"crwdns9177:0{{sender}}crwdnd9177:0{{network}}crwdnd9177:0{{payload}}crwdne9177:0","plugin_red_packet_nft_share_foreshow_message":"crwdns8151:0{{sender}}crwdnd8151:0{{network}}crwdnd8151:0{{account}}crwdnd8151:0{{payload}}crwdne8151:0","plugin_red_packet_nft_share_foreshow_message_not_twitter":"crwdns9011:0{{sender}}crwdnd9011:0{{network}}crwdnd9011:0{{payload}}crwdne9011:0","plugin_red_packet_nft_share_claimed_message":"crwdns8153:0{{sender}}crwdnd8153:0{{network}}crwdnd8153:0{{account}}crwdnd8153:0{{payload}}crwdne8153:0","plugin_red_packet_nft_share_claimed_message_not_twitter":"crwdns9013:0{{sender}}crwdnd9013:0{{network}}crwdnd9013:0{{payload}}crwdne9013:0","plugin_red_packet_nft_tip":"crwdns8155:0crwdne8155:0","plugin_red_packet_nft_no_history":"crwdns12991:0crwdne12991:0","plugin_red_packet_attached_message":"crwdns4739:0crwdne4739:0","plugin_red_packet_from":"crwdns4741:0{{name}}crwdne4741:0","plugin_red_packet_description_claimed":"crwdns4743:0{{amount}}crwdnd4743:0{{symbol}}crwdne4743:0","plugin_red_packet_description_expired":"crwdns4745:0crwdne4745:0","plugin_red_packet_description_refunded":"crwdns4747:0crwdne4747:0","plugin_red_packet_description_refund":"crwdns4749:0{{balance}}crwdnd4749:0{{symbol}}crwdne4749:0","plugin_red_packet_description_empty":"crwdns4751:0crwdne4751:0","plugin_red_packet_description_broken":"crwdns4753:0crwdne4753:0","plugin_red_packet_description_failover":"crwdns4755:0{{shares}}crwdnd4755:0{{total}}crwdnd4755:0{{symbol}}crwdne4755:0","plugin_red_packet_claiming_from":"crwdns4757:0{{name}}crwdne4757:0","plugin_red_packet_amount_per_share":"crwdns4761:0crwdne4761:0","plugin_red_packet_send_symbol":"crwdns4763:0{{amount}}crwdnd4763:0{{symbol}}crwdne4763:0","plugin_red_packet_amount_total":"crwdns4765:0crwdne4765:0","plugin_red_packet_next":"crwdns4767:0crwdne4767:0","plugin_red_packet_back":"crwdns4769:0crwdne4769:0","plugin_red_packet_hint":"crwdns4771:0crwdne4771:0","plugin_red_packet_token":"crwdns4773:0crwdne4773:0","plugin_red_packet_message_label":"crwdns8157:0crwdne8157:0","plugin_red_packet_create":"crwdns11873:0crwdne11873:0","plugin_red_packet_create_with_token":"crwdns4775:0{{amount}}crwdnd4775:0{{symbol}}crwdne4775:0","plugin_red_packet_history_duration":"crwdns4777:0{{startTime}}crwdnd4777:0{{endTime}}crwdne4777:0","plugin_red_packet_history_total_amount":"crwdns4779:0{{amount}}crwdnd4779:0{{symbol}}crwdne4779:0","plugin_red_packet_history_total_claimed_amount":"crwdns4781:0{{claimedAmount}}crwdnd4781:0{{amount}}crwdnd4781:0{{symbol}}crwdne4781:0","plugin_red_packet_history_claimed":"crwdns4783:0{{claimedShares}}crwdnd4783:0{{shares}}crwdne4783:0","plugin_red_packet_history_split_mode":"crwdns4785:0{{mode}}crwdne4785:0","plugin_red_packet_history_send":"crwdns4787:0crwdne4787:0","plugin_nft_red_packet_create":"crwdns11875:0crwdne11875:0","plugin_red_packet_nft_account_name":"crwdns8159:0crwdne8159:0","plugin_red_packet_nft_attached_message":"crwdns8161:0crwdne8161:0","plugin_red_packet_nft_total_amount":"crwdns8163:0crwdne8163:0","plugin_red_packet_nft_select_collection":"crwdns10813:0crwdne10813:0","plugin_red_packet_nft_max_shares":"crwdns10815:0{{amount}}crwdne10815:0","plugin_red_packet_nft_max_shares_tip":"crwdns10817:0{{amount}}crwdne10817:0","plugin_red_packet_nft_shift_select_tip":"crwdns10819:0{{text}}crwdne10819:0","plugin_red_packet_nft_non_existed_tip":"crwdns10821:0crwdne10821:0","plugin_red_packet_nft_select_all_option":"crwdns10823:0{{total}}crwdne10823:0","plugin_red_packet_nft_select_partially_option":"crwdns10825:0crwdne10825:0","plugin_red_packet_nft_unapproved_tip":"crwdns14622:0crwdne14622:0","plugin_red_packet_nft_approve_all_tip":"crwdns10827:0crwdne10827:0","plugin_red_packet_completed":"crwdns8165:0crwdne8165:0","plugin_red_packet_expired":"crwdns8167:0crwdne8167:0","plugin_red_packet_indivisible":"crwdns10621:0{{amount}}crwdnd10621:0{{symbol}}crwdne10621:0","plugin_nft_red_packet_data_broken":"crwdns8169:0crwdne8169:0","plugin_gitcoin_readme":"crwdns4789:0crwdne4789:0","plugin_gitcoin_readme_fund_link":"crwdns4791:0crwdne4791:0","plugin_gitcoin_select_a_token":"crwdns4793:0crwdne4793:0","plugin_gitcoin_enter_an_amount":"crwdns4795:0crwdne4795:0","plugin_gitcoin_grant_not_available":"crwdns4797:0crwdne4797:0","plugin_gitcoin_insufficient_balance":"crwdns4799:0{{symbol}}crwdne4799:0","plugin_gitcoin_donate":"crwdns4801:0crwdne4801:0","plugin_gitcoin_last_updated":"crwdns4803:0crwdne4803:0","plugin_gitcoin_by":"crwdns4805:0crwdne4805:0","plugin_gitcoin_view_on":"crwdns4807:0crwdne4807:0","plugin_trader_fail_to_load":"crwdns10207:0crwdne10207:0","plugin_trader_lbp_pool_in_balancer":"crwdns10209:0crwdne10209:0","plugin_trader_tutorial":"crwdns10211:0crwdne10211:0","plugin_trader_what_is_lbp":"crwdns10213:0crwdne10213:0","plugin_trader_lbp_intro":"crwdns10215:0{{symbol}}crwdnd10215:0{{symbol}}crwdne10215:0","plugin_trader_no_pools_found":"crwdns10217:0crwdne10217:0","plugin_trader_safety_agree":"crwdns10219:0crwdne10219:0","plugin_trader_view_on_etherscan":"crwdns10221:0crwdne10221:0","plugin_trader_safety_alert_title":"crwdns10223:0crwdne10223:0","plugin_trader_safety_alert":"crwdns10225:0crwdne10225:0","plugin_trader_total_supply":"crwdns10227:0crwdne10227:0","plugin_trader_circulating_supply":"crwdns10229:0crwdne10229:0","plugin_trader_volume_24":"crwdns10231:0crwdne10231:0","plugin_trader_market_cap":"crwdns10233:0crwdne10233:0","plugin_trader_data_source":"crwdns10235:0crwdne10235:0","plugin_trader_price_updated":"crwdns10237:0crwdne10237:0","plugin_savings":"crwdns13250:0crwdne13250:0","plugin_savings_asset":"crwdns14804:0crwdne14804:0","plugin_no_protocol_available":"crwdns13254:0crwdne13254:0","plugin_savings_apr":"crwdns13256:0crwdne13256:0","plugin_savings_wallet":"crwdns13258:0crwdne13258:0","plugin_savings_operation":"crwdns13260:0crwdne13260:0","plugin_savings_amount":"crwdns13262:0crwdne13262:0","plugin_savings_deposit":"crwdns13264:0crwdne13264:0","plugin_savings_withdraw":"crwdns13266:0crwdne13266:0","plugin_savings_process_deposit":"crwdns13268:0crwdne13268:0","plugin_savings_process_withdraw":"crwdns13270:0crwdne13270:0","plugin_trader_swap":"crwdns4881:0crwdne4881:0","plugin_trader_wrap":"crwdns4883:0crwdne4883:0","plugin_trader_unwrap":"crwdns4885:0crwdne4885:0","plugin_trader_buy":"crwdns4887:0crwdne4887:0","plugin_trader_no_data":"crwdns4889:0crwdne4889:0","plugin_trader_tab_market":"crwdns4891:0crwdne4891:0","plugin_trader_tab_price":"crwdns4893:0crwdne4893:0","plugin_trader_tab_exchange":"crwdns4895:0crwdne4895:0","plugin_trader_tab_swap":"crwdns4897:0crwdne4897:0","plugin_trader_table_exchange":"crwdns4899:0crwdne4899:0","plugin_trader_table_pair":"crwdns4901:0crwdne4901:0","plugin_trader_table_price":"crwdns4903:0crwdne4903:0","plugin_trader_table_volume":"crwdns4905:0crwdne4905:0","plugin_trader_table_updated":"crwdns4907:0crwdne4907:0","plugin_trader_error_amount_absence":"crwdns4915:0crwdne4915:0","plugin_trader_error_insufficient_balance":"crwdns4917:0{{symbol}}crwdne4917:0","plugin_trader_error_insufficient_lp":"crwdns4919:0crwdne4919:0","plugin_trade_error_input_amount_less_minimum_amount":"crwdns4923:0crwdne4923:0","plugin_trader_slippage_tolerance":"crwdns7917:0crwdne7917:0","plugin_trader_swap_from":"crwdns10441:0crwdne10441:0","plugin_trader_swap_to":"crwdns10443:0crwdne10443:0","plugin_trader_gas_fee":"crwdns10445:0crwdne10445:0","plugin_trader_unlock_symbol":"crwdns10447:0{{symbol}}crwdne10447:0","plugin_trader_unlock_tips":"crwdns10449:0{{provider}}crwdnd10449:0{{symbol}}crwdne10449:0","plugin_trader_swap_amount_symbol":"crwdns10451:0{{amount}}crwdnd10451:0{{symbol}}crwdne10451:0","plugin_trader_confirm_from":"crwdns10453:0crwdne10453:0","plugin_trader_confirm_to":"crwdns10455:0crwdne10455:0","plugin_trader_confirm_max_price_slippage":"crwdns10457:0crwdne10457:0","plugin_trader_confirm_minimum_received":"crwdns10459:0crwdne10459:0","plugin_trader_confirm_tips":"crwdns10461:0crwdne10461:0","plugin_trader_price_impact_warning_tips":"crwdns13021:0crwdne13021:0","plugin_trader_confirm_swap":"crwdns13023:0crwdne13023:0","plugin_trader_accept":"crwdns13025:0crwdne13025:0","plugin_trader_price_impact":"crwdns13027:0crwdne13027:0","plugin_trader_price_image_value":"crwdns13029:0{{percent}}crwdne13029:0","plugin_trader_slippage_warning":"crwdns13031:0crwdne13031:0","plugin_trader_confirm_price_impact":"crwdns13033:0{{percent}}crwdne13033:0","plugin_trader_max_slippage":"crwdns10463:0crwdne10463:0","plugin_trader_gas_setting_instant":"crwdns10465:0crwdne10465:0","plugin_trader_gas_setting_high":"crwdns10467:0crwdne10467:0","plugin_trader_gas_setting_medium":"crwdns10469:0crwdne10469:0","plugin_trader_gas_setting_standard":"crwdns10471:0crwdne10471:0","plugin_trader_gas_setting_fast":"crwdns10473:0crwdne10473:0","plugin_trader_gas_setting_custom":"crwdns10475:0crwdne10475:0","plugin_trader_tx_cost_usd":"crwdns10477:0{{usd}}crwdne10477:0","plugin_trader_gas_option":"crwdns10479:0{{option}}crwdnd10479:0{{value}}crwdne10479:0","plugin_trader_no_enough_liquidity":"crwdns10481:0crwdne10481:0","plugin_trader_no_trade":"crwdns10483:0crwdne10483:0","plugin_trader_gas":"crwdns10485:0crwdne10485:0","plugin_poll_display_name":"crwdns4941:0crwdne4941:0","plugin_poll_question_hint":"crwdns4943:0crwdne4943:0","plugin_poll_options_hint":"crwdns4945:0crwdne4945:0","plugin_poll_length":"crwdns4947:0crwdne4947:0","plugin_poll_length_days":"crwdns4949:0crwdne4949:0","plugin_poll_length_hours":"crwdns4951:0crwdne4951:0","plugin_poll_length_minutes":"crwdns4953:0crwdne4953:0","plugin_poll_length_unknown":"crwdns4955:0crwdne4955:0","plugin_poll_create_new":"crwdns4957:0crwdne4957:0","plugin_poll_select_existing":"crwdns4959:0crwdne4959:0","plugin_poll_send_poll":"crwdns4961:0crwdne4961:0","plugin_poll_status_closed":"crwdns4963:0crwdne4963:0","plugin_poll_status_voting":"crwdns4965:0crwdne4965:0","plugin_poll_status_voted":"crwdns4967:0crwdne4967:0","plugin_poll_deadline":"crwdns4969:0{{time}}crwdne4969:0","plugin_ito_empty_token":"crwdns10241:0crwdne10241:0","plugin_ito_locked":"crwdns10243:0crwdne10243:0","plugin_ito_share":"crwdns4971:0crwdne4971:0","plugin_ito_enter":"crwdns4973:0crwdne4973:0","plugin_ito_dialog_swap_title":"crwdns4975:0{{token}}crwdne4975:0","plugin_ito_dialog_swap_reminder_title":"crwdns4977:0crwdne4977:0","plugin_ito_dialog_swap_unlock_title":"crwdns4979:0crwdne4979:0","plugin_ito_dialog_swap_share_title":"crwdns4981:0crwdne4981:0","plugin_ito_dialog_swap_exchange":"crwdns4983:0crwdne4983:0","plugin_ito_dialog_swap_panel_title":"crwdns4985:0crwdne4985:0","plugin_ito_dialog_swap_exceed_wallet_limit":"crwdns4987:0crwdne4987:0","plugin_ito_swap_ration_label":"crwdns4989:0crwdne4989:0","plugin_ito_swap_unlucky_fail":"crwdns4991:0crwdne4991:0","plugin_ito_swap_only_once_remind":"crwdns4993:0crwdne4993:0","plugin_ito_swap_title":"crwdns4995:0{{amount}}crwdnd4995:0{{token}}crwdnd4995:0{{swap}}crwdne4995:0","plugin_ito_swap_end_date":"crwdns4997:0{{date}}crwdne4997:0","plugin_ito_dialog_claim_reminder_agree":"crwdns4999:0crwdne4999:0","plugin_ito_dialog_claim_reminder_text1":"crwdns5001:0{{networkType}}crwdne5001:0","plugin_ito_dialog_claim_reminder_text2":"crwdns5003:0crwdne5003:0","plugin_ito_dialog_claim_reminder_text3":"crwdns5005:0crwdne5005:0","plugin_ito_dialog_claim_reminder_text4":"crwdns5007:0crwdne5007:0","plugin_ito_expired":"crwdns5009:0crwdne5009:0","plugin_ito_create_new":"crwdns5011:0crwdne5011:0","plugin_ito_claim_all_title":"crwdns5013:0crwdne5013:0","plugin_ito_claim_all_status_unclaimed":"crwdns5015:0crwdne5015:0","plugin_ito_claim_all_status_locked":"crwdns5017:0crwdne5017:0","plugin_ito_claim_all_unlock_time":"crwdns5019:0{{time}}crwdne5019:0","plugin_ito_claim_all_dialog_title":"crwdns5021:0crwdne5021:0","plugin_ito_swapping":"crwdns5023:0{{amount}}crwdnd5023:0{{symbol}}crwdne5023:0","plugin_ito_advanced":"crwdns5025:0crwdne5025:0","plugin_ito_advanced_ip_region":"crwdns5027:0crwdne5027:0","plugin_ito_advanced_delay_unlocking":"crwdns5029:0crwdne5029:0","plugin_ito_advanced_contract":"crwdns5031:0crwdne5031:0","plugin_ito_select_existing":"crwdns5033:0crwdne5033:0","plugin_ito_display_name":"crwdns5035:0crwdne5035:0","plugin_ito_sell_token":"crwdns5037:0crwdne5037:0","plugin_ito_sell_price":"crwdns5039:0crwdne5039:0","plugin_ito_sell_total_amount":"crwdns5041:0crwdne5041:0","plugin_ito_allocation_per_wallet":"crwdns5043:0{{limit}}crwdnd5043:0{{token}}crwdne5043:0","plugin_ito_allocation_per_wallet_title":"crwdns13169:0crwdne13169:0","plugin_ito_begin_time_title":"crwdns13171:0crwdne13171:0","plugin_ito_wait_unlock_time":"crwdns5047:0{{unlockTime}}crwdne5047:0","plugin_ito_claim":"crwdns5049:0crwdne5049:0","plugin_ito_claiming":"crwdns5051:0crwdne5051:0","plugin_ito_claim_all":"crwdns5053:0crwdne5053:0","plugin_ito_qualification_start_time":"crwdns5061:0crwdne5061:0","plugin_ito_error_qualification_start_time":"crwdns5063:0crwdne5063:0","plugin_ito_end_time_title":"crwdns13173:0crwdne13173:0","plugin_ito_error_invalid_qualification":"crwdns5067:0crwdne5067:0","plugin_ito_unlock_time_cert":"crwdns10245:0{{date}}crwdne10245:0","plugin_ito_unlock_time":"crwdns5069:0crwdne5069:0","plugin_ito_launch_campaign":"crwdns10247:0crwdne10247:0","plugin_ito_total_claimable_count":"crwdns10249:0crwdne10249:0","plugin_ito_qualification_label":"crwdns5071:0crwdne5071:0","plugin_ito_message_label":"crwdns5073:0crwdne5073:0","plugin_ito_region_label":"crwdns5075:0crwdne5075:0","plugin_ito_region_confirm_label":"crwdns7919:0crwdne7919:0","plugin_ito_region_list":"crwdns5079:0{{ select }}crwdnd5079:0{{ all }}crwdne5079:0","plugin_ito_region_all":"crwdns5081:0crwdne5081:0","plugin_ito_region_search":"crwdns5083:0crwdne5083:0","plugin_ito_region_ban":"crwdns5085:0crwdne5085:0","plugin_ito_next":"crwdns5087:0crwdne5087:0","plugin_ito_back":"crwdns5089:0crwdne5089:0","plugin_ito_transaction_dialog_summary_with_no_token":"crwdns11877:0crwdne11877:0","plugin_ito_transaction_dialog_summary":"crwdns5091:0{{amount}}crwdnd5091:0{{symbol}}crwdne5091:0","plugin_ito_swap":"crwdns5093:0crwdne5093:0","plugin_ito_send_tip":"crwdns5095:0crwdne5095:0","plugin_ito_send_text":"crwdns5097:0{{total}}crwdnd5097:0{{symbol}}crwdne5097:0","plugin_ito_error_enter_amount":"crwdns5099:0crwdne5099:0","plugin_ito_error_select_token":"crwdns5101:0crwdne5101:0","plugin_ito_error_enter_amount_and_token":"crwdns5103:0crwdne5103:0","plugin_ito_error_allocation_absence":"crwdns5105:0crwdne5105:0","plugin_ito_error_allocation_invalid":"crwdns5107:0crwdne5107:0","plugin_ito_error_exchange_time":"crwdns5109:0crwdne5109:0","plugin_ito_error_unlock_time":"crwdns5111:0crwdne5111:0","plugin_ito_error_balance":"crwdns5113:0{{symbol}}crwdne5113:0","plugin_ito_list_start_date":"crwdns5115:0{{date}}crwdne5115:0","plugin_ito_list_end_date":"crwdns5117:0{{date}}crwdne5117:0","plugin_ito_list_sold_total":"crwdns5119:0crwdne5119:0","plugin_ito_list_total":"crwdns5121:0crwdne5121:0","plugin_ito_list_table_type":"crwdns5123:0crwdne5123:0","plugin_ito_list_table_price":"crwdns5125:0crwdne5125:0","plugin_ito_no_claimable_token":"crwdns5127:0crwdne5127:0","plugin_ito_list_table_sold":"crwdns5129:0crwdne5129:0","plugin_ito_list_table_got":"crwdns5131:0crwdne5131:0","plugin_ito_list_button_send":"crwdns5133:0crwdne5133:0","plugin_ito_withdraw":"crwdns5135:0crwdne5135:0","plugin_ito_qualification_loading":"crwdns5137:0crwdne5137:0","plugin_ito_qualification_failed":"crwdns5139:0crwdne5139:0","plugin_ito_withdrawn":"crwdns5141:0crwdne5141:0","plugin_ito_your_swapped_amount":"crwdns5143:0{{amount}}crwdnd5143:0{{symbol}}crwdne5143:0","plugin_ito_your_claimed_amount":"crwdns5145:0{{amount}}crwdnd5145:0{{symbol}}crwdne5145:0","plugin_ito_your_refund_amount":"crwdns5147:0{{amount}}crwdnd5147:0{{symbol}}crwdne5147:0","plugin_ito_unlock_in_advance":"crwdns5149:0crwdne5149:0","plugin_ito_swapped_status":"crwdns5151:0{{remain}}crwdnd5151:0{{total}}crwdnd5151:0{{token}}crwdne5151:0","plugin_ito_congratulations":"crwdns5153:0crwdne5153:0","plugin_ito_out_of_stock_hit":"crwdns5155:0crwdne5155:0","plugin_ito_claim_success_share":"crwdns5157:0{{user}}crwdnd5157:0{{account}}crwdnd5157:0{{symbol}}crwdnd5157:0{{link}}crwdne5157:0","plugin_ito_claim_success_share_no_official_account":"crwdns9179:0{{user}}crwdnd9179:0{{symbol}}crwdnd9179:0{{link}}crwdne9179:0","plugin_ito_claim_foreshow_share":"crwdns5159:0{{symbol}}crwdnd5159:0{{name}}crwdnd5159:0{{account}}crwdnd5159:0{{link}}crwdne5159:0","plugin_ito_claim_foreshow_share_no_official_account":"crwdns9181:0{{symbol}}crwdnd9181:0{{name}}crwdnd9181:0{{link}}crwdne9181:0","plugin_ito_password":"crwdns5161:0{{password}}crwdne5161:0","plugin_ito_status_no_start":"crwdns5163:0crwdne5163:0","plugin_ito_status_ongoing":"crwdns5165:0crwdne5165:0","plugin_ito_status_out_of_stock":"crwdns5167:0crwdne5167:0","plugin_ito_loading":"crwdns5169:0crwdne5169:0","plugin_ito_amount_unlocked":"crwdns5175:0{{amount}}crwdnd5175:0{{symbol}}crwdne5175:0","plugin_ito_amount_unlocked_infinity":"crwdns5177:0{{symbol}}crwdne5177:0","plugin_ito_unlocking_symbol":"crwdns5179:0{{symbol}}crwdne5179:0","plugin_ito_continue":"crwdns5181:0crwdne5181:0","plugin_ito_view_on_explorer":"crwdns5183:0crwdne5183:0","plugin_ito_unlock_tip":"crwdns10829:0{{address}}crwdnd10829:0{{symbol}}crwdne10829:0","plugin_collectible_you":"crwdns5185:0crwdne5185:0","plugin_collectible_done":"crwdns5187:0crwdne5187:0","plugin_collectible_retry":"crwdns5189:0crwdne5189:0","plugin_collectible_get_more_token":"crwdns10805:0{{token}}crwdne10805:0","plugin_collectible_sell":"crwdns5191:0crwdne5191:0","plugin_collectible_checkout":"crwdns5193:0crwdne5193:0","plugin_collectible_place_bid":"crwdns5195:0crwdne5195:0","plugin_collectible_buy_now":"crwdns5197:0crwdne5197:0","plugin_collectible_make_offer":"crwdns5199:0crwdne5199:0","plugin_collectible_post_listing":"crwdns5201:0crwdne5201:0","plugin_collectible_description":"crwdns5203:0{{price}}crwdnd5203:0{{symbol}}crwdne5203:0","plugin_collectible_article":"crwdns5205:0crwdne5205:0","plugin_collectible_overview":"crwdns10523:0crwdne10523:0","plugin_collectible_details":"crwdns5207:0crwdne5207:0","plugin_collectible_offers":"crwdns5209:0crwdne5209:0","plugin_collectible_listing":"crwdns5211:0crwdne5211:0","plugin_collectible_history":"crwdns5213:0crwdne5213:0","plugin_collectible_event":"crwdns5215:0crwdne5215:0","plugin_collectible_unit_price":"crwdns5217:0crwdne5217:0","plugin_collectible_price":"crwdns5219:0crwdne5219:0","plugin_collectible_from":"crwdns5221:0crwdne5221:0","plugin_collectible_to":"crwdns5223:0crwdne5223:0","plugin_collectible_date":"crwdns5225:0crwdne5225:0","plugin_collectible_quantity":"crwdns5227:0crwdne5227:0","plugin_collectible_expiration":"crwdns5229:0crwdne5229:0","plugin_collectible_no_offers":"crwdns5231:0crwdne5231:0","plugin_collectible_no_listings":"crwdns5233:0crwdne5233:0","plugin_collectible_base":"crwdns5235:0crwdne5235:0","plugin_collectible_properties":"crwdns5237:0crwdne5237:0","plugin_collectible_about":"crwdns5239:0crwdne5239:0","plugin_collectible_chain_info":"crwdns5241:0crwdne5241:0","plugin_collectible_contract_address":"crwdns5243:0crwdne5243:0","plugin_collectible_token_id":"crwdns5245:0crwdne5245:0","plugin_collectible_block_chain":"crwdns5247:0crwdne5247:0","plugin_collectible_create_by":"crwdns5249:0crwdne5249:0","plugin_collectible_owned_by":"crwdns5251:0crwdne5251:0","plugin_collectible_view_on":"crwdns10525:0crwdne10525:0","plugin_collectible_no_history":"crwdns5253:0crwdne5253:0","plugin_collectible_ensure_unreviewed_item":"crwdns5255:0crwdne5255:0","plugin_collectible_check_tos_document":"crwdns5257:0crwdne5257:0","plugin_collectible_insufficient_offer":"crwdns10615:0crwdne10615:0","plugin_collectible_not_been_reviewed_by_opensea":"crwdns5259:0crwdne5259:0","plugin_collectible_reviewed_tips":"crwdns5261:0crwdne5261:0","plugin_collectible_total":"crwdns5263:0crwdne5263:0","plugin_collectible_subtotal":"crwdns5265:0crwdne5265:0","plugin_collectible_item":"crwdns5267:0crwdne5267:0","plugin_collectible_approved_tips":"crwdns5269:0crwdne5269:0","plugin_collectible_agree_terms":"crwdns5271:0crwdne5271:0","plugin_collectible_convert_eth":"crwdns5273:0crwdne5273:0","plugin_collectible_sale_end":"crwdns5275:0{{time}}crwdne5275:0","plugin_collectible_set_initial_price":"crwdns5277:0crwdne5277:0","plugin_collectible_ending_price_tip":"crwdns5279:0crwdne5279:0","plugin_collectible_starting_price":"crwdns5281:0crwdne5281:0","plugin_collectible_ending_price":"crwdns5283:0crwdne5283:0","plugin_collectible_ending_price_less_than_staring":"crwdns5285:0crwdne5285:0","plugin_collectible_expiration_date":"crwdns5287:0crwdne5287:0","plugin_collectible_schedule_date":"crwdns5289:0crwdne5289:0","plugin_collectible_auto_cancel_tip":"crwdns5291:0crwdne5291:0","plugin_collectible_schedule_future_date":"crwdns5293:0crwdne5293:0","plugin_collectible_buyer_address":"crwdns5295:0crwdne5295:0","plugin_collectible_buyer_address_placeholder":"crwdns5297:0crwdne5297:0","plugin_collectible_buyer_address_helper_text":"crwdns5299:0crwdne5299:0","plugin_collectible_include_ending_price":"crwdns5301:0crwdne5301:0","plugin_collectible_include_ending_price_helper":"crwdns5303:0crwdne5303:0","plugin_collectible_schedule_for_a_future_time":"crwdns5305:0crwdne5305:0","plugin_collectible_schedule_for_a_future_time_helper":"crwdns5307:0crwdne5307:0","plugin_collectible_privacy":"crwdns5309:0crwdne5309:0","plugin_collectible_privacy_helper":"crwdns5311:0crwdne5311:0","plugin_collectible_enter_a_price":"crwdns5313:0crwdne5313:0","plugin_collectible_insufficient_balance":"crwdns7963:0crwdne7963:0","plugin_collectible_invalid_schedule_date":"crwdns5317:0crwdne5317:0","plugin_collectible_invalid_ending_price":"crwdns5319:0crwdne5319:0","plugin_collectible_invalid_expiration_date":"crwdns5321:0crwdne5321:0","plugin_collectible_invalid_buyer_address":"crwdns5323:0crwdne5323:0","plugin_collectible_set_price":"crwdns5325:0crwdne5325:0","plugin_collectible_highest_bid":"crwdns5327:0crwdne5327:0","plugin_collectible_minimum_bid":"crwdns5329:0crwdne5329:0","plugin_collectible_set_starting_bid_price":"crwdns5331:0crwdne5331:0","plugin_collectible_reserve_price":"crwdns5333:0crwdne5333:0","plugin_collectible_reserve_price_helper":"crwdns5335:0crwdne5335:0","plugin_collectible_auction_auto_end":"crwdns5337:0crwdne5337:0","plugin_collectible_enter_minimum_bid":"crwdns5339:0crwdne5339:0","plugin_collectible_enter_reserve_price":"crwdns5341:0crwdne5341:0","plugin_collectible_invalid_reserve_price":"crwdns5343:0crwdne5343:0","plugin_collectible_place_a_bid":"crwdns5345:0crwdne5345:0","plugin_collectible_make_an_offer":"crwdns5347:0crwdne5347:0","plugin_collectible_approved_by_open_sea":"crwdns5349:0crwdne5349:0","plugin_collectible_legal_text":"crwdns5351:0crwdne5351:0","plugin_cryptoartai_description_title":"crwdns10527:0crwdne10527:0","plugin_cryptoartai_edition":"crwdns10529:0crwdne10529:0","plugin_cryptoartai_operator":"crwdns10531:0crwdne10531:0","plugin_cryptoartai_activity_type":"crwdns10533:0crwdne10533:0","plugin_cryptoartai_status":"crwdns10535:0crwdne10535:0","plugin_cryptoartai_time":"crwdns10537:0crwdne10537:0","plugin_cryptoartai_price":"crwdns10539:0crwdne10539:0","plugin_cryptoartai_tx":"crwdns10541:0crwdne10541:0","plugin_cryptoartai_latest_bid":"crwdns10543:0crwdne10543:0","plugin_cryptoartai_description":"crwdns10545:0{{bidPrice}}crwdnd10545:0{{symbol}}crwdnd10545:0{{price}}crwdnd10545:0{{symbol}}crwdnd10545:0{{soldNum}}crwdnd10545:0{{totalAvailable}}crwdnd10545:0{{editionNumber}}crwdne10545:0","plugin_cryptoartai_no_price_description":"crwdns10547:0{{bidPrice}}crwdnd10547:0{{symbol}}crwdnd10547:0{{soldNum}}crwdnd10547:0{{totalAvailable}}crwdnd10547:0{{editionNumber}}crwdne10547:0","plugin_cryptoartai_sold_description":"crwdns10549:0{{soldPrice}}crwdnd10549:0{{symbol}}crwdnd10549:0{{soldNum}}crwdnd10549:0{{totalAvailable}}crwdnd10549:0{{editionNumber}}crwdne10549:0","plugin_cryptoartai_buy":"crwdns10551:0crwdne10551:0","plugin_cryptoartai_buy_now":"crwdns10553:0crwdne10553:0","plugin_cryptoartai_current_balance":"crwdns10555:0crwdne10555:0","plugin_cryptoartai_current_highest_offer":"crwdns10557:0crwdne10557:0","plugin_cryptoartai_bid_least":"crwdns10559:0crwdne10559:0","plugin_cryptoartai_escrowed":"crwdns10561:0crwdne10561:0","plugin_cryptoartai_current_balance_is":"crwdns10563:0crwdne10563:0","plugin_cryptoartai_auction_end":"crwdns10565:0crwdne10565:0","plugin_cryptoartai_auction_end_time":"crwdns10567:0crwdne10567:0","plugin_cryptoartai_share":"crwdns10569:0{{amount}}crwdnd10569:0{{symbol}}crwdnd10569:0{{title}}crwdnd10569:0{{assetLink}}crwdnd10569:0{{account}}crwdne10569:0","plugin_cryptoartai_share_no_official_account":"crwdns10571:0{{amount}}crwdnd10571:0{{symbol}}crwdnd10571:0{{title}}crwdnd10571:0{{assetLink}}crwdne10571:0","plugin_cryptoartai_offer_share":"crwdns10573:0{{amount}}crwdnd10573:0{{symbol}}crwdnd10573:0{{title}}crwdnd10573:0{{assetLink}}crwdnd10573:0{{account}}crwdne10573:0","plugin_cryptoartai_offer_share_no_official_account":"crwdns10575:0{{amount}}crwdnd10575:0{{symbol}}crwdnd10575:0{{title}}crwdnd10575:0{{assetLink}}crwdne10575:0","plugin_snapshot_info_title":"crwdns5353:0crwdne5353:0","plugin_snapshot_info_strategy":"crwdns5355:0crwdne5355:0","plugin_snapshot_info_author":"crwdns5357:0crwdne5357:0","plugin_snapshot_info_ipfs":"crwdns5359:0crwdne5359:0","plugin_snapshot_info_start":"crwdns5361:0crwdne5361:0","plugin_snapshot_info_end":"crwdns5363:0crwdne5363:0","plugin_snapshot_info_snapshot":"crwdns5365:0crwdne5365:0","plugin_snapshot_result_title":"crwdns5367:0crwdne5367:0","plugin_snapshot_votes_title":"crwdns5369:0crwdne5369:0","plugin_snapshot_no_power":"crwdns5371:0crwdne5371:0","plugin_snapshot_vote_success":"crwdns5373:0crwdne5373:0","plugin_snapshot_vote":"crwdns5375:0crwdne5375:0","plugin_snapshot_vote_choice":"crwdns5377:0crwdne5377:0","plugin_snapshot_vote_power":"crwdns5379:0crwdne5379:0","plugin_snapshot_vote_title":"crwdns5381:0crwdne5381:0","plugin_snapshot_vote_confirm_dialog_title":"crwdns5383:0crwdne5383:0","plugin_snapshot_vote_confirm_dialog_choice":"crwdns5385:0{{ choiceText }}crwdne5385:0","plugin_snapshot_vote_confirm_dialog_warning":"crwdns5387:0crwdne5387:0","plugin_snapshot_current_result_title":"crwdns5389:0crwdne5389:0","plugin_snapshot_download_report":"crwdns5391:0crwdne5391:0","plugin_find_truman_display_name":"crwdns10343:0crwdne10343:0","plugin_find_truman_status_puzzle":"crwdns10345:0crwdne10345:0","plugin_find_truman_status_poll":"crwdns10347:0crwdne10347:0","plugin_find_truman_status_result":"crwdns10349:0crwdne10349:0","plugin_find_truman_status_puzzle_result":"crwdns10351:0crwdne10351:0","plugin_find_truman_status_poll_result":"crwdns10353:0crwdne10353:0","plugin_find_truman_puzzle_to_be_revealed":"crwdns10355:0crwdne10355:0","plugin_find_truman_puzzles_to_be_revealed":"crwdns10357:0crwdne10357:0","plugin_find_truman_poll_to_be_revealed":"crwdns10359:0crwdne10359:0","plugin_find_truman_polls_to_be_revealed":"crwdns10361:0crwdne10361:0","plugin_find_truman_puzzle_underway":"crwdns10365:0crwdne10365:0","plugin_find_truman_puzzle_rate":"crwdns10367:0crwdne10367:0","plugin_find_truman_voting_underway":"crwdns10369:0crwdne10369:0","plugin_find_truman_voting_rate":"crwdns10371:0crwdne10371:0","plugin_find_truman_submit_failed":"crwdns10375:0crwdne10375:0","plugin_find_truman_vote":"crwdns10377:0crwdne10377:0","plugin_find_truman_votes":"crwdns10379:0crwdne10379:0","plugin_find_truman_selected":"crwdns10385:0crwdne10385:0","plugin_find_truman_unselect":"crwdns10387:0crwdne10387:0","plugin_find_truman_answer":"crwdns10389:0crwdne10389:0","plugin_find_truman_result":"crwdns10391:0crwdne10391:0","plugin_find_truman_buy":"crwdns10393:0crwdne10393:0","plugin_find_truman_decrypted_by":"crwdns10397:0crwdne10397:0","plugin_find_truman_insufficient_nft":"crwdns10405:0crwdne10405:0","plugin_find_truman_buy_nft_tip":"crwdns10407:0{{count}}crwdne10407:0","plugin_find_truman_connect_wallet_tip":"crwdns10411:0crwdne10411:0","plugin_find_truman_no_participation_tip":"crwdns10413:0crwdne10413:0","plugin_dhedge_managed_by":"crwdns5393:0{{managerName}}crwdne5393:0","plugin_dhedge_manager_share":"crwdns5395:0{{managerShare}}crwdne5395:0","plugin_dhedge_manager_share_more_than_50":"crwdns5397:0crwdne5397:0","plugin_dhedge_value_managed":"crwdns5399:0crwdne5399:0","plugin_dhedge_lifetime_return":"crwdns5401:0crwdne5401:0","plugin_dhedge_risk_factor":"crwdns5403:0crwdne5403:0","plugin_dhedge_tab_stats":"crwdns5405:0crwdne5405:0","plugin_dhedge_tab_chart":"crwdns5407:0crwdne5407:0","plugin_dhedge_strategy":"crwdns5409:0crwdne5409:0","plugin_dhedge_see_less":"crwdns5411:0crwdne5411:0","plugin_dhedge_see_more":"crwdns5413:0crwdne5413:0","plugin_dhedge_no_data":"crwdns5415:0crwdne5415:0","plugin_dhedge_fetch_error":"crwdns5417:0crwdne5417:0","plugin_dhedge_loading_chart":"crwdns5419:0crwdne5419:0","plugin_dhedge_invest":"crwdns5421:0crwdne5421:0","plugin_dhedge_buy_token":"crwdns5423:0{{symbol}}crwdne5423:0","plugin_dhedge_enter_an_amount":"crwdns5425:0crwdne5425:0","plugin_dhedge_insufficient_balance":"crwdns5427:0{{symbol}}crwdne5427:0","plugin_dhedge_loading":"crwdns5429:0crwdne5429:0","plugin_dhedge_pool_not_found":"crwdns5431:0crwdne5431:0","plugin_dhedge_smt_wrong":"crwdns5433:0crwdne5433:0","plugin_pooltogether_tab_pools":"crwdns5435:0crwdne5435:0","plugin_pooltogether_tab_account":"crwdns5437:0crwdne5437:0","plugin_pooltogether_no_pool":"crwdns5439:0crwdne5439:0","plugin_pooltogether_pool_ended":"crwdns5441:0crwdne5441:0","plugin_pooltogether_deposit":"crwdns5443:0{{token}}crwdne5443:0","plugin_pooltogether_deposit_msg":"crwdns13175:0crwdne13175:0","plugin_pooltogether_apr":"crwdns5445:0{{apr}}crwdnd5445:0{{token}}crwdne5445:0","plugin_pooltogether_view_pool":"crwdns5447:0crwdne5447:0","plugin_pooltogether_prize":"crwdns5449:0{{period}}crwdne5449:0","plugin_pooltogether_share":"crwdns5451:0{{amount}}crwdnd5451:0{{cashTag}}crwdnd5451:0{{symbol}}crwdnd5451:0{{pool}}crwdnd5451:0{{account}}crwdne5451:0","plugin_pooltogether_share_no_official_account":"crwdns9183:0{{amount}}crwdnd9183:0{{cashTag}}crwdnd9183:0{{symbol}}crwdnd9183:0{{pool}}crwdne9183:0","plugin_pooltogether_buy":"crwdns5453:0{{symbol}}crwdne5453:0","plugin_pooltogether_enter_an_amount":"crwdns5455:0crwdne5455:0","plugin_pooltogether_insufficient_balance":"crwdns5457:0{{symbol}}crwdne5457:0","plugin_pooltogether_deposit_title":"crwdns5459:0{{token}}crwdne5459:0","plugin_pooltogether_odds_title":"crwdns5461:0crwdne5461:0","plugin_pooltogether_odds_value":"crwdns5463:0{{value}}crwdnd5463:0{{period}}crwdne5463:0","plugin_pooltogether_short_odds_value":"crwdns5465:0{{value}}crwdne5465:0","plugin_pooltogether_my_deposits":"crwdns5467:0crwdne5467:0","plugin_pooltogether_no_account_pool":"crwdns5469:0crwdne5469:0","plugin_pooltogether_missing_pool":"crwdns5471:0crwdne5471:0","plugin_pooltogether_winning_odds":"crwdns5473:0crwdne5473:0","plugin_pooltogether_in":"crwdns5475:0crwdne5475:0","plugin_pooltogether_manage":"crwdns5477:0crwdne5477:0","plugin_pooltogether_token_not_found":"crwdns5479:0crwdne5479:0","plugin_good_ghosting_loading_other_player_stats":"crwdns10253:0crwdne10253:0","plugin_good_ghosting_loading_game_stats":"crwdns10255:0crwdne10255:0","plugin_good_ghosting_game_duration":"crwdns5481:0crwdne5481:0","plugin_good_ghosting_current_round":"crwdns5483:0crwdne5483:0","plugin_good_ghosting_recurring_deposit":"crwdns5485:0crwdne5485:0","plugin_good_ghosting_round_length":"crwdns5487:0crwdne5487:0","plugin_good_ghosting_pool_apy":"crwdns5489:0crwdne5489:0","plugin_good_ghosting_pool_earnings":"crwdns5491:0crwdne5491:0","plugin_good_ghosting_extra_rewards":"crwdns5493:0crwdne5493:0","plugin_good_ghosting_total_saved":"crwdns5495:0crwdne5495:0","plugin_good_ghosting_game_launched":"crwdns5497:0crwdne5497:0","plugin_good_ghosting_join_round":"crwdns5499:0crwdne5499:0","plugin_good_ghosting_join_deadline":"crwdns5501:0crwdne5501:0","plugin_good_ghosting_deposit":"crwdns5503:0{{index}}crwdne5503:0","plugin_good_ghosting_deposit_deadline":"crwdns5505:0{{index}}crwdne5505:0","plugin_good_ghosting_waiting_round":"crwdns5507:0crwdne5507:0","plugin_good_ghosting_waiting_round_end":"crwdns5509:0crwdne5509:0","plugin_good_ghosting_withdraw":"crwdns5511:0crwdne5511:0","plugin_good_ghosting_all_players_status_winning":"crwdns5513:0crwdne5513:0","plugin_good_ghosting_all_players_status_waiting":"crwdns5515:0crwdne5515:0","plugin_good_ghosting_all_players_status_ghost":"crwdns5517:0crwdne5517:0","plugin_good_ghosting_all_players_status_dropout":"crwdns5519:0crwdne5519:0","plugin_good_ghosting_status_winning":"crwdns5521:0crwdne5521:0","plugin_good_ghosting_status_waiting":"crwdns5523:0crwdne5523:0","plugin_good_ghosting_status_ghost":"crwdns5525:0crwdne5525:0","plugin_good_ghosting_status_dropout":"crwdns5527:0crwdne5527:0","plugin_good_ghosting_status_unknown":"crwdns5529:0crwdne5529:0","plugin_good_ghosting_status":"crwdns5531:0crwdne5531:0","plugin_good_ghosting_deposits":"crwdns5533:0crwdne5533:0","plugin_good_ghosting_total_deposited":"crwdns5535:0crwdne5535:0","plugin_good_ghosting_address":"crwdns5537:0crwdne5537:0","plugin_good_ghosting_not_a_participant":"crwdns5539:0crwdne5539:0","plugin_good_ghosting_next_event":"crwdns5541:0crwdne5541:0","plugin_good_ghosting_game_end":"crwdns5543:0crwdne5543:0","plugin_good_ghosting_game_over":"crwdns5545:0crwdne5545:0","plugin_good_ghosting_participants_withdraw":"crwdns5547:0crwdne5547:0","plugin_good_ghosting_join_game":"crwdns5549:0crwdne5549:0","plugin_good_ghosting_make_deposit":"crwdns5551:0crwdne5551:0","plugin_good_ghosting_join_help_text":"crwdns5553:0{{amount}}crwdnd5553:0{{token}}crwdne5553:0","plugin_good_ghosting_deposit_help_text":"crwdns5555:0{{segmentPayment}}crwdnd5555:0{{token}}crwdne5555:0","plugin_good_ghosting_withdraw_help_text":"crwdns5557:0crwdne5557:0","plugin_good_ghosting_leave_game":"crwdns5559:0crwdne5559:0","plugin_good_ghosting_early_withdraw_info":"crwdns5561:0{{amount}}crwdnd5561:0{{token}}crwdne5561:0","plugin_good_ghosting_rules":"crwdns5563:0crwdne5563:0","plugin_good_ghosting_game_rules":"crwdns5565:0{{amount}}crwdnd5565:0{{token}}crwdnd5565:0{{roundCount}}crwdne5565:0","plugin_good_ghosting_tx_fail":"crwdns5567:0crwdne5567:0","plugin_good_ghosting_tx_timeout":"crwdns5569:0crwdne5569:0","plugin_good_ghosting_something_went_wrong":"crwdns5571:0crwdne5571:0","plugin_good_ghosting_view_on_explorer":"crwdns5573:0crwdne5573:0","plugin_good_ghosting_checking_balance":"crwdns5575:0crwdne5575:0","plugin_good_ghosting_insufficient_balance":"crwdns5577:0{{amount}}crwdnd5577:0{{token}}crwdne5577:0","plugin_good_ghosting_balance_error":"crwdns5579:0crwdne5579:0","plugin_unlockprotocol_buy_lock":"crwdns10257:0crwdne10257:0","plugin_unlockprotocol_buy_lock_alert":"crwdns10259:0crwdne10259:0","plugin_unlockprotocol_no_access":"crwdns10261:0crwdne10261:0","plugin_unlockprotocol_select_unlock_lock":"crwdns7983:0crwdne7983:0","plugin_unlockprotocol_no_lock_found":"crwdns7985:0crwdne7985:0","plugin_unlockprotocol_submit_post":"crwdns7987:0crwdne7987:0","plugin_unlockprotocol_title":"crwdns7989:0crwdne7989:0","plugin_unlockprotocol_server_error":"crwdns7991:0crwdne7991:0","plugin_furucombo_tab_pool":"crwdns9113:0crwdne9113:0","plugin_furucombo_tab_investments":"crwdns9115:0crwdne9115:0","plugin_furucombo_liquidity":"crwdns9117:0crwdne9117:0","plugin_furucombo_annual_percentage_yield":"crwdns9119:0crwdne9119:0","plugin_furucombo_rewards":"crwdns9121:0crwdne9121:0","plugin_furucombo_invest":"crwdns9123:0crwdne9123:0","plugin_furucombo_pool_not_found":"crwdns9125:0crwdne9125:0","plugin_furucombo_smt_wrong":"crwdns9127:0crwdne9127:0","plugin_furucombo_head_pools":"crwdns9129:0crwdne9129:0","plugin_furucombo_head_action":"crwdns9131:0crwdne9131:0","plugin_pets_dialog_title":"crwdns13145:0crwdne13145:0","plugin_pets_dialog_title_share":"crwdns13272:0crwdne13272:0","plugin_pets_dialog_contract":"crwdns13147:0crwdne13147:0","plugin_pets_dialog_token":"crwdns13149:0crwdne13149:0","plugin_pets_dialog_msg":"crwdns13151:0crwdne13151:0","plugin_pets_dialog_msg_optional":"crwdns13153:0crwdne13153:0","plugin_pets_dialog_btn":"crwdns13155:0crwdne13155:0","plugin_pets_dialog_btn_share":"crwdns13274:0crwdne13274:0","plugin_pets_dialog_preview":"crwdns13157:0crwdne13157:0","plugin_pets_dialog_created":"crwdns13159:0crwdne13159:0","plugin_pets_dialog_powered":"crwdns13161:0crwdne13161:0","plugin_pets_dialog_success":"crwdns13163:0crwdne13163:0","plugin_pets_dialog_fail":"crwdns13165:0crwdne13165:0","plugin_pets_dialog_check_title":"crwdns13245:0crwdne13245:0","popups_following_permissions":"crwdns10271:0{{pluginName}}crwdnd10271:0{{pluginURL}}crwdne10271:0","popups_permissions":"crwdns10281:0crwdne10281:0","popups_sites":"crwdns10283:0crwdne10283:0","popups_mask_requests_permission":"crwdns10285:0crwdne10285:0","popups_grant":"crwdns10287:0crwdne10287:0","popups_permission_request":"crwdns10289:0crwdne10289:0","popups_permission_request_content":"crwdns10291:0crwdne10291:0","popups_permission_request_content2":"crwdns10293:0crwdne10293:0","popups_welcome":"crwdns7757:0crwdne7757:0","popups_wallet_token":"crwdns7759:0crwdne7759:0","popups_wallet_dialog_legacy_wallet_tip":"crwdns9463:0crwdne9463:0","popups_wallet_set_payment_password":"crwdns9307:0crwdne9307:0","popups_wallet_payment_password":"crwdns9309:0crwdne9309:0","popups_wallet_re_payment_password":"crwdns10749:0crwdne10749:0","popups_wallet_set_up_payment_password":"crwdns9311:0crwdne9311:0","popups_wallet_payment_password_tip":"crwdns9313:0crwdne9313:0","popups_wallet_go_back":"crwdns7761:0crwdne7761:0","popups_wallet_start_up_tip":"crwdns7763:0crwdne7763:0","popups_wallet_name_placeholder":"crwdns7777:0crwdne7777:0","popups_wallet_name_mnemonic":"crwdns10751:0crwdne10751:0","popups_wallet_name_json_file":"crwdns10753:0crwdne10753:0","popups_wallet_name_private_key":"crwdns10755:0crwdne10755:0","popups_wallet_name_mnemonic_placeholder":"crwdns10757:0crwdne10757:0","popups_wallet_name_origin_password":"crwdns10759:0crwdne10759:0","popups_wallet_tab_assets":"crwdns7781:0crwdne7781:0","popups_wallet_tab_activity":"crwdns7783:0crwdne7783:0","popups_wallet_derivation_path":"crwdns7785:0{{ path }}crwdne7785:0","popups_wallet_next":"crwdns7789:0crwdne7789:0","popups_wallet_backup_wallet":"crwdns7797:0crwdne7797:0","popups_wallet_backup_json_file":"crwdns7799:0crwdne7799:0","popups_wallet_backup_private_key":"crwdns7801:0crwdne7801:0","popups_wallet_backup_json_file_confirm_password_tip":"crwdns7803:0crwdne7803:0","popups_wallet_backup_private_key_tip":"crwdns7805:0crwdne7805:0","popups_wallet_backup_input_password":"crwdns7807:0crwdne7807:0","popups_wallet_backup_json_file_drag_tip":"crwdns7809:0crwdne7809:0","popups_wallet_backup_json_file_click_tip":"crwdns7811:0crwdne7811:0","popups_wallet_enter_your_wallet_name":"crwdns7813:0crwdne7813:0","popups_wallet_delete_tip":"crwdns7815:0crwdne7815:0","popups_wallet_confirm_payment_password":"crwdns7817:0crwdne7817:0","popups_wallet_token_buy":"crwdns7819:0crwdne7819:0","popups_wallet_token_send":"crwdns7821:0crwdne7821:0","popups_wallet_token_swap":"crwdns7823:0crwdne7823:0","popups_wallet_view_on_explorer":"crwdns8057:0crwdne8057:0","popups_wallet_gas_fee_settings":"crwdns7837:0crwdne7837:0","popups_wallet_gas_fee_settings_description":"crwdns7839:0crwdne7839:0","popups_wallet_gas_fee_settings_low":"crwdns7841:0crwdne7841:0","popups_wallet_gas_fee_settings_medium":"crwdns7843:0crwdne7843:0","popups_wallet_gas_fee_settings_high":"crwdns7845:0crwdne7845:0","popups_wallet_gas_fee_settings_usd":"crwdns7847:0{{usd}}crwdne7847:0","popups_wallet_gas_fee_settings_gas_limit":"crwdns7855:0crwdne7855:0","popups_wallet_gas_fee_settings_max_priority_fee":"crwdns7857:0crwdne7857:0","popups_wallet_gas_fee_settings_max_fee":"crwdns7859:0crwdne7859:0","popups_wallet_gas_fee_settings_min_gas_limit_tips":"crwdns8993:0{{limit}}crwdne8993:0","popups_wallet_unsupported_network":"crwdns8995:0crwdne8995:0","popups_wallet_signature_request":"crwdns7861:0crwdne7861:0","popups_wallet_signature_request_message":"crwdns8059:0crwdne8059:0","popups_wallet_contract_interaction":"crwdns8061:0crwdne8061:0","popups_wallet_token_unlock_permission":"crwdns13035:0crwdne13035:0","popups_wallet_token_infinite_unlock":"crwdns13037:0crwdne13037:0","popups_wallet_contract_interaction_transfer":"crwdns8065:0crwdne8065:0","popups_wallet_contract_interaction_gas_fee":"crwdns8067:0crwdne8067:0","popups_wallet_contract_interaction_edit":"crwdns8069:0crwdne8069:0","popups_wallet_contract_interaction_total":"crwdns8071:0crwdne8071:0","popups_wallet_password_dont_match":"crwdns9315:0crwdne9315:0","popups_wallet_password_satisfied_requirement":"crwdns9317:0crwdne9317:0","popups_wallet_password_length_error":"crwdns9319:0crwdne9319:0","popups_wallet_unlock_wallet":"crwdns8073:0crwdne8073:0","popups_wallet_unlock_error_password":"crwdns8075:0crwdne8075:0","popups_wallet_activity_to_address":"crwdns8211:0{{address}}crwdne8211:0","popups_wallet_transfer_error_tip":"crwdns8997:0crwdne8997:0","popups_wallet_transactions_pending":"crwdns9005:0crwdne9005:0","popups_wallet_re_send":"crwdns8999:0crwdne8999:0","popups_wallet_choose_token":"crwdns9001:0crwdne9001:0","popups_wallet_gas_price":"crwdns9003:0crwdne9003:0","popups_wallet_done":"crwdns9321:0crwdne9321:0","popups_wallet_recovered":"crwdns9323:0crwdne9323:0","popups_wallet_no_transactions":"crwdns9325:0crwdne9325:0","popups_missing_parameter_caption":"crwdns7827:0crwdne7827:0","popups_persona_connect_to":"crwdns8973:0{{type}}crwdne8973:0","popups_persona_to_be_verified":"crwdns14716:0crwdne14716:0","popups_persona_disconnect":"crwdns8975:0crwdne8975:0","popups_persona_disconnect_confirmation":"crwdns14718:0crwdne14718:0","popups_persona_disconnect_confirmation_description":"crwdns14720:0crwdne14720:0","popups_persona":"crwdns14722:0crwdne14722:0","popups_twitter_id":"crwdns14724:0crwdne14724:0","popups_persona_logout":"crwdns8977:0crwdne8977:0","popups_persona_disconnect_tip":"crwdns8979:0crwdne8979:0","popups_persona_persona_name_exists":"crwdns8981:0crwdne8981:0","popups_persona_sign_request_title":"crwdns13137:0crwdne13137:0","popups_persona_sign_request_message":"crwdns13139:0crwdne13139:0","popups_password_do_not_match":"crwdns8983:0crwdne8983:0","popups_backup_password":"crwdns8985:0crwdne8985:0","popups_rename_error_tip":"crwdns8987:0{{length}}crwdne8987:0","nft_wallet_label":"crwdns9205:0crwdne9205:0","plugin_profile_no_wallets":"crwdns9327:0crwdne9327:0","plugin_vcent_last_offer_at":"crwdns10295:0crwdne10295:0","nft_input_address_label":"crwdns9193:0crwdne9193:0","nft_input_tokenid_label":"crwdns9195:0crwdne9195:0","nft_owner_hint":"crwdns9197:0crwdne9197:0","nft_add_dialog_title":"crwdns9199:0crwdne9199:0","nft_add_button_label":"crwdns9201:0crwdne9201:0","nft_list_title":"crwdns9203:0crwdne9203:0","nft_wallet_change":"crwdns9207:0crwdne9207:0","nft_button_add_collectible":"crwdns9209:0crwdne9209:0","nft_avatar":"crwdns9211:0crwdne9211:0","web3_tab_hint":"crwdns14544:0crwdne14544:0","plugin_artblocks_not_active":"crwdns14480:0crwdne14480:0","plugin_artblocks_completed":"crwdns14482:0crwdne14482:0","plugin_artblocks_paused":"crwdns14484:0crwdne14484:0","plugin_artblocks_collection":"crwdns14486:0crwdne14486:0","plugin_artblocks_details":"crwdns14488:0crwdne14488:0","plugin_artblocks_created_by":"crwdns14490:0crwdne14490:0","plugin_artblocks_purchase":"crwdns14492:0crwdne14492:0","plugin_artblocks_purchasing":"crwdns14494:0crwdne14494:0","plugin_artblocks_legal_text":"crwdns14496:0crwdne14496:0","plugin_artblocks_check_tos_document":"crwdns14498:0crwdne14498:0","plugin_artblocks_price_per_mint":"crwdns14500:0crwdne14500:0","plugin_artblocks_price_row":"crwdns14502:0crwdne14502:0","plugin_artblocks_minted_row":"crwdns14504:0crwdne14504:0","plugin_artblocks_license_row":"crwdns14506:0crwdne14506:0","plugin_artblocks_library_row":"crwdns14508:0crwdne14508:0","plugin_artblocks_website":"crwdns14510:0crwdne14510:0","plugin_artblocks_infos":"crwdns14512:0crwdne14512:0","plugin_artblocks_chain":"crwdns14514:0crwdne14514:0","plugin_artblocks_blockchain_row":"crwdns14516:0crwdne14516:0","plugin_artblocks_contract_row":"crwdns14518:0crwdne14518:0","plugin_artblocks_smt_wrong":"crwdns14520:0crwdne14520:0","plugin_artblocks_share":"crwdns14522:0{{name}}crwdnd14522:0{{price}}crwdnd14522:0{{symbol}}crwdne14522:0","plugin_artblocks_share_no_official_account":"crwdns14524:0{{name}}crwdnd14524:0{{price}}crwdnd14524:0{{symbol}}crwdne14524:0","nft_button_set_avatar":"crwdns9191:0crwdne9191:0"}');
;// CONCATENATED MODULE: ./shared-ui/locales/zh-CN.json
const zh_CN_namespaceObject = JSON.parse('{"database_backup":"备份数据库","database_overwrite":"使用备份覆盖数据库","database_clear":"清空数据库","debug_new_bug_issue":"新问题","debug_metadata_title":"添加新元数据或替换现有元数据","debug_metadata_put_metadata":"放入元数据","edit":"编辑","clear":"清空","more":"更多","approve":"批准","address":"地址","operation":"操作","gas_limit":"Gas 上限","gas_price":"Gas 价格","redirect_to":"跳转至","sign":"签名","reload":"重新加载","load":"加载","load_all":"加载全部","no_data":"暂无数据","tip":"小费","tags":"标签","contract":"合约","initializing":"初始化中...","redirect_alert":"如果您的浏览器没有重新跳转，请 <terms>点击这里</terms>。","typed_message_text_alert":"当前只支持输入消息文本。","badge_renderer_provided_by_plugin":"插件提供：","add_token":"添加代币","add_nft_contract_search_hint":"搜索 NFT 合约名称或地址","applications":"应用程序","additional_post_box__encrypted_post_pre":"安装 #mask_io 解密此贴文 ！ {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet_twitter_official_account":"使用 #mask_io 来认领这个红包！@{{account}} {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet":"使用 #mask_io 来认领这个红包！@{{encrypted}}","additional_post_box__steganography_post_pre":"此图片使用#mask_io加密。📪🔑 安装mask.io解密它。 {{random}}","auto_paste_failed_dialog_title":"手动粘贴","auto_paste_failed_dialog_content":"请复制下面的文本和图片(如果有的话)再进行发布。","auto_paste_failed_dialog_image_caption":"在新分页中打开","auto_paste_failed_snackbar":"您需要手动粘贴加密内容吗？","auto_paste_failed_snackbar_action":"教我怎么做","auto_paste_failed_snackbar_action_close":"关闭","automation_request_click_post_button":"请点击“Post”按钮打开贴文发送框。","try_again":"再试一次","ok":"好的","start":"开始","cancel":"取消","twitter_account":"realMaskNetwork","facebook_account":"masknetwork","comment_box__placeholder":"添加加密评论…","confirm":"确认","copy_text":"复制文本","loading_failed":"加载失败","copy_image":"复制图片","copy_success_of_wallet_addr":"复制钱包地址成功！","copy_success_of_text":"复制文本成功!","copy_success_of_image":"复制图片成功!","connecting":"正在连接…","create":"创建","copied":"已复制","daily":"每日","dashboard_tab_collectibles":"收藏品","dashboard_no_collectible_found":"未找到任何收藏品","dashboard_collectible_menu_all":"全部 ({{count}})","days":"每隔 {{days}} 天","decrypted_postbox_add_recipients":"追加收件人","decrypted_postbox_decrypting":"Mask正在解密中…","decrypted_postbox_decoding":"Mask正在解码中…","decrypted_postbox_decrypting_finding_person_key":"Mask 正在寻找作者的公钥…","decrypted_postbox_decrypting_finding_post_key":"Mask 正在获取贴文密钥以解密此贴文…","decrypted_postbox_author_mismatch":"最初发布于 {{name}}","decrypted_postbox_title":"由Mask解密：","dismiss":"忽略","delete":"删除","delete_wallet":"删除钱包","hide_token":"隐藏代币","hide_token_hint":"您将来可以通过钱包页面中的“添加代币”重新添加 <strong>{{token}}</strong> 。","done":"完成!","download":"下载","failed":"失败","buy_now":"立即购买","setup_guide_login":"请注册或登录以连接Mask Network。","setup_guide_find_username_text":"Mask需要用户名来连接您的身份。<br /> 请确保正确无误。","setup_guide_connect_auto":"连接","setup_guide_connect_failed":"失败。请再试一次。","setup_guide_verify":"验证","setup_guide_verify_dismiss":"不再提醒","setup_guide_verify_checking":"正在检查","setup_guide_verifying":"正在验证","setup_guide_verifying_failed":"重新验证","user_guide_tip_connected":"您已成功连接到此帐户。","setup_guide_say_hello_content":"你好，Mask世界。这是我发的第一条加密信息。安装 https://mask.io来给我发送加密贴文吧。 ","setup_guide_say_hello_follow":"关注 {{account}} 来探索Web 3.0。","user_guide_tip_1":"点击这里快速访问主要功能。","user_guide_tip_2":"点击这里连接您的钱包。您可以在此选择网络或更改您的钱包。","user_guide_tip_3":"点击这里快速开始。","create_persona":"创建身份","connect_persona":"连接身份","please_create_persona":"请创建身份","please_connect_persona":"请连接身份","mask_network":"Mask Network","import":"导入","no_search_result":"没有任何结果。","set_nft_profile_photo":"设置NFT头像","use_nft":"设置NFT头像","loading":"加载中","unlock":"解锁","payload_bad":"这个贴文似乎已损坏。Mask无法解密它。","payload_incomplete":"此贴文不完整。您需要查看完整贴文才能解密。","payload_not_found":"未找到Payload。","payload_throw_in_alpha41":"不支持Alpha41 。告诉您的朋友升级Mask！","personas":"身份","browser_action_enter_dashboard":"进入控制面板","pending":"待定中...","popups_initial_tips":"请登录或注册以使用 {{type}}。","beta_sup":"<sup>(测试版)<sup>","post_dialog_plugins_experimental":"插件 <sup>(体验版)</sup>","post_dialog__button":"加密","post_dialog__image_payload":"图片Payload","post_dialog__more_options_title":"更多选项","post_dialog__placeholder":"文本在此处…","post_dialog__select_recipients_end_to_end":"仅本人","post_dialog__select_recipients_share_to_everyone":"任何人","post_dialog__select_recipients_title":"选择接收者","post_dialog__select_specific_e2e_target_title":"和Mask Network用户 ({{selected}} 已选择)","post_dialog__title":"Mask：编辑","post_dialog_enable_paste_auto":"启用自动粘贴","post_modal_hint__button":"编辑加密贴文","hide":"隐藏","reset":"重置","editor":"编辑器","retry":"重试","rename":"重命名","search":"搜索","go_wrong":"出现了一些问题。","search_box_placeholder":"输入要搜索的内容","select_all":"全选","select_none":"全不选","all_friends":"全部好友","select_specific_friends_dialog__button":"完成","select_specific_friends_dialog__title":"选择特定联系人","service_decryption_failed":"解密失败","service_invalid_backup_file":"这似乎不是Mask的备份。","service_unknown_payload":"未知的贴文版本。您可能需要更新Mask。","service_username_invalid":"无效的用户名","speed_up":"加速","save":"保存","skip":"跳过","next":"下一步","try":"试一下","share":"分享","share_to":"分享到...","sharing":"分享中","transfer":"转账","export":"导出","wallet_load_retry":"加载 {{symbol}} 失败，请点击重试。","wallet_name":"钱包名称","wallet_rename":"重新命名钱包","wallet_add_nft_invalid_owner":"此收藏品不属于您。","wallet_add_nft_already_added":"此收藏品已被添加。","wallet_loading_token":"正在加载代币","wallet_loading_nft_contract":"正在加载 NFT 合约...","wallet_search_contract_no_result":"没有结果或合同地址不符合查询标准。","wallet_search_no_result":"没有任何结果。","wallet_confirm_with_password":"使用密码确认","wallet_airdrop_nft_unclaimed_title":"未认领的NFT Airdrop：","plugin_not_enabled":"{{plugin}} (未启用)","plugin_external_unknown_plugin":"发现新的未知Mask插件，您想要加载它们吗？","plugin_external_loader_search_holder":"查找外部插件","plugin_external_loader_search_button":"查找插件","plugin_external_loader_search_sub_title":"每个外部插件必须托管在一个 URL 上。","plugin_external_loader_example_github":"官方插件示例可在 <terms>GitHub</terms> 找到。","plugin_external_loader_intro":"Mask外部插件是Mask Network的早期功能，其允许任何人开发外部Mask插件。","plugin_external_loader_alert_title":"外部插件：实验性Mask Network功能！","plugin_external_plugin_url":"插件 URL：","plugin_external_unverified_publisher":"发布者: {{publisher}} (未验证)","plugin_external_entry_title":"🧩 加载外部插件","plugin_external_name":"外部插件","plugin_external_get_started":"让我们开始吧！","plugin_airdrop_nft_start_time":"开始时间: {{date}}","plugin_airdrop_nft_end_time":"结束时间: {{date}}","plugin_airdrop_nft_expired":"已过期","plugin_airdrop_nft_claim":"认领","plugin_airdrop_nft_claimed":"已认领","plugin_airdrop_nft_check":"查看","plugin_airdrop_nft_check_address":"请检查您的地址","plugin_airdrop_nft_none_to_claim":"你没有可认领的空投。","plugin_airdrop_nft_number_to_claim":"您有 {{count}} {{name}} 可以认领。","plugin_airdrop_nft_claim_all":"认领代币","plugin_airdrop_nft_claim_successful":"代币已成功认领","plugin_airdrop_nft_claim_failed":"代币认领失败","wallet_balance":"余额","wallet_balance_eth":"余额(ETH)","wallet_new":"新建钱包","wallets":"钱包","wallet_status_button_change":"切换","wallet_status_button_disconnect":"断开连接","wallet_status_button_disconnecting":"正在断开连接","wallet_status_button_copy_address":"复制地址","wallet_transfer_account":"转账账户","wallet_transfer_receiving_account":"收款账户","wallet_transfer_to_address":"发送到地址","wallet_transfer_send":"发送","wallet_transfer_1559_placeholder":"ENS或地址(0x...)","wallet_transfer_title":"转账","wallet_transfer_error_amount_absence":"输入数额","wallet_transfer_error_address_absence":"输入收款人地址","wallet_transfer_error_same_address_with_current_account":"此接收地址与发送地址相同，请重新检查。","wallet_transfer_error_is_contract_address":"此接收地址为合约地址，请重新检查。","wallet_transfer_error_invalid_address":"收款人地址无效","wallet_transfer_error_no_address_has_been_set_name":"接收人地址无效。","wallet_transfer_error_no_support_ens":"网络不支持 ENS。","wallet_transfer_error_insufficient_balance":"{{symbol}} 余额不足","wallet_transfer_error_gas_price_absence":"输入Gas费","wallet_transfer_error_gas_limit_absence":"输入Gas Limit","wallet_transfer_error_max_fee_absence":"请输入Max fee","wallet_transfer_error_max_priority_fee_absence":"请输入Max priority fee","wallet_transfer_error_max_fee_too_low":"Max fee 在当前网络环境下过低","wallet_transfer_error_max_fee_too_high":"Max fee 高于必要值","wallet_transfer_error_max_priority_gas_fee_positive":"Max priority fee必须大于 0 GWEI","wallet_transfer_error_max_priority_gas_fee_too_low":"Max pirority fee 在当前网络环境下过低","wallet_transfer_error_max_priority_gas_fee_too_high":"Max priority fee过高。您或许支付了超过需要的费用。","wallet_transfer_error_max_priority_gas_fee_imbalance":"Max fee 不能低于 Max priority fee","wallet_transfer_gwei":"GWEI","wallet_transfer_between_my_accounts":"我的账户之间转账","wallet_risk_warning_dialog_title":"风险提示","wallet_risk_warning_no_select_wallet":"尚未选择钱包。","wallet_risk_warning_content":"亲爱的用户，<br/><br/>当再使用Mask Network中任何与钱包相关的插件时，请确认以下使用风险：<br/><br/>Mask Network提供非商业性免费服务。 该插件由社区成员和其他优秀的第三方去中心化应用团队提供。 由于去中心化网络的自由性和其他不确定的风险因素， 用户被要求适当地保护他们的敏感信息，例如钱包助记词和私钥。 请谨慎进行任何区块链合同交互。任何第三方去中心化应用(插件)造成的风险都由第三方去中心化应用自身承担。 点击确认按钮意味着您同意承担上述风险。","weekly":"每周","wallet_risk_confirm_confirming":"确认中","wallet_risk_confirm_failed":"确认失败","relative_time_days_ago":"{{days}} 天前","relative_time_hours_ago":"{{hours}} 小时前","relative_time_minutes_ago":"{{minutes}} 分钟前","relative_time_months_ago":"{{months}} 个月前","relative_time_seconds_ago":"{{seconds}} 秒前","relative_time_years_ago":"{{years}} 年前","plugin_chain_not_supported":"尚未在 {{chain}} 上支持。","plugin_wallet_snackbar_wait_for_confirming":"请在您的钱包中确认这笔交易","plugin_wallet_snackbar_hash":"交易已提交","plugin_wallet_snackbar_confirmed":"交易已确认","plugin_wallet_snackbar_success":"交易成功","plugin_wallet_snackbar_failed":"交易失败","plugin_wallet_snackbar_swap_successful":"已成功兑换代币","plugin_wallet_snackbar_swap_token":"兑换代币","plugin_wallet_guiding_step_1":"1. 选择网络","plugin_wallet_guiding_step_2":"2. 选择钱包","plugin_wallet_connect_with":"连接到","plugin_wallet_connect_with_retry":"再试一次","plugin_wallet_connected_with":"连接到","plugin_wallet_connecting_with":"连接到","plugin_wallet_metamask_error_already_request":"您已打开弹出窗口，请确认。","plugin_wallet_connect_tip":"请确保您的 {{providerName}} 钱包是由官方 <providerLink>{{providerShortenLink}}</providerLink> 提供的。","plugin_wallet_collections":"收藏品","plugin_wallet_select_a_token":"选择代币","plugin_wallet_select_a_nft_contract":"选择 NFT 合约","plugin_wallet_select_a_nft_owner":"选择 NFT 合约持有者","plugin_wallet_select_a_nft_operator":"选择 NFT 合约","plugin_wallet_fail_to_load_nft_contract":"加载 NFT 合约失败。请点击重试。","plugin_wallet_nft_approving_all":"正在解锁 {{symbol}}...","plugin_wallet_approve_all_nft":"解锁 {{symbol}}","plugin_wallet_approve_all_nft_successfully":"解锁 {{symbol}} 成功","plugin_wallet_connect_a_wallet":"连接钱包","plugin_wallet_confirm_risk_warning":"确认风险提示","plugin_wallet_no_gas_fee":"不够Gas费用","plugin_wallet_update_gas_fee":"Gas费用更新中…","plugin_wallet_invalid_network":"网络无效","plugin_wallet_select_a_wallet":"选择一个钱包","plugin_wallet_transaction":"交易记录","plugin_wallet_transaction_wait_for_confirmation":"等待确认中…","plugin_wallet_transaction_submitted":"您的交易已提交！","plugin_wallet_transaction_confirmed":"您的交易已确认！","plugin_wallet_transaction_reverted":"您的交易已被回退！","plugin_wallet_transaction_rejected":"您的交易已拒绝。","plugin_wallet_transaction_underpriced":"交易价格过低。","plugin_wallet_transaction_server_error":"由于JSON-RPC服务器内部出错，交易失败。","plugin_wallet_view_on_explorer":"区块链浏览器查看","plugin_ito_placeholder_when_token_unselected":"请先选择一个代币","plugin_wallet_wrong_network_tip":"请连接到一个适当的网络。","plugin_wallet_on_create":"创建钱包","plugin_wallet_on_connect":"连接钱包","plugin_wallet_wrong_network":"网络错误","plugin_wallet_pending_transactions":"{{count}} 个待定","plugin_wallet_import_wallet":"导入钱包","plugin_wallet_select_provider_dialog_title":"连接钱包","plugin_wallet_qr_code_with_wallet_connect":"使用WalletConnect兼容的钱包扫描二维码","plugin_wallet_token_unlock":"精确解锁","plugin_wallet_token_infinite_unlock":"无限解锁","plugin_wallet_connect_dialog_title":"WalletConnect","plugin_wallet_connect_safari_metamask":"连接到 MetaMask","plugin_wallet_connect_safari_rainbow":"连接到 Rainbow","plugin_wallet_connect_safari_trust":"连接到 Trust","plugin_wallet_connect_safari_im_token":"连接到 imToken","plugin_wallet_on_connect_in_firefox":"连接","plugin_wallet_return_mobile_wallet_options":"返回到移动钱包选项","plugin_wallet_view_qr_code":"查看二维码","plugin_wallet_switch_network":"切换到 {{network}} 网络","plugin_wallet_switch_network_under_going":"正在切换到 {{network}} 网络…","plugin_wallet_not_available_on":"在 {{network}} 网络上不可用。","plugin_wallet_connect_wallet":"连接钱包","plugin_wallet_connect_wallet_tip":"请连接钱包","plugin_wallet_name_placeholder":"输入1-12 个字符","plugin_wallet_fail_to_sign":"无法签名密码。","plugin_wallet_cancel_sign":"签名已取消。","plugin_red_packet_display_name":"插件：红包","plugin_red_packet_claimed":"已认领","plugin_red_packet_erc20_tab_title":"代币","plugin_red_packet_erc721_tab_title":"收藏品","plugin_red_packet_erc721_insufficient_balance":"余额不足","plugin_red_packet_details":"红包详情","plugin_red_packet_split_mode":"分享模式","plugin_red_packet_average":"平均","plugin_red_packet_random":"随机","plugin_red_packet_shares":"份额","plugin_red_packet_best_wishes":"祝好运！","plugin_red_packet_create_new":"新建","plugin_red_packet_claim":"认领","plugin_red_packet_claiming":"认领中...","plugin_red_packet_refund":"退款","plugin_red_packet_empty":"空的","plugin_red_packet_data_broken":"由于数据损坏，此红包无法发送。请在 {{duration}} 之后申请退款。","plugin_red_packet_refunding":"退款中","plugin_red_packet_select_existing":"历史红包","plugin_red_packet_share_unclaimed_message_official_account":"朋友们，我刚刚发现 @{{sender}} 在 {{network}} 网络发送了一个红包。 关注 @{{account}} (mask.io) 以获取红包。\\n#mask_io #LuckyDrop\\n{{payload}}","plugin_red_packet_share_unclaimed_message_not_twitter":"朋友们，我刚刚发现 @{{sender}} 在 {{network}} 网络发送了一个红包。\\n{{payload}}","plugin_red_packet_share_message_official_account":"我刚从@{{sender}} 在 {{network}} 网络上认领了一个红包。关注@{{account}} (mask.io) 来获取红包。\\n#mask_io #LuckyDrop\\n{{payload}}","plugin_red_packet_share_message_not_twitter":"我刚从@{{sender}} 在 {{network}} 网络上认领了一个红包。\\n{{payload}}","plugin_red_packet_nft_share_foreshow_message":"@{{sender}} 正在 {{network}} 网络上发送一个 NFT 红包。关注@{{account}} (mask.io) 以获取NFT 红包。\\n#mask_io #LuckyDrop\\n{{payload}}","plugin_red_packet_nft_share_foreshow_message_not_twitter":"@{{sender}} 正在 {{network}} 网络上发送一个 NFT 红包。 \\n{{payload}}","plugin_red_packet_nft_share_claimed_message":"我刚从@{{sender}} 在 {{network}} 网络上认领了一个 NFT 红包。关注@{{account}} (mask.io) 来获取红包。\\n#mask_io #LuckyDrop\\n{{payload}}","plugin_red_packet_nft_share_claimed_message_not_twitter":"我刚从@{{sender}} 在 {{network}} 网络上认领了一个 NFT 红包。\\n{{payload}}","plugin_red_packet_nft_tip":"这是一个 NFT 红包。","plugin_red_packet_nft_no_history":"您还没有创建任何NFT红包。尝试创建红包并与您的朋友分享。","plugin_red_packet_attached_message":"附加信息","plugin_red_packet_from":"来自：@{{name}}","plugin_red_packet_description_claimed":"你获得了 {{amount}} {{symbol}}","plugin_red_packet_description_expired":"此红包已过期。","plugin_red_packet_description_refunded":"此红包已退款。","plugin_red_packet_description_refund":"您可以退回 {{balance}} {{symbol}}。","plugin_red_packet_description_empty":"此红包是空的。","plugin_red_packet_description_broken":"此红包已被损坏。","plugin_red_packet_description_failover":"{{shares}} 份额 / {{total}} {{symbol}} 总金额","plugin_red_packet_claiming_from":"正在认领来自 {{name}} 的红包","plugin_red_packet_amount_per_share":"单个份额","plugin_red_packet_send_symbol":"发送 {{amount}} {{symbol}}","plugin_red_packet_amount_total":"总额","plugin_red_packet_next":"下一步","plugin_red_packet_back":"返回","plugin_red_packet_hint":"你可以在红包发送的24小时后提取红包余额。","plugin_red_packet_token":"代币","plugin_red_packet_message_label":"标题","plugin_red_packet_create":"创建一个红包","plugin_red_packet_create_with_token":"使用 {{symbol}} 创建红包","plugin_red_packet_history_duration":"时间: {{startTime}} ~ {{endTime}} (UTC+8)","plugin_red_packet_history_total_amount":"总额: {{amount}} {{symbol}}","plugin_red_packet_history_total_claimed_amount":"总额： <span><strong>{{claimedAmount}}/{{amount}}</strong></span> {{symbol}}","plugin_red_packet_history_claimed":"已认领： <strong>{{claimedShares}}/{{shares}}</strong> 份额","plugin_red_packet_history_split_mode":"分享模式：{{mode}}","plugin_red_packet_history_send":"发送","plugin_nft_red_packet_create":"创建一个NFT红包","plugin_red_packet_nft_account_name":"钱包账户","plugin_red_packet_nft_attached_message":"附加信息","plugin_red_packet_nft_total_amount":"总数","plugin_red_packet_nft_select_collection":"选择您的收藏品系列","plugin_red_packet_nft_max_shares":"NFT红包合约最多支持 {{amount}} 个NFT投放。","plugin_red_packet_nft_max_shares_tip":"NFT红包合约最多支持 {{amount}} 个NFT投放。","plugin_red_packet_nft_shift_select_tip":"您也可以使用 <text>{{text}}</text> 选择多个NFT。","plugin_red_packet_nft_non_existed_tip":"Token ID <tokenIdList></tokenIdList> 不存在或不属于您。","plugin_red_packet_nft_select_all_option":"全部 ({{total}} NFT)","plugin_red_packet_nft_select_partially_option":"选择部分","plugin_red_packet_nft_approve_all_tip":"注意：在选择批准所有NFT时，合约中的所有NFT都将被授权默认销售，包括随后转移的NFT。","plugin_red_packet_completed":"已完成","plugin_red_packet_expired":"已过期","plugin_red_packet_indivisible":"每个份额的最小金额为 {{amount}} {{symbol}}","plugin_nft_red_packet_data_broken":"由于数据损坏，红包无法发送。","plugin_gitcoin_readme":"通过使用此服务，您将同时向 <fund>Gitcoin grants development fund</fund> 捐赠您5%捐款。","plugin_gitcoin_readme_fund_link":"https://gitcoin.co/gitcoin-sustainability-fund","plugin_gitcoin_select_a_token":"选择代币","plugin_gitcoin_enter_an_amount":"输入数额","plugin_gitcoin_grant_not_available":"授权不可用","plugin_gitcoin_insufficient_balance":"{{symbol}} 余额不足","plugin_gitcoin_donate":"捐赠","plugin_gitcoin_last_updated":"最新更新：","plugin_gitcoin_by":"提供者为：","plugin_gitcoin_view_on":"在 Gitcoin 上查看","plugin_trader_fail_to_load":"无法加载趋势信息自  ","plugin_trader_lbp_pool_in_balancer":"Balancer 的 LBP 池","plugin_trader_tutorial":"教程","plugin_trader_what_is_lbp":"什么是LBP？","plugin_trader_lbp_intro":"蓝色实线表示在{{symbol}}\'s LBP上的{{symbol}} 的历史价格。如果没有人购买，价格可能会继续下降。请理性进行投资决策。","plugin_trader_no_pools_found":"未找到池。","plugin_trader_safety_agree":"我已知悉","plugin_trader_view_on_etherscan":"在 Etherscan 上查看","plugin_trader_safety_alert_title":"代币安全警告","plugin_trader_safety_alert":"任何人都可以在Etherum上创建和命名任何ERC20代币， 包括创建假冒的现有代币和假冒是已声称没有发行代币的项目方发行的代币。 与以太坊相似，这个网站自动跟踪所有ERC20代币，不受密码完整性的影响。 请在与任何ERC20 令牌交互之前进行您自己的研究。","plugin_trader_total_supply":"总供应量","plugin_trader_circulating_supply":"流通总量","plugin_trader_volume_24":"交易量 (24h)","plugin_trader_market_cap":"市值","plugin_trader_data_source":"数据源","plugin_trader_price_updated":"价格已更新","plugin_savings":"储蓄","plugin_no_protocol_available":"储蓄功能尚未在此网络支持。","plugin_savings_wallet":"钱包","plugin_savings_operation":"操作","plugin_savings_amount":"数额","plugin_savings_deposit":"存入","plugin_savings_withdraw":"取出","plugin_savings_process_deposit":"存入操作处理中","plugin_savings_process_withdraw":"取出操作处理中","plugin_trader_swap":"兑换","plugin_trader_wrap":"包装","plugin_trader_unwrap":"去包装","plugin_trader_buy":"买入","plugin_trader_no_data":"暂无数据","plugin_trader_tab_market":"概况","plugin_trader_tab_price":"价格","plugin_trader_tab_exchange":"交易","plugin_trader_tab_swap":"兑换 🔥","plugin_trader_table_exchange":"交易所","plugin_trader_table_pair":"交易对","plugin_trader_table_price":"价格","plugin_trader_table_volume":"交易量 (24h)","plugin_trader_table_updated":"更新时间","plugin_trader_error_amount_absence":"输入数额","plugin_trader_error_insufficient_balance":"{{symbol}} 余额不足","plugin_trader_error_insufficient_lp":"该交易的流动性不足","plugin_trade_error_input_amount_less_minimum_amount":"提交兑换的数额低于最低数额","plugin_trader_slippage_tolerance":"滑点容许值","plugin_trader_swap_from":"从","plugin_trader_swap_to":"至(预计)","plugin_trader_gas_fee":"Gas 费用","plugin_trader_unlock_symbol":"解锁 {{symbol}}","plugin_trader_unlock_tips":"您必须授予 {{provider}} 智能合约使用您的 {{symbol}} 的权限。每个代币只需要授权一次。","plugin_trader_swap_amount_symbol":"兑换 {{amount}} {{symbol}} ","plugin_trader_confirm_from":"从","plugin_trader_confirm_to":"至","plugin_trader_confirm_max_price_slippage":"最大价格滑点","plugin_trader_confirm_minimum_received":"收到的最低数额","plugin_trader_confirm_tips":"最大价格滑点设置过低可能会导致因价格波动而交易失败","plugin_trader_price_impact_warning_tips":"最大价格滑点设置过高可能会导致最低返回数额低于期望数额。","plugin_trader_confirm_swap":"确认兑换","plugin_trader_accept":"同意","plugin_trader_price_impact":"价格影响","plugin_trader_price_image_value":"价格影响({{percent}})","plugin_trader_slippage_warning":"在当前滑点设置下，您可能会少接收10%的期待值。","plugin_trader_confirm_price_impact":"确认价格影响 {{percent}}","plugin_trader_max_slippage":"最大滑点","plugin_trader_gas_setting_instant":"即时","plugin_trader_gas_setting_high":"高速","plugin_trader_gas_setting_medium":"中等","plugin_trader_gas_setting_standard":"标准","plugin_trader_gas_setting_fast":"快速","plugin_trader_gas_setting_custom":"自定义","plugin_trader_tx_cost_usd":"(~{{usd}} 美元)","plugin_trader_gas_option":"{{option}} ({{value}}) Gwei","plugin_trader_no_enough_liquidity":"流动性不足","plugin_trader_no_trade":"请选择一个交易","plugin_poll_display_name":"插件：投票","plugin_poll_question_hint":"询问...","plugin_poll_options_hint":"选项","plugin_poll_length":"投票时长","plugin_poll_length_days":"天","plugin_poll_length_hours":"小时","plugin_poll_length_minutes":"分钟","plugin_poll_length_unknown":"未知","plugin_poll_create_new":"创建新的","plugin_poll_send_poll":"发送投票","plugin_poll_status_voting":"正在投票中","plugin_poll_status_voted":"已投票。","plugin_poll_deadline":"距离投票结束还有{{time}}","plugin_ito_empty_token":"无需解锁此ITO上的任何代币。","plugin_ito_locked":"ITO 已锁定","plugin_ito_share":"分享","plugin_ito_enter":"参加","plugin_ito_dialog_swap_title":"兑换 {{token}}","plugin_ito_dialog_swap_reminder_title":"兑换提醒","plugin_ito_dialog_swap_unlock_title":"提前解锁代币","plugin_ito_dialog_swap_share_title":"分享","plugin_ito_dialog_swap_exchange":"以兑换","plugin_ito_dialog_swap_panel_title":"兑换","plugin_ito_dialog_swap_exceed_wallet_limit":"超过单个钱包限制","plugin_ito_swap_ration_label":"兑换率","plugin_ito_swap_unlucky_fail":"抱歉运气不够，请到区块链浏览器查找原因，再重试一遍。","plugin_ito_swap_only_once_remind":"每个钱包只能参与一次.","plugin_ito_swap_title":"{{amount}} {{token}} / {{swap}} ","plugin_ito_swap_end_date":"在 {{date}} 后结束。","plugin_ito_dialog_claim_reminder_agree":"我理解","plugin_ito_dialog_claim_reminder_text1":"任何人都可以在 {{networkType}} 上创建自命名名称的代币。 包括创建虚假版本的已有代币，以及没有任何实际项目的代币。","plugin_ito_dialog_claim_reminder_text2":"此接口可以通过代币地址加载任意代币。与任意代币进行交互前，请格外小心并对此进行研究确认。","plugin_ito_dialog_claim_reminder_text3":"如果您从这此处购买一些代币，您可能无法再将其售出。","plugin_ito_dialog_claim_reminder_text4":"该等权利并未在司法管辖区域内全部或部分，直接或间接提供出售，向其提供或出售该等权利将是非法的。","plugin_ito_expired":"已过期","plugin_ito_create_new":"新建","plugin_ito_claim_all_title":"认领代币","plugin_ito_claim_all_status_unclaimed":"未认领","plugin_ito_claim_all_status_locked":"被锁定","plugin_ito_claim_all_unlock_time":"解锁时间: {{time}}","plugin_ito_claim_all_dialog_title":"认领您的代币","plugin_ito_swapping":"如果幸运之神眷顾，您将获得 {{amount}} {{symbol}} 。可如果不幸 ITO 已经没有库存了，您将收到退款。","plugin_ito_advanced":"高级选项","plugin_ito_advanced_ip_region":"IP 地区限制","plugin_ito_advanced_delay_unlocking":"延迟解锁代币","plugin_ito_advanced_contract":"插件合约","plugin_ito_select_existing":"历史","plugin_ito_display_name":"插件：ITO","plugin_ito_sell_token":"代币","plugin_ito_sell_price":"价格","plugin_ito_sell_total_amount":"输入","plugin_ito_allocation_per_wallet":"兑换限制 {{limit}} {{token}}","plugin_ito_wait_unlock_time":"在 {{unlockTime}} 后认领。","plugin_ito_claim":"认领","plugin_ito_claiming":"认领中...","plugin_ito_claim_all":"认领全部","plugin_ito_qualification_start_time":"资格认证开始时间：","plugin_ito_error_qualification_start_time":"无效：资格认证开始时间应该早于ITO结束时间","plugin_ito_error_invalid_qualification":"无效的资格认证地址","plugin_ito_unlock_time_cert":"ITO Mask 解锁时间为 {{date}}。","plugin_ito_unlock_time":"解锁时间 {{zone}}","plugin_ito_total_claimable_count":"总计: ","plugin_ito_qualification_label":"插件合约","plugin_ito_message_label":"标题","plugin_ito_region_label":"IP 地区选择","plugin_ito_region_confirm_label":"IP 地区","plugin_ito_region_list":"{{ select }} / {{ all }} 地区","plugin_ito_region_all":"全部地区","plugin_ito_region_search":"输入要搜索的地区名称","plugin_ito_region_ban":"这个池被禁止对您所在区域开放","plugin_ito_next":"下一步","plugin_ito_back":"返回","plugin_ito_transaction_dialog_summary_with_no_token":"创建一个ITO。","plugin_ito_transaction_dialog_summary":"使用 {{amount}} {{symbol}} 创建一个 ITO","plugin_ito_swap":"兑换","plugin_ito_send_tip":"您可以在历史标签页中找到您过去的 ITO。","plugin_ito_send_text":"发送 {{total}} {{symbol}}","plugin_ito_error_enter_amount":"输入数额","plugin_ito_error_select_token":"选择代币","plugin_ito_error_enter_amount_and_token":"输入数额并选择一个代币","plugin_ito_error_allocation_absence":"请输入兑换限制","plugin_ito_error_allocation_invalid":"无效的数额","plugin_ito_error_exchange_time":"无效：开始时间不能晚于结束时间","plugin_ito_error_unlock_time":"无效：结束时间不能晚于解锁时间","plugin_ito_error_balance":"{{symbol}} 余额不足","plugin_ito_list_start_date":"开始时间 {{date}}","plugin_ito_list_end_date":"结束时间 {{date}}","plugin_ito_list_sold_total":"已兑换：","plugin_ito_list_total":"总共：","plugin_ito_list_table_type":"类型","plugin_ito_list_table_price":"兑换率","plugin_ito_no_claimable_token":"您的钱包地址没有任何可以认领的代币。","plugin_ito_list_table_sold":"已兑换","plugin_ito_list_table_got":"余额","plugin_ito_list_button_send":"发送","plugin_ito_withdraw":"提取","plugin_ito_qualification_loading":"资格认证中…","plugin_ito_qualification_failed":"钱包地址不在列表内。","plugin_ito_withdrawn":"已提取","plugin_ito_your_swapped_amount":"你兑换了 {{amount}} {{symbol}}","plugin_ito_your_claimed_amount":"你认领了 {{amount}} {{symbol}}","plugin_ito_your_refund_amount":"退回 {{amount}} {{symbol}}.","plugin_ito_unlock_in_advance":"提前解锁","plugin_ito_swapped_status":"{{remain}} / {{total}} {{token}} 已兑换","plugin_ito_congratulations":"祝贺您！","plugin_ito_out_of_stock_hit":"祝您下次好运","plugin_ito_claim_success_share":"我刚刚用 @{{account}} 来交换${{symbol}}，参加了 @{{user}}的 #ITO。 安装mask.io并开始您的初次推特优惠！ \\n {{link}}","plugin_ito_claim_success_share_no_official_account":"我刚刚交换了${{symbol}} 并参加了 @{{user}}的 #ITO。 安装mask.io并开始您的初次推特优惠！ \\n {{link}}","plugin_ito_claim_foreshow_share":"{{symbol}}({{name}}) 正在发布一个新的 #ITO。快来加入吧！关注 @{{account}} (mask.io) 来查找更多活动！ \\n {{link}}","plugin_ito_claim_foreshow_share_no_official_account":"{{symbol}}({{name}}) 正在发布一个新的 #ITO。快来加入吧！ \\n {{link}}","plugin_ito_password":"密码：{{password}}","plugin_ito_status_no_start":"尚未开始","plugin_ito_status_ongoing":"进行中","plugin_ito_status_out_of_stock":"售罄","plugin_ito_loading":"ITO 加载中...","plugin_ito_amount_unlocked":"已解锁 {{amount}} {{symbol}}","plugin_ito_amount_unlocked_infinity":"解锁无限的 {{symbol}}","plugin_ito_unlocking_symbol":"正在解锁 {{symbol}}","plugin_ito_continue":"继续","plugin_ito_view_on_explorer":"在区块链浏览器查看","plugin_ito_unlock_tip":"允许合约 <contractLink>{{address}}</contractLink> 在新的 ITO 回合开始时使用您的 {{symbol}} 代币。","plugin_collectible_you":"您","plugin_collectible_done":"完成","plugin_collectible_retry":"重试","plugin_collectible_get_more_token":"获取更多 {{token}}","plugin_collectible_sell":"出售","plugin_collectible_checkout":"付款","plugin_collectible_place_bid":"出价","plugin_collectible_buy_now":"立即购买","plugin_collectible_make_offer":"发出报价","plugin_collectible_post_listing":"上架","plugin_collectible_description":"当前价格是 <strong>{{price}} {{symbol}}</strong>","plugin_collectible_article":"文章","plugin_collectible_overview":"简介","plugin_collectible_details":"详情","plugin_collectible_offers":"报价","plugin_collectible_listing":"上架列表","plugin_collectible_history":"历史","plugin_collectible_event":"事项","plugin_collectible_unit_price":"单价","plugin_collectible_price":"价格","plugin_collectible_from":"从","plugin_collectible_to":"至","plugin_collectible_date":"日期","plugin_collectible_quantity":"数量","plugin_collectible_expiration":"有效期至","plugin_collectible_no_offers":"没有任何报价","plugin_collectible_no_listings":"没有任何上架历史","plugin_collectible_base":"底价","plugin_collectible_properties":"属性","plugin_collectible_about":"关于","plugin_collectible_chain_info":"区块链信息","plugin_collectible_contract_address":"合约地址","plugin_collectible_token_id":"Token ID","plugin_collectible_block_chain":"区块链","plugin_collectible_create_by":"创建者","plugin_collectible_owned_by":"持有者","plugin_collectible_view_on":"查看于","plugin_collectible_no_history":"无历史记录","plugin_collectible_ensure_unreviewed_item":"请确保未经审核的收藏品","plugin_collectible_check_tos_document":"请查阅 ToS 文档","plugin_collectible_not_been_reviewed_by_opensea":"此收藏品尚未经 OpenSea 审查。","plugin_collectible_reviewed_tips":"你需要格外谨慎。 任何人都可以在区块链上创建一个带有任何名称的收藏品。 包括现有收藏品的假版本。 请在与这个收藏品交互时格外小心并进行研究，以确保它是您想要的收藏品。","plugin_collectible_total":"总共","plugin_collectible_subtotal":"小计","plugin_collectible_item":"收藏品","plugin_collectible_approved_tips":"通过勾选此框，我承认此收藏品未经过OpenSeare审核\\n                                                或批准。","plugin_collectible_agree_terms":"通过勾选此框，我同意OpenSea的 <terms>服务条款</terms>。","plugin_collectible_convert_eth":"兑换 ETH","plugin_collectible_sale_end":"出售结束于 {{time}}","plugin_collectible_set_initial_price":"设置初始价格。","plugin_collectible_ending_price_tip":"在您转让或取消之前将会一直出售。","plugin_collectible_starting_price":"初始价格","plugin_collectible_ending_price":"结束价格","plugin_collectible_ending_price_less_than_staring":"必须小于或等于起始价格。价格将线性上升到此金额，直到失效日期为止。","plugin_collectible_expiration_date":"失效日期","plugin_collectible_schedule_date":"预定日期","plugin_collectible_auto_cancel_tip":"此时您上架的收藏品将自动结束。无需取消！","plugin_collectible_schedule_future_date":"预定一个未来日期。","plugin_collectible_buyer_address":"买家地址","plugin_collectible_buyer_address_placeholder":"请输入买家地址。","plugin_collectible_buyer_address_helper_text":"只允许买家购买。","plugin_collectible_include_ending_price":"包含结束价格","plugin_collectible_include_ending_price_helper":"添加一个结束价格将允许该上架收藏品过期，或允许降价，在找到买家为止。","plugin_collectible_schedule_for_a_future_time":"预定一个未来的日期","plugin_collectible_schedule_for_a_future_time_helper":"您可以将此上架收藏品预约为只能在未来的某个日期购买。","plugin_collectible_privacy":"隐私政策","plugin_collectible_privacy_helper":"您可以公开出售您上架的收藏品，或者指定一个买家地址允许购买您上架的收藏品。","plugin_collectible_enter_a_price":"请输入价格","plugin_collectible_insufficient_balance":"余额不足","plugin_collectible_invalid_schedule_date":"无效的预定日期","plugin_collectible_invalid_ending_price":"无效的结束价格","plugin_collectible_invalid_expiration_date":"无效的失效日期","plugin_collectible_invalid_buyer_address":"无效的买家地址","plugin_collectible_set_price":"设置价格","plugin_collectible_highest_bid":"最高竞价","plugin_collectible_minimum_bid":"最低出价","plugin_collectible_set_starting_bid_price":"设置您的起始竞价价格。","plugin_collectible_reserve_price":"底标价格","plugin_collectible_reserve_price_helper":"通过设置底标价格来建立一个隐形的限制。底标价格必须大于或等于起始价格。","plugin_collectible_auction_auto_end":"您的拍卖将在这个时候自动结束，最高出价者将将赢得拍卖。无需取消！","plugin_collectible_enter_minimum_bid":"输入最低出价","plugin_collectible_enter_reserve_price":"输入底标价格","plugin_collectible_invalid_reserve_price":"无效底标价格","plugin_collectible_place_a_bid":"出价","plugin_collectible_make_an_offer":"发出报价","plugin_collectible_approved_by_open_sea":"通过勾选此框，我确认此收藏品尚未被 OpenSea 审核或批准。","plugin_collectible_legal_text":"通过勾选此框，我同意OpenSea的 <terms>服务条款</terms>。","plugin_cryptoartai_description_title":"描述","plugin_cryptoartai_edition":"版本：","plugin_cryptoartai_activity_type":"类型","plugin_cryptoartai_status":"状态","plugin_cryptoartai_time":"时间","plugin_cryptoartai_price":"价格","plugin_cryptoartai_latest_bid":"最新的标价","plugin_cryptoartai_buy":"购买","plugin_cryptoartai_buy_now":"立即购买","plugin_cryptoartai_current_balance":"当前余额","plugin_cryptoartai_current_highest_offer":"当前最高报价为 ","plugin_cryptoartai_bid_least":"您必须至少出价 ","plugin_snapshot_info_title":"相关信息","plugin_snapshot_info_strategy":"策略","plugin_snapshot_info_author":"作者","plugin_snapshot_info_ipfs":"IPFS","plugin_snapshot_info_start":"开始日期","plugin_snapshot_info_end":"结束日期","plugin_snapshot_info_snapshot":"Snapshot","plugin_snapshot_result_title":"结果","plugin_snapshot_votes_title":"投票","plugin_snapshot_no_power":"没有投票权","plugin_snapshot_vote_success":"投票成功！","plugin_snapshot_vote":"投票","plugin_snapshot_vote_choice":"选项","plugin_snapshot_vote_power":"您的投票权","plugin_snapshot_vote_title":"投出您的票","plugin_snapshot_vote_confirm_dialog_title":"确认投票","plugin_snapshot_vote_confirm_dialog_choice":"您确定要投票给 \\"{{ choiceText }}\\" 吗？","plugin_snapshot_vote_confirm_dialog_warning":"此操作不可撤销。","plugin_snapshot_current_result_title":"当前结果","plugin_snapshot_download_report":"下载报告","plugin_find_truman_status_puzzle":"故事解谜","plugin_find_truman_status_poll":"情节发展投票","plugin_find_truman_status_result":"阶段性结果","plugin_find_truman_status_puzzle_result":"揭晓答案","plugin_find_truman_status_poll_result":"情节发展确认","plugin_find_truman_puzzle_to_be_revealed":"谜题等待揭晓。","plugin_find_truman_puzzles_to_be_revealed":"谜题等待揭晓。","plugin_find_truman_poll_to_be_revealed":"投票仍在进行。","plugin_find_truman_polls_to_be_revealed":"投票仍在进行","plugin_find_truman_puzzle_underway":"这个谜题尚未被揭晓。","plugin_find_truman_puzzle_rate":"准确度： ","plugin_find_truman_voting_underway":"此投票仍在进行。","plugin_find_truman_voting_rate":"点击率： ","plugin_find_truman_submit_failed":"提交失败。","plugin_find_truman_vote":"投票","plugin_find_truman_votes":"投票","plugin_find_truman_selected":"已选择","plugin_find_truman_unselect":"选择","plugin_find_truman_answer":"答案","plugin_find_truman_result":"结果","plugin_find_truman_buy":"购买","plugin_find_truman_decrypted_by":"由FindTruman解密：","plugin_find_truman_insufficient_nft":"本次投票需要以下指定的NFT。","plugin_find_truman_buy_nft_tip":"至少需要此 NFT的{{count}} 个副本。","plugin_find_truman_connect_wallet_tip":"请连接一个钱包。","plugin_find_truman_no_participation_tip":"您当前还没有参与任何投票。","plugin_dhedge_managed_by":"由 <manager>{{managerName}}</manager> 管理","plugin_dhedge_manager_share":"持有 <share>{{managerShare}}%</share>份额的池子","plugin_dhedge_manager_share_more_than_50":"持有超过50% 的池子","plugin_dhedge_value_managed":"管理的金额","plugin_dhedge_lifetime_return":"终生回报","plugin_dhedge_risk_factor":"风险因子","plugin_dhedge_tab_stats":"统计信息","plugin_dhedge_tab_chart":"图表","plugin_dhedge_strategy":"策略","plugin_dhedge_see_less":"显示更少","plugin_dhedge_see_more":"显示更多","plugin_dhedge_no_data":"暂无数据","plugin_dhedge_fetch_error":"无法获取数据，请重试！","plugin_dhedge_loading_chart":"加载中","plugin_dhedge_invest":"投资","plugin_dhedge_buy_token":"获得 {{symbol}}","plugin_dhedge_enter_an_amount":"输入数额","plugin_dhedge_insufficient_balance":"{{symbol}} 余额不足","plugin_dhedge_loading":"加载中...","plugin_dhedge_pool_not_found":"无效的池子地址。","plugin_dhedge_smt_wrong":"发生了一些错误！","plugin_pooltogether_tab_pools":"池子","plugin_pooltogether_tab_account":"账号","plugin_pooltogether_no_pool":"此网络上没有池。","plugin_pooltogether_pool_ended":"已获奖励","plugin_pooltogether_deposit":"存入 {{token}}","plugin_pooltogether_apr":"在 {{token}} 中获得 {{apr}} % 的 APR","plugin_pooltogether_view_pool":"查看池","plugin_pooltogether_prize":"{{period}} 奖励","plugin_pooltogether_share":"我刚刚把 {{amount}} {{cashTag}}{{symbol}} 存入 {{pool}}，我能在本周赢得奖金吗？\\n跟随@PoolTogether_ 和 @{{account}} (mask.io)一起参与吧。\\n#pooltogether #mask_io","plugin_pooltogether_share_no_official_account":"我刚刚把 {{amount}} {{cashTag}}{{symbol}} 存入 {{pool}}，我能在本周赢得奖金吗？","plugin_pooltogether_buy":"获得 {{symbol}}","plugin_pooltogether_enter_an_amount":"输入数额","plugin_pooltogether_insufficient_balance":"{{symbol}} 余额不足","plugin_pooltogether_deposit_title":"存入 {{token}} 以获胜。","plugin_pooltogether_odds_title":"新的奖励几率：","plugin_pooltogether_odds_value":"{{value}} {{period}} 中的 1 个!","plugin_pooltogether_short_odds_value":"{{value}} 中的 1 个!","plugin_pooltogether_my_deposits":"存款总数","plugin_pooltogether_no_account_pool":"您在此网络中没有任何池","plugin_pooltogether_missing_pool":"缺少一些存款？请检查完整的列表：\\n","plugin_pooltogether_winning_odds":"奖励几率：","plugin_pooltogether_manage":"管理","plugin_pooltogether_token_not_found":"未找到代币！","plugin_good_ghosting_loading_other_player_stats":"正在加载其他玩家的统计数据","plugin_good_ghosting_loading_game_stats":"正在加载游戏统计数据","plugin_good_ghosting_game_duration":"游戏时长","plugin_good_ghosting_current_round":"当前轮数","plugin_good_ghosting_recurring_deposit":"每轮存款量","plugin_good_ghosting_round_length":"每轮时长","plugin_good_ghosting_pool_apy":"池的年化收益率","plugin_good_ghosting_pool_earnings":"池中收益","plugin_good_ghosting_extra_rewards":"额外奖励","plugin_good_ghosting_game_launched":"游戏已开始","plugin_good_ghosting_join_round":"加入此轮","plugin_good_ghosting_join_deadline":"加入截止时间","plugin_good_ghosting_deposit":"存入 {{index}}","plugin_good_ghosting_deposit_deadline":"存款截止时间 {{index}}","plugin_good_ghosting_game_over":"游戏结束","plugin_good_ghosting_join_game":"加入游戏","plugin_good_ghosting_early_withdraw_info":"如果您想要退出正在进行的游戏，您可能会被收取一笔小额费用{{amount}} {{token}}， 以补偿储蓄池中剩余的玩家。","plugin_good_ghosting_rules":"规则","plugin_good_ghosting_something_went_wrong":"出现错误。请重试。","plugin_good_ghosting_view_on_explorer":"在浏览器查看","plugin_good_ghosting_checking_balance":"查询账户余额...","plugin_good_ghosting_insufficient_balance":"您的钱包中需要至少有{{amount}} {{token}} 才能执行此操作。","plugin_good_ghosting_balance_error":"查询余额失败。点击重试。","plugin_unlockprotocol_no_access":"您没有访问此内容的权限","plugin_unlockprotocol_no_lock_found":"未找到任何锁。请在 <dashboard>创建主面板</dashboard> 创建自己的锁。","plugin_unlockprotocol_server_error":"服务器出现错误，请稍后重试。","popups_following_permissions":"插件 ({{pluginName}}) (托管于{{pluginURL}}) 将请求以下权限：","popups_permissions":"许可权限","popups_mask_requests_permission":"Mask Network需要以下权限","popups_permission_request":"请求授权","popups_permission_request_content":"为继续后续操作，Mask Network需要获取权限以访问以下URL：","popups_welcome":"欢迎","popups_wallet_token":"代币","popups_wallet_dialog_legacy_wallet_tip":"已检测到旧钱包，请点击确认以恢复所有钱包。","popups_wallet_set_payment_password":"设置支付密码","popups_wallet_payment_password":"支付密码","popups_wallet_re_payment_password":"再次输入支付密码","popups_wallet_set_up_payment_password":"设置支付密码","popups_wallet_payment_password_tip":"支付密码必须是数字、大小写字母和特殊字符中的2个类别的组合，长度为 8-20 个字符。","popups_wallet_go_back":"返回","popups_wallet_start_up_tip":"请连接到您的钱包，可选择创建一个新钱包或使用助记词恢复一个旧钱包。","popups_wallet_name_placeholder":"输入1-12 个字符","popups_wallet_name_mnemonic":"助记词","popups_wallet_name_json_file":"Json文件","popups_wallet_name_private_key":"私钥","popups_wallet_name_mnemonic_placeholder":"请输入以空格分隔的助记词","popups_wallet_name_origin_password":"原密码","popups_wallet_tab_assets":"资产","popups_wallet_tab_activity":"交易动态","popups_wallet_derivation_path":"派生路径 ({{ path }})","popups_wallet_next":"下一步","popups_wallet_backup_wallet":"备份钱包","popups_wallet_backup_json_file":"JSON 文件","popups_wallet_backup_private_key":"私钥","popups_wallet_backup_json_file_confirm_password_tip":"此文件已使用您当前的支付密码加密保存。 导入钱包时请使用当前支付密码解密此文件。","popups_wallet_backup_private_key_tip":"请不要向任何人暴露您的私钥。私钥不需要解密即可在任何支持EVM兼容的链上钱包中使用。","popups_wallet_backup_input_password":"输入您的密码","popups_wallet_backup_json_file_drag_tip":"将您的文件拖动到这里…","popups_wallet_backup_json_file_click_tip":"点击选择或拖放文件到这里","popups_wallet_enter_your_wallet_name":"输入钱包名称","popups_wallet_delete_tip":"您确定要删除这个钱包吗？如果没有助记词或私钥，您的钱包将无法恢复。","popups_wallet_confirm_payment_password":"使用支付密码确认","popups_wallet_token_buy":"购买","popups_wallet_token_send":"发送","popups_wallet_token_swap":"兑换","popups_wallet_view_on_explorer":"在区块链浏览器查看","popups_wallet_gas_fee_settings":"设置Gas费用","popups_wallet_gas_fee_settings_description":"Gas是向以太坊矿工支付的费用，矿工们偏向以较高的Gas费用进行交易。 Gas费用过低的交易可能会失败，支付的Gas费用将不会退回。","popups_wallet_gas_fee_settings_low":"低","popups_wallet_gas_fee_settings_medium":"中","popups_wallet_gas_fee_settings_high":"高","popups_wallet_gas_fee_settings_usd":" ≈ {{usd}} 美元","popups_wallet_gas_fee_settings_gas_limit":"Gas Limit","popups_wallet_gas_fee_settings_max_priority_fee":"Max priority fee","popups_wallet_gas_fee_settings_max_fee":"Max fee","popups_wallet_gas_fee_settings_min_gas_limit_tips":"Gas limit 必须至少 {{limit}}","popups_wallet_unsupported_network":"不支持的网络类型","popups_wallet_signature_request":"签名请求","popups_wallet_signature_request_message":"信息","popups_wallet_contract_interaction":"合约交互","popups_wallet_token_unlock_permission":"代币解锁权限","popups_wallet_token_infinite_unlock":"无限解锁","popups_wallet_contract_interaction_transfer":"转账","popups_wallet_contract_interaction_gas_fee":"Gas fee","popups_wallet_contract_interaction_edit":"编辑","popups_wallet_contract_interaction_total":"总共","popups_wallet_password_dont_match":"密码不一致。","popups_wallet_password_satisfied_requirement":"密码格式不符合要求。","popups_wallet_password_length_error":"密码长度不符合要求。","popups_wallet_unlock_wallet":"解锁钱包","popups_wallet_unlock_error_password":"密码不正确","popups_wallet_activity_to_address":"至: {{address}}","popups_wallet_transfer_error_tip":"网络连接失败或合约交互错误导致发送交易失败。","popups_wallet_transactions_pending":"待定中...","popups_wallet_re_send":"重新发送","popups_wallet_choose_token":"选择代币","popups_wallet_gas_price":"Gas费","popups_wallet_done":"完成","popups_wallet_recovered":"恢复的钱包","popups_wallet_no_transactions":"你没有任何交易。","popups_missing_parameter_caption":"请关闭此页面。","popups_persona_connect_to":"连接到 {{type}}","popups_persona_disconnect":"断开连接","popups_persona_logout":"登出","popups_persona_disconnect_tip":"身份登出后，您所关联的社交网络账户将不能解密过去的加密消息。 如果您需要重新使用您的身份，您可以使用您的身份助记词，身份私钥，本地或云端备份进行恢复。","popups_persona_persona_name_exists":"此身份名称已存在","popups_persona_sign_request_title":"签名请求","popups_persona_sign_request_message":"信息","popups_password_do_not_match":"备份密码不正确","popups_backup_password":"备份密码","popups_rename_error_tip":"最大长度为 {{length}} 个字符。","nft_wallet_label":"钱包","plugin_profile_no_wallets":"在此连接您的钱包。<br/>此部分将显示给您的加密朋友。<br/>显示内容包括数字艺术、捐赠、徽章<br/>和其他链上的公开信息。","plugin_vcent_last_offer_at":"最新的OFFER为","nft_input_address_label":"请输入合约地址","nft_input_tokenid_label":"请输入Token ID","nft_owner_hint":"此 NFT 不存在或不属于您。","nft_add_dialog_title":"添加收藏品","nft_add_button_label":"添加","nft_list_title":"NFT 头像","nft_wallet_change":"更改","nft_button_add_collectible":"添加收藏品","nft_avatar":"NFT 头像","web3_tab_hint":"未发现任何地址。","nft_button_set_avatar":"设置 NFT 头像"}');
;// CONCATENATED MODULE: ./shared-ui/locales/zh-TW.json
const zh_TW_namespaceObject = JSON.parse('{"database_backup":"備份資料庫","database_clear":"清除資料庫","edit":"編輯","clear":"清除","more":"更多","approve":"同意","address":"地址","gas_price":"礦工費","redirect_to":"跳轉至","sign":"簽署","reload":"重新讀取","load":"加載","no_data":"查無數據","tags":"標記","contract":"合約","initializing":"初始化中...","redirect_alert":"如果你的瀏覽器沒有跳轉， <terms>請點擊此處</terms>.","add_token":"新增代幣","add_nft_contract_search_hint":"檢索NFT合約名稱或地址","applications":"應用","additional_post_box__encrypted_post_pre":"使用 #mask_io 解密這篇貼文！ {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet_twitter_official_account":"用 #mask_io @{{account}} 開啟紅包 {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet":"用 #mask_io 開啟紅包 {{encrypted}}","additional_post_box__steganography_post_pre":"這張圖片是使用 #mask_io 加密。 📪🔑 安裝 mask.io 解密。 {{random}}","auto_paste_failed_dialog_title":"手動貼上","auto_paste_failed_dialog_content":"請複製下方文章或圖片 (如果有的話) 然後發佈它","auto_paste_failed_dialog_image_caption":"在新分頁中開啟","auto_paste_failed_snackbar":"您需要手動貼上加密的內容嗎?","auto_paste_failed_snackbar_action":"告訴我怎麼做","auto_paste_failed_snackbar_action_close":"關閉","automation_request_click_post_button":"請按「發文」按鈕以開啟發文對話框","try_again":"再試一次","ok":"確認","cancel":"取消","comment_box__placeholder":"添加加密留言…","confirm":"確認","copy_text":"複製文字","loading_failed":"讀取失敗","copy_image":"複製圖片","copy_success_of_wallet_addr":"複製錢包地址成功！","copy_success_of_text":"複製文字成功！","copy_success_of_image":"圖片複製成功！","connecting":"正在連接…","create":"建立","copied":"已複製","dashboard_tab_collectibles":"收藏","dashboard_no_collectible_found":"找不到收藏品","decrypted_postbox_add_recipients":"新增收件人","decrypted_postbox_decrypting":"Mask 正在解密…","decrypted_postbox_decoding":"Mask 正在解碼…","decrypted_postbox_decrypting_finding_person_key":"Mask 正在尋找這個作者的公鑰…","decrypted_postbox_decrypting_finding_post_key":"Mask 正在取得貼文金鑰以解密此貼文…","decrypted_postbox_author_mismatch":"最初由 {{name}} 發佈","decrypted_postbox_title":"已由 Mask 解密：","dismiss":"取消","delete":"刪除","delete_wallet":"刪除錢包","hide_token":"隱藏代幣","hide_token_hint":"您可以在將來新增 <strong>{{token}}</strong> 藉由到錢包面板中的「新增代幣」。","done":"完成！","download":"下載","failed":"失敗","buy_now":"立即購買","setup_guide_find_username_text":"Mask 需要使用者名稱將您的個人資料連接到您的角色。<br/>請確保它是正確的。","setup_guide_connect_auto":"連線","setup_guide_connect_failed":"連線失敗… 請再試一次。","user_guide_tip_connected":"已成功連接此帳號","import":"導入","no_search_result":"沒有結果","unlock":"解鎖","payload_bad":"這篇貼文似乎被破壞了。Mask 無法解密它。","payload_incomplete":"這篇貼文不完整。你需要查看全文才能解密。","payload_not_found":"找不到貼文。","payload_throw_in_alpha41":"不推薦使用 Alpha41。告訴你的朋友升級Mask！","personas":"角色","browser_action_enter_dashboard":"進入儀錶板","post_dialog__button":"完成","post_dialog__image_payload":"圖片","post_dialog__more_options_title":"更多選項","post_dialog__placeholder":"在這裡輸入文字…","post_dialog__select_recipients_share_to_everyone":"所有人","post_dialog__select_recipients_title":"選擇收件人","post_dialog__title":"Mask: 發表貼文","post_modal_hint__button":"發表加密貼文","hide":"隱藏","reset":"重設","editor":"編輯器","retry":"重試","rename":"重新命名","search":"搜尋","go_wrong":"出錯了","search_box_placeholder":"在這裡輸入以搜尋","select_all":"選擇全部","select_none":"取消選擇全部","select_specific_friends_dialog__button":"完成","select_specific_friends_dialog__title":"選擇特定聯絡人","service_decryption_failed":"解密失敗。","service_invalid_backup_file":"這不是一個 Mask 的備份檔。","service_unknown_payload":"未知的貼文版本。您或許需要升級 Mask。","service_username_invalid":"錯誤的使用者名稱","speed_up":"加速","save":"存檔","skip":"跳過","next":"下一個","try":"試一下","share":"分享","share_to":"分享至…","sharing":"分享中","transfer":"傳送","export":"導出","wallet_name":"錢包名稱","wallet_rename":"重新命名錢包","wallet_add_nft_invalid_owner":"此藏品不屬於你","wallet_add_nft_already_added":"此收藏品已被添加","wallet_loading_token":"讀取代幣中...","wallet_loading_nft_contract":"加載NFT合約中...","wallet_search_no_result":"無結果","wallet_confirm_with_password":"確認密碼","wallet_airdrop_nft_unclaimed_title":"尚未認領的NFT空投","plugin_external_loader_search_holder":"搜尋外部插件","plugin_external_loader_search_button":"搜尋插件","plugin_external_loader_example_github":"官方插件example？？？ <terms>GitHub</terms>.","plugin_external_plugin_url":"插件鏈接","plugin_external_unverified_publisher":"發佈者: {{publisher}} (Unverified)","plugin_external_name":"外部插件","plugin_external_get_started":"讓我們開始吧","plugin_airdrop_nft_start_time":"起始時間 {{date}}","plugin_airdrop_nft_end_time":"結束時間 {{date}}","plugin_airdrop_nft_expired":"已過期","plugin_airdrop_nft_claim":"認領","plugin_airdrop_nft_claimed":"已認領","plugin_airdrop_nft_check":"查看","plugin_airdrop_nft_check_address":"查看你的地址","plugin_airdrop_nft_none_to_claim":"尚無空投可認領","plugin_airdrop_nft_number_to_claim":"你有 {{count}} {{name}} 可認領","plugin_airdrop_nft_claim_all":"代幣認領","plugin_airdrop_nft_claim_successful":"代幣認領成功","plugin_airdrop_nft_claim_failed":"代幣認領失敗","wallet_balance":"餘額","wallet_balance_eth":"餘額（ETH）","wallet_new":"新錢包","wallets":"錢包","wallet_status_button_change":"更改","wallet_status_button_disconnect":"取消連接","wallet_status_button_disconnecting":"断开中","wallet_status_button_copy_address":"複製地址","wallet_transfer_receiving_account":"接收地址","wallet_transfer_to_address":"接收地址","wallet_transfer_send":"發送","wallet_transfer_title":"傳送","wallet_transfer_error_amount_absence":"輸入一個金額","wallet_transfer_error_address_absence":"輸入接收人地址","wallet_transfer_error_invalid_address":"錯誤的接收人地址","wallet_transfer_error_no_address_has_been_set_name":"接收者地址無效","wallet_transfer_error_no_support_ens":"ENS網路不被支持","wallet_transfer_error_gas_price_absence":"輸入礦工費","wallet_transfer_error_gas_limit_absence":"輸入礦工費上限","wallet_transfer_error_max_fee_absence":"輸入總交易費用","wallet_transfer_error_max_priority_fee_absence":"輸入優先交易費用","wallet_transfer_error_max_priority_gas_fee_imbalance":"總交易費用不能低於優先交易費用","wallet_transfer_gwei":"GWEI","wallet_transfer_between_my_accounts":"在我的帳戶間轉帳","wallet_risk_warning_dialog_title":"風險提示","wallet_risk_warning_no_select_wallet":"還沒有選擇錢包。","wallet_risk_warning_content":"尊敬的用户：<br/>在使用任何 Mask Network 内任何跟钱包相关的插件，请确认以下使用风险。<br/>Mask Network 提供非商业免费服务。接入的插件均为社区成员和其他优秀第三方DApps团队提供，由于去中心化网络的自由性和其他不确定风险因素，请用户妥善保护自己的钱包助记词、私钥等敏感信息，进行任何区块链合约交互，请谨慎操作。任何第三方 DApps 插件所带来的风险均由第三方 DApps 承担。点击确认按钮即代表同意承担以上可能带来的风险。","wallet_risk_confirm_confirming":"確認中","wallet_risk_confirm_failed":"確認失敗","relative_time_days_ago":"{{days}} 天前","relative_time_hours_ago":"{{hours}} 小時前","relative_time_minutes_ago":"{{minutes}} 分鐘前","relative_time_months_ago":"{{months}} 月前","relative_time_seconds_ago":"{{seconds}} 秒前","relative_time_years_ago":"{{years}} 年前","plugin_wallet_guiding_step_1":"1. 選擇網路","plugin_wallet_guiding_step_2":"2. 選擇錢包","plugin_wallet_collections":"收藏","plugin_wallet_select_a_token":"選擇一個代幣","plugin_wallet_select_a_nft_contract":"選擇一份NFT合約","plugin_wallet_select_a_nft_owner":"選擇一位NFT合約擁有者","plugin_wallet_select_a_nft_operator":"選擇一位NFT合約執行者","plugin_wallet_fail_to_load_nft_contract":"加載NFT合約失敗。點擊重試。","plugin_wallet_nft_approving_all":"解鎖 {{symbol}} 中...","plugin_wallet_approve_all_nft":"解鎖 {{symbol}}","plugin_wallet_approve_all_nft_successfully":"解鎖 {{symbol}} 成功","plugin_wallet_connect_a_wallet":"連接到錢包","plugin_wallet_confirm_risk_warning":"風險警告確認","plugin_wallet_no_gas_fee":"沒有 Gas 費用","plugin_wallet_update_gas_fee":"正在更新 Gas 費用…","plugin_wallet_invalid_network":"錯誤的網路","plugin_wallet_select_a_wallet":"選擇一個錢包","plugin_wallet_transaction":"交易","plugin_wallet_transaction_wait_for_confirmation":"等待確認中…","plugin_wallet_transaction_submitted":"你的交易已經被送出！","plugin_wallet_transaction_confirmed":"你的交易已經被確認！","plugin_wallet_transaction_reverted":"交易被復原！","plugin_wallet_transaction_rejected":"交易被拒絕！","plugin_wallet_transaction_server_error":"交易由於內部 JSON-RPC 伺服器錯誤而失敗。","plugin_wallet_view_on_explorer":"在區塊鏈瀏覽器上查看","plugin_ito_placeholder_when_token_unselected":"請先選擇一種代幣","plugin_wallet_wrong_network_tip":"請連接到適當的乙太坊網絡。","plugin_wallet_on_create":"建立錢包","plugin_wallet_on_connect":"連接錢包","plugin_wallet_wrong_network":"網路錯誤","plugin_wallet_import_wallet":"匯入錢包","plugin_wallet_select_provider_dialog_title":"連接錢包","plugin_wallet_qr_code_with_wallet_connect":"使用一個與 WalletConnect 相容的錢包掃描 QR code","plugin_wallet_token_unlock":"特定數量解鎖","plugin_wallet_token_infinite_unlock":"無限解鎖","plugin_wallet_connect_dialog_title":"WalletConnect","plugin_wallet_connect_safari_metamask":"連接到 MetaMask","plugin_wallet_connect_safari_rainbow":"連接到 Rainbow","plugin_wallet_connect_safari_trust":"連接到 Trust","plugin_wallet_connect_safari_im_token":"連接到 imToken","plugin_wallet_on_connect_in_firefox":"連接","plugin_wallet_return_mobile_wallet_options":"回到手機錢包選項","plugin_wallet_view_qr_code":"顯示 QR Code","plugin_wallet_switch_network":"切換至 {{network}}","plugin_wallet_switch_network_under_going":"切換至 {{network}} 中","plugin_wallet_not_available_on":"{{network}} 不可用","plugin_wallet_connect_wallet":"連接錢包","plugin_wallet_connect_wallet_tip":"請連接你的錢包","plugin_red_packet_display_name":"插件：紅包","plugin_red_packet_claimed":"已認領","plugin_red_packet_erc20_tab_title":"代幣","plugin_red_packet_erc721_tab_title":"收藏品","plugin_red_packet_erc721_insufficient_balance":"餘額不足","plugin_red_packet_details":"紅包詳情","plugin_red_packet_split_mode":"分割模式","plugin_red_packet_average":"平均","plugin_red_packet_random":"隨機","plugin_red_packet_shares":"分享數","plugin_red_packet_best_wishes":"祝好運！","plugin_red_packet_create_new":"建立新的","plugin_red_packet_claim":"認領","plugin_red_packet_claiming":"認領中...","plugin_red_packet_refund":"退款","plugin_red_packet_empty":"空的","plugin_red_packet_refunding":"退款中","plugin_red_packet_select_existing":"選擇已存在的","plugin_red_packet_nft_tip":"這是一個NFT紅包","plugin_red_packet_attached_message":"附加的訊息","plugin_red_packet_from":"寄送人：{{name}}","plugin_red_packet_description_claimed":"你已經認領了 {{amount}} {{symbol}}。","plugin_red_packet_description_expired":"這個紅包已過期。","plugin_red_packet_description_refunded":"這個紅包已經被退款了。","plugin_red_packet_description_refund":"你可以退款 {{balance}} {{symbol}}。","plugin_red_packet_description_empty":"這個紅包是空的。","plugin_red_packet_description_broken":"這個紅包壞了","plugin_red_packet_description_failover":"寄送人 {{name}} / {{shares}} 分享數 / {{total}} {{symbol}}","plugin_red_packet_claiming_from":"認領從 {{name}} 寄來的紅包","plugin_red_packet_amount_per_share":"每次分享總額","plugin_red_packet_send_symbol":"送出 {{symbol}}","plugin_red_packet_amount_total":"總額","plugin_red_packet_next":"繼續","plugin_red_packet_back":"返回","plugin_red_packet_token":"代幣","plugin_red_packet_message_label":"標題","plugin_red_packet_create_with_token":"使用 {{symbol}} 建立紅包","plugin_red_packet_history_duration":"時間: {{startTime}} ~ {{endTime}} (UTC+8)","plugin_red_packet_history_total_amount":"總額: {{amount}} {{symbol}}","plugin_red_packet_history_total_claimed_amount":"總共: <span><strong>{{claimedAmount}}/{{amount}}</strong></span> {{symbol}}","plugin_red_packet_history_claimed":"已認領: <strong>{{claimedShares}}/{{shares}}</strong> 分享數","plugin_red_packet_history_split_mode":"分割模式: {{mode}}","plugin_red_packet_history_send":"送出","plugin_red_packet_nft_total_amount":"總額","plugin_red_packet_completed":"已完成","plugin_red_packet_expired":"已過期","plugin_gitcoin_readme":"通過使用此服務，您還將向 <fund>Gitcoin grants development fund</fund> 捐款 5%","plugin_gitcoin_select_a_token":"選擇一個代幣","plugin_gitcoin_enter_an_amount":"輸入一個金額","plugin_gitcoin_grant_not_available":"Grant 無法使用","plugin_gitcoin_insufficient_balance":"{{symbol}} 餘額不足","plugin_gitcoin_donate":"捐款","plugin_gitcoin_last_updated":"最近更新：","plugin_gitcoin_by":"提供者為","plugin_gitcoin_view_on":"在 Gitcoin 觀看","plugin_trader_tutorial":"新手教學","plugin_trader_safety_agree":"我瞭解","plugin_trader_total_supply":"供應總量","plugin_trader_market_cap":"市值","plugin_trader_swap":"交換","plugin_trader_wrap":"包裹","plugin_trader_unwrap":"展開","plugin_trader_buy":"購買","plugin_trader_no_data":"沒有資料","plugin_trader_tab_market":"一般","plugin_trader_tab_price":"價格","plugin_trader_tab_exchange":"交易所","plugin_trader_tab_swap":"交換","plugin_trader_table_exchange":"交易所","plugin_trader_table_pair":"交易對","plugin_trader_table_price":"價格","plugin_trader_table_volume":"交易量 (24h)","plugin_trader_table_updated":"已更新","plugin_trader_error_amount_absence":"輸入一個金額","plugin_trader_error_insufficient_balance":"{{symbol}} 餘額不足","plugin_trader_error_insufficient_lp":"本次交易流動性不足","plugin_trade_error_input_amount_less_minimum_amount":"輸入金額低於最小值","plugin_trader_slippage_tolerance":"滑動容許值：","plugin_trader_swap_from":"來自","plugin_trader_gas_fee":"礦工費","plugin_trader_unlock_tips":"你必須授予 {{provider}} 智能合約權限去使用你的 {{symbol}} 。 每個代幣只需授權一次。","plugin_trader_gas_option":"{{option}} ({{value}}) Gwei","plugin_trader_no_enough_liquidity":"流通性不足","plugin_trader_gas":"礦工費","plugin_poll_display_name":"插件：投票","plugin_poll_question_hint":"提出一個問題…","plugin_poll_options_hint":"選擇","plugin_poll_length":"投票長度","plugin_poll_length_days":"天","plugin_poll_length_hours":"小時","plugin_poll_length_minutes":"分鐘","plugin_poll_length_unknown":"未知","plugin_poll_create_new":"建立新的","plugin_poll_select_existing":"選擇現有的","plugin_poll_send_poll":"送出投票","plugin_poll_status_closed":"已關閉","plugin_poll_status_voting":"投票中","plugin_poll_status_voted":"已投票。","plugin_poll_deadline":"距離投票結束還有 {{time}}","plugin_ito_share":"分享","plugin_ito_enter":"輸入","plugin_ito_dialog_swap_title":"交換 {{token}}","plugin_ito_dialog_swap_reminder_title":"交換提醒","plugin_ito_dialog_swap_unlock_title":"事先解鎖代幣","plugin_ito_dialog_swap_share_title":"分享","plugin_ito_dialog_swap_exchange":"以換取","plugin_ito_dialog_swap_panel_title":"交換","plugin_ito_dialog_swap_exceed_wallet_limit":"超過單個錢包限制","plugin_ito_swap_ration_label":"交換比例","plugin_ito_swap_unlucky_fail":"你運氣不夠好，請從 Etherscan 連結查詢原因，然後重試。","plugin_ito_swap_only_once_remind":"每個錢包只能參與一次。","plugin_ito_swap_title":"{{amount}} {{token}} 每 {{swap}} ","plugin_ito_swap_end_date":"於 {{date}} 結束。","plugin_ito_dialog_claim_reminder_agree":"我理解","plugin_ito_dialog_claim_reminder_text1":"任何人都可以用任何名稱在乙太坊上建立 ERC20 代幣，包括建立現有代幣的假版本，以及聲稱代表沒有代幣的項目的代幣。","plugin_ito_dialog_claim_reminder_text2":"此介面可以按代幣地址加載任意代幣。在與任意 ERC20 代幣互動時，請格外小心並了解相關資訊。","plugin_ito_dialog_claim_reminder_text3":"如果你購買了一個任意的代幣，你可能無法把它賣出去。","plugin_ito_dialog_claim_reminder_text4":"該等權利並未在司法管轄區內全部或部分提供或出售，也不得直接或間接提供或出售，或向其提供或出售該等權利將是非法的。","plugin_ito_expired":"已過期","plugin_ito_create_new":"新增","plugin_ito_claim_all_title":"認領代幣","plugin_ito_claim_all_status_unclaimed":"未被認領","plugin_ito_claim_all_status_locked":"已鎖定","plugin_ito_claim_all_unlock_time":"解鎖時間：{{time}}","plugin_ito_claim_all_dialog_title":"認領你的代幣","plugin_ito_swapping":"如果你運氣好的的話，你會得到 {{amount}} {{symbol}}。如果 ITO 賣光了，您將收到退款。","plugin_ito_advanced":"進階","plugin_ito_advanced_ip_region":"IP 區域限制","plugin_ito_advanced_delay_unlocking":"延時解鎖代幣","plugin_ito_advanced_contract":"插件合約","plugin_ito_select_existing":"過去的","plugin_ito_display_name":"ITO 競賽視窗","plugin_ito_sell_token":"代幣","plugin_ito_sell_price":"價格","plugin_ito_sell_total_amount":"輸入","plugin_ito_allocation_per_wallet":"交換限制 {{limit}} {{token}}","plugin_ito_wait_unlock_time":"認領於 {{unlockTime}}","plugin_ito_claim":"認領","plugin_ito_claiming":"認領中","plugin_ito_claim_all":"認領全部","plugin_ito_qualification_start_time":"資格開始時間：","plugin_ito_error_qualification_start_time":"錯誤：資格開始時間應早於 ITO 結束時間","plugin_ito_error_invalid_qualification":"錯誤的資格地址","plugin_ito_unlock_time":"解鎖時間 {{zone}}","plugin_ito_total_claimable_count":"總計: ","plugin_ito_qualification_label":"插件合約","plugin_ito_message_label":"標題","plugin_ito_region_label":"IP 區域選擇","plugin_ito_region_confirm_label":"IP 區域","plugin_ito_region_list":"{{ select }} / {{ all }} 區域","plugin_ito_region_all":"所有區域","plugin_ito_region_search":"輸入區域名稱以搜尋","plugin_ito_region_ban":"此池已被您所在區域的建立者禁用","plugin_ito_next":"下一個","plugin_ito_back":"上一個","plugin_ito_transaction_dialog_summary":"使用 {{amount}} {{symbol}} 建立一個 ITO","plugin_ito_swap":"交換","plugin_ito_send_tip":"你可以在過去分頁中找到你的 ITO","plugin_ito_send_text":"送出 {{total}} {{symbol}}","plugin_ito_error_enter_amount":"輸入一個金額","plugin_ito_error_select_token":"選擇一個代幣","plugin_ito_error_enter_amount_and_token":"輸入一個金額和選擇一個代幣","plugin_ito_error_allocation_absence":"輸入交換限制","plugin_ito_error_allocation_invalid":"錯誤的金額","plugin_ito_error_exchange_time":"錯誤：開始時間不能晚於結束時間","plugin_ito_error_unlock_time":"錯誤：結束時間不能晚於解鎖時間","plugin_ito_error_balance":"{{symbol}} 餘額不足","plugin_ito_list_start_date":"開始時間 {{date}}","plugin_ito_list_end_date":"結束時間 {{date}}","plugin_ito_list_sold_total":"已交換：","plugin_ito_list_total":"總共：","plugin_ito_list_table_type":"類型","plugin_ito_list_table_price":"交換比例","plugin_ito_no_claimable_token":"你沒有可認領的代幣。","plugin_ito_list_table_sold":"已交換","plugin_ito_list_table_got":"餘額","plugin_ito_list_button_send":"送出","plugin_ito_withdraw":"提取","plugin_ito_qualification_loading":"驗證資格…","plugin_ito_qualification_failed":"錢包地址不在清單上。","plugin_ito_withdrawn":"已提取","plugin_ito_your_swapped_amount":"你交換了 {{amount}} {{symbol}}","plugin_ito_your_claimed_amount":"你認領了 {{amount}} {{symbol}}","plugin_ito_your_refund_amount":"返還 {{amount}} {{symbol}}。","plugin_ito_unlock_in_advance":"預先解鎖","plugin_ito_swapped_status":"{{remain}} / {{total}} {{token}} 已交換","plugin_ito_congratulations":"恭喜！","plugin_ito_out_of_stock_hit":"祝你下次好運","plugin_ito_claim_success_share":"我剛剛參與了 @{{user}} 在 @{{account}} 發起的 #ITO 以換取 ${{symbol}}。 安裝 mask.io 開始你自己的 Initial Twitter Offering！ \\n {{link}}","plugin_ito_claim_foreshow_share":"{{symbol}}({{name}}) 正在舉辦一個新的 #ITO。 過來參加吧！ 追隨 @{{account}} (mask.io) 以發現更多活動！ \\n {{link}}","plugin_ito_password":"密碼：{{password}}","plugin_ito_status_no_start":"尚未開始","plugin_ito_status_ongoing":"進行中","plugin_ito_status_out_of_stock":"缺貨","plugin_ito_loading":"讀取 ITO 中…","plugin_ito_amount_unlocked":"已解鎖 {{amount}} {{symbol}}","plugin_ito_amount_unlocked_infinity":"已解鎖無限 {{symbol}}","plugin_ito_unlocking_symbol":"解鎖中 {{symbol}}","plugin_ito_continue":"繼續","plugin_ito_view_on_explorer":"在區塊鏈瀏覽器上查看","plugin_collectible_you":"你","plugin_collectible_done":"完成","plugin_collectible_retry":"重試","plugin_collectible_sell":"販售","plugin_collectible_checkout":"結帳","plugin_collectible_place_bid":"投標","plugin_collectible_buy_now":"立即購買","plugin_collectible_make_offer":"報價","plugin_collectible_post_listing":"上架","plugin_collectible_description":"目前的價格是 <strong>{{price}} {{symbol}}</strong>。","plugin_collectible_article":"文章","plugin_collectible_overview":"總覽","plugin_collectible_details":"詳細資訊","plugin_collectible_offers":"報價","plugin_collectible_listing":"上架的物品","plugin_collectible_history":"歷史資訊","plugin_collectible_event":"事件","plugin_collectible_unit_price":"單位價格","plugin_collectible_price":"價格","plugin_collectible_from":"從","plugin_collectible_to":"到","plugin_collectible_date":"日期","plugin_collectible_quantity":"數量","plugin_collectible_expiration":"到期日","plugin_collectible_no_offers":"沒有報價","plugin_collectible_no_listings":"沒有任何上架的物品","plugin_collectible_base":"底價","plugin_collectible_properties":"屬性","plugin_collectible_about":"關於","plugin_collectible_chain_info":"區塊練資訊","plugin_collectible_contract_address":"合約地址","plugin_collectible_token_id":"代幣 ID","plugin_collectible_block_chain":"區塊練","plugin_collectible_create_by":"建立者","plugin_collectible_owned_by":"擁有者","plugin_collectible_no_history":"沒有歷史資運","plugin_collectible_ensure_unreviewed_item":"請確保未審核的物品","plugin_collectible_check_tos_document":"請查閱 ToS 文件","plugin_collectible_not_been_reviewed_by_opensea":"這個物品尚未被 OpenSea 審核","plugin_collectible_reviewed_tips":"你應該格外小心。任何人都可以使用任何名稱在區塊鏈上建立數位物品，包括現有物品的偽造版本。在與此物品互動時，請格外小心並進行\\n研究，以確保它是您想要的物品。","plugin_collectible_total":"總計","plugin_collectible_subtotal":"小計","plugin_collectible_item":"物品","plugin_collectible_approved_tips":"通過勾選此框，我確認此項目未經 OpenSea 審查。","plugin_collectible_agree_terms":"通過勾選此框，我同意 OpenSea 的<terms>使用者條約</terms>。","plugin_collectible_convert_eth":"轉換 ETH","plugin_collectible_sale_end":"拍賣將於 {{time}} 結束","plugin_collectible_set_initial_price":"設定一個初始價格","plugin_collectible_ending_price_tip":"在您轉讓或取消之前將一直銷售","plugin_collectible_starting_price":"初始價格","plugin_collectible_ending_price":"結束價格","plugin_collectible_ending_price_less_than_staring":"必須小於或等於起始價格。價格將直線上升到這個金額，直到到期日為止。","plugin_collectible_expiration_date":"到期日","plugin_collectible_schedule_date":"預約日期","plugin_collectible_auto_cancel_tip":"此時您上架的物品將自動結束。沒有必要取消","plugin_collectible_schedule_future_date":"預約一個未來的日期。","plugin_collectible_buyer_address":"購買者地址","plugin_collectible_buyer_address_placeholder":"輸入購買者的地址","plugin_collectible_buyer_address_helper_text":"只有購買者可以購買","plugin_collectible_include_ending_price":"包含結束價格","plugin_collectible_include_ending_price_helper":"新增結束價格將允許此上架物品過期，或允許降價，直到找到買家為止。","plugin_collectible_schedule_for_a_future_time":"預約未來的日期","plugin_collectible_schedule_for_a_future_time_helper":"您可以將此上架物品預約為只能在將來的某個日期購買","plugin_collectible_privacy":"隱私權","plugin_collectible_privacy_helper":"您可以公開您的上架物品，也可以指定一個允許購買您上架物品的地址。","plugin_collectible_enter_a_price":"輸入價格","plugin_collectible_insufficient_balance":"餘額不足","plugin_collectible_invalid_schedule_date":"預定日期錯誤","plugin_collectible_invalid_ending_price":"錯誤的結束價格","plugin_collectible_invalid_expiration_date":"錯誤的到期日","plugin_collectible_invalid_buyer_address":"錯誤的購買人地址","plugin_collectible_set_price":"設定價格","plugin_collectible_highest_bid":"最高出價","plugin_collectible_minimum_bid":"最低出嫁","plugin_collectible_set_starting_bid_price":"設定您的起始出價","plugin_collectible_reserve_price":"底標價格","plugin_collectible_reserve_price_helper":"通過設定底標價格來建立一個隱藏的限制。底價必須大於或等於起始出價。","plugin_collectible_auction_auto_end":"您的拍賣將自動在這個時候結束，最高出價者將贏得拍賣。沒有必要取消","plugin_collectible_enter_minimum_bid":"輸入最低出嫁","plugin_collectible_enter_reserve_price":"輸入底標價格","plugin_collectible_invalid_reserve_price":"錯誤的底標價格","plugin_collectible_place_a_bid":"出價","plugin_collectible_make_an_offer":"商議價格","plugin_collectible_approved_by_open_sea":"通過勾選此框，我確認此收藏品未經 OpenSea 審查。","plugin_collectible_legal_text":"通過勾選此框，我同意 OpenSea 的 <terms>使用者條約</terms>。","plugin_cryptoartai_description_title":"描述","plugin_cryptoartai_operator":"執行者","plugin_cryptoartai_activity_type":"類型","plugin_cryptoartai_status":"狀態","plugin_cryptoartai_time":"時間","plugin_cryptoartai_price":"價格","plugin_cryptoartai_buy_now":"立刻購買","plugin_cryptoartai_current_balance":"目前餘額","plugin_cryptoartai_bid_least":"需要至少出價","plugin_cryptoartai_current_balance_is":"當前餘額","plugin_cryptoartai_auction_end":"拍賣已結束","plugin_snapshot_info_title":"資訊","plugin_snapshot_info_strategy":"策略","plugin_snapshot_info_author":"作者","plugin_snapshot_info_start":"開始日期","plugin_snapshot_info_end":"結束日期","plugin_snapshot_info_snapshot":"快照","plugin_snapshot_result_title":"結果","plugin_snapshot_votes_title":"投票","plugin_snapshot_no_power":"沒有權力","plugin_snapshot_vote_success":"投票成功！","plugin_snapshot_vote":"投票","plugin_snapshot_vote_choice":"選擇","plugin_snapshot_vote_power":"你的投票權力","plugin_snapshot_vote_title":"投下你的一票","plugin_snapshot_vote_confirm_dialog_title":"確認投票","plugin_snapshot_vote_confirm_dialog_choice":"你確定要投票給 「{{ choiceText }}」 嗎?","plugin_snapshot_vote_confirm_dialog_warning":"這項操作無法復原。","plugin_snapshot_current_result_title":"目前的結果","plugin_snapshot_download_report":"下載報告","plugin_dhedge_managed_by":"由 <manager>{{managerName}}</manager> 管理","plugin_dhedge_manager_share":"持有 <share>{{managerShare}}%</share> 池","plugin_dhedge_value_managed":"託管的金額","plugin_dhedge_lifetime_return":"終身回報","plugin_dhedge_risk_factor":"風險因素","plugin_dhedge_tab_stats":"統計","plugin_dhedge_tab_chart":"圖表","plugin_dhedge_strategy":"策略","plugin_dhedge_see_less":"顯示更少","plugin_dhedge_see_more":"顯示更多","plugin_dhedge_no_data":"沒有資料","plugin_dhedge_fetch_error":"無法取得資料，請再試一次！","plugin_dhedge_loading_chart":"讀取中","plugin_dhedge_invest":"投資","plugin_dhedge_buy_token":"取得 {{symbol}}","plugin_dhedge_enter_an_amount":"輸入一個金額","plugin_dhedge_insufficient_balance":"{{symbol}} 餘額不足","plugin_dhedge_loading":"讀取中…","plugin_dhedge_pool_not_found":"錯誤的池地址！","plugin_dhedge_smt_wrong":"出錯了！"}');
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

// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.5_react-dom@18.0.0+react@18.0.0/node_modules/react-i18next/dist/es/context.js
var context = __webpack_require__(60147);
;// CONCATENATED MODULE: ./shared-ui/locales_legacy/init.ts

// @ts-ignore to prevent TypeScript complains




context/* initReactI18next.init */.Db.init(src/* i18NextInstance */.BV);
addMaskI18N(src/* i18NextInstance */.BV);
(0,shared_src/* addSharedI18N */.zr)(src/* i18NextInstance */.BV);
(0,entry/* addDashboardI18N */.Gp)(src/* i18NextInstance */.BV);


/***/ }),

/***/ 81064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ createPluginHost)
/* harmony export */ });
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96484);
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69260);
/* harmony import */ var _shared_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94299);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5027);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78144);
// All plugin manager need to call createPluginHost so let's register plugins implicitly.





function createPluginHost(signal, createContext) {
    const minimalMode = {
        isEnabled: _extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Settings.getPluginMinimalModeEnabled */ .ZP.Settings.getPluginMinimalModeEnabled,
        events: new _servie_events__WEBPACK_IMPORTED_MODULE_4__/* .Emitter */ .Q5()
    };
    const removeListener = _shared_messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages.events.pluginMinimalModeChanged.on */ .q.events.pluginMinimalModeChanged.on(([id, val])=>minimalMode.events.emit(val ? 'enabled' : 'disabled', id)
    );
    signal?.addEventListener('abort', removeListener);
    return {
        signal,
        minimalMode,
        addI18NResource (plugin, resource) {
            (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .createI18NBundle */ .C9)(plugin, resource)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .i18NextInstance */ .BV);
        },
        createContext
    };
}


/***/ }),

/***/ 26861:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _shared_kv_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53340);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5027);


const memory = {
    beforeAutoSync: Promise.resolve(),
    getValue (...args) {
        return _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Settings.__kv_storage_read__ */ .ZP.Settings.__kv_storage_read__('memory', ...args);
    },
    async setValue (...args) {
        await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Settings.__kv_storage_write__ */ .ZP.Settings.__kv_storage_write__('memory', ...args);
    }
};
const indexedDB = {
    beforeAutoSync: Promise.resolve(),
    getValue (...args) {
        return _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Settings.__kv_storage_read__ */ .ZP.Settings.__kv_storage_read__('indexedDB', ...args);
    },
    async setValue (...args) {
        await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Settings.__kv_storage_write__ */ .ZP.Settings.__kv_storage_write__('indexedDB', ...args);
    }
};
(0,_shared_kv_storage__WEBPACK_IMPORTED_MODULE_0__/* .setupMaskKVStorageBackend */ .$e)(indexedDB, memory);


/***/ }),

/***/ 1650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DF": () => (/* binding */ isFacebook),
/* harmony export */   "XO": () => (/* binding */ facebookWorkerBase),
/* harmony export */   "qv": () => (/* binding */ facebookBase)
/* harmony export */ });
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52222);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78144);


const origins = [
    'https://www.facebook.com/*',
    'https://m.facebook.com/*',
    'https://facebook.com/*'
];
const facebookBase = {
    encryptionNetwork: _masknet_encryption__WEBPACK_IMPORTED_MODULE_0__/* .SocialNetworkEnum.Facebook */ .Gq.Facebook,
    networkIdentifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Facebook */ .Jk.Facebook,
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith('facebook.com');
    }
};
function isFacebook(ui) {
    return ui.networkIdentifier === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Facebook */ .Jk.Facebook;
}
const facebookWorkerBase = {
    ...facebookBase,
    gunNetworkHint: ''
};


/***/ }),

/***/ 93505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ instagramBase),
/* harmony export */   "x": () => (/* binding */ instagramWorkerBase)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2666);
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52222);


const origins = [
    'https://www.instagram.com/*',
    'https://m.instagram.com/*',
    'https://instagram.com/*'
];
const instagramBase = {
    networkIdentifier: _masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .INSTAGRAM_ID */ .l9,
    encryptionNetwork: _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .SocialNetworkEnum.Instagram */ .Gq.Instagram,
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.host.endsWith(_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .INSTAGRAM_ID */ .l9);
    }
};
const instagramWorkerBase = {
    ...instagramBase,
    gunNetworkHint: _masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .INSTAGRAM_ID */ .l9
};


/***/ }),

/***/ 37732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L3": () => (/* binding */ isTwitter),
/* harmony export */   "oQ": () => (/* binding */ twitterBase),
/* harmony export */   "x": () => (/* binding */ twitterWorkerBase)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2666);
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52222);


const origins = [
    'https://mobile.twitter.com/*',
    'https://twitter.com/*'
];
const twitterBase = {
    networkIdentifier: _masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .TWITTER_ID */ .QE,
    encryptionNetwork: _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .SocialNetworkEnum.Twitter */ .Gq.Twitter,
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith('twitter.com');
    }
};
function isTwitter(ui) {
    return ui.networkIdentifier === _masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .TWITTER_ID */ .QE;
}
const twitterWorkerBase = {
    ...twitterBase,
    gunNetworkHint: 'twitter-'
};


/***/ }),

/***/ 33060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ getCurrentSNSNetwork),
/* harmony export */   "T": () => (/* binding */ getCurrentIdentifier)
/* harmony export */ });
/* harmony import */ var _twitter_com_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37732);
/* harmony import */ var _facebook_com_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1650);
/* harmony import */ var _instagram_com_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93505);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79936);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3747);





function getCurrentSNSNetwork(current) {
    const table = {
        [_twitter_com_base__WEBPACK_IMPORTED_MODULE_0__/* .twitterBase.networkIdentifier */ .oQ.networkIdentifier]: _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__/* .CurrentSNSNetwork.Twitter */ .mv.Twitter,
        [_facebook_com_base__WEBPACK_IMPORTED_MODULE_1__/* .facebookBase.networkIdentifier */ .qv.networkIdentifier]: _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__/* .CurrentSNSNetwork.Facebook */ .mv.Facebook,
        [_instagram_com_base__WEBPACK_IMPORTED_MODULE_2__/* .instagramBase.networkIdentifier */ .j.networkIdentifier]: _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__/* .CurrentSNSNetwork.Instagram */ .mv.Instagram
    };
    if (current in table) return table[current];
    return _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__/* .CurrentSNSNetwork.Unknown */ .mv.Unknown;
}
const getCurrentIdentifier = ()=>{
    const current = _social_network__WEBPACK_IMPORTED_MODULE_4__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider?.recognized.value;
    return _social_network__WEBPACK_IMPORTED_MODULE_4__/* .globalUIState.profiles.value.find */ .EJ.profiles.value.find((i)=>i.identifier.equals(current?.identifier)
    ) || _social_network__WEBPACK_IMPORTED_MODULE_4__/* .globalUIState.profiles.value[0] */ .EJ.profiles.value[0];
};


/***/ }),

/***/ 67071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$8": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.$8),
/* harmony export */   "$d": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.$d),
/* harmony export */   "$f": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.$f),
/* harmony export */   "$q": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.$q),
/* harmony export */   "FF": () => (/* reexport safe */ _web3_types__WEBPACK_IMPORTED_MODULE_1__.FF),
/* harmony export */   "K1": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.K1),
/* harmony export */   "KQ": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.KQ),
/* harmony export */   "Ne": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.Ne),
/* harmony export */   "Os": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Os),
/* harmony export */   "Ov": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Ov),
/* harmony export */   "Rm": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_3__.Rm),
/* harmony export */   "V2": () => (/* reexport safe */ _web3_types__WEBPACK_IMPORTED_MODULE_1__.V2),
/* harmony export */   "Vw": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Vw),
/* harmony export */   "Yn": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Yn),
/* harmony export */   "_o": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__._o),
/* harmony export */   "as": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.as),
/* harmony export */   "bL": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.bL),
/* harmony export */   "dM": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.dM),
/* harmony export */   "fY": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.fY),
/* harmony export */   "hn": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.hn),
/* harmony export */   "i8": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_3__.i8),
/* harmony export */   "iv": () => (/* reexport safe */ _web3_types__WEBPACK_IMPORTED_MODULE_1__.iv),
/* harmony export */   "mA": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.mA),
/* harmony export */   "px": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.px),
/* harmony export */   "rB": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.rB),
/* harmony export */   "x5": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.x5),
/* harmony export */   "xx": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.xx),
/* harmony export */   "yH": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.yH)
/* harmony export */ });
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28102);
/* harmony import */ var _web3_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71354);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17750);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72938);






/***/ }),

/***/ 17750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$q": () => (/* reexport safe */ _useReverseAddress__WEBPACK_IMPORTED_MODULE_6__.$),
/* harmony export */   "KP": () => (/* reexport safe */ _useI18N__WEBPACK_IMPORTED_MODULE_7__.K),
/* harmony export */   "Ne": () => (/* reexport safe */ _useAllPluginsWeb3State__WEBPACK_IMPORTED_MODULE_3__.N),
/* harmony export */   "Rc": () => (/* reexport safe */ _useActivatedPlugin__WEBPACK_IMPORTED_MODULE_0__.R),
/* harmony export */   "eS": () => (/* reexport safe */ _useI18N__WEBPACK_IMPORTED_MODULE_7__.e),
/* harmony export */   "fI": () => (/* reexport safe */ _usePluginWrapper__WEBPACK_IMPORTED_MODULE_8__.fI),
/* harmony export */   "hn": () => (/* reexport safe */ _useLookupDomain__WEBPACK_IMPORTED_MODULE_5__.h),
/* harmony export */   "yH": () => (/* reexport safe */ _useAvailablePlugins__WEBPACK_IMPORTED_MODULE_4__.y)
/* harmony export */ });
/* harmony import */ var _useActivatedPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9881);
/* harmony import */ var _useActivatedPluginWeb3UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82139);
/* harmony import */ var _useActivatedPluginWeb3State__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54605);
/* harmony import */ var _useAllPluginsWeb3State__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23774);
/* harmony import */ var _useAvailablePlugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15428);
/* harmony import */ var _useLookupDomain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59282);
/* harmony import */ var _useReverseAddress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58700);
/* harmony import */ var _useI18N__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5989);
/* harmony import */ var _usePluginWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48463);











/***/ }),

/***/ 59282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useLookupAddress)
/* harmony export */ });
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28102);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73570);


function useLookupAddress(domain, pluginId) {
    const { NameService , Utils  } = (0,_web3__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3State */ .dM)(pluginId);
    const chainId = (0,_web3__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .xx)(pluginId);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(async ()=>{
        if (NameService?.lookup && Utils?.isValidDomain?.(domain)) {
            return NameService.lookup(domain);
        }
        return '';
    }, [
        NameService,
        Utils,
        domain,
        chainId
    ]);
}


/***/ }),

/***/ 37271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CB": () => (/* binding */ startPluginDashboard),
/* harmony export */   "eE": () => (/* binding */ useActivatedPluginsDashboard),
/* harmony export */   "yf": () => (/* binding */ useActivatedPluginDashboard)
/* harmony export */ });
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69260);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66040);
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71264);



const { activated , startDaemon , events  } = (0,_manage__WEBPACK_IMPORTED_MODULE_1__/* .createManager */ .m)((def)=>def.Dashboard
);
const subscription = {
    getCurrentValue: ()=>[
            ...activated.plugins
        ]
    ,
    subscribe: (f)=>events.on(_servie_events__WEBPACK_IMPORTED_MODULE_2__/* .ALL_EVENTS */ .Ko, f)
};
function useActivatedPluginsDashboard() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(subscription);
}
function useActivatedPluginDashboard(pluginID) {
    const plugins = (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(subscription);
    return plugins.find((x)=>x.ID === pluginID
    );
}
function startPluginDashboard(host) {
    startDaemon(host);
}


/***/ }),

/***/ 28102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$8": () => (/* reexport safe */ _Context__WEBPACK_IMPORTED_MODULE_25__.$8),
/* harmony export */   "$d": () => (/* reexport safe */ _useWeb3UI__WEBPACK_IMPORTED_MODULE_23__.$),
/* harmony export */   "$f": () => (/* reexport safe */ _Context__WEBPACK_IMPORTED_MODULE_25__.$f),
/* harmony export */   "K1": () => (/* reexport safe */ _useChainDetailed__WEBPACK_IMPORTED_MODULE_9__.K),
/* harmony export */   "KQ": () => (/* reexport safe */ _useBalance__WEBPACK_IMPORTED_MODULE_3__.K),
/* harmony export */   "Os": () => (/* reexport safe */ _useWallet__WEBPACK_IMPORTED_MODULE_20__.O),
/* harmony export */   "Ov": () => (/* reexport safe */ _useBlockNumber__WEBPACK_IMPORTED_MODULE_5__.O),
/* harmony export */   "Vw": () => (/* reexport safe */ _useNetworkDescriptor__WEBPACK_IMPORTED_MODULE_14__.V),
/* harmony export */   "Yn": () => (/* reexport safe */ _useBeat__WEBPACK_IMPORTED_MODULE_4__.Y),
/* harmony export */   "_o": () => (/* reexport safe */ _useProviderType__WEBPACK_IMPORTED_MODULE_13__._),
/* harmony export */   "as": () => (/* reexport safe */ _useChainIdValid__WEBPACK_IMPORTED_MODULE_8__.a),
/* harmony export */   "bL": () => (/* reexport safe */ _useNetworkType__WEBPACK_IMPORTED_MODULE_12__.b),
/* harmony export */   "dM": () => (/* reexport safe */ _useWeb3State__WEBPACK_IMPORTED_MODULE_24__.d),
/* harmony export */   "fY": () => (/* reexport safe */ _useProviderDescriptor__WEBPACK_IMPORTED_MODULE_15__.f),
/* harmony export */   "mA": () => (/* reexport safe */ _useAccount__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "px": () => (/* reexport safe */ _useNetworkDescriptors__WEBPACK_IMPORTED_MODULE_16__.p),
/* harmony export */   "rB": () => (/* reexport safe */ _useWallets__WEBPACK_IMPORTED_MODULE_22__.r),
/* harmony export */   "x5": () => (/* reexport safe */ _useChainColor__WEBPACK_IMPORTED_MODULE_7__.x),
/* harmony export */   "xx": () => (/* reexport safe */ _useChainId__WEBPACK_IMPORTED_MODULE_6__.x)
/* harmony export */ });
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32393);
/* harmony import */ var _useAllowTestnet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49031);
/* harmony import */ var _useAssetType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32754);
/* harmony import */ var _useBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35807);
/* harmony import */ var _useBeat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39157);
/* harmony import */ var _useBlockNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62414);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32668);
/* harmony import */ var _useChainColor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38296);
/* harmony import */ var _useChainIdValid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89274);
/* harmony import */ var _useChainDetailed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38527);
/* harmony import */ var _useCollectibleType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50359);
/* harmony import */ var _useNameType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2953);
/* harmony import */ var _useNetworkType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50657);
/* harmony import */ var _useProviderType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40989);
/* harmony import */ var _useNetworkDescriptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(93413);
/* harmony import */ var _useProviderDescriptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4315);
/* harmony import */ var _useNetworkDescriptors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(65845);
/* harmony import */ var _useProviderDescriptors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(98102);
/* harmony import */ var _useTokenPrice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(16103);
/* harmony import */ var _useTransactionType__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(40425);
/* harmony import */ var _useWallet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(11103);
/* harmony import */ var _useWalletPrimary__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(69938);
/* harmony import */ var _useWallets__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(65043);
/* harmony import */ var _useWeb3UI__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(88241);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(18618);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(15358);




























/***/ }),

/***/ 65043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useWallets)
/* harmony export */ });
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15358);

function useWallets(type, pluginID) {
    return (0,_Context__WEBPACK_IMPORTED_MODULE_0__/* .usePluginWeb3StateContext */ ._$)(pluginID).wallets;
}


/***/ }),

/***/ 97096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FW": () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_0__.FW),
/* harmony export */   "P7": () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_0__.P7),
/* harmony export */   "iu": () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_0__.iu),
/* harmony export */   "td": () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_0__.td),
/* harmony export */   "z4": () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_0__.z4)
/* harmony export */ });
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75151);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38047);
// Following is the API that can be called from the native side.

// Following is the API that implemented by the native side.




/***/ }),

/***/ 75151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FW": () => (/* binding */ DataProvider),
/* harmony export */   "P7": () => (/* binding */ LanguageOptions),
/* harmony export */   "iu": () => (/* binding */ SupportedLanguages),
/* harmony export */   "td": () => (/* binding */ NetworkType),
/* harmony export */   "z4": () => (/* binding */ TradeProvider)
/* harmony export */ });
/* unused harmony exports Appearance, LaunchPage, ProviderType, FungibleAssetProvider, NonFungibleAssetProvider */
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
var NetworkType;
(function(NetworkType) {
    NetworkType["Ethereum"] = "Ethereum";
    NetworkType["Binance"] = "Binance";
    NetworkType["Polygon"] = "Polygon";
    NetworkType["Arbitrum"] = "Arbitrum";
    NetworkType["xDai"] = "xDai";
    NetworkType["Celo"] = "Celo";
    NetworkType["Fantom"] = "Fantom";
    NetworkType["Aurora"] = "Aurora";
    NetworkType["Avalanche"] = "Avalanche";
    NetworkType["Boba"] = "Boba";
    NetworkType["Fuse"] = "Fuse";
    NetworkType["Metis"] = "Metis";
    NetworkType["Optimistic"] = "Optimistic";
    NetworkType["Conflux"] = "Conflux";
})(NetworkType || (NetworkType = {}));
var ProviderType;
(function(ProviderType) {
    ProviderType["MaskWallet"] = 'Maskbook';
    ProviderType["MetaMask"] = "MetaMask";
    ProviderType["WalletConnect"] = "WalletConnect";
    ProviderType["Fortmatic"] = "Fortmatic";
    ProviderType["Coin98"] = "Coin98";
    ProviderType["MathWallet"] = "MathWallet";
    ProviderType["WalletLink"] = "WalletLink";
    ProviderType["CustomNetwork"] = "CustomNetwork";
})(ProviderType || (ProviderType = {}));
var FungibleAssetProvider;
(function(FungibleAssetProvider) {
    FungibleAssetProvider["ZERION"] = 'Zerion';
    FungibleAssetProvider["DEBANK"] = 'Debank';
})(FungibleAssetProvider || (FungibleAssetProvider = {}));
var NonFungibleAssetProvider;
(function(NonFungibleAssetProvider) {
    NonFungibleAssetProvider["OPENSEA"] = 'OpenSea';
    NonFungibleAssetProvider["RARIBLE"] = 'Rarible';
    NonFungibleAssetProvider["NFTSCAN"] = 'NFTScan';
    NonFungibleAssetProvider["ZORA"] = 'Zora';
})(NonFungibleAssetProvider || (NonFungibleAssetProvider = {}));


/***/ }),

/***/ 20871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ createGlobalState)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66040);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48160);


/**
 * Create a new global state.
 *
 * @param f The async function that return the data needed.
 * @param subscribe
 * The subscribe function that call the callback when the data changed.
 * It will call the f again to revalidate the data.
 *
 * @returns
 * It returns a tuple.
 *
 * The first item is the react hooks for this resource.
 * The hooks receive a argument "checked".
 * If checked is true, it will return a status object so you can handle the error by yourself.
 *
 * The second item is the revalidation function. It can be called anywhere and returns a Promise.
 * It will resolves regardless the f itself fullfilled or rejected.
 */ function createGlobalState(f1, subscribe) {
    const listeners = new Set();
    let currentValue = ts_results__WEBPACK_IMPORTED_MODULE_1__/* .None */ .Hq;
    let pending;
    const sub = {
        getCurrentValue () {
            if (currentValue.none) {
                subscribe(revalidate);
                throw pending ||= revalidate();
            }
            if (currentValue.val.err) throw currentValue.val.val;
            return currentValue.val.val;
        },
        subscribe (f) {
            listeners.add(f);
            return ()=>listeners.delete(f)
            ;
        }
    };
    function useData() {
        return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(sub);
    }
    function revalidate() {
        return f1().then((val)=>currentValue = (0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Some */ .bD)((0,ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok)(val))
        , (err)=>currentValue = (0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Some */ .bD)((0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG)(err))
        ).then(()=>undefined
        ).finally(()=>listeners.forEach((f)=>f()
            )
        );
    }
    return [
        useData,
        revalidate
    ];
}


/***/ }),

/***/ 53242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.E),
/* harmony export */   "F$": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.F$),
/* harmony export */   "N3": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.N3),
/* harmony export */   "S8": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.S8),
/* harmony export */   "SV": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.SV),
/* harmony export */   "pv": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.pv),
/* harmony export */   "r8": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.r8),
/* harmony export */   "xw": () => (/* reexport safe */ _bom__WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _bom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66802);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87557);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21902);





/***/ }),

/***/ 37820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C9": () => (/* reexport */ register_ns/* createI18NBundle */.C),
  "BV": () => (/* reexport */ i18NextInstance),
  "BF": () => (/* reexport */ updateLanguage)
});

// EXTERNAL MODULE: ../shared-base/src/i18n/register-ns.ts
var register_ns = __webpack_require__(84926);
// EXTERNAL MODULE: ../public-api/src/index.ts
var src = __webpack_require__(97096);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next@21.6.15/node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(97344);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next-browser-languagedetector@6.1.4/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js + 2 modules
var i18nextBrowserLanguageDetector = __webpack_require__(52647);
;// CONCATENATED MODULE: ../shared-base/src/i18n/instance.ts



const i18NextInstance = i18next/* default */.ZP;
i18next/* default.use */.ZP.use(i18nextBrowserLanguageDetector/* default */.Z).init({
    keySeparator: false,
    interpolation: {
        escapeValue: false
    },
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

/***/ 78144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ko": () => (/* reexport */ collections/* ALL_EVENTS */.Ko),
  "iD": () => (/* reexport */ Results/* CheckedError */.iD),
  "WF": () => (/* reexport */ Shared/* CrossIsolationMessages */.W),
  "vq": () => (/* reexport */ Routes/* DashboardRoutes */.vq),
  "ob": () => (/* reexport */ type/* ECKeyIdentifier */.ob),
  "CH": () => (/* reexport */ src_crypto/* ECKeyIdentifierFromJsonWebKey */.CH),
  "rP": () => (/* reexport */ Pure/* EMPTY_LIST */.r),
  "Jk": () => (/* reexport */ Site_type/* EnhanceableSite */.J),
  "xI": () => (/* reexport */ type/* GroupIdentifier */.xI),
  "xb": () => (/* reexport */ type/* Identifier */.xb),
  "qD": () => (/* reexport */ IdentifierMap/* IdentifierMap */.q),
  "LM": () => (/* reexport */ personas/* MAX_PERSONA_LIMIT */.L),
  "BU": () => (/* reexport */ NextID_type/* NextIDAction */.B),
  "Vd": () => (/* reexport */ NextID_type/* NextIDPlatform */.V),
  "vP": () => (/* reexport */ collections/* ObservableMap */.vP),
  "n7": () => (/* reexport */ collections/* ObservableSet */.n7),
  "$f": () => (/* reexport */ collections/* ObservableWeakMap */.$f),
  "E": () => (/* reexport */ Results/* OptionalResult */.E),
  "mZ": () => (/* reexport */ Routes/* PopupRoutes */.mZ),
  "bb": () => (/* reexport */ type/* PostIVIdentifier */.bb),
  "_P": () => (/* reexport */ type/* PostIdentifier */._P),
  "WO": () => (/* reexport */ type/* ProfileIdentifier */.WO),
  "Kn": () => (/* reexport */ Persona_type/* RelationFavor */.K),
  "Hd": () => (/* reexport */ sessionStorageCache/* SessionStorageCache */.H),
  "Y_": () => (/* reexport */ subscription/* SubscriptionDebug */.Y_),
  "Jf": () => (/* reexport */ subscription/* SubscriptionFromValueRef */.Jf),
  "ps": () => (/* reexport */ Results/* andThenAsync */.ps),
  "f1": () => (/* reexport */ src_crypto/* compressSecp256k1KeyRaw */.xb),
  "SH": () => (/* reexport */ src_crypto/* compressSecp256k1Point */.SH),
  "qY": () => (/* reexport */ subscription/* createConstantSubscription */.qY),
  "C9": () => (/* reexport */ i18n/* createI18NBundle */.C9),
  "q0": () => (/* reexport */ kv_storage/* createInMemoryKVStorageBackend */.q0),
  "Ic": () => (/* reexport */ kv_storage/* createIndexedDB_KVStorageBackend */.Ic),
  "rc": () => (/* reexport */ kv_storage/* createKVStorageHost */.rc),
  "X2": () => (/* reexport */ kv_storage/* createProxyKVStorageBackend */.X2),
  "Fd": () => (/* reexport */ subscription/* createSubscriptionFromAsync */.Fd),
  "qX": () => (/* reexport */ src_crypto/* decompressSecp256k1Key */.qX),
  "Yj": () => (/* reexport */ src_crypto/* decompressSecp256k1KeyRaw */.Yj),
  "pf": () => (/* reexport */ src_crypto/* decompressSecp256k1Point */.pf),
  "Nb": () => (/* reexport */ personas/* formatPersonaFingerprint */.N),
  "mz": () => (/* reexport */ convert/* fromBase64URL */.mz),
  "H_": () => (/* reexport */ convert/* fromHex */.H_),
  "$I": () => (/* reexport */ getAssetAsBlobURL/* getAssetAsBlobURL */.$),
  "Bb": () => (/* reexport */ getLocalImplementation/* getLocalImplementation */.B),
  "kO": () => (/* reexport */ getLocalImplementation/* getLocalImplementationExotic */.k),
  "BV": () => (/* reexport */ i18n/* i18NextInstance */.BV),
  "K2": () => (/* reexport */ detect/* isDashboardPage */.K),
  "N6": () => (/* reexport */ detect/* isPopupPage */.N),
  "dK": () => (/* reexport */ src_crypto/* isSecp256k1Point */.dK),
  "Rx": () => (/* reexport */ src_crypto/* isSecp256k1PrivateKey */.Rx),
  "S3": () => (/* reexport */ subscription/* mapSubscription */.S3),
  "Lk": () => (/* reexport */ parseURL/* parseURL */.L),
  "s_": () => (/* reexport */ pollingTask/* pollingTask */.s),
  "tr": () => (/* reexport */ serializer/* registerSerializableClass */.tr),
  "zD": () => (/* reexport */ Routes/* relativeRouteOf */.Y_),
  "GM": () => (/* reexport */ serializer/* serializer */.GM),
  "s3": () => (/* reexport */ convert/* toBase64 */.s3),
  "wi": () => (/* reexport */ convert/* toBase64URL */.wi),
  "NC": () => (/* reexport */ convert/* toHex */.NC),
  "BF": () => (/* reexport */ i18n/* updateLanguage */.BF)
});

// UNUSED EXPORTS: ECKeyIdentifierFromCryptoKey, EMPTY_OBJECT, ExtensionSite, PayloadVersions, PersonaIdentifier, ReadonlyIdentifierMap, ValueRefFromSubscription, __DEBUG__ONLY__enableCryptoKeySerialization, compressSecp256k1Key, removed

// EXTERNAL MODULE: ../shared-base/src/serializer/index.ts
var serializer = __webpack_require__(91131);
// EXTERNAL MODULE: ../shared-base/src/Identifier/IdentifierMap.ts
var IdentifierMap = __webpack_require__(93731);
// EXTERNAL MODULE: ../shared-base/src/collections/index.ts
var collections = __webpack_require__(33821);
// EXTERNAL MODULE: ../shared-base/src/MaskPayload/index.ts
var MaskPayload = __webpack_require__(43550);
// EXTERNAL MODULE: ../shared-base/src/Identifier/type.ts
var type = __webpack_require__(57589);
// EXTERNAL MODULE: ../shared-base/src/i18n/index.ts + 1 modules
var i18n = __webpack_require__(37820);
// EXTERNAL MODULE: ../shared-base/src/utils/detect.ts
var detect = __webpack_require__(75990);
// EXTERNAL MODULE: ../shared-base/src/utils/getLocalImplementation.tsx
var getLocalImplementation = __webpack_require__(97825);
// EXTERNAL MODULE: ../shared-base/src/utils/parseURL.ts
var parseURL = __webpack_require__(72610);
// EXTERNAL MODULE: ../shared-base/src/utils/pollingTask.ts
var pollingTask = __webpack_require__(16746);
// EXTERNAL MODULE: ../shared-base/src/utils/sessionStorageCache.ts
var sessionStorageCache = __webpack_require__(16280);
// EXTERNAL MODULE: ../shared-base/src/utils/subscription.ts
var subscription = __webpack_require__(40613);
// EXTERNAL MODULE: ../shared-base/src/utils/getAssetAsBlobURL.ts
var getAssetAsBlobURL = __webpack_require__(20449);
// EXTERNAL MODULE: ../shared-base/src/utils/personas.ts
var personas = __webpack_require__(68433);
;// CONCATENATED MODULE: ../shared-base/src/utils/index.ts









// EXTERNAL MODULE: ../shared-base/src/kv-storage/index.ts + 1 modules
var kv_storage = __webpack_require__(66052);
// EXTERNAL MODULE: ../shared-base/src/crypto/index.ts + 1 modules
var src_crypto = __webpack_require__(68149);
// EXTERNAL MODULE: ../shared-base/src/Pure/index.ts
var Pure = __webpack_require__(3494);
// EXTERNAL MODULE: ../shared-base/src/Persona/type.ts
var Persona_type = __webpack_require__(42703);
// EXTERNAL MODULE: ../shared-base/src/Site/type.ts
var Site_type = __webpack_require__(77907);
// EXTERNAL MODULE: ../shared-base/src/Routes/index.ts
var Routes = __webpack_require__(1174);
// EXTERNAL MODULE: ../shared-base/src/Messages/Shared.ts
var Shared = __webpack_require__(85562);
// EXTERNAL MODULE: ../shared-base/src/Results/index.ts + 2 modules
var Results = __webpack_require__(33067);
// EXTERNAL MODULE: ../shared-base/src/convert/index.ts
var convert = __webpack_require__(59041);
// EXTERNAL MODULE: ../shared-base/src/NextID/type.ts
var NextID_type = __webpack_require__(27897);
;// CONCATENATED MODULE: ../shared-base/src/index.ts






















/***/ }),

/***/ 66052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q0": () => (/* reexport */ in_memory/* createInMemoryKVStorageBackend */.q),
  "Ic": () => (/* reexport */ idb/* createIndexedDB_KVStorageBackend */.I),
  "rc": () => (/* binding */ createKVStorageHost),
  "X2": () => (/* reexport */ createProxyKVStorageBackend)
});

// UNUSED EXPORTS: removed

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ../shared-base/src/kv-storage/in-memory.ts
var in_memory = __webpack_require__(3709);
// EXTERNAL MODULE: ../shared-base/src/kv-storage/idb.ts
var idb = __webpack_require__(59573);
;// CONCATENATED MODULE: ../shared-base/src/kv-storage/proxy.ts

function createProxyKVStorageBackend() {
    let target;
    let [promise, resolve, reject] = (0,esm/* defer */.PQ)();
    return {
        get beforeAutoSync () {
            return promise;
        },
        async getValue (...args) {
            return target.getValue(...args);
        },
        async setValue (...args) {
            return target.setValue(...args);
        },
        replaceBackend (backend) {
            target = backend;
            // resolve old one
            backend.beforeAutoSync.then(resolve, reject);
            [promise, resolve, reject] = (0,esm/* defer */.PQ)();
            backend.beforeAutoSync.then(resolve, reject);
        }
    };
}

;// CONCATENATED MODULE: ../shared-base/src/kv-storage/index.ts




const removed = Symbol.for('removed');

/**
 * Create a root scope of simple K/V storage.
 * @param backend The storage provider
 * @param message The message channel to sync the latest value
 * @param signal The abort signal
 */ function createKVStorageHost(backend, message, signal = new AbortController().signal) {
    return (name, defaultValues)=>{
        return createScope(signal, backend, message, null, name, defaultValues);
    };
}
const alwaysThrowHandler = ()=>{
    throw new TypeError('Invalid operation');
};
function createScope(signal, backend, message, parentScope, scope, defaultValues1) {
    if (scope.includes('/')) throw new TypeError('scope name cannot contains "/"');
    if (scope.includes(':')) throw new TypeError('scope name cannot contains ":"');
    const currentScope = parentScope === null ? scope : `${parentScope}/${scope}`;
    const storage = new Proxy({
        __proto__: null
    }, {
        defineProperty: alwaysThrowHandler,
        deleteProperty: alwaysThrowHandler,
        set: alwaysThrowHandler,
        preventExtensions: alwaysThrowHandler,
        setPrototypeOf: alwaysThrowHandler,
        get (target, prop, receiver) {
            if (typeof prop === 'symbol') return undefined;
            if (target[prop]) return target[prop];
            target[prop] = createState(signal, backend, message, currentScope, prop, defaultValues1[prop]);
            return target[prop];
        }
    });
    backend.beforeAutoSync.then(()=>{
        for (const [key, value] of Object.entries(defaultValues1)){
            if (value === removed) continue;
            // trigger the auto sync
            storage[key].initialized;
        }
    });
    return {
        createSubScope (subScope, defaultValues, scopeSignal) {
            const aggregatedSignal = (0,esm/* combineAbortSignal */.dq)(scopeSignal, signal);
            return createScope(aggregatedSignal, backend, message, currentScope, subScope, defaultValues);
        },
        storage
    };
}
function createState(signal, backend, message, scope, prop, defaultValue) {
    const propKey = `${scope}:${prop}`;
    let initialized = false;
    let usingDefaultValue = true;
    const initializedPromise = backend.beforeAutoSync.then(()=>backend.getValue(propKey)
    ).then((val)=>{
        if (val.some) usingDefaultValue = false;
        return val.unwrapOr(defaultValue);
    }).then((val)=>{
        state = val;
        initialized = true;
    });
    let state = defaultValue;
    const listeners = new Set();
    function subscribe(f) {
        listeners.add(f);
        return ()=>listeners.delete(f)
        ;
    }
    const subscription = {
        getCurrentValue: ()=>{
            if (!initialized) throw initializedPromise;
            return state;
        },
        subscribe
    };
    function setter(val) {
        if (isEqual(state, val)) return;
        usingDefaultValue = false;
        state = val;
        for (const f of listeners)f();
    }
    message.on(([eventKey, newValue])=>eventKey === propKey && setter(newValue)
    , {
        signal
    });
    return {
        get initialized () {
            return initialized;
        },
        get initializedPromise () {
            return initializedPromise;
        },
        get value () {
            if (!initialized) throw new Error('Try to access K/V state before initialization finished.');
            return state;
        },
        async setValue (value) {
            if (signal.aborted) throw new TypeError('Aborted storage.');
            // force trigger store when set state with default value to make it persistent.
            if (usingDefaultValue || !isEqual(state, value)) await backend.setValue(propKey, value);
            setter(value);
        },
        subscription
    };
}
function isEqual(a, b) {
    if (a === b) return true;
    if (a === null || b === null) return false;
    if (typeof a === 'object') {
        // Note: JSON stringify is not stable.
        return JSON.stringify(a) === JSON.stringify(b);
    }
    return false;
}


/***/ }),

/***/ 68433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ MAX_PERSONA_LIMIT),
/* harmony export */   "N": () => (/* binding */ formatPersonaFingerprint)
/* harmony export */ });
function formatPersonaFingerprint(fingerprint, size = 0) {
    if (size === 0) return fingerprint;
    return `${fingerprint.substr(0, 2 + size)}...${fingerprint.substr(-size)}`;
}
const MAX_PERSONA_LIMIT = 10;


/***/ }),

/***/ 67391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ChainIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30232);



const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        point: {
            width: 12.5,
            height: 12.5,
            borderRadius: 6.25,
            margin: 3.75
        },
        border: {
            border: `1px solid ${theme.palette.background.paper}`
        }
    })
);
const ChainIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ color , size =12.5  })=>{
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.point,
        style: {
            width: size,
            height: size,
            backgroundColor: color
        }
    });
});


/***/ }),

/***/ 67406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ MiniNetworkSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32831);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37731);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(867);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85139);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30232);
/* harmony import */ var _ChainIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67391);
/* harmony import */ var _WalletIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86898);






const AllNetworkButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(({ theme  })=>({
        display: 'inline-block',
        marginRight: theme.spacing(1),
        padding: 0,
        borderRadius: '50%',
        fontSize: 12,
        '&:hover': {
            boxShadow: 'none'
        },
        opacity: 0.5
    })
);
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme, props)=>({
        networkSelected: {
            opacity: 1,
            '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                right: (props.size - 4) / 2,
                display: 'inline-block',
                width: 4,
                height: 4,
                background: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.primary */ .ZN.primary,
                borderRadius: '50%'
            }
        },
        networkDisabled: {
            cursor: 'not-allowed',
            '&:hover': {
                opacity: 0.6
            }
        }
    })
);
const MiniNetworkSelector = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ hideAllNetworkButton =false , onSelect , networks =[] , selectedNetwork , disabledNonCurrentNetwork =false , size =30 ,  })=>{
    const { classes  } = useStyles({
        size: size
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        direction: "row",
        children: [
            !hideAllNetworkButton && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AllNetworkButton, {
                className: !selectedNetwork ? classes.networkSelected : '',
                sx: {
                    width: size,
                    height: size,
                    minWidth: size,
                    lineHeight: `${size}px`
                },
                onClick: ()=>onSelect(null)
                ,
                children: "ALL"
            }),
            networks.filter((x)=>x.isMainnet
            ).map((network)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    position: "relative",
                    mr: 1,
                    height: size,
                    onClick: ()=>!disabledNonCurrentNetwork && onSelect(network)
                    ,
                    sx: {
                        cursor: 'pointer',
                        opacity: '0.6',
                        ':hover': {
                            opacity: 1
                        },
                        userSelect: 'none',
                        lineHeight: `${size}px`
                    },
                    className: selectedNetwork?.ID === network.ID ? classes.networkSelected : disabledNonCurrentNetwork ? classes.networkDisabled : '',
                    children: network.isMainnet ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WalletIcon__WEBPACK_IMPORTED_MODULE_4__/* .WalletIcon */ .o, {
                        networkIcon: network.icon,
                        size: size
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ChainIcon__WEBPACK_IMPORTED_MODULE_3__/* .ChainIcon */ .f, {
                        color: network.iconColor,
                        size: size
                    })
                }, network.ID);
            })
        ]
    });
});


/***/ }),

/***/ 13111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ ReversedAddress)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67071);



const ReversedAddress = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ address , pluginId , domainSize , size =5  })=>{
    const { value: domain  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_2__/* .useReverseAddress */ .$q)(address, pluginId);
    const { Utils  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .dM)(pluginId);
    if (!domain || !Utils?.formatDomainName) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: Utils?.formatAddress?.(address, size) ?? address
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: Utils.formatDomainName(domain, domainSize)
    });
});


/***/ }),

/***/ 7849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ InjectedDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(53242);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(93854);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(927);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(38175);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(30397);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(17282);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(589);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../shared/src/locales/index.ts + 1 modules
var locales = __webpack_require__(29889);
// EXTERNAL MODULE: ../shared/src/contexts/base/index.ts + 1 modules
var base = __webpack_require__(40915);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(37214);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/ArrowBackRounded.js
var ArrowBackRounded = __webpack_require__(23485);
;// CONCATENATED MODULE: ../shared/src/contexts/components/DialogDismissIcon.tsx

// see https://github.com/import-js/eslint-plugin-import/issues/2288
// eslint-disable-next-line import/no-deprecated



function DialogDismissIcon(props) {
    const close = /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
        color: "inherit"
    });
    const back = /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackRounded/* default */.Z, {});
    // see https://github.com/import-js/eslint-plugin-import/issues/2288
    // eslint-disable-next-line import/no-deprecated
    const auto = (0,useMediaQuery/* default */.Z)(`(min-width: ${(0,useTheme/* default */.Z)().breakpoints.values.sm}px)`);
    if (!props.style || props.style === 'auto') return auto ? close : back;
    if (props.style === 'back') return back;
    return close;
}

;// CONCATENATED MODULE: ../shared/src/contexts/components/InjectedDialog.tsx









const useStyles = (0,entry/* makeStyles */.ZL)()((theme, { clean  })=>({
        dialogTitle: {
            padding: theme.spacing(1, 2),
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        dialogContent: {
            overscrollBehavior: 'contain'
        },
        dialogTitleTypography: {
            marginLeft: 6,
            verticalAlign: 'middle'
        },
        dialogCloseButton: {
            color: theme.palette.text.primary
        },
        paper: clean ? {
            width: 'auto',
            backgroundImage: 'none'
        } : {}
    })
);
function InjectedDialog(props) {
    const snsId = (0,shared_base_ui_src/* useValueRef */.E)(base/* sharedUINetworkIdentifier */.Xr);
    const overwrite = (0,shared_base_ui_src/* useValueRef */.E)(base/* sharedUIComponentOverwrite */.vU);
    props = overwrite.InjectedDialog?.props?.(props) ?? props;
    const clean = snsId === src/* EnhanceableSite.Minds */.Jk.Minds || snsId === src/* EnhanceableSite.Facebook */.Jk.Facebook;
    const { dialogActions , dialogCloseButton , dialogContent , dialogTitle , dialogTitleTypography , dialogBackdropRoot , container: container1 , ...dialogClasses } = (0,entry/* useStylesExtends */.Bc)(useStyles({
        clean
    }), props, overwrite.InjectedDialog?.classes);
    const t = (0,locales/* useSharedI18N */.B)();
    const fullScreen = (0,useMediaQuery/* default */.Z)((0,useTheme/* default */.Z)().breakpoints.down('xs'));
    const isDashboard = (0,src/* isDashboardPage */.K2)();
    const { children , open , disableBackdropClick , titleBarIconStyle , onClose , title , titleTail =null , disableTitleBorder , ...rest } = props;
    const actions = CopyElementWithNewProps(children, DialogActions/* default */.Z, {
        root: dialogActions
    });
    const content = CopyElementWithNewProps(children, DialogContent/* default */.Z, {
        root: dialogContent
    });
    const { extraProps , shouldReplaceExitWithBack , IncreaseStack  } = (0,entry/* useDialogStackActor */.tE)(open);
    return (0,entry/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(IncreaseStack, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Dialog/* default */.Z, {
                container: container,
                fullScreen: fullScreen,
                classes: dialogClasses,
                scroll: "paper",
                fullWidth: true,
                maxWidth: "sm",
                disableAutoFocus: true,
                disableEnforceFocus: true,
                onClose: (event, reason)=>{
                    if (reason === 'backdropClick' && disableBackdropClick) return;
                    onClose?.();
                },
                onBackdropClick: disableBackdropClick ? void 0 : onClose,
                BackdropProps: {
                    classes: {
                        root: dialogBackdropRoot
                    }
                },
                ...rest,
                ...extraProps,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_base_ui_src/* ErrorBoundary */.SV, {
                    children: [
                        title ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.Z, {
                            className: "dashboard-dialog-title-hook",
                            classes: {
                                root: dialogTitle
                            },
                            style: {
                                border: isDashboard || disableTitleBorder ? 'none' : undefined,
                                fontSize: isDashboard ? 24 : undefined
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                    size: "large",
                                    classes: {
                                        root: dialogCloseButton
                                    },
                                    "aria-label": t.dialog_dismiss(),
                                    onClick: onClose,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogDismissIcon, {
                                        style: shouldReplaceExitWithBack && !isDashboard ? 'back' : titleBarIconStyle
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: dialogTitleTypography,
                                    display: "inline",
                                    variant: "inherit",
                                    children: title
                                }),
                                titleTail
                            ]
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {}),
                        content,
                        actions
                    ]
                })
            })
        })
    );
}
function CopyElementWithNewProps(children, Target, // @ts-ignore
extraClasses) {
    return (react.Children.map(children, (child)=>child?.type === Target ? /*#__PURE__*/ (0,react.cloneElement)(child, {
            classes: (0,entry/* mergeClasses */.ze)(extraClasses, child.props.classes)
        }) : null
    ) || []).filter(Boolean);
}


/***/ }),

/***/ 9555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ addSharedI18N)
/* harmony export */ });
/* unused harmony export languages */
/* harmony import */ var _en_US_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90667);
/* harmony import */ var _ja_JP_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45558);
/* harmony import */ var _ko_KR_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93495);
/* harmony import */ var _qya_AA_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88807);
/* harmony import */ var _zh_CN_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83055);
/* harmony import */ var _zh_TW_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47359);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78144);
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts






const languages = {
    en: _en_US_json__WEBPACK_IMPORTED_MODULE_0__,
    ja: _ja_JP_json__WEBPACK_IMPORTED_MODULE_1__,
    ko: _ko_KR_json__WEBPACK_IMPORTED_MODULE_2__,
    qy: _qya_AA_json__WEBPACK_IMPORTED_MODULE_3__,
    'zh-CN': _zh_CN_json__WEBPACK_IMPORTED_MODULE_4__,
    zh: _zh_TW_json__WEBPACK_IMPORTED_MODULE_5__
};

const addSharedI18N = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .createI18NBundle */ .C9)('shared', languages);
// @ts-ignore
if (false) {}


/***/ }),

/***/ 9183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* reexport */ ButtonGroupTabList)
});

// UNUSED EXPORTS: ButtonTab

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(32831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
;// CONCATENATED MODULE: ../theme/src/Components/ButtonGroupTab/ButtonGroupTab.tsx



const TabButtonWrap = (0,styled/* default */.ZP)(Button/* default */.Z)(({ theme  })=>({
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        flex: 1
    })
);
/**
 * This is an alternative implementation of Tab component, to use with <ButtonGroupTabList>.
 */ const ButtonTab = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const activated = !!props.selected;
    const { onChange , onClick , value  } = props;
    const handleClick = (event)=>{
        if (!activated && onChange) onChange(event, String(value));
        if (onClick) onClick(event);
    };
    // TODO: replace secondary to correct theme color
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TabButtonWrap, {
        ref: ref,
        role: "tab",
        ...props,
        disableElevation: true,
        variant: "contained",
        color: activated ? 'primary' : 'secondary',
        "aria-selected": activated,
        onClick: handleClick,
        onChange: undefined
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(27536);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ButtonGroup/ButtonGroup.js + 1 modules
var ButtonGroup = __webpack_require__(49015);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.77_594218741661fc54915c073d63b4aa87/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(69157);
;// CONCATENATED MODULE: ../theme/src/Components/ButtonGroupTab/ButtonGroupTabList.tsx





/**
 * This component is like TabList + Tabs in the @mui/material.
 * It should be used with <ButtonGroupTab>.
 *
 * Warning: Only a few "value" and "label" props on the @mui/material <Tab> component will work.
 *
 * @example
 *  const [currentTab, onChange, tabs, setTab] = useTab('tab1', 'tab2', 'tab3')
 *  return (
 *      <TabContext value={currentTab}>
 *          <ButtonGroupTabList onChange={onChange}>
 *              <Tab label="Item One" value={tabs.tab1} />
 *              <Tab label="Item Two" value={tabs.tab2} />
 *              <Tab label="Item Three" value={tabs.tab3} />
 *          </ButtonGroupTabList>
 *          <TabPanel value={tabs.tab1}>Item One</TabPanel>
 *          <TabPanel value={tabs.tab2}>Item Two</TabPanel>
 *          <TabPanel value={tabs.tab3}>Item Three</TabPanel>
 *      </TabContext>
 *  )
 */ const ButtonGroupTabList = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const context = (0,TabContext/* useTabContext */._i)();
    if (context === null) throw new TypeError('No TabContext provided');
    const children = react.Children.map(props.children, (child)=>{
        if (!/*#__PURE__*/ (0,react.isValidElement)(child)) return child;
        const extra = {
            'aria-controls': (0,TabContext/* getPanelId */.uU)(context, child.props.value),
            id: (0,TabContext/* getTabId */.pQ)(context, child.props.value),
            selected: child.props.value === context.value,
            onChange: props.onChange
        };
        if (child.type === Tab/* default */.Z) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonTab, {
                value: child.props.value,
                ...extra,
                children: child.props.label
            });
        }
        return /*#__PURE__*/ (0,react.cloneElement)(child, extra);
    });
    const { onChange , ...rest } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonGroup/* default */.Z, {
        ...rest,
        ref: ref,
        role: "tablist",
        children: children
    });
});

;// CONCATENATED MODULE: ../theme/src/Components/ButtonGroupTab/index.ts




/***/ }),

/***/ 98408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ CountdownButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37731);



const CountdownButton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { duration =60 , children , repeatContent ='Resend' , onClick , disabled , ...others } = props;
    const [countdown, setCountdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const handleClick = (event)=>{
        setCountdown(duration);
        onClick?.(event);
    };
    const content = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (countdown) {
            return `${children} (${countdown})`;
        } else if (countdown === 0) {
            return repeatContent;
        } else {
            return children;
        }
    }, [
        countdown
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (countdown) {
            const timer = setTimeout(()=>{
                setCountdown(countdown - 1);
            }, 1000);
            return ()=>{
                clearTimeout(timer);
            };
        }
        return ()=>{};
    }, [
        countdown
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ref: ref,
        ...others,
        onClick: handleClick,
        disabled: !!countdown || disabled,
        children: content
    });
});


/***/ }),

/***/ 68381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ PhoneNumberField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85139);
/* harmony import */ var _UIHelper_makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21561);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27381);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86248);





const useStyles = (0,_UIHelper_makeStyles__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()({
    country: {
        width: '120px',
        marginRight: '10px'
    },
    phone: {
        width: '100%'
    }
});
const PhoneNumberField = ({ label , value , error , onBlur , countryPlaceholder ='+1' , onChange  })=>{
    const { classes  } = useStyles();
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(value.phone);
    const [countryCode, setCountryCode] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(value.country);
    const handleCountryCodeChange = (event)=>{
        const inputValue = event.target.value;
        const prefix = inputValue.startsWith('+') ? '' : '+';
        setCountryCode(prefix + inputValue);
        onChange?.({
            country: inputValue,
            phone: phone
        });
    };
    const handlePhoneChange = (event)=>{
        const inputValue = event.target.value;
        setPhone(inputValue);
        onChange?.({
            country: countryCode,
            phone: inputValue
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            label,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                sx: {
                    display: 'flex',
                    alignItems: 'flex-start'
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.country,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_2__/* .MaskTextField */ .F, {
                            value: countryCode,
                            onChange: handleCountryCodeChange,
                            placeholder: countryPlaceholder
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.phone,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_2__/* .MaskTextField */ .F, {
                            fullWidth: true,
                            value: phone,
                            onChange: handlePhoneChange,
                            onBlur: onBlur,
                            type: "text",
                            error: !!error,
                            helperText: error
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 68393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ SendingCodeField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85139);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(867);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27381);
/* harmony import */ var _CountdownButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98408);





const SendingCodeField = ({ onSend , sendButtonText ='Send' , label , errorMessage , onBlur , disabled =false , autoSend =false , onChange  })=>{
    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const sendButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        onChange?.(code);
    }, [
        code
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (autoSend) sendButton.current?.click();
    }, [
        autoSend
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    alignItems: "flex-start",
                    direction: "row",
                    spacing: 1,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            flex: 1,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_2__/* .MaskTextField */ .F, {
                                size: "small",
                                value: code,
                                onChange: (event)=>setCode(event.target.value)
                                ,
                                error: !!errorMessage,
                                helperText: errorMessage,
                                onBlur: ()=>onBlur?.(code)
                                ,
                                disabled: disabled
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CountdownButton__WEBPACK_IMPORTED_MODULE_3__/* .CountdownButton */ .q, {
                            ref: sendButton,
                            size: "medium",
                            sx: {
                                height: '40px',
                                width: '100px'
                            },
                            onClick: onSend,
                            disabled: disabled,
                            children: sendButtonText
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 3482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ MaskLightTheme),
/* harmony export */   "H": () => (/* binding */ MaskDarkTheme)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90696);
/* harmony import */ var _changes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89545);
/* harmony import */ var _component_changes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84865);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9084);
/* harmony import */ var _CSSVariables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36972);





const color = (mode, color1)=>({
        mode,
        primary: {
            main: color1.primary,
            contrastText: color1.primaryContrastText
        },
        secondary: {
            main: color1.primary,
            contrastText: color1.primaryContrastText
        },
        background: {
            paper: color1.primaryBackground,
            default: color1.secondaryBackground
        },
        error: {
            main: color1.redMain,
            contrastText: color1.redContrastText
        },
        success: {
            main: color1.greenMain
        },
        warning: {
            main: color1.orangeMain
        },
        divider: color1.divider,
        text: {
            primary: color1.textPrimary,
            secondary: color1.textSecondary
        }
    })
;
function MaskTheme(mode) {
    const colors = mode === 'dark' ? _CSSVariables__WEBPACK_IMPORTED_MODULE_2__/* .DarkColor */ .I3 : _CSSVariables__WEBPACK_IMPORTED_MODULE_2__/* .LightColor */ .Ci;
    const theme = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        palette: color(mode, colors)
    }, ...Object.values(_changes__WEBPACK_IMPORTED_MODULE_0__).map(applyColors), ...Object.values(_component_changes__WEBPACK_IMPORTED_MODULE_1__).map(applyColors));
    return (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(theme);
    function applyColors(x) {
        if (typeof x === 'function') return x(mode, colors);
        return x;
    }
}
const MaskLightTheme = MaskTheme('light');
const MaskDarkTheme = MaskTheme('dark');


/***/ }),

/***/ 61289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ useSystemPreferencePalette)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93854);

function useSystemPreferencePalette() {
    return (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('(prefers-color-scheme: dark)') ? 'dark' : 'light';
}


/***/ }),

/***/ 55678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CS": () => (/* binding */ resolveLinkOnExplorer),
/* harmony export */   "Hw": () => (/* binding */ resolveProviderName),
/* harmony export */   "IH": () => (/* binding */ resolveProviderHomeLink),
/* harmony export */   "OC": () => (/* binding */ resolveNetworkAddressPrefix),
/* harmony export */   "Po": () => (/* binding */ resolveChainName),
/* harmony export */   "QN": () => (/* binding */ resolveOpenSeaLink),
/* harmony export */   "Q_": () => (/* binding */ resolveCollectibleLink),
/* harmony export */   "V3": () => (/* binding */ resolveAddressLinkOnExplorer),
/* harmony export */   "YU": () => (/* binding */ resolveProviderInjectedKey),
/* harmony export */   "Yx": () => (/* binding */ resolveIPFSLinkFromURL),
/* harmony export */   "_E": () => (/* binding */ resolveChainColor),
/* harmony export */   "dC": () => (/* binding */ resolveProviderShortenLink),
/* harmony export */   "hX": () => (/* binding */ resolveProviderDownloadLink),
/* harmony export */   "nW": () => (/* binding */ resolveNetworkName),
/* harmony export */   "r5": () => (/* binding */ resolveIPFSLink),
/* harmony export */   "r_": () => (/* binding */ resolveChainFullName),
/* harmony export */   "sJ": () => (/* binding */ resolveDomainLink),
/* harmony export */   "vy": () => (/* binding */ resolveBlockLinkOnExplorer),
/* harmony export */   "yW": () => (/* binding */ resolveTokenLinkOnExplorer),
/* harmony export */   "z4": () => (/* binding */ resolveTransactionLinkOnExplorer)
/* harmony export */ });
/* unused harmony exports resolveCollectibleProviderLink, resolveCollectibleAssetLink */
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28807);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65506);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36803);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80526);




const resolveProviderName = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MaskWallet */ .lP.MaskWallet]: 'Mask Network',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MetaMask */ .lP.MetaMask]: 'MetaMask',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletConnect */ .lP.WalletConnect]: 'WalletConnect',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.CustomNetwork */ .lP.CustomNetwork]: 'CustomNetwork',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Coin98 */ .lP.Coin98]: 'Coin98',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletLink */ .lP.WalletLink]: 'Coinbase',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MathWallet */ .lP.MathWallet]: 'MathWallet',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Fortmatic */ .lP.Fortmatic]: 'Fortmatic'
}, 'Unknown Network');
const resolveProviderShortenLink = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MaskWallet */ .lP.MaskWallet]: 'Mask.io',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MetaMask */ .lP.MetaMask]: 'Metamask.io',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletConnect */ .lP.WalletConnect]: 'Walletconnect.com',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.CustomNetwork */ .lP.CustomNetwork]: 'Website',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Coin98 */ .lP.Coin98]: 'Coin98.com',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletLink */ .lP.WalletLink]: 'Walletlink.org',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MathWallet */ .lP.MathWallet]: 'Mathwallet.org',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Fortmatic */ .lP.Fortmatic]: 'Fortmatic.com'
}, 'website');
const resolveProviderHomeLink = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MaskWallet */ .lP.MaskWallet]: 'https://mask.io',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MetaMask */ .lP.MetaMask]: 'https://metamask.io',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletConnect */ .lP.WalletConnect]: 'https://walletconnect.com',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.CustomNetwork */ .lP.CustomNetwork]: '',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Coin98 */ .lP.Coin98]: 'https://coin98.com',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletLink */ .lP.WalletLink]: 'https://walletlink.org',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MathWallet */ .lP.MathWallet]: 'https://mathwallet.org',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Fortmatic */ .lP.Fortmatic]: 'https://fortmatic.com'
}, '');
const resolveProviderDownloadLink = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MaskWallet */ .lP.MaskWallet]: 'https://mask.io/download-links',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MetaMask */ .lP.MetaMask]: 'https://metamask.io/download.html',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletConnect */ .lP.WalletConnect]: '',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Coin98 */ .lP.Coin98]: 'https://coin98insights.com/introduction-to-coin98-wallet-extension',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletLink */ .lP.WalletLink]: 'https://wallet.coinbase.com/',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MathWallet */ .lP.MathWallet]: 'https://mathwallet.org/en-us/#extension',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Fortmatic */ .lP.Fortmatic]: '',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.CustomNetwork */ .lP.CustomNetwork]: ''
}, '');
const resolveProviderInjectedKey = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MaskWallet */ .lP.MaskWallet]: 'isMaskWallet',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MetaMask */ .lP.MetaMask]: 'isMetaMask',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletConnect */ .lP.WalletConnect]: '',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MathWallet */ .lP.MathWallet]: 'isMathWallet',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Coin98 */ .lP.Coin98]: 'isCoin98',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletLink */ .lP.WalletLink]: 'isWalletLink',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Fortmatic */ .lP.Fortmatic]: '',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.CustomNetwork */ .lP.CustomNetwork]: ''
}, '');
const resolveNetworkAddressPrefix = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Ethereum */ .td.Ethereum]: 'ethereum',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Binance */ .td.Binance]: 'binance',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Polygon */ .td.Polygon]: 'polygon',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Arbitrum */ .td.Arbitrum]: 'arbitrum',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.xDai */ .td.xDai]: 'xdai',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Avalanche */ .td.Avalanche]: 'avalanche',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Celo */ .td.Celo]: 'celo',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Fantom */ .td.Fantom]: 'fantom',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Aurora */ .td.Aurora]: 'Aurora',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Conflux */ .td.Conflux]: 'conflux'
}, 'ethereum');
const resolveNetworkName = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Ethereum */ .td.Ethereum]: 'Ethereum',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Binance */ .td.Binance]: 'Binance Smart Chain',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Polygon */ .td.Polygon]: 'Polygon',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Arbitrum */ .td.Arbitrum]: 'Arbitrum',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.xDai */ .td.xDai]: 'xDai',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Avalanche */ .td.Avalanche]: 'Avalanche',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Celo */ .td.Celo]: 'Celo',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Fantom */ .td.Fantom]: 'Fantom',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Aurora */ .td.Aurora]: 'Aurora',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Conflux */ .td.Conflux]: 'Conflux'
}, 'Unknown');
function resolveChainName(chainId) {
    const chainDetailed = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getChainDetailed */ .$G)(chainId);
    return chainDetailed?.name ?? 'Unknown';
}
function resolveChainFullName(chainId) {
    const chainDetailed = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getChainDetailed */ .$G)(chainId);
    return chainDetailed?.fullName ?? 'Unknown';
}
const resolveChainColor = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet]: 'rgb(28, 104, 243)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Ropsten */ .a_.Ropsten]: 'rgb(255, 65, 130)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Kovan */ .a_.Kovan]: 'rgb(133, 89,255)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Rinkeby */ .a_.Rinkeby]: 'rgb(133, 89, 255)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Gorli */ .a_.Gorli]: 'rgb(48, 153, 242)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.BSC */ .a_.BSC]: 'rgb(240, 185, 10)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.BSCT */ .a_.BSCT]: 'rgb(240, 185, 10)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Matic */ .a_.Matic]: 'rgb(119, 62, 225)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mumbai */ .a_.Mumbai]: 'rgb(130, 71, 229)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Arbitrum */ .a_.Arbitrum]: 'rgb(36, 150, 238)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Arbitrum_Rinkeby */ .a_.Arbitrum_Rinkeby]: 'rgb(36, 150, 238)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.xDai */ .a_.xDai]: 'rgb(73, 169, 166)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Avalanche */ .a_.Avalanche]: 'rgb(232, 65, 66)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Avalanche_Fuji */ .a_.Avalanche_Fuji]: 'rgb(232, 65, 66)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Celo */ .a_.Celo]: 'rgb(53, 208, 127)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Fantom */ .a_.Fantom]: 'rgb(19, 181, 236)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Aurora */ .a_.Aurora]: 'rgb(112, 212, 74)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Conflux */ .a_.Conflux]: 'rgb(24, 163, 138)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Aurora_Testnet */ .a_.Aurora_Testnet]: 'rgb(112, 212, 74)'
}, 'rgb(214, 217, 220)');
function resolveLinkOnExplorer(chainId) {
    const chainDetailed = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getChainDetailed */ .$G)(chainId);
    if (!chainDetailed) return '';
    return chainDetailed.explorers?.[0]?.url ?? chainDetailed.infoURL;
}
function resolveTransactionLinkOnExplorer(chainId, tx) {
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()(resolveLinkOnExplorer(chainId), '/tx/:tx', {
        tx
    });
}
function resolveTokenLinkOnExplorer({ chainId , address  }) {
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()(resolveLinkOnExplorer(chainId), '/token/:address', {
        address
    });
}
function resolveAddressLinkOnExplorer(chainId, address) {
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()(resolveLinkOnExplorer(chainId), '/address/:address', {
        address
    });
}
function resolveBlockLinkOnExplorer(chainId, block) {
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()(resolveLinkOnExplorer(chainId), '/block/:block', {
        block
    });
}
// TODO check ipfs inside before resolving
function resolveIPFSLink(ipfs) {
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()('https://coldcdn.com/api/cdn/mipfsygtms/ipfs/:ipfs', {
        ipfs
    });
}
function resolveIPFSLinkFromURL(url) {
    if (!url.startsWith('ipfs://')) return url;
    return resolveIPFSLink(url.replace(/^ipfs:\/\/(ipfs\/)?/, ''));
}
function resolveDomainLink(domain) {
    if (!domain) return '';
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()('https://app.ens.domains/name/:domain/details', {
        domain
    });
}
function resolveCollectibleProviderLink(chainId, provider) {
    switch(provider){
        case NonFungibleAssetProvider.OPENSEA:
            if (chainId === ChainId.Rinkeby) return 'https://testnets.opensea.io';
            return 'https://opensea.io';
        case NonFungibleAssetProvider.RARIBLE:
            return 'https://rarible.com';
        case NonFungibleAssetProvider.NFTSCAN:
            return 'https://nftscan.com';
        case NonFungibleAssetProvider.ZORA:
            return 'https://zora.co';
        default:
            unreachable(provider);
    }
}
function resolveCollectibleAssetLink(chainId, provider) {
    switch(provider){
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.OPENSEA */ .pI.OPENSEA:
            if (chainId === _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Rinkeby */ .a_.Rinkeby) return 'https://testnets.opensea.io/assets';
            if (chainId === _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Matic */ .a_.Matic) return 'https://opensea.io/assets/matic';
            return 'https://opensea.io/assets';
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.RARIBLE */ .pI.RARIBLE:
            return '';
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.NFTSCAN */ .pI.NFTSCAN:
            return '';
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.ZORA */ .pI.ZORA:
            return '';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__/* .unreachable */ .t1)(provider);
    }
}
function resolveCollectibleLink(chainId, provider, { contractDetailed: { address  } , tokenId  }) {
    switch(provider){
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.OPENSEA */ .pI.OPENSEA:
            return urlcat__WEBPACK_IMPORTED_MODULE_0___default()(resolveCollectibleAssetLink(chainId, provider), '/:address/:tokenId', {
                address,
                tokenId
            });
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.RARIBLE */ .pI.RARIBLE:
            return '';
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.NFTSCAN */ .pI.NFTSCAN:
            return '';
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.ZORA */ .pI.ZORA:
            return '';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__/* .unreachable */ .t1)(provider);
    }
}
function resolveOpenSeaLink(address, tokenId) {
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()('https://opensea.io/assets/:address/:tokenId', {
        address,
        tokenId
    });
}


/***/ }),

/***/ 65506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Am": () => (/* binding */ FungibleAssetProvider),
/* harmony export */   "Dr": () => (/* binding */ EthereumTokenType),
/* harmony export */   "Ej": () => (/* binding */ DebankTransactionDirection),
/* harmony export */   "Lv": () => (/* binding */ AddressNameType),
/* harmony export */   "OO": () => (/* binding */ EthereumErrorType),
/* harmony export */   "Ow": () => (/* binding */ LockStatus),
/* harmony export */   "TP": () => (/* binding */ GasOption),
/* harmony export */   "V2": () => (/* binding */ CurrencyType),
/* harmony export */   "W8": () => (/* binding */ EthereumMethodType),
/* harmony export */   "Wv": () => (/* binding */ EthereumRpcType),
/* harmony export */   "a_": () => (/* binding */ ChainId),
/* harmony export */   "g8": () => (/* binding */ TransactionStatusType),
/* harmony export */   "iE": () => (/* binding */ TransactionEventType),
/* harmony export */   "iU": () => (/* binding */ TransactionType),
/* harmony export */   "lP": () => (/* binding */ ProviderType),
/* harmony export */   "n$": () => (/* binding */ TransactionStateType),
/* harmony export */   "pI": () => (/* binding */ NonFungibleAssetProvider),
/* harmony export */   "sl": () => (/* binding */ FilterTransactionType),
/* harmony export */   "so": () => (/* binding */ ZerionTransactionDirection),
/* harmony export */   "td": () => (/* binding */ NetworkType)
/* harmony export */ });
/* unused harmony export DomainProvider */
var CurrencyType;
(function(CurrencyType) {
    CurrencyType["USD"] = 'usd';
})(CurrencyType || (CurrencyType = {}));
var ChainId;
(function(ChainId) {
    ChainId[ChainId["Mainnet"] = 1] = "Mainnet";
    ChainId[ChainId["Ropsten"] = 3] = "Ropsten";
    ChainId[ChainId["Rinkeby"] = 4] = "Rinkeby";
    ChainId[ChainId["Gorli"] = 5] = "Gorli";
    ChainId[ChainId["Kovan"] = 42] = "Kovan";
    ChainId[ChainId[// BSC
    "BSC"] = 56] = "BSC";
    ChainId[ChainId["BSCT"] = 97] = "BSCT";
    ChainId[ChainId[// Matic
    "Matic"] = 137] = "Matic";
    ChainId[ChainId["Mumbai"] = 80001] = "Mumbai";
    ChainId[ChainId[// Arbitrum
    "Arbitrum"] = 42161] = "Arbitrum";
    ChainId[ChainId["Arbitrum_Rinkeby"] = 421611] = "Arbitrum_Rinkeby";
    ChainId[ChainId[// xDai
    "xDai"] = 100] = "xDai";
    ChainId[ChainId[// Avalanche
    "Avalanche"] = 43114] = "Avalanche";
    ChainId[ChainId["Avalanche_Fuji"] = 43113] = "Avalanche_Fuji";
    ChainId[ChainId[// Celo
    "Celo"] = 42220] = "Celo";
    ChainId[ChainId[// Fantom
    "Fantom"] = 250] = "Fantom";
    ChainId[ChainId[// Aurora
    "Aurora"] = 1313161554] = "Aurora";
    ChainId[ChainId["Aurora_Testnet"] = 1313161555] = "Aurora_Testnet";
    ChainId[ChainId[// Fuse
    "Fuse"] = 122] = "Fuse";
    ChainId[ChainId[// Boba
    "Boba"] = 288] = "Boba";
    ChainId[ChainId[// Metis
    "Metis"] = 1088] = "Metis";
    ChainId[ChainId[// Optimistic
    "Optimistic"] = 10] = "Optimistic";
    ChainId[ChainId[// Conflux
    "Conflux"] = 1030] = "Conflux";
})(ChainId || (ChainId = {}));
var LockStatus;
(function(LockStatus) {
    LockStatus[LockStatus["INIT"] = 0] = "INIT";
    LockStatus[LockStatus["UNLOCK"] = 1] = "UNLOCK";
    LockStatus[LockStatus["LOCKED"] = 2] = "LOCKED";
})(LockStatus || (LockStatus = {}));
var EthereumTokenType;
(function(EthereumTokenType) {
    EthereumTokenType[EthereumTokenType["Native"] = 0] = "Native";
    EthereumTokenType[EthereumTokenType["ERC20"] = 1] = "ERC20";
    EthereumTokenType[EthereumTokenType["ERC721"] = 2] = "ERC721";
    EthereumTokenType[EthereumTokenType["ERC1155"] = 3] = "ERC1155";
})(EthereumTokenType || (EthereumTokenType = {}));
var EthereumMethodType;
(function(EthereumMethodType) {
    EthereumMethodType["WATCH_ASSET"] = 'wallet_watchAsset';
    EthereumMethodType["WATCH_ASSET_LEGACY"] = 'metamask_watchAsset';
    EthereumMethodType["PERSONAL_SIGN"] = 'personal_sign';
    EthereumMethodType["WALLET_ADD_ETHEREUM_CHAIN"] = 'wallet_addEthereumChain';
    EthereumMethodType["WALLET_SWITCH_ETHEREUM_CHAIN"] = 'wallet_switchEthereumChain';
    EthereumMethodType["ETH_CHAIN_ID"] = 'eth_chainId';
    EthereumMethodType["ETH_ACCOUNTS"] = 'eth_accounts';
    EthereumMethodType["ETH_REQUEST_ACCOUNTS"] = 'eth_requestAccounts';
    EthereumMethodType["ETH_SEND_TRANSACTION"] = 'eth_sendTransaction';
    EthereumMethodType["ETH_SEND_RAW_TRANSACTION"] = 'eth_sendRawTransaction';
    EthereumMethodType["ETH_GET_CODE"] = 'eth_getCode';
    EthereumMethodType["ETH_GAS_PRICE"] = 'eth_gasPrice';
    EthereumMethodType["ETH_BLOCK_NUMBER"] = 'eth_blockNumber';
    EthereumMethodType["ETH_GET_BALANCE"] = 'eth_getBalance';
    EthereumMethodType["ETH_GET_TRANSACTION_BY_HASH"] = 'eth_getTransactionByHash';
    EthereumMethodType["ETH_GET_TRANSACTION_RECEIPT"] = 'eth_getTransactionReceipt';
    EthereumMethodType["ETH_GET_TRANSACTION_COUNT"] = 'eth_getTransactionCount';
    EthereumMethodType["ETH_GET_FILTER_CHANGES"] = 'eth_getFilterChanges';
    EthereumMethodType["ETH_NEW_PENDING_TRANSACTION_FILTER"] = 'eth_newPendingTransactionFilter';
    EthereumMethodType["ETH_ESTIMATE_GAS"] = 'eth_estimateGas';
    EthereumMethodType["ETH_CALL"] = 'eth_call';
    EthereumMethodType["ETH_SIGN"] = 'eth_sign';
    EthereumMethodType["ETH_DECRYPT"] = 'eth_decrypt';
    EthereumMethodType["ETH_SIGN_TYPED_DATA"] = 'eth_signTypedData_v4';
    EthereumMethodType["ETH_SIGN_TRANSACTION"] = 'eth_signTransaction';
    EthereumMethodType["ETH_GET_LOGS"] = 'eth_getLogs';
    EthereumMethodType["ETH_GET_ENCRYPTION_PUBLIC_KEY"] = 'eth_getEncryptionPublicKey';
    EthereumMethodType[// only for mask
    "MASK_GET_TRANSACTION_RECEIPT"] = 'mask_getTransactionReceipt';
    EthereumMethodType["MASK_REPLACE_TRANSACTION"] = 'mask_replaceTransaction';
    EthereumMethodType["MASK_LOGIN_FORTMATIC"] = 'mask_loginFortmatic';
    EthereumMethodType["MASK_LOGOUT_FORTMATIC"] = 'mask_logoutFortmatic';
})(EthereumMethodType || (EthereumMethodType = {}));
var EthereumErrorType;
(function(EthereumErrorType) {
    EthereumErrorType["ERR_SIGN_TRANSACTION"] = 'Failed to sign transaction.';
    EthereumErrorType["ERR_SEND_TRANSACTION"] = 'Failed to send transaction.';
    EthereumErrorType["ERR_SIGN_MESSAGE"] = 'Failed to sign message.';
})(EthereumErrorType || (EthereumErrorType = {}));
var EthereumRpcType;
(function(EthereumRpcType) {
    EthereumRpcType[// transaction
    "CANCEL"] = 'cancel';
    EthereumRpcType["RETRY"] = 'retry';
    EthereumRpcType[// contract interaction
    "SEND_ETHER"] = 'sendEther';
    EthereumRpcType["CONTRACT_INTERACTION"] = 'contractInteraction';
    EthereumRpcType["CONTRACT_DEPLOYMENT"] = 'contractDeployment';
    EthereumRpcType[// asset
    "WATCH_ASSET"] = 'wallet_watchAsset';
    EthereumRpcType[// wallet
    "WALLET_SWITCH_ETHEREUM_CHAIN"] = 'wallet_switchEthereumChain';
    EthereumRpcType[// sign
    "SIGN"] = 'eth_sign';
    EthereumRpcType["SIGN_TYPED_DATA"] = 'eth_signTypedData_v4';
    EthereumRpcType[// decrypt
    "ETH_DECRYPT"] = 'eth_decrypt';
    EthereumRpcType["ETH_GET_ENCRYPTION_PUBLIC_KEY"] = 'eth_getEncryptionPublicKey';
})(EthereumRpcType || (EthereumRpcType = {}));
var TransactionEventType;
(function(TransactionEventType) {
    TransactionEventType["TRANSACTION_HASH"] = 'transactionHash';
    TransactionEventType["RECEIPT"] = 'receipt';
    TransactionEventType["CONFIRMATION"] = 'confirmation';
    TransactionEventType["ERROR"] = 'error';
})(TransactionEventType || (TransactionEventType = {}));
var TransactionStatusType;
(function(TransactionStatusType) {
    TransactionStatusType[TransactionStatusType["NOT_DEPEND"] = 0] = "NOT_DEPEND";
    TransactionStatusType[TransactionStatusType["SUCCEED"] = 1] = "SUCCEED";
    TransactionStatusType[TransactionStatusType["FAILED"] = 2] = "FAILED";
    TransactionStatusType[TransactionStatusType["CANCELLED"] = 3] = "CANCELLED";
})(TransactionStatusType || (TransactionStatusType = {}));
var DomainProvider;
(function(DomainProvider) {
    DomainProvider["ENS"] = "ENS";
    DomainProvider["UNS"] = "UNS";
})(DomainProvider || (DomainProvider = {}));
var FilterTransactionType;
(function(FilterTransactionType) {
    FilterTransactionType["ALL"] = 'all';
    FilterTransactionType["SEND"] = 'send';
    FilterTransactionType["RECEIVE"] = 'receive';
    FilterTransactionType["CREATE_RED_PACKET"] = 'create_red_packet';
    FilterTransactionType["FILL_POOL"] = 'fill_pool';
})(FilterTransactionType || (FilterTransactionType = {}));
var TransactionType;
(function(TransactionType) {
    TransactionType["SEND"] = 'Send';
    TransactionType["SWAP"] = 'swap';
    TransactionType["RECEIVE"] = 'Receive';
    TransactionType["TRANSFER"] = 'transfer';
    TransactionType["CREATE_RED_PACKET"] = 'create_red_packet';
    TransactionType["FILL_POOL"] = 'fill_pool';
    TransactionType["CLAIM"] = 'claim';
    TransactionType["REFUND"] = 'refund';
})(TransactionType || (TransactionType = {}));
var DebankTransactionDirection;
(function(DebankTransactionDirection) {
    DebankTransactionDirection["SEND"] = 'send';
    DebankTransactionDirection["RECEIVE"] = 'receive';
})(DebankTransactionDirection || (DebankTransactionDirection = {}));
var ZerionTransactionDirection;
(function(ZerionTransactionDirection) {
    ZerionTransactionDirection["IN"] = 'in';
    ZerionTransactionDirection["OUT"] = 'out';
    ZerionTransactionDirection["SELF"] = 'self';
})(ZerionTransactionDirection || (ZerionTransactionDirection = {}));
var AddressNameType;
(function(AddressNameType) {
    AddressNameType["ADDRESS"] = "ADDRESS";
    AddressNameType["ENS"] = "ENS";
    AddressNameType["UNS"] = "UNS";
    AddressNameType["DNS"] = "DNS";
    AddressNameType["RSS3"] = "RSS3";
    AddressNameType["GUN"] = "GUN";
    AddressNameType["THE_GRAPH"] = "THE_GRAPH";
    AddressNameType["TWITTER_BLUE"] = "TWITTER_BLUE";
})(AddressNameType || (AddressNameType = {}));
var GasOption;
(function(GasOption) {
    GasOption["Low"] = 'low';
    GasOption["Medium"] = 'medium';
    GasOption["High"] = 'high';
})(GasOption || (GasOption = {}));
var TransactionStateType;
(function(TransactionStateType) {
    TransactionStateType[TransactionStateType["UNKNOWN"] = 0] = "UNKNOWN";
    TransactionStateType[TransactionStateType[/** Wait for external provider */ "WAIT_FOR_CONFIRMING"] = 1] = "WAIT_FOR_CONFIRMING";
    TransactionStateType[TransactionStateType[/** Hash is available */ "HASH"] = 2] = "HASH";
    TransactionStateType[TransactionStateType[/** Receipt is available */ "RECEIPT"] = 3] = "RECEIPT";
    TransactionStateType[TransactionStateType[/** Confirmed or Reverted */ "CONFIRMED"] = 4] = "CONFIRMED";
    TransactionStateType[TransactionStateType[/** Fail to send */ "FAILED"] = 5] = "FAILED";
})(TransactionStateType || (TransactionStateType = {}));
var NetworkType;
(function(NetworkType) {
    NetworkType["Ethereum"] = "Ethereum";
    NetworkType["Binance"] = "Binance";
    NetworkType["Polygon"] = "Polygon";
    NetworkType["Arbitrum"] = "Arbitrum";
    NetworkType["xDai"] = "xDai";
    NetworkType["Celo"] = "Celo";
    NetworkType["Fantom"] = "Fantom";
    NetworkType["Aurora"] = "Aurora";
    NetworkType["Avalanche"] = "Avalanche";
    NetworkType["Boba"] = "Boba";
    NetworkType["Fuse"] = "Fuse";
    NetworkType["Metis"] = "Metis";
    NetworkType["Optimistic"] = "Optimistic";
    NetworkType["Conflux"] = "Conflux";
})(NetworkType || (NetworkType = {}));
var ProviderType;
(function(ProviderType) {
    ProviderType["MaskWallet"] = 'Maskbook';
    ProviderType["MetaMask"] = "MetaMask";
    ProviderType["WalletConnect"] = "WalletConnect";
    ProviderType["Fortmatic"] = "Fortmatic";
    ProviderType["Coin98"] = "Coin98";
    ProviderType["MathWallet"] = "MathWallet";
    ProviderType["WalletLink"] = "WalletLink";
    ProviderType["CustomNetwork"] = "CustomNetwork";
})(ProviderType || (ProviderType = {}));
var FungibleAssetProvider;
(function(FungibleAssetProvider) {
    FungibleAssetProvider["ZERION"] = 'Zerion';
    FungibleAssetProvider["DEBANK"] = 'Debank';
})(FungibleAssetProvider || (FungibleAssetProvider = {}));
var NonFungibleAssetProvider;
(function(NonFungibleAssetProvider) {
    NonFungibleAssetProvider["OPENSEA"] = 'OpenSea';
    NonFungibleAssetProvider["RARIBLE"] = 'Rarible';
    NonFungibleAssetProvider["NFTSCAN"] = 'NFTScan';
    NonFungibleAssetProvider["ZORA"] = 'Zora';
})(NonFungibleAssetProvider || (NonFungibleAssetProvider = {}));


/***/ }),

/***/ 28807:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "VJ": () => (/* reexport */ abortSignalTimeout/* abortSignalTimeout */.V),
  "Cq": () => (/* reexport */ typescript/* assertNonNull */.Cq),
  "n5": () => (/* reexport */ blob/* blobToDataURL */.n),
  "Gx": () => (/* reexport */ blob/* blobToText */.G),
  "dq": () => (/* reexport */ combineAbortSignal/* combineAbortSignal */.d),
  "v_": () => (/* reexport */ ecmascript/* concatArrayBuffer */.v_),
  "xe": () => (/* reexport */ encode_text_arraybuffer/* decodeArrayBuffer */.xe),
  "rj": () => (/* reexport */ encode_text_arraybuffer/* decodeText */.rj),
  "PQ": () => (/* reexport */ ecmascript/* defer */.PQ),
  "gw": () => (/* reexport */ delay/* delay */.g),
  "ll": () => (/* reexport */ encode_text_arraybuffer/* encodeArrayBuffer */.ll),
  "YT": () => (/* reexport */ encode_text_arraybuffer/* encodeText */.YT),
  "ky": () => (/* reexport */ media/* findAvailableImageURL */.ky),
  "sS": () => (/* reexport */ media/* formatFileSize */.sS),
  "Yl": () => (/* reexport */ typescript/* getEnumAsArray */.Yl),
  "J3": () => (/* reexport */ ecmascript/* memoizePromise */.J3),
  "P": () => (/* reexport */ typescript/* safeUnreachable */.P),
  "Vs": () => (/* reexport */ timeout/* timeout */.V),
  "t1": () => (/* reexport */ typescript/* unreachable */.t1),
  "uL": () => (/* reexport */ document_readyState/* waitDocumentReadyState */.u)
});

// UNUSED EXPORTS: detectAudioSupport, detectImageSupport, detectVideoSupport, getDimensionAsJPEG, getDimensionAsPNG, isArrayBufferEqual, isNonNull

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/ecmascript/index.js + 3 modules
var ecmascript = __webpack_require__(20785);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/media/index.js + 3 modules
var media = __webpack_require__(78183);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/typescript/index.js
var typescript = __webpack_require__(47855);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/abortSignalTimeout.js
var abortSignalTimeout = __webpack_require__(47162);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/blob.js
var blob = __webpack_require__(89810);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/combineAbortSignal.js
var combineAbortSignal = __webpack_require__(26998);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/delay.js
var delay = __webpack_require__(89086);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/document.readyState.js
var document_readyState = __webpack_require__(78827);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/encode-text-arraybuffer.js
var encode_text_arraybuffer = __webpack_require__(32291);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/timeout.js
var timeout = __webpack_require__(50579);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/index.js







//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 89810:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ blobToText),
/* harmony export */   "n": () => (/* binding */ blobToDataURL)
/* harmony export */ });
const blobToDataURL = factory('readAsDataURL');
const blobToText = factory('readAsText');
function factory(method) {
    return (blob) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener('error', () => {
                reject(reader.error);
            });
            reader.addEventListener('load', () => {
                resolve(reader.result);
            });
            reader[method](blob);
        });
    };
}
//# sourceMappingURL=blob.js.map

/***/ }),

/***/ 62012:
/***/ ((module) => {

module.exports = JSON.parse('{"about":"About","wallets":"Wallets","personas":"Personas","persona":"Persona","refresh":"Refresh","next":"Next","cancel":"Cancel","back":"Back","agree":"Agree","confirm":"Confirm","verify":"Verify","go_back":"Go back","connect":"Connect","searching":"Searching","restore":"Restore","save":"Save","manage":"Manage","recovery":"Recovery","successful":"Successful","close":"Close","send":"Send","resend":"Resend","print":"Print","download":"Download","print_preview":"Print Preview","download_preview":"Download Preview","confirm_password":"Confirm Password","about_dialog_license":"License: ","footer_bounty_list":"Bounty List","about_dialog_source_code":"Source Code: ","about_dialog_feedback":"Feedback: ","about_dialog_touch":"Get in touch","about_dialog_description":"Mask Network is the portal to the new, open internet. Mask allows you to send encrypted posts on social networks. We provide more functions such as sending encrypted lucky drops, purchasing cryptocurrencies, file service, etc.","setup_page_title":"Welcome to Mask Network","setup_page_description":"Encrypt your posts & chats on social networks, allow only your friends to decrypt.","setup_page_create_account_title":"Create an Identity","setup_page_create_account_subtitle":"Create your digital identity system, explore Web 3.0","setup_page_create_account_button":"Create","setup_page_create_restore_title":"Restoring from Identity or Backups","setup_page_create_restore_subtitle":"Restoring from identity & historical backups.","setup_page_create_restore_button":"Recovery or Sign In","create_account_mask_id":"MASK ID","create_account_private_key":"Private Key","create_account_identity_id":"Identity ID","create_account_identity_title":"Create an Identity for Mask Network","create_account_sign_in_button":"Recovery","create_account_persona_exists":"Persona already exists.","create_account_mnemonic_download_or_print":"I have kept my identity code safely.","create_account_preview_tip":"This QR code contains your identity code, please keep it safely. You can scan QR code to login your persona in Mask App.","create_account_mnemonic_confirm_failed":"Incorrect identity code","create_account_connect_social_media_button":"Create","create_account_connect_social_media":"Connect to {{type}}","create_account_persona_title":"Welcome to Mask Network","create_account_persona_subtitle":"You can create personas and connect social accounts","create_account_persona_successfully":"Create persona successfully","create_account_connect_social_media_title":"Connect Social Media","create_account_failed":"Create Account Failed","sign_in_account_identity_title":"Recover your persona","sign_in_account_tab_identity":"Identity","sign_in_account_sign_up_button":"Sign Up","sign_in_account_identity_warning":"The digital identity code can only recover your digital identity. It can encrypt and decrypt the social information signed and sent by this digital identity.","sign_in_account_private_key_placeholder":"Input your Private Key","sign_in_account_private_key_error":"Incorrect Private Key","sign_in_account_private_key_persona_not_found":"Can\'t find persona","sign_in_account_private_key_warning":"The private key of your identity code can only recover your persona. It can encrypt and decrypt the social information signed and sent by your persona.","sign_in_account_mnemonic_confirm_failed":"Incorrect identity","sign_in_account_cloud_backup_send_email_success":"Verification code was sent to your {{type}}. Please check your {{type}}.","sign_in_account_local_backup_warning":"Local backup can recover all the data that has been stored locally.","sign_in_account_local_backup_payment_password":"Payment Password","sign_in_account_local_backup_file_drag":"Please click or drag the file here","sign_in_account_cloud_backup_warning":"The cloud backup hosts and encrypts your data.","sign_in_account_cloud_backup_not_support":"Unsupported data backup","sign_in_account_cloud_send_verification_code_tip":"Send verification code to","sign_in_account_cloud_backup_failed":"Restore backup failed, Please try again.","sign_in_account_cloud_backup_email_or_phone_number":"E-mail or phone number","sign_in_account_cloud_backup_password":"Backup password","sign_in_account_cloud_restore_failed":"Restore failed","sign_in_account_cloud_backup_download_failed":"Download backup failed","sign_in_account_cloud_backup_decrypt_failed":"Decrypt failed, please check password","sign_in_account_cloud_backup_email_format_error":"The email is incorrect.","sign_in_account_cloud_backup_phone_format_error":"The phone number is incorrect.","sign_in_account_cloud_backup_synchronize_password_tip":"You have successfully verified your cloud password and recovered your backup. To unify backup passwords, do you want to synchronize your cloud password as local backup password?","cloud_backup":"Cloud Backups","wallets_transfer":"Transfer","wallets_assets":"Assets","wallets_transfer_memo":"Memo","wallets_transfer_amount":"Amount","wallets_transfer_to_address":"To Address","wallets_transfer_error_amount_absence":"Enter an amount","wallets_transfer_error_address_absence":"Enter recipient address","wallets_transfer_error_contract":"Select NFT contract","wallets_transfer_error_nft":"Select one NFT","wallets_transfer_error_invalid_address":"Invalid recipient address","wallet_transfer_error_no_address_has_been_set_name":"The address of the receiver is invalid.","wallet_transfer_error_no_ens_support":"Network does not support ENS.","wallets_transfer_error_insufficient_balance":"Insufficient {{symbol}} balance","wallets_transfer_error_same_address_with_current_account":"This receiving address is the same as the sending address. Please check again.","wallets_transfer_error_is_contract_address":"The receiving address is contract address. Please check again.","wallets_transfer_send":"Send","wallets_transfer_memo_placeholder":"Optional message","wallets_transfer_contract":"Contract","wallets_transfer_contract_placeholder":"Select an NFT Contract","wallets_swap":"Swap","wallets_red_packet":"Lucky drop","wallets_sell":"Sell","wallets_history":"History","settings":"Settings","gas_fee":"Transaction fee","transfer_cost":"Cost {{gasFee}} {{symbol}} ≈ ${{usd}}","done":"Done!","labs":"D.Market","wallet_transactions_pending":"Pending","wallet_gas_fee_settings_low":"Low","wallet_gas_fee_settings_medium":"Medium","wallet_gas_fee_settings_high":"High","wallets_startup_create":"Create A New Wallet","wallets_startup_create_desc":"Mask wallet supports ETH、 BSC and Polygon/Matic networks.","wallets_startup_create_action":"Create","wallets_startup_import":"Import Wallet","wallets_startup_import_desc":"Mask wallet supports Private Key, JSON.File and Mnemonic words.","wallets_startup_import_action":"Import","wallets_startup_connect":"Connect Wallet","wallets_startup_connect_desc":"Supports Mask Wallet, MetaMask and WalletConnect.","wallets_startup_connect_action":"Connect","wallets_connect_wallet_metamask":"MetaMask","wallets_connect_wallet_connect":"Connect Wallet","wallets_connect_wallet_polka":"PolkaDot Wallet","wallets_create_wallet_input_placeholder":"Wallet Name","wallets_create_successfully_title":"Success","wallets_create_successfully_tips":"You have created your wallet successfully","wallets_create_successfully_unlock":"Unlock Wallet","wallets_create_wallet_alert":"Mask Network is a free, open-source, client-side interface. Mask Network allows you to interact directly with the blockchain, while you remain in full control of your keys and funds.Please think about this carefully. YOU are the one who is in control. Mask Network is not a bank or exchange. We don\'t hold your keys, your funds, or your information. This means we can\'t access accounts, recover keys, reset passwords, or reverse transactions.","wallets_wallet_connect_title":"Scan QR code with a WalletConnect-compatible wallet","wallets_wallet_mnemonic":"Mnemonic","wallets_wallet_json_file":"Local Backup","wallets_wallet_private_key":"Private Key","wallets_import_wallet_tabs":"Import Wallet Tabs","wallets_import_wallet_password_placeholder":"Wallet Password","wallets_import_wallet_cancel":"Cancel","wallets_import_wallet_import":"Import","wallets_create_wallet_tabs":"Create Wallet Tabs","wallets_create_wallet_refresh":"Refresh","wallets_create_wallet_remember_later":"Remember that later","wallets_create_wallet_verification":"Verification","wallets_collectible_address":"Collectible Address","wallets_collectible_token_id":"Token ID","wallets_collectible_field_contract_require":"The collectible address is required","wallets_collectible_field_token_id_require":"The token id is required","wallets_collectible_load_end":"Load end","wallets_balance":"Balance on","wallets_balance_all_chain":"all chains","wallets_balance_Send":"Send","wallets_balance_Buy":"Buy","wallets_balance_Swap":"Swap","wallets_balance_Receive":"Receive","wallets_assets_token":"Token","wallets_assets_token_sent_not_connect_tip":"Not connected to {{chainName}}.","wallets_assets_token_sent_switch_network_tip":"Click to switch.","wallets_assets_investment":"Investment","wallets_assets_collectibles":"Collectibles","wallets_assets_custom_token":"Custom Token","wallets_assets_custom_collectible":"Custom Collectible","wallets_assets_asset":"Asset","wallets_assets_balance":"Balance","wallets_assets_price":"Price","wallets_assets_value":"Value","wallets_assets_operation":"Operation","wallets_address":"Wallet Address","wallets_receive_tips":"Scan the QR code and transfer {{chainName}} assets to it","wallets_add_collectible":"Add Collectible","wallets_incorrect_address":"Incorrect contract address.","wallets_collectible_been_added":"The Collectible has already been added.","wallets_collectible_error_not_exist":"The collectible does not exist or belong to you.","wallets_collectible_contract_is_empty":"Please select contract","wallets_collectible_token_id_is_empty":"Please select collectible","wallets_collectible_add":"Add","wallets_add_token":"Add Token","wallets_token_been_added":"Token has already been added.","wallets_token_symbol_tips":"Symbol must be 11 characters or fewer.","wallets_token_decimals_tips":"Decimals must be at least 0, and not over 18.","wallets_add_token_contract_address":"Token Contract Address","wallets_add_token_symbol":"Token Symbol","wallets_add_token_decimals":"Decimals of Precision","wallets_add_token_cancel":"Cancel","wallets_add_token_next":"Next","wallets_empty_tokens_tip":"No assets were found. Please add tokens.","wallets_empty_collectible_tip":"No collectibles were found. Please add Collectibles.","wallets_address_copied":"Address successfully copied","wallets_address_copy":"Copy","wallets_history_types":"Types","wallets_history_value":"Value","wallets_history_time":"Time","wallets_history_receiver":"Interacted with (to)","wallets_empty_history_tips":"No transaction history","wallets_loading_token":"Loading Token","personas_setup_connect_tips":"Please connect to your {{type}} account.","personas_setup_tip":"Please to create/restore persona.","personas_setup_connect":"Connect","personas_name_maximum_tips":"Maximum length is {{length}} characters long.","personas_name_existed":"The persona name already exists","personas_rename_placeholder":"Persona Name","personas_confirm":"Confirm","personas_cancel":"Cancel","personas_export_persona":"Export Persona","personas_export_persona_copy":"Copy","personas_export_persona_copy_success":"Copied","personas_export_persona_copy_failed":"Copy failed","personas_export_persona_confirm_password_tip":"You haven’t set up your password. To export your persona, you must set up backup password first.","personas_export_private":"Export Private Key","personas_export_private_key_tip":"This export is only for exporting private key. We do not export any other data. If you need more data, please go to Settings:","personas_delete_confirm_tips":"Please confirm that you have deleted persona <i>{{nickname}}</i> and entered your password.","personas_delete_dialog_title":"Delete Persona","personas_edit_dialog_title":"Edit Persona","personas_edit":"Edit","personas_delete":"Delete","personas_logout":"Log out","personas_logout_confirm_password_tip":"You haven’t set up your password. To logout persona, you must set up backup password first.","personas_add_persona":"Add Persona","personas_back_up":"Back Up","personas_connect_to":"Connect to {{internalName}}","personas_disconnect":"Delete Persona Verification","personas_disconnect_raw":"Disconnect","personas_disconnect_warning":"Are you sure you want to delete persona verification?  Your mask friends can no longer send decrypted message to you by this persona or check your Web 3 products related with this persona.","personas_logout_warning":"After logging out, your associated social accounts can no longer decrypt past encrypted messages. If you need to reuse your account, you can use your private key for recovery.","personas_add":"Add","personas_upload_avatar":"Upload an avatar","personas_rename":"Rename","personas_invite_post":"@{{identifier}} Hi, would you please download Mask so that we can share our posts with encryption? #mask_io install http://mask.io","personas_empty_contact_tips":"You don’t have any contacts with Mask Network installed yet. Invite your friends to download <i>{{name}}</i>.","personas_contacts_name":"Name","personas_contacts_operation":"Operation","personas_contacts_invite":"Invite","personas_post_is_empty":"You haven\'t created any post yet.","personas_post_create":"Create Post","settings_general":"General","settings_backup_recovery":"Backup & Recovery","settings_local_backup":"Local Backup","settings_cloud_backup":"Cloud Backup","settings_appearance_default":"Follow system settings","settings_appearance_light":"Light","settings_appearance_dark":"Dark","settings_backup_preview_account":"Account","settings_backup_preview_personas":"Personas","settings_backup_preview_associated_account":"Associated Account","settings_backup_preview_posts":"Encrypted Post","settings_backup_preview_contacts":"Contacts","settings_backup_preview_fils":"File","settings_backup_preview_wallets":"Mask Wallet","settings_backup_preview_created_at":"Backup Time","settings_language_title":"Language","settings_language_desc":"Select the language you would like to use","settings_language_auto":"Follow system","settings_appearance_title":"Appearance","settings_appearance_desc":"Select the theme you would like to use","settings_data_source_title":"Data Source","settings_data_source_desc":"Fetch trending data from different platforms","settings_sync_with_mobile_title":"Sync With Mobile","settings_sync_with_mobile_desc":"You can sync your accounts and information with your mobile device. Open the Mask Network mobile app, go to Settings and tap on Sync With Plug-ins","settings_global_backup_title":"Global Backup","settings_global_backup_desc":"Provide both local backup and cloud backup","settings_global_backup_last":"The most recent backup was made on {{backupAt}}. Backup method: {{backupMethod}}.","settings_restore_database_title":"Restore Database","settings_restore_database_desc":"Restore from a previous database backup","settings_email_title":"Email","settings_email_desc":"Please bind your email","settings_change_password_title":"Backup Password","settings_change_password_desc":"Change your backup password","settings_change_password_not_set":"You haven\'t set up a backup password","settings_phone_number_title":"Phone Number","settings_phone_number_desc":"Please bind your phone number","settings_password_rule":"Backup password must be between 8 and 20 characters and contain at least a number, a uppercase letter, a lowercase letter and a special character.","settings_button_cancel":"Cancel","settings_button_confirm":"Confirm","settings_button_sync":"Sync","settings_button_backup":"Backup","settings_button_recovery":"Recovery","settings_button_setup":"Setup","settings_button_change":"Change","settings_dialogs_bind_email_or_phone":"Please bind your email or phone number.","settings_dialogs_verify_backup_password":"Verify Backup Password","settings_dialogs_setting_backup_password":"Setting Backup Password","settings_dialogs_change_backup_password":"Change Backup Password","settings_dialogs_setting_email":"Setting Email","settings_dialogs_change_email":"Change Email","settings_dialogs_setting_phone_number":"Setting Phone Number","settings_dialogs_change_phone_number":"Change Phone Number","settings_dialogs_incorrect_code":"The verification code is incorrect.","settings_dialogs_incorrect_email":"The email address is incorrect.","settings_dialogs_incorrect_phone":"The phone number is incorrect.","settings_dialogs_incorrect_password":"Incorrect password.","settings_dialogs_inconsistency_password":"Password inconsistency.","settings_dialogs_current_email_validation":"The current email for verification is","settings_dialogs_change_email_validation":"To change the Email, you need to verify your current Email address:","settings_dialogs_current_phone_validation":"The current phone number for verification is","settings_dialogs_change_phone_validation":"To change the phone number, you need to verify your current phone number:","settings_dialogs_backup_to_cloud":"Backup to cloud","settings_dialogs_merge_to_local_data":"Merge Cloud backup to local and back up to cloud","settings_dialogs_backup_action_desc":"There is already a cloud backup, please merge the cloud backup to local before you back up, or back up directly.","settings_dialogs_backup_to_cloud_action":"This option overwrites the existing cloud backup with the local data.","settings_dialogs_backup_merge_cloud":"This option requires you to enter the password of the existing cloud backup for decryption. The existing cloud backup and local data are combined and then encrypted and uploaded to cloud.","settings_dialogs_backup_merged_tip":"You already obtained the cloud backup to your local. If you want to complete your back up, please click on the backup button to update all your data to cloud.","settings_label_backup_password":"Backup Password","settings_label_new_backup_password":"New Backup Password","settings_label_backup_password_cloud":"Backup passwords for files in the cloud","settings_label_payment_password":"Payment Password","settings_label_re_enter":"Re-enter","settings_alert_password_set":"Backup password set up successfully.","settings_alert_password_updated":"Backup password updated","settings_alert_email_set":"Email set","settings_alert_email_updated":"Email updated","settings_alert_phone_number_set":"Phone number set","settings_alert_phone_number_updated":"Phone number updated","settings_alert_backup_fail":"Backup Failed","settings_alert_backup_success":"You have successfully backed up your data.","settings_alert_validation_code_sent":"Verification code sent","settings_alert_merge_success":"You have successfully merged your cloud backup to the local data.","labs_file_service":"File Service","labs_file_service_desc":"Decentralized file storage, permanently. Upload and share files to your Mask friends on top of Arweave Network.","labs_markets":"ITO","labs_markets_desc":"Launch decentralized asset freely and participate in token launch directly on Twitter.","labs_red_packet":"Lucky Drop","labs_red_packet_desc":"Gift crypto or NFTs to any users, first come, first served.","labs_swap":"Swap","labs_swap_desc":"Pop-up trading widget that allows you to instantly view prices of the hottest Crypto/Stock and trade. Can also invest in the best performing managers.","labs_transak":"Fiat On-Ramp","labs_transak_desc":"Fiat On-Ramp Aggregator on Twitter. Buy crypto in 60+ countries with Transak support.","labs_savings":"Savings","labs_savings_desc":"Deploy your crypto into various savings protocols and watch your savings grow.","labs_snapshot":"Snapshot","labs_snapshot_desc":"Display and vote for proposals directly on social media.","labs_market_trend":"Market Trend","labs_market_trend_desc":"Display token information, price charts and exchange information directly on social media.","labs_collectibles":"Collectibles","labs_collectibles_desc":"Display specific information of collectibles in OpenSea and Rarible, make an offer directly on social media.","labs_gitcoin":"Gitcoin","labs_gitcoin_desc":"Display specific information of Gitcoin projects, donate to a project directly on social media.","labs_valuables":"Valuables","labs_valuables_desc":"Buy & sell tweets autographed by their original creators.","labs_dhedge":"dHEDGE","labs_dhedge_desc":"Decentralized hedge funds on Ethereum and Polygon (Matic).","labs_mask_box":"MaskBox","labs_mask_box_desc":"Professional multi-chain decentralized platform for launching NFT mystery boxes.","labs_loot_man":"LootMan by MintTeam","labs_loot_man_desc":"Explore the endless possibilities of NFTs. Link and display your NFTs on social media in a revolutionized way.","labs_good_ghosting":"GoodGhosting","labs_good_ghosting_desc":"Cultivate a weekly saving habit on Twitter.","labs_pool_together":"PoolTogether","labs_pool_together_desc":"Participate in lossless lottery on Twitter.","labs_settings_market_trend":"Market Trend Settings","labs_settings_market_trend_source":"Default Trending Source","labs_settings_swap":"Swap Settings","labs_settings_swap_network":"{{network}} Network Default Trading Source","labs_pets":"Non-Fungible Friends by Mint Team","labs_pets_desc":"Explore the endless possibilities of NFTs.","labs_cyber_connect":"CyberConnect","labs_cyber_connect_desc":"Decentalized social graph protocol for user-centric Web3","labs_setup_tutorial":"Setup Tutorial","labs_do_not_show_again":"Don\'t show again.","labs_cryptoartai":"CRYPTOART.AI","labs_cryptoartai_desc":"Connect CryptoArt Digital Artworks. The Internationale is a classic anthem that has been a shared memory for generations.","labs_art_blocks":"Artblocks","labs_art_blocks_desc":"Artblocks allow you to pick a style that you like, pay for the work, and a randomly generated version of the content is created by an algorithm and sent to your Ethereum account.","dashboard_mobile_test":"Join Tests for Mobile","dashboard_source_code":"Source Code","privacy_policy":"Privacy Policy","version_of_stable":"Version {{version}}","version_of_unstable":"Version {{version}}-{{build}}-{{hash}}","register_restore_backups":"Restore Backups","register_restore_backups_cancel":"Cancel","register_restore_backups_confirm":"Restore","register_restore_backups_hint":"Please click or drag the file here","register_restore_backups_file":"File","register_restore_backups_text":"Text","register_restore_backups_tabs":"Restore Backup Tabs","create_wallet_mnemonic_tip":"Do not forget to save your mnemonic phrase. You will need this to access your wallet.","create_wallet_password_uppercase_tip":"Must contain an uppercase character","create_wallet_password_lowercase_tip":"Must contain a lowercase character","create_wallet_password_number_tip":"Must contain a number","create_wallet_password_special_tip":"Must contain a special character","create_wallet_password_satisfied_requirement":"The password is not satisfied the requirement.","create_wallet_password_match_tip":"The password does not match.","create_wallet_password_length_error":"The password length is incorrect.","create_wallet_name_placeholder":"Enter 1-12 characters","create_wallet_form_title":"Create a wallet","create_wallet_wallet_name":"Wallet Name","create_wallet_payment_password":"Payment Password","create_wallet_re_enter_payment_password":"Re-enter the payment password","create_wallet_payment_password_tip":"Payment Password must be a combination of 2 categories out of numbers, letters and special characters with a length of 8-20 characters.","create_wallet_your_wallet_address":"Your wallet address","create_wallet_done":"Done","create_wallet_verify_words":"Verify mnemonic words","create_wallet_mnemonic_word_not_match":"The mnemonic word is incorrect"}');

/***/ }),

/***/ 97979:
/***/ ((module) => {

module.exports = JSON.parse('{"about":"About","wallets":"ウォレット","personas":"ペルソナ","persona":"ペルソナ","refresh":"更新","next":"Next","cancel":"Cancel","back":"Back","agree":"同意","confirm":"確認","verify":"認証","go_back":"戻る","connect":"接続","searching":"検索中…","restore":"復元","save":"保存","manage":"管理","recovery":"復旧","successful":"成功","close":"終了","send":"送信","resend":"再送信","confirm_password":"パスワード確認","about_dialog_license":"ライセンス： ","footer_bounty_list":"報奨金リスト","about_dialog_source_code":"ソースコード： ","about_dialog_feedback":"フィードバック： ","about_dialog_touch":"お問い合わせ","about_dialog_description":"Mask Networkは、新しいオープンなインターネットへのポータルです。Maskは、ソーシャルネットワーク上で暗号化された投稿を送ることができます。暗号化されたRedPacketの送信、暗号通貨の購入、ファイルサービスなど、より多くの機能を提供しています。","setup_page_title":"Mask Networkへようこそ","setup_page_description":"SNS上の投稿とチャットを暗号化し、友達のみが復号化できます。","setup_page_create_account_title":"イベントを作成","setup_page_create_account_subtitle":"アカウントとデータのローカルストレージ","setup_page_create_account_button":"作成","setup_page_create_restore_title":"アイデンティティやバックアップから復元する","setup_page_create_restore_subtitle":"IDと履歴のバックアップからの復元","setup_page_create_restore_button":"復元またはサインイン","create_account_identity_title":"Mask Networkのアイデンティティを作成","create_account_sign_in_button":"復元またはサインイン","create_account_mnemonic_confirm_failed":"IDコードが間違っています","create_account_connect_social_media_button":"作成","create_account_connect_social_media":"{{type}} に接続","create_account_persona_title":"Mask Networkへようこそ","create_account_persona_subtitle":"ペルソナを作成し、ソーシャルアカウントを接続することができます","create_account_persona_successfully":"正常にペルソナを作成しました","create_account_connect_social_media_title":"ソーシャルメディアに接続","create_account_failed":"アカウント作成が失敗しました","sign_in_account_identity_title":"復元またはサインイン","sign_in_account_sign_up_button":"サインアップ","sign_in_account_identity_warning":"デジタルIDコードは、あなたのデジタルIDのみを復元できます。このデジタルIDによって署名され送信されたソーシャル情報を暗号化して復号することができます。","sign_in_account_private_key_placeholder":"秘密鍵を入力してください","sign_in_account_private_key_error":"IDコードが間違っています","sign_in_account_private_key_persona_not_found":"ペルソナが見つかりません","sign_in_account_private_key_warning":"デジタルIDコードは、あなたのデジタルIDのみを復元できます。このデジタルIDによって署名され送信されたソーシャル情報を暗号化して復号することができます。","sign_in_account_mnemonic_confirm_failed":"IDが間違っています","sign_in_account_cloud_backup_send_email_success":"{{type}}に認証コードが送信されました。 {{type}} を確認してください。","sign_in_account_local_backup_warning":"ローカルバックアップは、ローカルに保存されているすべてのデータを回復できます。","sign_in_account_local_backup_payment_password":"支払いパスワードの設定","sign_in_account_local_backup_file_drag":"ここでファイルをクリックまたはドラッグしてください","sign_in_account_cloud_backup_warning":"クラウドバックアップは、データをホストおよび暗号化します。","sign_in_account_cloud_backup_not_support":"サポートされていないバックアップ","sign_in_account_cloud_send_verification_code_tip":"検証コードを送信","sign_in_account_cloud_backup_failed":"バックアップの復元に失敗しました。もう一度やり直してください。","sign_in_account_cloud_backup_email_or_phone_number":"メールアドレスまたは電話番号","sign_in_account_cloud_backup_password":"バックアップパスワード","sign_in_account_cloud_restore_failed":"復元に失敗しました","sign_in_account_cloud_backup_download_failed":"バックアップのダウンロードに失敗しました","sign_in_account_cloud_backup_decrypt_failed":"復号に失敗しました。パスワードを確認してください。","sign_in_account_cloud_backup_email_format_error":"メールアドレスが間違っています","sign_in_account_cloud_backup_phone_format_error":"電話番号が正しくありません","sign_in_account_cloud_backup_synchronize_password_tip":"クラウドパスワードの認証が完了し、バックアップがアップロードされています。バックアップパスワードを統一するために、クラウドのパスワードをローカルのバックアップのパスワードとして同期するかどうかを確認してください。","cloud_backup":"クラウドバックアップ","wallets_transfer":"転送","wallets_assets":"資産","wallets_transfer_memo":"メモ","wallets_transfer_amount":"金額","wallets_transfer_to_address":"宛先アドレス","wallets_transfer_error_amount_absence":"金額を入力","wallets_transfer_error_address_absence":"受信者のアドレス","wallets_transfer_error_contract":"NFT のコントラクトを選択","wallets_transfer_error_nft":"NFT を1つ選択してください","wallets_transfer_error_invalid_address":"無効な受け手のアドレス","wallets_transfer_error_insufficient_balance":"{{symbol}} の残高が足りません","wallets_transfer_send":"送信","wallets_transfer_memo_placeholder":"任意のメッセージ","wallets_transfer_contract":"コントラクト","wallets_transfer_contract_placeholder":"NFT コントラクトを選択してください","wallets_swap":"スワップ","wallets_red_packet":"レッドパケット","wallets_sell":"売る","wallets_history":"履歴","settings":"設定","gas_fee":"取引手数料","transfer_cost":"費用 {{gasFee}} {{symbol}} <unk> ${{usd}}","done":"完了!","labs":"Mask Labs","wallet_transactions_pending":"承認待ち","wallet_gas_fee_settings_low":"低い","wallet_gas_fee_settings_medium":"中間","wallet_gas_fee_settings_high":"高い","wallets_startup_create":"新規ウォレット作成","wallets_startup_create_desc":"MaskウォレットはETH、BSC、Polygon/Maticのネットワークをサポートしています。","wallets_startup_create_action":"作成","wallets_startup_import":"ウォレットをインポート","wallets_startup_import_desc":"Mask networkはPrivate KeyとMnemonic wordsをサポートしています。","wallets_startup_import_action":"インポート","wallets_startup_connect":"プラグインウォレットに接続","wallets_startup_connect_desc":"Mask networkはMetamask、WalletConnectをサポートしています。","wallets_startup_connect_action":"接続","wallets_connect_wallet_metamask":"Metamask","wallets_connect_wallet_connect":"ウォレットを接続","wallets_connect_wallet_polka":"Polkadot ウォレット","wallets_create_wallet_input_placeholder":"ウォレット名","wallets_create_successfully_title":"成功","wallets_create_successfully_tips":"ウォレットを正常に作成しました","wallets_create_successfully_unlock":"ウォレットをアンロック","wallets_create_wallet_alert":"Mask Networkは、フリーでオープンソースの、クライアントサイドのインターフェースです。Mask Networkは、あなたが自分の鍵と資金を完全にコントロールしたまま、ブロックチェーンと直接やりとりすることを可能にします。コントロールするのはあなた自身です。Mask Networkは銀行や取引所ではありません。お客様の鍵や資金、情報を預かることはありません。つまり、アカウントへのアクセス、鍵の回収、パスワードのリセット、取引の取り消しなどはできません。","wallets_wallet_connect_title":"WalletConnect対応ウォレットでQRコードスキャン","wallets_wallet_mnemonic":"ニーモニック","wallets_wallet_json_file":"ローカルバックアップ","wallets_wallet_private_key":"秘密鍵","wallets_import_wallet_tabs":"ウォレットタブのインポート","wallets_import_wallet_password_placeholder":"ウォレットのパスワード","wallets_import_wallet_cancel":"キャンセル","wallets_import_wallet_import":"インポート","wallets_create_wallet_tabs":"ウォレットタブを作成","wallets_create_wallet_refresh":"更新","wallets_create_wallet_remember_later":"後で覚えておいてください","wallets_create_wallet_verification":"認証","wallets_collectible_address":"受取可能なアドレス","wallets_collectible_token_id":"トークンID","wallets_collectible_field_contract_require":"受取可能なアドレスが必要です","wallets_collectible_field_token_id_require":"トークンIDが必要です","wallets_collectible_load_end":"ロード終了","wallets_balance":"残高","wallets_balance_all_chain":"全てのチェーン","wallets_balance_Send":"送信","wallets_balance_Buy":"購入","wallets_balance_Swap":"スワップ","wallets_balance_Receive":"受取","wallets_assets_token":"トークン","wallets_assets_token_sent_not_connect_tip":"{{chainName}} に接続されていません。","wallets_assets_token_sent_switch_network_tip":"クリックして切り替えます","wallets_assets_investment":"投資","wallets_assets_collectibles":"コレクション","wallets_assets_custom_token":"カスタムトークン","wallets_assets_custom_collectible":"カスタムコレクション","wallets_assets_asset":"資産","wallets_assets_balance":"残高","wallets_assets_price":"価格","wallets_assets_value":"価値","wallets_assets_operation":"操作方法","wallets_address":"ウォレットアドレス","wallets_receive_tips":"QRコードをスキャンして {{chainName}} 資産を転送します","wallets_add_collectible":"コレクションを追加","wallets_incorrect_address":"不正なコントラクトアドレス","wallets_collectible_been_added":"コレクションは既に追加されています","wallets_collectible_error_not_exist":"コレクションは存在しないか、またはあなたのものです。","wallets_collectible_contract_is_empty":"コントラクトを選択してください","wallets_collectible_token_id_is_empty":"トークンを選択してください","wallets_collectible_add":"追加","wallets_add_token":"トークンを追加","wallets_token_been_added":"このトークンはすでに追加されてます","wallets_token_symbol_tips":"シンボルは11文字以下でなければなりません","wallets_token_decimals_tips":"小数点以下は0以上、18以下でなければなりません","wallets_add_token_contract_address":"トークンコントラクトアドレス","wallets_add_token_symbol":"ティッカーシンボル","wallets_add_token_decimals":"小数点の適合率","wallets_add_token_cancel":"キャンセル","wallets_add_token_next":"Next","wallets_empty_tokens_tip":"アセットが見つかりません。トークンを追加してください。","wallets_empty_collectible_tip":"コレクションが見つかりませんでした。コレクションを追加してください。","wallets_address_copied":"アドレスが正常にコピーされました","wallets_address_copy":"コピー","wallets_history_types":"タイプ","wallets_history_value":"価値","wallets_history_time":"時間","wallets_history_receiver":"受取","wallets_empty_history_tips":"取引履歴がありません","wallets_loading_token":"トークンを読み込み中","personas_setup_connect_tips":"あなたの {{type}} アカウントに接続してください","personas_setup_tip":"ペルソナを作成/復元してください。","personas_setup_connect":"接続する","personas_name_maximum_tips":"最大長は {{length}} 文字です。","personas_name_existed":"このペルソナ名は既に存在しています","personas_rename_placeholder":"ペルソナ名","personas_confirm":"確定","personas_cancel":"キャンセル","personas_export_persona":"ペルソナのエクスポート","personas_export_persona_copy":"コピー","personas_export_persona_copy_success":"コピーしました","personas_export_persona_copy_failed":"コピーに失敗しました","personas_export_persona_confirm_password_tip":"パスワードが設定されていません。秘密鍵をエクスポートするには、まずバックアップパスワードを設定する必要があります。","personas_export_private":"秘密鍵をエクスポート","personas_export_private_key_tip":"このエクスポートは秘密鍵をエクスポートするためのものです。他のデータはエクスポートしません。さらなるデータが必要な場合は「設定」に進んでください:","personas_delete_confirm_tips":"削除するペルソナ名 <i>{{nickname}}</i> とパスワードを入力してください。","personas_delete_dialog_title":"ペルソナを削除","personas_edit_dialog_title":"ペルソナを編集","personas_edit":"編集","personas_delete":"削除","personas_logout":"ログアウト","personas_logout_confirm_password_tip":"パスワードが設定されていません。ペルソナからログアウトするには、まずバックアップパスワードを設定する必要があります。","personas_add_persona":"ペルソナを追加","personas_back_up":"バックアップ","personas_connect_to":"{{internalName}} に接続","personas_disconnect":"接続を外す","personas_disconnect_warning":"{{network}} の {{userId}}アカウントを切断してもよろしいですか？ 切断後、このアカウントはマスクネットワークで情報を復号化および暗号化することができなくなります。","personas_logout_warning":"ログアウト後、あなたに関連づけられたソーシャルアカウントは過去に暗号化されたメッセージを復号することができなくなります。アカウントを再利用する場合は、秘密鍵を利用して復元することができます。","personas_add":"追加","personas_upload_avatar":"アバターをアップロード","personas_rename":"名前変更","personas_invite_post":"@{{identifier}} こんにち！投稿を暗号化して共有できるように Mask をダウンロードしましょう。http://mask.io からダウンロードできます。 #mask_io","personas_empty_contact_tips":"Mask Network に認識されているコンタクトがありません。友達を招待して <i>{{name}}</i> をダウンロードしてもらってください。","personas_contacts_name":"名前","personas_contacts_operation":"操作","personas_contacts_invite":"招待","personas_post_is_empty":"まだ投稿を作成したことがありません。","personas_post_create":"投稿を作成","settings_general":"一般","settings_backup_recovery":"バックアップと復元","settings_local_backup":"ローカルバックアップ","settings_cloud_backup":"クラウドバックアップ","settings_appearance_default":"システム設定に従う","settings_appearance_light":"ライト","settings_appearance_dark":"ダーク","settings_backup_preview_account":"アカウント","settings_backup_preview_personas":"ペルソナ","settings_backup_preview_associated_account":"紐付けられたアカウント","settings_backup_preview_posts":"暗号化された投稿","settings_backup_preview_contacts":"コンタクト","settings_backup_preview_fils":"ファイル","settings_backup_preview_wallets":"Mask ウォレット","settings_backup_preview_created_at":"バックアップ時間","settings_language_title":"言語","settings_language_desc":"使用する言語を選択してください","settings_language_auto":"システム設定に従う","settings_appearance_title":"外観","settings_appearance_desc":"使用したいテーマを選択したください","settings_data_source_title":"データソース","settings_data_source_desc":"異なるプラットフォームからトレンドデータを取得","settings_sync_with_mobile_title":"モバイルと同期","settings_sync_with_mobile_desc":"アカウントと情報をモバイルデバイスと同期することができます。Mask Network モバイルアプリを開き、設定に移動して同期プラグインを選択します","settings_global_backup_title":"グローバルバックアップ","settings_global_backup_desc":"ローカルバックアップとクラウドバックアップの両方を提供","settings_global_backup_last":"最新のバックアップは {{backupAt}} に行われました。バックアップ方法: {{backupMethod}}。","settings_restore_database_title":"データベースの復元","settings_restore_database_desc":"以前のデータベースバックアップから復元","settings_email_title":"Eメール","settings_email_desc":"メールアドレスを入力してください","settings_change_password_title":"バックアップパスワード","settings_change_password_desc":"バックアップパスワードの変更","settings_change_password_not_set":"バックアップパスワードが設定されていません","settings_phone_number_title":"電話番号","settings_phone_number_desc":"電話番号を入力してください","settings_password_rule":"バックアップパスワードは 8~20 文字で、少なくとも数字、小文字、特殊文字を含める必要があります。","settings_button_cancel":"キャンセル","settings_button_confirm":"確定","settings_button_sync":"同期","settings_button_backup":"バックアップ","settings_button_recovery":"リカバリー","settings_button_setup":"設定","settings_button_change":"変更","settings_dialogs_bind_email_or_phone":"メールアドレスまたは電話番号を入力してください。","settings_dialogs_verify_backup_password":"バックアップパスワードを確認","settings_dialogs_setting_backup_password":"バックアップパスワードを設定","settings_dialogs_change_backup_password":"バックアップパスワードの変更","settings_dialogs_setting_email":"メールアドレスの設定","settings_dialogs_change_email":"メールアドレスの変更","settings_dialogs_setting_phone_number":"電話番号の設定","settings_dialogs_change_phone_number":"電話番号の変更","settings_dialogs_incorrect_code":"認証コードが間違っています。","settings_dialogs_incorrect_email":"メールアドレスが間違っています。","settings_dialogs_incorrect_phone":"電話番号が間違っています。","settings_dialogs_incorrect_password":"パスワードが間違っています。","settings_dialogs_inconsistency_password":"パスワードが一致しません。","settings_dialogs_current_email_validation":"現在の認証用のメールアドレスは","settings_dialogs_change_email_validation":"メールアドレスを変更するためには、現在のメールアドレスを認証する必要があります:","settings_dialogs_current_phone_validation":"現在の認証用のメールアドレスは","settings_dialogs_change_phone_validation":"電話番号を変更するには、現在の電話番号を認証する必要があります:","settings_dialogs_backup_to_cloud":"クラウドにバックアップ","settings_dialogs_merge_to_local_data":"クラウドバックアップをローカルに統合し、クラウドにバックアップします","settings_dialogs_backup_action_desc":"クラウドバックアップは既に存在しています。バックアップ前にクラウドバックアップをローカルに統合するか、直接バックアップしてください。","settings_dialogs_backup_merged_tip":"既にクラウドバックアップをローカルに取得しています。バックアップを実行したい場合は、バックアップボタンをクリックしてすべてのデータをクラウドに更新します。","settings_label_backup_password":"バックアップパスワード","settings_label_new_backup_password":"新しいバックアップパスワード","settings_label_backup_password_cloud":"クラウド上のファイルのパスワードをバックアップ","settings_label_payment_password":"支払いパスワードの設定","settings_label_re_enter":"再入力","settings_alert_password_set":"バックアップパスワードの設定に成功しました。","settings_alert_password_updated":"バックアップパスワードが更新されました","settings_alert_email_set":"メールアドレスの設定","settings_alert_email_updated":"メールアドレスが更新されました","settings_alert_phone_number_set":"電話番号の設定","settings_alert_phone_number_updated":"電話番号が更新されました","settings_alert_backup_fail":"バックアップ失敗","settings_alert_backup_success":"データのバックアップに成功しました。","settings_alert_validation_code_sent":"認証コードを送信しました","settings_alert_merge_success":"クラウドバックアップをローカルデータに統合できました。","labs_file_service":"ファイルサービス","labs_file_service_desc":"ユーザー向け分散ファイルストレージです。","labs_markets":"マーケット","labs_markets_desc":"クリプトの友人にデジタル資産を販売します。","labs_red_packet":"幸運ドロップ","labs_red_packet_desc":"あなたの幸運を暗号化された幸運の小包としてあなたの友人に送信します。","labs_swap":"スワップ","labs_swap_desc":"追加料金と制限なしに Dex を通じてトークンを購入します。","labs_transak":"Transak","labs_transak_desc":"Transak より 60 以上の国でクリプトを購入することができます。"}');

/***/ }),

/***/ 75743:
/***/ ((module) => {

module.exports = JSON.parse('{"about":"알아보기","wallets":"월렛","personas":"나의 페르소나","persona":"페르소나","refresh":"새로고침","next":"다음","cancel":"취소","back":"뒤로","agree":"동의","confirm":"확인","verify":"인증","go_back":"돌아가기","connect":"연결","searching":"검색 중...","restore":"복원하기","save":"저장","manage":"관리","recovery":"복구","successful":"성공","close":"닫기","send":"보내기","resend":"다시 보내기","confirm_password":"비밀번호 확인","about_dialog_license":"라이센스: ","footer_bounty_list":"상금 리스트","about_dialog_source_code":"소스 코드: ","about_dialog_feedback":"피드백: ","about_dialog_touch":"연락하기","about_dialog_description":"Mask Network는 새롭고 오픈한 인터넷으로 통하는 포털이다. Mask를 통해 소셜 네트워크에서 암호화 게시글을 공유할 수도 있다. 레드 패킷 보내기, 암호화폐 구매, 파일 서비스 등 기능도 지원한다.","setup_page_title":"환영합니다","setup_page_description":"소셜 네트워크에서 개시글과 체팅을 암호화하고 친구만 해독할 수 있다.","setup_page_create_account_title":"아이디 만들기","setup_page_create_account_subtitle":"계정과 데이터의 로컬 스토리지","setup_page_create_account_button":"만들기","setup_page_create_restore_title":"아이디나 백업에서 복원하기","setup_page_create_restore_subtitle":"아이디나 역사 백업에서 복원하기.","setup_page_create_restore_button":"복구 또는 로그인","create_account_identity_title":"Mask Network 아이디 만들기","create_account_sign_in_button":"복구 또는 로그인","create_account_mnemonic_confirm_failed":"잘못된 아이디 코드","create_account_connect_social_media_button":"만들기","create_account_connect_social_media":"{{type}} 에 연결하기","create_account_persona_title":"환영합니다","create_account_persona_subtitle":"페르소나를 만들고 소셜 계정을 연결할 수 있습니다.","create_account_persona_successfully":"페르소나 생성 성공","create_account_connect_social_media_title":"소셜 미디어 연결하기","create_account_failed":"계정 만들기 실패","sign_in_account_identity_title":"복구 또는 로그인","sign_in_account_tab_identity":"아이덴티티","sign_in_account_sign_up_button":"로그인","sign_in_account_identity_warning":"디지털 아이디 코드는 디지털 아이디만 복구할 수 있습니다. 이 디지털 아이디가 서명하고 보낸 소셜 정보를 암호화하고 해독할 수 있습니다.","sign_in_account_private_key_placeholder":"개인 키 입력하기","sign_in_account_private_key_error":"잘못된 아이디 코드","sign_in_account_private_key_persona_not_found":"페르소나를 찾을 수 없습니다.","sign_in_account_private_key_warning":"디지털 아이디 코드는 디지털 아이디만 복구할 수 있습니다. 이 디지털 아이디가 서명하고 보낸 소셜 정보를 암호화하고 해독할 수 있습니다.","sign_in_account_mnemonic_confirm_failed":"잘못된 아이덴티티","sign_in_account_cloud_backup_send_email_success":"인증 코드 이미 {{type}} 로 발송되었습니다. {{type}} 확인하세요.","sign_in_account_local_backup_warning":"로컬 백업은 로컬에 저장된 전체 데이터를 복구할 수 있습니다.","sign_in_account_local_backup_payment_password":"결재 비밀번호","sign_in_account_local_backup_file_drag":"클릭하거나 파일을 여기서 끌어들이세요","sign_in_account_cloud_backup_warning":"클라우드 백업은 데이터를 호스트하고 암호화합니다.","sign_in_account_cloud_backup_not_support":"지원하지 않는 데이터 백업","sign_in_account_cloud_send_verification_code_tip":"인증 코드 보내기","sign_in_account_cloud_backup_failed":"백업 복구 실패되었습니다. 다시 시도하세요.","sign_in_account_cloud_backup_email_or_phone_number":"이메일이나 휴대폰 번호","sign_in_account_cloud_backup_password":"비밀번호 백업","sign_in_account_cloud_restore_failed":"복구 실패","sign_in_account_cloud_backup_download_failed":"다운로드 백업 실패","sign_in_account_cloud_backup_decrypt_failed":"해독 실패, 비밀번호를 확인하세요","sign_in_account_cloud_backup_email_format_error":"이메일 주소가 잘못되었습니다.","sign_in_account_cloud_backup_phone_format_error":"전화번호가 잘못되었습니다.","sign_in_account_cloud_backup_synchronize_password_tip":"클라우드 비밀번호는 이미 성공적으로 승인되고 백업은 이미 업로드되었습니다. 백업 비밀번호를 통합하려면 클라우드 비밀번호를 로컬 백업 비밀번호로 동기화할지 여부를 확인하십시오.","cloud_backup":"클라우드 백업","wallets_transfer":"전송","wallets_assets":"자산","wallets_transfer_memo":"메모","wallets_transfer_amount":"수량","wallets_transfer_to_address":"받는 주소","wallets_transfer_error_amount_absence":"수액 입력","wallets_transfer_error_address_absence":"받는 주소 입력","wallets_transfer_error_contract":"NFT 컨트렉트를 선택하세요.","wallets_transfer_error_nft":"NFT 선택","wallets_transfer_error_invalid_address":"무효한 받는 주소","wallet_transfer_error_no_address_has_been_set_name":"수신자의 주소가 잘못되었습니다.","wallet_transfer_error_no_ens_support":"네트워크는 ENS를 지원하지 않습니다.","wallets_transfer_error_insufficient_balance":"{{symbol}} 잔액 부족","wallets_transfer_error_same_address_with_current_account":"받는 주소는 발송 주소와 동일합니다. 다시 확인해 주세요.","wallets_transfer_error_is_contract_address":"받는 주소는 컨트랙트 주소입니다. 다시 확인해 주세요.","wallets_transfer_send":"발송","wallets_transfer_memo_placeholder":"옵셔널 메시지","wallets_transfer_contract":"컨트랙트","wallets_transfer_contract_placeholder":"NFT 컨트렉트를 선택하세요.","wallets_swap":"스왑","wallets_red_packet":"레드 패킷","wallets_sell":"매도","wallets_history":"역사 기록","settings":"설정","gas_fee":"거래 수수료","transfer_cost":"Cost {{gasFee}} {{symbol}} ≈ ${{usd}}","done":"완료","labs":"Mask Labs","wallet_transactions_pending":"대기중","wallet_gas_fee_settings_low":"낮음","wallet_gas_fee_settings_medium":"보통","wallet_gas_fee_settings_high":"높음","wallets_startup_create":"새로운 월렛 생성","wallets_startup_create_desc":"Mask 월렛은 ETH, BSC, Polygon/Matic 네트워크를 지원합니다.","wallets_startup_create_action":"만들기","wallets_startup_import":"월렛 불러오기","wallets_startup_import_desc":"Mask 월렛은 개인키, JSON.File, 니모닉 단어를 지원합니다.","wallets_startup_import_action":"불러오기","wallets_startup_connect":"플러그인 월렛 연결하기","wallets_startup_connect_desc":"Mask network는 Metamask, WalletConnect를 지원합니다.","wallets_startup_connect_action":"연결","wallets_connect_wallet_metamask":"MetaMask","wallets_connect_wallet_connect":"월렛 연결하기","wallets_connect_wallet_polka":"Polkadot 월렛","wallets_create_wallet_input_placeholder":"월렛 이름","wallets_create_successfully_title":"성공","wallets_create_successfully_tips":"월렛을 성공적으로 만들었습니다.","wallets_create_successfully_unlock":"월렛 언락","wallets_create_wallet_alert":"Mask Network는 무료하는 오픈 소스 클라이언트 사이드 인터페이스입니다. Mask Network 를 통해 키와 펀드의 지배권을 보유하면서 블록체인과 상호작용을 할 수 있습니다. Mask Network는 뱅크나 거래소가 아니고 당신의 개인키, 펀드, 정보를 수집하지 않어서 계정 액세스, 개인키 복구, 비밀번호 초기화, 거래 리버스 등을 하지 못합니다.","wallets_wallet_connect_title":"WalletConnect와 호환성이 있는 월렛으로 QR 코드를 스칸하세요.","wallets_wallet_mnemonic":"니모닉","wallets_wallet_json_file":"로컬 백업","wallets_wallet_private_key":"개인 키","wallets_import_wallet_tabs":"월렛 불러오기","wallets_import_wallet_password_placeholder":"월렛 비밀번호","wallets_import_wallet_cancel":"취소","wallets_import_wallet_import":"불러오기","wallets_create_wallet_tabs":"월렛 탭 만들기","wallets_create_wallet_refresh":"새로고침","wallets_create_wallet_remember_later":"나중에 기억하기","wallets_create_wallet_verification":"인증","wallets_collectible_address":"수집품 주소","wallets_collectible_token_id":"토큰 ID","wallets_collectible_field_contract_require":"수집품 주소가 필요합니다","wallets_collectible_field_token_id_require":"토큰 아이디가 필요합니다.","wallets_collectible_load_end":"로드 완료","wallets_balance":"잔액","wallets_balance_all_chain":"모든 체인","wallets_balance_Send":"발송","wallets_balance_Buy":"매수","wallets_balance_Swap":"스왑","wallets_balance_Receive":"받기","wallets_assets_token":"토큰","wallets_assets_token_sent_not_connect_tip":"{{chainName}} 에 연결되지 않습니다.","wallets_assets_token_sent_switch_network_tip":"전환하기","wallets_assets_investment":"투자","wallets_assets_collectibles":"수집품","wallets_assets_custom_token":"맞춤형 토큰","wallets_assets_custom_collectible":"맞춤형 수집품","wallets_assets_asset":"자산","wallets_assets_balance":"잔액","wallets_assets_price":"가격","wallets_assets_value":"값","wallets_assets_operation":"운영","wallets_address":"월렛 주소","wallets_receive_tips":"QR 코드를 스칸하여 {{chainName}} 자산을 전환하기","wallets_add_collectible":"수집품 추가","wallets_incorrect_address":"잘못된 컨트렉트 주소","wallets_collectible_been_added":"이미 추가된 수집품입니다.","wallets_collectible_error_not_exist":"해당 수집품은 존재하지 않거나 유저님의 것이 아닙니다.","wallets_collectible_contract_is_empty":"켄트랙트를 선택하세요","wallets_collectible_token_id_is_empty":"토큰을 선택하세요","wallets_collectible_add":"추가","wallets_add_token":"토큰 추가","wallets_token_been_added":"이미 추가된 토큰입니다.","wallets_token_symbol_tips":"기호는 11자 이하여야 합니다.","wallets_token_decimals_tips":"소수점은 0 이상이어야 하며 18을 넘지 않아야 합니다.","wallets_add_token_contract_address":"토큰 컨트랙트 주소","wallets_add_token_symbol":"토큰 기호","wallets_add_token_decimals":"소숫점 정밀도","wallets_add_token_cancel":"취소","wallets_add_token_next":"다음","wallets_empty_tokens_tip":"자산이 없습니다. 토큰을 추가하세요.","wallets_empty_collectible_tip":"수집품이 없습니다. 수집품을 추가하세요.","wallets_address_copied":"주소가 복사되었습니다","wallets_address_copy":"복사","wallets_history_types":"유형","wallets_history_value":"값","wallets_history_time":"시간","wallets_history_receiver":"받는 사람","wallets_empty_history_tips":"거래 내역이 없습니다","wallets_loading_token":"토큰 로딩","personas_setup_connect_tips":"유저님의 {{type}} 계정을 연결하세요.","personas_setup_tip":"페르소나를 만들거나 복구하세요.","personas_setup_connect":"연결","personas_name_maximum_tips":"최대 길이는 {{length}} 자입니다.","personas_name_existed":"이미 존재된 페르소나입니다","personas_rename_placeholder":"페르소나 이름","personas_confirm":"확인","personas_cancel":"취소","personas_export_persona":"페르소나 수출","personas_export_persona_copy":"복사","personas_export_persona_copy_success":"복사됨","personas_export_persona_copy_failed":"복사 실패","personas_export_persona_confirm_password_tip":"비밀번호가 아직 설정되지 않습니다. 개인 키 수출하려면 백업 비밀번호는 먼저 설정해야 합니다.","personas_export_private":"개인 키 수출","personas_export_private_key_tip":"개인키만 수출이 가능합니다. 다른 데이터 수출할 수 없습니다.","personas_delete_confirm_tips":"페르소나 <i>{{nickname}}</i> 를 삭제되는 것을 확인하시고 비밀번호를 입력하세요.","personas_delete_dialog_title":"페르소나 삭제","personas_edit_dialog_title":"페르소나 편집","personas_edit":"편집","personas_delete":"삭제","personas_logout":"로그아웃","personas_logout_confirm_password_tip":"비밀번호가 아직 설정되지 않습니다. 페르소나에 로그아웃하려면 백업 비밀번호는 먼저 설정해야 합니다.","personas_add_persona":"페르소나 추가","personas_back_up":"백업","personas_connect_to":"{{internalName}} 연결하기","personas_disconnect":"연결 끊기","personas_disconnect_warning":"{{userId}} 의 {{network}} 계정 연결을 해제하시겠습니까? 연결이 끊긴 후 이 계정은 더 이상 Mask Network를 사용하여 정보를 해독하고 암호화할 수 없습니다.","personas_logout_warning":"로그아웃 후, 연결된 소셜 계정은 더 이상 암호화하거나 해독할 수 없습나다. 계정을 다시 이용하려면 아이덴티티, 개인 키, 로컬이나 클라우드 백업으로 복원할 수 있습니다.","personas_add":"추가","personas_upload_avatar":"아바타 업로드","personas_rename":"이름 바꾸기","personas_invite_post":"@{{identifier}} 안녕하세요. 암호화된 게시글을 보낼 수 있기를 위해 Mask 다운로드하세요. #mask_io install http://mask.io","personas_empty_contact_tips":"연락처에서 Mask Network 를 설치된 자가 없습니다. 친구를 초대하여 <i>{{name}}</i> 다운로드하세요.","personas_contacts_name":"이름","personas_contacts_operation":"조작","personas_contacts_invite":"초대","personas_post_is_empty":"작성된 게시글이 없습니다.","personas_post_create":"게시글 작성하기","settings_general":"일반","settings_backup_recovery":"백업 맟 복원","settings_local_backup":"로컬 백업","settings_cloud_backup":"클라우드 백업","settings_appearance_default":"시스템 따라 설정하기","settings_appearance_light":"라이트","settings_appearance_dark":"다크","settings_backup_preview_account":"계정","settings_backup_preview_personas":"페르소나","settings_backup_preview_associated_account":"관련 계정","settings_backup_preview_posts":"암호화된 게시물","settings_backup_preview_contacts":"연락처","settings_backup_preview_fils":"파일","settings_backup_preview_wallets":"로컬 월렛","settings_backup_preview_created_at":"백업 시간","settings_language_title":"언어","settings_language_desc":"이용하고 싶은 언어를 선택하세요","settings_language_auto":"시스템에 따라 설정","settings_appearance_title":"화면","settings_appearance_desc":"이용하고 싶은 테마를 선택하세요","settings_data_source_title":"데이터 소스","settings_data_source_desc":"다른 플랫폼에서 트렌딩 데이터 가져오기","settings_sync_with_mobile_title":"모바일과 싱크하기","settings_sync_with_mobile_desc":"모바일 디바이스와 계정과 정보를 싱크할 수 있습니다. Mask Network 모바일 앱을 켜고 설정에서 플러그인 싱크를 탭하세요.","settings_global_backup_title":"글로벌 백업","settings_global_backup_desc":"로컬 백업과 클라우드 백업을 제공합니다.","settings_global_backup_last":"가장 최근 백업은 {{backupAt}} 에서 수행되었습니다. 백업 방법: {{backupMethod}}.","settings_restore_database_title":"데이터베이스 복원","settings_restore_database_desc":"이전의 데이터베이스 백업에서 복원하기","settings_email_title":"이메일","settings_email_desc":"이메일을 연동하세요","settings_change_password_title":"비밀번호 백업","settings_change_password_desc":"백업 비밀번호 변경","settings_change_password_not_set":"비밀번호 백업이 설정되지 않습니다.","settings_phone_number_title":"전화번호","settings_phone_number_desc":"전화번호를 연동해주세요.","settings_password_rule":"백업 암호는 8자에서 20자 사이여야 하며 숫자, 대문자, 소문자 및 특수 문자를 포함해야 합니다.","settings_button_cancel":"취소","settings_button_confirm":"확인","settings_button_sync":"동기화","settings_button_backup":"백업","settings_button_recovery":"복구","settings_button_setup":"설정","settings_button_change":"변경","settings_dialogs_bind_email_or_phone":"이메일이나 전화번호를 연동해주세요.","settings_dialogs_verify_backup_password":"백업 비밀번호 인증","settings_dialogs_setting_backup_password":"백업 비밀번호 설정","settings_dialogs_change_backup_password":"백업 비밀번호 변경","settings_dialogs_setting_email":"이메일 설정","settings_dialogs_change_email":"이메일 변경","settings_dialogs_setting_phone_number":"전화번호 추가","settings_dialogs_change_phone_number":"전화 번호 변경","settings_dialogs_incorrect_code":"인증 코드가 잘못되었습니다","settings_dialogs_incorrect_email":"이메일 주소가 잘못되었습니다.","settings_dialogs_incorrect_phone":"전화번호가 잘못되었습니다.","settings_dialogs_incorrect_password":"잘못된 비밀번호.","settings_dialogs_inconsistency_password":"비밀번호 일치하지 않습니다.","settings_dialogs_current_email_validation":"현재 인증 이메일","settings_dialogs_change_email_validation":"이메일을 변경하기 위해 현재 이메일 주소를 인증해야 합니다.","settings_dialogs_current_phone_validation":"현재 인증 전화번호","settings_dialogs_change_phone_validation":"전화번호를 변경하기 위해 현재 전화번호를 인증해야 합니다.","settings_dialogs_backup_to_cloud":"클라우드 백업","settings_dialogs_merge_to_local_data":"로컬 데이터로 합병하기","settings_dialogs_backup_action_desc":"클라우드 백업이 이미 존재되어 있습니다. 클라우드 백업을 로컬에 합병하거나 로컬 데이터를 클라우드에 업로드하기를 선택하세요.","settings_dialogs_backup_to_cloud_action":"이 옵션은 기존 클라우드 백업을 로컬 데이터로 덮어씁니다.","settings_dialogs_backup_merge_cloud":"기존 클라우드 백업을 해독하려면 비밀번호를 입력해야 합니다. 기존 클라우드 백업과 로컬 데이터가 결합되고 암호화되어 클라우드에 업로드됩니다.","settings_dialogs_backup_merged_tip":"클라우드 백업은 이미 로컬로 다운받았습니다. 백업을 완성하려면 백업 버튼을 누르고 오든 테이터를 클라우드로 백업하세요.","settings_label_backup_password":"비밀번호 백업","settings_label_new_backup_password":"새로운 비밀번호 백업","settings_label_backup_password_cloud":"클라우드 파일 백업 비밀번호","settings_label_payment_password":"결재 비밀번호","settings_label_re_enter":"다시 입력","settings_alert_password_set":"백업 비밀번호 설정","settings_alert_password_updated":"백업 비밀번호 업데이트","settings_alert_email_set":"이메일 설정","settings_alert_email_updated":"이메일 업데이트되었습니다","settings_alert_phone_number_set":"전화번호 설정","settings_alert_phone_number_updated":"전화번호가 업데이트되었습니다","settings_alert_backup_fail":"백업 실패","settings_alert_backup_success":"데이터가 이미 백업되었습니다.","settings_alert_validation_code_sent":"인증 코드가 발송되었습니다","settings_alert_merge_success":"클라우드 백업과 로컬 데이터를 이미 합병되었습니다.","labs_file_service":"파일 서비스","labs_file_service_desc":"탈중앙화 파일 저장","labs_markets":"마켓","labs_markets_desc":"암호 친구에게 디지털 자산을 보내기","labs_red_packet":"레드 패킷","labs_red_packet_desc":"축복을 암호화된 레드 패킷으로 포장하고 친구들에게 보내세요.","labs_swap":"스왑","labs_swap_desc":"추가 비용과 제한 없이 DEX로 토큰을 구매하기","labs_transak":"Transak","labs_transak_desc":"Transak 지원으로 60+ 국가에서 암호화폐 구매하기","labs_snapshot":"Snapshot","labs_snapshot_desc":"소셜 미디어에서 직접 제안을 표시하고 투표하기","labs_market_trend":"마켓 추세","labs_market_trend_desc":"토큰 정보, 가격 차트, 거래 정보을 직접 소셜 미디어에서 표시하기","labs_collectibles":"Collectibles","labs_collectibles_desc":"Opensea and Rarible의 지정 정보를 포시하고 소셜미디어에서 경매하기","labs_gitcoin":"Gitcoin","labs_gitcoin_desc":"Gitcoin의 지정 정보를 표시하고 소셜미디어에서 프로젝트에게 적접 기부하기","labs_valuables":"가치","labs_valuables_desc":"크리에이터가 서명한 트윗을 구입 및 판매하기","labs_dhedge":"DHEDGE","labs_dhedge_desc":"이더리움의 탈중앙화 헤지 펀드","labs_mask_box":"MaskBox","labs_mask_box_desc":"NFT 미스터리박스를 출시하는 멀티체인 탈중앙화 플랫폼","labs_loot_man":"LootMan by MintTeam","labs_loot_man_desc":"NFT의 무한한 가능성을 탐색. 소셜미디어에서 보유하는 NFT를 전시하는 혁신적인 방식","labs_good_ghosting":"GoodGhosting","labs_good_ghosting_desc":"트위터에서 매주 저축 습관을 기른다.","labs_pool_together":"PoolTogether","labs_pool_together_desc":"트위터에서 무손실 로또에 참여한다.","labs_settings_market_trend":"마켓 추세 설정","labs_settings_market_trend_source":"디폴트 추세 소스","labs_settings_swap":"스왑 설정","labs_settings_swap_network":"{{network}} 네트워크 디폴트 추세 소스","labs_pets":"LootMan by MintTeam","labs_pets_desc":"NFT의 무한한 가능성을 탐색. 소셜미디어에서 보유하는 NFT를 전시하는 혁신적인 방식","labs_setup_tutorial":"튜토리얼 설정","labs_do_not_show_again":"다시 보이지 않기","labs_cryptoartai":"CRYPTOART.AI","labs_cryptoartai_desc":"암호화 디지털 예술 연결.","dashboard_mobile_test":"모바일 테스트 참여","dashboard_source_code":"소스 코드","privacy_policy":"개인정보처리방침","version_of_stable":"버전 {{version}}","version_of_unstable":"버전 {{version}}-{{build}}-{{hash}}","register_restore_backups":"백업 복원","register_restore_backups_cancel":"취소","register_restore_backups_confirm":"복원","register_restore_backups_hint":"클릭하거나 파일을 여기서 끌어들이세요","register_restore_backups_file":"파일","register_restore_backups_text":"텍스트","register_restore_backups_tabs":"백업 복원 탭","create_wallet_mnemonic_tip":"월렛의 자산을 보호하기 위해 니모닉 단어를 잘 저장하고 잊지 마세요.","create_wallet_password_uppercase_tip":"대문자 하나가 포함되어야 합니다","create_wallet_password_lowercase_tip":"소문자 하나가 포함되어야 합니다","create_wallet_password_number_tip":"숫자 하나가 포함되어야 합니다","create_wallet_password_special_tip":"특수문자 하나가 포함되어야 합니다","create_wallet_password_satisfied_requirement":"비밀번호가 요구 사항을 충족하지 않습니다.","create_wallet_password_match_tip":"비밀번호가 일치하지 않습니다","create_wallet_password_length_error":"비밀번호 길이가 잘못되었습니다.","create_wallet_name_placeholder":"1-12 자 입력하세요","create_wallet_form_title":"월렛 만들기","create_wallet_wallet_name":"월렛 이름","create_wallet_payment_password":"결재 비밀번호","create_wallet_re_enter_payment_password":"결재 비밀번호 다시 설정","create_wallet_payment_password_tip":"백업 암호는 8자에서 20자 사이여야 하며 숫자, 대문자, 소문자 및 특수 문자를 포함해야 합니다.","create_wallet_your_wallet_address":"월렛 주소","create_wallet_done":"완료","create_wallet_verify_words":"이모닉 단어 인증","create_wallet_mnemonic_word_not_match":"니모닉 단어가 불일치합니다"}');

/***/ }),

/***/ 59641:
/***/ ((module) => {

module.exports = JSON.parse('{"about":"crwdns1619:0crwdne1619:0","wallets":"crwdns1621:0crwdne1621:0","personas":"crwdns1623:0crwdne1623:0","persona":"crwdns7557:0crwdne7557:0","refresh":"crwdns7559:0crwdne7559:0","next":"crwdns7561:0crwdne7561:0","cancel":"crwdns7563:0crwdne7563:0","back":"crwdns7565:0crwdne7565:0","agree":"crwdns7567:0crwdne7567:0","confirm":"crwdns7569:0crwdne7569:0","verify":"crwdns7571:0crwdne7571:0","go_back":"crwdns7573:0crwdne7573:0","connect":"crwdns7575:0crwdne7575:0","searching":"crwdns7863:0crwdne7863:0","restore":"crwdns7835:0crwdne7835:0","save":"crwdns7955:0crwdne7955:0","manage":"crwdns8027:0crwdne8027:0","recovery":"crwdns7995:0crwdne7995:0","successful":"crwdns8077:0crwdne8077:0","close":"crwdns8173:0crwdne8173:0","send":"crwdns8203:0crwdne8203:0","resend":"crwdns8205:0crwdne8205:0","print":"crwdns13039:0crwdne13039:0","download":"crwdns13041:0crwdne13041:0","print_preview":"crwdns13043:0crwdne13043:0","download_preview":"crwdns13045:0crwdne13045:0","confirm_password":"crwdns8175:0crwdne8175:0","about_dialog_license":"crwdns1625:0crwdne1625:0","footer_bounty_list":"crwdns1627:0crwdne1627:0","about_dialog_source_code":"crwdns1629:0crwdne1629:0","about_dialog_feedback":"crwdns1631:0crwdne1631:0","about_dialog_touch":"crwdns1633:0crwdne1633:0","about_dialog_description":"crwdns1635:0crwdne1635:0","setup_page_title":"crwdns1637:0crwdne1637:0","setup_page_description":"crwdns1639:0crwdne1639:0","setup_page_create_account_title":"crwdns1641:0crwdne1641:0","setup_page_create_account_subtitle":"crwdns1643:0crwdne1643:0","setup_page_create_account_button":"crwdns1645:0crwdne1645:0","setup_page_create_restore_title":"crwdns1647:0crwdne1647:0","setup_page_create_restore_subtitle":"crwdns1649:0crwdne1649:0","setup_page_create_restore_button":"crwdns1651:0crwdne1651:0","create_account_mask_id":"crwdns13047:0crwdne13047:0","create_account_private_key":"crwdns13049:0crwdne13049:0","create_account_identity_id":"crwdns13051:0crwdne13051:0","create_account_identity_title":"crwdns7577:0crwdne7577:0","create_account_sign_in_button":"crwdns7579:0crwdne7579:0","create_account_persona_exists":"crwdns13053:0crwdne13053:0","create_account_mnemonic_download_or_print":"crwdns13055:0crwdne13055:0","create_account_preview_tip":"crwdns13057:0crwdne13057:0","create_account_mnemonic_confirm_failed":"crwdns7583:0crwdne7583:0","create_account_connect_social_media_button":"crwdns7585:0crwdne7585:0","create_account_connect_social_media":"crwdns7587:0{{type}}crwdne7587:0","create_account_persona_title":"crwdns7589:0crwdne7589:0","create_account_persona_subtitle":"crwdns7591:0crwdne7591:0","create_account_persona_successfully":"crwdns7593:0crwdne7593:0","create_account_connect_social_media_title":"crwdns7595:0crwdne7595:0","create_account_failed":"crwdns7597:0crwdne7597:0","sign_in_account_identity_title":"crwdns7599:0crwdne7599:0","sign_in_account_tab_identity":"crwdns10039:0crwdne10039:0","sign_in_account_sign_up_button":"crwdns7601:0crwdne7601:0","sign_in_account_identity_warning":"crwdns7603:0crwdne7603:0","sign_in_account_private_key_placeholder":"crwdns7605:0crwdne7605:0","sign_in_account_private_key_error":"crwdns7607:0crwdne7607:0","sign_in_account_private_key_persona_not_found":"crwdns7609:0crwdne7609:0","sign_in_account_private_key_warning":"crwdns7611:0crwdne7611:0","sign_in_account_mnemonic_confirm_failed":"crwdns8191:0crwdne8191:0","sign_in_account_cloud_backup_send_email_success":"crwdns8079:0{{type}}crwdnd8079:0{{type}}crwdne8079:0","sign_in_account_local_backup_warning":"crwdns7613:0crwdne7613:0","sign_in_account_local_backup_payment_password":"crwdns9329:0crwdne9329:0","sign_in_account_local_backup_file_drag":"crwdns7615:0crwdne7615:0","sign_in_account_cloud_backup_warning":"crwdns7617:0crwdne7617:0","sign_in_account_cloud_backup_not_support":"crwdns8081:0crwdne8081:0","sign_in_account_cloud_send_verification_code_tip":"crwdns8193:0crwdne8193:0","sign_in_account_cloud_backup_failed":"crwdns8083:0crwdne8083:0","sign_in_account_cloud_backup_email_or_phone_number":"crwdns7619:0crwdne7619:0","sign_in_account_cloud_backup_password":"crwdns7621:0crwdne7621:0","sign_in_account_cloud_restore_failed":"crwdns7623:0crwdne7623:0","sign_in_account_cloud_backup_download_failed":"crwdns7625:0crwdne7625:0","sign_in_account_cloud_backup_decrypt_failed":"crwdns7627:0crwdne7627:0","sign_in_account_cloud_backup_email_format_error":"crwdns8085:0crwdne8085:0","sign_in_account_cloud_backup_phone_format_error":"crwdns8087:0crwdne8087:0","sign_in_account_cloud_backup_synchronize_password_tip":"crwdns8089:0crwdne8089:0","cloud_backup":"crwdns7629:0crwdne7629:0","wallets_transfer":"crwdns1653:0crwdne1653:0","wallets_assets":"crwdns8003:0crwdne8003:0","wallets_transfer_memo":"crwdns8005:0crwdne8005:0","wallets_transfer_amount":"crwdns8007:0crwdne8007:0","wallets_transfer_to_address":"crwdns8009:0crwdne8009:0","wallets_transfer_error_amount_absence":"crwdns8011:0crwdne8011:0","wallets_transfer_error_address_absence":"crwdns8013:0crwdne8013:0","wallets_transfer_error_contract":"crwdns9331:0crwdne9331:0","wallets_transfer_error_nft":"crwdns9333:0crwdne9333:0","wallets_transfer_error_invalid_address":"crwdns8015:0crwdne8015:0","wallet_transfer_error_no_address_has_been_set_name":"crwdns10429:0crwdne10429:0","wallet_transfer_error_no_ens_support":"crwdns10431:0crwdne10431:0","wallets_transfer_error_insufficient_balance":"crwdns8017:0{{symbol}}crwdne8017:0","wallets_transfer_error_same_address_with_current_account":"crwdns10617:0crwdne10617:0","wallets_transfer_error_is_contract_address":"crwdns10619:0crwdne10619:0","wallets_transfer_send":"crwdns8019:0crwdne8019:0","wallets_transfer_memo_placeholder":"crwdns8021:0crwdne8021:0","wallets_transfer_contract":"crwdns9335:0crwdne9335:0","wallets_transfer_contract_placeholder":"crwdns9337:0crwdne9337:0","wallets_swap":"crwdns1655:0crwdne1655:0","wallets_red_packet":"crwdns1657:0crwdne1657:0","wallets_sell":"crwdns1659:0crwdne1659:0","wallets_history":"crwdns1661:0crwdne1661:0","settings":"crwdns1663:0crwdne1663:0","gas_fee":"crwdns8989:0crwdne8989:0","transfer_cost":"crwdns8991:0{{gasFee}}crwdnd8991:0{{symbol}}crwdnd8991:0{{usd}}crwdne8991:0","done":"crwdns1665:0crwdne1665:0","labs":"crwdns1667:0crwdne1667:0","wallet_transactions_pending":"crwdns7921:0crwdne7921:0","wallet_gas_fee_settings_low":"crwdns9015:0crwdne9015:0","wallet_gas_fee_settings_medium":"crwdns9017:0crwdne9017:0","wallet_gas_fee_settings_high":"crwdns9019:0crwdne9019:0","wallets_startup_create":"crwdns1669:0crwdne1669:0","wallets_startup_create_desc":"crwdns1671:0crwdne1671:0","wallets_startup_create_action":"crwdns1673:0crwdne1673:0","wallets_startup_import":"crwdns1675:0crwdne1675:0","wallets_startup_import_desc":"crwdns1677:0crwdne1677:0","wallets_startup_import_action":"crwdns1679:0crwdne1679:0","wallets_startup_connect":"crwdns1681:0crwdne1681:0","wallets_startup_connect_desc":"crwdns1683:0crwdne1683:0","wallets_startup_connect_action":"crwdns1685:0crwdne1685:0","wallets_connect_wallet_metamask":"crwdns1687:0crwdne1687:0","wallets_connect_wallet_connect":"crwdns1689:0crwdne1689:0","wallets_connect_wallet_polka":"crwdns1691:0crwdne1691:0","wallets_create_wallet_input_placeholder":"crwdns1693:0crwdne1693:0","wallets_create_successfully_title":"crwdns1695:0crwdne1695:0","wallets_create_successfully_tips":"crwdns1697:0crwdne1697:0","wallets_create_successfully_unlock":"crwdns1699:0crwdne1699:0","wallets_create_wallet_alert":"crwdns1701:0crwdne1701:0","wallets_wallet_connect_title":"crwdns1703:0crwdne1703:0","wallets_wallet_mnemonic":"crwdns1705:0crwdne1705:0","wallets_wallet_json_file":"crwdns1707:0crwdne1707:0","wallets_wallet_private_key":"crwdns1709:0crwdne1709:0","wallets_import_wallet_tabs":"crwdns1711:0crwdne1711:0","wallets_import_wallet_password_placeholder":"crwdns1713:0crwdne1713:0","wallets_import_wallet_cancel":"crwdns1715:0crwdne1715:0","wallets_import_wallet_import":"crwdns1717:0crwdne1717:0","wallets_create_wallet_tabs":"crwdns1719:0crwdne1719:0","wallets_create_wallet_refresh":"crwdns1721:0crwdne1721:0","wallets_create_wallet_remember_later":"crwdns1723:0crwdne1723:0","wallets_create_wallet_verification":"crwdns1725:0crwdne1725:0","wallets_collectible_address":"crwdns1727:0crwdne1727:0","wallets_collectible_token_id":"crwdns7951:0crwdne7951:0","wallets_collectible_field_contract_require":"crwdns9021:0crwdne9021:0","wallets_collectible_field_token_id_require":"crwdns9023:0crwdne9023:0","wallets_collectible_load_end":"crwdns9339:0crwdne9339:0","wallets_balance":"crwdns1729:0crwdne1729:0","wallets_balance_all_chain":"crwdns9341:0crwdne9341:0","wallets_balance_Send":"crwdns1731:0crwdne1731:0","wallets_balance_Buy":"crwdns1733:0crwdne1733:0","wallets_balance_Swap":"crwdns1735:0crwdne1735:0","wallets_balance_Receive":"crwdns1737:0crwdne1737:0","wallets_assets_token":"crwdns1739:0crwdne1739:0","wallets_assets_token_sent_not_connect_tip":"crwdns9343:0{{chainName}}crwdne9343:0","wallets_assets_token_sent_switch_network_tip":"crwdns9345:0crwdne9345:0","wallets_assets_investment":"crwdns1741:0crwdne1741:0","wallets_assets_collectibles":"crwdns8171:0crwdne8171:0","wallets_assets_custom_token":"crwdns1745:0crwdne1745:0","wallets_assets_custom_collectible":"crwdns1747:0crwdne1747:0","wallets_assets_asset":"crwdns1749:0crwdne1749:0","wallets_assets_balance":"crwdns1751:0crwdne1751:0","wallets_assets_price":"crwdns1753:0crwdne1753:0","wallets_assets_value":"crwdns1755:0crwdne1755:0","wallets_assets_operation":"crwdns1757:0crwdne1757:0","wallets_address":"crwdns1759:0crwdne1759:0","wallets_receive_tips":"crwdns1761:0{{chainName}}crwdne1761:0","wallets_add_collectible":"crwdns1763:0crwdne1763:0","wallets_incorrect_address":"crwdns1765:0crwdne1765:0","wallets_collectible_been_added":"crwdns1767:0crwdne1767:0","wallets_collectible_error_not_exist":"crwdns7953:0crwdne7953:0","wallets_collectible_contract_is_empty":"crwdns9347:0crwdne9347:0","wallets_collectible_token_id_is_empty":"crwdns9349:0crwdne9349:0","wallets_collectible_add":"crwdns1769:0crwdne1769:0","wallets_add_token":"crwdns1771:0crwdne1771:0","wallets_token_been_added":"crwdns1773:0crwdne1773:0","wallets_token_symbol_tips":"crwdns1775:0crwdne1775:0","wallets_token_decimals_tips":"crwdns1777:0crwdne1777:0","wallets_add_token_contract_address":"crwdns1779:0crwdne1779:0","wallets_add_token_symbol":"crwdns1781:0crwdne1781:0","wallets_add_token_decimals":"crwdns1783:0crwdne1783:0","wallets_add_token_cancel":"crwdns1785:0crwdne1785:0","wallets_add_token_next":"crwdns1787:0crwdne1787:0","wallets_empty_tokens_tip":"crwdns1789:0crwdne1789:0","wallets_empty_collectible_tip":"crwdns1791:0crwdne1791:0","wallets_address_copied":"crwdns1793:0crwdne1793:0","wallets_address_copy":"crwdns1795:0crwdne1795:0","wallets_history_types":"crwdns1797:0crwdne1797:0","wallets_history_value":"crwdns1799:0crwdne1799:0","wallets_history_time":"crwdns1801:0crwdne1801:0","wallets_history_receiver":"crwdns1803:0crwdne1803:0","wallets_empty_history_tips":"crwdns1805:0crwdne1805:0","wallets_loading_token":"crwdns1807:0crwdne1807:0","personas_setup_connect_tips":"crwdns1809:0{{type}}crwdne1809:0","personas_setup_tip":"crwdns8091:0crwdne8091:0","personas_setup_connect":"crwdns1811:0crwdne1811:0","personas_name_maximum_tips":"crwdns1813:0{{length}}crwdne1813:0","personas_name_existed":"crwdns7965:0crwdne7965:0","personas_rename_placeholder":"crwdns1815:0crwdne1815:0","personas_confirm":"crwdns1817:0crwdne1817:0","personas_cancel":"crwdns1819:0crwdne1819:0","personas_export_persona":"crwdns7939:0crwdne7939:0","personas_export_persona_copy":"crwdns7941:0crwdne7941:0","personas_export_persona_copy_success":"crwdns7943:0crwdne7943:0","personas_export_persona_copy_failed":"crwdns7945:0crwdne7945:0","personas_export_persona_confirm_password_tip":"crwdns8177:0crwdne8177:0","personas_export_private":"crwdns7947:0crwdne7947:0","personas_export_private_key_tip":"crwdns7949:0crwdne7949:0","personas_delete_confirm_tips":"crwdns1821:0{{nickname}}crwdne1821:0","personas_delete_dialog_title":"crwdns1823:0crwdne1823:0","personas_edit_dialog_title":"crwdns1825:0crwdne1825:0","personas_edit":"crwdns1827:0crwdne1827:0","personas_delete":"crwdns1829:0crwdne1829:0","personas_logout":"crwdns8179:0crwdne8179:0","personas_logout_confirm_password_tip":"crwdns8181:0crwdne8181:0","personas_add_persona":"crwdns1831:0crwdne1831:0","personas_back_up":"crwdns1833:0crwdne1833:0","personas_connect_to":"crwdns1835:0{{internalName}}crwdne1835:0","personas_disconnect":"crwdns1837:0crwdne1837:0","personas_disconnect_raw":"crwdns14714:0crwdne14714:0","personas_disconnect_warning":"crwdns7997:0crwdne7997:0","personas_logout_warning":"crwdns8183:0crwdne8183:0","personas_add":"crwdns7957:0crwdne7957:0","personas_upload_avatar":"crwdns7959:0crwdne7959:0","personas_rename":"crwdns1839:0crwdne1839:0","personas_invite_post":"crwdns7903:0{{identifier}}crwdne7903:0","personas_empty_contact_tips":"crwdns7905:0{{name}}crwdne7905:0","personas_contacts_name":"crwdns7907:0crwdne7907:0","personas_contacts_operation":"crwdns7909:0crwdne7909:0","personas_contacts_invite":"crwdns7911:0crwdne7911:0","personas_post_is_empty":"crwdns7979:0crwdne7979:0","personas_post_create":"crwdns7981:0crwdne7981:0","settings_general":"crwdns1841:0crwdne1841:0","settings_backup_recovery":"crwdns7631:0crwdne7631:0","settings_local_backup":"crwdns7865:0crwdne7865:0","settings_cloud_backup":"crwdns7867:0crwdne7867:0","settings_appearance_default":"crwdns7633:0crwdne7633:0","settings_appearance_light":"crwdns7635:0crwdne7635:0","settings_appearance_dark":"crwdns7637:0crwdne7637:0","settings_backup_preview_account":"crwdns7639:0crwdne7639:0","settings_backup_preview_personas":"crwdns7641:0crwdne7641:0","settings_backup_preview_associated_account":"crwdns7643:0crwdne7643:0","settings_backup_preview_posts":"crwdns7645:0crwdne7645:0","settings_backup_preview_contacts":"crwdns7647:0crwdne7647:0","settings_backup_preview_fils":"crwdns7649:0crwdne7649:0","settings_backup_preview_wallets":"crwdns7651:0crwdne7651:0","settings_backup_preview_created_at":"crwdns7653:0crwdne7653:0","settings_language_title":"crwdns1847:0crwdne1847:0","settings_language_desc":"crwdns1849:0crwdne1849:0","settings_language_auto":"crwdns3967:0crwdne3967:0","settings_appearance_title":"crwdns1851:0crwdne1851:0","settings_appearance_desc":"crwdns1853:0crwdne1853:0","settings_data_source_title":"crwdns1855:0crwdne1855:0","settings_data_source_desc":"crwdns1857:0crwdne1857:0","settings_sync_with_mobile_title":"crwdns1859:0crwdne1859:0","settings_sync_with_mobile_desc":"crwdns1861:0crwdne1861:0","settings_global_backup_title":"crwdns1863:0crwdne1863:0","settings_global_backup_desc":"crwdns1865:0crwdne1865:0","settings_global_backup_last":"crwdns7869:0{{backupAt}}crwdnd7869:0{{backupMethod}}crwdne7869:0","settings_restore_database_title":"crwdns1867:0crwdne1867:0","settings_restore_database_desc":"crwdns1869:0crwdne1869:0","settings_email_title":"crwdns7967:0crwdne7967:0","settings_email_desc":"crwdns7969:0crwdne7969:0","settings_change_password_title":"crwdns7971:0crwdne7971:0","settings_change_password_desc":"crwdns7973:0crwdne7973:0","settings_change_password_not_set":"crwdns7975:0crwdne7975:0","settings_phone_number_title":"crwdns7659:0crwdne7659:0","settings_phone_number_desc":"crwdns7661:0crwdne7661:0","settings_password_rule":"crwdns7665:0crwdne7665:0","settings_button_cancel":"crwdns7977:0crwdne7977:0","settings_button_confirm":"crwdns7669:0crwdne7669:0","settings_button_sync":"crwdns7671:0crwdne7671:0","settings_button_backup":"crwdns7673:0crwdne7673:0","settings_button_recovery":"crwdns7675:0crwdne7675:0","settings_button_setup":"crwdns9495:0crwdne9495:0","settings_button_change":"crwdns7679:0crwdne7679:0","settings_dialogs_bind_email_or_phone":"crwdns7871:0crwdne7871:0","settings_dialogs_verify_backup_password":"crwdns7683:0crwdne7683:0","settings_dialogs_setting_backup_password":"crwdns7685:0crwdne7685:0","settings_dialogs_change_backup_password":"crwdns7687:0crwdne7687:0","settings_dialogs_setting_email":"crwdns7689:0crwdne7689:0","settings_dialogs_change_email":"crwdns7691:0crwdne7691:0","settings_dialogs_setting_phone_number":"crwdns7693:0crwdne7693:0","settings_dialogs_change_phone_number":"crwdns7695:0crwdne7695:0","settings_dialogs_incorrect_code":"crwdns7697:0crwdne7697:0","settings_dialogs_incorrect_email":"crwdns7699:0crwdne7699:0","settings_dialogs_incorrect_phone":"crwdns7701:0crwdne7701:0","settings_dialogs_incorrect_password":"crwdns7703:0crwdne7703:0","settings_dialogs_inconsistency_password":"crwdns7705:0crwdne7705:0","settings_dialogs_current_email_validation":"crwdns7707:0crwdne7707:0","settings_dialogs_change_email_validation":"crwdns8207:0crwdne8207:0","settings_dialogs_current_phone_validation":"crwdns7709:0crwdne7709:0","settings_dialogs_change_phone_validation":"crwdns8209:0crwdne8209:0","settings_dialogs_backup_to_cloud":"crwdns9027:0crwdne9027:0","settings_dialogs_merge_to_local_data":"crwdns7875:0crwdne7875:0","settings_dialogs_backup_action_desc":"crwdns7879:0crwdne7879:0","settings_dialogs_backup_to_cloud_action":"crwdns10601:0crwdne10601:0","settings_dialogs_backup_merge_cloud":"crwdns10603:0crwdne10603:0","settings_dialogs_backup_merged_tip":"crwdns9029:0crwdne9029:0","settings_label_backup_password":"crwdns7711:0crwdne7711:0","settings_label_new_backup_password":"crwdns7713:0crwdne7713:0","settings_label_backup_password_cloud":"crwdns9025:0crwdne9025:0","settings_label_payment_password":"crwdns7881:0crwdne7881:0","settings_label_re_enter":"crwdns7715:0crwdne7715:0","settings_alert_password_set":"crwdns7883:0crwdne7883:0","settings_alert_password_updated":"crwdns7885:0crwdne7885:0","settings_alert_email_set":"crwdns7887:0crwdne7887:0","settings_alert_email_updated":"crwdns7889:0crwdne7889:0","settings_alert_phone_number_set":"crwdns7891:0crwdne7891:0","settings_alert_phone_number_updated":"crwdns7893:0crwdne7893:0","settings_alert_backup_fail":"crwdns7895:0crwdne7895:0","settings_alert_backup_success":"crwdns7897:0crwdne7897:0","settings_alert_validation_code_sent":"crwdns7899:0crwdne7899:0","settings_alert_merge_success":"crwdns7901:0crwdne7901:0","labs_file_service":"crwdns1885:0crwdne1885:0","labs_file_service_desc":"crwdns1887:0crwdne1887:0","labs_markets":"crwdns1889:0crwdne1889:0","labs_markets_desc":"crwdns1891:0crwdne1891:0","labs_red_packet":"crwdns1893:0crwdne1893:0","labs_red_packet_desc":"crwdns1895:0crwdne1895:0","labs_swap":"crwdns1897:0crwdne1897:0","labs_swap_desc":"crwdns1899:0crwdne1899:0","labs_transak":"crwdns1901:0crwdne1901:0","labs_transak_desc":"crwdns1903:0crwdne1903:0","labs_savings":"crwdns13246:0crwdne13246:0","labs_savings_desc":"crwdns13248:0crwdne13248:0","labs_snapshot":"crwdns1905:0crwdne1905:0","labs_snapshot_desc":"crwdns1907:0crwdne1907:0","labs_market_trend":"crwdns1909:0crwdne1909:0","labs_market_trend_desc":"crwdns1911:0crwdne1911:0","labs_collectibles":"crwdns1913:0crwdne1913:0","labs_collectibles_desc":"crwdns1915:0crwdne1915:0","labs_gitcoin":"crwdns1917:0crwdne1917:0","labs_gitcoin_desc":"crwdns1919:0crwdne1919:0","labs_valuables":"crwdns1921:0crwdne1921:0","labs_valuables_desc":"crwdns1923:0crwdne1923:0","labs_dhedge":"crwdns1925:0crwdne1925:0","labs_dhedge_desc":"crwdns1927:0crwdne1927:0","labs_mask_box":"crwdns10323:0crwdne10323:0","labs_mask_box_desc":"crwdns10325:0crwdne10325:0","labs_loot_man":"crwdns10327:0crwdne10327:0","labs_loot_man_desc":"crwdns10329:0crwdne10329:0","labs_good_ghosting":"crwdns10331:0crwdne10331:0","labs_good_ghosting_desc":"crwdns10333:0crwdne10333:0","labs_pool_together":"crwdns10335:0crwdne10335:0","labs_pool_together_desc":"crwdns10337:0crwdne10337:0","labs_settings_market_trend":"crwdns1929:0crwdne1929:0","labs_settings_market_trend_source":"crwdns1931:0crwdne1931:0","labs_settings_swap":"crwdns1933:0crwdne1933:0","labs_settings_swap_network":"crwdns8195:0{{network}}crwdne8195:0","labs_pets":"crwdns9397:0crwdne9397:0","labs_pets_desc":"crwdns9399:0crwdne9399:0","labs_cyber_connect":"crwdns13316:0crwdne13316:0","labs_cyber_connect_desc":"crwdns13318:0crwdne13318:0","labs_setup_tutorial":"crwdns10339:0crwdne10339:0","labs_do_not_show_again":"crwdns10341:0crwdne10341:0","labs_cryptoartai":"crwdns10519:0crwdne10519:0","labs_cryptoartai_desc":"crwdns10521:0crwdne10521:0","labs_art_blocks":"crwdns14476:0crwdne14476:0","labs_art_blocks_desc":"crwdns14478:0crwdne14478:0","dashboard_mobile_test":"crwdns1941:0crwdne1941:0","dashboard_source_code":"crwdns1943:0crwdne1943:0","privacy_policy":"crwdns1945:0crwdne1945:0","version_of_stable":"crwdns1947:0{{version}}crwdne1947:0","version_of_unstable":"crwdns1949:0{{version}}crwdnd1949:0{{build}}crwdnd1949:0{{hash}}crwdne1949:0","register_restore_backups":"crwdns1951:0crwdne1951:0","register_restore_backups_cancel":"crwdns1953:0crwdne1953:0","register_restore_backups_confirm":"crwdns1955:0crwdne1955:0","register_restore_backups_hint":"crwdns1957:0crwdne1957:0","register_restore_backups_file":"crwdns1959:0crwdne1959:0","register_restore_backups_text":"crwdns1961:0crwdne1961:0","register_restore_backups_tabs":"crwdns1963:0crwdne1963:0","create_wallet_mnemonic_tip":"crwdns7725:0crwdne7725:0","create_wallet_password_uppercase_tip":"crwdns7727:0crwdne7727:0","create_wallet_password_lowercase_tip":"crwdns7729:0crwdne7729:0","create_wallet_password_number_tip":"crwdns7731:0crwdne7731:0","create_wallet_password_special_tip":"crwdns7733:0crwdne7733:0","create_wallet_password_satisfied_requirement":"crwdns9351:0crwdne9351:0","create_wallet_password_match_tip":"crwdns7735:0crwdne7735:0","create_wallet_password_length_error":"crwdns9353:0crwdne9353:0","create_wallet_name_placeholder":"crwdns7737:0crwdne7737:0","create_wallet_form_title":"crwdns7739:0crwdne7739:0","create_wallet_wallet_name":"crwdns7741:0crwdne7741:0","create_wallet_payment_password":"crwdns7743:0crwdne7743:0","create_wallet_re_enter_payment_password":"crwdns7745:0crwdne7745:0","create_wallet_payment_password_tip":"crwdns7747:0crwdne7747:0","create_wallet_your_wallet_address":"crwdns7749:0crwdne7749:0","create_wallet_done":"crwdns7751:0crwdne7751:0","create_wallet_verify_words":"crwdns7753:0crwdne7753:0","create_wallet_mnemonic_word_not_match":"crwdns8029:0crwdne8029:0"}');

/***/ }),

/***/ 32284:
/***/ ((module) => {

module.exports = JSON.parse('{"about":"关于","wallets":"钱包","personas":"身份","persona":"身份","refresh":"刷新","next":"下一步","cancel":"取消","back":"返回","agree":"同意","confirm":"确认","verify":"验证","go_back":"返回","connect":"连接","searching":"搜索中","restore":"恢复","save":"保存","manage":"管理","recovery":"恢复","successful":"成功","close":"关闭","send":"发送","resend":"重新发送","print":"打印","download":"下载","print_preview":"打印预览","download_preview":"下载预览","confirm_password":"密码确认","about_dialog_license":"开源协议： ","footer_bounty_list":"赏金列表","about_dialog_source_code":"源代码： ","about_dialog_feedback":"反馈： ","about_dialog_touch":"联系我们","about_dialog_description":"Mask Network 引领您探索更新更开放的互联网。Mask Network 允许您在社交网络上发送加密的贴文。 同时我们提供了更多功能，譬如发送加密红包，购买加密货币，加密文件服务等。","setup_page_title":"欢迎来到 Mask Network！","setup_page_description":"在社交网络上加密您的贴文和聊天内容，只允许您的朋友进行解密。","setup_page_create_account_title":"创建身份","setup_page_create_account_subtitle":"构建您的数字身份系统，探索 Web 3.0","setup_page_create_account_button":"创建","setup_page_create_restore_title":"恢复身份","setup_page_create_restore_subtitle":"通过身份助记词或历史备份恢复。","setup_page_create_restore_button":"恢复或登录","create_account_private_key":"私钥","create_account_identity_id":"身份助记词","create_account_identity_title":"创建Mask Network身份","create_account_sign_in_button":"恢复或登录","create_account_persona_exists":"该身份已存在。","create_account_mnemonic_download_or_print":"我已妥善保存我的身份信息。","create_account_preview_tip":"这个二维码保存您的身份信息，请妥善保存。您可以使用 Mask APP 扫描二维码登录您的身份。","create_account_mnemonic_confirm_failed":"助记词不正确","create_account_connect_social_media_button":"创建","create_account_connect_social_media":"连接到 {{type}}","create_account_persona_title":"欢迎来到 Mask Network！","create_account_persona_subtitle":"您可以创建个人身份并连接社交账户","create_account_persona_successfully":"创建身份成功","create_account_connect_social_media_title":"连接到社交媒体","create_account_failed":"创建帐户失败","sign_in_account_identity_title":"恢复或登录","sign_in_account_tab_identity":"身份","sign_in_account_sign_up_button":"注册","sign_in_account_identity_warning":"数字身份助记词只能恢复您的数字身份。它可以加密并解密由这个数字身份签名和发送的社交网络信息内容。","sign_in_account_private_key_placeholder":"输入您的私钥","sign_in_account_private_key_error":"私钥不正确","sign_in_account_private_key_persona_not_found":"无法找到身份","sign_in_account_private_key_warning":"数字身份助记词只能恢复您的数字身份。它可以加密并解密由这个数字身份签名和发送的社交网络信息内容。","sign_in_account_mnemonic_confirm_failed":"助记词不正确","sign_in_account_cloud_backup_send_email_success":"验证码已发送到您的 {{type}}。请检查您的 {{type}}。","sign_in_account_local_backup_warning":"本地备份可以恢复本地存储的所有数据。","sign_in_account_local_backup_payment_password":"支付密码","sign_in_account_local_backup_file_drag":"请点击选择或拖动文件到这里","sign_in_account_cloud_backup_warning":"云端备份会保存并加密您的数据。","sign_in_account_cloud_backup_not_support":"不支持的数据备份格式","sign_in_account_cloud_send_verification_code_tip":"发送验证码至","sign_in_account_cloud_backup_failed":"恢复备份失败，请再试一次。","sign_in_account_cloud_backup_email_or_phone_number":"电子邮箱或电话号码","sign_in_account_cloud_backup_password":"备份密码","sign_in_account_cloud_restore_failed":"恢复失败","sign_in_account_cloud_backup_download_failed":"备份文件下载失败","sign_in_account_cloud_backup_decrypt_failed":"备份解密失败，请检查密码","sign_in_account_cloud_backup_email_format_error":"邮箱地址不正确。","sign_in_account_cloud_backup_phone_format_error":"此电话号码不正确。","sign_in_account_cloud_backup_synchronize_password_tip":"已成功验证您的云端备份密码，备份正在上传。 为了备份密码的一致，请确认您是否愿意将您的云端备份密码设置为本地备份密码。","cloud_backup":"云端备份","wallets_transfer":"转账","wallets_assets":"资产","wallets_transfer_memo":"备注","wallets_transfer_amount":"数额","wallets_transfer_to_address":"发送到地址","wallets_transfer_error_amount_absence":"输入数额","wallets_transfer_error_address_absence":"输入收款人地址","wallets_transfer_error_contract":"选择 NFT 合约","wallets_transfer_error_nft":"选择一个 NFT","wallets_transfer_error_invalid_address":"收款人地址无效","wallet_transfer_error_no_address_has_been_set_name":"接收人地址无效。","wallet_transfer_error_no_ens_support":"网络不支持 ENS。","wallets_transfer_error_insufficient_balance":"{{symbol}} 余额不足","wallets_transfer_error_same_address_with_current_account":"此接收地址与发送地址相同，请重新检查。","wallets_transfer_error_is_contract_address":"此接收地址为合约地址，请重新检查。","wallets_transfer_send":"发送","wallets_transfer_memo_placeholder":"可选填信息","wallets_transfer_contract":"合约","wallets_transfer_contract_placeholder":"选择 NFT 合约","wallets_swap":"兑换","wallets_red_packet":"红包","wallets_sell":"卖出","wallets_history":"历史记录","settings":"设置","gas_fee":"交易手续费","transfer_cost":"花费 {{gasFee}} {{symbol}} ≈ {{usd}} 美元","done":"完成!","labs":"D.Market","wallet_transactions_pending":"待定中","wallet_gas_fee_settings_low":"低","wallet_gas_fee_settings_medium":"中","wallet_gas_fee_settings_high":"高","wallets_startup_create":"创建新钱包","wallets_startup_create_desc":"Mask Network支持ETH、BSC 和 Polygon/Matic 等网络。","wallets_startup_create_action":"创建","wallets_startup_import":"导入钱包","wallets_startup_import_desc":"Mask钱包支持私钥、JSON文件和助记词导入。","wallets_startup_import_action":"导入","wallets_startup_connect":"连接钱包","wallets_startup_connect_desc":"支持Mask钱包、MetaMask和WalletConnect。","wallets_startup_connect_action":"连接钱包","wallets_connect_wallet_metamask":"MetaMask","wallets_connect_wallet_connect":"连接钱包","wallets_connect_wallet_polka":"Polkadot 钱包","wallets_create_wallet_input_placeholder":"钱包名称","wallets_create_successfully_title":"成功","wallets_create_successfully_tips":"您已成功创建钱包。","wallets_create_successfully_unlock":"解锁钱包","wallets_create_wallet_alert":"Mask Network是一个免费的开源客户端接口。 Mask Network允许您直接与 区块链进行交互，同时您可以完全控制您的密钥和资金，请仔细考虑这一点。 您是掌控者，Mask Network不是银行或交易所。 我们不保留您的密钥、资金或信息。 这意味着我们无法访问账户、恢复密钥、重置密码或反向交易。","wallets_wallet_connect_title":"使用WalletConnect兼容的钱包扫描二维码","wallets_wallet_mnemonic":"助记词","wallets_wallet_json_file":"本地备份","wallets_wallet_private_key":"私钥","wallets_import_wallet_tabs":"导入钱包标签","wallets_import_wallet_password_placeholder":"钱包密码","wallets_import_wallet_cancel":"取消","wallets_import_wallet_import":"导入","wallets_create_wallet_tabs":"创建钱包标签","wallets_create_wallet_refresh":"刷新","wallets_create_wallet_remember_later":"请稍后再记住它","wallets_create_wallet_verification":"验证","wallets_collectible_address":"收藏品地址","wallets_collectible_token_id":"代币 ID","wallets_collectible_field_contract_require":"收藏品地址为必填项","wallets_collectible_field_token_id_require":"代币 ID 为必填项","wallets_collectible_load_end":"已加载完毕","wallets_balance":"资产在","wallets_balance_all_chain":"总览","wallets_balance_Send":"发送","wallets_balance_Buy":"购买","wallets_balance_Swap":"兑换","wallets_balance_Receive":"接收","wallets_assets_token":"代币","wallets_assets_token_sent_not_connect_tip":"未连接到 {{chainName}}。","wallets_assets_token_sent_switch_network_tip":"点击切换","wallets_assets_investment":"投资","wallets_assets_collectibles":"收藏品","wallets_assets_custom_token":"自定义代币","wallets_assets_custom_collectible":"自定义收藏品","wallets_assets_asset":"资产","wallets_assets_balance":"余额","wallets_assets_price":"价格","wallets_assets_value":"价值","wallets_assets_operation":"操作","wallets_address":"钱包地址","wallets_receive_tips":"扫描二维码并发送{{chainName}} 资产到此钱包","wallets_add_collectible":"添加收藏品","wallets_incorrect_address":"钱包地址不正确","wallets_collectible_been_added":"此收藏品已被添加。","wallets_collectible_error_not_exist":"此收藏品不存在或不属于您。","wallets_collectible_contract_is_empty":"请选择合约","wallets_collectible_token_id_is_empty":"请选择代币","wallets_collectible_add":"添加","wallets_add_token":"添加代币","wallets_token_been_added":"代币已被添加。","wallets_token_symbol_tips":"代币代号必须少于11或更少的字符。","wallets_token_decimals_tips":"十进制必须至少 0，且不得超过 18。","wallets_add_token_contract_address":"代币合约地址","wallets_add_token_symbol":"代币代号","wallets_add_token_decimals":"小数点精度","wallets_add_token_cancel":"取消","wallets_add_token_next":"下一步","wallets_empty_tokens_tip":"没有找到任何资产。请添加代币。","wallets_empty_collectible_tip":"没有找到任何收藏品。请添加收藏品。","wallets_address_copied":"已成功复制地址","wallets_address_copy":"复制","wallets_history_types":"类型","wallets_history_value":"价值","wallets_history_time":"时间","wallets_history_receiver":"交互者","wallets_empty_history_tips":"没有任何交易历史","wallets_loading_token":"正在加载代币","personas_setup_connect_tips":"请连接到您的 {{type}} 账户。","personas_setup_tip":"请创建或恢复身份。","personas_setup_connect":"连接","personas_name_maximum_tips":"最大长度为 {{length}} 个字符。","personas_name_existed":"此身份名称已存在","personas_rename_placeholder":"身份名称","personas_confirm":"确认","personas_cancel":"取消","personas_export_persona":"导出身份","personas_export_persona_copy":"复制","personas_export_persona_copy_success":"已复制","personas_export_persona_copy_failed":"复制失败","personas_export_persona_confirm_password_tip":"您还没有设置您的备份密码。想要导出您的身份私钥，必须先设置备份密码。","personas_export_private":"导出身份私钥","personas_export_private_key_tip":"此操作仅用于导出私钥。我们不导出任何其他数据。如果您需要导出更多数据，请前往设置页面：","personas_delete_confirm_tips":"请输入您的备份密码来确认删除身份 <i>{{nickname}}</i> 。","personas_delete_dialog_title":"删除身份","personas_edit_dialog_title":"编辑身份","personas_edit":"编辑","personas_delete":"删除","personas_logout":"登出","personas_logout_confirm_password_tip":"您还没有设置您的密码。要登出身份，您必须先设置备份密码。","personas_add_persona":"添加新身份","personas_back_up":"备份","personas_connect_to":"连接到 {{internalName}}","personas_disconnect":"断开连接","personas_disconnect_warning":"您确定要断开 {{network}} 账户 {{userId}} 吗？ 断开连接后，此账户将无法解密并使用Mask Network加密任何信息。","personas_logout_warning":"身份登出后，您所关联的社交网络账户将不能解密过去的加密消息。 如果您需要重新使用您的身份，您可以使用您的身份私钥进行恢复。","personas_add":"添加","personas_upload_avatar":"上传头像","personas_rename":"重命名","personas_invite_post":"@{{identifier}} Hi，请下载Mask Network，以便我们可以用加密的方式分享帖子？#mask_io install http://mask.io","personas_empty_contact_tips":"您尚未有安装Mask Network的联系人。请邀请您的朋友下载 <i>{{name}}</i>","personas_contacts_name":"名称","personas_contacts_operation":"操作","personas_contacts_invite":"邀请","personas_post_is_empty":"您还没有创建任何加密贴文。","personas_post_create":"创建贴文","settings_general":"通用","settings_backup_recovery":"备份恢复","settings_local_backup":"本地备份","settings_cloud_backup":"云端备份","settings_appearance_default":"按照系统设置","settings_appearance_light":"浅色","settings_appearance_dark":"深色","settings_backup_preview_account":"账户","settings_backup_preview_personas":"身份","settings_backup_preview_associated_account":"关联账户","settings_backup_preview_posts":"加密贴文","settings_backup_preview_contacts":"联系人","settings_backup_preview_fils":"文件","settings_backup_preview_wallets":"Mask钱包","settings_backup_preview_created_at":"备份时间","settings_language_title":"语言","settings_language_desc":"选择您要使用的语言","settings_language_auto":"按照系统设置","settings_appearance_title":"外观","settings_appearance_desc":"选择您要使用的外观主题","settings_data_source_title":"数据源","settings_data_source_desc":"从不同平台获取趋势数据","settings_sync_with_mobile_title":"与移动设备同步","settings_sync_with_mobile_desc":"您可以与您的移动设备同步您的帐户和信息。 打开Mask Network移动应用程序，进入设置并点击与插件同步。","settings_global_backup_title":"备份数据库","settings_global_backup_desc":"提供选择本地备份和云端备份","settings_global_backup_last":"最近的备份时间为{{backupAt}}，备份方法为{{backupMethod}}。","settings_restore_database_title":"恢复数据库","settings_restore_database_desc":"从以前的数据库备份恢复","settings_email_title":"电子邮箱","settings_email_desc":"请绑定您的电子邮箱","settings_change_password_title":"备份密码","settings_change_password_desc":"修改备份密码","settings_change_password_not_set":"您尚未设置备份密码","settings_phone_number_title":"手机号码","settings_phone_number_desc":"请绑定您的手机号码","settings_password_rule":"备份密码必须为 8 到 20 个字符，并且至少包含一个数字、一个大写字母、一个小写字母和一个特殊字符。","settings_button_cancel":"取消","settings_button_confirm":"确认","settings_button_sync":"同步","settings_button_backup":"备份","settings_button_recovery":"恢复","settings_button_setup":"设置","settings_button_change":"修改","settings_dialogs_bind_email_or_phone":"请绑定您的电子邮箱或手机号码","settings_dialogs_verify_backup_password":"验证备份密码","settings_dialogs_setting_backup_password":"设置备份密码","settings_dialogs_change_backup_password":"修改备份密码","settings_dialogs_setting_email":"设置电子邮箱","settings_dialogs_change_email":"更改电子邮箱地址","settings_dialogs_setting_phone_number":"设置手机号码","settings_dialogs_change_phone_number":"修改手机号","settings_dialogs_incorrect_code":"验证码不正确.","settings_dialogs_incorrect_email":"邮箱地址不正确。","settings_dialogs_incorrect_phone":"此手机号码不正确。","settings_dialogs_incorrect_password":"密码不正确。","settings_dialogs_inconsistency_password":"密码不一致!","settings_dialogs_current_email_validation":"当前验证的邮箱地址为","settings_dialogs_change_email_validation":"想要更改其他邮箱地址，请验证您当前的邮箱地址。","settings_dialogs_current_phone_validation":"当前验证的手机号码为","settings_dialogs_change_phone_validation":"想要更改您的手机号码，您需要验证您当前的手机号码。","settings_dialogs_backup_to_cloud":"备份至云端","settings_dialogs_merge_to_local_data":"将云端备份合并到本地并再次备份到云端","settings_dialogs_backup_action_desc":"云端备份已存在， 您可以选择在备份之前先合并此云端备份到您的本地数据，或者直接覆盖重新备份。","settings_dialogs_backup_to_cloud_action":"此选项将使用本地数据覆盖现有云备份。","settings_dialogs_backup_merge_cloud":"此选项需要您输入现有云备份的密码进行解密。 解密后将会把现有云备份与本地数据合并，然后再次加密上传到云端。","settings_dialogs_backup_merged_tip":"您已经合并云端备份到本地. 如果您想要继续完成备份，请点击备份按钮将您的所有数据更新到云端。","settings_label_backup_password":"备份密码","settings_label_new_backup_password":"新备份密码","settings_label_backup_password_cloud":"云端文件的备份密码","settings_label_payment_password":"支付密码","settings_label_re_enter":"再次输入","settings_alert_password_set":"备份密码设置成功。","settings_alert_password_updated":"备份密码已更新","settings_alert_email_set":"电子邮箱已设置","settings_alert_email_updated":"邮箱地址已更新","settings_alert_phone_number_set":"手机号码已设置","settings_alert_phone_number_updated":"电话号码已更改","settings_alert_backup_fail":"备份失败","settings_alert_backup_success":"您已成功备份您的数据。","settings_alert_validation_code_sent":"验证码已发送","settings_alert_merge_success":"您已成功地将云端备份合并到本地数据。","labs_file_service":"文件服务","labs_file_service_desc":"为用户提供去中心化文档存储功能。","labs_markets":"ITO","labs_markets_desc":"将数字资产出售给您的加密世界朋友。","labs_red_packet":"红包","labs_red_packet_desc":"使用加密红包向您的朋友送上最好的祝福。","labs_swap":"兑换","labs_swap_desc":"通过Dex购买代币，无需额外费用和限制。","labs_transak":"Transak","labs_transak_desc":"Transak可支持在60多个国家内购买代币。","labs_savings":"储蓄","labs_snapshot":"Snapshot","labs_snapshot_desc":"直接在社交媒体上展示和投票支持提案。","labs_market_trend":"市场趋势","labs_market_trend_desc":"在社交媒体上直接显示代币信息、价格趋势图表和兑换信息。","labs_collectibles":"收藏品","labs_collectibles_desc":"直接在社交媒体上展示收藏品在 OpenSea 和 Rarible的特定信息，和提供发送报价及竞标功能。","labs_gitcoin":"Gitcoin","labs_gitcoin_desc":"在社交媒体上直接展示Gitcoin项目的具体信息。","labs_valuables":"Valuables","labs_valuables_desc":"购买和销售由其原创作者发布的推文。","labs_dhedge":"dHEDGE","labs_dhedge_desc":"以太坊上的去中心化对冲基金。","labs_mask_box":"Mask盲盒","labs_mask_box_desc":"支持多链的去中心化NFT盲盒发布平台。","labs_loot_man_desc":"探索NFT无尽的可能性。以革命性的方式在社交媒体上展示您的 NFT。","labs_good_ghosting":"GoodGhosting","labs_good_ghosting_desc":"在Twitter上培养每周储蓄的习惯。","labs_pool_together":"无损彩票","labs_pool_together_desc":"在 Twitter 上参与零损失彩票活动。","labs_settings_market_trend":"市场趋势设置","labs_settings_market_trend_source":"默认趋势来源","labs_settings_swap":"交易所设置","labs_settings_swap_network":"{{network}} 网络默认交易所","labs_pets_desc":"探索NFT无尽的可能性。以革命性的方式在社交媒体上展示您的 NFT。","labs_setup_tutorial":"教程","labs_do_not_show_again":"不再提醒","dashboard_mobile_test":"参加移动端测试","dashboard_source_code":"源代码","privacy_policy":"隐私政策","version_of_stable":"版本 {{version}}","version_of_unstable":"版本 {{version}}-{{build}}-{{hash}}","register_restore_backups":"恢复备份","register_restore_backups_cancel":"取消","register_restore_backups_confirm":"恢复","register_restore_backups_hint":"请点击选择或拖动文件到这里","register_restore_backups_file":"文件","register_restore_backups_text":"文本内容","register_restore_backups_tabs":"恢复备份","create_wallet_mnemonic_tip":"请不要忘记保存您的助记词。您需要这个才能访问您的钱包。","create_wallet_password_uppercase_tip":"必须包含一个大写字符","create_wallet_password_lowercase_tip":"必须包含一个小写字符","create_wallet_password_number_tip":"必须包含一个数字","create_wallet_password_special_tip":"必须包含一个特殊字符","create_wallet_password_satisfied_requirement":"密码格式不符合要求。","create_wallet_password_match_tip":"密码不一致。","create_wallet_password_length_error":"密码长度不符合要求。","create_wallet_name_placeholder":"输入1-12 个字符","create_wallet_form_title":"创建一个钱包","create_wallet_wallet_name":"钱包名称","create_wallet_payment_password":"支付密码","create_wallet_re_enter_payment_password":"再次输入支付密码","create_wallet_payment_password_tip":"支付密码必须是数字、大小写字母和特殊字符中的2个类别的组合，长度为 8-20 个字符。","create_wallet_your_wallet_address":"您的钱包地址","create_wallet_done":"完成","create_wallet_verify_words":"验证助记词","create_wallet_mnemonic_word_not_match":"助记词不正确"}');

/***/ }),

/***/ 39675:
/***/ ((module) => {

module.exports = JSON.parse('{"about":"關於","wallets":"錢包","personas":"角色","persona":"角色","refresh":"刷新","next":"繼續","cancel":"取消","back":"返回","agree":"同意","confirm":"確認","verify":"驗證","go_back":"返回","connect":"連接","searching":"搜尋中","restore":"恢復","save":"存儲","manage":"管理","recovery":"恢復","successful":"成功","close":"關閉","send":"發送","resend":"重新傳送","confirm_password":"確認密碼","about_dialog_license":"開源協議： ","footer_bounty_list":"賞金列表","about_dialog_source_code":"原始碼： ","about_dialog_feedback":"反饋 ","about_dialog_touch":"聯繫我們","about_dialog_description":"Mask Network 引領您探索更新更開放的互聯網。Mask Network允許您在社交網路上發送加密的貼文。同時我們提供了更多功能，例如發送加密紅包，購買加密貨幣，加密文件服務等。","setup_page_title":"歡迎來到Mask Network","setup_page_description":"在社交網路上加密您的推文和聊天訊息，只允許您的朋友進行解密。","setup_page_create_account_title":"創建新身份","setup_page_create_account_subtitle":"創造你的虛擬身份，探索Web3.0","setup_page_create_account_button":"創建","setup_page_create_restore_title":"從身份或備份中恢復","setup_page_create_restore_subtitle":"從身份和歷史備份中恢復","setup_page_create_restore_button":"備份 或 登錄","create_account_private_key":"私鑰","create_account_identity_title":"在Mask Network創建一個身份","create_account_sign_in_button":"恢復","create_account_preview_tip":"此二維碼將保存你的身份密碼，請妥善保存。可使用Mask手機端掃描二維碼來登錄。","create_account_mnemonic_confirm_failed":"錯誤身份代碼","create_account_connect_social_media_button":"創建","create_account_connect_social_media":"連接 {{type}}","create_account_persona_title":"歡迎來到Mask Network","create_account_persona_subtitle":"您可以創建個人身分並連接社交帳戶","create_account_persona_successfully":"創建成功","create_account_connect_social_media_title":"連接社交平台","create_account_failed":"創建帳號失敗","sign_in_account_identity_title":"恢復您的身分","sign_in_account_tab_identity":"身份","sign_in_account_sign_up_button":"註冊","sign_in_account_identity_warning":"數字身分助記詞只能恢復您的數字身分。它可以加密並解密由這個數字身分簽名和發送的社交網路信息內容。","sign_in_account_private_key_placeholder":"請輸入你的私鑰","sign_in_account_private_key_error":"私钥不正确","sign_in_account_private_key_persona_not_found":"Persona失蹤","sign_in_account_private_key_warning":"數字身分助記詞只能恢復您的數字身分。它可以加密並解密由這個數字身分簽名和發送的社交網路訊息內容。","sign_in_account_mnemonic_confirm_failed":"錯誤身份","sign_in_account_cloud_backup_send_email_success":"驗證碼已發往 {{type}}. 請查看 {{type}}.","sign_in_account_local_backup_warning":"本地備份能恢復之前所有被本地存儲的數據","sign_in_account_local_backup_payment_password":"支付密碼","sign_in_account_local_backup_file_drag":"請點擊或拖拽文件到此處","sign_in_account_cloud_backup_warning":"雲端備份會保存並加密您的數據。","sign_in_account_cloud_backup_not_support":"不支持數據備份格式","sign_in_account_cloud_send_verification_code_tip":"發送驗證碼至","sign_in_account_cloud_backup_failed":"恢復備份失敗，請再試一次。","sign_in_account_cloud_backup_email_or_phone_number":"郵箱地址或電話號碼","sign_in_account_cloud_backup_password":"備份密碼","sign_in_account_cloud_restore_failed":"恢復失敗","sign_in_account_cloud_backup_download_failed":"下載備份失敗","sign_in_account_cloud_backup_decrypt_failed":"備份解密失敗，請檢查密碼","sign_in_account_cloud_backup_email_format_error":"電子郵件地址不正確","sign_in_account_cloud_backup_phone_format_error":"此電話號碼不正確。","sign_in_account_cloud_backup_synchronize_password_tip":"已成功驗證您的雲端備份密碼，備份正在上傳，為了備份密碼的一致，請確認您是否願意將您的雲端備份密碼設置為本地備份密碼。","cloud_backup":"雲端備份","wallets_transfer":"轉賬","wallets_assets":"資產","wallets_transfer_memo":"備註","wallets_transfer_amount":"數量","wallets_transfer_to_address":"至地址","wallets_transfer_error_amount_absence":"輸入數額","wallets_transfer_error_address_absence":"輸入接收者地址","wallets_transfer_error_contract":"選擇NFT合約","wallets_transfer_error_nft":"選擇一個NFT","wallets_transfer_error_invalid_address":"無效接收者地址","wallet_transfer_error_no_address_has_been_set_name":"接收者地址不存在","wallet_transfer_error_no_ens_support":"網路不支持ENS。","wallets_transfer_error_insufficient_balance":"{{symbol}} 餘額不足","wallets_transfer_send":"傳送","wallets_transfer_memo_placeholder":"可選填訊息","wallets_transfer_contract":"合約","wallets_transfer_contract_placeholder":"選擇一份NFT合約","wallets_swap":"兌換","wallets_red_packet":"紅包","wallets_sell":"賣出","wallets_history":"歷史記錄","settings":"設定","gas_fee":"交易手續費","transfer_cost":"花費 {{gasFee}} {{symbol}} ≈ ${{usd}}","done":"完成！","wallet_transactions_pending":"待定中","wallet_gas_fee_settings_low":"低","wallet_gas_fee_settings_medium":"中","wallet_gas_fee_settings_high":"高","wallets_startup_create":"創建一個新錢包","wallets_startup_create_desc":"Mask network 支援 Eth、 BSC 和 Polygon 網路。","wallets_startup_create_action":"創建","wallets_startup_import":"導入錢包","wallets_startup_import_desc":"Mask network 支援私鑰、JSON 文件和助記詞","wallets_startup_import_action":"導入","wallets_startup_connect":"連結其他錢包","wallets_startup_connect_desc":"Mask network 支援 Metamask 和 Connect Wallet.","wallets_startup_connect_action":"連結","wallets_connect_wallet_metamask":"MetaMask","wallets_connect_wallet_connect":"連接錢包","wallets_connect_wallet_polka":"PolkaDot 錢包","wallets_create_wallet_input_placeholder":"錢包名稱","wallets_create_successfully_title":"成功","wallets_create_successfully_tips":"您已成功創建錢包","wallets_create_successfully_unlock":"解鎖錢包","wallets_create_wallet_alert":"Mask Network是一個免費的開源客戶端接口。 Mask Network允許您直接與區塊鏈進行交互，同時您可以完全控制自己的密鑰和資金，請仔細考慮。 您是掌控者。 Mask Network不是銀行或交易所。 我們不會保留您的鑰匙，資金或信息。 這意味著我們無法訪問帳戶，恢復密鑰，重設密碼或撤消交易。","wallets_wallet_connect_title":"使用兼容WalletConnect的錢包掃描QR碼","wallets_wallet_mnemonic":"助記符","wallets_wallet_json_file":"本地備份","wallets_wallet_private_key":"私鑰","wallets_import_wallet_tabs":"導入錢包標籤","wallets_import_wallet_password_placeholder":"錢包密碼","wallets_import_wallet_cancel":"取消","wallets_import_wallet_import":"輸入","wallets_create_wallet_tabs":"創建錢包標籤","wallets_create_wallet_refresh":"刷新","wallets_create_wallet_remember_later":"記得以後","wallets_create_wallet_verification":"确认","wallets_collectible_address":"收藏品地址","wallets_collectible_token_id":"代幣 ID","wallets_collectible_field_contract_require":"收藏品地址為必填項","wallets_collectible_field_token_id_require":"代幣 ID 為必填項","wallets_collectible_load_end":"載入完畢","wallets_balance":"結餘","wallets_balance_all_chain":"所有鏈","wallets_balance_Send":"發送","wallets_balance_Buy":"購買","wallets_balance_Swap":"交換","wallets_balance_Receive":"接收","wallets_assets_token":"代幣","wallets_assets_token_sent_not_connect_tip":"未连接至 {{chainName}}.","wallets_assets_token_sent_switch_network_tip":"點擊切換","wallets_assets_investment":"投資","wallets_assets_collectibles":"收藏品","wallets_assets_custom_token":"自定義代幣","wallets_assets_custom_collectible":"自定義收藏品","wallets_assets_asset":"資產","wallets_assets_balance":"餘額","wallets_assets_price":"價格","wallets_assets_value":"價值","wallets_assets_operation":"操作","wallets_address":"錢包地址","wallets_receive_tips":"掃瞄二維碼並發送 {{chainName}} 資產到此錢包","wallets_add_collectible":"添加收藏品","wallets_incorrect_address":"合約地址錯誤","wallets_collectible_been_added":"此收藏品已被添加","wallets_collectible_error_not_exist":"此藏品不存在或不屬於你","wallets_collectible_contract_is_empty":"請選擇合約","wallets_collectible_token_id_is_empty":"請選擇代幣","wallets_collectible_add":"新增","wallets_add_token":"新增代幣","wallets_token_been_added":"已添加代幣","wallets_token_symbol_tips":"代幣符號必須不超過11個字符。","wallets_add_token_contract_address":"代幣合約地址","wallets_add_token_symbol":"代幣符號","wallets_add_token_decimals":"小數點精度","wallets_add_token_cancel":"取消","wallets_add_token_next":"下一步","wallets_empty_tokens_tip":"沒有找到任何資產。請添加代幣。","wallets_empty_collectible_tip":"沒有找到任何收藏品。請添加收藏品。","wallets_address_copied":"已複製地址","wallets_address_copy":"複製 ","wallets_history_types":"類型","wallets_history_value":"價值","wallets_history_time":"時間","wallets_empty_history_tips":"無交易記錄","wallets_loading_token":"正在載入代幣","personas_setup_connect_tips":"請連接到您的 {{type}} 帳戶。","personas_setup_tip":"請創建或恢復身分。","personas_setup_connect":"連接","personas_name_maximum_tips":"名稱最長長度為 {{length}} 字","personas_name_existed":"身份名稱已存在","personas_rename_placeholder":"身分名稱","personas_confirm":"確認","personas_cancel":"取消","personas_export_persona":"導出身分","personas_export_persona_copy":"複製","personas_export_persona_copy_success":"已複製","personas_export_persona_copy_failed":"複製失敗","personas_export_persona_confirm_password_tip":"你還沒設置密碼，匯出私鑰前必須先設置備份密碼。","personas_export_private":"匯出私鑰","personas_export_private_key_tip":"此操作僅用於導出私鑰。我們不導出任何其他數據。如果您需要導出更多數據，請前往設置頁面：","personas_delete_confirm_tips":"請確認你已刪除身份 <i>{{nickname}}</i> 並已輸入密碼","personas_delete_dialog_title":"刪除身份","personas_edit_dialog_title":"編輯身分","personas_edit":"編輯","personas_delete":"刪除","personas_logout":"登出","personas_logout_confirm_password_tip":"您還沒有設置您的密碼。要登出身分，您必須先設置備份密碼。","personas_add_persona":"添加新身分","personas_back_up":"備份","personas_connect_to":"連接 {{internalName}}","personas_disconnect":"斷開連接","personas_disconnect_warning":"您確定要斷開{{network}} 帳戶{{userId}} 嗎？斷開連接後，此帳戶將無法解密並使用Mask Network加密任何訊息。","personas_logout_warning":"身分登出後，您關聯的社交網路帳戶將不能解密過去的加密訊息。如果您需要重新使用您的身分，您可以使用您的身分私鑰進行恢復。","personas_add":"新增","personas_upload_avatar":"上傳頭像","personas_rename":"重命名","personas_invite_post":"@{{identifier}} 您好，請下載Mask，以便我們可以用加密的方式分享貼文 #mask_io install http://mask.io","personas_empty_contact_tips":"您尚未有安裝Mask Network的聯繫人。請邀請您的朋友下載<i>{{name}}</i>。","personas_contacts_name":"名稱","personas_contacts_operation":"操作","personas_contacts_invite":"邀請","personas_post_is_empty":"您還沒有創建任何貼文。","personas_post_create":"創建貼文","settings_general":"一般","settings_backup_recovery":"備份 & 恢復","settings_local_backup":"本地備份","settings_cloud_backup":"雲端備份","settings_appearance_default":"按照系統設定","settings_appearance_light":"淺色","settings_appearance_dark":"深色","settings_backup_preview_account":"帳戶","settings_backup_preview_personas":"身分","settings_backup_preview_associated_account":"關聯帳戶","settings_backup_preview_posts":"加密貼文","settings_backup_preview_contacts":"聯繫人","settings_backup_preview_fils":"文件","settings_backup_preview_wallets":"Mask錢包","settings_backup_preview_created_at":"備份時間","settings_language_title":"語言","settings_language_desc":"選擇您要使用的語言","settings_language_auto":"跟隨系統","settings_appearance_title":"外觀","settings_appearance_desc":"選擇你想使用的外觀","settings_data_source_title":"資料源","settings_data_source_desc":"從不同平台獲取趨勢資料","settings_sync_with_mobile_title":"與手機同步","settings_sync_with_mobile_desc":"您可以與您的移動設備同步您的帳戶和資料。打開Mask Network移動應用程式，進入設定頁面並點擊與插件同步。","settings_global_backup_desc":"提供本地和雲端兩種備份選項","settings_global_backup_last":"最近的備份時間為 {{backupAt}}。備份方法為：{{backupMethod}}。","settings_restore_database_title":"復原資料庫","settings_restore_database_desc":"從之前的數據庫備份復原","settings_email_title":"電子郵箱","settings_email_desc":"請綁定郵箱","settings_change_password_title":"備份密碼","settings_change_password_desc":"變更您的備份密碼","settings_change_password_not_set":"你還沒有設定備份密碼","settings_phone_number_title":"電話號碼","settings_phone_number_desc":"請綁定您的電話號碼","settings_password_rule":"備份密碼的長度必須在8到20個字符之間，並且至少包含一個數字，一個大寫字母，一個小寫字母和一個特殊字符。","settings_button_cancel":"取消","settings_button_confirm":"確認","settings_button_sync":"同步","settings_button_backup":"備份","settings_button_recovery":"恢復","settings_button_setup":"設定","settings_button_change":"變更","settings_dialogs_bind_email_or_phone":"請綁定郵箱或電話號碼","settings_dialogs_verify_backup_password":"驗證備份密碼","settings_dialogs_setting_backup_password":"設定備份密碼","settings_dialogs_change_backup_password":"變更備份密碼","settings_dialogs_setting_email":"設定電子郵箱","settings_dialogs_change_email":"變更郵箱","settings_dialogs_setting_phone_number":"設定電話號碼","settings_dialogs_change_phone_number":"變更電話號碼","settings_dialogs_incorrect_code":"驗證碼錯誤","settings_dialogs_incorrect_email":"郵箱地址不正確","settings_dialogs_incorrect_phone":"通訊號碼錯誤","settings_dialogs_incorrect_password":"密碼錯誤","settings_dialogs_inconsistency_password":"密碼不一致","settings_dialogs_current_email_validation":"當前驗證的郵箱地址為","settings_dialogs_change_email_validation":"需要驗證現有郵箱地址以更改","settings_dialogs_current_phone_validation":"當前驗證的電話號碼為","settings_dialogs_change_phone_validation":"想要變更電話號碼，您需要驗證您您當前的電話號碼：","settings_dialogs_backup_to_cloud":"備份到雲端","settings_dialogs_merge_to_local_data":"將雲端備份合併到本地並再次備份到雲端","settings_dialogs_backup_action_desc":"雲端備份已存在，請在備份之前合併雲端備份至本地，或者直接備份。","settings_dialogs_backup_to_cloud_action":"此選項將用本地數據覆蓋現有的雲端備份","settings_dialogs_backup_merged_tip":"您已把雲端備份合併到本地。如果您想要繼續完成備份，請點擊按鍵將您的所有資料更新到雲端。","settings_label_backup_password":"備份密碼","settings_label_new_backup_password":"新備份密碼","settings_label_backup_password_cloud":"雲端文件的備份密碼","settings_label_payment_password":"支付密碼","settings_label_re_enter":"重新輸入","settings_alert_password_set":"備份密碼設定成功","settings_alert_password_updated":"備份密碼已更新","settings_alert_email_set":"電子郵箱設定","settings_alert_email_updated":"郵箱已更新","settings_alert_phone_number_set":"電話號碼設定","settings_alert_phone_number_updated":"電話號碼已更新","settings_alert_backup_fail":"備份失敗","settings_alert_backup_success":"備份數據已成功","settings_alert_validation_code_sent":"驗證碼已傳送","settings_alert_merge_success":"您已經成功您的雲端備份合併到本地資料。","labs_file_service":"文件服務","labs_file_service_desc":"上傳及分享文件以享受永久去中心化存儲服務","labs_markets":"首次代幣發行","labs_markets_desc":"在推特自由發售虛擬資產&直接參與代幣發行","labs_red_packet":"紅包","labs_swap":"兌換","labs_snapshot":"快照","labs_snapshot_desc":"在社交平台上展示和為提案投票","labs_market_trend":"市場走勢","labs_market_trend_desc":"直接在社交平台中展示代幣信息/走勢圖/換匯信息","labs_collectibles":"收藏","labs_gitcoin":"Gitcoin","labs_gitcoin_desc":"在社交媒體上顯示Gitcoin項目的具體資訊，並且直接對項目進行捐贈。","labs_valuables_desc":"從原創者手中購買推特並交易","labs_dhedge":"dHEDGE","labs_dhedge_desc":"在eth/Matic鏈上的去中心化對衝基金","labs_mask_box_desc":"使用專業的多鏈去中心平台以發售NFT盲盒","labs_loot_man":"Loot小人 by MintTeam","labs_loot_man_desc":"用全新方式在社交平台上連結展示你的NFT收藏並探索NFT的無限可能","labs_good_ghosting":"GoodGhosting","labs_good_ghosting_desc":"在Twitter上養成每週儲蓄習慣","labs_pool_together":"PoolTogether","labs_pool_together_desc":"在Twitter上參與無損彩票遊戲","labs_settings_market_trend_source":"默认信息源","labs_settings_swap":"兌換設定","labs_settings_swap_network":"{{network}} 鏈上默認交易所","labs_pets":"Loot小人 by MintTeam","labs_setup_tutorial":"設置教程","labs_do_not_show_again":"不再顯示","labs_cryptoartai":"CRYPTOART.AI","dashboard_mobile_test":"參與手機版本測試","dashboard_source_code":"源代碼","privacy_policy":"隱私政策","version_of_stable":"版本號 {{version}}","version_of_unstable":"版本號 {{version}}-{{build}}-{{hash}}","register_restore_backups":"恢復備份","register_restore_backups_cancel":"取消","register_restore_backups_confirm":"恢復","register_restore_backups_hint":"請點擊或拖拽文件到此處","register_restore_backups_file":"檔案","register_restore_backups_text":"文本內容","register_restore_backups_tabs":"還原備份","create_wallet_mnemonic_tip":"請不要忘記保存助記詞，您將需要這個才能訪問您的錢包。","create_wallet_password_uppercase_tip":"必須含有大寫字母","create_wallet_password_lowercase_tip":"必須含有小寫字母","create_wallet_password_number_tip":"必須包含數字","create_wallet_password_special_tip":"必須含有特殊符號","create_wallet_password_satisfied_requirement":"該密碼不滿足設置條件","create_wallet_password_match_tip":"輸入的密碼不一致","create_wallet_password_length_error":"密碼長度不符合規定","create_wallet_name_placeholder":"輸入1-12個字元","create_wallet_form_title":"創建錢包","create_wallet_wallet_name":"錢包名稱","create_wallet_payment_password":"支付密碼","create_wallet_re_enter_payment_password":"再次輸入支付密碼","create_wallet_payment_password_tip":"支付密碼必須是數字、大小寫字母和特殊字母中至少兩種類別的組合，長度為8-20個字符","create_wallet_your_wallet_address":"錢包地址","create_wallet_done":"完成","create_wallet_verify_words":"驗證助記詞","create_wallet_mnemonic_word_not_match":"助記詞錯誤"}');

/***/ })

}]);