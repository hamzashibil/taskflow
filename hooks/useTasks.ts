import {useState} from "react"
import {Task, Status} from "../lib/types"
import {mockTasks} from "../lib/mockData"


export function useTasks(){

const [tasks, setTasks] = useState(mockTasks)
const [search, setSearch] = useState("")
const [filterStatus, setFilterStatus]=useState<Status | "All">("All")
const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

//Filtered Tasks 
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

return{
   
  tasks,
  filteredTasks,
  setTasks,
  search,
  setSearch,
  filterStatus,
  setFilterStatus,
  sortOrder,
  setSortOrder

}

}

