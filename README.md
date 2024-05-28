Hi there, fellow dev!

!(https://github.com/aLearningLad/twitterverse/blob/master/twitter2.png)


This was a hobby project. I tried to mimic Twitter's UI and basic functionality such as tweeting, viewing community tweets, news sections, applying for premium membership; and storing, altering and using state across different components to manipulate the UI. 

It is a bare-bones build. No APIs nor external data are used, and it is without Auth nor backend. All media are held within the assets folder: everything is self-contained within this repo.

To my fellow leaners and tinkerers, although such a project should (ideally) be nowhere to be found on your portfolio (EVERYBODY and their mother builds clones for their portfolio! You need to innovate far beyond clones to impress potential employers), it is a good learning project. In my case, as I hope it will be for everyone else, it was really a great way to learn how to fiddle with code to get it looking and working somewhat like the real thing. 

I encourage anybody keen to do so, to clone this repo and go through the code, get the gist of the main functionality such as using Zustand and calling for state snippets from various components, conditional rendering and using various CSS and sizing methods. 

I had a lot of fun building this little project. I hope you, reader, do too as you try it out.



## Time to tinker -> Getting Started

Running the app is straightforward. Depending on your machine, either run: 

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## About the stack -> Next.js
This app is written in Typescript. I used TailwindCSS for styling, and used downloaded images and videos for the media feeds.
I also used the React Icons library, and utilized my trusty lightweight friend Zustand for global state management.
No data is fetched externally: all 'Tweets' are entirely from my imagination.

