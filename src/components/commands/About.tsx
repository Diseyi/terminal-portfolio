import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Diseyi</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Software Engineer</HighlightAlt> with a focus on
        <HighlightAlt> Front-End Development</HighlightAlt>
      </p>
      <p>
        As a Software Engineer with a background in Chemical Science, <br />
        I have a unique perspective and set of skills that make me well-suited to the challenges of software engineering. <br />  <br />
        My strong foundation in problem-solving and analytical thinking, developed through my studies in chemical science, <br />
        allows me to approach complex technical challenges with confidence and creativity. <br />
        developing web applications to solve real-life challenges.
      </p>
      <br />
      <p className="">
      In my free time, I write Poems which are focused on helping people build healthy self-identity.  <br />  <br />
      My creativity and passion for helping others make me a well-rounded and valuable member of my team,  <br />
      and my unique perspective can help drive innovation and develop new solutions to complex technical challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
