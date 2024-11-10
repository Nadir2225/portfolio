import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Project from "./project";
import sushi from '../assets/sushi.jpg';
import att from '../assets/att.jpg';
import cloud from '../assets/cloud.jpg';
import web from '../assets/web.jpg';
import android from '../assets/android.jpg';
import food from '../assets/food.jpg';
import playerfy from '../assets/playerfy.jpg';
import quizz from '../assets/quizz.jpg';
import flarpy from '../assets/flarpy.png';
import game from '../assets/game.jpg';
import Badge from "./badge";
import Project2 from "./project2";


const ScrollSection = (props) => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-180vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "900 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer" ref={props.projects}>
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div>
          <Badge img={web} title="Web development" />
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
          <div>
          <Badge img={android} title="Android development" />
          <Project2
          img={food}
          name="food Recipes app"
          desc='a native android app for food recipes.technologies: kotlin, jetpack compose, roomDB(for local db), exoplayer(to play videos), firebase tools: (authentification, firestore, cloud storage).'
          github="https://github.com/Nadir2225/food-recipes"
          file="/files/foodRecipes.apk"
          game={false}
          />
          <Project2
          img={playerfy}
          name="Playerfy"
          desc='an audio player of the local audio files.technologies: kotlin, jetpack compose, mediaplayer'
          github="https://github.com/Nadir2225/Playerfy"
          file="/files/quizzApp.apk"
          game={false}
          />
          <Project2
          img={quizz}
          name="Quizz App"
          desc='a native android app for a quizz. technologies: kotlin, xml'
          github="https://github.com/Nadir2225/Quizz-App"
          file="/files/quizzApp.apk"
          game={false}
          />
          </div>
          <div>
          <Badge img={game} title="game development" />
          <Project2
          img={flarpy}
          name="Flarpy bob"
          desc='my first 2d game using c# and unity engine'
          github="https://github.com/Nadir2225/Quizz-App"
          file="/files/flarpyBob.rar"
          game={true}
          />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
