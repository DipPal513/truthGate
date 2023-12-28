"use client";
import React, { useReducer, useState } from "react";
import { BiLike, BiDislike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { MdOutlineModeComment } from "react-icons/md";
interface Comment {
  id: number;
  text: string;
}

function reducer(state:any, action:any) {
  switch (action.type) {
    case "LIKE":
      return {
        ...state,
        isLiked: !state.isLiked,
        isDisLiked: false,
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
      };
      case 'ADD_COMMENT':
        const newComment: Comment = {
          id: Date.now(), // Unique ID for the comment
          text: action.payload, // Text of the comment
        };
        return {
          ...state,
          comments: [newComment, ...state.comments], // Adding the new comment at the beginning of the list
        };
  
    case "DISLIKE":
      return {
        ...state,
        isDisLiked: !state.isDisLiked,
        isLiked: false,
        dislikeCount: state.isDisLiked
          ? state.dislikeCount - 1
          : state.dislikeCount + 1,
      };
    case "COMMENT":
      return {
        ...state,
        isCommented: !state.isCommented,
        commentCount: state.isCommented
          ? state.commentCount - 1
          : state.commentCount + 1,
      };
    default:
      return state;
  }
}

const Post = () => {
  const initialState = {
    isLiked: false,
    isDisLiked: false,
    isCommented: false,
    likeCount: 0,
    dislikeCount: 0,
    commentCount: 0,
    isCommentBoxOpen: false,
    comments: [] as Comment[],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [newCommentText, setNewCommentText] = useState('');
  const handleCommentAdd = () => {
    dispatch({ type: 'ADD_COMMENT', payload: newCommentText });
    setNewCommentText(''); // Clear the comment input after adding
    dispatch({ type: 'COMMENT' }); // Close the comment box after adding
  };

  return (
    <div className="single post border p-3 mt-3">
      <div>
        <div className="header_post flex items-center gap-x-2">
          <div className="profile w-5 h-5 bg-red-500 rounded-xl"></div>
          <h3 className="name text-sm font-bold">Mahmuda Munni</h3>
        </div>
        <div className="details_post mt-4 ms-2">
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            impedit veritatis in mollitia incidunt at repellendus nulla
            dignissimos. Sunt voluptatum explicabo aspernatur unde similique
            autem maiores, tempore mollitia ea impedit?
          </p>
        </div>
        <hr className="mt-3" />
        <div className="bottom_actions mt-4 flex items-center justify-evenly text-xl">
          <span>{state.likeCount}</span>
          <button onClick={() => dispatch({ type: "LIKE" })}>
            {state.isLiked ? <BiSolidLike className="fill-[var(--secondary-color)]"/> : <BiLike />}
          </button>
          <span>{state.dislikeCount}</span>
          <button onClick={() => dispatch({ type: "DISLIKE" })}>
            {state.isDisLiked ? <BiSolidDislike   className="fill-[var(--secondary-color)]"/> : <BiDislike />}
          </button>
          <span>{state.commentCount}</span>
          <button onClick={() => dispatch({ type: "COMMENT" })}>
            <MdOutlineModeComment />
          </button>
        </div>
        {state.isCommentBoxOpen && (
        <div className="commentBox">
          <textarea
            className="comment bg-transparent border w-full text-white"
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
          />
          <button
            className="border px-3 py-2 hover:bg-[var(--secondary-color) duration-300"
            onClick={handleCommentAdd}
          >
            Comment
          </button>
        </div>
      )}
      <div className="existingComments">
        {state.comments.map((comment:any) => (
          <div key={comment.id}>{comment.text}</div>
        ))}

      </div>
    </div>
    </div>
  );
};

export default Post;
