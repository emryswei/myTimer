import { router, Stack } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 16 }}>
      <Stack.Screen options={{ title: "Profile" }} />

      <Text style={{ fontSize: 24 }}>hello</Text>
      <Button title="Logout" onPress={() => router.replace("/")} />
    </View>
  );
}