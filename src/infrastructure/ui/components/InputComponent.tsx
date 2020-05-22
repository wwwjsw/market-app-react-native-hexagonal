import React, {FunctionComponent} from "react";
import {StyleSheet, TextInput, TextStyle} from "react-native";

type InputComponentProps = {
    style?: TextStyle | TextStyle[],
    placeholder?: string
}

export const InputComponent: FunctionComponent<InputComponentProps> = (props) => {
    const passedStyles = Array.isArray(props.style) ? Object.assign({}, ...props.style) : props.style

    return (
        <TextInput
            style={[styles.all, {...passedStyles}]}
            placeholder={props.placeholder}
        />
    );
};

const styles = StyleSheet.create({
    all: {
        paddingLeft: 22,
        paddingRight: 22,
        width: '100%',
        height: 40,
        color: '#FFFFFF',
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 20
    }
})
