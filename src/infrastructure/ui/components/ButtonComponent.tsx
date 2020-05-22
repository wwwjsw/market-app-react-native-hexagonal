import React, {FunctionComponent} from "react";
import {Text, StyleSheet, TextStyle, View} from "react-native";

type ButtonComponentProps = {
    style?: TextStyle | TextStyle[],
    text: string,
}

export const ButtonComponent: FunctionComponent<ButtonComponentProps> = (props) => {
    const passedStyles = Array.isArray(props.style) ? Object.assign({}, ...props.style) : props.style

    const stylesToApply = [
        styles.all,
        styles.large,
        styles.light,
        {...passedStyles}
    ];

    return (
        <View style={stylesToApply}>
            <Text>{props.text}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    all: {
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: 40,
        borderRadius: 20
    },
    large: {
        width: 195
    },
    light: {
        backgroundColor: '#FFFFFF'
    }
})
