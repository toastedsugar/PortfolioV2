## PortfolioV2
The second iteration of my portfolio. My main issue with the original application was the difficulty in adding new projects to it. Since I stored all my data inside of a JSON file inside the source code, I would have to update the source code in order to make any changes to the website. This is incredibly frustrating to deal with, since it's a very time consuming process that involves modifying the source code and then redeploying the application through my AWS server. This time, I wanted to have some sort of cloud based data storage so I can make changes without messing with the app itself.

I was originally going to use a headless CMS, but then some lunatic on Reddit suggested that I could use Google Sheets as a very rudimentary CMS. Since I am an idiot myself, I decided to look into it futher. This blog provides good information on how I can get started.

https://www.reddit.com/r/webdev/comments/mk8vrx/comment/guji4j6/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
https://blog.openreplay.com/build-a-blog-with-google-sheets-as-a-headless-cms/

## Content Hosting
Since all the content is stored in a single spreadsheet cell as raw text, I needed some way to differentiate the different types of content. It seems like writing the content in markdown and using a react library in the frontend to actually render the content is the best way to go about this.

I decided to host the images on google drive as well. It was pretty difficult getting the actual images to render in HTML, they need to have a specific format

https://drive.google.com/uc?export=<IMAGE_ID>

## Frontend
Gatsby + Foundation CSS

