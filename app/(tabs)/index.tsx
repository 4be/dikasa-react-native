// HomeScreen.tsx
import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import AuthForm from "../components/AuthForm";

export default function HomeScreen() {
  const isLogin = true; // Change this to false for the register form

  const handleFormSubmit = () => {
    // Handle form submission
  };

  return (
    <View style={styles.container}>
      <View style={styles.rect}></View>
      <ImageBackground
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/39f1/565a/afae839af8f2729532824b7d90efb314?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JpdyPYGWTwrkg~uPDCGdYQFXAgwGYX4DDSet3HT1K4o0ZBPdAPqwSRVtK0B~CvF8CdgTgThVk-oIpiNosdWJc9RCHHHvT8WcZHWW9mQYxjaLh73napNK2F64JNYkbf~zDIYU58pV0MfnhmVO92IB7xRKvQOt-a3qgHI~Yx2TrTLu6-klhfZmhExWR2-7j3cKNSdWvNpKIQjVzGlP0TOGZ-afkI9wWrfIS5x47N7VrbYd-49-o6Um~FH2x7ZdvAKhniHYyIPWvtxfD36L6OQq59u5UhyCBX8x~GKBXAoVshZByE2OfLojbgd4R-Xcr3XVuFC1hkOJmy3ErE6Ejayd0w__",
        }}
        style={styles.image}
      />
      <AuthForm isLogin={isLogin} onSubmit={handleFormSubmit} />
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
});
