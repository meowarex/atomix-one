'use client';

import type React from 'react';
import { useEffect, useState } from 'react';
import { ToggleButton, useTheme } from '@once-ui-system/core';
import type { Theme } from '@once-ui-system/core';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const icon: string = theme === 'dark' ? 'light' : 'dark';
  const nextTheme: Theme = (theme === 'light' ? 'dark' : 'light') as Theme;

  if (!mounted) return null;

  return (
    <ToggleButton
      prefixIcon={icon}
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} mode`}
    />
  );
};


