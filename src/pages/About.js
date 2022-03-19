import React from 'react'
import { useContext } from 'react'
import { LoadingContext } from '../contexts/LoadingContext'
import { Routes, Route, Link } from "react-router-dom";

function About() {
    return (
      <>
        <main>
          <h2>Who are we?</h2>
          <p>
            That feels like an existential question, don't you
            think?
          </p>
        </main>
      </>
    );
  }

export default About;


