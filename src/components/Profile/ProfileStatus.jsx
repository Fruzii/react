import React, { useEffect, useState } from 'react';

const ProfileStatus = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)
  // let editMode = stateWithSetState[0]
  // let setEditMode = stateWithSetState[1]

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  const enableEditMode = () => setEditMode(true)
  const disableEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  return <div>
    {editMode
      ? <div className='profile__status' onBlur={disableEditMode}>
        <input autoFocus={true} type="text" onChange={onStatusChange} value={status}/>
      </div>
      : <div className='profile__status' onDoubleClick={enableEditMode}>
        <span>{props.status ? props.status : 'change status'}</span>
      </div>
    }
  </div>
}

export default ProfileStatus