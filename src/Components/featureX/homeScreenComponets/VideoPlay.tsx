import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Color, TextColor} from '../../../Theme/color';
import Video from 'react-native-video';

import {data2} from '../../../tempData';
import HowToWear from './howWear';
import {Fonts, FontSize} from '../../../Theme/fonts';
import IcPlay from '../../../assets/svgIcons/IcPlay';

const VideoPlay = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <View>
      <View
        style={{
          backgroundColor: Color.tertiaryColor,
          width: Dimensions.get('screen').width,
          height: 500,
          marginBottom: 20,
        }}>
        <View style={[styles.sectionHeader, {marginBottom: 20, marginTop: 20}]}>
          <Text style={styles.sectionTitle}>How to wear?</Text>
          <View style={styles.sectionDivider} />
        </View>

        <View style={styles.videoContainer}>
          <Video
            source={require('../../../assets/video/dummyVideo.mp4')}
            resizeMode="contain"
            paused={!isPlaying} // Controls play/pause
            repeat={true}
            muted={true}
            onBuffer={e => console.log('Buffering:', e)}
            onError={e => console.log('Error:', e)}
            style={styles.videoPlayer}
          />
          {!isPlaying && (
            <TouchableOpacity
              style={styles.overlay}
              onPress={() => setIsPlaying(true)}>
              <IcPlay width={60} height={60} />
            </TouchableOpacity>
          )}
        </View>

        {/* FlatList for "How to Wear" */}
        <View
          style={{
            marginHorizontal: 20,
          }}>
          <FlatList
            data={data2}
            horizontal={true}
            contentContainerStyle={{
              marginTop: 30,
              gap: 20,
            }}
            renderItem={({item, index}) => (
              <HowToWear imageSrc={{uri: item.image}} title={item.title} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default VideoPlay;

const styles = StyleSheet.create({
  sectionHeader: {
    marginVertical: 10,
    alignItems: 'center',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: FontSize.L,
    fontFamily: Fonts.TensoreFont,
    color: TextColor.primaryTextColor,
  },
  sectionDivider: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: Color.primaryColor,
    width: '30%',
  },
  videoContainer: {
    position: 'relative',
    width: Dimensions.get('screen').width,
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoPlayer: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
