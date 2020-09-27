import * as deck from './deck';
import * as card from './cards';

//ゲームの準備
const cardPair:{} = deck.gamePreparation();
//勝敗の判定
card.getCardJudgment(cardPair);