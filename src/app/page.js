"use client"

import TaskCard from "@/components/TaskCard"
import { useTasks } from "@/context/taskContext"

export default function Page() {

  const { tasks } = useTasks()
  return (
    <div>
      <TaskCard tasks={tasks} />
    </div>
  )
}
