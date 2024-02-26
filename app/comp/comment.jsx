"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"



const Comment =  () => {
	
	
	const [ comment , setComment ] = useState("")
	const [ isCreated, setIsCreated ] = useState(false)
	
	const router = useRouter() 
	
	const handleInput = (event) => {
		setComment(event.target.value);
		
	}
	
	const handlePosting = async (event) => {
		event.preventDefault()
	
		
		const data = { comment }
		  
		const response = await fetch("/config/comment" , {
			method: "POST",
			body: JSON.stringify(data)
			
		})
		const komentar = await response.json()
		
		
		if(komentar) {
			router.refresh()
		}
		
		

		
		}
	
	
	return (
		<>
		<div className="relative">
		
		
			
				<textarea placeholder="Your message..." value={comment} type="text" onChange={handleInput} className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100  text-neutral-900" name="entry" />
				
				<button onClick={handlePosting} className="mt-3 flex items-center justify-center  font-medium h-8 bg-neutral-200 text-neutral-900  rounded w-16 focus:ring-blue-500 focus:border-blue-500" type="submit">Sign</button>
		</div>
		
		
			
		</>
	)

}

export default Comment