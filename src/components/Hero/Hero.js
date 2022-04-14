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
      <SectionText>Hi, I'm Nikhil G R, a Full Stack Developer from TCS
        🆂🆈🆂🆃🅴🅼🆂 🅴🅽🅶🅸🅽🅴🅴🆁 (🆃🅲🆂 🅳🅸🅶🅸🆃🅰🅻) 𝐆𝐎𝐎𝐆𝐋𝐄 𝐂𝐋𝐎𝐔𝐃 𝐀𝐒𝐒𝐎𝐂𝐈𝐀𝐓𝐄 𝐂𝐋𝐎𝐔𝐃 𝐄𝐍𝐆𝐈𝐍𝐄𝐄𝐑 <br /> 𝐈𝐁𝐌 𝐂𝐄𝐑𝐓𝐈𝐅𝐈𝐄𝐃 𝐏𝐑𝐎𝐅𝐄𝐒𝐒𝐈𝐎𝐍𝐀𝐋 𝐃𝐀𝐓𝐀 𝐒𝐂𝐈𝐄𝐍𝐓𝐈𝐒𝐓
      </SectionText>
      <Button onClick={() => window.location = "https://www.linkedin.com/in/nikhil-gr-415399170/"}>Know More</Button>
    </LeftSection>

  </Section>
);

export default Hero;