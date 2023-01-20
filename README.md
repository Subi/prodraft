<p align="center">
    <img src="https://i.gyazo.com/45f1dc176186364c6b7fa047d67fb1e4.jpg" alt="ProDraft"  width="500" />
  </a>
</p>

<p align="center"><b>League of Legends Pro Draft Tool 🔨</b></p>

<br/>


## Inspiration

This project was inspired by the existing draft tool [Draftlol](https://draftlol.dawe.gg) and coupled with the fact that I need to improve on my react skills and what better way then to build out my own tool. I believe I can put together something with a better UI and fix some minior issues the current drafting tool has and add some additonal features. If I can accomplish that task maybe i'll expand into other ideas 🤷‍♀️. 



## To-do List

- [x] Create input to accept team names and create draft.

- [x] Generate draft links after a new draft is created.

- [x] Determine how game state will be created/stored
     - Redis 🟥
     - Firebase 🔥  ✔
     - Mongodb  🟩 

- [x] Setup Database to store rooms created and verify they exist

- [x] Setup Socket io server and accept clients to connect

- [x] Look into generating specific data before component / page loads (nextjs features)

- [x] Create unique socket rooms based on generated roomId

- [x] Only load page if a draft exist to the corresponding roomId (prevent people from brute forcing lobbies through url)

- [ ] Build out draft user interface

- [x] Build out placeholder for each champions on each side

- [x] Build out placeholder for champion bans 

- [x] Generate champion select and display that data

- [x] Build out ready button 

- [ ] Play around with a few design ideas

- [ ] Begin game logic 
