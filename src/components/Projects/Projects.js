import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key={project.id}>
          <Img src={project.id} />
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;