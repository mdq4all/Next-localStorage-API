"use client"

import { useTasks } from "@/context/taskContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function NewPage({ params }) {

    const router = useRouter();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const { tasks, createTask, updateTask } = useTasks()

    const onSubmit = handleSubmit((data) => {
        if(params.id) {
            updateTask(params.id, data) 
            toast.success('task updated succesfully')
        } else {
            createTask(data.title, data.description);
            toast.success('task created succesfully')
        } 
        router.push('/');
    })

    useEffect(() => {
        if (params.id) {
            const taskFound = tasks.find(task => task.id === params.id)
            if (taskFound) {
                setValue ('title', taskFound.title)
                setValue ('description', taskFound.description)
            }
        }
    }, []);

    return (
        <form onSubmit={onSubmit}
            className="flex flex-col items-center py-8" >

            <div className="input-group pb-8">
                <input type="text"
                    className="input"
                    {...register("title", { required: true })} />
                <label className="user-label">Title</label>
                {errors.title && <span className="block p-2 text-white bg-red-700 rounded-md mt-2">This field is required</span>}
            </div>

            <div className="input-group pb-8">
                <textarea cols="30" rows="5" className="input"
                    {...register("description", { required: true })} />
                <label className="user-label">Write a description</label>
                {errors.description && <span className="block p-2 text-white bg-red-700 rounded-md">This field is required</span>}
            </div>

            <button type="submit" className="button">
                <span className="text">{params.id ? "Update" : "Save"}</span>
            </button>
        </form>
    )
}
