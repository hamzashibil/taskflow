import { useState, useEffect } from "react"
import { Task, Status } from "../lib/types"
import { mockTasks } from "../lib/mockData"

export function useTasks(){

  const [tasks, setTasks] = useState<Task[]>(() => {
    if (typeof window === "undefined") return mockTasks
    const saved = localStorage.getItem("tasks")
    return saved ? JSON.parse(saved) : mockTasks
  })
  const [search, setSearch] = useState("")
  const [filterStatus, setFilterStatus] = useState<Status | "All">("All")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const tasksPerPage = 5

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const filteredTasks = tasks
    .filter((task) => {
      const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase())
      const matchesStatus = filterStatus === "All" || task.status === filterStatus
      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      } else {
        return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
      }
    })

  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage)

  const paginatedTasks = filteredTasks.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  )

  return{
    tasks,
    filteredTasks,
    paginatedTasks,
    setTasks,
    search,
    setSearch,
    filterStatus,
    setFilterStatus,
    sortOrder,
    setSortOrder,
    currentPage,
    setCurrentPage,
    totalPages,
  }
}