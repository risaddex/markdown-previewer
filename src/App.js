import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import marked from 'marked';
import 'bootstrap/dist/css/bootstrap.css';

const placeholder = `# freeCodeCamp markdown-previewer

## necessary h2 element.

code => \`<div></div>\` use (bar + backticks) for inline code

\`\`\`
//multi-line code:
function FCCComponent() {
  const usedVersion = 'React 14x'
  return (
    <>
      I was made using {usedVersion}
    </>
  );
}
\`\`\`

To make text **bold** put the text between two **

That's an exemple link from my [github](https://github.com/risaddex/)

> Blockquotes! are made by adding in front of it!

- To make lists in order,
- you must put a "-" in front of it, 
- this generates "bullet" type lists

1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![I'm learning React!](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png)
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: placeholder,
    }
    
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleKeyPress(event){
    this.setState({
      text: event.target.value
    })
  }
  render() {
    return(
      <div className="container">
        {/*editor*/}
        <div className="row ">
          <div className="col-md-6">
            <div className="area">editor</div>
            <textarea
              onChange={this.handleKeyPress} 
              id="editor"
              className="default-area"
              value={this.state.text}
            />
          </div>
          <div className="col-md-6">
            <div className="area">previewer</div>
            <Previewer text={marked(this.state.text)} />
          </div>
        </div>
      </div>
    );
  }
}

function Previewer(props) {
  const useState = (props.text)
  
  return (
        <>
          <div
            className="default-area"
            dangerouslySetInnerHTML={{__html: useState}}
          />
        </>
  );
}

ReactDOM.render(<App /> , document.getElementById('app'));

export default App;
