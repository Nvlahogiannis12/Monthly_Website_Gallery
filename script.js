const websiteCards = [
{
Photo:"imgs/Gatsby_Website.png",
Name:"F. Scott Fitzgerald",
About:"The Life and Accomplishments of writer F. Scott Fitzgerald creator of 'The Great Gatsby'.",
Date:"October 2024",
Website:"https://nvlahogiannis12.github.io/Look_Ma_Im_Famous/",
},
{
Photo:"imgs/MadLib_Website.png",
Name:"Mad-Libs",
About:"Create your story by entering in the Nouns, Verbs, & Adjectives of your choosing in this exciting randomly generated story website",
Date:"November 2024",
Website:"https://nvlahogiannis12.github.io/Mad-LIB/",
},
{
Photo:"imgs/Name_Gen_Website.png",
Name:"Name Generator",
About:"Generate your fantasy title to rule with",
Date:"December 2024",
Website:"https://nvlahogiannis12.github.io/Name-Gen-Dec/",
},
{
Photo:"imgs/RPS_Website.png",
Name:"Rock, Paper, Scissors",
About:"Fight your way through games of Rock, Paper, & Scissors. Play the well known Classic or take on other modes",
Date:"January 2025",
Website:"https://nvlahogiannis12.github.io/Rock-Paper-Scissors/",
},
{
Photo:"imgs/Presidential_Website.png",
Name:"President Website",
About:"This Website is a biography of the former President: James Madison",
Date:"February 2025",
Website:"https://nvlahogiannis12.github.io/James-Madison-Feb/",
},
{
Photo:"imgs/SuperHangmanSmash_Website.png",
Name:"Hangman Smash",
About:"Super Smash Bros is the topic of this version of the beloved and classic game Hangman",
Date:"March 2025",
Website:"https://nvlahogiannis12.github.io/Sham-Hang-Mar/",
},
{
Photo:"imgs/Java_Knight_Website.png",
Name:"Java Knight",
About:"In this RPG take on randomly generated enemies in multiple different environments with turn based combat",
Date:"April 2025",
Website:"https://nvlahogiannis12.github.io/JavaKnight/",
},
{
Photo:"imgs/Majora's_Mask_Cards_Website.png",
Name:"Majora's Mask Cards",
About:"Get the know the townsfolk of Termina from the N64 game, The Legend of Zelda: Majora's Mask",
Date:"May 2025",
Website:"https://nvlahogiannis12.github.io/May-Majora-s_Mask/",
},
{
Photo:"imgs/ToyBird_Website.png",
Name:"Toy Bird Co.",
About:"Browse the shop of the handcrafted kid's toy shop",
Date:"June 2025",
Website:"https://nvlahogiannis12.github.io/Toy-Birb-Co/",
},
{
Photo:"imgs/ChopSticks_Website.png",
Name:"Chopsticks",
About:"Play the game chopsticks against a computer",
Date:"July 2025",
Website:"https://nvlahogiannis12.github.io/ChopSticks/",
},
]

//renders cards
    const grid = document.getElementById("rosterGrid");

    const render = (list) => {
      grid.innerHTML = "";

      list.forEach((websiteCards, index) => {
        const col = document.createElement("div");

        col.className = "col-6 col-lg-2";

        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${websiteCards.Photo}" class="card img-top" alt="${websiteCards.Name}}">
                <div class="card-body text-center">
                    <h5 class="card-title mb-1">
                    ${websiteCards.Name}
                    </h5>
                    <div class='badge-pos-${websiteCards.About}'>
                        ${websiteCards.About}
                    </div>
                    <p class="small text-muted mb-0">
                        ${websiteCards.Date}
                    </p>
            <a href="${websiteCards.Website}">
            <button class="btn btn-sm btn-primary show-info-btn" data-player-index="${index}" data-bs-toggle="modal" data-bs-target="#playerModal">
            Visit
          </button>
            </a>

                </div>
            </div>
            `;

        grid.appendChild(col);
      });
    };
    render(websiteCards);