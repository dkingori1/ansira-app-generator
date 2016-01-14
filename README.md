# Ansira Web App Generator

#### Hello, What Can Alfred Do For You?

This Ansira Exclusive Generator serves to spin up a full scale multi tier Web or Mobile Application.

We will be using Angular2, Node.JS, TypeScript,ES6, TravisCI, We're also using Protractor for our end-to-end story and Karma for our unit tests.
* Best practices in file and application organization.
* Ready to go build system using Alfred for working with TravisCI.
* Angular2 examples that are ready to go when experimenting with Angular2.
* using Gulp for task efficiency
* Testing Angular 2 using Karma.
* Ionic/NativeScript mobile application build structure
* End-to-end Angular 2 code using Protractor.
*

# Quick start
>

## install the repo with npm
npm install

## start with link
npm link


# Ansira Mobile App Generator
#Dependency Installation Documentation for Mobile generator

##1. Download Xcode(AppStore)

##2. Download Command Line tools for Xcode(AppStore)

##3. Download Homebrew
    1. ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

##4. Download JDK 8+(http://www.oracle.com/technetwork/java/javase/downloads/index.html)
    1. set JAVA_HOME system environment variable
    2. export JAVA_HOME=$(/usr/libexec/java_home)
    
##5. Download Android SDK 22+
    1. brew install android-sdk
    2. set up ANDROID_HOME system environment variable
        *export ANDROID_HOME=Path to Android installation directory
    
##6. Download Android Support Repository and Android SDK Build-tools 22.0.0+
    1. android update sdk --filter tools,platform-tools,android-22,build-tools-22.0.1,extra-android-m2repository,extra-google-m2repository,extra-android-support --all --no-ui

##7. Download Genymotion
    1. Need VirtualBox(https://www.virtualbox.org/wiki/Downloads)
    2. Download Genymotion(https://www.genymotion.com/#!/download)
    3. add file paths to the PATH system environment variable
        *Path to the Macos directory in the Contents directory in the Genymotion Shell app
        *Path to the Macos directory in the Contents directory in the Genymotion app
        
        example: export PATH=$PATH:/Applications/Genymotion\ Shell.app/Contents/MacOS/:/Applications/Genymotion.app/Contents/MacOS/

##8. npm install -g nativescript(possibly abstract to alfred generator)

##9. tns doctor to confirm install

