import { connect } from "react-redux";

import ChatPage from "../components/ChatPage";
import { fetchAllChats, fetchMyChats, setActiveChat } from "../actions/chat";
import * as fromChats from "../reducers/chatReducer";

const mapStateToProps = state => ({
  chats: fromChats.getbyIds(state.chats, state.chats.allIds)
});

export default connect(
  mapStateToProps,
  { fetchAllChats, fetchMyChats, setActiveChat }
)(ChatPage);
