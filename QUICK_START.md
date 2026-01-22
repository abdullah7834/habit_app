# Quick Start Guide - Routinier App

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the App
```bash
npm start
```

### 3. Choose Platform
- Press `w` for **Web browser**
- Press `a` for **Android emulator**
- Press `i` for **iOS simulator**
- Scan QR code with **Expo Go** app on your phone

## 📱 Test the App

### Flow 1: First Time User
1. **Splash Screen** (2 seconds) - Purple gradient with logo
2. **Onboarding** - Swipe through 3 screens
3. **Login** - Click "Let's create!" to sign up
4. **Signup** - Create account
5. **Home** - See your habits dashboard

### Flow 2: Returning User
1. **Splash Screen** (2 seconds)
2. **Login** - Enter credentials
3. **Home** - Direct to dashboard

## 🎯 Explore Features

### Home Tab
- View habits list
- Check weekly calendar
- See daily goals
- Click "+ New Good Habit"

### Activity Tab
- View statistics
- Check success rate (98%)
- See bar chart
- Track mood

### Explore Tab
- Browse suggested habits
- Join habit clubs
- View challenges
- Read learning content

### Leaderboard Tab
- See top 3 podium
- View your ranking
- Check points

### Profile Tab
- View activity feed
- Click settings icon
- Toggle sounds/vacation mode

## 🎨 What to Look For

✅ **Purple gradient** backgrounds on auth screens
✅ **White cards** with rounded corners
✅ **Smooth animations** on splash screen
✅ **Tab navigation** at bottom
✅ **Custom bar chart** in Activity
✅ **Podium display** in Leaderboard
✅ **Floating + button** in Explore

## 🔑 Test Credentials

For testing, you can:
1. Create a new account (Signup)
2. Or use existing Supabase credentials

## ⚡ Quick Commands

```bash
# Start fresh
npx expo start --clear

# Android
npm run android

# iOS
npm run ios

# Web
npm run web

# Lint
npm run lint
```

## 🎯 Key Screens to Test

1. ✅ Splash → Onboarding → Login
2. ✅ Home → Create Habit
3. ✅ Activity → View Stats
4. ✅ Explore → Browse Content
5. ✅ Leaderboard → See Rankings
6. ✅ Profile → Settings

## 🐛 Common Issues

**Port already in use?**
- Kill the process or use suggested port

**Splash screen stuck?**
- Clear cache: `npx expo start --clear`

**Navigation not working?**
- Restart the dev server

**Colors look wrong?**
- Check you're using `Colors` from `constants/colors.ts`

## 📝 Notes

- First load may take a few seconds
- Splash screen shows for 2 seconds
- All screens use purple theme (#6C5CE7)
- Tab bar has 5 tabs
- Settings toggles are functional

## 🎉 You're Ready!

Your Routinier app is fully functional and ready to test. Enjoy exploring all the features!

---

**Need help?** Check `FINAL_SUMMARY.md` for complete documentation.
