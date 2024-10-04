import { useEffect, useState } from 'react'

function App() {
  const [blogs, setBlogs] = useState([]); // State to store blogs

  useEffect(() => {
    // Fetch blogs from the API
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://backend:8080/api/blogs/'); // Make the API request
        const data = await response.json(); // Parse the response JSON
        setBlogs(data); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs(); // Call the function to fetch blogs
  }, []);

  return (
    <div className="App">
      <h1>Blog Titles</h1>
      <ul>
        {/* Map through the blogs and display each title */}
        {blogs.map((blog, index) => (
          <li key={index}>{blog.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
