import { useState, useEffect } from "react"
import { Task, Status } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface TaskModalProps{
    task?:Task
    onSave:(task:Task)=>void
    onClose: ()=> void
    isOpen : boolean
}

export default function TaskModal({ task,onSave,onClose, isOpen}: TaskModalProps){
const [title, setTitle] = useState(task?.title ?? "")
const [description, setDescription] = useState(task?.description ?? "")
const [status, setStatus] = useState<Status>(task?.status ?? "To Do")
const [dueDate, setDueDate] = useState(task?.dueDate ?? "")

function handleSave() {
  const savedTask: Task = {
    id: task?.id ?? Date.now().toString(),
    title,
    description,
    status,
    dueDate,
  }
  onSave(savedTask)
  onClose()


}
//this function for when I try to edit it shows existing data by default
useEffect(() => {
  if (task) {
    setTitle(task.title)
    setDescription(task.description)
    setStatus(task.status)
    setDueDate(task.dueDate)
  } else {
    setTitle("")
    setDescription("")
    setStatus("To Do")
    setDueDate("")
  }
}, [task])
    return (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
        <DialogHeader>
            <DialogTitle>{task ? "Edit Task" : "Create Task"}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
            <Label>Title</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            <Label>Description</Label>
            <Input value={description} onChange={(e) => setDescription(e.target.value)} />
            <Label>Status</Label>
            <Select value={status} onValueChange={(value) => setStatus(value as Status)}>
            <SelectTrigger>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="To Do">To Do</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
            </SelectContent>
            </Select>
            <Label>Due Date</Label>
            <Input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
            <Button onClick={handleSave}>Save</Button>
        </div>
        </DialogContent>
    </Dialog>
    )
}