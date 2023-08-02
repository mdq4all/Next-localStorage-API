import { useRouter } from "next/navigation";
import ButtonDelete from "./ButtonDelete";

export default function TaskCard({ tasks }) {
  const router = useRouter();

  return (
    <div className="flex items-center flex-col w-full">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-[#202020] text-gray-400 cursor-pointer m-4 p-2 flex justify-between 
          w-[50rem]"
          onClick={() => router.push(`/edit/${task.id}`)}>
            <div>
                <h2 className="font-semibold">{task.title}</h2>
                <p className="font-mono">{task.description}</p>
            </div>
          <ButtonDelete task={task} />
        </div>
      ))}
    </div>
  );
}
