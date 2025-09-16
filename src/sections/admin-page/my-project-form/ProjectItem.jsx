import { deleteProject } from "../../../services/projectManagementAPI";
import { Link } from "react-router-dom";

export function ProjectItem({ project }) {
    const onDelete = () => {
        async function handleDelete() {
            const isDelete = window.confirm('Are you sure you want to delete that project?');
            if (isDelete) {
                await deleteProject(project.id);
                console.log('project deleted');
                location.reload();
            };
        }
        handleDelete();
    };

    return (
        <div className="flex items-center justify-between border-b-1 pb-5 w-full h-20 px-1 gap-5">
            <figure className="bg-black h-18 w-25 rounded-[5px] shrink-0">
                {/* <img src="#" alt="project thumbnail" className="object-fill h-full" /> */}
            </figure>

            <article className="h-full w-full text-">
                <h3>{project.title}</h3>

                <p>{project.description}</p>
            </article>

            <nav className="w-10 h-full flex flex-col justify-between items-center">
                <Link to={`/admin/project/edit/${project.id}`} className="fa-solid fa-pen cursor-pointer hover:scale-120 duration-100"></Link>
                <i className="fa-solid fa-trash text-red-500 cursor-pointer hover:scale-120 duration-100" onClick={() => onDelete()}></i>
            </nav>
        </div >
    )
}