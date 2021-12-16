import React from "react";
import "./Title.css";

type TitleProps = {
  intro: string;
  title: string;
};

export const Title: React.FC<TitleProps> = ({ title, intro }: TitleProps) => (
  <section className="title-section">
    <div className="row">
      <div className="main">
        <div className="title-main">
          <h1>
            hello, I&apos;m
            {intro}
          </h1>
        </div>
        <div className="additional-title">
          <p>{title}</p>
        </div>
      </div>
    </div>
  </section>
);

export default Title;
