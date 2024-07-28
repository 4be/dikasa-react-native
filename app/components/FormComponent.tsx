// components/FormComponent.tsx
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

interface FormComponentProps {
  isLogin: boolean;
  onSubmit: () => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ isLogin, onSubmit }) => {
  return (
    <View>
      <TextInput placeholder="Username atau nomor HP" style={styles.textbox} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.textbox}
      />
      {!isLogin && (
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry
          style={styles.textbox}
        />
      )}
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>{isLogin ? "Masuk" : "Daftar"}</Text>
      </TouchableOpacity>
      <Text style={styles.linkText}>
        {isLogin ? "Daftar Akun Baru" : "Sudah punya akun? Masuk"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textbox: {
    height: 43,
    width: 375,
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingLeft: 10,
    marginBottom: 20,
  },
  button: {
    height: 47,
    width: 375,
    backgroundColor: "rgba(255,130,39,1)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkText: {
    fontFamily: "poppins-700",
    color: "rgba(9,123,194,1)",
    textAlign: "center",
  },
});

export default FormComponent;
