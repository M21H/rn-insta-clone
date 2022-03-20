import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {DataHelper} from '../helpers/DataHelper';

export const SearchScreen = () => {
  return (
    <ScrollView>
      <View style={styles.flexRow}>
        <View style={styles.topLeftContainer}>
          {[...Array(4)].map((_, inx) => (
            <TouchableOpacity key={inx}>
              <Image
                style={styles.smallImg}
                source={{
                  uri: 'https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View>
          <TouchableOpacity>
            <Image
              style={styles.hightImg}
              source={{
                uri: 'https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.canterContainer}>
        {[...Array(6)].map((_, inx) => (
          <TouchableOpacity key={inx}>
            <Image
              style={styles.smallImg}
              source={{
                uri: 'https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg',
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.flexRow}>
        <View style={styles.bottomLeft}>
          <TouchableOpacity>
            <Image
              style={styles.bigImg}
              source={{
                uri: 'https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomRigth}>
          <TouchableOpacity>
            <Image
              style={styles.smallImg}
              source={{
                uri: 'https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.smallImg}
              source={{
                uri: 'https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  smallImg: {
    width: DataHelper.getWidth() * 0.33,
    height: DataHelper.getWidth() * 0.33,
    marginTop: DataHelper.getWidth() * 0.003,
    marginLeft: DataHelper.getWidth() * 0.003,
  },
  topLeftContainer: {
    width: DataHelper.getWidth() * 0.666,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  hightImg: {
    width: DataHelper.getWidth() * 0.33,
    height: DataHelper.getWidth() * 0.66,
    marginTop: DataHelper.getWidth() * 0.003,
    marginLeft: DataHelper.getWidth() * 0.003,
  },
  bigImg: {
    width: DataHelper.getWidth() * 0.66,
    height: DataHelper.getWidth() * 0.66,
    marginTop: DataHelper.getWidth() * 0.003,
    marginRight: DataHelper.getWidth() * 0.003,
  },
  canterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  bottomLeft: {
    width: DataHelper.getWidth() * 0.66,
    height: DataHelper.getWidth() * 0.66,
    marginRight: DataHelper.getWidth() * 0.003,
    marginLeft: DataHelper.getWidth() * 0.006,
  },
  bottomRigth: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
