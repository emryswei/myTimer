import { router, Stack } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const label = "Don't have an account?";

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Login" }} />
      <Text style={styles.loginFont}>Login</Text>
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
      <Pressable
        style={styles.loginButton}
        onPress={() => {router.push('/profile')}}
      >
        <Text style={styles.loginTextButton}>
          Login
        </Text>
      </Pressable>
      <Text>Forget password?</Text>
      <View style={styles.outerLinksBtnGroup}>
        <Pressable style={styles.outerLinksBtn}>
          <Text>Google</Text>
        </Pressable>
        <Pressable style={styles.outerLinksBtn}>
          <Text>GitHub</Text>
        </Pressable>
      </View>
      <Text>
        {label}{' '}
        <Text
          style={{ color: '#007AFF', fontWeight: '600' }}
          onPress={() => router.push('/register')}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    gap: 28 
  },
  loginFont: {
    fontSize: 24,
    fontWeight: '600',
  },
  loginButton: {
    width: '80%',
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  textInput: { 
    width: '80%', 
    borderWidth: 1, 
    padding: 12, 
    borderRadius: 8 
  },
  loginTextButton: { 
    color: '#fff', 
    textAlign: 'center', 
    fontSize: 16, 
    fontWeight: '600'
  },
  outerLinksBtnGroup: { 
    flexDirection: 'row', 
    width: '80%',
    gap: 28 
  },
  outerLinksBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8ff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  }
});
