The purpose of this project was to rebuild my portfolio in way that could be continually extended and updated for the next couple years. My original portfolio was built off express in the traditional MVC structure, while there were no issues with the stack, I wanted to migrate to React since that has been my focus for the past year.

The main part of my portfolio I wanted to keep was the website's structure, which consisted of the navbar on the left side of the page, a banner section, and featured projects.

![Portfolio](https://res.cloudinary.com/do26dc7xg/image/upload/v1696024436/PortfolioV2/Portfolio2022/Screenshot_2023-09-18_at_4.00.42_PM_mdli4h.png)

One year removed from it's initial development period, I've come to realize the original portfolio's colors and styles dont accurately reflect my current skill with web development. This time, I decided to go a bit more minimalistic with my colors and went with a black and white color scheme instead. In addition, the mobile version was a bit of an afterthought compared to the desktop version, as I added after I finished the desktop page.

![Portfolio](https://res.cloudinary.com/do26dc7xg/image/upload/v1696024435/PortfolioV2/Portfolio2022/Screenshot_2023-09-18_at_4.05.29_PM_yjpffy.png)

However, the greatest flaw with this project was that all the porfolio data was stored inside of a JSON file in the source code - This means that in order to add new projects to the portfolio, I would need to edit the source code and redploy the entire application. While this isn't the end of the world, it is another source of frustration when working with the application. 

![Portfolio](https://res.cloudinary.com/do26dc7xg/image/upload/v1696024435/PortfolioV2/Portfolio2022/Screenshot_2023-09-18_at_4.22.53_PM_ghp1gh.png)

In the new portfolio, I wanted some sort of cloud based solution that I could add data to and immediately have it show up in the website. To this end, I used a combination of Google Sheets and Google Drive to store my data and images. This way I wouldn't have to touch the source code unless I was actively adding new features to the website. My original plan was to use a CMS such as Strapi, but after deployment and versioning issues that crashed my webserver, I decided to go with Google instead.

![Portfolio](https://res.cloudinary.com/do26dc7xg/image/upload/v1696024436/PortfolioV2/PortfolioV2/Screenshot_2023-09-18_at_4.32.28_PM_rrklxh.png)

There are a ton of issues with using Google Sheets as my backend, the biggest being it's nonexistent scalability. When I call my getAllPosts() function, my application pulls the ENTIRE spreadsheet from Google and parses it as necessary. While this is okay with smaller portfolio and blog applications, I can see how this can become a nightmare when it comes to both bandwidth and compute time once the spreadsheet becomes large enough.

![Portfolio](https://res.cloudinary.com/do26dc7xg/image/upload/v1696024437/PortfolioV2/PortfolioV2/Screenshot_2023-09-18_at_4.40.33_PM_svzjfc.png)

All things considered, I think this portfolio is a massive improvement over the previous one. I can't wait for two years in the future, when I make my third portfolio and lament the amateurish errors I unknowingly made on this one.