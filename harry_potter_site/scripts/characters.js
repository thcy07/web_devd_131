// profile_loader.js
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const characterName = urlParams.get("name");

    const characters = {
        Hermione_Granger: {
            name: "Hermione Granger",
            image: "images/Hermione_Granger_1.jpg",
            description: `
                <dl>
                    <dt><strong>Appearances:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone</dd>
                    <dd>Harry Potter and the Chamber of Secrets</dd>
                    <dd>Harry Potter and the Prisoner of Azkaban</dd>
                    <dd>Harry Potter and the Goblet of Fire</dd>
                    <dd>Harry Potter and the Order of the Phoenix</dd>
                    <dd>Harry Potter and the Half-Blood Prince</dd>
                    <dd>Harry Potter and the Deathly Hallows</dd>
                    <dd>Harry Potter and the Cursed Child</dd>
                    <br>
                    <dt><strong>Full name:</strong></dt>
                    <dd>Hermione Jean Granger</dd>
                    <br>
                    <dt><strong>House:</strong></dt>
                    <dd>Gryffindor</dd>
                    <br>
                    <dt><strong>Wand:</strong></dt>
                    <dd>Dragon heartstring</dd>
                    <dd>Vine</dd>
                    <br>
                    <dt><strong>Family connections/Affiliation:</strong></dt>
                    <dd>Dumbledore's Army</dd>
                    <dd>Muggle-borns</dd>
                    <dd>The Weasleys</dd>
                    <dd>Hogwarts student</dd>
                    <br>
                    <dt><strong>Skills:</strong></dt>
                    <dd>Bluebell flames</dd>
                    <dd>Undetectable Extension Charms</dd>
                    <dd>Using a Time-Turner</dd>
                    <dd>Pretty much all areas of magic...</dd>
                    <br>
                    <dt><strong>Hobbies:</strong></dt>
                    <dd>Reading everything in the Hogwarts library</dd>
                    <dd>Caring for Crookshanks</dd>
                    <dd>Campaigning for house-elf rights</dd>
                    <dd>Packing her beaded bag</dd>
                    <br>
                    <dt><strong>Portrayed by:</strong></dt>
                    <dd>Emma Watson</dd>
                    <br>
                    <dt><strong>First appearance:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone (1997)</dd>
                    <br>
                    <dt><strong>Last appearance:</strong></dt>
                    <dd>Harry Potter and the Cursed Child (2016)</dd>
                    <br>
                    <dt><strong>Born:</strong></dt>
                    <dd>19 September 1979</dd>
                    <br>
                    <dt><strong>Family:</strong></dt>
                    <dd>Spouse: Ron Weasley</dd>
                    <dd>Children: Rose Granger-Weasley</dd>
                    <dd>Children: Hugo Granger-Weasley</dd>
                    <br>
                    <dt><strong>Nationality:</strong></dt>
                    <dd>British</dd>
                </dl>`,
            intro: `
                Hermione Granger is one of the most intelligent and determined characters in J.K. Rowling's Harry Potter series. A Gryffindor student at Hogwarts School of Witchcraft and Wizardry, Hermione is known for her exceptional academic abilities and dedication to her studies. Often considered a "bookworm," she is an expert in various magical subjects, including charms, potions, and spellcasting. Despite her intellectual prowess, Hermione is also fiercely loyal and courageous, always standing by her friends Harry Potter and Ron Weasley through numerous challenges. Her quick thinking and resourcefulness often save the day, making her an indispensable member of their trio. Hermione's strong sense of justice and her commitment to equality, such as her work for the rights of house-elves, further highlight her character's depth. She demonstrates that being smart and brave are not mutually exclusive traits, making her a beloved and empowering figure for many readers.
            `,
        },
        Harry_Potter: {
            name: "Harry Potter",
            image: "images/Harry_Potter_1.png",
            description: `
                <dl>
                    <dt><strong>Appearances:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone</dd>
                    <dd>Harry Potter and the Chamber of Secrets</dd>
                    <dd>Harry Potter and the Prisoner of Azkaban</dd>
                    <dd>Harry Potter and the Goblet of Fire</dd>
                    <dd>Harry Potter and the Order of the Phoenix</dd>
                    <dd>Harry Potter and the Half-Blood Prince</dd>
                    <dd>Harry Potter and the Deathly Hallows</dd>
                    <dd>Harry Potter and the Cursed Child</dd>
                    <br>
                    <dt><strong>Full name:</strong></dt>
                    <dd>Harry James Potter</dd>
                    <br>
                    <dt><strong>House:</strong></dt>
                    <dd>Gryffindor</dd>
                    <br>
                    <dt><strong>Wand:</strong></dt>
                    <dd>Phoenix feather</dd>
                    <dd>Holly wood</dd>
                    <br>
                    <dt><strong>Family connections/Affiliation:</strong></dt>
                    <dd>Dumbledore's Army</dd>
                    <dd>The Potters</dd>
                    <dd>Hogwarts student</dd>
                    <dd>The Weasleys</dd>
                    <br>
                    <dt><strong>Skills:</strong></dt>
                    <dd>Casting a Patronus (Stag)</dd>
                    <dd>Casting Expelliarmus</dd>
                    <dd>Defence Against the Dark Arts</dd>
                    <dd>Quidditch Seeker</dd>
                    <dd>Parseltongue</dd>
                    <br>
                    <dt><strong>Hobbies:</strong></dt>
                    <dd>Using his Invisibility Cloak</dd>
                    <dd>Flying</dd>
                    <dd>Saving the wizarding world</dd>
                    <br>
                    <dt><strong>Portrayed by:</strong></dt>
                    <dd>Daniel Radcliffe</dd>
                    <br>
                    <dt><strong>First appearance:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone (1997)</dd>
                    <br>
                    <dt><strong>Last appearance:</strong></dt>
                    <dd>Harry Potter and the Cursed Child (2016)</dd>
                    <br>
                    <dt><strong>Born:</strong></dt>
                    <dd>31 July 1980</dd>
                    <br>
                    <dt><strong>Family:</strong></dt>
                    <dd>Spouse: Ginny Weasley</dd>
                    <dd>Children: James Sirius Potter</dd>
                    <dd>Children: Albus Severus Potter</dd>
                    <dd>Children: Lily Luna Potter</dd>
                    <dd>Relatives: Petunia Dursley (aunt), Vernon Dursley (uncle), Dudley Dursley (cousin)</dd>
                    <br>
                    <dt><strong>Nationality:</strong></dt>
                    <dd>British</dd>
                </dl>`,
            intro: `
                Harry Potter was prophesied to be the downfall of Lord Voldemort and therefore singled out at birth as the Dark Lord's rival. 
                Known in the wizarding world as 'The Boy Who Lived,' he became the only known survivor of the Killing Curse after Voldemort 
                attempted to kill him as a baby, resulting in the death of both his parents. Harry was unaware of his magical heritage until his 
                eleventh birthday, as his Muggle relatives neglected to tell him. After joining Hogwarts School of Witchcraft and Wizardry, 
                he discovered his magical potential and embarked upon incredible adventures with his best friends, Ron and Hermione. 
                Throughout his journey, Harry faced many challenges, ultimately defeating Voldemort and fulfilling his destiny as the chosen one.
            `,
        },
        Severus_Snape: {
            name: "Severus Snape",
            image: "images/snape-protects-the-trio-1.jpg",
            description: `
                <dl>
                    <dt><strong>Appearances:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone</dd>
                    <dd>Harry Potter and the Chamber of Secrets</dd>
                    <dd>Harry Potter and the Prisoner of Azkaban</dd>
                    <dd>Harry Potter and the Goblet of Fire</dd>
                    <dd>Harry Potter and the Order of the Phoenix</dd>
                    <dd>Harry Potter and the Half-Blood Prince</dd>
                    <dd>Harry Potter and the Deathly Hallows</dd>
                    <dd>Harry Potter and the Cursed Child</dd>
                    <br>
                    <dt><strong>House:</strong></dt>
                    <dd>Slytherin</dd>
                    <br>
                    <dt><strong>Affiliations:</strong></dt>
                    <dd>Hogwarts staff</dd>
                    <dd>Head of Slytherin House</dd>
                    <dd>Death Eaters</dd>
                    <dd>Order of the Phoenix</dd>
                    <br>
                    <dt><strong>Skills:</strong></dt>
                    <dd>Occlumency</dd>
                    <dd>Legilimency</dd>
                    <dd>Potion-making</dd>
                    <dd>Duelling</dd>
                    <br>
                    <dt><strong>Hobbies:</strong></dt>
                    <dd>Being devoted to Lily Potter</dd>
                    <dd>Scowling</dd>
                    <br>
                    <dt><strong>Portrayed by:</strong></dt>
                    <dd>Alan Rickman</dd>
                    <dd>Alec Hopkins (teenager)</dd>
                    <dd>Benedict Clarke (child)</dd>
                    <br>
                    <dt><strong>First appearance:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone (1997)</dd>
                    <br>
                    <dt><strong>Last appearance:</strong></dt>
                    <dd>Harry Potter and the Cursed Child (2016)</dd>
                    <br>
                    <dt><strong>Created by:</strong></dt>
                    <dd>J. K. Rowling</dd>
                    <br>
                    <dt><strong>Aliases:</strong></dt>
                    <dd>The Half-Blood Prince</dd>
                    <br>
                    <dt><strong>Occupation:</strong></dt>
                    <dd>Headmaster of Hogwarts School of Witchcraft and Wizardry (1997–1998)</dd>
                    <dd>Defence Against the Dark Arts Professor of Hogwarts (1996–1997)</dd>
                    <dd>Potions Professor of Hogwarts (1981–1996)</dd>
                    <br>
                    <dt><strong>Family:</strong></dt>
                    <dd>Tobias Snape (father)</dd>
                    <dd>Eileen Snape (mother)</dd>
                    <br>
                    <dt><strong>Nationality:</strong></dt>
                    <dd>British</dd>
                    <br>
                    <dt><strong>Born:</strong></dt>
                    <dd>9 January 1960</dd>
                    <br>
                    <dt><strong>Died:</strong></dt>
                    <dd>2 May 1998</dd>
                </dl>`,
            intro: `
                Severus Snape was the Head of Slytherin House, Potions Master, and one of the most complex characters in the Harry Potter series. 
                Known for his cold demeanor and sharp wit, Snape was often condescending and harsh, particularly toward Gryffindor students like Harry Potter. 
                However, beneath his surly exterior lay a deeply conflicted man with a profound, unrequited love for Lily Potter, Harry's mother. 
                Snape's double life as a Death Eater and a member of the Order of the Phoenix showcased his bravery and sacrifice, ultimately revealing 
                him to be one of the unsung heroes of the wizarding world. His mastery of Occlumency, Legilimency, and potion-making, combined with his 
                loyalty and selflessness, makes Snape a pivotal character whose true intentions were not fully understood until the very end.
            `,
        },

        Albus_Dumbledore: {
            name: "Albus Dumbledore",
            image: "images/dumbledore-before-the-triwizard-tournament-1.jpg",
            description: `
                <dl>
                    <dt><strong>Appearances:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone</dd>
                    <dd>Harry Potter and the Chamber of Secrets</dd>
                    <dd>Harry Potter and the Prisoner of Azkaban</dd>
                    <dd>Harry Potter and the Goblet of Fire</dd>
                    <dd>Harry Potter and the Order of the Phoenix</dd>
                    <dd>Harry Potter and the Half-Blood Prince</dd>
                    <dd>Harry Potter and the Deathly Hallows</dd>
                    <dd>Fantastic Beasts: The Crimes of Grindelwald</dd>
                    <dd>Fantastic Beasts: The Secrets of Dumbledore</dd>
                    <br>
                    <dt><strong>House:</strong></dt>
                    <dd>Gryffindor</dd>
                    <br>
                    <dt><strong>Wand:</strong></dt>
                    <dd>Thestral hair</dd>
                    <dd>Elder</dd>
                    <br>
                    <dt><strong>Family connections/Affiliation:</strong></dt>
                    <dd>Hogwarts staff</dd>
                    <dd>Order of the Phoenix</dd>
                    <dd>Wizengamot</dd>
                    <dd>Order of Merlin</dd>
                    <dd>Dumbledores</dd>
                    <br>
                    <dt><strong>Skills:</strong></dt>
                    <dd>Defence Against the Dark Arts</dd>
                    <dd>Transfiguration</dd>
                    <dd>Duelling</dd>
                    <dd>Charms</dd>
                    <dd>Potions</dd>
                    <dd>Spell-creation</dd>
                    <dd>Mermish</dd>
                    <br>
                    <dt><strong>Hobbies:</strong></dt>
                    <dd>Ten-pin bowling</dd>
                    <dd>Chamber music</dd>
                    <dd>Inventing objects like the Deluminator</dd>
                    <dd>Caring for Fawkes</dd>
                    <dd>Using the Pensieve</dd>
                    <br>
                    <dt><strong>Portrayed by:</strong></dt>
                    <dd>Richard Harris</dd>
                    <dd>Michael Gambon</dd>
                    <dd>Jude Law</dd>
                    <br>
                    <dt><strong>First appearance:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone (1997)</dd>
                    <br>
                    <dt><strong>Last appearance:</strong></dt>
                    <dd>Fantastic Beasts: The Secrets of Dumbledore (2022)</dd>
                    <br>
                    <dt><strong>Full name:</strong></dt>
                    <dd>Albus Percival Wulfric Brian Dumbledore</dd>
                    <br>
                    <dt><strong>Occupation:</strong></dt>
                    <dd>Headmaster of Hogwarts</dd>
                    <dd>Professor of Hogwarts</dd>
                    <br>
                    <dt><strong>Family:</strong></dt>
                    <dd>Percival Dumbledore (father)</dd>
                    <dd>Kendra Dumbledore (mother)</dd>
                    <dd>Aberforth Dumbledore (brother)</dd>
                    <dd>Ariana Dumbledore (sister)</dd>
                    <dd>Aurelius Dumbledore (nephew)</dd>
                    <br>
                    <dt><strong>Significant other:</strong></dt>
                    <dd>Gellert Grindelwald</dd>
                    <br>
                    <dt><strong>Nationality:</strong></dt>
                    <dd>British</dd>
                    <br>
                    <dt><strong>Born:</strong></dt>
                    <dd>1881</dd>
                    <br>
                    <dt><strong>Died:</strong></dt>
                    <dd>30 June 1997</dd>
                </dl>`,
            intro: `
                Albus Percival Wulfric Brian Dumbledore was Headmaster of Hogwarts and the founder of the Order of the Phoenix, 
                an organisation dedicated to defeating Lord Voldemort. With a penchant for Muggle sweets and a beard long enough 
                to be tucked into his belt, Dumbledore's quirky exterior should not be taken too lightly, for there was nothing that 
                got past this great wizard. Dumbledore was a father figure for Harry Potter and known to be the only wizard that Voldemort 
                ever feared. A man of many achievements, Dumbledore helped develop the Philosopher's Stone with his friend, Nicolas Flamel, 
                and was credited with discovering the twelve uses of dragon's blood. Despite his flaws and hidden past, Dumbledore's wisdom 
                and guidance left a lasting legacy in the wizarding world.
            `,
        },
        
        Ron_Weasley: {
            name: "Ron Weasley",
            image: "images/ron-weasely.jpg",
            description: `
                <dl>
                    <dt><strong>Appearances:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone</dd>
                    <dd>Harry Potter and the Chamber of Secrets</dd>
                    <dd>Harry Potter and the Prisoner of Azkaban</dd>
                    <dd>Harry Potter and the Goblet of Fire</dd>
                    <dd>Harry Potter and the Order of the Phoenix</dd>
                    <dd>Harry Potter and the Half-Blood Prince</dd>
                    <dd>Harry Potter and the Deathly Hallows</dd>
                    <dd>Harry Potter and the Cursed Child</dd>
                    <br>
                    <dt><strong>Full name:</strong></dt>
                    <dd>Ronald Bilius Weasley</dd>
                    <br>
                    <dt><strong>House:</strong></dt>
                    <dd>Gryffindor</dd>
                    <br>
                    <dt><strong>Wand:</strong></dt>
                    <dd>Unicorn hair</dd>
                    <dd>Willow</dd>
                    <br>
                    <dt><strong>Family connections/Affiliation:</strong></dt>
                    <dd>The Weasleys</dd>
                    <dd>Dumbledore's Army</dd>
                    <dd>Hogwarts student</dd>
                    <br>
                    <dt><strong>Skills:</strong></dt>
                    <dd>Quidditch Keeper</dd>
                    <dd>Wizard Chess</dd>
                    <br>
                    <dt><strong>Hobbies:</strong></dt>
                    <dd>Supporting the Chudley Cannons</dd>
                    <dd>Eating</dd>
                    <dd>Crashing his dad's flying car</dd>
                    <br>
                    <dt><strong>Portrayed by:</strong></dt>
                    <dd>Rupert Grint</dd>
                    <br>
                    <dt><strong>First appearance:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone (1997)</dd>
                    <br>
                    <dt><strong>Last appearance:</strong></dt>
                    <dd>Harry Potter and the Cursed Child (2016)</dd>
                    <br>
                    <dt><strong>Family:</strong></dt>
                    <dd>Arthur Weasley (father)</dd>
                    <dd>Molly Weasley (mother)</dd>
                    <dd>Bill Weasley (brother)</dd>
                    <dd>Charlie Weasley (brother)</dd>
                    <dd>Percy Weasley (brother)</dd>
                    <dd>Fred Weasley (brother)</dd>
                    <dd>George Weasley (brother)</dd>
                    <dd>Ginny Weasley (sister)</dd>
                    <br>
                    <dt><strong>Spouse:</strong></dt>
                    <dd>Hermione Granger</dd>
                    <br>
                    <dt><strong>Children:</strong></dt>
                    <dd>Rose Granger-Weasley</dd>
                    <dd>Hugo Granger-Weasley</dd>
                    <br>
                    <dt><strong>Nationality:</strong></dt>
                    <dd>British</dd>
                    <br>
                    <dt><strong>Born:</strong></dt>
                    <dd>1 March 1980</dd>
                </dl>`,
            intro: `
                Ron Weasley was Harry's and Hermione's best friend. Fiery-haired and fiery-tempered, Ron was the second youngest of 
                the seven Weasley children. Used to hand-me-downs, from robes to rats, Ron’s friendship with Harry often came under 
                pressure as he tried to deal with living in the shadow of his best friend. However, there was more to Ron than his 
                red hair and broken wand. Ron might not have Hermione’s brains or Harry’s fame, but his loyalty, bravery, and 
                selflessness made him an essential part of the trio. His quick thinking and unwavering support helped Harry on his journey 
                to defeat Voldemort.
            `,
        },

        Sirius_Black: {
            name: "Sirius Black",
            image: "images/sirius-black_2_1800x1248.png",
            description: `
                <dl>
                    <dt><strong>Appearances:</strong></dt>
                    <dd>Harry Potter and the Prisoner of Azkaban</dd>
                    <dd>Harry Potter and the Goblet of Fire</dd>
                    <dd>Harry Potter and the Order of the Phoenix</dd>
                    <dd>Harry Potter and the Deathly Hallows</dd>
                    <br>
                    <dt><strong>House:</strong></dt>
                    <dd>Gryffindor</dd>
                    <br>
                    <dt><strong>Affiliation:</strong></dt>
                    <dd>Order of the Phoenix</dd>
                    <dd>Marauders</dd>
                    <dd>Azkaban</dd>
                    <br>
                    <dt><strong>Skills:</strong></dt>
                    <dd>Animagus</dd>
                    <dd>Escaping Azkaban</dd>
                    <dd>Creating the Marauder's Map</dd>
                    <dd>Duelling</dd>
                    <br>
                    <dt><strong>Hobbies:</strong></dt>
                    <dd>Being godfather to Harry</dd>
                    <dd>Caring for Buckbeak</dd>
                    <dd>Teasing Snape</dd>
                    <br>
                    <dt><strong>First appearance:</strong></dt>
                    <dd>Harry Potter and the Prisoner of Azkaban (1999)</dd>
                    <br>
                    <dt><strong>Last appearance:</strong></dt>
                    <dd>Harry Potter and the Deathly Hallows – Part 2 (2011)</dd>
                    <br>
                    <dt><strong>Created by:</strong></dt>
                    <dd>J. K. Rowling</dd>
                    <br>
                    <dt><strong>Portrayed by:</strong></dt>
                    <dd>Gary Oldman</dd>
                    <dd>James Walters (teenager)</dd>
                    <br>
                    <dt><strong>Voiced by:</strong></dt>
                    <dd>David Robb</dd>
                    <dd>Guy Harris</dd>
                    <dd>Dominic Rowan</dd>
                    <br>
                    <dt><strong>Full name:</strong></dt>
                    <dd>Sirius Black III</dd>
                    <br>
                    <dt><strong>Alias:</strong></dt>
                    <dd>Padfoot</dd>
                    <br>
                    <dt><strong>Family:</strong></dt>
                    <dd>Orion Black (father)</dd>
                    <dd>Walburga Black (mother)</dd>
                    <dd>Regulus Black (brother)</dd>
                    <dd>Harry Potter (godson)</dd>
                    <dd>Bellatrix Lestrange (cousin)</dd>
                    <dd>Narcissa Malfoy (cousin)</dd>
                    <dd>Nymphadora Tonks (cousin)</dd>
                    <br>
                    <dt><strong>Nationality:</strong></dt>
                    <dd>British</dd>
                    <br>
                    <dt><strong>Born:</strong></dt>
                    <dd>3 November 1959</dd>
                    <br>
                    <dt><strong>Died:</strong></dt>
                    <dd>18 June 1996</dd>
                </dl>`,
            intro: `
                Coming from one of the oldest (and darkest) of magical families, the rebellious Sirius Black chose not to follow in 
                the footsteps of his other family members, many of whom became Death Eaters. Instead, Black made firm friends with 
                James Potter while at Hogwarts (both were Gryffindors) and was even made godfather of James' son, Harry, in their later 
                years. Framed for a crime he didn't commit, Sirius was taken to Azkaban prison. Many years later, he would escape, 
                forge a new relationship with Harry, and rejoin the fight against Voldemort as part of the secret organisation, the 
                Order of the Phoenix. Sirius was known for his courage, loyalty, and wit, but also for his tragic yet heroic journey.
            `,
        },   
        
        Seamus_Finnigan: {
            name: "Seamus Finnigan",
            image: "images/seamus-finnigan.jpg",
            description: `
                <dl>
                    <dt><strong>Appearances:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone</dd>
                    <dd>Harry Potter and the Chamber of Secrets</dd>
                    <dd>Harry Potter and the Prisoner of Azkaban</dd>
                    <dd>Harry Potter and the Goblet of Fire</dd>
                    <dd>Harry Potter and the Order of the Phoenix</dd>
                    <dd>Harry Potter and the Half-Blood Prince</dd>
                    <dd>Harry Potter and the Deathly Hallows</dd>
                    <br>
                    <dt><strong>House:</strong></dt>
                    <dd>Gryffindor</dd>
                    <br>
                    <dt><strong>Family connections/Affiliation:</strong></dt>
                    <dd>Hogwarts student</dd>
                    <dd>Dumbledore's Army</dd>
                    <br>
                    <dt><strong>Skills:</strong></dt>
                    <dd>Pyrotechnics</dd>
                    <br>
                    <dt><strong>Hobbies:</strong></dt>
                    <dd>Supporting Ireland in Quidditch</dd>
                    <dd>Hanging out with Dean</dd>
                    <br>
                    <dt><strong>Portrayed by:</strong></dt>
                    <dd>Devon Murray</dd>
                </dl>`,
            intro: `
                Gryffindor pupil, Seamus Finnigan, arrived at Hogwarts from Ireland in the same year as Harry, Ron, and Hermione. 
                Best friends with Dean Thomas, the young wizard wasn't always on Harry's side, especially when rumours arose about 
                whether Harry was always telling the truth. Despite this, Seamus stepped up when it counted and fought bravely 
                against Lord Voldemort and his followers during the Battle of Hogwarts, cementing his place as a loyal and courageous 
                member of Dumbledore's Army.
            `,
        },
        

        Dolores_Umbridge: {
            name: "Dolores Jane Umbridge",
            image: "images/umbridge-at-her-desk.jpg",
            description: `
                <dl>
                    <dt><strong>Appearances:</strong></dt>
                    <dd>Harry Potter and the Order of the Phoenix</dd>
                    <dd>Harry Potter and the Half-Blood Prince</dd>
                    <dd>Harry Potter and the Deathly Hallows</dd>
                    <br>
                    <dt><strong>First appearance:</strong></dt>
                    <dd>Harry Potter and the Order of the Phoenix (2003)</dd>
                    <br>
                    <dt><strong>Last appearance:</strong></dt>
                    <dd>Harry Potter and the Cursed Child (2016)</dd>
                    <br>
                    <dt><strong>Created by:</strong></dt>
                    <dd>J.K. Rowling</dd>
                    <br>
                    <dt><strong>Portrayed by:</strong></dt>
                    <dd>Imelda Staunton</dd>
                    <br>
                    <dt><strong>Full name:</strong></dt>
                    <dd> Dolores Jane Umbridge</dd>
                    <br>
                    <dt><strong>Occupation:</strong></dt>
                    <dd>Head of the Improper Use of Magic Office (formerly)</dd>
                    <dd>Senior Undersecretary to the Minister for Magic (until 1998)</dd>
                    <dd>Defence Against the Dark Arts Professor at Hogwarts School of Witchcraft and Wizardry (1995–1996)</dd>
                    <dd>Headmistress of Hogwarts (April–June 1996)</dd>
                    <dd>High Inquisitor at Hogwarts (1995–1996)</dd>
                    <dd>Head of the Muggle-Born Registration Commission (1997–1998)</dd>
                    <br>
                    <dt><strong>Nationality:</strong><dt> 
                    <dd>British</dd>
                    <br>
                    <dt><strong>House:</strong><dt>
                    <dd> Slytherin</dd>
                    <br>
                    <dt><strong>Affiliation:</strong></dt>
                    <dd>Hogwarts Staff</dd>
                    <dd>Ministry of Magic</dd>
                    <br>
                    <dt><strong>Skills:</strong></dt>
                    <dd>Ministry of Magic professional</dd>
                    <dd>Creating her blood quill</dd>
                    <br>
                    <dt><strong>Hobbies:</strong></dt>
                    <dd>Working for Cornelius Fudge</dd>
                    <dd>Torturing students</dd>
                    <dd>Adding frills to objects</dd>
                    <dd>Collecting ornamental plates decorated with cats</dd>
                </dl>`,
            intro: `
                A Ministry of Magic bureaucrat who indulged in her sadistic tendencies when she was posted to Hogwarts as Defence Against the Dark Arts professor, 
                Dolores Umbridge was infamous for her saccharine pink wardrobe and her violent taste for corporal punishments. Her ambitions led her to become Hogwarts 
                High Inquisitor and eventually Headmistress, but her unpopularity sparked a rebellion among the students. Known for her love of frills, cats, and oppressive 
                authority, Umbridge remains one of the Wizarding World's most despised figures.
            `,
        },
        
        Draco_Malfoy: {
            name: "Draco Lucius Malfoy",
            image: "images/draco-with-wand-at-the-ready.jpg",
            description: `
                <dl>
                     <dt><strong>Appearances:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone</dd>
                    <dd>Harry Potter and the Chamber of Secrets</dd>
                    <dd>Harry Potter and the Prisoner of Azkaban</dd>
                    <dd>Harry Potter and the Goblet of Fire</dd>
                    <dd>Harry Potter and the Order of the Phoenix</dd>
                    <dd>Harry Potter and the Half-Blood Prince</dd>
                    <dd>Harry Potter and the Deathly Hallows</dd>
                    <dd>Harry Potter and the Cursed Child</dd>
                    <br>
                    <dt><strong>First appearance:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone (1997)</dd>
                    <br>
                    <dt><strong>Last appearance:</strong></dt>
                    <dd>Harry Potter and the Cursed Child (2016)</dd>
                    <br>
                    <dt><strong>Created by:</strong></dt>
                    <dd>J.K. Rowling</dd>
                    <br>
                    <dt><strong>Portrayed by:</strong></dt>
                    <dd>Tom Felton</dd>
                    <br>
                    <dd><strong>Full name:</strong><dt>
                    <dd> Draco Lucius Malfoy</dd>
                    <br>
                    <dt><strong>Family:</strong></dt>
                    <dd>Lucius Malfoy (father)</dd>
                    <dd>Narcissa Malfoy (mother)</dd>
                    <dd><strong>Spouse:</strong> Astoria Greengrass</dd>
                    <dd><strong>Children:</strong> Scorpius Malfoy (son)</dd>
                    <br>
                    <dt><strong>Relatives:</strong></dt>
                    <dd>Andromeda Tonks (aunt)</dd>
                    <dd>Bellatrix Lestrange (aunt)</dd>
                    <dd>Nymphadora Tonks (cousin)</dd>
                    <br>
                    <dt><strong>Nationality:</strong><dt>
                    <dd> British</dd>
                    <br>
                    <dt><strong>House:</strong><dt>
                    <dd> Slytherin</dd>
                    <br>
                    <dt><strong>Affiliation:</strong></dt>
                    <dd>Hogwarts Student</dd>
                    <dd>The Malfoys</dd>
                    <dd>Death Eaters</dd>
                    <br>
                    <dt><strong>Skills:</strong></dt>
                    <dd>Quidditch</dd>
                    <dd>Duelling</dd>
                    <dd>Vanishing Cabinet repair</dd>
                    <dd>Occlumency</dd>
                    <br>
                    <dt><strong>Hobbies:</strong></dt>
                    <dd>The Inquisitorial Squad</dd>
                    <dd>Abusing his Prefect power</dd>
                    <dd>Leading Crabbe and Goyle</dd>
                    <dd>Hanging out in Borgin and Burkes</dd>
                    <dd>Spending time in the Room of Requirement</dd>
                </dl>`,
            intro: `
                A Slytherin pupil who had a strong rivalry with Harry Potter and a family loyal to Lord Voldemort, from the moment Draco and Harry met in Madam Malkin’s Robes 
                for All Occasions the two didn’t see eye to eye. Harry rejected Draco’s offer of friendship, preferring to choose his friends for their personality rather than 
                their pure-blood status. Draco was usually accompanied by his cronies, fellow Slytherins, Crabbe and Goyle, and enjoyed having power over other students. When 
                the pressure from his family and the rise of Voldemort turned Draco from schoolboy bully to something a lot more dangerous, the cracks began to show, and his 
                allegiances wavered.
            `,
        },
        
        Fred_Weasley: {
            name: "Fred Weasley",
            image: "images/fred-and-george-in-the-gryffindor-common-room.jpg",
            description: `
                <dl>
                    <dt><strong>Appearances:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone</dd>
                    <dd>Harry Potter and the Chamber of Secrets</dd>
                    <dd>Harry Potter and the Prisoner of Azkaban</dd>
                    <dd>Harry Potter and the Goblet of Fire</dd>
                    <dd>Harry Potter and the Order of the Phoenix</dd>
                    <dd>Harry Potter and the Half-Blood Prince</dd>
                    <dd>Harry Potter and the Deathly Hallows</dd>
                    <br>
                    <dt><strong>First appearance:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone (1997)</dd>
                    <br>
                    <dt><strong>Last appearance:</strong></dt>
                    <dd>Harry Potter and the Deathly Hallows (2007)</dd>
                    <br>
                    <dt><strong>Created by:</strong></dt>
                    <dd>J.K. Rowling</dd>
                    <br>
                    <dt><strong>Portrayed by:</strong></dt>
                    <dd>James Phelps</dd>
                    <br>
                    <dd><strong>Full name:</strong><dt> Fred Weasley</dd>
                    <br>
                    <dt><strong>Family:</strong></dt>
                    <dd>Arthur Weasley (father)</dd>
                    <dd>Molly Weasley (mother)</dd>
                    <dd>Bill, Charlie, Percy, George (brothers)</dd>
                    <dd>Ginny Weasley (sister)</dd>
                    <br>
                    <dd><strong>Nationality:</strong><dt>
                    <dd> British</dd>
                    <br>
                    <dd><strong>House:</strong><dt>
                    <dd> Gryffindor</dd>
                    <br>
                    <dt><strong>Affiliation:</strong></dt>
                    <dd>Order of the Phoenix</dd>
                    <dd>The Weasleys</dd>
                    <dd>Quidditch player</dd>
                    <dd>Hogwarts student</dd>
                    <br>
                    <dt><strong>Skills:</strong></dt>
                    <dd>Inventing and running a joke shop</dd>
                    <dd>Quidditch Beater</dd>
                    <dd>Befriending Peeves</dd>
                    <br>
                    <dt><strong>Hobbies:</strong></dt>
                    <dd>Making mischief</dd>
                    <dd>Annoying Percy</dd>
                    <dd>Pretending to be George</dd>
                     <br>
                    <dt><strong>Died:</strong></dt>
                    <dd>2 May 1998</dd>
                </dl>`,
            intro: `
                One half of the notorious Weasley twins, along with his brother George, Fred Weasley was more often than not behind any rule breaking that happened at Hogwarts. 
                It wasn't only pranks that kept Fred entertained; he was also an excellent Quidditch player, and both brothers were Beaters on the Gryffindor team. While Fred 
                and George may not have had many O.W.L.s, their natural entrepreneurial skills led them to start their own joke shop, Weasley Wizard Wheezes.
            `,
        },
        
        George_Weasley: {
            name: "George Weasley",
            image: "images/fred-and-george-at-grimmauld-place.jpg",
            description: `
                <dl>
                     <dt><strong>Appearances:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone</dd>
                    <dd>Harry Potter and the Chamber of Secrets</dd>
                    <dd>Harry Potter and the Prisoner of Azkaban</dd>
                    <dd>Harry Potter and the Goblet of Fire</dd>
                    <dd>Harry Potter and the Order of the Phoenix</dd>
                    <dd>Harry Potter and the Half-Blood Prince</dd>
                    <dd>Harry Potter and the Deathly Hallows</dd>
                    <br>
                    <dt><strong>First appearance:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone (1997)</dd>
                    <br>
                    <dt><strong>Last appearance:</strong></dt>
                    <dd>Harry Potter and the Deathly Hallows – Part 2 (2011)</dd>
                    <br>
                    <dt><strong>Created by:</strong></dt>
                    <dd>J.K. Rowling</dd>
                    <br>
                    <dt><strong>Portrayed by:</strong></dt>
                    <dd>Oliver Phelps</dd>
                    <br>
                    <dd><strong>Full name:</strong><dt>
                    <dd> George Weasley</dd>
                    <br>
                    <dt><strong>Family:</strong></dt>
                    <dd>Arthur Weasley (father)</dd>
                    <dd>Molly Weasley (mother)</dd>
                    <dd>Bill Weasley (brother)</dd>
                    <dd>Charlie Weasley (brother)</dd>
                    <dd>Percy Weasley (brother)</dd>
                    <dd>Fred Weasley (twin brother)</dd>
                    <dd>Ron Weasley (brother)</dd>
                    <dd>Ginny Weasley (sister)</dd>
                    <dd>Spouse: Angelina Johnson</dd>
                    <dd>Children:Fred Weasley II</dd>
                    <dd>Children:Roxanne Weasley</dd>
                    <br>
                    <dt><strong>Nationality:</strong> <dt>
                    <dd>British</dd>
                    <br>
                    <dt><strong>House:</strong><dt>
                    <dd> Gryffindor</dd>
                    <br>
                    <dt><strong>Affiliation:</strong></dt>
                    <dd>Order of the Phoenix</dd>
                    <dd>The Weasleys</dd>
                    <dd>Quidditch player</dd>
                    <dd>Hogwarts student</dd>
                    <br>
                    <dt><strong>Skills:</strong></dt>
                    <dd>Inventing and running a joke shop</dd>
                    <dd>Quidditch Beater</dd>
                    <dd>Befriending Peeves</dd>
                    <br>
                    <dt><strong>Hobbies:</strong></dt>
                    <dd>Making mischief</dd>
                    <dd>Annoying Percy</dd>
                    <dd>Pretending to be Fred</dd>
                </dl>`,
            intro: `
                George, alongside his twin brother Fred, could often be found winding up his older brother Percy, playing pranks on unsuspecting students, and imagining 
                new ways to entertain his friends. The twins were also owners of the magical Marauder's Map, a tool that came in handy more than once as the boys 
                traversed the school undetected. Despite his lighthearted nature, George displayed bravery and determination as a member of the Order of the Phoenix.
            `,
        },
        
        Ginny_Weasley: {
            name: "Ginevra Molly Weasley",
            image: "images/ginny-fred-george-ron-order-of-the-phoenix-portrait.jpg",
            description: `
                <dl>
                    <dt><strong>Appearances:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone</dd>
                    <dd>Harry Potter and the Chamber of Secrets</dd>
                    <dd>Harry Potter and the Prisoner of Azkaban</dd>
                    <dd>Harry Potter and the Goblet of Fire</dd>
                    <dd>Harry Potter and the Order of the Phoenix</dd>
                    <dd>Harry Potter and the Half-Blood Prince</dd>
                    <dd>Harry Potter and the Deathly Hallows</dd>
                    <dd>Harry Potter and the Cursed Child</dd>
                    <br>
                    <dt><strong>First appearance:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone (1997)</dd>
                    <br>
                    <dt><strong>Last appearance:</strong></dt>
                    <dd>Harry Potter and the Cursed Child (2016)</dd>
                    <br>
                    <dt><strong>Created by:</strong></dt>
                    <dd>J.K. Rowling</dd>
                    <br>
                    <dt><strong>Portrayed by:</strong></dt>
                    <dd>Bonnie Wright</dd>
                    <br>
                    <dd><strong>Full name:</strong><dt>
                    <dd> Ginevra Molly Weasley</dd>
                    <dd><strong>Nickname:</strong> Ginny</dd>
                    <br>
                    <dt><strong>Family:</strong></dt>
                    <dd>Arthur Weasley (father)</dd>
                    <dd>Molly Weasley (mother)</dd>
                    <dd>Bill Weasley (brother)</dd>
                    <dd>Charlie Weasley (brother)</dd>
                    <dd>Percy Weasley (brother)</dd>
                    <dd>Fred Weasley (brother)</dd>
                    <dd>George Weasley (brother)</dd>
                    <dd>Ron Weasley (brother)</dd>
                    <dd>Spouse:Harry Potter</dd>
                    <dd>Children: James Sirius Potter</dd>
                    <dd>Children: Albus Severus Potter</dd>
                    <dd>Children: Lily Luna Potter</dd>
                    <br>
                    <dd><strong>Nationality:</strong><dt>
                    <dd> British</dd>
                    <br>
                    <dd><strong>House:</strong><dt>
                    <dd> Gryffindor</dd>
                    <br>
                    <dt><strong>Affiliation:</strong></dt>
                    <dd>Order of the Phoenix</dd>
                    <dd>The Weasleys</dd>
                    <dd>Quidditch player</dd>
                    <br>
                    <dt><strong>Skills:</strong></dt>
                    <dd>Quidditch Seeker and Chaser</dd>
                    <dd>Defence Against the Dark Arts</dd>
                    <dd>Duelling</dd>
                    <dd>Bat-Bogey Hex</dd>
                    <br>
                    <dt><strong>Hobbies:</strong></dt>
                    <dd>Looking after Arnold</dd>
                </dl>`,
            intro: `
                The youngest Weasley child and only daughter, Ginny was an accomplished witch and Quidditch player who joined Gryffindor House alongside her siblings. 
                Ginny might have been a little flustered when she first met Harry Potter as a young witch, but she soon found her footing at school. She proved herself 
                a skilled Seeker and Chaser, representing Gryffindor on the house team, and was just as talented with a wand as she was with a broom, specializing in the 
                Bat-Bogey Hex. Often by Harry's side during his battles against Voldemort, Ginny's bravery and skill made her a key figure in the fight against darkness.
            `,
        },
        
        Lord_Voldemort: {
            name: "Tom Marvolo Riddle",
            image: "images/voldemort-in-the-ministry.jpg",
            description: `
                <dl>
                    <dt><strong>Appearances:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone</dd>
                    <dd>Harry Potter and the Chamber of Secrets</dd>
                    <dd>Harry Potter and the Goblet of Fire</dd>
                    <dd>Harry Potter and the Order of the Phoenix</dd>
                    <dd>Harry Potter and the Half-Blood Prince</dd>
                    <dd>Harry Potter and the Deathly Hallows</dd>
                    <dd>Harry Potter and the Cursed Child</dd>
                    <br>
                    <dt><strong>First appearance:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone (1997)</dd>
                    <br>
                    <dt><strong>Last appearance:</strong></dt>
                    <dd>Harry Potter and the Cursed Child (2016)</dd>
                    <br>
                    <dt><strong>Created by:</strong></dt>
                    <dd>J.K. Rowling</dd>
                    <br>
                    <dt><strong>Portrayed by:</strong></dt>
                    <dd>Ralph Fiennes</dd>
                    <dd>Ian Hart</dd>
                    <dd>Richard Bremmer</dd>
                    <dd>Christian Coulson</dd>
                    <dd>Hero Fiennes Tiffin</dd>
                    <dd>Frank Dillane</dd>
                    <br>
                    <dt><strong>Voiced by:</strong></dt>
                    <dd>Eddie Izzard</dd>
                    <dd>Liam O'Brien</dd>
                    <br>
                    <dt><strong>Full name:</strong><dt>
                    <dd> Tom Marvolo Riddle</dd>
                    <dt><strong>Aliases:</strong><dt>
                    <dd> The Dark Lord</dd>
                    <dt><strong>Family:</strong></dt>
                    <dd>Tom Riddle (father)</dd>
                    <dd>Merope Gaunt (mother)</dd>
                    <dt><strong>Relatives:</strong></dt>
                    <dd>Thomas Riddle (paternal grandfather)</dd>
                    <dd>Mary Riddle (paternal grandmother)</dd>
                    <dd>Marvolo Gaunt (maternal grandfather)</dd>
                    <dd>Morfin Gaunt (maternal uncle)</dd>
                    <br>
                    <dt><strong>Nationality:</strong><dt>
                    <dd> British</dd>
                    <dt><strong>House:</strong><dt>
                    <dd> Slytherin</dd>
                    <br>
                    <dt><strong>Affiliation:</strong></dt>
                    <dd>Death Eaters</dd>
                    <br>
                    <dt><strong>Skills:</strong></dt>
                    <dd>Legilimency</dd>
                    <dd>Parseltongue</dd>
                    <dd>Creating Horcruxes</dd>
                    <dd>Dark Arts</dd>
                    <br>
                    <dt><strong>Hobbies:</strong></dt>
                    <dd>Applying for the Defence Against the Dark Arts job</dd>
                    <dd>Caring for Nagini</dd>
                    <dd>Leading the Death Eaters</dd>
                    <br>
                    <dt><strong>Born:</strong><dt>
                    <dd> 31 December 1926</dd>
                    <dt><strong>Died:</strong><dt>
                    <dd> 2 May 1998</dd>
                </dl>`,
            intro: `
                Born Tom Marvolo Riddle, Lord Voldemort, or He-Who-Must-Not-Be-Named, was one of the most powerful Dark wizards of all time. His closest followers, 
                the Death Eaters, were dedicated to establishing a Voldemort-led supremacy. However, they were forced into hiding after their leader was mysteriously 
                vanquished while trying to kill a defenseless infant—Harry Potter. Little did anyone know that Voldemort had gone further than any other wizard in 
                his pursuit of immortality, creating Horcruxes to anchor his soul, ensuring his eventual return to terrorize the Wizarding World once more.
            `,
        },

        Luna_Lovegood: {
            name: "Luna Lovegood",
            image: "images/luna-lovegood-order-of-the-phoenix.jpg",
            description: `
                <dl>
                    <dt><strong>Appearances:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone</dd>
                    <dd>Harry Potter and the Chamber of Secrets</dd>
                    <dd>Harry Potter and the Prisoner of Azkaban</dd>
                    <dd>Harry Potter and the Goblet of Fire</dd>
                    <dd>Harry Potter and the Order of the Phoenix</dd>
                    <dd>Harry Potter and the Half-Blood Prince</dd>
                    <dd>Harry Potter and the Deathly Hallows</dd>
                    <br>
                    <dt><strong>First appearance:</strong></dt>
                    <dd>Harry Potter and the Order of the Phoenix (2003)</dd>
                    <br>
                    <dt><strong>Last appearance:</strong></dt>
                    <dd>Harry Potter and the Deathly Hallows – Part 2 (2011)</dd>
                    <br>
                    <dt><strong>Created by:</strong></dt>
                    <dd>J.K. Rowling</dd>
                    <br>
                    <dt><strong>Portrayed by:</strong></dt>
                    <dd>Evanna Lynch</dd>
                    <br>
                    <dt><strong>Nicknames:</strong></dt>
                    <dd>Loony Lovegood</dd>
                    <br>
                    <dt><strong>Family:</strong></dt>
                    <dd>Xenophilius Lovegood (father)</dd>
                    <dd>Pandora Lovegood (mother)</dd>
                    <dd><strong>Spouse:</strong> Rolf Scamander</dd>
                    <dd><strong>Children:Lorcan Scamander</strong></dd>
                    <dd><strong>Children:Lysander Scamander</strong></dd>
                    <br>
                    <dt><strong>House:</strong><dt>
                    <dd> Ravenclaw</dd>
                    <br>
                    <dt><strong>Born:</strong><dt>
                    <dd> 23 February 1981</dd>
                    <br>
                    <dt><strong>Affiliation:</strong></dt>
                    <dd>Hogwarts student</dd>
                    <dd>Dumbledore's Army</dd>
                    <dd>The Lovegoods</dd>
                    <br>
                    <dt><strong>Skills:</strong></dt>
                    <dd>Duelling</dd>
                    <dd>Care of Magical Creatures</dd>
                    <br>
                    <dt><strong>Hobbies:</strong></dt>
                    <dd>Reading The Quibbler</dd>
                    <dd>Wearing Spectrespecs</dd>
                    <dd>Painting</dd>
                    <dd>Creating jewellery</dd>
                </dl>`,
            intro: `
                An eccentric Ravenclaw student, member of Dumbledore’s Army, and close friend of Harry Potter, Luna Lovegood might have been nicknamed ‘Loony’ for her quirky ways, 
                but she was in fact often one of Harry’s most clear-sighted friends. Luna was undeterred in her belief in herself and her friends. With a father who edited 
                the notoriously unreliable *Quibbler* magazine and a unique personal style, including homemade dirigible plum earrings, Luna had no choice but to stand out from the crowd. 
                Her courage, loyalty, and kindness earned her a place in Harry’s circle of most trusted friends.
            `,
        },
        
        Minerva_McGonagall: {
            name: "Minerva McGonagall",
            image: "images/professor-mcgonagall-enjoys-a-drink.jpg",
            description: `
                <dl>
                    <dt><strong>Appearances:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone</dd>
                    <dd>Harry Potter and the Chamber of Secrets</dd>
                    <dd>Harry Potter and the Prisoner of Azkaban</dd>
                    <dd>Harry Potter and the Goblet of Fire</dd>
                    <dd>Harry Potter and the Order of the Phoenix</dd>
                    <dd>Harry Potter and the Half-Blood Prince</dd>
                    <dd>Harry Potter and the Deathly Hallows</dd>
                    <dd>Harry Potter and the Cursed Child</dd>
                    <br>
                    <dt><strong>First appearance:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone (1997)</dd>
                    <br>
                    <dt><strong>Last appearance:</strong></dt>
                    <dd>Harry Potter and the Cursed Child (2016)</dd>
                    <br>
                    <dt><strong>Created by:</strong></dt>
                    <dd>J.K. Rowling</dd>
                    <br>
                    <dt><strong>Portrayed by:</strong></dt>
                    <dd>Maggie Smith[a]</dd>
                    <dd>Fiona Glascott[b]</dd>
                    <br>
                    <dt><strong>Occupation:</strong></dt>
                    <dd>Professor of Transfiguration</dd>
                    <br>
                    <dt><strong>Family:</strong></dt>
                    <dd>Robert McGonagall (father)</dd>
                    <dd>Isobel Ross (mother)</dd>
                    <dd><strong>Spouse:</strong> Elphinstone Urquart (husband)</dd>
                    <br>
                    <dt><strong>Nationality:</strong><dt>
                    <dd> British</dd>
                    <br>
                    <dt><strong>House:</strong><dt>
                    <dd> Gryffindor</dd>
                    <br>
                    <dt><strong>Affiliations:</strong></dt>
                    <dd>Hogwarts staff</dd>
                    <dd>Order of the Phoenix</dd>
                    <br>
                    <dt><strong>Skills:</strong></dt>
                    <dd>Transfiguration</dd>
                    <dd>Duelling</dd>
                    <dd>Animagus</dd>
                    <br>
                    <dt><strong>Hobbies:</strong></dt>
                    <dd>Quidditch</dd>
                    <dd>Using Piertotum Locomotor</dd>
                </dl>`,
            intro: `
                Minerva McGonagall was Head of Gryffindor House, a Transfiguration professor, and Deputy Headteacher of Hogwarts. Strict but fair, McGonagall took no nonsense 
                from her students but was not afraid to stand up for them in the face of injustice or danger — or on the Quidditch pitch, with the wizarding sport being one of her great passions. 
                McGonagall was a talented Animagus, and her animal form was a tabby cat. Fiercely loyal to Dumbledore, she was the Headmaster's trusted confidant and a loyal member of the Order of the Phoenix.
            `,
        },
        
        Neville_Longbottom: {
            name: "Neville Longbottom",
            image: "images/neville-in-the-battle-of-hogwarts.jpg",
            description: `
                <dl>
                    <dt><strong>Appearances:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone</dd>
                    <dd>Harry Potter and the Chamber of Secrets</dd>
                    <dd>Harry Potter and the Prisoner of Azkaban</dd>
                    <dd>Harry Potter and the Goblet of Fire</dd>
                    <dd>Harry Potter and the Order of the Phoenix</dd>
                    <dd>Harry Potter and the Half-Blood Prince</dd>
                    <dd>Harry Potter and the Deathly Hallows</dd>
                    <br>
                    <dt><strong>First appearance:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone (1997)</dd>
                    <br>
                    <dt><strong>Last appearance:</strong></dt>
                    <dd>Harry Potter and the Deathly Hallows (2007)</dd>
                    <br>
                    <dt><strong>Created by:</strong></dt>
                    <dd>J.K. Rowling</dd>
                    <br>
                    <dt><strong>Portrayed by:</strong></dt>
                    <dd>Matthew Lewis</dd>
                    <br>
                    <dt><strong>Occupation:</strong></dt>
                    <dd>Professor of Herbology at Hogwarts School of Witchcraft and Wizardry</dd>
                    <br>
                    <dt><strong>Family:</strong></dt>
                    <dd>Frank Longbottom (father)</dd>
                    <dd>Alice Longbottom (mother)</dd>
                    <dd>Augusta Longbottom (grandmother)</dd>
                    <dd><strong>Spouse:</strong> Hannah Abbott</dd>
                    <br>
                    <dt><strong>Nationality:</strong><dt>
                    <dd> British</dd>
                    <br>
                    <dt><strong>House:</strong><dt>
                    <dd> Gryffindor</dd>
                    <br>
                    <dt><strong>Family connections/Affiliation:</strong></dt>
                    <dd>Hogwarts student</dd>
                    <dd>Dumbledore's Army</dd>
                    <br>
                    <dt><strong>Skills:</strong></dt>
                    <dd>Herbology</dd>
                    <dd>Wielding the Sword of Gryffindor</dd>
                    <dd>Destroying Horcruxes</dd>
                    <br>
                    <dt><strong>Hobbies:</strong></dt>
                    <dd>Tending to his Mimbulus mimbletonia</dd>
                    <dd>Forgetting Gryffindor passwords</dd>
                    <dd>Looking for Trevor</dd>
                </dl>`,
            intro: `
                Neville's ability to lose, forget, or break his personal possessions, coupled with his discomfort under the scrutiny of his teachers, 
                earned him a reputation as clumsy, shy, and even unintelligent. Some even questioned how he had earned his place in Gryffindor. 
                Nevertheless, Neville proved himself to be one of Hogwarts' bravest students time and time again. Willing to stand up against both his 
                friends and enemies in pursuit of what was right, Neville embodied the Gryffindor trait of bravery, risking everything for what he believed. 
                A keen Herbologist, Neville also demonstrated that with the right teacher and passion for the subject, he was far from unintelligent.
            `,
        },
        
    };

    if (characters[characterName]) {
        const character = characters[characterName];
        document.getElementById("character_name").textContent = character.name;
        document.getElementById("character_image").src = character.image;
        document.getElementById("character_image").alt = character.name;
        document.getElementById("character_info").innerHTML = character.description;
        document.getElementById("character_intro").innerHTML = character.intro;
    } else {
        document.getElementById("character_name").textContent = "Character Not Found";
        document.getElementById("character_info").textContent = "We couldn't find information about this character.";
    }
});
