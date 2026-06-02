import {Task} from "./types"

export const mockTasks:Task[]=[
    {
        id: "1",
        title: "Fix login bug",
        description: "Resolve authentication error on login page",
        status: "Completed",
        dueDate: "2026-05-20"
    },
    {
        id: "2",
        title: "Update Database",
        description: "Migrate database schema to latest version",
        status: "Completed",
        dueDate: "2026-05-25"
    },
    {
        id: "3",
        title: "Deploy to server",
        description: "Deploy latest build to production server",
        status: "In Progress",
        dueDate: "2026-06-05"
    },
    {
        id: "4",
        title: "Code Review",
        description: "Review pull requests from team members",
        status: "In Progress",
        dueDate: "2026-06-08"

    },
    {
        id: "5",
        title: "Write unit tests",
        description: "Write unit tests for all components",
        status: "To Do",
        dueDate: "2026-06-12"
    }
]

