import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const styles = StyleSheet.create({
    emojiTouch: {
        paddingVertical: 5,
        height: 40,
        justifyContent: 'center'
    },
    emoji: {
        textAlign: 'center'
    },
    emojiImg: {
        alignSelf: 'center',
        resizeMode: 'cover'
    }
});

const EmojiIcon = ({
    emoji,
    clickEmoji,
    longPressEmoji,
    emojiWidth,
    emojiSize,
    emojiTouchableStyle
}) => {
    const {code, img} = emoji;
    return (
        <TouchableOpacity
            style={[emojiTouchableStyle ? emojiTouchableStyle : styles.emojiTouch, {width: emojiWidth}]}
            onLongPress={() => (longPressEmoji ? longPressEmoji(emoji) : null)}
            onPress={() => clickEmoji(emoji)}>
            {code ?
                <Text style={[styles.emoji, {fontSize: emojiSize}]}>{code}</Text> :
                <Image source={{uri: img}} style={[styles.emojiImg, {width: emojiSize, height: emojiSize}]} />
            }
        </TouchableOpacity>
    );
};

EmojiIcon.propTypes = {
    emoji: PropTypes.object,
    clickEmoji: PropTypes.func,
    longPressEmoji: PropTypes.func,
    emojiWidth: PropTypes.number,
    emojiSize: PropTypes.number,
    emojiTouchableStyle: PropTypes.object
};
export default EmojiIcon;
