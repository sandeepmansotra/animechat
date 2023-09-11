import {
  Dimensions,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BgImage from '../../../assets/2.png';
import {NavigationProp, RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  Onboarding: {};
  PayWall: any;
};

type Props = {
  navigation: NavigationProp<RootStackParamList, 'Onboarding'>;
  route: RouteProp<RootStackParamList, 'Onboarding'>;
};

const {width} = Dimensions.get('screen');

const PayWallScreen: React.FC<Props> = ({navigation}) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle={'light-content'} />
      <ImageBackground
        imageStyle={styles.imageBg}
        style={styles.imageBgStyle}
        source={BgImage}>
        <View style={styles.mainView}>
          <Text style={styles.headingText}>
            Unlimited messaging {'\n'} with your girlfriend
          </Text>
          <View>
            <View style={styles.cardView}>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{color: 'white', fontSize: 24, fontWeight: '700'}}>
                    Save
                  </Text>
                  <Text
                    style={{color: 'white', fontSize: 32, fontWeight: '700'}}>
                    {' '}
                    50%
                  </Text>
                </View>
                <Text style={{textDecorationLine: 'line-through'}}>
                  THB 199.00 / years
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '700',
                    fontSize: 20,
                    textAlign: 'right',
                  }}>
                  THB 99.00 {'\n'} /years
                </Text>
              </View>
            </View>
            <View style={styles.cardViewBlack}>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{color: 'white', fontSize: 24, fontWeight: '700'}}>
                    Save
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 32,
                      fontWeight: '700',
                    }}>
                    {' '}
                    10%
                  </Text>
                </View>
                <Text
                  style={{
                    textDecorationLine: 'line-through',
                    color: '#636363',
                  }}>
                  THB 99.00 / years
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '700',
                    fontSize: 20,
                    textAlign: 'right',
                  }}>
                  THB 89.00 {'\n'} /weeks
                </Text>
              </View>
            </View>
            <Text style={{color: '#6F516A', textAlign: 'center'}}>
              Term condition
            </Text>
            <Pressable
              onPress={() => navigation.goBack()}
              disabled={buttonDisabled}
              style={[styles.button, {opacity: buttonDisabled ? 0.4 : 1}]}>
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PayWallScreen;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
  pagination: {
    color: 'white',
    fontWeight: '700',
    alignSelf: 'center',
  },
  imageBg: {
    height: width,
    width: width * 0.66,
    margin: width * 0.18,
    marginTop: width * 0.4,
    opacity: 1,
  },
  imageBgStyle: {flex: 1, paddingTop: 80},
  mainView: {marginHorizontal: 24, justifyContent: 'space-between', flex: 2},
  wrapper: {
    flex: 1,
    backgroundColor: '#1c0622',
  },
  button: {
    backgroundColor: '#FF82EC',
    marginTop: 24,
    marginBottom: 40,
    paddingVertical: 16,
    borderRadius: 50,
    elevation: 5,
    shadowColor: '#FF82EC',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  buttonText: {fontWeight: '700', fontSize: 20, textAlign: 'center'},
  cardView: {
    backgroundColor: 'rgba(193.37, 43.51, 170.69, 0.80)',
    marginBottom: 24,
    borderWidth: 4,
    borderColor: '#FF82EC',
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 12,
    elevation: 5,
    shadowColor: '#FF82EC',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 2,
    opacity: 0.9,
    shadowRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardViewBlack: {
    backgroundColor: 'rgba(8.94, 21.25, 21.12, 0.48)',
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#FF82EC',
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 12,
    shadowRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
