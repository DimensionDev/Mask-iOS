#
# Be sure to run `pod lib lint MaskbookPlugin.podspec' to ensure this is a
# valid spec before submitting.
#
# Any lines starting with a # are optional, but their use is encouraged
# To learn more about a Podspec see https://guides.cocoapods.org/syntax/podspec.html
#

Pod::Spec.new do |s|
  s.name             = 'MaskbookPlugin'
  s.version          = '0.1.0'
  s.summary          = 'A short description of MaskbookPlugin.'

# This description is used to generate tags and improve search results.
#   * Think: What does it do? Why did you write it? What is the focus?
#   * Try to keep it short, snappy and to the point.
#   * Write the description between the DESC delimiters below.
#   * Finally, don't worry about the indent, CocoaPods strips it!

  s.description      = <<-DESC
TODO: Add long description of the pod here.
                       DESC

  s.homepage         = 'https://github.com/CMK/MaskbookPlugin'
  # s.screenshots     = 'www.example.com/screenshots_1', 'www.example.com/screenshots_2'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'CMK' => 'cirno.mainasuk@gmail.com' }
  s.source           = { :git => 'https://github.com/CMK/MaskbookPlugin.git', :tag => s.version.to_s }
  # s.social_media_url = 'https://twitter.com/<TWITTER_USERNAME>'

  s.ios.deployment_target = '9.0'

  s.source_files = 'MaskbookPlugin/Classes/*'
  
  s.resource_bundles = {
    'MaskbookPlugin' => ['maskbook/**/*']
  }

  s.test_spec 'Tests' do |test_spec|
    test_spec.source_files = 'MaskbookPlugin/Tests/**/*.swift'
  end

  # s.public_header_files = 'Pod/Classes/**/*.h'
  # s.frameworks = 'UIKit', 'MapKit'
  s.dependency 'SwiftyJSON'
end
