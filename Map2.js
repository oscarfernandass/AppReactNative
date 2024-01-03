import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import WebView from 'react-native-webview';

const { width, height } = Dimensions.get('window');

const Map2 = () => {
  const mapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.1944051107101!2d76.42309989919738!3d10.035200999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080b32f5f5578d%3A0x79230b13b31382e!2sGREEN%20PEOPLE%20KOCHI!5e0!3m2!1sen!2sin!4v1702192992546!5m2!1sen!2sin';

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

export default Map2;