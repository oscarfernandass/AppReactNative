import { StyleSheet, Text, View,ScrollView,Dimensions } from 'react-native'
import React from 'react'
import Schedule from './Schedule';
import Post from './Post';
const OriginalComm = ({route}) => {
    const name=route.params.name;
    const location=route.params.location;
    const posts = route.params.posts;
  return (
    <View style={styles.container}>

        <View style={styles.header}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{location}</Text>
      <ScrollView contentContainerStyle={styles.scroll}>

      {
          (posts != null) ? posts.map((it) => {
              if(it["type"] === "schedule") {
                return <>

                    <Schedule location={it["location"]} employeeId={it["employeeId"]} date={it["date"]}/>
                    {/* <Text style={styles.text}>Schedule</Text>
                    <Text style={styles.text}>{it["location"]}</Text>
                    <Text style={styles.text}>{it["employeeId"]}</Text>
                    <Text style={styles.text}>{it["date"]}</Text> */}
                </>
                
            }
            else {
                return <>
                <Post title={it["title"]} description={it["description"]} />
                    {/* <Text style={styles.text}>Post</Text>
                    <Text style={styles.text}>Title</Text>
                    <Text style={styles.text}>Description</Text> */}
                </>
            }
        }) : <></>
    }
    </ScrollView>
        </View>

    </View>
  )
}

export default OriginalComm

const styles = StyleSheet.create({
    container:{
        display:'flex',
        alignItems:'center',
    },
    header:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:15,
    },
    text:{
        color:'black',
        fontSize:25,
    },
    scroll:{
        display:'flex',
        alignItems:'center',
    }
})