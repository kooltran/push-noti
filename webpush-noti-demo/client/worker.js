console.log('service workder loaded')

self.addEventListener('push', e => {
  const data = e.data.json()
  console.log('Push Recieved...')
  self.registration.showNotification(data.title, {
    body: 'Notified by kool',
    icon:
      'https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg',
  })
})
