import { Dimensions, PixelRatio } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const DEVICE_HEIGHT_PROPORTION = deviceHeight / deviceWidth;

const percentDeviceHeight = percent => {
  const height = parseFloat(percent);
  return PixelRatio.roundToNearestPixel((deviceHeight * height) / 100);
};

const percentDeviceWidth = percent => {
  const width = parseFloat(percent);
  return PixelRatio.roundToNearestPixel((deviceWidth * width) / 100);
};

const proportionalDeviceHeight = percent => {
  const finalPercent = parseFloat(percent) * DEVICE_HEIGHT_PROPORTION;
  return percentDeviceHeight(finalPercent);
};

const getDeviceHeight = () => {
  return deviceHeight;
};

const getDeviceWidth = () => {
  return deviceWidth;
};

export default {
  getDeviceHeight,
  getDeviceWidth,
  percentDeviceWidth,
  percentDeviceHeight,
  proportionalDeviceHeight,
}