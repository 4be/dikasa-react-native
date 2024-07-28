import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.rect}></View>
      <ImageBackground
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/39f1/565a/afae839af8f2729532824b7d90efb314?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JpdyPYGWTwrkg~uPDCGdYQFXAgwGYX4DDSet3HT1K4o0ZBPdAPqwSRVtK0B~CvF8CdgTgThVk-oIpiNosdWJc9RCHHHvT8WcZHWW9mQYxjaLh73napNK2F64JNYkbf~zDIYU58pV0MfnhmVO92IB7xRKvQOt-a3qgHI~Yx2TrTLu6-klhfZmhExWR2-7j3cKNSdWvNpKIQjVzGlP0TOGZ-afkI9wWrfIS5x47N7VrbYd-49-o6Um~FH2x7ZdvAKhniHYyIPWvtxfD36L6OQq59u5UhyCBX8x~GKBXAoVshZByE2OfLojbgd4R-Xcr3XVuFC1hkOJmy3ErE6Ejayd0w__",
        }}
        style={styles.image}
      />
      <View style={styles.rect2}></View>
      <TextInput
        placeholder="Password"
        style={styles.materialRightIconTextbox}
      />
      <TextInput
        placeholder="Username atau nomor HP"
        style={styles.materialUnderlineTextbox2}
      />
      <TouchableOpacity style={styles.materialButtonDanger}>
        <Text style={styles.buttonText}>Masuk</Text>
      </TouchableOpacity>
      <Text style={styles.daftarAkunBaru}>Daftar Akun Baru</Text>
      <Image
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/eb5c/a6fd/88358adae517a5a6db362221e5fa0bc8?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QzMsNDawDQ3YHku-oYjlmUzmXIwJ9rRGkn5mdOIb4ky9hxFdHRvn7nQGphTlpDqFbS6uYeVOjA2rt~xAQJ4xgANyq4lapQR7Uu3FZB71yKZ~gWbwUmbtvWgh~AMyTbWrfp8kLCoOmilF-6jIZ6g~L1B999xMDS0cXo6Dcb5XJ63t8vnYP30HZrjo3nAd6rUJLprLW9whe7yVU6ZfBL2qHFggmVoAWSpwyXneBpFgfDfHhgmBZ9ij86vsSZL27Q3lhLshnDOgb6EAO2tKvNeXMQH-H-r1WQJsyUg3wv-m4E5DcLchYrJfSjJx4NVbZyoC6l3mHsV4haktH-oN89Lzqw__",
        }}
        resizeMode="contain"
        style={styles.image2}
      />
      <Text style={styles.masukKeDashboard}>Masuk ke Dashboard</Text>
      <Text style={styles.password}>Password</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  rect: {
    flex: 1,
    backgroundColor: "rgba(164, 164, 164, 1)",
  },
  image: {
    position: "absolute",
    top: -26,
    left: -16,
    height: 833,
    width: 686,
  },
  rect2: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    left: 670,
    width: 670,
    top: 0,
    height: 800,
  },
  materialRightIconTextbox: {
    height: 43,
    width: 375,
    position: "absolute",
    left: 792,
    top: 391,
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 10,
  },
  materialUnderlineTextbox2: {
    position: "absolute",
    left: 792,
    top: 312,
    width: 375,
    height: 43,
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingLeft: 10,
  },
  materialButtonDanger: {
    height: 47,
    width: 375,
    position: "absolute",
    left: 792,
    top: 464,
    backgroundColor: "rgba(255,130,39,1)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  daftarAkunBaru: {
    top: 539,
    left: 792,
    position: "absolute",
    fontFamily: "poppins-700",
    color: "rgba(9,123,194,1)",
    width: 122,
    height: 17,
  },
  image2: {
    position: "absolute",
    top: 108,
    left: 792,
    height: 103,
    width: 375,
  },
  masukKeDashboard: {
    top: 224,
    left: 833,
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "rgba(115,115,115,1)",
    fontSize: 28,
  },
  password: {
    top: 539,
    left: 1095,
    position: "absolute",
    fontFamily: "poppins-700",
    color: "rgba(9,123,194,1)",
    width: 72,
    height: 17,
  },
});
