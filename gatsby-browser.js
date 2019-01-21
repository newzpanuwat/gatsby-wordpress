export const onServiceWorkerUpdateFound = () => {
    const showNotification = () => {
        Notification.requestPermission(result => {
            if (result === 'granted') {
                navigator.serviceWorker.ready.then(registration => {
                    registration.showNotification('SPARK', {
                        body: 'New content is available!',
                        icon: 'link-to-your-icon',
                        vibrate: [200, 100, 200, 100, 200, 100, 400],
                        tag: 'request',
                        actions: [ // you can customize these actions as you like
                            {
                                action: null, // you should define this
                                title: 'reply'
                            },
                            {
                                action: null, // you should define this
                                title: 'ignore'
                            }
                        ]
                    })
                })
            }
        })
    }

    const answer = window.confirm(
        `This application has been updated. ` +
        `Reload to display the latest version?`
    )
    if (answer === true) {
        window.location.reload()
    }

    showNotification()
}