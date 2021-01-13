import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  enableEditMode = () => {
    this.setState({editMode: true})
  }

  disableEditMode = () => {
    this.setState({editMode: false})
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({status: e.currentTarget.value})
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.status !== prevState.status) {
      this.setState({status: this.state.status})
    }
  }

  render() {
    return <div>
      {this.state.editMode
        ? <div className='profile__status' onBlur={this.disableEditMode}>
          <input autoFocus={true} onChange={this.onStatusChange} type="text" value={this.state.status} />
        </div>
        : <div className='profile__status' onDoubleClick={this.enableEditMode}>
          <span>{this.props.status ? this.props.status : 'change status'}</span>
        </div>
      }


    </div>
  }
}

export default ProfileStatus