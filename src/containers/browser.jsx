import React, {Component} from 'react';
import {
  Alert,
  Container,
  Row,
  Col,
  Label,
  NavItem,
  Nav,
  Badge
} from 'reactstrap';

class Alerts extends Component {

  render() {

    const browserMockPurple = (<div class="browser-mockup _gradient-purple">
      <pre><code className="language-css">{`p { content: 'code' }`}</code></pre>
    </div>)

    const browserMockPurpleDark = (<div class="browser-mockup _gradient-purple-dark">
      <pre><code className="language-css">{`p { content: 'code' }`}</code></pre>
    </div>)

    return (<div>
      <div className="_black section-padding">
        <Container>
          {browserMockPurple}
        </Container>
      </div>
      <div className="_gray-100 section-padding">
        <Container>
          {browserMockPurpleDark}
        </Container>
      </div>
    </div>);
  }
}

export default Alerts;
