import { ApolloClient } from 'apollo-client'
import gql from 'graphql-tag'
import * as React from 'react'
import { withApollo,  } from 'react-apollo'
import { Login } from './Login'
import { compose } from 'recompose';
import { withRouter, WithRouterProps } from 'next/router';
import { AUTH_TOKEN } from '~/lib/constants/constants';
import { LoginMutation } from './__generated__/LoginMutation';

interface Props extends WithRouterProps{
  client: ApolloClient<any>,
}

interface State {
  email: string,
  password: string,
  value: number
}

class Index extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      email: '',
      password: '',
      value: 0
    }
    this.setPassword.bind(this)
    this.setEmail.bind(this)
    this.login.bind(this)
  }


  public setPassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      password: event.target.value
    })
  }

  public setEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      email: event.target.value
    })
  }

  public login = async () => {
    const { email, password} = this.state
    try {
      const result = await this.props.client.mutate<LoginMutation>({
        errorPolicy: "all",
        mutation: LOGIN_MUTATION,
        variables: {
          email,
          password,
        },
      })
      console.log(result)
      if(result.errors) {
        alert(result.errors[0].message)
      }
      const { token } = result.data ? result.data.login : console.log('no data in result found')
      await this.props.client.resetStore()
      this.saveUserData(token)
      this.props.router.push('/admin')
    } catch (e) {
      console.log('caught ' + e)
    }
  }

  public saveUserData = (token: string): void => {
    localStorage.setItem(AUTH_TOKEN, token)
  }

  public render() {
    return(
      <Login
        setPassword={this.setPassword}
        setEmail={this.setEmail}
        login={this.login}
      />
    )
  }
}


const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`
const enhance = compose(
  withApollo,
  withRouter
)

const EnhancedComponent = enhance(Index)

export default EnhancedComponent
