import { StyleSheet, Text, TextInput } from "react-native";
import React from "react";

const FormInput = (props) => {
  const { placeholder, label } = props;
  return (
    <>
      <TextInput {...props} placeholder={placeholder} style={styles.input} />
    </>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
});
