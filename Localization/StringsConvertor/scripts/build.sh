 #!/bin/zsh

set -ev

# Crowin_Latest_Build="https://crowdin.com/backend/download/project/<TBD>.zip"

if [[ -d input ]]; then
    rm -rf input
fi

if [[ -d output ]]; then
    rm -rf output
fi
mkdir output


# FIXME: temporary use local json for i18n
# replace by the Crowdin remote template later

mkdir -p input/en_US
cp ../app.json ./input/en_US
cp ../ios-infoPlist.json ./input/en_US

# zh_CN
mkdir -p input/zh_CN
cp ../app-zh_CN.json ./input/zh_CN
cp ../ios-infoPlist-zh_CN.json ./input/zh_CN
mv ./input/zh_CN/ios-infoPlist-zh_CN.json ./input/zh_CN/ios-infoPlist.json
mv ./input/zh_CN/app-zh_CN.json ./input/zh_CN/app.json

# curl -o <TBD>.zip -L ${Crowin_Latest_Build}
# unzip -o -q <TBD>.zip -d input
# rm -rf <TBD>.zip

swift run
