# TaskFlow

A task management dashboard built with Next.js, TypeScript, Tailwind CSS and shadcn/ui.

## Screenshots

### Create Account
![Create Account](./screenshots/Dashboard/1CreateAccount.png)

### Dark Theme Create
![Dark Theme Create](./screenshots/Dashboard/2DarkThemeCreate.png)

### Login Page
![Login Page](./screenshots/Dashboard/3LoginPage.png)

### Dark Theme Login
![Dark Theme Login](./screenshots/Dashboard/4DarkThemeLogin.png)

### Login Error
![Login Error](./screenshots/Dashboard/5LoginError.png)

### Dashboard Page 1
![Dashboard Page 1](./screenshots/Dashboard/6Dashboardpage1.png)

### Dashboard Dark Mode
![Dashboard Dark](./screenshots/Dashboard/7DashboardPage1Dark.png)

### Dashboard Page 2
![Dashboard Page 2](./screenshots/Dashboard/8DashboardPage2.png)

### Dashboard Page 2 Dark
![Dashboard Page 2 Dark](./screenshots/Dashboard/9DashboardPage2Dark.png)

### Filter In Progress
![Filter](./screenshots/Dashboard/10DashboardInProgress.png)

### Create Task
![Create Task](./screenshots/Dashboard/11CreateTask.png)

### Edit Task
![Edit Task](./screenshots/Dashboard/12EditTask.png)

### Delete Confirmation
![Delete](./screenshots/Dashboard/13DeleteConfirm.png)

### Completed Filter
![Completed](./screenshots/Dashboard/14completed.png)

### Change Status
![Change Status](./screenshots/Dashboard/15ChangeStatus.png)

### Search
![Search](./screenshots/Dashboard/16Search.png)

### Due Date Ascending
![Due Date Asc](./screenshots/Dashboard/17DueDate.png)

### Due Date Descending
![Due Date Desc](./screenshots/Dashboard/18DueDate.png)

## Setup Steps

1. Clone the repository
   git clone https://github.com/hamzashibil/taskflow.git

2. Go into project folder
   cd task-dashboard

3. Install dependencies
   npm install

4. Run the development server
   npm run dev

5. Open http://localhost:3000 in your browser

# Features

- Mock authentication with register and login
- Create, edit and delete tasks
- Filter tasks by status
- Search tasks by title
- Sort tasks by due date ascending and descending
- Overdue date highlighted in red
- Pagination — 5 tasks per page
- Dark mode support
- Responsive layout
- Data persisted in localStorage

# Design Decisions

- Used a custom useTasks hook to separate state logic from UI components
- Used a single TaskModal component for both create and edit to avoid code duplication
- Used localStorage for mock authentication and task persistence
- Used shadcn/ui components throughout for consistent design
- Added useEffect in TaskModal to fix pre-fill bug when editing tasks

# Folder Structure

- app/ — Next.js pages and routing
- app/login/ — Login and register page
- app/dashboard/ — Main dashboard page
- components/tasks/ — TaskTable, TaskModal, TaskFilters components
- components/ThemeProvider.tsx — Dark mode provider
- hooks/useTasks.ts — All task state and logic
- lib/types.ts — TypeScript interfaces
- lib/mockData.ts — Initial mock tasks
- lib/utils.ts — Helper functions