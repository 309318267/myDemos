import React from "react";
import { render } from "react-dom";
import {AppContainer} from "react-hot-loader";//热更新
import Root from "./root";

render(
    <AppContainer>
    <Root />
    </AppContainer>,
    document.getElementById("root")
);

//热更新
if(module.hot){
     module.hot.accept("./root",()=>{
         const NewRoot=  require("./root").default;
         render(
             <AppContainer>
             <NewRoot />
             </AppContainer>,
             document.getElementById("root")
         );
     });
}