import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { colors } from "../config/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
export class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sectionTop}>
          <View style={styles.languageContainer}></View>
        </View>

        <View style={styles.sectionMiddle}>
          <View>
            <Image
              resizeMode={"contain"}
              style={styles.instaLogo}
              source={require("../assets/images/instagramLogo.png")}
            />
          </View>

          <View style={styles.inputItem}>
            <TextInput
              placeholder="Celular, username ou email"
              style={styles.input}
            />
          </View>

          <View style={styles.inputItem}>
            <TextInput placeholder="Sua senha" style={styles.input} />
            <TouchableOpacity>
              <Text style={styles.linkSenha}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Acessar</Text>
          </TouchableOpacity>

          <View style={styles.divisor}>
            <View style={styles.divisorLine}></View>
            <Text style={{ marginHorizontal: "3%" }}>OU</Text>
            <View style={styles.divisorLine}></View>
          </View>

          <TouchableOpacity style={styles.facebookContainer}>
            <FontAwesome5 name="facebook" size={25} color={colors.primary} />
            <Text style={styles.facebook}>Entrar com Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionBottom}>
          <View style={styles.bottomContainer}>
            <Text style={styles.subTitle}>
              <Text style={styles.noAccount}>Não possui uma conta?</Text>{" "}
              <Text style={styles.link}>Cadastre-se</Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  sectionTop: {
    display: "flex",
    flex: 1,
  },
  sectionMiddle: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  sectionBottom: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
  languageContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
  instaLogo: {
    width: "100%",
    height: "50%",
    alignSelf: "center",
  },
  input: {
    width: "90%",
    height: 42,
    backgroundColor: colors.gray1,
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
  },
  inputItem: {
    marginLeft: 60,
  },
  inputSenha: {
    margin: 2,
  },
  subTitle: {
    textAlign: "center",
  },

  link: {
    color: colors.primary,
  },
  linkSenha: {
    marginBottom: 10,
    color: colors.primary,
  },
  loginButton: {
    backgroundColor: colors.primary,
    marginTop: "5%",
    marginLeft: 35,
    width: "90%",
    height: 42,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: colors.secondary,
    fontSize: 17,
  },
  facebookContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "10%",
    justifyContent: "center",
  },
  facebook: {
    color: colors.primary,
    paddingLeft: 8,
    fontSize: 15,
  },
  divisor: {
    marginTop: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    marginLeft: 35,
  },
  divisorLine: {
    width: "45%",
    height: 2,
    backgroundColor: colors.gray1,
    borderRadius: 5,
  },
  bottomContainer: {
    borderTopWidth: 1,
    borderColor: colors.gray1,
    padding: 15,
  },
  noAccount: {
    color: "gray",
  },
});
