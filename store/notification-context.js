import { createContext, useState } from 'react';

const NotificationContext = createContext({
    notification: null, //{title,message,status}
    showNotification: function () { },
    hideNotification: function () { }
})

function NotificationContextProvider(props) {
    return (
        <NotificationContextProvider>
            {props.children}
        </NotificationContextProvider>)
}


export default NotificationContext