"use client"

import {useEffect, useState} from "react"
import { useRouter } from "next/navigation"
import {useTasks} from "@/hooks/useTasks"
import {Button} from "@/components/ui/button"
import TaskTable from "@/components/tasks/TaskTable"
import TaskFilters from "@/components/tasks/TaskFilters"
import TaskModal from "@/components/tasks/TaskModal"
import { Task } from "@/lib/types"
import { useTheme } from "next-themes"

export default function DashBoardPage(){

    const router = useRouter()
    const { filteredTasks, setTasks, tasks, search, setSearch, filterStatus, setFilterStatus,sortOrder, setSortOrder, } = useTasks()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined)
    const { theme, setTheme } = useTheme()

    useEffect(()=> {
        const isLoggedIn = localStorage.getItem("isLoggedIn")
        if(!isLoggedIn){
            router.push("/login")
        }
    },[])
function handleLogout() {
  localStorage.removeItem("isLoggedIn")
  router.push("/login")


}

function handleSave(task: Task) {
  setTasks((prev) =>
    prev.find((t) => t.id === task.id)
      ? prev.map((t) => (t.id === task.id ? task : t))
      : [...prev, task]
  )
}

function handleDelete(id: string) {
  setTasks((prev) => prev.filter((t) => t.id !== id))
}

function handleEdit(task: Task) {
  setSelectedTask(task)
  setIsModalOpen(true)
}


    return (
 <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
  <div className="border-b bg-white dark:bg-gray-800 px-8 py-4 flex items-center justify-between">
    <h1 className="text-xl font-semibold text-gray-900 dark:text-white">TaskFlow</h1>
    <div className="flex gap-4">
        <Button onClick={() => { setSelectedTask(undefined); setIsModalOpen(true) }}>
          Add Task
        </Button>
        <Button onClick={handleLogout}>Logout</Button>
        <Button
            variant="outline"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </Button>
      </div>
    </div>
    
    <div className="p-8">
    <h2 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">My Tasks</h2>
      <TaskFilters
        search={search}
        setSearch={setSearch}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <TaskTable tasks={filteredTasks}
       onEdit={handleEdit}
       onDelete={handleDelete} />
    </div>
    <TaskModal
      isOpen={isModalOpen}
      task={selectedTask}
      onSave={handleSave}
      onClose={() => setIsModalOpen(false)}
    />
  </div>
)
}

