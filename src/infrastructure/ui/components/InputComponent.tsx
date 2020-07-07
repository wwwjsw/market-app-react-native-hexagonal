import React, {FunctionComponent} from "react";
import {NativeSyntheticEvent, StyleSheet, TextInput, TextInputChangeEventData, TextStyle} from "react-native";

type InputComponentProps = {
    style?: TextStyle | TextStyle[],
    value?: string,
    placeholder?: string,
    onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

export const InputComponent: FunctionComponent<InputComponentProps> = (props) => {
    const passedStyles = Array.isArray(props.style) ? Object.assign({}, ...props.style) : props.style;

    return (
        <TextInput
            style={[styles.all, {...passedStyles}]}
            placeholder={props.placeholder}
            placeholderTextColor={'#FFFFFF'}
            value={props.value}
            onChange={props.onChange}
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
        borderRadius: 20,
    }
})
