// import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { useQuery } from '@tanstack/react-query';
import { getProjectList } from '../../../services/projectManagementAPI';
import { ProjectItem } from './ProjectItem';
import { Link } from 'react-router-dom';
export default function MyProjectForm() {

    const { data: projectList, isFetching } = useQuery({
        queryKey: ['project'],
        queryFn: () => getProjectList()
    })



    if (isFetching) return <div>Loading project list...</div>;

    return (
        <section className=" min-h-50 flex flex-col ">
            <div className='w-full flex justify-between mb-10'>
                <h2 className="text-[30px] font-[600] mb-5">My project</h2>

                <Link to={'/admin/project/post'} type='button' className="h-10 flex justify-center items-center cursor-pointer border-1 border-[#343C6A]cursor-pointer bg-white text-black px-3 rounded-[5px] text-[20px]" >Add project</Link>
            </div>

            <ul className='flex flex-col gap-5 w-full'>
                {projectList.length == 0 && <h3>You haven't post any project...</h3>}
                {projectList.map((item) => <ProjectItem key={item.id} project={item}></ProjectItem>)}
            </ul>
        </section >
    )
}