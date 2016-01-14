# ansira-app-generator
#Dependency Installation Documentation for Mobile generator

##Download Xcode(AppStore)

##Download Command Line tools for Xcode(AppStore)

##Download Homebrew
    #ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

##Download JDK 8+(http://www.oracle.com/technetwork/java/javase/downloads/index.html)
    set JAVA_HOME system environment variable
    export JAVA_HOME=$(/usr/libexec/java_home)
    
##Download Android SDK 22+
    brew install android-sdk
    set up ANDROID_HOME system environment variable
        export ANDROID_HOME=Path to Android installation directory
    
##Download Android Support Repository and Android SDK Build-tools 22.0.0+
    android update sdk --filter tools,platform-tools,android-22,build-tools-22.0.1,extra-android-m2repository,extra-google-m2repository,extra-android-support --all --no-ui

##Download Genymotion
    Need VirtualBox(https://www.virtualbox.org/wiki/Downloads)
    Download Genymotion(https://www.genymotion.com/#!/download)
    add file paths to the PATH system environment variable
        Path to the Macos directory in the Contents directory in the Genymotion Shell app
        Path to the Macos directory in the Contents directory in the Genymotion app
        example: export PATH=$PATH:/Applications/Genymotion\ Shell.app/Contents/MacOS/:/Applications/Genymotion.app/Contents/MacOS/

##npm install -g nativescript(possibly abstract to alfred generator)

##tns doctor to confirm install
