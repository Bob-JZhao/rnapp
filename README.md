# rnapp


Management CLi commands:

Login ->appcenter login

List profile -> appcenter profile list

Logout-> appcenter logout

List tokens ->appcenter tokens list

Create Token -> appcenter tokens create -d "NEW_TOKEN_NAME"

Create Apps -> appcenter apps create -d <appDisplayName> -o <operatingSystem>  -p <platform> 
 
 (ie:appcenter apps create -d MyApp-Android -o Android -p React-Native)
 
Add deployments -> appcenter codepush deployment add -a <ownerName>/<appName> Staging
 
 
appcenter codepush deployment add -a <ownerName>/<appName> Production
                
With the original CodePush, apps automatically had two deployments (Staging and Production). 
  
Rename app names -> appcenter apps update -n <newName> -a <ownerName>/<appName>
 
Delete Apps -> appcenter apps delete -a <ownerName>/<appName>
 
List Apps -> appcenter apps list

Remove deployment -> appcenter codepush deployment remove -a <ownerName>/<appName> <deploymentName>
 
Rename deployment -> appcenter codepush deployment rename -a <ownerName>/<appName> <deploymentName> <newDeploymentName>
 
List deployments -> appcenter codepush deployment list -a <ownerName>/<appName>
 
Release update -> appcenter codepush release-react -a <ownerName>/<appName> -d <deploymentName> -t <targetBinaryVersion> 

They do have a rollback command, but tired and seems does not work, and the good solution is release a new development.


Android set-up

Add lib 

npm install --save react-native-code-push

Link lib

react-native link react-native-code-push

recommond to use pod file

```
# React Native requirements
pod 'React', :path => '../node_modules/react-native', :subspecs => [
   'Core',
   'CxxBridge', # Include this for RN >= 0.47
   'DevSupport', # Include this to enable In-App Devmenu if RN >= 0.43
   'RCTText',
   'RCTNetwork',
   'RCTWebSocket', # Needed for debugging
   'RCTAnimation', # Needed for FlatList and animations running on native UI thread
   # Add any other subspecs you want to use in your project
]
# Explicitly include Yoga if you are using RN >= 0.42.0
pod 'yoga', :path => '../node_modules/react-native/ReactCommon/yoga'
pod 'DoubleConversion', :podspec => '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec'
pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec'

# CodePush plugin dependency
pod 'CodePush', :path => '../node_modules/react-native-code-push'
```
After add above script , run ## pod install
 more info https://docs.microsoft.com/en-us/appcenter/distribution/codepush/react-native
 
 Run delpoyment list to retrieve the deployment key
  ## appcenter codepush deployment list -a <ownerName>/<appName>  
