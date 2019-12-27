'use strict'

class ChatController {
  constructor({ socket, request, auth }) {
    this.socket = socket
    this.request = request
    this.auth = auth
  }
  onMessage(data) {
    data.id = this.socket.id
    data.user = this.auth.user
    this.socket.broadcastToAll('message', data)


  }
}

module.exports = ChatController
