import React, { Component } from 'react'
import ReactDom from "react-dom";
import App from './main.js'
import $ from 'expose-loader?$!jquery';
import '../node_modules/simditor/styles/simditor.scss';
ReactDom.render( <App/>,
    document.querySelector('body')
);
