const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs');


    async function getCSWNavLinks() {
        try {
            const response = await fetch('https://www.circlesportswear.com/');
            const html = await response.text();
            const $ = cheerio.load(html);
    
          // Sélectionne tous les éléments de la barre de navigation
            const navLinks = $('#wrapper-link-menu icons a');

            const navLinksArray = [];
            navLinks.each((i, link) => {
            const url = $(link).attr('href');
            navLinksArray.push(url);
        });

            fs.writeFile('circlesportswear_links.json', JSON.stringify(navLinksArray), (err) => {
            if (err) throw err;
            console.log('Les liens ont été écrits dans le fichier .json');
            });

        } catch (error) {
            console.error(error);
        }
        }
        
        getCSWNavLinks();
