import React from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
} from "react-native";
import { wp } from "@/utils/stylesUtils";
import { COLORS } from "@/constants/colors";

type HeaderIconWithIconProps = {
  Icon: any; //TODO: Find the correct type for expo vector icons
  iconColor?: never;
  iconSource?: never;
  style?: never;
  onPress?: () => void;
};

type HeaderIconWithoutIconProps = {
  Icon?: never;
  iconColor?: never;
  iconSource: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  onPress?: () => void;
};

type HeaderIconProps = HeaderIconWithIconProps | HeaderIconWithoutIconProps;

export const HeaderIcon: React.FC<HeaderIconProps> = ({
  Icon,
  iconColor,
  iconSource,
  style,
  onPress,
}) => {
  const _renderIcon = () => {
    return Icon ? (
      Icon
    ) : (
      <Image source={iconSource} style={[styles.icon, style]} />
    );
  };
  return <TouchableOpacity onPress={onPress}>{_renderIcon()}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  icon: {
    width: wp(6),
    height: wp(6),
  },
});
