import React from "react";
import Hero from "./Hero";
import Content from "./Content";

function About(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          Hello, my name is Nick, I'm a software engineer from the beautiful
          Ozark Mountains. I am currently creating React apps and crafting
          accessible software solutions for the world.
        </p>

        <p>
          I love React and Node; that is what you can catch me using the most,
          but sometimes I love to hop into GO and Python projects. Web
          accessibility and user experience have played a huge role in my
          professional career and I have been striving to make a more inclusive
          web experience for everyone to enjoy.
        </p>
        <p>
          <b>
            <i>"Life is not a problem to solve, but an experience to enjoy"</i>
          </b>
        </p>
        <p>
          Outside of programming, I love skateboarding, going to shows, mountain
          biking, imported Fanta sodas (shokata is my favorite flavor), playing
          guitar, and mid-century modern furniture.
        </p>
        <p>
          Some of my favorite books are: [
          <a
            href="https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Design of Everyday Things
          </a>
          ] | [
          <a
            href="https://www.amazon.com/Natural-Reality-Abstract-Trialogue-1919-1920/dp/080761372X"
            target="_blank"
            rel="noopener noreferrer"
          >
            Neutral Reality and Abstract Reality
          </a>
          ] | [
          <a
            href="https://www.amazon.com/Lean-UX-Applying-Principles-Experience/dp/1449311652"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lean UX
          </a>
          ] | [
          <a
            href="https://www.amazon.com/Multipliers-Best-Leaders-Everyone-Smarter/dp/0061964395"
            target="_blank"
            rel="noopener noreferrer"
          >
            Multipliers
          </a>
          ]
        </p>
        <p>
          If you would like to work, shoot me an [
          <a href="mailto:nl.software.developer@gmail.com">email</a>]
        </p>
        <p>
          You can also find me on [
          <a
            href="https://github.com/nel417"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          ] | [
          <a
            href="https://medium.com/@xnel417x"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>
          ] | [
          <a
            href="https://www.behance.net/xnel417x644e"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </a>
          ]
        </p>
        <p>Thank you for your time.</p>
      </Content>
    </div>
  );
}

export default About;
