import { CgProfile } from "react-icons/cg";
import COMMENTS, { SingleComment } from "../utils/comments";

const Comment = ({ comment }: { comment: SingleComment }) => {
  return (
    <div className="flex p-2 gap-2">
      <CgProfile size={24} />
      <h1>{comment.title}</h1>
    </div>
  );
};

const CommentsList = ({ comments }: { comments: SingleComment[] }) => {
  return (
    <div>
      {comments.map((comment: SingleComment) => {
        return (
          <div>
            <Comment comment={comment} />
            <div className="border-l-2 ml-4">
              <CommentsList comments={comment.replies || []} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
const CommentsContainer = () => {
  return (
    <div className="border-2 w-full">
      <CommentsList comments={COMMENTS} />
    </div>
  );
};

export default CommentsContainer;
