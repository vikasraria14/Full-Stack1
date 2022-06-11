const Notification = ({message,name}) =>
{
    if(message===null)
    {
        return null
    }
    return(
        <h1 className={name}>{message}</h1>
    )
}

export default Notification;