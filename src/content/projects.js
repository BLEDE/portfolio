import newstand from "../images/NewsStand.PNG";
import warbler from "../images/warbler.PNG"
import portfolioimg from "../images/portfolio_site.PNG"

export const projects = [
    {
        title: "Twitter clone",
        screenshot: warbler,
        deploy: "https://warbler-client-bled.herokuapp.com/",
        details: "A website made to allow users to log in/out and leave comments with a backend using Mongo.",
        stack: "React, React Router, React Redux, Node, Heroku, Javascript, MongoDB"
    },
    {
        title: "News Stand",
        screenshot: newstand,
        deploy: "http://BLEDE.github.io/react-news-stand",
        details: "This site pulls data from https://news.ycombinator.com/ and displays it with infinite scrolling.",
        stack: "React, Node, Git, Javascript, HTML, CSS, Node"
    },
    {
        title: "Portfolio Site",
        screenshot: portfolioimg,
        deploy: "",
        details: "This site was also made using what I have learned through front end development!",
        stack: "React, React Redux, javascript, HTML, CSS, Node"
    }
];