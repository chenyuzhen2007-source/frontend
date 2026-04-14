import GameGlobalAPI from '../../scenes/gameManager/GameGlobalAPI';
import GameModeTalk from './GameModeTalk';

class TopicListManager {
  public generateTopicList() {
    console.log("called");
    console.log(GameGlobalAPI.getInstance().getGameManager().talkToggled);
    if (! GameGlobalAPI.getInstance().getGameManager().talkToggled) {
      new GameModeTalk().activateUI();
    }
  }
}

export default TopicListManager;
