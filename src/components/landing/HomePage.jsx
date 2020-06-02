import React, { Component } from 'react';
import HeadTop from './comp/HeadTop'
import Sponser from './comp/sponser';
import About from './comp/About'
import Scores from './comp/Scores';
import CommentShow from './comp/CommentShow';
import Award from './comp/Award';
import Event from './comp/Events';

export default class HomePage extends Component {
  render() {
    return (
      <section className="homepage">
        <HeadTop />
        <Sponser />
        <About />
        <Scores />
        <Event />
        <CommentShow />
        <Award />
      </section>
    )
  }
}
