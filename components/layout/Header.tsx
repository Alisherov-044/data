"use client";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { colors } from "@/utils";
import { useDrawer, usePath } from "@/hooks";
import { BurgerIcon, PhoneIcon } from "@/assets";
import { languages, navLinks } from "@/data";
import { Button, Container, DrawerNav, Select } from "..";

export function Header() {
  const { checkPath } = usePath();
  const { open, close, isOpen } = useDrawer();

  return (
    <Container>
      <Wrapper>
        <Logo href="/">
          <LogoImage
            src="/logo.svg"
            width={200}
            height={40}
            alt="Data ta'lim stansiyasi logosi"
          />
        </Logo>
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
        <PhoneButton>
          <Button variant="secondary">
            <PhoneIcon />
            {"+998-(62)-227-72-22"}
          </Button>
        </PhoneButton>
        <BurgerButton onClick={open}>
          <BurgerIcon />
        </BurgerButton>
      </Wrapper>
      <DrawerNav isOpen={isOpen} close={close} />
    </Container>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 90px;
`;

const Logo = styled(Link)`
  position: relative;
  width: 200px;
  height: 40px;
`;

const LogoImage = styled(Image)`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 48px;

  @media screen and (max-width: 1160px) {
    gap: 24px;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
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

const PhoneButton = styled.div`
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const BurgerButton = styled.button`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 1000px) {
    display: block;
  }
`;
