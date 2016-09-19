import React from 'react';
import { withRouter } from 'react-router';

class NewGroup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: "",
      locationCity: "",
      locationState: "",
      img: "",
      upload: "Please upload a group photo",
      uploadClass: "group-field"
        };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToHome = this.navigateToHome.bind(this);
    this.upload = this.upload.bind(this);
  }

  navigateToHome() {
    this.props.router.push(`/`);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    const group = Object.assign({}, this.state);
    group.location = group.locationCity + ", " + group.locationState;
    delete group.locationCity;
    delete group.locationState;
    delete group.upload;
    delete group.uploadClass;
    this.props.createGroup({group}, this.props.currentUser);
    this.navigateToHome();
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(!error) {
        this.setState({img: results[0].url, upload: "Image uploaded successfully", uploadClass: "upload-success"});

      }
    });
  }


  render() {
    var divStyle = {
      backgroundImage: 'url(' + 'http://res.cloudinary.com/ashcon/image/upload/v1473282033/basketball-group-blur_yi5fks.jpg' + ')'
    };
    return (

        <div className="new-group-container">
          <div className="homepage">
            <p className="background-text-new">CRAFT YOUR SQUAD</p>
            <div className="wrapper-background-new mask" style={divStyle}></div>
          </div>
          <div className="new-group-form-div">
            <div className="new-group-form">
              <div className="group-form-center">
              <form className="group-form" onSubmit={this.handleSubmit}>

                <label className="group-field">What&#39;s your new Group&#39;s hometown?</label>
                <input type="text" value={this.state.locationCity}
                  onChange={this.update("locationCity")} className="group-field"/>

                <label className="group-field">Select state</label>
                  <select name="state" defaultValue="--State--" onChange={this.update("locationState")}>
                    <option disabled>--State--</option>
                  	<option defaultValue="AL">AL</option>
                  	<option defaultValue="AK">AK</option>
                  	<option defaultValue="AZ">AZ</option>
                  	<option defaultValue="AR">AR</option>
                  	<option defaultValue="CA">CA</option>
                  	<option defaultValue="CO">CO</option>
                  	<option defaultValue="CT">CT</option>
                  	<option defaultValue="DE">DE</option>
                  	<option defaultValue="DC">DC</option>
                  	<option defaultValue="FL">FL</option>
                  	<option defaultValue="GA">GA</option>
                  	<option defaultValue="HI">HI</option>
                  	<option defaultValue="ID">ID</option>
                  	<option defaultValue="IL">IL</option>
                  	<option defaultValue="IN">IN</option>
                  	<option defaultValue="IA">IA</option>
                  	<option defaultValue="KS">KS</option>
                  	<option defaultValue="KY">KY</option>
                  	<option defaultValue="LA">LA</option>
                  	<option defaultValue="ME">ME</option>
                  	<option defaultValue="MD">MD</option>
                  	<option defaultValue="MA">MA</option>
                  	<option defaultValue="MI">MI</option>
                  	<option defaultValue="MN">MN</option>
                  	<option defaultValue="MS">MS</option>
                  	<option defaultValue="MO">MO</option>
                  	<option defaultValue="MT">MT</option>
                  	<option defaultValue="NE">NE</option>
                  	<option defaultValue="NV">NV</option>
                  	<option defaultValue="NH">NH</option>
                  	<option defaultValue="NJ">NJ</option>
                  	<option defaultValue="NM">NM</option>
                  	<option defaultValue="NY">NY</option>
                  	<option defaultValue="NC">NC</option>
                  	<option defaultValue="ND">ND</option>
                  	<option defaultValue="OH">OH</option>
                  	<option defaultValue="OK">OK</option>
                  	<option defaultValue="OR">OR</option>
                  	<option defaultValue="PA">PA</option>
                  	<option defaultValue="RI">RI</option>
                  	<option defaultValue="SC">SC</option>
                  	<option defaultValue="SD">SD</option>
                  	<option defaultValue="TN">TN</option>
                  	<option defaultValue="TX">TX</option>
                  	<option defaultValue="UT">UT</option>
                  	<option defaultValue="VT">VT</option>
                  	<option defaultValue="VA">VA</option>
                  	<option defaultValue="WA">WA</option>
                  	<option defaultValue="WV">WV</option>
                  	<option defaultValue="WI">WI</option>
                  	<option defaultValue="WY">WY</option>
                  </select>


                <label className="group-field">What will your Group&#39;s name be?</label>
                <input type="text" value={this.state.name}
                  onChange={this.update("name")} className="group-field"/>

                <label className={this.state.uploadClass}>{this.state.upload}</label>
                <button className="img-upload" onClick={this.upload}>Upload image</button>

                <label className="group-field">Describe who should join, and what your Group will do.</label>
                <textarea onChange={this.update("description")}
                  className="group-field group-field-text">{this.state.description}</textarea>




                <div className="button-holder">
                  <input type="submit" value="Create Group" className="new-group-button"/>
                </div>

              </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default withRouter(NewGroup);
