import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  Title, 
  Text, 
  Button, 
  Group, 
  Stack, 
  Card, 
  Grid, 
  ThemeIcon,
  Center,
  rem
} from '@mantine/core';
import { 
  IconCode, 
  IconPalette, 
  IconRocket, 
  IconArrowRight, 
  IconMail 
} from '@tabler/icons-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: IconCode,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with React, TypeScript, and modern frameworks',
      color: 'blue'
    },
    {
      icon: IconPalette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user experiences with modern design principles',
      color: 'violet'
    },
    {
      icon: IconRocket,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and best development practices',
      color: 'green'
    }
  ];

  return (
    <Container size="lg">
      {/* Hero Section */}
      <Center style={{ minHeight: '70vh' }}>
        <Stack align="center" gap="xl">
          <Title 
            order={1} 
            size={rem(48)} 
            ta="center"
            style={{
              background: 'linear-gradient(45deg, var(--mantine-color-blue-6), var(--mantine-color-violet-6))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Hi, I'm Jackson Wilson
          </Title>
          
          <Text size="xl" c="dimmed" ta="center" maw={600}>
            A passionate developer creating amazing digital experiences with modern technologies
          </Text>
          
          <Group justify="center" gap="md">
            <Button 
              component={Link} 
              to="/about"
              size="lg"
              variant="gradient"
              gradient={{ from: 'blue', to: 'violet' }}
              rightSection={<IconArrowRight size={20} />}
            >
              Learn More About Me
            </Button>
            <Button 
              component={Link} 
              to="/blog"
              size="lg"
              variant="outline"
              color="gray"
            >
              Read My Blog
            </Button>
          </Group>
        </Stack>
      </Center>

      {/* Features Section */}
      <Stack gap="xl" mt="xl" mb="xl">
        <Stack align="center" gap="md">
          <Title order={2} ta="center">What I Do</Title>
          <Text size="lg" c="dimmed" ta="center" maw={600}>
            I specialize in creating modern, responsive web applications with cutting-edge technologies
          </Text>
        </Stack>
        
        <Grid>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                  <Stack align="center" gap="md">
                    <ThemeIcon 
                      size={60} 
                      radius="md" 
                      variant="gradient"
                      gradient={{ from: feature.color, to: `${feature.color}.7` }}
                    >
                      <Icon size={30} />
                    </ThemeIcon>
                    <Title order={3} size="h4" ta="center">{feature.title}</Title>
                    <Text size="sm" c="dimmed" ta="center">
                      {feature.description}
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
            );
          })}
        </Grid>
      </Stack>

      {/* Contact Section */}
      <Card 
        shadow="sm" 
        padding="xl" 
        radius="md" 
        mt="xl" 
        mb="xl"
        style={{
          background: 'linear-gradient(135deg, var(--mantine-color-blue-6), var(--mantine-color-violet-6))'
        }}
      >
        <Stack align="center" gap="md">
          <Title order={2} c="white" ta="center">
            Let's Work Together
          </Title>
          <Text size="lg" c="white" ta="center" maw={600} opacity={0.9}>
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </Text>
          <Button 
            component={Link} 
            to="/about"
            size="lg"
            variant="white"
            color="blue"
            rightSection={<IconMail size={20} />}
          >
            Get In Touch
          </Button>
        </Stack>
      </Card>
    </Container>
  );
};

export default Home;
