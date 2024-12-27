import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const LatencyIcon: React.FC<SvgProps> = (props) => (
  <Svg width={48} height={48} viewBox="0 0 48 48" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM22.3721 14.1019C22.3991 13.7051 22.2674 13.3138 22.006 13.0141C21.8765 12.8654 21.7189 12.7438 21.5423 12.6561C21.3657 12.5684 21.1736 12.5163 20.9769 12.503C20.7801 12.4896 20.5827 12.5151 20.3959 12.5781C20.209 12.6411 20.0365 12.7403 19.888 12.8701L13.014 18.8701C12.784 19.0708 12.6208 19.337 12.5461 19.633C12.4714 19.929 12.4888 20.2408 12.5959 20.5266C12.7031 20.8125 12.8949 21.0589 13.1458 21.2328C13.3967 21.4067 13.6947 21.5 14 21.5001H34C34.3978 21.5001 34.7794 21.342 35.0607 21.0607C35.342 20.7794 35.5 20.3979 35.5 20.0001C35.5 19.6023 35.342 19.2207 35.0607 18.9394C34.7794 18.6581 34.3978 18.5001 34 18.5001H18L21.862 15.1301C22.1616 14.8685 22.3451 14.4987 22.3721 14.1019ZM34.8543 26.7676C35.1051 26.9417 35.2969 27.1881 35.404 27.4741C35.5108 27.7601 35.5298 28.0718 35.4548 28.3677C35.3797 28.6636 35.2162 28.9296 34.986 29.1301L28.112 35.1301C27.8111 35.3822 27.4232 35.5063 27.0318 35.4758C26.6404 35.4452 26.2766 35.2623 26.0184 34.9665C25.7603 34.6707 25.6284 34.2854 25.6512 33.8935C25.6739 33.5015 25.8494 33.1341 26.14 32.8701L30 29.5001H14C13.6022 29.5001 13.2206 29.342 12.9393 29.0607C12.658 28.7794 12.5 28.3979 12.5 28.0001C12.5 27.6023 12.658 27.2207 12.9393 26.9394C13.2206 26.6581 13.6022 26.5001 14 26.5001H34C34.3053 26.5002 34.6034 26.5936 34.8543 26.7676Z"
      fill={props.fill ?? "white"}
    />
  </Svg>
);

const LatencyOutline: React.FC<SvgProps> = (props) => (
  <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24 5.5C19.0935 5.5 14.3879 7.4491 10.9185 10.9185C7.4491 14.3879 5.5 19.0935 5.5 24C5.5 28.9065 7.4491 33.6121 10.9185 37.0815C14.3879 40.5509 19.0935 42.5 24 42.5C28.9065 42.5 33.6121 40.5509 37.0815 37.0815C40.5509 33.6121 42.5 28.9065 42.5 24C42.5 19.0935 40.5509 14.3879 37.0815 10.9185C33.6121 7.4491 28.9065 5.5 24 5.5ZM2.5 24C2.5 12.126 12.126 2.5 24 2.5C35.874 2.5 45.5 12.126 45.5 24C45.5 35.874 35.874 45.5 24 45.5C12.126 45.5 2.5 35.874 2.5 24Z"
      fill={props.fill ?? "#F3F3F3"}
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22.006 13.0141C22.2674 13.3138 22.3991 13.7051 22.3721 14.1019C22.3451 14.4987 22.1616 14.8685 21.862 15.1301L18 18.5001H34C34.3978 18.5001 34.7794 18.6581 35.0607 18.9394C35.342 19.2207 35.5 19.6023 35.5 20.0001C35.5 20.3979 35.342 20.7794 35.0607 21.0607C34.7794 21.342 34.3978 21.5001 34 21.5001H14C13.6947 21.5 13.3967 21.4067 13.1458 21.2328C12.8949 21.0589 12.7031 20.8125 12.5959 20.5266C12.4888 20.2408 12.4714 19.929 12.5461 19.633C12.6208 19.337 12.784 19.0708 13.014 18.8701L19.888 12.8701C20.0365 12.7403 20.209 12.6411 20.3959 12.5781C20.5827 12.5151 20.7801 12.4896 20.9769 12.503C21.1736 12.5163 21.3657 12.5684 21.5423 12.6561C21.7189 12.7438 21.8765 12.8654 22.006 13.0141ZM35.404 27.4741C35.2969 27.1881 35.1051 26.9417 34.8543 26.7676C34.6034 26.5936 34.3053 26.5002 34 26.5001H14C13.6022 26.5001 13.2206 26.6581 12.9393 26.9394C12.658 27.2207 12.5 27.6023 12.5 28.0001C12.5 28.3979 12.658 28.7794 12.9393 29.0607C13.2206 29.342 13.6022 29.5001 14 29.5001H30L26.14 32.8701C25.8494 33.1341 25.6739 33.5015 25.6512 33.8935C25.6284 34.2854 25.7603 34.6707 26.0184 34.9665C26.2766 35.2623 26.6404 35.4452 27.0318 35.4758C27.4232 35.5063 27.8111 35.3822 28.112 35.1301L34.986 29.1301C35.2162 28.9296 35.3797 28.6636 35.4548 28.3677C35.5298 28.0718 35.5108 27.7601 35.404 27.4741Z"
      fill={props.fill ?? "#F3F3F3"}
    />
  </Svg>
);

export { LatencyIcon, LatencyOutline };
