# Task Manager App

A modern, feature-rich task management application built with Next.js, TypeScript, and Tailwind CSS.

## Features

### Core Functionality
- ✅ **Create Tasks**: Add tasks with title, description, priority, category, and due dates
- ✅ **Edit Tasks**: Inline editing of task details
- ✅ **Complete Tasks**: Mark tasks as completed with visual feedback
- ✅ **Delete Tasks**: Remove tasks you no longer need
- ✅ **Priority Levels**: Organize tasks by Low, Medium, and High priority
- ✅ **Categories**: Organize tasks with custom categories
- ✅ **Due Dates**: Set and track task deadlines

### Advanced Features
- 🔍 **Search & Filter**: Search tasks by title, description, or category
- 📊 **Statistics Dashboard**: Visual overview of task completion and status
- ⚡ **Smart Sorting**: Automatic sorting by priority, due date, and creation time
- 🎯 **Status Tracking**: Track pending, completed, overdue, and due-soon tasks
- 💾 **Local Storage**: Automatic saving and loading of tasks
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern UI**: Clean, intuitive interface with smooth animations

### Visual Indicators
- 🔴 **Overdue Tasks**: Red border highlighting for overdue tasks
- 🟡 **Due Soon**: Orange indicators for tasks due within 24 hours
- 🟢 **Completed**: Strikethrough text and reduced opacity for completed tasks
- 📈 **Progress Bar**: Visual progress tracking with completion percentage

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Storage**: Local Storage
- **Database**: Prisma (configured for future use)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd task-manager-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This app can be easily deployed to Vercel, Netlify, or any static hosting platform.

```bash
npm run build
```

## Author

Built by Margaret Ketter as part of her portfolio showcase.