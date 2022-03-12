import React from 'react'
import { Link } from 'react-router-dom'
import WorkLogo from '../assets/icons/work.svg'
import HealthLogo from '../assets/icons/health.svg'
import SchoolLogo from '../assets/icons/school.svg'
import RelationshipLogo from '../assets/icons/relationship.svg'
import SidebarImg from '../assets/images/sidebarImg.png'

export default function Sidebar() {
    return (
        <div className="w-72 h-full shadow-md bg-[#F6F6F6] px-1 absolute">
            <ul className="relative p-4">
                <li className="relative">
                    <div className="bg-white border-2 border-primary text-secondary uppercase text-2xl grid place-items-center rounded-lg py-1">Categories</div>
                    <div className="grid grid-cols-2 gap-2 py-2 px-1">
                        <Link to="/work"><div className="border-2 border-primary h-28 w-28 cursor-pointer grid place-items-center">
                            <img src={WorkLogo} alt="" />
                            Work
                        </div></Link>
                        <Link to="/school"><div className="border-2 border-primary h-28 w-28 cursor-pointer grid place-items-center">
                            <img src={SchoolLogo} alt="" />
                            School
                        </div></Link>
                        <Link to="/relationship"><div className="border-2 border-primary h-28 w-28 cursor-pointer grid place-items-center">
                            <img src={RelationshipLogo} alt="" />
                            Relationship
                        </div></Link>
                        <Link to="/health"><div className="border-2 border-primary h-28 w-28 cursor-pointer grid place-items-center">
                            <img src={HealthLogo} alt="" />
                            Health
                        </div></Link>
                    </div>
                </li>
                <li className="relative">
                    <div className="bg-white border-2 border-primary text-secondary uppercase text-2xl grid place-items-center rounded-lg py-1">Resources</div>
                    <div className='py-2'>
                        <img src={SidebarImg} alt="" />
                        <h1 className='pt-2 text-lg font-semibold'>Works gotten you worked up?</h1>
                        <p className='text-sm'>Find out how we deal with the daily stresses of our life</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
