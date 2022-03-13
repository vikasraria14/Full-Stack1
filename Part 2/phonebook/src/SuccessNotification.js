import './Notification.css'
const Notification = ({ message }) => {

   //console.log(message)
    
    if (message === null) {
      return null
    }

   
  
    return (
      <div className='success'>
        {message}
      </div>
    )
  }
  export default Notification;