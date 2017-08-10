import React, { Component } from 'react'
import ReactDom from "react-dom";
import App from './main.js'
import $ from 'expose-loader?$!jquery';
ReactDom.render( <App/>,
    document.querySelector('body')
);
