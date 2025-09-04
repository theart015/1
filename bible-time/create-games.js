// Script to generate all game placeholder pages
// Run this in Node.js to create all game folders and files

const fs = require('fs');
const path = require('path');

const games = [
    {
        id: 'bible-quiz',
        title: 'Bible Quiz',
        description: 'Test your knowledge of biblical stories, characters, and verses.',
        icon: '📖',
        features: [
            { icon: '❓', text: 'Multiple choice questions' },
            { icon: '📊', text: 'Progress tracking' },
            { icon: '🏆', text: 'Difficulty levels' },
            { icon: '⭐', text: 'Achievement system' }
        ]
    },
    {
        id: 'verse-memory',
        title: 'Verse Memory',
        description: 'Memorize and practice important Bible verses through interactive games.',
        icon: '🧠',
        features: [
            { icon: '📝', text: 'Interactive memorization' },
            { icon: '🔄', text: 'Spaced repetition' },
            { icon: '📈', text: 'Memory progress' },
            { icon: '🎯', text: 'Daily challenges' }
        ]
    },
    {
        id: 'biblical-timeline',
        title: 'Biblical Timeline',
        description: 'Explore the chronology of biblical events and characters.',
        icon: '📅',
        features: [
            { icon: '⏰', text: 'Interactive timeline' },
            { icon: '🗺️', text: 'Historical context' },
            { icon: '👥', text: 'Character stories' },
            { icon: '📚', text: 'Detailed events' }
        ]
    },
    {
        id: 'parable-puzzle',
        title: 'Parable Puzzles',
        description: 'Solve puzzles based on Jesus parables and their meanings.',
        icon: '🧩',
        features: [
            { icon: '🎲', text: 'Interactive puzzles' },
            { icon: '💡', text: 'Meaning explanations' },
            { icon: '🎨', text: 'Visual storytelling' },
            { icon: '🤔', text: 'Critical thinking' }
        ]
    },
    {
        id: 'bible-geography',
        title: 'Bible Geography',
        description: 'Learn about biblical locations and their significance.',
        icon: '🗺️',
        features: [
            { icon: '🌍', text: 'Interactive maps' },
            { icon: '📍', text: 'Location details' },
            { icon: '🏛️', text: 'Historical sites' },
            { icon: '🚶', text: 'Virtual journeys' }
        ]
    },
    {
        id: 'character-match',
        title: 'Character Match',
        description: 'Match biblical characters with their stories and achievements.',
        icon: '👥',
        features: [
            { icon: '🎮', text: 'Matching games' },
            { icon: '📖', text: 'Character bios' },
            { icon: '🎖️', text: 'Story connections' },
            { icon: '🧠', text: 'Memory training' }
        ]
    }
];

const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#1a1a2e">
    <title>{{TITLE}} - BIBLE TIME</title>
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --bg-primary: #1a1a2e;
            --bg-secondary: #16213e;
            --bg-card: #0f3460;
            --text-primary: #e94560;
            --text-secondary: #ffffff;
            --text-muted: #a8a8a8;
            --accent: #e94560;
            --success: #2ecc71;
            --error: #e74c3c;
        }

        body {
            font-family: 'Arial', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
            color: var(--text-secondary);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .header {
            background: rgba(26, 26, 46, 0.9);
            backdrop-filter: blur(20px);
            padding: 15px 20px;
            border-bottom: 1px solid rgba(233, 69, 96, 0.2);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .back-btn {
            background: var(--accent);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 20px;
            cursor: pointer;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
        }

        .back-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(233, 69, 96, 0.3);
        }

        .game-title {
            font-size: 24px;
            color: var(--text-primary);
            font-weight: bold;
        }

        .main-content {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
        }

        .game-container {
            max-width: 800px;
            width: 100%;
            text-align: center;
        }

        .game-placeholder {
            background: var(--bg-card);
            border-radius: 20px;
            padding: 60px 40px;
            border: 2px dashed var(--accent);
            position: relative;
            overflow: hidden;
        }

        .game-placeholder::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(233, 69, 96, 0.1), transparent);
            animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
        }

        .game-icon {
            font-size: 72px;
            margin-bottom: 20px;
        }

        .placeholder-title {
            font-size: 28px;
            color: var(--text-primary);
            margin-bottom: 15px;
        }

        .placeholder-description {
            font-size: 18px;
            color: var(--text-muted);
            line-height: 1.6;
            margin-bottom: 30px;
        }

        .feature-list {
            text-align: left;
            max-width: 400px;
            margin: 0 auto 30px;
        }

        .feature-item {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
            padding: 15px;
            background: rgba(233, 69, 96, 0.1);
            border-radius: 10px;
            transition: all 0.3s ease;
        }

        .feature-item:hover {
            background: rgba(233, 69, 96, 0.2);
            transform: translateX(5px);
        }

        .feature-icon {
            font-size: 20px;
            width: 30px;
            text-align: center;
        }

        .coming-soon {
            background: var(--accent);
            color: white;
            padding: 15px 30px;
            border-radius: 30px;
            font-size: 18px;
            font-weight: bold;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 20px;
        }

        .coming-soon:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 25px rgba(233, 69, 96, 0.4);
        }

        .progress-bar {
            width: 100%;
            height: 8px;
            background: rgba(233, 69, 96, 0.2);
            border-radius: 4px;
            margin-top: 30px;
            overflow: hidden;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--accent), #ff6b8a);
            border-radius: 4px;
            width: 0%;
            animation: progress 3s ease-in-out infinite alternate;
        }

        @keyframes progress {
            0% { width: 20%; }
            100% { width: 75%; }
        }

        .status-text {
            margin-top: 15px;
            color: var(--text-muted);
            font-size: 14px;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
            .header {
                padding: 12px 15px;
            }

            .game-title {
                font-size: 20px;
            }

            .main-content {
                padding: 20px 15px;
            }

            .game-placeholder {
                padding: 40px 25px;
            }

            .placeholder-title {
                font-size: 24px;
            }

            .placeholder-description {
                font-size: 16px;
            }

            .game-icon {
                font-size: 56px;
            }
        }

        @media (max-width: 480px) {
            .back-btn {
                padding: 8px 15px;
                font-size: 14px;
            }

            .game-title {
                font-size: 18px;
            }

            .game-placeholder {
                padding: 30px 20px;
            }

            .placeholder-title {
                font-size: 22px;
            }

            .feature-list {
                max-width: 100%;
            }

            .feature-item {
                padding: 12px;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <a href="../../index.html" class="back-btn" onclick="closeGame(); return false;">
            ← Back to Home
        </a>
        <h1 class="game-title">{{TITLE}}</h1>
        <div></div>
    </header>

    <main class="main-content">
        <div class="game-container">
            <div class="game-placeholder">
                <div class="game-icon">{{ICON}}</div>
                <h2 class="placeholder-title">{{TITLE}} Game</h2>
                <p class="placeholder-description">
                    {{DESCRIPTION}}
                </p>
                
                <div class="feature-list">
                    {{FEATURES}}
                </div>

                <button class="coming-soon" onclick="showComingSoon()">
                    Coming Soon!
                </button>

                <div class="progress-bar">
                    <div class="progress-fill"></div>
                </div>
                <p class="status-text">Game development in progress...</p>
            </div>
        </div>
    </main>

    <script>
        function closeGame() {
            // If opened in new tab, close it
            if (window.history.length <= 2) {
                window.close();
            } else {
                // Otherwise navigate back
                window.history.back();
            }
        }

        function showComingSoon() {
            alert('This game is currently under development. Stay tuned for updates!');
        }

        // Add some interactive effects
        document.addEventListener('DOMContentLoaded', () => {
            const featureItems = document.querySelectorAll('.feature-item');
            
            featureItems.forEach((item, index) => {
                item.style.animationDelay = \`\${index * 0.1}s\`;
                item.style.animation = 'slideIn 0.5s ease forwards';
            });

            // Add click effects
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('feature-item') || e.target.closest('.feature-item')) {
                    const item = e.target.classList.contains('feature-item') ? e.target : e.target.closest('.feature-item');
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        item.style.transform = 'translateX(5px)';
                    }, 150);
                }
            });

            // Handle escape key to close game
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    closeGame();
                }
            });
        });

        // Add slide-in animation
        const style = document.createElement('style');
        style.textContent = \`
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        \`;
        document.head.appendChild(style);
    </script>
</body>
</html>`;

// Function to create directories and files
function createGames() {
    const gamesDir = 'games';
    
    // Create games directory if it doesn't exist
    if (!fs.existsSync(gamesDir)) {
        fs.mkdirSync(gamesDir);
    }

    games.forEach(game => {
        const gameDir = path.join(gamesDir, game.id);
        
        // Create game directory
        if (!fs.existsSync(gameDir)) {
            fs.mkdirSync(gameDir);
        }

        // Generate features HTML
        const featuresHTML = game.features.map(feature => 
            `                    <div class="feature-item">
                        <span class="feature-icon">${feature.icon}</span>
                        <span>${feature.text}</span>
                    </div>`
        ).join('\n');

        // Replace placeholders in template
        let gameHTML = htmlTemplate
            .replace(/{{TITLE}}/g, game.title)
            .replace(/{{ICON}}/g, game.icon)
            .replace(/{{DESCRIPTION}}/g, game.description)
            .replace(/{{FEATURES}}/g, featuresHTML);

        // Write index.html file
        const htmlFile = path.join(gameDir, 'index.html');
        fs.writeFileSync(htmlFile, gameHTML, 'utf8');

        console.log(`Created ${game.title} at ${htmlFile}`);
    });

    console.log('\nAll game pages created successfully!');
    console.log('You can now deploy the entire project to Netlify.');
}

// Run the function if this script is executed directly
if (require.main === module) {
    createGames();
}

module.exports = { createGames, games, htmlTemplate };