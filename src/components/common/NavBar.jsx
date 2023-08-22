import React, { useState } from 'react'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { Link, matchPath } from 'react-router-dom'
import {NavbarLinks} from "../../data/navbar-links"
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart} from "react-icons/ai"
import Button from '../core/HomePage/Button'
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { useEffect } from 'react'
import { apiConnector } from '../../services/apiconnector'
import { categories } from '../../services/apis'
import {FiArrowDown} from "react-icons/fi"




const subLinks=[
    {
        title:"python",
        link:"/catalog/python"
    },
    {
        title:"Web Development",
        link:"/catalog/web-development"
    }
]
const Navbar = () => {
    const {token}=useSelector((state)=>state.auth)
    const {user}=useSelector((state)=>state.profile)
    const {totalItems}=useSelector((state)=>state.cart)
    const location=useLocation();
    const matchRoute=(route)=>{
        return matchPath({path:route},location.pathname);
    }  
//     const {subLinks,setSubLinks}=useState([])
//   useEffect(()=>{
//    const fetchData= async()=>{
//         try{
//             const result =await apiConnector("GET",categories.CATEGORIES_API);
//             console.log("Printing Sublinks result ",result);
//             setSubLinks(result.data.data)

//         }
//         catch(error){
//             console.log("Could not load the category loest")
//         }
//     }
//   },[])
    
  return (
    <div className=' flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
        <div className=' flex w-11/12 justify-between  max-w-maxContent items-center'>
            <Link to="/">
                <img src={logo} width={160} height={120}/>
            </Link>

        {/* NAv linkws */}

        <nav>
            <ul className=' flex gap-x-6 text-richblack-25'> 
            {
                NavbarLinks.map((link,index)=>(
                    <li key={index}>
                        {
                            link.title==="Catalog"?
                            (<div className=' flex flex-row items-center gap-1 group relative'>
                                <p>
                                {link.title}
                                </p>  
                                
                                    <FiArrowDown/>
                                    <div className=' invisible absolute left-[50%] top-[50%] flex flex-col rounded-md bg-richblack-5 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px]'>
                                    </div>

                                    {
                                        subLinks.length? (
                                            {
                                               subLinks.map((value,index)=>{
                                                <Link to=>
                                                </Link>
                                               })
                                                )
                                                 
                                                )
                                            }
                                        ):(<div></div>)
                                    }
                                
                               
                            </div>):(
                                <Link to
                                ={link?.path}>
                                    <p className={`${matchRoute(link?.path)? "text-yellow-25": "text-richblack-25"}`}>
                                        {link.title}
                                    </p>
                                </Link>
                            )
                        }
                    </li>
                ))
            }
            </ul>
        </nav>
         {/* Login/signup/dashboaard */}
         <div className=' flex gap-x-5 items-center'>
            {
                user && user?.accountType !=="Instructor" && (
                    <Link to="/dashboard/cart" className=' relative'>
                        <AiOutlineShoppingCart/>
                        {
                            totalItems>0 &&(
                                <span>
                                    {totalItems}
                                </span>
                            )
                        }
                    </Link>
                )
            }

            {
                token===null && (
                    <Link to="/login">
                    <button className=' border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                        Log in
                    </button>
                    </Link>
                )
            }
                {
                token===null && (
                    <Link to="/signup">
                   <button className=' border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                        Sign Up
                    </button>
                    </Link>
                )
            }
            {
                token!=null && 
                <ProfileDropDown/>

            }
            

         </div>
        </div>

     </div>
  )
}

export default Navbar