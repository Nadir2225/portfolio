import React from 'react'
import Project from '../components/project'
import sushi from '../assets/sushi.jpg';
import att from '../assets/att.jpg';
import cloud from '../assets/cloud.jpg';
import food from '../assets/food.jpg';
import playerfy from '../assets/playerfy.jpg';
import quizz from '../assets/quizz.jpg';
import adhan from '../assets/adhan.jpg';
import flarpy from '../assets/flarpy.png';
import Project2 from '../components/project2';
import Project3 from '../components/project3';

const Projects = (props) => {
  return (
    <div className='projects pb-5' ref={props.projects}>
      <div className='ms-5 titles' style={{ display: 'flex', gap: '10px', lineHeight: '1.4rem'}}>Recent <p style={{color: '#24b6e2'}}>Projects</p> <div></div></div>
      <Title first="Full-Stack" second="Websites" />
      <div className='projects-container'>
            <Project
              img={sushi}
              name="Sushi Restaurant"
              desc='a responsive landing page of a sushi restaurant using react js. i used some libraries like : { splidejs: "for carousel", react-reveal: "for some cool appearing animations" }'
              github="https://github.com/Nadir2225/sushi-website"
              url="https://sushi-restau.web.app/"
            />
            <Project 
              img={att}
              name="Attendance Management"
              desc='a full-stack website for regitering attendance from professors and recieving it in the admin pannel for attendance managers. used technologies: front-end html css bootstrap js, back-end: php(MVC), database: phpmyadmin'
              github="https://github.com/Nadir2225/attandence-manager"
              url="http://attendancemanager.infinityfreeapp.com/"
            />
            <Project 
              img={cloud}
              name="Attendance Management"
              desc='a static cloud manager website with some animations of react-reveal and reactjs for the front-end'
              github="https://github.com/Nadir2225/cloud-managment-clone"
              url="https://cloud-app-22.web.app"
            />
        </div>
        <Title first="Android" second="Applications" />
        <div className='projects-container'>
          <Project2
            img={food}
            name="food Recipes app"
            desc='a native android app for food recipes.technologies: kotlin, jetpack compose, roomDB(for local db), exoplayer(to play videos), firebase tools: (authentification, firestore, cloud storage).'
            github="https://github.com/Nadir2225/food-recipes"
            file="/files/foodrecipes.apk"
          />
          <Project2
            img={adhan}
            name="Adhan App"
            desc='a native android app for prayer times and notifications in the prayer times with personalized adhan voices. technologies: kotlin, jetpack compose, workManager'
            github="https://github.com/Nadir2225/Adhan-app"
            file="/files/adhan.apk"
          />
          <Project2
            img={playerfy}
            name="Playerfy"
            desc='an audio player of the local audio files.technologies: kotlin, jetpack compose, mediaplayer'
            github="https://github.com/Nadir2225/Playerfy"
            file="/files/playerfy.apk"
          />
          <Project2
            img={quizz}
            name="Quizz App"
            desc='a native android app for a quizz. technologies: kotlin, xml'
            github="https://github.com/Nadir2225/Quizz-App"
            file="/files/quizzapp.apk"
          />
        </div>
        <Title first="2D" second="Games" />
        <div className='projects-container'>
          <Project3
            img={flarpy}
            name="Flarpy bird"
            desc='my first 2d game using c# and unity engine with some cool features like accelerating over time etc...'
            github="https://github.com/Nadir2225/flarpy-bob"
            file86="/files/flarpybird_x86_v1.0.rar"
            file64="/files/flarpybird_x64_v1.0.rar"
            />
        </div>
        <div style={{width: '100%', padding: '10px 0px', display: 'flex', justifyContent: 'center', gap: '10px'}}>
          You thought that was it? explore more of my projects in my github space ^^. 
          <a href="https://github.com/Nadir2225" target='_blank' style={{color: '#c044cd', fontWeight: 'bold', textDecoration: 'none'}}>
            click me
          </a>
        </div>
    </div>
  )
}

const Title = (props) => <div className='titles' style={{width: '100%', display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px', marginTop: '30px'}}>{props.first} <label style={{color: '#c044cd'}}>{props.second}</label></div>


export default Projects