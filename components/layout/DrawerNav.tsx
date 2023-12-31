"use client";
import Link from "next/link";
import styled from "styled-components";
import { Button, MapButton, Select } from "..";
import { colors } from "@/utils";
import { usePath } from "@/hooks";
import { Drawer } from "@mui/material";
import { DrawerNavI } from "@/interface";
import { languages, navLinks } from "@/data";
import { CloseIcon, PhoneIcon, PlayIcon } from "@/assets";

export function DrawerNav({ isOpen, close }: DrawerNavI) {
  const { checkPath } = usePath();

  return (
    <Drawer
      anchor="right"
      transitionDuration={250}
      open={isOpen}
      onClose={close}
    >
      <Wrapper>
        <CloseButton onClick={close}>
          <CloseIcon />
        </CloseButton>
        <MediaContainer>
          <MediaTitle>{"DATA endi - ta'lim stansiyasi"}</MediaTitle>
          <MediaPlayButton>
            <PlayIcon />
          </MediaPlayButton>
        </MediaContainer>
        <Separator />
        <Content>
          <Nav>
            {navLinks.map(({ id, text, link }) => (
              <NavLink
                href={link}
                key={id}
                className={checkPath(link) ? "active" : ""}
              >
                {text}
              </NavLink>
            ))}
            <Select options={languages} labelKey="label" valueKey="value" />
          </Nav>
          <Contact>
            <PhoneButton>
              <Button variant="secondary">
                <PhoneIcon />
                {"+998-(62)-227-72-22"}
              </Button>
            </PhoneButton>
            <MapButton />
          </Contact>
        </Content>
      </Wrapper>
    </Drawer>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 90vw;
  height: 100vh;
  padding: calc(18.2394px + 0.469484vw);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 5;
  cursor: pointer;
`;

const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 110px;
  padding: 12px;
  border-radius: 16px;
  background-color: ${colors.primary_100};
  margin-top: 56px;
  margin-bottom: 32px;
`;

const MediaTitle = styled.h6`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.75;
  color: ${colors.white};
`;

const MediaPlayButton = styled.button`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.black_12};
  margin-bottom: 32px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 auto;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 16px;
`;

const NavLink = styled(Link)`
  width: fit-content;
  font-size: 1rem;
  font-weight: 400;
  line-height: 125%;
  color: ${colors.black_100};
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.primary_100};
  }

  &.active {
    color: ${colors.primary_100};
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PhoneButton = styled.div`
  width: fit-content;
`;
