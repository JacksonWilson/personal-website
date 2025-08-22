import React from 'react';
import { Container, Title, Text, Stack } from '@mantine/core';

const About: React.FC = () => {
  return (
    <Container size="lg" py="xl">
      <Stack gap="md">
        <Title order={1}>About Me</Title>
        <Text size="lg">This is the about me page.</Text>
      </Stack>
    </Container>
  );
};

export default About;
