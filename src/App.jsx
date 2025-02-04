import { useState } from 'react'
import styled from 'styled-components';

import { Button } from './components/styled-comps';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import todoLogo from './assets/todo.svg'
import './App.css'

const HighlightText = styled.p`
  color: red;
  font-weight: bold;
`;

const AnimateContainer = styled.div`
  position: relative;

  .pendulums {
      position: absolute;
      width: 50px;
      height: 72px;
      right: -56px;
      bottom: -2px;
      -webkit-perspective: 640px;
      perspective: 640px
  }

  .pendulum {
      position: absolute;
      width: 50px;
      height: 70px;
      right: 44%;
      bottom: 0;
      left: 50%;
      -webkit-transform: translateZ(-300px) translateX(-50%);
      transform: translateZ(-300px) translateX(-50%)
  }

  .pendulum:after {
      content: "";
      width: 8px;
      height: 8px;
      background-color: #ffd6e9;
      position: absolute;
      top: 2px;
      left: 0;
      right: 0;
      margin: 0 auto;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      border: 3px solid #33322E
  }

  .pendulum.shadow {
      display: none;
      top: 263%;
      left: -65%;
      bottom: 0;
      -webkit-transform-origin: 50% 0;
      -ms-transform-origin: 50% 0;
      transform-origin: 50% 0;
      -webkit-transform: translateX(-50%) scaleY(-1) scaleZ(2) rotateY(-30deg) rotateX(-75deg) translateZ(300px);
      transform: translateX(-50%) scaleY(-1) scaleZ(2) rotateY(-30deg) rotateX(-75deg) translateZ(300px)
  }

  .pendulum .bar {
      position: absolute;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      top: -5px;
      display: block;
      width: 26px;
      height: 30px;
      background: #d0f4f0;
      border: 3px solid #33322e;
      border-radius: 15px;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px
  }

  .pendulum .string {
      position: absolute;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      width: 3px;
      height: 72px;
      background: #33322E
  }

  .pendulum .weight {
      position: absolute;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      bottom: 14px;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background: #f8d966;
      border: 3px solid #33322e
  }

  .pendulum .motion {
      position: absolute;
      height: 90px;
      width: 50px;
      -webkit-transform-origin: 50% 10px;
      -ms-transform-origin: 50% 10px;
      transform-origin: 50% 10px;
      -webkit-animation: swing 1.8s infinite ease-in-out;
      animation: swing 1.8s infinite ease-in-out
  }

  .pendulum.shadow .bar,.pendulum.shadow .string,.pendulum.shadow .weight {
      background: #3d3a34
  }

  @-webkit-keyframes swing {
      0% {
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg)
      }

      50% {
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg)
      }

      100% {
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg)
      }
  }

  @keyframes swing {
      0% {
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg)
      }

      50% {
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg)
      }

      100% {
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg)
      }
  }
`;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <img src={todoLogo} className="logo todo" alt="React logo" />
      </div>
      <AnimateContainer>
        <div className="pendulums">
          <div className="pendulum">
            <div className="bar"></div>
            <div className="motion">
              <div className="string"></div>
              <div className="weight"></div>
            </div>
          </div>
          <div className="pendulum shadow">
            <div className="bar"></div>
            <div className="motion">
              <div className="string"></div>
              <div className="weight"></div>
            </div>
          </div>
        </div>
      </AnimateContainer>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <HighlightText>
          Edit <code>src/App.jsx</code> and save to test HMR
        </HighlightText>
      </div>
      <HighlightText>
        Click on the Vite and React logos to learn more
      </HighlightText>
      <Button bg="green" color="white">绿色按钮</Button>
      <Button bg="blue" color="orange">蓝色按钮</Button>
    </>
  )
}

export default App
