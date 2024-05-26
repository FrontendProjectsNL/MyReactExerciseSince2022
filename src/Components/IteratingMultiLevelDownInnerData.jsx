// import React, {useEffect, useState} from 'react'

// const IteratingMultiLevelDownInnerData = () => {
//   const [comments, setComments] = useState(null);

//   useEffect(()=> {
//     async function fetchComments() {
//       const response = await fetch('/data.json');
//       if(!response.ok) throw new Error("Couldn't fetch data");
//       const data = await response.json();
//       const comments = data.users.posts.map(post => {
//         post.comments.map(comment => comment.text)
//       })
//       console.log(comments)
//     }
//     fetchComments();

//   }, [])

//   return (
//     <div>IteratingMultiLevelDownInnerData</div>
//   )
// }

// export default IteratingMultiLevelDownInnerData

import React, { useEffect, useState } from 'react'

const IteratingMultiLevelDownInnerData = () => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data.json');
      if (!response.ok) throw new Error("Couldn't fetch data!");
      const data = await response.json();
  
      const postsUsingMap = data.users.map(user => user.posts);
      const postsUsingFlatMap = data.users.flatMap(user => user.posts);
  
      console.log('Posts using Map:', postsUsingMap);
      console.log('Posts using FlatMap:', postsUsingFlatMap);
    }
    fetchData();
  }, []);
  
  
  
  
  

  const renderComments = () => {
    // console.log(comments)
  }
  return (
    <div>IteratingMultiLevelDownInnerData </div>
  )
}

export default IteratingMultiLevelDownInnerData
