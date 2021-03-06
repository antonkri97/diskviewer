import { connect }       from 'react-redux';
import Disk              from '../components/Disk';
import { getResources }  from '../actions/disk';
import { clearUserData } from '../actions/auth';
import { push }          from 'react-router-redux';

const mapStateToProps = (state) => ({
  items: state.disk.resources !== null ? state.disk.resources._embedded.items : [],
  path: state.routing.locationBeforeTransitions.pathname.substr(1).split('/')
});

const mapDispatchToProps = (dispatch) => ({
  onInitialLoad: (path) => dispatch(getResources(path)),
  onLogout: () => {
    dispatch(clearUserData())
    dispatch(push('/'))
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, stateProps, dispatchProps, ownProps, {
    items: stateProps.items.map(item => Object.assign(item, {
      onGetResources: () => dispatchProps.onInitialLoad(item.path)
    })),
    history: stateProps.path
      .reduce((acc, curr) => {
        if (acc.length === 0) {
          return acc.concat(`${curr}:`);
        }

        return acc.concat(`${acc[acc.length - 1] || ''}/${curr}`)
      }, [])
      .map((h, i) => () => i === 0 ? dispatchProps.onInitialLoad('/') : dispatchProps.onInitialLoad(h))
  });
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Disk);
