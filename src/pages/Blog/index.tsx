import React from 'react';
import { Container, Title, Text, Stack, Space } from '@mantine/core';

const Blog: React.FC = () => {
  return (
    <Container size="lg" py="xl">
      <Stack gap="lg">
        <Title order={1}>Blog</Title>
        <Text size="lg">This is the blog page.</Text>
        
        <Space h="md" />
        
        <Stack gap="md">
          <Title order={2}>My 3 Week China Trip</Title>
          <Text>Here I will post tons of photos and descriptions about the adventure.</Text>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Blog;
