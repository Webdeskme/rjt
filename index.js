$(document).ready(function(){
const remote = require('electron').remote;
const {shell} = require('electron');
const wd_homedir = require('os').homedir();
var wd_home = wd_homedir + '/Documents/wdOS/App/';
const fs = require('fs-extra')
var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
var result = md.render('# markdown-it rulezz!');
});
