import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "./build_6/Build/build_6.loader.js",
    dataUrl: "./build_6/Build/build_6.data",
    frameworkUrl: "./build_6/Build/build_6.framework.js",
    codeUrl: "./build_6/Build/build_6.wasm",
  })
  return (
    <div className="App">
      <div className ="Unity">
        <Unity unityProvider={unityProvider} 
        style= {{
          height: "100vh",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          justifySelf: "center",
          alignSelf: "center",
          overflow: "hidden",
        }}/>  
      </div>

      <div className="HeaderBar">
        <h1>Octocat World</h1>
      </div>
    </div>
  );
}

export default App;
