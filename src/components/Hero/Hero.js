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
        πππππ΄πΌπ π΄π½πΆπΈπ½π΄π΄π (ππ²π π³πΈπΆπΈππ°π») ππππππ πππππ πππππππππ πππππ ππππππππ <br /> πππ πππππππππ ππππππππππππ ππππ πππππππππ
      </SectionText>
      <Button onClick={() => window.location = "https://www.linkedin.com/in/nikhil-gr-415399170/"}>Know More</Button>
    </LeftSection>

  </Section>
);

export default Hero;