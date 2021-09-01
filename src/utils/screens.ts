import { css, FlattenSimpleInterpolation } from "styled-components";

type Args = FlattenSimpleInterpolation;

// Device screens
export const newscreens = {
  isVerySmallPhone: (args: Args) => css`
    @media (max-width: 375px) {
      ${args};
    }
  `,
  isSmallPhone: (args: Args) => css`
    @media (max-width: 575px) {
      ${args};
    }
  `,
  isPhoneOrSmaller: (args: Args) => css`
    @media (max-width: 767px) {
      ${args};
    }
  `,
  isTabletOrMobile: (args: Args) => css`
    @media (max-width: 991px) {
      ${args};
    }
  `,
  isTablet: (args: Args) => css`
    @media (min-width: 768px) and (max-width: 991px) {
      ${args};
    }
  `,
  isTabletOrDesktop: (args: Args) => css`
    @media (min-width: 768px) {
      ${args};
    }
  `,
  isDesktop: (args: Args) => css`
    @media (min-width: 992px) and (max-width: 1199px) {
      ${args};
    }
  `,
  isDesktopOrLarger: (args: Args) => css`
    @media (min-width: 992px) {
      ${args};
    }
  `,
  isLargerMonitor: (args: Args) => css`
    @media (min-width: 1500px) {
      ${args};
    }
  `,
};

export const {
  isVerySmallPhone,
  isSmallPhone,
  isPhoneOrSmaller,
  isTablet,
  isTabletOrDesktop,
  isDesktop,
  isDesktopOrLarger,
  isTabletOrMobile,
  isLargerMonitor,
} = newscreens;