import {useState} from "react"
import {Task, Status} from "../lib/types"
import {mockTasks} from "../lib/mockData"


export function useTasks(){

const [tasks, setTasks] = useState(mockTasks)
const [search, setSearch] = useState("")
const [filterStatus, setFilterStatus]=useState<Status | "All">("All")

return{
    tasks,
    setTasks,
    search,
    setSearch,
    filterStatus,
    setFilterStatus,
}

}

