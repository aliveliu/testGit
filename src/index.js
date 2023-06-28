import ReactDOM from 'react-dom/client'
// import App from './App'
// import App from './插槽的实现/App'
// import App from './App_function'
import App from './_CSS_IN_JS/App'
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)

//es6标签模板字符串
function foo(...args) {
  console.log(args)
}
debugger
const name = 'zoog'
const age = 23

foo`my name is${name},my age is ${age}`
