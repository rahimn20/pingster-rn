import { getFontSize, wp } from "@/utils/stylesUtils";

export const FONT_FAMILIES = {
  RobotoBlack: "Roboto-Black",
  RobotoBlackItalic: "Roboto-BlackItalic",
  RobotoBold: "Roboto-Bold",
  RobotoBoldItalic: "Roboto-BoldItalic",
  RobotoItalic: "Roboto-Italic",
  RobotoLight: "Roboto-Light",
  RobotoLightItalic: "Roboto-LightItalic",
  RobotoMedium: "Roboto-Medium",
  RobotoMediumItalic: "Roboto-MediumItalic",
  RobotoRegular: "Roboto-Regular",
  RobotoThin: "Roboto-Thin",
  RobotoThinItalic: "Roboto-ThinItalic",
} as const;

export const FONT_SIZES = {
  /** font size: 40px */
  h1: getFontSize(40),
  /** font size: 36px */
  h2: getFontSize(36),
  /** font size: 32px */
  h3: getFontSize(32),
  /** font size: 28px */
  h4: getFontSize(28),
  /** font size: 24px */
  h5: getFontSize(24),
  /** font size: 20px */
  bodyXLarge: getFontSize(20),
  /** font size: 18px */
  bodyLarge: getFontSize(18),
  /** font size: 16px */
  bodyMedium: getFontSize(16),
  /** font size: 14px */
  bodyRegular: getFontSize(14),
  /** font size: 12px */
  bodySmall: getFontSize(12),
};

export const BORDER_RADIUS = {
  /** 8px */
  small: wp(2),
  /** 12px */
  medium: wp(3),
  /** 16px */
  large: wp(4),
  /** 24px */
  xLarge: wp(5.6),
};
