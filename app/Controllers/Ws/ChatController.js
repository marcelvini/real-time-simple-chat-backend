'use strict'

class ChatController {
  constructor({ socket, request }) {
    this.socket = socket
    this.request = request
  }
  onMessage(data) {
    data.id = this.socket.id
    this.socket.broadcastToAll('message', data)


  }
}

module.exports = ChatController
