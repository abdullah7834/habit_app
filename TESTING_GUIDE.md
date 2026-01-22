# Testing Guide - Routinier App

## 🚀 How to Run the App

```bash
npm start
```

Then press:
- `w` for web browser
- `a` for Android emulator
- `i` for iOS simulator
- Scan QR code with Expo Go app on your phone

## 📱 Testing Flow

### 1. Splash Screen (2 seconds)
- Purple gradient background
- White circular logo with checkmark
- "Routinier" text
- Decorative floating circles

### 2. Onboarding Screens (Swipe through 3 screens)
**Screen 1: Create Good Habits**
- Purple gradient background
- Floating habit card illustrations
- "Continue with E-mail" button
- Social login buttons (Apple, Google, Facebook)

**Screen 2: Track Your Progress**
- Same layout, different content
- Swipe left to continue

**Screen 3: Stay Together and Strong**
- Final onboarding screen
- "Get Started" button

### 3. Login Screen
- Purple gradient background
- Email input field
- Password input field
- "Forgot my password" link
- "Next" button
- Social login options
- "Don't have account? Let's create!" link

### 4. Signup Screen (Click "Let's create!")
- Name input field
- Email input field
- Password input field
- "Sign Up" button
- Social login options
- "Already have an account? Sign In" link

### 5. Home Screen (After login)
- Personalized greeting
- Week calendar
- Daily goals card
- Habits list
- "New Good Habit" button

### 6. Create Habit Screen (Click "+ New Good Habit")
- Habit name input
- Icon selection
- Color selection
- Goal setting
- Reminder toggle
- Habit type selection
- "Add Habit" button

## 🎨 Theme Colors to Verify

### Primary Purple: `#6C5CE7`
- Splash screen background
- Onboarding backgrounds
- Login/Signup backgrounds
- Active states

### White: `#FFFFFF`
- Cards
- Buttons
- Input fields
- Logo circle

### Text Colors
- White text on purple backgrounds
- Dark text on white backgrounds
- Light purple for secondary text

## ✅ Features to Test

### Authentication
- [ ] Create new account
- [ ] Login with existing account
- [ ] Logout
- [ ] Session persistence

### Navigation
- [ ] Splash screen appears on app start
- [ ] Onboarding shows for first-time users
- [ ] Swipe through onboarding screens
- [ ] Navigate to login from onboarding
- [ ] Navigate to signup from login
- [ ] Navigate back to login from signup
- [ ] Auto-navigate to home after login

### Home Screen
- [ ] View habits list
- [ ] See week calendar
- [ ] Click on habits
- [ ] Open "New Good Habit" modal
- [ ] View popular habits

### Create Habit
- [ ] Enter habit name
- [ ] Select icon
- [ ] Select color
- [ ] Set goal
- [ ] Toggle reminder
- [ ] Select habit type
- [ ] Save habit

## 🐛 Common Issues

### Issue: Splash screen doesn't show
**Solution**: Clear cache and restart
```bash
npx expo start --clear
```

### Issue: Gradient not showing
**Solution**: Make sure expo-linear-gradient is installed
```bash
npx expo install expo-linear-gradient
```

### Issue: Navigation not working
**Solution**: Check that all route files exist:
- `app/(onboarding)/index.tsx`
- `app/(auth)/login.tsx`
- `app/(auth)/signup.tsx`
- `app/(tabs)/index.tsx`

### Issue: Colors not consistent
**Solution**: Import Colors from constants
```typescript
import { Colors } from '@/constants/colors';
```

## 📸 Screenshots to Compare

Compare your running app with the provided screenshots:
1. Splash screen - Purple gradient with white logo
2. Onboarding 1 - "Create Good Habits"
3. Onboarding 2 - "Track Your Progress"
4. Onboarding 3 - "Stay Together and Strong"
5. Login screen - "Continue with E-mail"
6. Home screen - Habits list with calendar

## 🎯 Success Criteria

✅ App starts with splash screen
✅ Onboarding screens are swipeable
✅ Purple gradient theme is consistent
✅ Login/Signup works with Supabase
✅ Navigation flows correctly
✅ All buttons are clickable
✅ Forms validate input
✅ Colors match the design

## 📝 Notes

- First-time users see: Splash → Onboarding → Login
- Returning users see: Splash → Home (if logged in) or Login (if not)
- All screens use the purple gradient theme
- Social login buttons are placeholders (not functional yet)
