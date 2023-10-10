"use client";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { colors } from "@/utils";
import { courses, socialNetworks } from "@/data";
import { Typography } from "@mui/material";
import { Container, MapButton } from "..";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Wrapper>
      <Container>
        <FooterTop>
          <LogoImage
            src="/logo.svg"
            width={200}
            height={40}
            alt="Data ta'lim stansiyasi logosi"
          />
          <Separator />
          <Typography color={colors.white}>
            {'"DATA" endi - ta\'lim stansiyasi'}
          </Typography>
        </FooterTop>
        <FooterLinks>
          <FooterLinksWrapper>
            <FooterLinkTitle>{"Kurslar"}</FooterLinkTitle>
            <Courses>
              {courses.map(({ id, name, slug }) => (
                <FooterLink href={slug} key={id}>
                  {name}
                </FooterLink>
              ))}
            </Courses>
          </FooterLinksWrapper>
          <ContactInfo>
            <FooterLinksWrapper>
              <FooterLinkTitle>{"A'loqa"}</FooterLinkTitle>
              <Contact>
                <FooterLink href="tel:+99899999999">
                  {"+998622277777"}
                </FooterLink>
                <FooterLink href="mail:datatalim@gmail.com">
                  {"dataunionuz@gmail.com"}
                </FooterLink>
              </Contact>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkTitle>{"Ijtimoiy Tarmoqlar"}</FooterLinkTitle>
              <SocialIcons>
                {socialNetworks.map(({ id, link, Icon }) => (
                  <FooterSocialIcon href={link} key={id}>
                    <Icon />
                  </FooterSocialIcon>
                ))}
              </SocialIcons>
            </FooterLinksWrapper>
          </ContactInfo>
        </FooterLinks>
        <FooterBottom>
          <Typography
            color={colors.white}
          >{`© 2019-${year} DATA LLC`}</Typography>
          <MapButton variant="secondary" />
        </FooterBottom>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  position: relative;
  padding-top: 40px;
  padding-bottom: 32px;
  background-color: ${colors.black_100};
`;

const FooterTop = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 56px;
`;

const LogoImage = styled(Image)`
  position: relative;
  width: 200px;
  height: 40px;
  object-fit: cover;
`;

const Separator = styled.div`
  width: 1px;
  height: 36px;
  background-color: ${colors.white};
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-bottom: 44px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 56px;
  }
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 56px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FooterLinkTitle = styled.h2`
  font-size: 16px;
  line-height: 1.75;
  font-weight: 600;
  color: ${colors.black_12};
`;

const Courses = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterLink = styled(Link)`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  color: ${colors.white};
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.primary_100};
  }
`;

const SocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const FooterSocialIcon = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${colors.white};
  transition: background-color 0.2s ease;

  svg path {
    fill: ${colors.black_100};
    transition: fill 0.2s ease;
  }

  &:hover {
    background-color: ${colors.primary_100};

    svg path {
      fill: ${colors.white};
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid ${colors.neo_2};
  padding-top: 24px;
`;
