// import io from 'socket.io-client';
// import Socket from '../socket/socket'

// let host = "127.0.0.1:3000"
// let socket = io.connect(host)
// socket.on('connect', function(data){
//   console.log("connected with server")
//   window.socket = new Socket(socket)
// })

export default {
  namespace: 'global',
  state: {
    // socket: {
    //   socket: socket,
    //   serverName: "Default",
    //   host: host,
    // },
    timezone:'',
    currency:'USD',
  },
  reducers: {
    // relayChange(state, { payload }) {
    //   if(socket){
    //     console.log("close old connection...")
    //     socket.close()
    //   }
    //   socket = io.connect(payload.host)
    //   window.socket = new Socket(socket)
    //   return {
    //     ...state,
    //     socket: {
    //       socket: socket,
    //       serverName: payload.serverName,
    //       host: payload.host,
    //     }
    //   };
    // },
    currencyChange(state, { payload }) {
      localStorage.currency = payload.currency
      return {
        ...state,
        currency: payload.currency
      }
    },
    timezoneChange(state,{payload}){
      
    },
    tradingChange(state,{payload}){
      return {
        ...state,
      }
    },
    addRelay(state,{payload}){
      // TODO
      return {
        ...state
        // TODO
      }
    },
    editRelay(state,{payload}){
      // TODO
      return {
        ...state
        // TODO
      }
    },
    deleteRelay(state,{payload}){
      // TODO
      return {
        ...state
        // TODO
      }
    },
    relayChange(state,{payload}){
      // TODO
      return {
        ...state
        // TODO
      }
    },
  },
};
