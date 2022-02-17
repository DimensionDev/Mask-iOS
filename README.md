# Maskbook-iOS

Maskbook for iOS

## Maintains

1. Request for Maskbook_Release CI iOS build
2. Open `./MaskbookPlugin/MaskbookPlugin/Scripts/build.sh`
3. Edit `Maskbook_Releases` to new CI archive `zip` URL
4. Edit comment info about that release. e.g. `# master-ios 9ad7432`
5. `pod clean` then `pod install`
6. Open project and `Command+Option+K`. Make sure framework is **clean-build**.
7. Set build version same to Maskbook plugin version (manifest.json). And build number += 1
8. Basic test
9. Archive and upload to App Store Connect
10. Release build for **two** TestFlight group
11. Done

## Environment

### Homebrew and Rbenv

install `brew` and `rbenv`

```shell
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
brew install rbenv ruby-build rbenv-vars
```

export path to `.zshrc` or `.bash_profile`

```shell
export PATH="$HOME/.rbenv/bin:$PATH" 
eval "$(rbenv init -)"
```

### Gems

run project_setup.sh to setup environment, including `fastlane` and so on.

```shell
sh project_setup.sh
```

and maybe run the following command to install `fastlane Plugins`

```ruby
bundle exec fastlane install_plugins
```
