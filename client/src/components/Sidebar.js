import React from "react"
import { Link } from "react-router-dom"
import WorkLogo from "../assets/icons/work.svg"
import HealthLogo from "../assets/icons/health.svg"
import SchoolLogo from "../assets/icons/school.svg"
import RelationshipLogo from "../assets/icons/relationship.svg"
import SidebarImg from "../assets/images/sidebarImg.png"
import workImg from "../assets/images/work-side.png"

export default function Sidebar({
  // default values for sidebar
  sideImg = workImg,
  sideTitle = "Works gotten you worked up?",
  sideText = "Find out how we deal with the daily stresses of our life",
  sideLink = "/something",
  currentTab = null,
}) {
  return (
    <div
      className={`w-72 h-full shadow-md bg-["F6F6F6"]
      } px-1 absolute`}
    >
      {" "}
      <ul className='relative p-4'>
        <li className='relative'>
          <div className='grid py-1 text-2xl uppercase bg-white border-2 rounded-lg border-primary text-secondary place-items-center'>
            Categories
          </div>
          <div className='grid grid-cols-2 gap-2 px-1 py-2'>
            <Link to='/work'>
              <div
                className={`border-2 border-primary bg-${
                  currentTab === "Work" ? "secondary" : ["F6F6F6"]
                } h-28 w-28 cursor-pointer grid place-items-center`}
              >
                <img src={WorkLogo} alt='' />
                Work
              </div>
            </Link>
            <Link to='/school'>
              <div
                className={`border-2 border-primary bg-${
                  currentTab === "School" ? "secondary" : ["F6F6F6"]
                } h-28 w-28 cursor-pointer grid place-items-center`}
              >
                <img src={SchoolLogo} alt='' />
                School
              </div>
            </Link>
            <Link to='/relationship'>
              <div
                className={`border-2 border-primary bg-${
                  currentTab === "Relationship" ? "secondary" : ["F6F6F6"]
                } h-28 w-28 cursor-pointer grid place-items-center`}
              >
                <img src={RelationshipLogo} alt='' />
                Relationship
              </div>
            </Link>
            <Link to='/health'>
              <div
                className={`border-2 border-primary bg-${
                  currentTab === "Health" ? "secondary" : ["F6F6F6"]
                } h-28 w-28 cursor-pointer grid place-items-center`}
              >
                <img src={HealthLogo} alt='' />
                Health
              </div>
            </Link>
          </div>
        </li>
        <li className='relative'>
          <div className='pt-5'>
            <div className='grid py-1 text-2xl uppercase bg-white border-2 rounded-lg border-primary text-secondary place-items-center'>
              Resources
            </div>
            <div className='py-2'>
              <img src={sideImg} alt='' />
              <a href={sideLink}>
                <h1 className='pt-2 text-lg font-semibold'>{sideTitle}</h1>
                <p className='text-sm'>{sideText}</p>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
