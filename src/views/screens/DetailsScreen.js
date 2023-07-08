import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import COLORS from "../../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get("screen");

const DetailsScreen = ({ navigation, route }) => {
  const house = route.params;

  const InteriorImage = ({ image }) => {
    return <Image source={image} style={styles.interiorImage} />;
  };

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
              <View style={styles.ratingTag}>
                <Text style={{ color: COLORS.white }}>4.8</Text>
              </View>
              <Text style={{ fontSize: 13, marginLeft: 5, color: COLORS.dark }}>
                155 ratings
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 16, color: COLORS.grey }}>
            {house.location}
          </Text>
          <View style={{ marginTop: 20, flexDirection: "row" }}>
            <View style={styles.facility}>
              <Icon name="hotel" size={18} color={COLORS.dark} />
              <Text style={styles.facilityText}>2</Text>
            </View>
            <View style={styles.facility}>
              <Icon name="bathtub" size={18} color={COLORS.dark} />
              <Text style={styles.facilityText}>2</Text>
            </View>
            <View style={styles.facility}>
              <Icon name="aspect-ratio" size={18} color={COLORS.dark} />
              <Text style={styles.facilityText}>100m area</Text>
            </View>
          </View>
          <Text style={{ marginTop: 20, color: COLORS.grey }}>
            {house.details}
          </Text>
          <FlatList
            keyExtractor={(_, key) => key.toString()}
            contentContainerStyle={{ marginTop: 20 }}
            data={house.interiors}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <InteriorImage image={item} />}
          />
          <View style={styles.footer}>
            <View>
              <Text
                style={{ color: COLORS.blue, fontWeight: "bold", fontSize: 18 }}
              >
                $1500
              </Text>
              <Text
                style={{ color: COLORS.grey, fontWeight: "bold", fontSize: 12 }}
              >
                Total Price
              </Text>
            </View>
            <View style={styles.bookNowBtn}>
            <Text style={{ color: COLORS.white}}>Book Now</Text>
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
    paddingVertical: 20
  },
  ratingTag: {
    height: 30,
    width: 35,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  facility: {
    flexDirection: "row",
    marginRight: 15,
  },
  facilityText: {
    marginLeft: 5,
    color: COLORS.grey,
  },
  interiorImage: {
    width: width / 3 - 20,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  footer: {
    height: 70,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bookNowBtn: {
    height: 50,
    justifyContent: 'center',
    alignItems :'center',
    backgroundColor: COLORS.dark,
    borderRadius: 10,
    paddingHorizontal: 20
  }
});

export default DetailsScreen;
