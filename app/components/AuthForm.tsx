// components/AuthForm.tsx
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

interface AuthFormProps {
  isLogin: boolean;
  onSubmit: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rect2}></View>
      <Text style={styles.subTittle}>
        {isLogin ? "Masuk ke Dashboard" : "Daftar Akun Baru"}
      </Text>
      <TextInput
        placeholder="Username atau nomor HP"
        style={styles.materialUnderlineTextbox2}
      />
      <TextInput
        placeholder="Password"
        style={styles.materialRightIconTextbox}
        secureTextEntry
      />
      <TouchableOpacity style={styles.materialButtonDanger} onPress={onSubmit}>
        <Text style={styles.buttonText}>{isLogin ? "Masuk" : "Daftar"}</Text>
      </TouchableOpacity>
      <Text style={styles.daftarAkunBaru}>
        {isLogin ? "Daftar Akun Baru" : "Sudah punya akun? Masuk"}
      </Text>
      <Image
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/eb5c/a6fd/88358adae517a5a6db362221e5fa0bc8?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QzMsNDawDQ3YHku-oYjlmUzmXIwJ9rRGkn5mdOIb4ky9hxFdHRvn7nQGphTlpDqFbS6uYeVOjA2rt~xAQJ4xgANyq4lapQR7Uu3FZB71yKZ~gWbwUmbtvWgh~AMyTbWrfp8kLCoOmilF-6jIZ6g~L1B999xMDS0cXo6Dcb5XJ63t8vnYP30HZrjo3nAd6rUJLprLW9whe7yVU6ZfBL2qHFggmVoAWSpwyXneBpFgfDfHhgmBZ9ij86vsSZL27Q3lhLshnDOgb6EAO2tKvNeXMQH-H-r1WQJsyUg3wv-m4E5DcLchYrJfSjJx4NVbZyoC6l3mHsV4haktH-oN89Lzqw__",
        }}
        resizeMode="contain"
        style={styles.image2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    right: 0,
    width: "50%",
    height: "100%",
  },
  rect2: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    width: "100%",
    height: "100%",
  },
  materialRightIconTextbox: {
    height: 43,
    width: 375,
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingLeft: 10,
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -187.5 }],
    top: 391,
  },
  materialUnderlineTextbox2: {
    width: 375,
    height: 43,
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingLeft: 10,
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -187.5 }],
    top: 312,
  },
  materialButtonDanger: {
    height: 47,
    width: 375,
    backgroundColor: "rgba(255,130,39,1)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -187.5 }],
    top: 464,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  daftarAkunBaru: {
    fontFamily: "poppins-700",
    color: "rgba(9,123,194,1)",
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -61 }],
    top: 539,
    textAlign: "center",
  },
  image2: {
    height: 103,
    width: 375,
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -187.5 }],
    top: 108,
  },
  subTittle: {
    fontFamily: "poppins-regular",
    color: "rgba(115,115,115,1)",
    fontSize: 28,
    position: "absolute",
    left: "45%",
    transform: [{ translateX: -95 }],
    top: 224,
    textAlign: "left",
  },
});

export default AuthForm;
