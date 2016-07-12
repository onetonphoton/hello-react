var GreeterMessage = React.createClass({
  render:  function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
      <h1>Hello {name}</h1>
      <p>{message + '!!'}</p>
      </div>
    )
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    var updates = {};
    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }
    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }
    this.props.onNewData(updates);

  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
      <input type="text" ref="name"/>
      <textarea ref="message" placeholder="Enter message"></textarea>
      <button>Set Name</button>
      </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'Default message'
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewData: function (updates) {
    this.setState(updates);
  },
  render: function() {
    var name = this.state.name;
    var message = this.state.message;
    return(
      <div>
        <GreeterMessage name={name} message={message}/>

        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

var firstName = 'David';
var myMessage = 'Yo yo yo';
ReactDOM.render(
  <Greeter name={firstName} message={myMessage}/>,
  document.getElementById('app')
);
