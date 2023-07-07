import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Pressable,
} from "react-native";
import COLORS from "../../consts/colors";

const OnBoardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      <Image
        source={require("../../assets/onboardImage.jpg")}
        style={styles.image}
      />
      <View style={styles.indicatorContainer}>
        <View style={styles.indicator} />
        <View style={styles.indicator} />
        <View style={[styles.indicator, styles.activeIndicator]} />
      </View>
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <Text style={styles.title}>Find your</Text>
        <Text style={styles.title}>sweet home</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.textStyle}>
          Schedule visits in just a few clicks
        </Text>
        <Text style={styles.textStyle}>visit in just a few clicks</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 40 }}>
        <Pressable onPress={() => navigation.navigate('HomeScreen')}>
          <View style={styles.btn}>
            <Text style={{ color: COLORS.white }}>Get Started</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 420,
    borderBottomLeftRadius: 100,
  },
  indicatorContainer: {
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  activeIndicator: {
    backgroundColor: COLORS.dark,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.dark,
  },
  textStyle: {
    fontSize: 16,
    color: COLORS.grey,
  },
  btn: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: COLORS.dark,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default OnBoardScreen;
