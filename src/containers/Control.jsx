import Control from '../components/Control';
import { connect } from 'react-redux';

export default connect(
  function(state) {
    var idtrue = false;
    if(state.mode === 'READ') {
      idtrue = true
    }
    return {
      idtrue
    }
  },
  function(dispatch) {
    return {
      onClick:function(mode) {
        if(mode === 'DELETE_PROCESS') {
          if(!window.confirm('Really?')) {
            return;
          }
        }
        dispatch({type:mode});
      }
    }
  }
)(Control)