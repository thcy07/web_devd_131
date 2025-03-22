document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const characterName = urlParams.get("name");

    const characters = {
        Philosophers_Stone: {
            name: "Harry Potter and the Philosopher's Stone",
            image: "images/philosophers-stone-theatrical-poster.jpg",
            description: `
                <dl>
                    <dt><strong>Directed by:</strong></dt>
                    <dd>Chris Columbus</dd>
                    <br>
                    <dt><strong>Screenplay by:</strong></dt>
                    <dd>Steve Kloves</dd>
                    <br>
                    <dt><strong>Based on:</strong></dt>
                    <dd>Harry Potter and the Philosopher's Stone by J.K. Rowling</dd>
                    <br>
                    <dt><strong>Produced by:</strong></dt>
                    <dd>David Heyman</dd>
                    <br>
                    <dt><strong>Starring:</strong></dt>
                    <dd>Daniel Radcliffe</dd>
                    <dd>Rupert Grint</dd>
                    <dd>Emma Watson</dd>
                    <dd>Richard Harris</dd>
                    <dd>Robbie Coltrane</dd>
                    <dd>Warwick Davis</dd>
                    <dd>Richard Griffiths</dd>
                    <dd>Ian Hart</dd>
                    <dd>John Hurt</dd>
                    <dd>Alan Rickman</dd>
                    <dd>Fiona Shaw</dd>
                    <dd>Maggie Smith</dd>
                    <dd>Julie Walters</dd>
                    <dd>John Cleese</dd>
                    <br>
                    <dt><strong>Cinematography:</strong></dt>
                    <dd>John Seale</dd>
                    <br>
                    <dt><strong>Edited by:</strong></dt>
                    <dd>Richard Francis-Bruce</dd>
                    <br>
                    <dt><strong>Music by:</strong></dt>
                    <dd>John Williams</dd>
                    <br>
                    <dt><strong>Production companies:</strong></dt>
                    <dd>Warner Bros. Pictures</dd>
                    <dd>Heyday Films</dd>
                    <dd>1492 Pictures</dd>
                    <br>
                    <dt><strong>Distributed by:</strong></dt>
                    <dd>Warner Bros. Pictures</dd>
                    <br>
                    <dt><strong>Release dates:</strong></dt>
                    <dd>4 November 2001 (Odeon Leicester Square)</dd>
                    <dd>10 November 2001 (United Kingdom)</dd>
                    <dd>16 November 2001 (United States)</dd>
                    <br>
                    <dt><strong>Running time:</strong></dt>
                    <dd>152 minutes</dd>
                    <br>
                    <dt><strong>Countries:</strong></dt>
                    <dd>United Kingdom</dd>
                    <dd>United States</dd>
                    <br>
                    <dt><strong>Language:</strong></dt>
                    <dd>English</dd>
                    <br>
                    <dt><strong>Budget:</strong></dt>
                    <dd>$125 million</dd>
                    <br>
                    <dt><strong>Box office:</strong></dt>
                    <dd>$1.026 billion</dd>
                </dl>
            `,
            intro: `
                "Harry Potter and the Philosopher's Stone" is the first installment in the globally beloved Harry Potter film series, based on the book by J.K. Rowling. Directed by Chris Columbus, the film introduces audiences to the magical world of Hogwarts School of Witchcraft and Wizardry, following young Harry Potter as he discovers his heritage and confronts the dark wizard Voldemort. With a star-studded cast, stunning visual effects, and the iconic music of John Williams, the film was a critical and commercial success, setting the stage for one of the most successful franchises in cinematic history.
            `,
        },

        Chamber_of_Secrets: {
            name: "Harry Potter and the Chamber of Secrets",
            image: "images/chamber-of-secrets-theatrical-poster.jpg",
            description: `
                <dl>
                    <dt><strong>Directed by:</strong></dt>
                    <dd>Chris Columbus</dd>
                    <br>
                    <dt><strong>Screenplay by:</strong></dt>
                    <dd>Steve Kloves</dd>
                    <br>
                    <dt><strong>Based on:</strong></dt>
                    <dd>Harry Potter and the Chamber of Secrets by J.K. Rowling</dd>
                    <br>
                    <dt><strong>Produced by:</strong></dt>
                    <dd>David Heyman</dd>
                    <br>
                    <dt><strong>Starring:</strong></dt>
                    <dd>Daniel Radcliffe</dd>
                    <dd>Rupert Grint</dd>
                    <dd>Emma Watson</dd>
                    <dd>Kenneth Branagh</dd>
                    <dd>John Cleese</dd>
                    <dd>Robbie Coltrane</dd>
                    <dd>Warwick Davis</dd>
                    <dd>Richard Griffiths</dd>
                    <dd>Richard Harris</dd>
                    <dd>Jason Isaacs</dd>
                    <dd>Alan Rickman</dd>
                    <dd>Fiona Shaw</dd>
                    <dd>Maggie Smith</dd>
                    <dd>Julie Walters</dd>
                    <br>
                    <dt><strong>Cinematography:</strong></dt>
                    <dd>Roger Pratt</dd>
                    <br>
                    <dt><strong>Edited by:</strong></dt>
                    <dd>Peter Honess</dd>
                    <br>
                    <dt><strong>Music by:</strong></dt>
                    <dd>John Williams</dd>
                    <br>
                    <dt><strong>Production companies:</strong></dt>
                    <dd>Warner Bros. Pictures</dd>
                    <dd>Heyday Films</dd>
                    <dd>1492 Pictures</dd>
                    <br>
                    <dt><strong>Distributed by:</strong></dt>
                    <dd>Warner Bros. Pictures</dd>
                    <br>
                    <dt><strong>Release dates:</strong></dt>
                    <dd>3 November 2002 (Odeon Leicester Square)</dd>
                    <dd>15 November 2002 (United Kingdom and United States)</dd>
                    <br>
                    <dt><strong>Running time:</strong></dt>
                    <dd>161 minutes</dd>
                    <br>
                    <dt><strong>Countries:</strong></dt>
                    <dd>United Kingdom</dd>
                    <dd>United States</dd>
                    <br>
                    <dt><strong>Language:</strong></dt>
                    <dd>English</dd>
                    <br>
                    <dt><strong>Budget:</strong></dt>
                    <dd>$100 million</dd>
                    <br>
                    <dt><strong>Box office:</strong></dt>
                    <dd>$882.5 million</dd>
                </dl>
            `,
            intro: `
                "Harry Potter and the Chamber of Secrets" is the second film in the beloved Harry Potter series, based on J.K. Rowling's novel of the same name. Directed by Chris Columbus, the movie follows Harry Potter and his friends as they uncover the mystery behind a series of attacks at Hogwarts, which are linked to the legendary Chamber of Secrets. The film introduces new characters such as Gilderoy Lockhart and Lucius Malfoy while expanding the magical world. With thrilling sequences, stunning visuals, and an engaging story, the film continues the legacy of the series, capturing the hearts of audiences worldwide.
            `,
        },

        Prisoner_of_Azkaban: {
            name: "Harry Potter and the Prisoner of Azkaban",
            image: "images/Harry_Potter_and_the_Prisoner_of_Azkaban_banner_1.jpg",
            description: `
                <dl>
                    <dt><strong>Directed by:</strong></dt>
                    <dd>Alfonso Cuarón</dd>
                    <br>
                    <dt><strong>Screenplay by:</strong></dt>
                    <dd>Steve Kloves</dd>
                    <br>
                    <dt><strong>Based on:</strong></dt>
                    <dd>Harry Potter and the Prisoner of Azkaban by J.K. Rowling</dd>
                    <br>
                    <dt><strong>Produced by:</strong></dt>
                    <dd>David Heyman</dd>
                    <dd>Chris Columbus</dd>
                    <dd>Mark Radcliffe</dd>
                    <br>
                    <dt><strong>Starring:</strong></dt>
                    <dd>Daniel Radcliffe</dd>
                    <dd>Rupert Grint</dd>
                    <dd>Emma Watson</dd>
                    <dd>Robbie Coltrane</dd>
                    <dd>Michael Gambon</dd>
                    <dd>Richard Griffiths</dd>
                    <dd>Gary Oldman</dd>
                    <dd>Alan Rickman</dd>
                    <dd>Fiona Shaw</dd>
                    <dd>Maggie Smith</dd>
                    <dd>Timothy Spall</dd>
                    <dd>David Thewlis</dd>
                    <dd>Emma Thompson</dd>
                    <dd>Julie Walters</dd>
                    <br>
                    <dt><strong>Cinematography:</strong></dt>
                    <dd>Michael Seresin</dd>
                    <br>
                    <dt><strong>Edited by:</strong></dt>
                    <dd>Steven Weisberg</dd>
                    <br>
                    <dt><strong>Music by:</strong></dt>
                    <dd>John Williams</dd>
                    <br>
                    <dt><strong>Production companies:</strong></dt>
                    <dd>Warner Bros. Pictures</dd>
                    <dd>Heyday Films</dd>
                    <dd>1492 Pictures</dd>
                    <br>
                    <dt><strong>Distributed by:</strong></dt>
                    <dd>Warner Bros. Pictures</dd>
                    <br>
                    <dt><strong>Release dates:</strong></dt>
                    <dd>23 May 2004 (Radio City Music Hall)</dd>
                    <dd>31 May 2004 (United Kingdom)</dd>
                    <dd>4 June 2004 (United States)</dd>
                    <br>
                    <dt><strong>Running time:</strong></dt>
                    <dd>142 minutes</dd>
                    <br>
                    <dt><strong>Countries:</strong></dt>
                    <dd>United Kingdom</dd>
                    <dd>United States</dd>
                    <br>
                    <dt><strong>Language:</strong></dt>
                    <dd>English</dd>
                    <br>
                    <dt><strong>Budget:</strong></dt>
                    <dd>$130 million</dd>
                    <br>
                    <dt><strong>Box office:</strong></dt>
                    <dd>$808.5 million</dd>
                </dl>
            `,
            intro: `
                "Harry Potter and the Prisoner of Azkaban" is the third film in the Harry Potter series, based on the novel by J.K. Rowling. Directed by Alfonso Cuarón, the movie marks a shift in tone for the series, introducing darker themes as Harry learns about the mysterious Sirius Black, who has escaped from Azkaban prison. With captivating performances, an exceptional score by John Williams, and groundbreaking visual effects, the film is celebrated as one of the best in the series. It expands the magical world while exploring themes of friendship, trust, and identity.
            `,
        },
        
        Goblet_of_Fire: {
            name: "Harry Potter and the Goblet of Fire",
            image: "images/goblet-of-fire-theatrical-poster-2.jpg",
            description: `
                <dl>
                    <dt><strong>Directed by:</strong></dt>
                    <dd>Mike Newell</dd>
                    <br>
                    <dt><strong>Screenplay by:</strong></dt>
                    <dd>Steve Kloves</dd>
                    <br>
                    <dt><strong>Based on:</strong></dt>
                    <dd>Harry Potter and the Goblet of Fire by J.K. Rowling</dd>
                    <br>
                    <dt><strong>Produced by:</strong></dt>
                    <dd>David Heyman</dd>
                    <br>
                    <dt><strong>Starring:</strong></dt>
                    <dd>Daniel Radcliffe</dd>
                    <dd>Rupert Grint</dd>
                    <dd>Emma Watson</dd>
                    <dd>Robbie Coltrane</dd>
                    <dd>Ralph Fiennes</dd>
                    <dd>Michael Gambon</dd>
                    <dd>Brendan Gleeson</dd>
                    <dd>Jason Isaacs</dd>
                    <dd>Gary Oldman</dd>
                    <dd>Alan Rickman</dd>
                    <dd>Maggie Smith</dd>
                    <dd>Timothy Spall</dd>
                    <br>
                    <dt><strong>Cinematography:</strong></dt>
                    <dd>Roger Pratt</dd>
                    <br>
                    <dt><strong>Edited by:</strong></dt>
                    <dd>Mick Audsley</dd>
                    <br>
                    <dt><strong>Music by:</strong></dt>
                    <dd>Patrick Doyle</dd>
                    <br>
                    <dt><strong>Production companies:</strong></dt>
                    <dd>Warner Bros. Pictures</dd>
                    <dd>Heyday Films</dd>
                    <br>
                    <dt><strong>Distributed by:</strong></dt>
                    <dd>Warner Bros. Pictures</dd>
                    <br>
                    <dt><strong>Release dates:</strong></dt>
                    <dd>6 November 2005 (Odeon Leicester Square)</dd>
                    <dd>18 November 2005 (United Kingdom and United States)</dd>
                    <br>
                    <dt><strong>Running time:</strong></dt>
                    <dd>157 minutes</dd>
                    <br>
                    <dt><strong>Countries:</strong></dt>
                    <dd>United Kingdom</dd>
                    <dd>United States</dd>
                    <br>
                    <dt><strong>Language:</strong></dt>
                    <dd>English</dd>
                    <br>
                    <dt><strong>Budget:</strong></dt>
                    <dd>$150 million</dd>
                    <br>
                    <dt><strong>Box office:</strong></dt>
                    <dd>$897.5 million</dd>
                </dl>
            `,
            intro: `
                "Harry Potter and the Goblet of Fire" is the fourth installment in the Harry Potter film series, based on the novel by J.K. Rowling. Directed by Mike Newell, the movie follows Harry as he unexpectedly becomes a competitor in the Triwizard Tournament, facing dangerous tasks and uncovering a sinister plot involving the return of Lord Voldemort. The film features darker themes, stunning visual effects, and a stellar cast performance, including Ralph Fiennes as Voldemort. Known for its high-stakes drama and thrilling sequences, it continues to captivate audiences and expand the magical universe.
            `,
        },
        
        Order_of_the_Phoenix: {
            name: "Harry Potter and the Order of the Phoenix",
            image: "images/order-of-the-phoenix-theatrical-poster.jpg",
            description: `
                <dl>
                    <dt><strong>Directed by:</strong></dt>
                    <dd>David Yates</dd>
                    <br>
                    <dt><strong>Screenplay by:</strong></dt>
                    <dd>Michael Goldenberg</dd>
                    <br>
                    <dt><strong>Based on:</strong></dt>
                    <dd>Harry Potter and the Order of the Phoenix by J.K. Rowling</dd>
                    <br>
                    <dt><strong>Produced by:</strong></dt>
                    <dd>David Heyman</dd>
                    <dd>David Barron</dd>
                    <br>
                    <dt><strong>Starring:</strong></dt>
                    <dd>Daniel Radcliffe</dd>
                    <dd>Rupert Grint</dd>
                    <dd>Emma Watson</dd>
                    <dd>Helena Bonham Carter</dd>
                    <dd>Robbie Coltrane</dd>
                    <dd>Ralph Fiennes</dd>
                    <dd>Michael Gambon</dd>
                    <dd>Imelda Staunton</dd>
                    <dd>Gary Oldman</dd>
                    <dd>Alan Rickman</dd>
                    <dd>Maggie Smith</dd>
                    <dd>Julie Walters</dd>
                    <br>
                    <dt><strong>Cinematography:</strong></dt>
                    <dd>Slawomir Idziak</dd>
                    <br>
                    <dt><strong>Edited by:</strong></dt>
                    <dd>Mark Day</dd>
                    <br>
                    <dt><strong>Music by:</strong></dt>
                    <dd>Nicholas Hooper</dd>
                    <br>
                    <dt><strong>Production companies:</strong></dt>
                    <dd>Warner Bros. Pictures</dd>
                    <dd>Heyday Films</dd>
                    <br>
                    <dt><strong>Distributed by:</strong></dt>
                    <dd>Warner Bros. Pictures</dd>
                    <br>
                    <dt><strong>Release dates:</strong></dt>
                    <dd>28 June 2007 (Odeon Leicester Square)</dd>
                    <dd>11 July 2007 (United Kingdom and United States)</dd>
                    <br>
                    <dt><strong>Running time:</strong></dt>
                    <dd>138 minutes</dd>
                    <br>
                    <dt><strong>Countries:</strong></dt>
                    <dd>United Kingdom</dd>
                    <dd>United States</dd>
                    <br>
                    <dt><strong>Language:</strong></dt>
                    <dd>English</dd>
                    <br>
                    <dt><strong>Budget:</strong></dt>
                    <dd>$150–200 million</dd>
                    <br>
                    <dt><strong>Box office:</strong></dt>
                    <dd>$942 million</dd>
                </dl>
            `,
            intro: `
                "Harry Potter and the Order of the Phoenix" is the fifth installment in the series, directed by David Yates. The movie explores Harry's struggles as he discovers the dark truth about Voldemort's return and the Ministry of Magic's denial. Introducing new characters like Luna Lovegood and Dolores Umbridge, the film combines political intrigue, emotional depth, and action-packed sequences, culminating in a dramatic showdown at the Ministry of Magic. The movie solidifies the series' shift toward darker, more mature storytelling while remaining a fan favorite.
            `,
        },

        Half_Blood_Prince: {
            name: "Harry Potter and the Half-Blood Prince",
            image: "images/half-blood-prince-theatrical-poster.jpg",
            description: `
                <dl>
                    <dt><strong>Directed by:</strong></dt>
                    <dd>David Yates</dd>
                    <br>
                    <dt><strong>Screenplay by:</strong></dt>
                    <dd>Steve Kloves</dd>
                    <br>
                    <dt><strong>Based on:</strong></dt>
                    <dd>Harry Potter and the Half-Blood Prince by J.K. Rowling</dd>
                    <br>
                    <dt><strong>Produced by:</strong></dt>
                    <dd>David Heyman</dd>
                    <dd>David Barron</dd>
                    <br>
                    <dt><strong>Starring:</strong></dt>
                    <dd>Daniel Radcliffe</dd>
                    <dd>Rupert Grint</dd>
                    <dd>Emma Watson</dd>
                    <dd>Michael Gambon</dd>
                    <dd>Alan Rickman</dd>
                    <dd>Tom Felton</dd>
                    <dd>Helena Bonham Carter</dd>
                    <dd>Jim Broadbent</dd>
                    <br>
                    <dt><strong>Cinematography:</strong></dt>
                    <dd>Bruno Delbonnel</dd>
                    <br>
                    <dt><strong>Edited by:</strong></dt>
                    <dd>Mark Day</dd>
                    <br>
                    <dt><strong>Music by:</strong></dt>
                    <dd>Nicholas Hooper</dd>
                    <br>
                    <dt><strong>Production companies:</strong></dt>
                    <dd>Warner Bros. Pictures</dd>
                    <dd>Heyday Films</dd>
                    <br>
                    <dt><strong>Distributed by:</strong></dt>
                    <dd>Warner Bros. Pictures</dd>
                    <br>
                    <dt><strong>Release dates:</strong></dt>
                    <dd>6 July 2009 (Odeon Leicester Square)</dd>
                    <dd>15 July 2009 (United Kingdom and United States)</dd>
                    <br>
                    <dt><strong>Running time:</strong></dt>
                    <dd>153 minutes</dd>
                    <br>
                    <dt><strong>Countries:</strong></dt>
                    <dd>United Kingdom</dd>
                    <dd>United States</dd>
                    <br>
                    <dt><strong>Language:</strong></dt>
                    <dd>English</dd>
                    <br>
                    <dt><strong>Budget:</strong></dt>
                    <dd>$250 million</dd>
                    <br>
                    <dt><strong>Box office:</strong></dt>
                    <dd>$934.5 million</dd>
                </dl>
            `,
            intro: `
                "Harry Potter and the Half-Blood Prince" delves into the origins of Voldemort through memories collected by Dumbledore. Directed by David Yates, the movie skillfully blends humor, romance, and tragedy while setting the stage for the final battle. With stunning cinematography and a deeper exploration of its characters, it remains one of the most visually compelling entries in the series.
            `,
        },

        Deathly_Hallows_Part_1: {
            name: "Harry Potter and the Deathly Hallows – Part 1",
            image: "images/deathly-hallows-part-1-theatrical-poster.jpg",
            description: `
                <dl>
                    <dt><strong>Directed by:</strong></dt>
                    <dd>David Yates</dd>
                    <br>
                    <dt><strong>Screenplay by:</strong></dt>
                    <dd>Steve Kloves</dd>
                    <br>
                    <dt><strong>Based on:</strong></dt>
                    <dd>Harry Potter and the Deathly Hallows by J.K. Rowling</dd>
                    <br>
                    <dt><strong>Produced by:</strong></dt>
                    <dd>David Heyman</dd>
                    <dd>David Barron</dd>
                    <dd>J.K. Rowling</dd>
                    <br>
                    <dt><strong>Starring:</strong></dt>
                    <dd>Daniel Radcliffe</dd>
                    <dd>Rupert Grint</dd>
                    <dd>Emma Watson</dd>
                    <dd>Helena Bonham Carter</dd>
                    <dd>Robbie Coltrane</dd>
                    <dd>Warwick Davis</dd>
                    <dd>Ralph Fiennes</dd>
                    <dd>Michael Gambon</dd>
                    <dd>Brendan Gleeson</dd>
                    <dd>Richard Griffiths</dd>
                    <dd>John Hurt</dd>
                    <dd>Jason Isaacs</dd>
                    <dd>Alan Rickman</dd>
                    <dd>Fiona Shaw</dd>
                    <dd>Timothy Spall</dd>
                    <dd>Imelda Staunton</dd>
                    <dd>David Thewlis</dd>
                    <dd>Julie Walters</dd>
                    <br>
                    <dt><strong>Cinematography:</strong></dt>
                    <dd>Eduardo Serra</dd>
                    <br>
                    <dt><strong>Edited by:</strong></dt>
                    <dd>Mark Day</dd>
                    <br>
                    <dt><strong>Music by:</strong></dt>
                    <dd>Alexandre Desplat</dd>
                    <br>
                    <dt><strong>Production companies:</strong></dt>
                    <dd>Warner Bros. Pictures</dd>
                    <dd>Heyday Films</dd>
                    <br>
                    <dt><strong>Distributed by:</strong></dt>
                    <dd>Warner Bros. Pictures</dd>
                    <br>
                    <dt><strong>Release dates:</strong></dt>
                    <dd>11 November 2010 (Odeon Leicester Square)</dd>
                    <dd>19 November 2010 (United Kingdom and United States)</dd>
                    <br>
                    <dt><strong>Running time:</strong></dt>
                    <dd>146 minutes</dd>
                    <br>
                    <dt><strong>Countries:</strong></dt>
                    <dd>United Kingdom</dd>
                    <dd>United States</dd>
                    <br>
                    <dt><strong>Language:</strong></dt>
                    <dd>English</dd>
                    <br>
                    <dt><strong>Budget:</strong></dt>
                    <dd>$250 million (shared with Part 2)</dd>
                    <br>
                    <dt><strong>Box office:</strong></dt>
                    <dd>$960.9 million</dd>
                </dl>
            `,
            intro: `
                "Harry Potter and the Deathly Hallows – Part 1" is the penultimate film in the Harry Potter series, directed by David Yates. Based on J.K. Rowling's final book, the film follows Harry, Hermione, and Ron as they go on a quest to destroy Voldemort's Horcruxes. The movie has a darker tone and focuses on the trio's journey, filled with danger, betrayal, and sacrifice. It sets the stage for the dramatic conclusion in Part 2, featuring exceptional performances and stunning visuals.
            `,
        },
        
        Deathly_Hallows_Part_2: {
            name: "Harry Potter and the Deathly Hallows – Part 2",
            image: "images/deathly-hallows-part-2-theatrical-poster.jpg",
            description: `
                <dl>
                    <dt><strong>Directed by:</strong></dt>
                    <dd>David Yates</dd>
                    <br>
                    <dt><strong>Screenplay by:</strong></dt>
                    <dd>Steve Kloves</dd>
                    <br>
                    <dt><strong>Based on:</strong></dt>
                    <dd>Harry Potter and the Deathly Hallows by J.K. Rowling</dd>
                    <br>
                    <dt><strong>Produced by:</strong></dt>
                    <dd>David Heyman</dd>
                    <dd>David Barron</dd>
                    <dd>J.K. Rowling</dd>
                    <br>
                    <dt><strong>Starring:</strong></dt>
                    <dd>Daniel Radcliffe</dd>
                    <dd>Rupert Grint</dd>
                    <dd>Emma Watson</dd>
                    <dd>Helena Bonham Carter</dd>
                    <dd>Robbie Coltrane</dd>
                    <dd>Warwick Davis</dd>
                    <dd>Ralph Fiennes</dd>
                    <dd>Michael Gambon</dd>
                    <dd>Brendan Gleeson</dd>
                    <dd>Richard Griffiths</dd>
                    <dd>John Hurt</dd>
                    <dd>Jason Isaacs</dd>
                    <dd>Gary Oldman</dd>
                    <dd>Alan Rickman</dd>
                    <dd>Fiona Shaw</dd>
                    <dd>Timothy Spall</dd>
                    <dd>David Thewlis</dd>
                    <dd>Julie Walters</dd>
                    <br>
                    <dt><strong>Cinematography:</strong></dt>
                    <dd>Eduardo Serra</dd>
                    <br>
                    <dt><strong>Edited by:</strong></dt>
                    <dd>Mark Day</dd>
                    <br>
                    <dt><strong>Music by:</strong></dt>
                    <dd>Alexandre Desplat</dd>
                    <br>
                    <dt><strong>Production companies:</strong></dt>
                    <dd>Warner Bros. Pictures</dd>
                    <dd>Heyday Films</dd>
                    <br>
                    <dt><strong>Distributed by:</strong></dt>
                    <dd>Warner Bros. Pictures</dd>
                    <br>
                    <dt><strong>Release dates:</strong></dt>
                    <dd>7 July 2011 (Trafalgar Square)</dd>
                    <dd>15 July 2011 (United Kingdom and United States)</dd>
                    <br>
                    <dt><strong>Running time:</strong></dt>
                    <dd>130 minutes</dd>
                    <br>
                    <dt><strong>Countries:</strong></dt>
                    <dd>United Kingdom</dd>
                    <dd>United States</dd>
                    <br>
                    <dt><strong>Language:</strong></dt>
                    <dd>English</dd>
                    <br>
                    <dt><strong>Budget:</strong></dt>
                    <dd>$250 million (shared with Part 1)</dd>
                    <br>
                    <dt><strong>Box office:</strong></dt>
                    <dd>$1.342 billion</dd>
                </dl>
            `,
            intro: `
                "Harry Potter and the Deathly Hallows – Part 2" is the epic conclusion to the Harry Potter saga, directed by David Yates. This action-packed finale sees Harry, Hermione, and Ron face off against Lord Voldemort and his forces in a final battle at Hogwarts. With breathtaking visual effects, emotional depth, and intense action, the film delivers a fitting conclusion to the story, resolving the fates of beloved characters and bringing the magical world to its dramatic end. It's a powerful conclusion to a beloved series.
            `,
        },
        

        
    };  

    if (characters[characterName]) {
        const character = characters[characterName];
        document.getElementById("movie_name").textContent = character.name;
        document.getElementById("movie_image").src = character.image;
        document.getElementById("movie_image").alt = character.name;
        document.getElementById("movie_info").innerHTML = character.description;
        document.getElementById("movie_intro").innerHTML = character.intro;
    } else {
        document.getElementById("movie_name").textContent = "Character Not Found";
        document.getElementById("movie_info").textContent = "We couldn't find information about this character.";
    }
});