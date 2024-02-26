 import Comment from "./comp/comment"


import prisma from "./libs/prisma"

const Home = async () => {

	const kata = await prisma.komentar.findMany()
	
	
  return (
   <>
   <div className="w-full md:w-[500px] border mx-auto">
	
	<Comment/>
	
			<div className="mt-10">
			
			{
				kata.map(txt => {
						return(
							<div key={txt.id} className="border mt-2">
								
								<p className="font-italic">{txt.comment}</p>
							</div>
						)
				})
				
			}
			
			</div>
   
	
   </div>
   </>
  );
}

export default Home