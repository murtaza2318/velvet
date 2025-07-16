import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { CustomText } from '../../../components/CustomText';
import { CustomIcon } from '../../../components/CustomIcon';
import { COLORS } from '../../../utils/theme';
import { IconType } from '../../../components/CustomIcon/interface';

interface SocialSignupButtonProps {
  type: 'facebook' | 'google' | 'apple';
  onPress: () => void;
  style?: ViewStyle;
  text?: string;
  textColor?: string;
  iconColor?: string;
}

const SocialSignupButton: React.FC<SocialSignupButtonProps> = ({
  type,
  onPress,
  style,
  text,
  textColor,
  iconColor,
}) => {
  const isFacebook = type === 'facebook';
  const isGoogle = type === 'google';
  const isApple = type === 'apple';

  let defaultText = '';
  let defaultTextColor = COLORS.StaticWhite;
  let defaultIconColor = COLORS.StaticWhite;
  let buttonStyle: ViewStyle[] = [styles.socialButton];

  if (isApple) {
    defaultText = 'Sign Up with Apple';
    buttonStyle.push(styles.appleButton);
    defaultTextColor = COLORS.StaticWhite;
    defaultIconColor = COLORS.StaticWhite;
  } else if (isFacebook) {
    defaultText = 'Sign Up with Facebook';
    buttonStyle.push(styles.facebookButton);
    defaultTextColor = COLORS.TextPrimary;
    defaultIconColor = COLORS.TextPrimary;
  } else if (isGoogle) {
    defaultText = 'Sign Up with Gmail';
    buttonStyle.push(styles.googleButton);
    defaultTextColor = COLORS.StaticWhite;
    defaultIconColor = COLORS.StaticWhite;
  }

  let iconProps: {
    icon: string;
    type: IconType;
    color: string;
  } = { icon: '', type: 'FontAwesome', color: iconColor ?? defaultIconColor };
  if (isFacebook) iconProps = { icon: 'facebook', type: 'FontAwesome', color: iconColor ?? defaultIconColor };
  if (isGoogle) iconProps = { icon: 'google', type: 'FontAwesome', color: iconColor ?? defaultIconColor };
  if (isApple) iconProps = { icon: 'apple', type: 'FontAwesome', color: iconColor ?? defaultIconColor };

  return (
    <TouchableOpacity
      style={[...buttonStyle, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <CustomIcon
        {...iconProps}
        size={28}
        style={styles.socialIcon}
      />
      <CustomText
        textType="BodyLargeSemiBold"
        color={textColor ?? defaultTextColor}
        textStyle={styles.socialButtonText}
      >
        {text ?? defaultText}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 28,
    marginVertical: 6,
    paddingHorizontal: 30,
    width: '90%',
    alignSelf: 'center',
  },
  appleButton: {
    backgroundColor: '#A3A19E',
  },
  facebookButton: {
    backgroundColor: '#F6EDCA',
    borderWidth: 2,
    borderColor: '#A9A59F',
  },
  googleButton: {
    backgroundColor: '#8F9E73',
  },
  socialIcon: {
    marginRight: 16,
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default SocialSignupButton;


