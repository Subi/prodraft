<p align="center">
    <img src="https://i.gyazo.com/31740cf869f6263c4b91fb662e8ee966.png" alt="ProDraft"  width="250" />
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
     [ ] Redis 🟥
     [x] Firebase 🔥 
     [ ] Mongodb  🟩 

- [x] Setup Database to store rooms created and verify they exist

- [x] Setup Socket io server and accept clients to connect

- [ ] Look into generating specific data before component / page loads (nextjs features)

- [ ] Create unique socket rooms based on generated roomId

- [ ] Only load page if a draft exist to the corresponding roomId (prevent people from brute forcing lobbies through url)

- [ ] Build out draft user interface