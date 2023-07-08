import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import houses from "../../consts/houses";

const { width, height } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const ListCategories = () => {
    const categoryList = ["Popular", "Recommended", "Nearest"];
    return (
      <View style={styles.categoryListContainer}>
        {categoryList.map((category, index) => (
          <TouchableOpacity
            onPress={() => setSelectedCategoryIndex(index)}
            key={index}
          >
            <Text
              key={index}
              style={[
                styles.categoryListText,
                index == selectedCategoryIndex && styles.activeCategoryListText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const ListOptions = () => {
    const optionsList = [
      { title: "Buy a Home", img: require("../../assets/house1.jpg") },
      { title: "Rent a Home", img: require("../../assets/house2.jpg") },
    ];

    return (
      <View style={styles.optionListContainer}>
        {optionsList.map((option, index) => (
          <View style={styles.optionCard} key={index}>
            <Image source={option.img} style={styles.optionCardImage} />
            <Text
              style={{
                marginTop: 10,
                fontSize: 18,
                fontWeight: "bold",
                color: COLORS.dark,
              }}
            >
              {option.title}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  const Card = ({ house }) => {
    return (
      <Pressable onPress={() => navigation.navigate('DetailsScreen', house)}>
        <View style={styles.card}>
          <Image source={house.image} style={styles.cardImage} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: COLORS.dark }}
            >
              {house.title}
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: COLORS.blue }}
            >
              $1500
            </Text>
          </View>
          <Text style={{ color: COLORS.grey, fontSize: 14, marginTop: 5 }}>
            {house.location}
          </Text>
          <View style={{ marginTop: 10, flexDirection: "row" }}>
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
              <Text style={styles.facilityText}>100m</Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle={"dark-content"}
      />
      <View style={styles.header}>
        <View>
          <Text style={{ color: COLORS.grey }}>Location</Text>
          <Text
            style={{ color: COLORS.dark, fontSize: 20, fontWeight: "bold" }}
          >
            Canada
          </Text>
        </View>
        <Image
          source={require("../../assets/person.jpg")}
          style={styles.profileImage}
        />
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View style={styles.searchInputContainer}>
            <Icon name="search" size={25} color={COLORS.grey} />
            <TextInput placeholder="Search address, city, location" />
          </View>
          <View style={styles.sortBtn}>
            <Icon name="tune" size={25} color={COLORS.white} />
          </View>
        </View>
        <ListOptions />
        <ListCategories />
        <FlatList
          snapToInterval={width - 20}
          contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={houses}
          renderItem={({ item }) => <Card house={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  sortBtn: {
    backgroundColor: COLORS.dark,
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  optionListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  optionCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 15,
    backgroundColor: COLORS.white,
    alignItems: "center",
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionCardImage: {
    height: 140,
    width: "100%",
    borderRadius: 10,
  },
  categoryListContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    color: COLORS.grey,
  },
  activeCategoryListText: {
    color: COLORS.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderBottomColor: COLORS.dark,
  },
  card: {
    height: 250,
    elevation: 10,
    backgroundColor: COLORS.white,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 15,
  },
  facility: {
    flexDirection: "row",
    marginRight: 15,
  },
  facilityText: {
    marginLeft: 5,
    color: COLORS.grey,
  },
});
export default HomeScreen;
