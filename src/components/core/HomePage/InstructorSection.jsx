import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import HighlightText from './HighlightText'
import CTAButton from "../HomePage/Button"
import Instructor from "../../../assets/Images/Instructor.png"

const InstructorSection = () => {
  return (
    <div className=' flex flex-row w-[11/12] max-w-maxContent gap-20 items-center'>
        <div className=' w-[45%]'>
            <img src={Instructor}/>

        </div>
        <div className=' w-[50%] flex flex-col gap-10'>
            <div className=' font-semibold text-4xl w-[50%] '>
                Become an 
                <HighlightText text={"Instructor"}/>
            </div>
            <div className=' font-medium text-[16px] w-[80%] text-richblack-300'>
            Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
            </div>

            <div className=' w-fit'>
                <CTAButton active={true}
                linkto={"/signup"}>
                    <div className=' flex flex-row gap-2 items-center '>
                        Start Teaching Today
                        <FaArrowRight/>
                    </div>
                    
                </CTAButton>
            </div>

        </div>

    </div>
  )
}

export default InstructorSection