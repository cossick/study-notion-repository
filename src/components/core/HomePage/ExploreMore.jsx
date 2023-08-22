import React, { useState } from 'react'
import {HomePageExplore} from "../../../data/homepage-explore"
import HighlightText from './HighlightText';
import CourseCard from './CourseCard';

const tabsName=[
    "Free",
    "New to Coding",
    "Most Popular",
    "Skill Paths",
    "Career Paths"
]
const ExploreMore = () => {
    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);
  
    const setMyCards = (value) => {
      setCurrentTab(value);
      const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result.courses);
        setCurrentCard(result.courses[0].heading);
      
    };
  return (
    <div>
        <div className=' text-4xl font-semibold text-center'>
            Unlock the 
            <HighlightText text={"Power of Code"}/>
        </div>
        <p className=' text-center text-richblack-300 font-semibold mt-3 text-sm '> 
            Learn to build anything you can imagine
            </p>

            <div className=' flex flex-row rounded-full bg-richblack-800 mb-5 border-richblack-100 mt-5 px-1 py-2'>
                {
                    tabsName.map((element,index)=>
                    {
                        return (
                            <div className={`text-[16px] flex flex-row items-center gap-2 bg ${currentTab===element ? " bg-richblack-900 text-richblack-5 font-medium": "text-richblack-200"} rounded-full duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2`} key={index} onClick={()=>setMyCards(element)} >
                                {element}
                            </div>
                        )
                    })
                }
                

            </div>
            <div className=' lg:h-[150px]'>
            </div>
            <div className=' absolute flex flex-row gap-10 justify-between w-fit'>
                {
                    courses.map((element,index)=>{
                        return(
                            <CourseCard key={index}
                            cardData={element}
                            currentCard={currentCard}
                            setCurrentCard={setCurrentCard}
                        />
                    )
                })
            }
            </div>

    </div>
  )
  }

export default ExploreMore