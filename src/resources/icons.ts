import React from "react";
import type { IconType, IconBaseProps } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
  HiCodeBracketSquare,
  HiCodeBracket,
  HiMiniCodeBracketSquare,
  HiMiniCodeBracket,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaWindows } from "react-icons/fa6";

// Create image-based icons that integrate with the IconProvider API
const createImageIcon = (src: string, alt: string): IconType => (props: IconBaseProps) => {
  const size = typeof props?.size === "number" ? `${props.size}px` : (props?.size as string) || "1em";
  return React.createElement("img", {
    src,
    alt,
    style: {
      width: size,
      height: size,
      display: "inline-block",
      objectFit: "contain",
    },
  });
};

const atomix = createImageIcon("/images/brand/atomix.png", "Atomix");
const AlkalineIcon = createImageIcon("/images/products/alkaline.png", "Alkaline");
const RubyIcon = createImageIcon("/images/products/alkaline.png", "Ruby");
const SapphireIcon = createImageIcon("/images/products/sapphire.png", "Sapphire");
const AmethystIcon = createImageIcon("/images/products/sapphire.png", "Amethyst");
const TidallunaIcon = createImageIcon("/images/products/tidalluna.png", "Tidalluna");

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  threads: FaThreads,
  windows: FaWindows,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  // Image-based icons
  atomix: atomix,
  alkaline: AlkalineIcon,
  ruby: RubyIcon,
  sapphire: SapphireIcon,
  amethyst: AmethystIcon,
  tidalluna: TidallunaIcon,
  forgejo: HiCodeBracketSquare,
  code: HiCodeBracket,
  miniCode: HiMiniCodeBracketSquare,
  miniRCode: HiMiniCodeBracket,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;