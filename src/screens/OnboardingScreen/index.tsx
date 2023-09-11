import {
  Dimensions,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
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

const OnboardingScreen: React.FC<Props> = ({navigation}) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle={'light-content'} />
      <ImageBackground
        imageStyle={styles.imageBg}
        style={styles.imageBgStyle}
        source={BgImage}>
        <View style={styles.mainView}>
          <Text style={styles.pagination}>1 - 4</Text>
          <Text style={styles.headingText}>
            What you want me{'\n'} to call you
          </Text>
          <TextInput
            autoFocus
            onChangeText={text => {
              if (text?.trim()) {
                setButtonDisabled(false);
              } else {
                setButtonDisabled(true);
              }
            }}
            placeholder="Your nickname"
            placeholderTextColor="#6F516A"
            selectionColor="#FFFFFF"
            style={styles.inputBox}
          />
          <Pressable
            onPress={() => navigation.navigate('PayWall')}
            disabled={buttonDisabled}
            style={[styles.button, {opacity: buttonDisabled ? 0.4 : 1}]}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  inputBox: {
    fontWeight: '700',
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#FF82EC',
    paddingVertical: 12,
    color: 'white',
    marginTop: 80,
  },
  headingText: {
    fontSize: 32,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 48,
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
    marginTop: width * 0.73,
    opacity: 0.2,
  },
  imageBgStyle: {flex: 1, paddingTop: 80},
  mainView: {marginHorizontal: 24},
  wrapper: {
    flex: 1,
    backgroundColor: '#1c0622',
  },
  button: {
    backgroundColor: '#FF82EC',

    marginTop: 60,
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
  buttonText: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
});
