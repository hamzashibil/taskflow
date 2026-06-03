import { Task } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { formatDate, isOverdue } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface TaskTableProps {
  tasks: Task[]
  onEdit:(task:Task) =>void
  onDelete:(id:string)=>void
}

export default function TaskTable({ tasks, onEdit, onDelete }: TaskTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell>{task.title}</TableCell>
            <TableCell>{task.description}</TableCell>
            <TableCell>
              <Badge className={
                    task.status === "Completed" ? "bg-green-100 text-green-800" :
                    task.status === "In Progress" ? "bg-blue-100 text-blue-800" :
                    "bg-gray-100 text-gray-800"
                    }>
                    {task.status}
              </Badge>
            </TableCell>
            <TableCell className={isOverdue(task.dueDate) && task.status !== "Completed" ? "text-red-600 font-medium" : ""}>
                {formatDate(task.dueDate)}
            </TableCell>
            <TableCell>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => onEdit(task)}>
                    Edit
                    </Button>
                    <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="destructive" size="sm">Delete</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This will permanently delete the task. This action cannot be undone.
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => onDelete(task.id)}>
                            Delete
                        </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                    </AlertDialog>
                </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}