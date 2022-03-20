import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import IconSvgAdd from '../assets/icons/Add';
import IconSvgHeart from '../assets/icons/Heart';
import IconSvgLogo from '../assets/icons/Logo';
import IconSvgMessenger from '../assets/icons/Messanger';
import {PostCard} from '../components/PostCard';
import {AgEnum, Text} from '../components/ui/Text';
import {AppColors} from '../components/ui/themes';
import {HistoryHelper} from '../helpers/HistoryHelper';
import {TextHelper} from '../helpers/TextHelper';
import {HistoryData} from '../store/HistoryData';

const HomeScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <IconSvgLogo />
        <View style={styles.containerIcons}>
          <TouchableOpacity style={styles.mr}>
            <IconSvgAdd />
          </TouchableOpacity>

          <TouchableOpacity style={styles.mr}>
            <IconSvgHeart />
          </TouchableOpacity>

          <TouchableOpacity>
            <IconSvgMessenger />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <ScrollView
          style={{marginTop: 10}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {HistoryHelper.getHistory(HistoryData).map(item => (
            <View key={item.id}>
              <TouchableOpacity
                style={[
                  styles.historyItem,
                  item.active
                    ? styles.historyItemActive
                    : styles.historyItemNotActive,
                ]}>
                <Image
                  style={styles.history}
                  source={{
                    uri: item.avatar,
                  }}
                />
              </TouchableOpacity>
              <Text Ag={AgEnum.SUBTITLE} align="center">
                {TextHelper.getUserHistoryName(item.name)}
              </Text>
            </View>
          ))}
        </ScrollView>
        {[...Array(10)].map((_, inx) => (
          <PostCard key={inx} />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  mr: {
    marginRight: 23,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 6,
  },
  containerIcons: {
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  history: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  historyItem: {
    width: 68,
    height: 68,
    borderWidth: 2,
    borderRadius: 100,
    padding: 2,
    marginHorizontal: 10,
  },
  historyItemActive: {
    borderColor: AppColors.red,
  },
  historyItemNotActive: {
    borderColor: AppColors.grey,
  },
});

export default HomeScreen;
