import React, { Component } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-newsletter/dist/grapesjs-preset-newsletter.css';
import grapesjs from 'grapesjs';
import 'grapesjs-preset-newsletter';

class Container extends Component {
  componentDidMount() {
    var editor = grapesjs.init({
      container: '#gjs',
      // plugins: ['gjs-preset-newsletter']
      canvas: {
        scripts: ['https://uploadqa-tag.entribe.com/uploader_widget.js'],
      },
    });
    editor.BlockManager.add('my-first-block', {
      label: 'Simple block',
      media:
        'https://assets-global.website-files.com/62b1efd4882c3e4e50731768/62b20eaf026b9119e666075a_Entribe%20Logo%20Positive.svg',
      content: `<button id="widget_id_MC43NzkzMTY4OTY5MDM2ODk0" data-link-uploader="https://uploadqa.entribe.com/gallery" data-close-outside="1" onclick="widgetUploader.popup('widget_id_MC43NzkzMTY4OTY5MDM2ODk0')">Upload Here</button>`,
    });
  }
  render() {
    return <div id="gjs"></div>;
  }
}

export default Container;
