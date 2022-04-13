import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>This is Nikhil G R</SectionText>
      <Button onClick={() => window.location = "https:google.com"}>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;