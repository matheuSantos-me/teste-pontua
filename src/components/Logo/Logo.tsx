import React from "react";
import { SvgXml } from "react-native-svg";

import { ILogoComponentProps } from "./Logo.interfaces";

export const LogoComponent = ({ height, width }: ILogoComponentProps) => {
  const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="71" height="26" viewBox="0 0 71 26" fill="none">
        <g clip-path="url(#clip0_2088_1975)">
            <path d="M61.6952 4.73992V0.00353685H48.7255L46.5925 15.8268L44.4819 0.00361369H39.8048L40.3287 4.22578C39.7885 3.14416 37.8736 0.00361369 33.6595 0.00361369C33.6317 0.00176844 28.976 0.00361369 28.976 0.00361369L28.9581 23.0673L25.5491 0.00361369L19.4236 0L15.8969 23.8971L15.8988 0.00346H10.0363L7.92289 13.4265L5.86432 0.00361369H0V25.9837H4.61803V13.4614L6.71868 25.9834H9.17379L11.2449 13.4614V25.9834H20.1477L20.6879 21.9857H24.2723L24.8107 25.9834L33.5511 25.9889H33.5582V25.9834H33.5637H33.5691V17.5502L34.6406 17.3916L36.8589 25.9889H36.8644H41.3745H41.3798L41.378 25.9834H41.386H41.3914L38.4804 15.907C39.9556 14.7982 41.6213 11.9822 41.178 9.28839V9.28662C41.1833 9.32306 43.9257 26 43.9257 26L49.3025 25.9834L52.9765 2.43458V25.9835H61.6954V21.3109H57.5567V15.3526H61.6954V10.6089H57.5567V4.73992H61.6952ZM21.2319 17.8659L22.4999 6.75893L23.8164 17.8659H21.2319ZM34.6556 12.7373C34.3002 12.9125 33.9296 13 33.5689 13V4.64327C33.5752 4.64327 33.5824 4.64158 33.5913 4.64158C33.953 4.63973 36.6495 4.75276 36.6495 8.77602C36.6495 10.8806 35.7324 12.2067 34.6556 12.7373ZM71 21.3073V25.9798H62.4947V0H67.0741V21.3073H71Z" fill="url(#paint0_linear_2088_1975)"/>
        </g>

        <defs>
            <linearGradient id="paint0_linear_2088_1975" x1="35.5" y1="0" x2="35.5" y2="26" gradientUnits="userSpaceOnUse">
                <stop stop-color="#ED1D24"/>

                <stop offset="1" stop-color="#ED1F69"/>
            </linearGradient>

            <clipPath id="clip0_2088_1975">
                <rect width="71" height="26" fill="white"/>
            </clipPath>
        </defs>
    </svg>
`;

  return <SvgXml testID="logo" xml={svgString} height={height} width={width} />;
};
