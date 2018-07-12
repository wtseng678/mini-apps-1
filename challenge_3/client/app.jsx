class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      name: '',
      email: '',
      password: '',
      line_1: '',
      line_2: '',
      city: '',
      state: '',
      zipcode: 0,
      ccn: 0,
      ed: '',
      cvv: 0,
      bz: 0
    };
    //this.handleChange = this.handleChange.bind(this); // similar for every other input
    this.submit = this.submit.bind(this);
  }
  
  // handleChange(event) {
  //   this.setState({name: event.target.value});
  // }
  
  submit() {
    // console.log("submitting " + JSON.stringify(this.state));
    $.ajax({
      url: "/", 
      type: "POST",
      data: JSON.stringify(this.state),
      success: function(result){
        console.log("posted");
      },
      error: function(data) {
        console.error("failed to post");
      }
    });    
  }
  
  
  render() {
    if (this.state.page === 0) {
      return (<button type="button" onClick={() => { this.setState({page: 1}) } }>Checkout</button>);
    } else if (this.state.page === 1) {
      return (
      <div>
        <form>
          Name:<input type="text" name={this.state.name} onChange={(event) => {this.setState({name: event.target.value})}}/><br/>
          Email:<input type="text" name={this.state.email} onChange={(event) => { this.setState({email: event.target.value})}}/><br/>
          Password:<input type="text" name={this.state.password} onChange={(event) => { this.setState({password: event.target.value})}}/><br/>
        </form>
        <button type="button" onClick={() => { this.setState({page: 2}) /*clear inputs*/ } }>Next</button> 
      </div>);
    } else if (this.state.page === 2) {
      return(
      <div>
        <form>
          Address Line 1:<input type="text" name={this.state.line_1} onChange={(event) => { this.setState({line_1: event.target.value})}}/><br/>
          Address Line 2:<input type="text" name={this.state.line_2} onChange={(event) => { this.setState({line_2: event.target.value})}}/><br/>
          City:<input type="text" name={this.state.city} onChange={(event) => { this.setState({city: event.target.value})}}/><br/>
          State:<input type="text" name={this.state.state} onChange={(event) => { this.setState({state: event.target.value})}}/><br/>
          Zipcode:<input type="text" name={this.state.zipcode} onChange={(event) => { this.setState({zipcode: event.target.value})}}/><br/>
        </form>
        <button type="button" onClick={() => { this.setState({page: 3}) /*clear inputs*/ } }>Next</button> 
      </div>);
    } else {
      return(
      <div>
        <form>
          Credit card number:<input type="text" name={this.state.ccn} onChange={(event) => { this.setState({ccn: event.target.value})}}/><br/>
          Expiry date:<input type="text" name={this.state.ed} onChange={(event) => { this.setState({ed: event.target.value})}}/><br/>
          CVV:<input type="text" name={this.state.cvv} onChange={(event) => { this.setState({cvv: event.target.value})}}/><br/>
          Billing zipcode:<input type="text" name={this.state.bz} onChange={(event) => { this.setState({bz: event.target.value})}}/><br/>
        </form>
        <button type="button" onClick={() => { this.setState({page: 0}); this.submit(); }}>Purchase</button>         
      </div>);
      // clear everything
    }
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));