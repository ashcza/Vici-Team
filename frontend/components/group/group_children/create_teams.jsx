import React from 'react';
import {RadioGroup, Radio} from 'react-radio-group';

class CreateTeams extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.setDefaultState = this.setDefaultState.bind(this);
    this.state = {
      textButton: "",
      textContent: "Text Teams"
    };
    this.textTeams = this.textTeams.bind(this);
  }

  componentDidMount() {
    this.props.requestSingleEvent(this.props.groupId);
  }

  handleChange(userId, e) {
    this.props.updateRsvp(userId, this.props.groupId, this.props.event.id, e.target.value);
  }

  textTeams() {
    const newState = {
    textButton: "teams-texted",
    textContent: "Texts Sent!"
    };
    this.setState(newState);
    if (this.props.currentUser.id !== 2) {
      this.props.textTeamColors(this.props.event.id);
      console.log("teams texted");
    }
    setTimeout(this.setDefaultState, 2500);
  }

  setDefaultState() {
    const oldState = {
    textButton: "",
    textContent: "Text Teams"
    };
    this.setState(oldState);
    // this.setState(oldState);
  }

render () {
  if (this.props.event) {
    let rsvpList = this.props.event.rsvp;
    if (this.props.groups[Object.keys(this.props.groups)[0]].organizer_id !== this.props.currentUser.id) {
      this.memberKeys = [];
      this.state.textButton = "hide-texting";
    } else {
      this.memberKeys = Object.keys(this.props.event.rsvp);
    }
    let blackTeam = [];
    let whiteTeam = [];
    let redTeam = [];
    for(let i = 0; i < Object.keys(this.props.event.rsvp).length; i++) {
      if (rsvpList[i][2] === "white") {
        whiteTeam.push(rsvpList[i][1]);
      } else if (rsvpList[i][2] === "black") {
        blackTeam.push(rsvpList[i][1]);
      } else if (rsvpList[i][2] === "red") {
        redTeam.push(rsvpList[i][1]);
      }
    }

    return (
      <div>
        <div className="team-selection-title">
          <div className="team-selection-title-item">{this.props.event.date}</div>
          <div className="team-selection-title-item">{this.props.event.title}</div>
          <div className="team-selection-title-item">{this.props.event.rsvp.length} attending</div>
        </div>

        <div className="team-list-page">
          <div className="create-team-list" key="woop">
            {

              this.memberKeys.map( key => (
              <div key={key} name={key} className="team-list-item">
                <div>{this.props.event.rsvp[key][1]}</div>
                <form>
                  <RadioGroup name="players" selectedValue={this.props.event.rsvp[key][2]}>
                    <Radio value="black" name={key} onChange={this.handleChange.bind(null, this.props.event.rsvp[key][0])} />Black
                    <Radio value="white" name={key} className="color-choice" onChange={this.handleChange.bind(null, this.props.event.rsvp[key][0])}/>White
                    <Radio value="red" name={key} className="color-choice" onChange={this.handleChange.bind(null, this.props.event.rsvp[key][0])}/>Red
                  </RadioGroup>
                </form>
              </div>
              ))
            }

          </div>
          <div className="right-team-list">
            <div className="team-title">White Team</div>
            <div className="team-names">
              {
                whiteTeam.map( (player, idx) => {
                  return (
                  <div className="player-names-team" key={player}>
                    {idx + 1}. {player}
                  </div>
                );})
              }
            </div>

            <div className="team-title">Black Team</div>
            <div className="team-names">
              {
                blackTeam.map( (player, idx) => {
                  return (
                  <div className="player-names-team" key={player}>
                    {idx + 1}. {player}
                  </div>
                );})
              }
            </div>

            <div className="team-title">Red Team</div>
            <div className="team-names">
              {
                redTeam.map( (player, idx) => {
                  return (
                  <div className="player-names-team" key={player}>
                    {idx + 1}. {player}
                  </div>
                );})
              }
            </div>

          </div>
        </div>
        <button className={`text-colors-button ${this.state.textButton}` }
          onClick={this.textTeams}>{this.state.textContent}</button>
      </div>
    );
  } else {
return (
  <div className="group-members-list">

  </div>
  );
  }
}
}

export default CreateTeams;
