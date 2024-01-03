import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import WebView from 'react-native-webview';

const { width, height } = Dimensions.get('window');

const Map1 = () => {
  const mapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.2024739029332!2d76.44344419919739!3d10.0325408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080b161cc10b55%3A0xfcb2e68d3cfd9da2!2sGreen%20Land%20Kochi%20%7C%20PCB%20Approved%20Solid%20Waste%20Management%20Services!5e0!3m2!1sen!2sin!4v1702192902239!5m2!1sen!2sin';

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

export default Map1;