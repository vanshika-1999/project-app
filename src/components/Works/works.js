import React from "react";
import './works.css';
import { Timeline, Event } from "react-timeline-scribble";

const Works = () => {
  return (
    <div id="works">
    <h1 className="cardsHeading">Experience</h1>
    <div className="cards">
    <Timeline >
      <Event interval={"June 5 – Present"} title={"Avis Budget Group"} subtitle={"Information Technology Analyst Intern – Audit & Compliance"}>
        Performed extensive compliance evaluations to guarantee conformity to multiple regulatory frameworks, such as SOX and ITGC, and engaged with teams to deliver audit results and suggestions, employing AuditBoard data analysis
Led IT audit engagements, coordinated with stakeholders, and provided timely and impactful audit reports to management. Assisted in the development and enhancement of the IT audit program, ensuring it aligned with organizational objectives and industry best practices
      </Event>
      <br/>
      <Event interval={"December 2022 – May 2023"} title={"Stevens Institute Of Technology"} subtitle={"Data & Web Operations Analyst Graduate Assistant"}>
      Performed data analysis on the stevens.edu website for data purification and generating informative findings using Google Analytics 4; using Contenful to send information via RESTful API
 Analyzed website's behavior utilizing Site improve analytics to comprehend visitor behavior and website performance via the use of intuitive dashboards
      </Event>
      <br/>
      <Event interval={"July 2022 – August 2022"} title={"Stevens Institute Of Technology"} subtitle={"Research Assistant"}>
      Collected and evaluated datasets of Stevens prospective, current and alumni student’s populations and created a database modulated in Python
 Developed a user-friendly form that is database accessible using PySimpleGUI package

      </Event>
      <Event interval={"2015 – 2016"} title={"Stevens Institute Of Technology"} subtitle={"Teaching Assistant, Data analytics and machine learning (MIS-637), Operations Management (EMT-657) & Applied Analytics (BIA-610)"}>
      As a Teaching Assistant for Data Analytics and Machine Learning (MIS-637), Operations Management (EMT-657), and Applied Analytics (BIA-610), I played a pivotal role in enhancing the learning experience for students. I conducted tutorial sessions, provided guidance on course materials, and facilitated a collaborative learning environment. Additionally, I effectively graded assignments and exams, offering constructive feedback to aid students' comprehension of complex concepts. By working closely with the instructors, I ensured that the courses were delivered effectively, fostering a deeper understanding of data analysis, machine learning, operations management, and applied analytics among students.
      </Event>
      <Event interval={"January 2021 – December 2021"} title={"Coditas"} subtitle={"Software Developer"}>
      Developed 3 working websites (supporting web and mobile) enabling clients to grow business efficiently and increased overall sales by 20%
 Devised end-to-end pixel-perfect UI with API integration. Applied clean code architecture principle, dependencies injection, and dynamic components to be utilized across
an entire project .Knew how to understand client needs to make test plans for improvements and bug fixes. and followed strong Agile principles by setting up daily standups and demos at the
end of each weekly sprint
      </Event>
    </Timeline>
    </div>
  </div>
  )
}

export default Works

