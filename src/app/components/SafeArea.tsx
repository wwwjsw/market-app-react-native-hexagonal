import React, {FunctionComponent} from "react";
import {Platform, SafeAreaView, StatusBar, StyleSheet} from "react-native";

export const SafeArea: FunctionComponent<any> = (props) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            {props.children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});
