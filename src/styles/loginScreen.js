import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    marginHorizontal: 20,
  },
  subContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  signin: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5,
  },
  signInlabel: {
    color: 'red',
  },
  errorText: {
    color: 'red',
  },
});

export default styles;
