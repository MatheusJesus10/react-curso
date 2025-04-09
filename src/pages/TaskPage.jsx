import { ChevronLeftIcon, ChevronsLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom"
import Title from "../components/Title";

function TaskPage() {
    const navigate = useNavigate()
    const [SearchParams] = useSearchParams();
    const title = SearchParams.get("title")
    const description = SearchParams.get("description")
    return (
        <div className="h-screen w-screen bg-slate-500 p-6 flex justify-center">
            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative mb-6">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="absolute left-0 top-0 bottom-0 text-slate-100">
                        <ChevronLeftIcon />
                    </button>
                    <Title>Detalhes da tarefa</Title>
                </div>

                <div className="bg-slate-200 p-4 rounded-md">
                    <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
                    <p className="text-slate-">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default TaskPage