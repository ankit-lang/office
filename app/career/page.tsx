import { NavbarDemo } from '@/components/Navbar'
import SplitText from '@/components/Staggertext'
import React from 'react'

const page = () => {
  return (
    <div>
      <NavbarDemo />
       <div className="flex items-center pt-20 mb-10 relative z-[100] justify-center">
                        <SplitText
                    text="Career And Courses"
                    className="text-5xl font-semibold text-center"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    
                  />
                        </div>
    </div>
  )
}

export default page