import { PinnedListCardType } from "@/myTypes";
import { list } from "postcss";
import { create } from "zustand";

type selectedTrendType = {
  title: string;
};

export type tweetType = {
  desc: string | null;
  timeStamp: string;
};

export type Store = {
  // FOR MY LOGINS
  isLoggedIn: boolean;
  toggleLogin: () => void;

  // FOR AUTH MODAL
  authModal: boolean;
  toggleModal: () => void;

  // FOR MY HOME FEED "FOR YOU" & "FOLLOWING"
  forYou: boolean;
  toggleForYouON: () => void;
  toggleForYouOFF: () => void;

  // MY ERROR MESSAGE FOR TRENDING CARDS
  selectedTrend: selectedTrendType | null;
  setSelectedTrend: (trend: selectedTrendType | null) => void;

  // FOR SUBSCRIBE BUTTON
  subscribeModal: boolean;
  toggleSubscribeModal: () => void;

  //LATEST USER TWEET
  latestTweet: any | null;
  setLatestTweet: () => void;

  //ALL USER TWEETS
  allTweets: tweetType[];
  setAllTweet: () => void;

  //TAB SELECTIONS
  activeTab: string;
  setActiveTab: () => void;

  profileTab: string;
  setProfileTab: () => void;

  premiumModal: boolean;
  setPremiumModal: () => void;

  subscribed: boolean;
  setSubscribed: () => void;

  list: PinnedListCardType[];
  addToList: (item: PinnedListCardType) => void;

  homeFeedModal: boolean;
  setHomeFeedModal: () => void;
};

const store = (set: any) => ({
  //FOR MY LOGINS
  isLoggedIn: false,

  toggleLogin: () => {
    set((state: any) => ({
      isLoggedIn: !state.isLoggedIn,
      authModal: !state.authModal,
    }));
  },

  //FOR AUTH MODAL
  authModal: false,

  toggleModal: () => {
    set((state: any) => ({
      authModal: !state.authModal,
    }));
  },

  //FOR MY HOME FEED "FOR YOU" & "FOLLOWING"
  forYou: true,
  toggleForYouON: () =>
    set((state: any) => ({ forYou: true, selectedTrend: null })),
  toggleForYouOFF: () =>
    set((state: any) => ({ forYou: false, selectedTrend: null })),

  //MY ERROR MESSAGE FOR TRENDING CARDS
  selectedTrend: null as selectedTrendType | null,
  setSelectedTrend: (trend: any) => set({ selectedTrend: trend }),

  //FOR SUBSCRIBE BUTTON
  subscribeModal: false,
  toggleSubscribeModal: () => {
    set((state: any) => ({
      subscribeModal: !state.subscribeModal,
    }));
  },

  //CAPTURE LATEST USER TWEET
  latestTweet: { desc: "", timeStamp: null },
  setLatestTweet: (tweet: any) => set({ latestTweet: tweet }),

  //STORE ALL TWEETS
  allTweets: [],
  setAllTweets: (tweet: any) => {
    set((state: any) => [...state.allTweets, tweet]);
  },

  //ADD TO ALL TWEETS
  addLatestTweetToAllTweets: () =>
    set((state: Store) => {
      const updateAllTweets = [...state.allTweets];
      if (state.latestTweet) {
        updateAllTweets.unshift(state.latestTweet);
      }
      return { allTweets: updateAllTweets };
    }),

  //ACTIVE TAB
  activeTab: "Home",
  setActiveTab: (tab: string) => set({ activeTab: tab }),

  profileTab: "Tweets",
  setProfileTab: (activeTab: string) => set({ profileTab: activeTab }),

  // PREMIUM BUTTON
  premiumModal: false,
  setPremiumModal: () => {
    set((state: any) => ({
      premiumModal: !state.premiumModal,
    }));
  },

  homeFeedModal: false,
  setHomeFeedModal: () => {
    set((state: any) => ({
      homeFeedModal: !state.homeFeedModal,
    }));
  },

  subscribed: false,
  setSubscribed: () => {
    set((state: any) => ({
      subscribed: true,
    }));
  },

  //LIST TAB FUNCTIONALITIES
  list: [],
  addToList: (item: PinnedListCardType) => {
    set((state: Store) => ({
      list: [...state.list, item],
    }));
  },
});

export const useStore = create(store);
