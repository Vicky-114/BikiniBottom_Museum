# Bikini Bottom Book / Museum

Welcome to the **Bikini Bottom Book**, an interactive, multilingual web experience dedicated to exploring the rich lore, characters, locations, and underlying philosophies of SpongeBob SquarePants. 

## 🌊 Overview

This project serves as a dynamic "digital museum" or "interactive book" that dives deep into the universe created by Stephen Hillenburg. It explores the show's absurdist humor, existential themes, and the fascinating real-world marine biology that inspired the classic cartoon. 

## ✨ Features

- **Interactive Character Network**: Explore over 40 fully animated character avatars (powered by Tenor GIFs). Discover their real-life animal inspirations, deep personality analyses, and their interconnected relationships through an interactive orbiting UI.
- **Bikini Bottom & Bikini Atoll Facts**: Delve into the dark, real-world history of the Bikini Atoll nuclear tests and the "mutant" fan theories surrounding the vibrant underwater city.
- **Interactive Locations Map**: Navigate through iconic Bikini Bottom landmarks using an interactive map modal, complete with a custom "jellyfish net" cursor.
- **Krusty Krab & Food Lore**: Learn the secrets behind legendary underwater cuisine.
- **Mini-Games**: Includes launching the "Bikini Bottom Residence Test"—an AI-powered quiz that reveals your unique SpongeBob hybrid character matching your personality type.
- **Multilingual Support (9 Languages)**: Fully localized in English, Simplified Chinese, Traditional Chinese, Japanese, Korean, Spanish, French, German, and Russian, seamlessly generated via a custom `generate_translations.cjs` script.
- **Persistent Background Music & Audio**: Enjoy seamless underwater ambiance and music across all pages without interruption.
- **Responsive & Modern UI**: Built with a sleek, glassmorphism design, vibrant oceanscape colors, and smooth micro-animations.

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS + Shadcn UI + Framer Motion/Tailwind Animate
- **Localization**: `react-i18next`
- **Data & APIs**: Tenor GIF API (for animated character avatars), custom Python/Node data processors.
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd bikini-bottom-book-main
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server
Start the Vite dev server to view the site locally:
```bash
npm run dev
```
Then, open your browser and navigate to `http://localhost:8080/` (or the port specified in your console).

### Updating Translations
If you add or modify website text, update the `generate_translations.cjs` script, and then run:
```bash
node generate_translations.cjs
```
This automatically generates the updated JSON files for all 9 supported languages.

## 📜 Credits
This project is an educational, fan-made interactive tribute to SpongeBob SquarePants. All character rights, images, and properties belong to Nickelodeon and ViacomCBS. Real animated avatars fetched dynamically via Tenor.
