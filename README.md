# BIBLE TIME - Interactive Biblical Games

A modern, responsive web application featuring interactive biblical games and activities, built in the style of NEAL.FUN with PWA support.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **PWA Support**: Installable as a native app with offline functionality
- **Dynamic Theme Slider**: Smooth transition between dark and light themes
- **Animated Particles**: Floating particle effects in the background
- **Modern UI**: Glass-morphism effects and smooth animations
- **Game System**: Modular game structure for easy addition of new games

## 📁 Project Structure

```
bible-time/
├── index.html                # Main landing page
├── manifest.json            # PWA manifest file
├── sw.js                    # Service Worker for PWA
├── README.md               # This file
├── assets/
│   ├── logo.png            # Your logo (REPLACE THE PLACEHOLDER)
│   ├── icons/              # PWA icons (72x72 to 512x512)
│   │   ├── icon-72x72.png
│   │   ├── icon-96x96.png
│   │   ├── icon-128x128.png
│   │   ├── icon-144x144.png
│   │   ├── icon-152x152.png
│   │   ├── icon-192x192.png
│   │   ├── icon-384x384.png
│   │   └── icon-512x512.png
│   ├── screenshots/        # PWA screenshots
│   │   ├── desktop.png
│   │   └── mobile.png
│   └── fonts/              # Custom fonts (optional)
├── css/                    # Separate CSS files (optional)
├── js/                     # Separate JS files (optional)
└── games/                  # Individual games folder
    ├── bible-quiz/
    │   ├── index.html
    │   ├── game.js
    │   └── game.css
    ├── verse-memory/
    │   ├── index.html
    │   ├── game.js
    │   └── game.css
    ├── biblical-timeline/
    ├── parable-puzzle/
    ├── bible-geography/
    └── character-match/
```

## 🎮 Current Game Placeholders

1. **Bible Quiz** - Test biblical knowledge
2. **Verse Memory** - Memorize Bible verses
3. **Biblical Timeline** - Explore chronology
4. **Parable Puzzles** - Solve parable-based puzzles
5. **Bible Geography** - Learn biblical locations
6. **Character Match** - Match characters with stories

## 🛠️ Setup Instructions

### 1. Replace Logo
- Replace the placeholder in `index.html` line 197:
```html
<!-- Current placeholder -->
<div class="logo-placeholder">BT</div>

<!-- Replace with -->
<img src="assets/logo.png" alt="BIBLE TIME" class="logo" style="width: 50px; height: 50px; border-radius: 10px;">
```

### 2. Add PWA Icons
Create icons in the following sizes and place in `assets/icons/`:
- 72x72px, 96x96px, 128x128px, 144x144px
- 152x152px, 192x192px, 384x384px, 512x512px

### 3. Add Screenshots
For PWA store listings, add:
- `assets/screenshots/desktop.png` (1280x720)
- `assets/screenshots/mobile.png` (375x812)

### 4. Customize Contact Information
Update footer in `index.html` around line 245:
```html
<p>Developed in 2025 by [Your Name]</p>
<div class="footer-links">
    <a href="mailto:your-email@domain.com">Contact</a>
    <!-- ... other links -->
</div>
```

## 🎯 Adding New Games

### Method 1: Update Games Array
In `index.html`, find the `gamesConfig` array (around line 272) and add:

```javascript
{
    id: 'your-game-id',
    title: 'Your Game Title',
    description: 'Game description here',
    icon: '🎮', // Emoji or icon
    path: 'games/your-game/'
}
```

### Method 2: Create Game Files
1. Create folder: `games/your-game/`
2. Add `index.html` with game content
3. Include back navigation to main site
4. Use consistent styling (copy from game template)

### Game Template
Use the provided Bible Quiz template as a starting point for new games.

## 📱 PWA Features

- **Offline Support**: Games cached for offline play
- **Install Prompt**: Native install button appears automatically
- **App Shortcuts**: Quick access to popular games
- **Background Sync**: Updates when connection restored
- **Push Notifications**: Ready for future updates

## 🎨 Theme System

The site features a unique theme slider that:
- Smoothly transitions between dark and light themes
- Requires full drag interaction (not just click)
- Updates colors in real-time during drag
- Maintains user preference

## 🚀 Deployment to Netlify

1. **Prepare Files**: Ensure all files are in project root
2. **Add Icons**: Include all required PWA icons
3. **Test Locally**: Open `index.html` in browser
4. **Deploy**: Drag entire folder to Netlify deploy area
5. **Configure**: Set custom domain if desired

### Netlify Headers (Optional)
Create `_headers` file for better PWA support:
```
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Service-Worker-Allowed: /
```

### Netlify Redirects (Optional)
Create `_redirects` file for SPA behavior:
```
/*    /index.html   200
```

## 🔧 Performance Optimizations

- **Lazy Loading**: Games load only when accessed
- **Service Worker Caching**: Instant subsequent loads
- **Optimized Animations**: 60fps particle system
- **Responsive Images**: Different sizes for different devices
- **Minified Code**: Ready for production

## 📊 Browser Support

- **Chrome/Edge**: Full PWA support
- **Firefox**: Most features supported
- **Safari**: Basic PWA support on iOS 11.3+
- **Mobile Browsers**: Fully responsive design

## 🔄 Future Enhancements

- Game progress tracking
- User accounts and leaderboards
- Multiplayer capabilities
- More advanced PWA features
- Analytics integration

## 📝 Development Notes

- All styles are inline for easy deployment
- No external dependencies
- Vanilla JavaScript for maximum compatibility
- Mobile-first responsive design
- Accessibility considerations included

## 🎉 Ready to Deploy!

Your BIBLE TIME site is ready for Netlify deployment. Just add your logo, create the necessary icons, and drag the entire project folder to Netlify!
