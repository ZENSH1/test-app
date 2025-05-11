# Notes App - React Native Tutorial Project

This project is a React Native application created for personal learning purposes, following **The Net Ninja**'s tutorial series on React Native development.

## Project Overview

This is a notes/books app built with React Native and Expo Router, featuring:
- Authentication screens (login/register)
- Dashboard with tabs for books, profile, and creating new entries
- Theme support (light/dark mode)
- Component-based architecture with reusable themed components

## Project Structure

### Root Configuration
- `app.json` - Expo configuration file with app settings, plugins, and build options
- `package.json` - Project dependencies and scripts
- `.gitignore` - Git configuration for ignored files

### Navigation & Routing
The app uses Expo Router for file-based routing:

- `app/_layout.tsx` - Root layout with Stack navigation configuration
- `app/index.tsx` - Home screen with navigation links
- `app/(auth)/_layout.tsx` - Authentication section layout
- `app/(dashboard)/_layout.tsx` - Dashboard section with tab navigation

### Authentication Screens
- `app/(auth)/login.tsx` - Login screen
- `app/(auth)/register.tsx` - Registration screen

### Dashboard Screens
- `app/(dashboard)/books.tsx` - Books/notes listing screen
- `app/(dashboard)/create.tsx` - Create new book/note screen
- `app/(dashboard)/profile.tsx` - User profile screen

### Reusable Components
The app uses a set of themed components for consistent UI:

- `components/ThemedView.tsx` - Container component with theme support
- `components/ThemedText.tsx` - Text component with theme support
- `components/ThemedButton.tsx` - Button component with theme support
- `components/ThemedLogo.tsx` - Logo component that changes based on theme
- `components/Spacer.tsx` - Utility component for creating space between elements

### Utilities
- `utils/Navigation.ts` - Navigation helper functions
- `constants/Colors.ts` - Theme color definitions
- `constants/images.ts` - Image assets management

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a:
- Development build
- Android emulator
- iOS simulator
- Expo Go app

## Development

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction) with Expo Router.

## Project Reset

When you're ready to start fresh, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learning Resources

This project follows The Net Ninja's React Native tutorial series. The implementation includes:
- Expo Router for navigation
- Themed components for consistent UI
- Tab-based dashboard navigation
- Authentication flow
- Safe area handling for different devices

## Technologies Used

- React Native
- Expo
- TypeScript
- Expo Router
- React Navigation

        