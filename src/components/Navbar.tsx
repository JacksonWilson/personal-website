import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Group, 
  Text, 
  Burger, 
  Drawer,
  Stack,
  NavLink
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [opened, { toggle, close }] = useDisclosure();
  const location = useLocation();

  const isActiveLink = (path: string) => location.pathname === path;

  const navItems = [
    { link: '/personal-website/', label: 'Home' },
    { link: '/personal-website/about', label: 'About' },
    { link: '/personal-website/blog', label: 'Blog' },
  ];

  return (
    <>
      <div className={styles.navbar}>
        {/* Logo - Left side */}
        <Text 
          component={Link} 
          to="/" 
          size="xl" 
          fw={700} 
          className={styles.logo}
        >
          Jackson Wilson
        </Text>

        {/* Desktop Navigation - Center */}
        <Group gap="xs" visibleFrom="sm" className={styles.navigation}>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              component={Link}
              to={item.link}
              label={item.label}
              active={isActiveLink(item.link)}
              variant="subtle"
              className={styles.navItem}
            />
          ))}
        </Group>

        {/* Mobile Burger - Right side */}
        <div className={styles.burgerContainer}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <Stack gap="xs">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              component={Link}
              to={item.link}
              label={item.label}
              active={isActiveLink(item.link)}
              onClick={close}
              variant="subtle"
              className={styles.mobileNavItem}
            />
          ))}
        </Stack>
      </Drawer>
    </>
  );
};

export default Navbar;
