import React from 'react';
import { DiGoogleCloudPlatform, DiReact, DiPython } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>Worked upon Machine Learning and now learning React JS</SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGoogleCloudPlatform size='3rem' />
        <ListContainer>
          <ListTitle>Cloud Technologies</ListTitle>
          <ListParagraph>
            Experience with <br />
            Google Cloud and AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size='3rem' />
        <ListContainer>
          <ListTitle>Machine Learning and Deep Learning</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
