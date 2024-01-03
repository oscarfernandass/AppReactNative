import React from 'react';
import { View, StyleSheet, Dimensions,Linking } from 'react-native';
import WebView from 'react-native-webview';

const { width, height } = Dimensions.get('window');

const MapCommon = () => {

  const OpenGoogleMapsLink = () => {
    const googleMapsURL = 'https://www.google.com/maps/search/?api=1&query=28.6139,77.2090';
  
    const openGoogleMaps = () => {
      Linking.openURL(googleMapsURL)
        .then(() => console.log('Opened Google Maps'))
        .catch((error) => console.error('Error opening Google Maps:', error));
    };
  }
    const latitude= 10.9367228;
    const longitude=76.9564628;
    
    const mapUrl = ` https://www.google.com/maps/search/?api=1&query=28.6139,77.2090`;  
    return (
    <View style={styles.outer}>
      <WebView
        scalesPageToFit={true}
        bounces={false}
        javaScriptEnabled
        style={{ height: 500, width: 500 }}
        source={{
          html: `
            <!DOCTYPE html>
            <html style="height: 100%;">
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <style>
                  body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    margin: 0;
                  }
                  #baseDiv {
                    height: 100%;
                  }
                  iframe {
                    width: 100%;
                    height: 100%;
                    border: 0;
                  }
                </style>
              </head>
              <body>
                <div id="baseDiv">
                  <iframe src="${mapUrl}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </body>
            </html>
          `,
        }}
        automaticallyAdjustContentInsets={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    width: width,
  },
});

export default MapCommon;