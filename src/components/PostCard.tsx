import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {AgEnum, Text} from './ui/Text';
import IconSvgMore from '../assets/icons/More';
import IconSvgHeart from '../assets/icons/Heart';
import IconSvgComment from '../assets/icons/Comment';
import IconSvgShare from '../assets/icons/Share';
import IconSvgBookmark from '../assets/icons/Bookmark';

export const PostCard = () => {
  return (
    <View>
      <View style={styles.topContainer}>
        <View style={styles.flexRow}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://yt3.ggpht.com/zWOTLhal6b4tEVhZvK48CtLmV95C_4NrflbjM-dWX3vMKlmjxGdUEwDaUkYKXCdhPatpjJqfuQ=s88-c-k-c0x00ffffff-no-rj-mo',
            }}
          />
          <Text style={{paddingLeft: 9}} Ag={AgEnum.SUBTITLE_STRONG}>
            Maxym
          </Text>
        </View>
        <TouchableOpacity>
          <IconSvgMore />
        </TouchableOpacity>
      </View>

      <View style={styles.photoContainer}>
        <Image
          style={styles.photo}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Avatar_%282009_film%29_poster.jpg/220px-Avatar_%282009_film%29_poster.jpg',
          }}
        />
      </View>

      <View style={styles.topContainer}>
        <View style={styles.flexRow}>
          <TouchableOpacity>
            <IconSvgHeart />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 11}}>
            <IconSvgComment />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 11}}>
            <IconSvgShare />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <IconSvgBookmark />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{marginLeft: 15}} Ag={AgEnum.SUBTITLE_STRONG}>
        100 likes
      </Text>

      <View>
        <Text numberOfLines={2} style={{marginLeft: 15}} Ag={AgEnum.SUBTITLE}>
          <Text Ag={AgEnum.SUBTITLE_STRONG}>userna </Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magni
          porro ipsum temporibus.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 9,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  photoContainer: {},
  photo: {
    width: '100%',
    height: 375,
  },
});
