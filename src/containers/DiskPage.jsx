import { connect } from 'react-redux';
import Disk from '../components/Disk';
import { getResources } from '../actions/disk';

const mapStateToProps = (state) => ({
  totalSize: 1000,
  available: 1000,
  items: state.disk.resources !== null ? state.disk.resources._embedded.items : []
});

const mapDispatchToProps = (dispatch) => ({
  onInitialLoad: (path) => dispatch(getResources(path))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, stateProps, dispatchProps, ownProps, {
    items: stateProps.items.map(item => Object.assign(item, {
      onGetResources: () => dispatchProps.onInitialLoad(item.path)
    }))
  });
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Disk);
