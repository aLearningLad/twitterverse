export type TrendingCardType = {
  title: string;
  category: string;
  where: string;
  posts: number;
};

export type exploreTabInfoType = {
  title: string;
  category: string;
  where: string;
  posts: number;
};

export type trendingTweetCard = {
  userImg: string;
  username: string;
  userHandle: string;
  timestamp: number;
  tweetImg?: string;
  commentCount: number;
  retweetCount: number;
  likeCount: number;
  impressionsCount: number;
  verified: boolean;
  tweetMessage?: string;
  videoLink?: string;
};

export type trendingTweetCardType = {
  userImg: string;
  username: string;
  userHandle: string;
  timestamp: number;
  tweetImg?: string;
  commentCount: number;
  retweetCount: number;
  likeCount: number;
  impressionsCount: number;
  verified: boolean;
  tweetMessage?: string;
  videoLink?: string;
};

export type PinnedListCardType = {
  title: string;
  desc: string;
  followerCount: number;
  img: string;
};

export type Imobiletrendimage = {
  eventid: number;
  img: string;
  category: string;
  eventdate: string;
  eventname: string;
};

export type Isingletweet = {
  userImg: string;
  username: string;
  userHandle: string;
  timestamp: number | string;
  tweetImg?: string;
  commentCount: number;
  retweetCount: number;
  likeCount: number;
  impressionsCount: number;
  verified: boolean;
  tweetMessage?: string;
  videoLink?: string;
  desc?: any;
};

export type Ialltweets = {
  tweet: Isingletweet;
  desc?: string;
};
