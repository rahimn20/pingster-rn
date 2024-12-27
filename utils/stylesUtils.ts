import { Dimensions } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

/**
 * Converts a percentage value to an absolute width value
 * based on the device's screen width. This helps in creating responsive designs.
 *
 * @param {string | number} percentage - The percentage value to convert.
 * @returns {number} - The calculated absolute width value in dp.
 */
export const wp = widthPercentageToDP;

/**
 * Converts a percentage value to an absolute height value
 * based on the device's screen height. This helps in creating responsive designs.
 *
 * @param {string | number} percentage - The percentage value to convert.
 * @returns {number} - The calculated absolute height value in dp.
 */
export const hp = heightPercentageToDP;

// Screen Dimensions
export const { width: SCREEN_WIDTH } = Dimensions.get("window");
export const { height: SCREEN_HEIGHT } = Dimensions.get("window");

// Pixel ratio
const BASE_WIDTH = 430; //iPhone 15 Pro Max width
const BASE_HEIGHT = 932; //iPhone 15 Pro Max height

/**
 * Calculates a responsive font size based on the device's screen dimensions.
 *
 * This function scales the input font size relative to a base device size (iPhone 15 Pro Max).
 * It uses the smaller of width and height scaling to ensure text fits within both dimensions.
 * A damping factor is applied to reduce the scaling effect, making the size difference
 * less dramatic between large and small devices.
 *
 * @param {number} size - The base font size to scale.
 * @param {number} [dampingFactor=0.5] - Optional. Controls the intensity of the scaling effect.
 *                                       Range: 0 to 1, where 0 means no scaling and 1 means full scaling.
 *                                       Default is 0.5 for moderate scaling.
 * @returns {number} The calculated font size, rounded to the nearest integer.
 *
 * @example
 * // Get a responsive font size for a base size of 18
 * const responsiveFontSize = getFontSize(18);
 *
 * @example
 * // Get a responsive font size with custom damping
 * const responsiveFontSize = getFontSize(18, 0.7);
 */
export const getFontSize = (
  size: number,
  dampingFactor: number = 0.5
): number => {
  const scaleWidth = SCREEN_WIDTH / BASE_WIDTH;
  const scaleHeight = SCREEN_HEIGHT / BASE_HEIGHT;
  const scale = Math.min(scaleWidth, scaleHeight);

  const dampedScale = 1 + (scale - 1) * dampingFactor;

  return Math.round(size * dampedScale);
};
