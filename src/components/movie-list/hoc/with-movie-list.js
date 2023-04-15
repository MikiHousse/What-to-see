import { connect } from "react-redux";
import { storeOffers } from "../../../redux/actions";
import { getSelectedFilms, getFilms } from "../../../redux/selectors";

const mapStateToProps = (state) => {
  return {
    items: getFilms(state),
    selectedFilm: getSelectedFilms(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange(item) {
      dispatch(storeOffers(item))}
  }
}



export default connect(mapStateToProps,mapDispatchToProps)
