/*jshint esversion: 6 */
import React from 'react';
import {render} from 'react-dom';
import AppKanban from './components/AppKanban';
import './css/style.css';
import './css/peel-off.css';
import './css/sticky-notes.css';

render(<AppKanban />, document.querySelector("#main"));
