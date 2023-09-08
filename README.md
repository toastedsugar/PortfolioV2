## PortfolioV2
The second iteration of my portfolio. I created my original one right after I learned how to create traditional MVC websites, so I figured it was a good time to show off my react skills and make a new one from scratch with better performance and more features

This website is built using the following technologies:
 - NextJS
 - Tailwind CSS
 - Contentful
 - Hosted on AWS via Nginx reverse proxy

 This tutorial was a huge help actually making tailwind work: https://www.youtube.com/watch?v=4zHNGNCIezY

Inspiriation provided by:
 - https://dev.to/scrimba/10-minimal-portfolio-examples-for-web-developers-who-arent-good-at-design-40gj
 - https://michaelandreuzza.com/
 - https://portfolio2022.desertblossoms.net/

My main issue with the original application was the difficulty in adding new projects. Since I stored all my data inside of a JSON file inside the source code, I would have to redeploy the application whenever I would want to make a change, which is as frustrating as it sounds. This time, I wanted to have some sort of cloud based data storage so I can make changes without messing with the app itself.

Accessiblity features


Layout

Fonts
Trying to use the @import to get google fonts wasn't working for whatever reason. I ended up having to download the fonts and using them locally. It took forever to get working. Icons came from MUI.

Image handling
I needed to create loaders for the image, otherwise the app would hang for about a full second before rendering the new page