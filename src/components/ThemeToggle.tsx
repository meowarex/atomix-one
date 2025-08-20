'use client';

import React, { useEffect, useState } from 'react';
import { ToggleButton, useTheme } from '@once-ui-system/core';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    setMounted(true);
    setCurrentTheme(document.documentElement.getAttribute('data-theme') || 'light');
  }, []);

  useEffect(() => {
    setCurrentTheme(document.documentElement.getAttribute('data-theme') || 'light');
  }, [theme]);

  const icon = currentTheme === 'dark' ? 'light' : 'dark';
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light';

  if (!mounted) return null;

  return (
    <ToggleButton
      prefixIcon={icon as any}
      onClick={() => setTheme(nextTheme as any)}
      aria-label={`Switch to ${nextTheme} mode`}
    />
  );
};


