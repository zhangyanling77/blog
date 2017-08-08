import React, { Component } from 'react'
import ReactDom from "react-dom";
import App from './main.js'
import $ from 'expose-loader?$!jquery';
import '../node_modules/simditor/styles/simditor.scss';
require("./static//kindeditor/kindeditor-all.js")
require("./static/kindeditor/themes/default/default.css");
ReactDom.render( <App/>,
    document.querySelector('body')
);
