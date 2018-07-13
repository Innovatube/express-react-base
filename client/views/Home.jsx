import React, {Component} from 'react'
import UserRepository from '../repositories/UserRepository'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
    this.setRepository = this.setRepository.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.setRepository()
  }
  componentDidMount() {
    this.fetchData()
  }

  setRepository() {
    this.repository = new UserRepository()
  }

  async fetchData () {
    const data = await this.repository.index(0, 0, 'id', '', '', {})
    this.setState({
      ...this.state,
      users: data.data || []
    })
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td> Id </td>
              <td> Username </td>
              <td> Email </td>
            </tr>
          </thead>
          <tbody>
          {Array.isArray(this.state.users) && this.state.users.length > 0 && this.state.users.map(user => {
            return (
              <tr key={'user_' + user.id}>
                <td>{user.id}</td>
                <td>{user.first_name} {user.last_name}</td>
                <td>{user.email}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Home
