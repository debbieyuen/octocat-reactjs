import './App.css';
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "./build_6/Build/build_6.loader.js",
  dataUrl: "./build_6/Build/build_6.data",
  frameworkUrl: "./build_6/Build/build_6.framework.js",
  codeUrl: "./build_6/Build/build_6.wasm",
});

function App() {
  return (
    
    <div className="App">
      <div className ="Unity">
        <Unity unityContext={unityContext} 
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
