import { connect } from "react-redux";

import { getSelectedGenre, getGenre } from "../../../redux/selectors";
import { selectGenre } from "../../../redux/actions";

const mapStateToProps = (state) => {
  return {
    items: getGenre(state),
    selectedItem: getSelectedGenre(state),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick(item) {
      dispatch(selectGenre(item));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)
