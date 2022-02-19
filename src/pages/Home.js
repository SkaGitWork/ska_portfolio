import React from "react"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Project from "../components/Project/Project"

class Home extends React.Component {
  render() {
    var data = [
      {
        title: "MIAC Consulting",
        image: "MIAC.png",
        text: 'MIAC Consulting was made to promote client services and trainings. It contains several pages : "Services", "Training", and "Contact". \n Technologies used : HTML, CSS, JavaScript',
        link: "http://www.miaconsulting.com.tn/",
      },
      {
        title: "Nasr Hospitality",
        image: "nasr website.png",
        text: 'Nasr Hospitality Consulting was made to promote client services and trainings. It contains several pages : "About us", "Services", "Career", "Online Certificate" and "News". Also it\'s translated in 4 different languages \n Technologies used : HTML, CSS, JavaScript, PHP',

        link: "https://nasrhospitality.com",
      },
      {
        image: "toDoApp.webp",
        title: "To Do App",
        text: 'The app contains a light and dark mode filters to display only completed or in progress to-do and finally a "drag and drop" feature to rearrange your to-do. This project was fun to create, i built it with Semantic HTML5 markup Flexbox CSS variables Vanilla Js. It taught me a lot of Javascript especially Js Dictionaries.',
        link: "https://skagitwork.github.io/Todo-app-website/",
      },
      {
        image: "rockPaperScissors.webp",
        title: "Rock Paper Scissors",
        text: "Probably the toughest one, it's a Rock Paper Scissors game, you choose what you want to play, then after a moment, you see what the house picked. The house picked is random so it's the best way to test your luck. This was really hard to build due to the complex structure of the page. I'm quite satisfied of the result but there is still room for improvement. I learned animation ::after and ::before for building complex shapes Grid. it was built Semantic HTML5 markup Flexbox CSS Grid Basic Js animation.",
        link: "https://skagitwork.github.io/Rock-Paper-Scissors-game-Website/",
      },
      {
        image: "calculatorApp.webp",
        title: "Calculator",
        text: "This the first App i created when i got back to web development. Although it's a simple project, it was quite challenging. I had to remember the basic stuff. This Calculator contains 3 themes and the basic arithmetic operation. I learned CSS variables and quite bit of animation.",
        link: "https://skagitwork.github.io/",
      },
      {
        image: "launchCountDownApp.webp",
        title: "Launch Count Down App",
        text: "I never expected to get such result from a simple countdown. As you can see, it's a web countdown, i can change the time that it starts. But the tough part was to animate each block. It took many trial and error to get this result. I learned Sass and animation.",
        link: "https://skagitwork.github.io/Launch-countdown-timer-Website-Challenge",
      },
      {
        image: "3columnPreviewCardApp.webp",
        title: "3-Column Preview Card",
        text: "This project was an easy one, it a good way to practice layout and responsiveness. But i see a plenty of feature to add to make thing interesting.",
        link: "https://skagitwork.github.io/3-column-preview-card-component--Website/",
      },
      {
        image: "statsPreviewCardComponent.webp",
        title: "Stats preview card component",
        text: "A simple frontend project, maybe i can add animation to the preview card. I learned Css filter.",
        link: "https://skagitwork.github.io/Stats-preview-card-component-Website/",
      },
      {
        image: "sunnySieAgencyLandingPage.webp",
        title: "Sunnyside agency landing page",
        text: "My first landing page, or my second project. It a landing page for both mobile and desktop. It was hard to work on the layout while having image position to respect. But i learned a lot from it especially responsive website and media queries.",
        link: "https://skagitwork.github.io/Sunnyside-agency-landing-page/",
      },
    ]
    return (
      <>
        <div id="wrapper" className="fade-in">
          <Header />

          <div id="main">
            {/* Posts */}
            <section className="posts">
              {data.map((val, idx) => (
                <Project
                  image={val.image}
                  title={val.title}
                  text={val.text}
                  link={val.link}
                />
              ))}
            </section>
          </div>
          <Footer />
        </div>
      </>
    )
  }
}

export default Home
