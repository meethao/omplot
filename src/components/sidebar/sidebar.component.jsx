import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { signOutStart } from "../../redux/user/user.actions";
import { toggleTheme, hideSidebar } from "../../redux/theme/theme.actions";
import {
  selectSidebarHidden,
  selectIsDarkMode,
} from "../../redux/theme/theme.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import { IconContrast } from "../icons/icons.component";

import {
  SidebarContainer,
  TopThings,
  BottomThings,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  ThemeToggleContainer,
  SidebarOverlay,
} from "./sidebar.styles";
import sidebarTest from "./sidebarTest";

const Sidebar = ({
  currentUser,
  sidebarHidden,
  isDarkMode,
  toggleTheme,
  hideSidebar,
  signOutStart,
}) => {
  return (
    <div style={{ position: "relative" }}>
      <SidebarContainer hidden={sidebarHidden}>
        <TopThings>
          <LogoContainer to="/">
            <Logo />
            omplot
          </LogoContainer>
          <OptionsContainer>
            <OptionLink to="/dashboard">DASHBOARD</OptionLink>
            <OptionLink to="/workspace">WORKSPACE</OptionLink>
            {currentUser ? (
              <OptionLink to="#" onClick={() => signOutStart()}>
                SIGN OUT
              </OptionLink>
            ) : (
              <OptionLink to="/signin">SIGN IN</OptionLink>
            )}
          </OptionsContainer>
        </TopThings>
        <BottomThings>
          <ThemeToggleContainer onClick={() => toggleTheme()}>
            <IconContrast />
            {isDarkMode ? "DARK" : "LIGHT"}
          </ThemeToggleContainer>
        </BottomThings>
      </SidebarContainer>
      <SidebarOverlay hidden={sidebarHidden} onClick={hideSidebar} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isDarkMode: selectIsDarkMode,
  sidebarHidden: selectSidebarHidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleTheme: () => dispatch(toggleTheme()),
  hideSidebar: () => dispatch(hideSidebar()),
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
