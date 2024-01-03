// import React from 'react';
// import { View, StyleSheet, Dimensions,Linking } from 'react-native';
// import WebView from 'react-native-webview';

// const { width, height } = Dimensions.get('window');

// const EmbedMapper=({route})=>{
//     const latitude=route.params.latitude;
//     const longitude=route.params.longitude;
// const mapUrl = `https://www.google.com/maps/search/${latitude},${longitude}/@26.8220719,75.8650035,15z?entry=ttu`;  
// return (
// <View style={styles.outer}>
//   <WebView
//     scalesPageToFit={true}
//     bounces={false}
//     javaScriptEnabled
//     style={{ height: 500, width: 500 }}
//     source={{
//       html: `
//         <!DOCTYPE html>
//         <html style="height: 100%;">
//           <head>
//             <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
//             <style>
//               body {
//                 display: flex;
//                 justify-content: center;
//                 align-items: center;
//                 height: 100%;
//                 margin: 0;
//               }
//               #baseDiv {
//                 height: 100%;
//               }
//               iframe {
//                 width: 100%;
//                 height: 100%;
//                 border: 0;
//               }
//             </style>
//           </head>
//           <body>
//             <div id="baseDiv">
//               <iframe src="${mapUrl}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//             </div>
//           </body>
//         </html>
//       `,
//     }}
//     automaticallyAdjustContentInsets={false}
//   />
// </View>
// );
// };

// const styles = StyleSheet.create({
// outer: {
// flex: 1,
// alignItems: 'center',
// justifyContent: 'center',
// height: height,
// width: width,
// },
// });

// export default EmbedMapper;

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const EmbedMapper = ({route}) => {
    const latitude=route.params.latitude;
    const longitude=route.params.longitude;
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri:`https://www.google.com/maps/search/${latitude},${longitude}/@26.8220719,75.8650035,15z?entry=ttu`}} // Replace with your desired website URL
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default EmbedMapper;
