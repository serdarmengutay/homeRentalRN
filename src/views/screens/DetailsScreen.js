import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import COLORS from "../../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const DetailsScreen = ({ navigation, route }) => {
  const house = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView>
        <View style={styles.backgroundImageContainer}>
          <ImageBackground source={house.image} style={styles.backgroundImage}>
            <View style={styles.header}>
              <View style={styles.headerBtn}>
                <Icon
                  name="arrow-back-ios"
                  size={20}
                  color={COLORS.dark}
                  onPress={() => navigation.goBack()}
                />
              </View>
              <View style={styles.headerBtn}>
                <Icon name="favorite" size={20} color={COLORS.red} />
              </View>
            </View>
          </ImageBackground>
          <View style={styles.virtualTag}>
            <Text style={{ color: COLORS.white }}>Virtual Tour</Text>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: COLORS.dark }}
            >
              {house.title}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.ratingTag}></View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundImageContainer: {
    height: 350,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: "center",
    elevation: 20,
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  virtualTag: {
    top: -20,
    width: 120,
    backgroundColor: COLORS.dark,
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  detailContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  ratingTag: {
    height: 30,
    width: 35,
    backgroundColor: COLORS.blue,
  },
});

export default DetailsScreen;
