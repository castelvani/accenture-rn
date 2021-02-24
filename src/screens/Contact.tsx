import React, { useState } from "react";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

import logoAccenture from "../images/Accenture.png";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [isSendMessage, setIsSendMessage] = useState(true);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {isSendMessage ? (
          <>
            <Text style={styles.sendText}>Sua mensagem</Text>
            <Text style={styles.sendText}>foi enviada</Text>

            <LottieView
              source={require("../animations/gradient.json")}
              autoPlay
              loop={true}
              style={styles.animationContent}
            />
          </>
        ) : (
          <>
            <Image style={styles.logoAccenture} source={logoAccenture} />
            <Text style={styles.title}>Formulário de contato</Text>
            <View>
              <Text style={styles.labelForm}>Nome: </Text>
              <TextInput style={styles.inputForm} />
              <Text style={styles.labelForm}>Telefone: </Text>
              <TextInput style={styles.inputForm} />
              <Text style={styles.labelForm}>Email: </Text>
              <TextInput style={styles.inputForm} />
              <Text style={styles.labelForm}>Mensagem: </Text>
              <TextInput style={styles.inputFormMultiline} multiline />
              <RectButton style={styles.sendButton}>
                <Text style={styles.textSendButton}>Enviar</Text>
                <Feather name="send" size={20} color="#A100FF" />
              </RectButton>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
  },
  logoAccenture: {
    marginVertical: 22,
    width: 200,
    height: 52,
  },
  title: {
    fontSize: 20,
    marginVertical: 30,
    color: "#A100FF",
  },
  scrollView: {
    width: Dimensions.get("window").width,
  },
  sendText: {
    color: "#A100FF",
    fontSize: 24,
  },
  animationContent: {
    height: 400,
    width: 400,
  },
  labelForm: {
    marginTop: 22,
  },
  inputForm: {
    paddingHorizontal: 20,
    height: 50,
    width: Dimensions.get("window").width - 60,
    borderWidth: 1,
    borderColor: "#B9B7B7",
    borderRadius: 12,
    marginVertical: 5,
  },
  inputFormMultiline: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: 120,
    width: Dimensions.get("window").width - 60,
    borderWidth: 1,
    borderColor: "#B9B7B7",
    borderRadius: 12,
    marginVertical: 5,
  },
  sendButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 80,
    marginTop: 20,
  },
  textSendButton: {
    color: "#A100FF",
    fontSize: 20,
    marginRight: 12,
  },
});
