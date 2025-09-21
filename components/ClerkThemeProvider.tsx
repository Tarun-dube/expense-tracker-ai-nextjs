'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from '@/contexts/ThemeContext';

interface ClerkThemeProviderProps {
  children: React.ReactNode;
}

export default function ClerkThemeProvider({
  children,
}: ClerkThemeProviderProps) {
  const { theme } = useTheme();

  return (
    <ClerkProvider
      appearance={{
        baseTheme: theme === 'dark' ? dark : undefined,
        variables: {
          colorPrimary: theme === 'dark' ? '#3b82f6' : '#2563eb', // blue-500/600
          colorBackground: theme === 'dark' ? '#1f2937' : '#ffffff',
          colorInputBackground: theme === 'dark' ? '#374151' : '#f9fafb',
          colorInputText: theme === 'dark' ? '#f3f4f6' : '#1f2937',
          borderRadius: '0.75rem',
        },
        elements: {
          formButtonPrimary: {
            backgroundColor: theme === 'dark' ? '#3b82f6' : '#2563eb',
            '&:hover': {
              backgroundColor: theme === 'dark' ? '#2563eb' : '#1d4ed8',
            },
          },
          card: {
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(16px)',
            border:
              theme === 'dark'
                ? '1px solid rgba(59, 130, 246, 0.3)'
                : '1px solid rgba(191, 219, 254, 0.3)',
          },
          headerTitle: {
            color: theme === 'dark' ? '#f3f4f6' : '#1f2937',
          },
          headerSubtitle: {
            color: theme === 'dark' ? '#93c5fd' : '#2563eb',
          },
          socialButtonsBlockButton: {
            border:
              theme === 'dark'
                ? '1px solid rgba(59, 130, 246, 0.3)'
                : '1px solid rgba(191, 219, 254, 0.3)',
            backgroundColor:
              theme === 'dark'
                ? 'rgba(30, 58, 138, 0.4)'
                : 'rgba(219, 234, 254, 0.5)',
            backdropFilter: 'blur(8px)',
          },
          dividerLine: {
            backgroundColor:
              theme === 'dark'
                ? 'rgba(59, 130, 246, 0.3)'
                : 'rgba(191, 219, 254, 0.3)',
          },
          formFieldInput: {
            backgroundColor:
              theme === 'dark'
                ? 'rgba(30, 58, 138, 0.4)'
                : 'rgba(239, 246, 255, 0.8)',
            backdropFilter: 'blur(8px)',
            border:
              theme === 'dark'
                ? '1px solid rgba(37, 99, 235, 0.3)'
                : '1px solid rgba(191, 219, 254, 0.3)',
          },
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}
