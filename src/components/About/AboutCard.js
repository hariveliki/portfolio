import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ color: "rgb(155 126 172)" }}>
            "Persevering and being passionate about achieving the best result are just as important to me as motivating my fellow human beings to grow."{" "}
          </p>
          <p style={{ textAlign: "justify" }}>
            I started working in the automation and logistics industry at the age of 16. I was fascinated by supply chain issues, how globalisation works and how it will affect our lives in the future. After graduating from vocational school with a degree in logistics, I decided to deepen my knowledge in this field and completed a professional bachelor's degree in industrial engineering and international logistics. I find it exciting to design, control and optimise processes economically. I learned how to strive for energy-efficient processes by analysing and continuously improving them in order to increase efficiency and minimise costs. My thesis was on a management concept for a food tech company based in Switzerland with sites across Europe. I am currently working as a software developer for a retail company. The integration of IT and data science into a company is necessary for its continued existence. For this reason, I decided to study Data Science, first on a self-study programme and then part-time. I am looking forward to a great future in technologically advanced companies all over the world.
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
