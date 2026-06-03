import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Status } from "@/lib/types"
import { Button } from "@/components/ui/button"

interface TaskFiltersProps {
  search: string
  setSearch: (value: string) => void
  filterStatus: Status | "All"
  setFilterStatus: (value: Status | "All") => void
  sortOrder: "asc" | "desc"
  setSortOrder: (value: "asc" | "desc") => void
}

export default function TaskFilters({
  search,
  setSearch,
  filterStatus,
  setFilterStatus,
  sortOrder,
  setSortOrder
}: TaskFiltersProps) {
  return (
    <div className="flex gap-4 mb-6">
      <Input
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-sm"
      />
      <Select
        value={filterStatus}
        onValueChange={(value) => setFilterStatus(value as Status | "All")}
      >
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Filter status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All</SelectItem>
          <SelectItem value="To Do">To Do</SelectItem>
          <SelectItem value="In Progress">In Progress</SelectItem>
          <SelectItem value="Completed">Completed</SelectItem>
        </SelectContent>
      </Select>
      <Button
        variant="outline"
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
        Due Date {sortOrder === "asc" ? "↑" : "↓"}
      </Button>
    </div>
  )
}