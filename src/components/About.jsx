import React, {useEffect} from 'react'

function About() {
    useEffect(() => {
        console.log('About component mounted');
        // Add any additional debugging or logic here
      }, []);
    
  return (
    <div>
        <h1> This is the About Page</h1>
    </div>
  )
}

export default About