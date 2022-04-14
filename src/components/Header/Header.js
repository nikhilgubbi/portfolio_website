import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import Technologies from './../Technologies/Technologies';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "green", marginBottom: '20;' }} >

          <DiCssdeck size="5rem" /> <Span>NIKHIL G R</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/nikhilgubbi/">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/nikhil-gr-415399170/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/NikhilGR2">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>

    </Div3>
  </Container>
);

export default Header;
