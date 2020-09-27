import * as card from './cards';
import * as game from './game';
export type CardPair = {"faceup":card.Card["num"], "facedown":card.Card["num"]};

//ゲームの準備
const cardPair:CardPair = game.gamePreparation();
//勝敗の判定
game.getCardJudgment(cardPair);