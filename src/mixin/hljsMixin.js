import marked from "marked";
import hljs from "highlight.js";
// import {filterXSS} from 'xss'

import('highlight.js/styles/solarized-light.css');

export default {
  data() {
    return {
      content: "",
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.content)
    }
  },
  mounted() {
    const renderer = new marked.Renderer()
    marked.setOptions({
      renderer: renderer,
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    hljs.initHighlightingOnLoad();
  },

}