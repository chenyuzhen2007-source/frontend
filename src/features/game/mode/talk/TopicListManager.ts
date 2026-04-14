import GameGlobalAPI from '../../scenes/gameManager/GameGlobalAPI';
import GameModeTalk from './GameModeTalk';

class TopicListManager {
  public generateTopicList() {
    if (!GameGlobalAPI.getInstance().getGameManager().talkToggled) {
      new GameModeTalk().activateUI();
    }
  }
}

export default TopicListManager;
