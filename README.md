# Acentúa la Frase - Spanish Accent Challenge Game

An interactive educational game designed to help learners practice Spanish accent marks (tildes) in a fun and engaging way. Players must identify words that need accent marks and correctly place the tilde on the appropriate vowel.

## 🎮 Game Features

- **6 Levels**: Each level contains 10 unique sentences to practice
- **Progressive Difficulty**: Challenge increases as you advance through levels
- **Hint System**: Visual hints appear on your last attempt
- **Lives System**: Start with 3 lives - lose one for each incorrect answer
- **Scoring**: Earn 10 points for each correct answer (maximum 600 points)
- **Progress Saving**: Your game progress is automatically saved
- **High Score Tracking**: Track your best performance

## 🎯 How to Play

1. Read the sentence displayed on the screen
2. Click on the word that you think needs an accent mark
3. Click on the vowel where the accent should be placed
4. You have 3 attempts per sentence
5. On your last attempt, the correct word will flash as a hint
6. Complete all 6 levels to win!

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd spanish-accent-challenge
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (if using Gemini AI features):
   Create a `.env.local` file in the root directory and add:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🛠️ Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling (via CDN)

## 📚 Educational Content

This game covers various Spanish accent rules including:
- Agudas (words stressed on the last syllable)
- Graves/Llanas (words stressed on the second-to-last syllable)
- Esdrújulas (words stressed on the third-to-last syllable)
- Diacritical accents (tú/tu, él/el, qué/que, etc.)
- Hiatus rules (día, tía, etc.)

## 🌐 Resources

Looking for resources to prepare for Academic Spanish Proficiency exams such as the BTLPT? Visit our [BTLPT Preparation page](https://www.enablinglearning.com/btlpt/).

## 📝 License

This game has been designed by [enablinglearning.com](https://www.enablinglearning.com/).

## 🙏 Acknowledgments

Developed as an educational tool to support Spanish language learning and accent mark proficiency.
