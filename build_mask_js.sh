#!/bin/zsh

SRCROOT=$(pwd)
MASK_JS_POD_DIR=${SRCROOT}/DevelopmentPod/MaskbookPlugin/maskbook
MASK_JS_ROOT="$HOME/Documents/myWork/DimensionDev/Maskbook"
MASK_JS_BUILD_ROOT=${MASK_JS_ROOT}/build/
LOCKDOWN_JS_FILE="${MASK_JS_POD_DIR}/lockdown.js"

echo ${SRCROOT}
echo ${MASK_JS_POD_DIR}
echo ${MASK_JS_ROOT}

cd ${MASK_JS_ROOT}
pnpm run build-ios

cd ${SRCROOT}
rm -rf ${MASK_JS_POD_DIR}
mkdir MASK_JS_POD_DIR
cp -r ${MASK_JS_BUILD_ROOT} "${MASK_JS_POD_DIR}/"
rm ${LOCKDOWN_JS_FILE}
pod install