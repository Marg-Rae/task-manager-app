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
   # or
   yarn dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## Usage Guide

### Adding a Task
1. Click the "Add New Task" button
2. Fill in the task details:
   - **Title**: Required field for the task name
   - **Description**: Optional detailed description
   - **Priority**: Choose Low, Medium, or High
   - **Category**: Add a category for organization
   - **Due Date**: Set an optional deadline
3. Click "Add Task" to save

### Managing Tasks
- **Complete**: Check the checkbox next to a task
- **Edit**: Click the edit icon to modify task details
- **Delete**: Click the trash icon to remove a task

### Filtering & Search
- **Search**: Use the search bar to find tasks by title, description, or category
- **Category Filter**: Filter tasks by specific categories
- **Priority Filter**: Show only tasks of selected priority
- **Status Filter**: Filter by pending, completed, overdue, or due soon
- **Show/Hide Completed**: Toggle visibility of completed tasks

## Project Structure
```
app/
├── components/          # Reusable UI components
│   ├── TaskCard.tsx    # Individual task display
│   ├── AddTaskForm.tsx # Task creation form
│   ├── FilterControls.tsx # Search and filter UI
│   └── TaskStats.tsx   # Statistics dashboard
├── hooks/              # Custom React hooks
│   └── useTasks.ts     # Task management logic
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared interfaces
├── utils/              # Utility functions
│   └── taskUtils.ts    # Task-related helper functions
├── globals.css         # Global styles and animations
├── layout.tsx          # Root layout component
└── page.tsx           # Main application page
```

## Key Features Implementation

### Data Persistence
Tasks are automatically saved to browser localStorage and restored on page load. No backend required!

### Smart Sorting
Tasks are automatically sorted by:
1. Completion status (incomplete first)
2. Priority level (high to low)
3. Due date (earliest first)
4. Creation date (newest first)

### Responsive Design
The application adapts to different screen sizes:
- **Desktop**: Full-width with multi-column layouts
- **Tablet**: Responsive grid layouts
- **Mobile**: Single-column, touch-friendly interface

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License
MIT License - feel free to use this project for personal or commercial purposes.

## Author
Built by Margaret Ketter as part of her portfolio showcase.