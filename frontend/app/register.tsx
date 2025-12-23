import { router, Stack } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Register() {
	const [email, setEmail] = useState(""); 
	const [password, setPassword] = useState("");

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 16 }}>
			<Stack.Screen options={{ title: "Register" }} />

			<TextInput
				placeholder="Email"
				value={email}
				onChangeText={setEmail}
				autoCapitalize="none"
				style={styles.textInput}
			/>
			<TextInput
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
				style={styles.textInput}
			/>
			<Pressable onPress={() => router.replace("/")} style={styles.registerBtn}>
				<Text>Register</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
    textInput: { 
		width: '80%', 
		borderWidth: 1, 
		padding: 12, 
		borderRadius: 8 
	},
	registerBtn: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8ff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  }
})