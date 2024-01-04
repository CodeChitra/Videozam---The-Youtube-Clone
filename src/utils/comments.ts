export type SingleComment = {
  title: string;
  author: string;
  replies?: SingleComment[];
};

const COMMENTS: SingleComment[] = [
  {
    title: "Really amazing video. Learned a lot from it 1",
    author: "Akash Deep",
    replies: [
      {
        title: "Maza hi aa gya bilkul dekh kr.",
        author: "Lallu",
        replies: [
          {
            title: "Really amazing video. Learned a lot from it",
            author: "Akash Deep",
            replies: [
              {
                title: "Maza hi aa gya bilkul dekh kr.",
                author: "Lallu",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Really amazing video. Learned a lot from it 2",
    author: "Anushika Gupta",
    replies: [
      {
        title: "Maza hi aa gya bilkul dekh kr.",
        author: "Lallu",
        replies: [
          {
            title: "Really amazing video. Learned a lot from it",
            author: "Akash Deep",
            replies: [
              {
                title: "Maza hi aa gya bilkul dekh kr.",
                author: "Lallu",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Really amazing video. Learned a lot from it 3",
    author: "Raj Srivastava",
    replies: [
      {
        title: "Maza hi aa gya bilkul dekh kr.",
        author: "Lallu",
        replies: [
          {
            title: "Really amazing video. Learned a lot from it",
            author: "Akash Deep",
            replies: [
              {
                title: "Maza hi aa gya bilkul dekh kr.",
                author: "Lallu",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default COMMENTS;
