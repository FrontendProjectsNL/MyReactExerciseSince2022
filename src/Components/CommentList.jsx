// import React from 'react';
// import jsonData from '../../public/data.json';

// const CommentList = () => {
//   const renderComments = () => {
//     const comments = [];

//     // Iterate through users
//     jsonData.users.forEach((user) => {
//       // Iterate through posts
//       user.posts.forEach((post) => {
//         // Iterate through comments
//         post.comments.forEach((comment) => {
//           comments.push(
//             <tr key={comment.commentId}>
//               <td>{comment.commentId}</td>
//               <td>{comment.text}</td>
//             </tr>
//           );
//         });
//       });
//     });

//     return comments;
//   };

//   return (
//     <div>
//       <h2>Comment List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Comment ID</th>
//             <th>Comment Text</th>
//           </tr>
//         </thead>
//         <tbody>{renderComments()}</tbody>
//       </table>
//     </div>
//   );
// };

// export default CommentList;

import jsonFile from '../../public/data.json'

const CommentList = () => {

  const renderComment = ()=> {
    const comments = [];
    jsonFile.users.map(user => {
      user.posts.map(post => {
        post.comments.map(comment => {
          comments.push(
            <tr>
          <td>{comment.commentId}</td>
          <td>{comment.text}</td>
        </tr>
          )
        })
      })
    })
    return comments;
  }
  return (
    <>
    <table>
      <thead>
        <th>ID</th>
        <th>Comment</th>
      </thead>
      <tbody>
        {renderComment()}
      </tbody>
      <tfoot>© Copyright</tfoot>
    </table>

    </>
  )
}

export default CommentList
