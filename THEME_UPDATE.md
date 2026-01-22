# Theme Update - Routinier App

## ✅ What's Been Updated

### 1. Global Color System
Created `constants/colors.ts` with a complete color palette:
- **Primary**: `#6C5CE7` (Purple/Blue)
- **Secondary**: `#A29BFE` (Light Purple)
- **Accent**: `#74B9FF` (Blue)
- **Background**: Purple gradient
- **Text Colors**: White, secondary, dark, gray
- **Status Colors**: Success, error, warning, info

### 2. New Splash Screen
- Beautiful purple gradient background
- White circular logo with checkmark
- "Routinier" branding
- Decorative floating circles
- Smooth fade-in animation

### 3. Onboarding Screens (`app/(onboarding)/index.tsx`)
Three-screen onboarding flow matching your design:
- **Screen 1**: "Create Good Habits"
- **Screen 2**: "Track Your Progress"
- **Screen 3**: "Stay Together and Strong"

Features:
- Purple gradient background
- Floating habit card illustrations
- Pagination dots
- "Continue with E-mail" button
- Social login buttons (Apple, Google, Facebook)
- Swipeable carousel

### 4. Updated Login Screen
- Purple gradient background
- White input fields
- "Continue with E-mail" title
- Email and password fields
- "Forgot my password" link
- "Next" button
- Social login options
- "Don't have account? Let's create!" link

### 5. Updated Signup Screen
- Same purple gradient theme
- Name, email, and password fields
- "Create Account" title
- Social login options
- "Already have an account? Sign In" link

### 6. Navigation Flow
```
Splash Screen (2s)
    ↓
Onboarding (3 screens)
    ↓
Login/Signup
    ↓
Home Screen
```

## 🎨 Design Consistency

All screens now use:
- Purple gradient backgrounds (`#5B4CD3` → `#6C5CE7` → `#8B7EF7`)
- White cards and buttons
- Consistent border radius (12px)
- Same typography
- Matching spacing and padding
- Decorative floating circles

## 📦 New Dependencies

Installed:
- `expo-linear-gradient` - For beautiful gradient backgrounds

## 🎯 Color Usage Throughout App

### Primary Color (`#6C5CE7`)
- Main backgrounds
- Active states
- Brand elements

### White (`#FFFFFF`)
- Cards
- Buttons
- Input fields
- Text on colored backgrounds

### Text Colors
- `textPrimary`: White for main text on colored backgrounds
- `textSecondary`: Light purple for secondary text
- `textDark`: Dark gray for text on white backgrounds

## 📱 Screens Updated

1. ✅ `components/splash-screen.tsx` - New gradient splash
2. ✅ `app/(onboarding)/index.tsx` - New onboarding flow
3. ✅ `app/(auth)/login.tsx` - Updated with gradient theme
4. ✅ `app/(auth)/signup.tsx` - Updated with gradient theme
5. ⏳ `app/(tabs)/index.tsx` - Ready to update with Colors constant
6. ⏳ `app/create-habit.tsx` - Ready to update with Colors constant

## 🚀 How to Use Colors

Import the colors in any component:
```typescript
import { Colors } from '@/constants/colors';

// Use in styles
backgroundColor: Colors.primary
color: Colors.textPrimary
```

## 📝 Next Steps

To complete the theme update:
1. Update home screen colors to use `Colors.primary` instead of hardcoded values
2. Update create-habit screen with gradient background
3. Add gradient to tab bar
4. Update any remaining screens with the new color system

## 🎉 Result

Your app now has a beautiful, consistent purple gradient theme matching the Routinier design from your screenshots!
