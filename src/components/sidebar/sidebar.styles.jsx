import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import {
  textColor,
  textColorContrast,
  overlayShadowColor,
  backgroundColor,
  backgroundColorAccent,
} from "../../styles/theme.styles";
import { innerShadowStyles } from "../../styles/borders.styles";
import { screenWidthLarge } from "../../styles/break-width.styles";
import { textShadowStyles } from "../../styles/text.styles";

export const sidebarWidth = 160;
export const sidebarLogoMaxSize = 60;
export const sidebarShadowWidth = 100;
export const sidebarShadowStyles = css`
  box-shadow: 0 0 ${sidebarShadowWidth}px ${overlayShadowColor};
`;

const marginLR = 10;
const marginTB = 30;
const spacing = 10;
const paddingLinks = 10;
const sidebarInnerWidth = sidebarWidth - 2 * marginLR;

const centeredColumnFlex = css`
  display: flex;
  display: -webkit-flexbox;
  flex-direction: column;
  align-items: center;
`;

export const SidebarContainer = styled.div`
  ${centeredColumnFlex}
  ${innerShadowStyles}
  justify-content: space-between;
  background-color: ${backgroundColorAccent};
  flex: 1 0 auto
  display: flex;
  display: -webkit-flexbox;
  height: 100%;
  transition: all 0.25s;

  @media screen and (max-width: ${screenWidthLarge}px) {
    ${sidebarShadowStyles}
    background-color: ${backgroundColor};
    position: absolute;
    top: 0;
    left: ${({ hidden }) =>
      hidden ? 0 - sidebarWidth - sidebarShadowWidth : 0}px;
    width: ${({ hidden }) => (hidden ? 0 : "inherit")}px;
    z-index: 1000;
  }
`;
SidebarContainer.displayName = "navbar-container";

export const TopThings = styled.div`
  ${centeredColumnFlex}
`;

export const LogoContainer = styled(Link)`
  ${centeredColumnFlex}
  color: ${textColor};
  justify-content: center;
  margin: ${marginLR}px;
  margin-top: ${marginTB}px;
  margin-bottom: ${marginTB / 2}px;
  width: 100%;
  max-width: ${sidebarInnerWidth}px;
  max-height: ${sidebarInnerWidth}px;
  cursor: pointer;
  
  & svg {
    border-radius: 50%;
    padding: 4px;
    margin: 6px;
    background-color: ${backgroundColor};
    width: ${sidebarInnerWidth}px;
    height: ${sidebarInnerWidth}px;
    max-width: ${sidebarLogoMaxSize}px;
    max-height: ${sidebarLogoMaxSize}px;
  }

  &:hover svg {
    background-color: ${textColorContrast};
  }
`;
LogoContainer.displayName = "logo-container";

export const OptionsContainer = styled.div`
  ${centeredColumnFlex}
  margin: ${marginLR}px;
  width: ${sidebarInnerWidth}px;
  gap: ${spacing}px;
`;

export const OptionLink = styled(Link)`
  align-content: center;
  margin: ${marginLR}px 0;
  padding: ${paddingLinks}px auto;
`;

export const BottomThings = styled.div`
  ${centeredColumnFlex}
`;

export const ThemeToggleContainer = styled.div`
  display: flex;
  display: -webkit-flexbox;
  align-items: center;
  cursor: pointer;
  padding: ${paddingLinks}px auto;
  margin: ${marginTB}px 0;
  &:hover {
    ${textShadowStyles};
    color: ${textColorContrast} !important;

    div {
      ${textShadowStyles};
      color: ${textColorContrast} !important;
    }
  }
`;

export const SidebarOverlay = styled.div`
  display: none;
  transition: all 0.25s;

  @media screen and (max-width: ${screenWidthLarge}px) {
    display: ${({ hidden }) => (hidden ? "none" : "block")};
    background-color: ${overlayShadowColor};
    opacity: 0;
    height: 100%;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }
`;
