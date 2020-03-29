import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchData } from './reducers/actions'


const styles = {
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  }
}

function App(props) {

  let btnHandler = e => {
    console.log('btnkHandler');
    props.fetchData();
  }

  return (
    <div className="App">
      <div style={styles.container}>
        <p style={styles.text}>Redux Examples</p>
        <div>
        {
          props.appData.isFetching && <strong>Loading</strong>
        }
        {
          props.appData.data.length ? (
            props.appData.data.map((person, i) => {
              return <div key={i} >
                <div>Name: {person.name}</div>
                <div>Age: {person.age}</div>
              </div>
            })
          ) : null
        }
        </div>
        <div onClick={btnHandler} style={styles.button}>
          <p style={styles.buttonText}>Load Data</p>
        </div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
