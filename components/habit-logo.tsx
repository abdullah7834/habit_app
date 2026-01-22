import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconSymbol } from './ui/icon-symbol';

interface HabitLogoProps {
  size?: number;
}

export function HabitLogo({ size = 120 }: HabitLogoProps) {
  const colorScheme = useColorScheme();
  
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <View style={[
        styles.circle,
        { 
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: colorScheme === 'dark' ? '#4A90E2' : '#007AFF'
        }
      ]}>
        <IconSymbol
          name="checkmark.circle.fill"
          size={size * 0.6}
          color="white"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});