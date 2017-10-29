import selectedCardsSelector from '../Selectors/selectedCardsSelector';
import { Card } from '../dto';
import { selectCard } from '../Reducers/CardBoardReducer';
import * as React from 'react';
import { connect, Dispatch } from "react-redux";
import { CardBoard, State } from '../state';
import CardComponent from './card';

interface StateProps {
  cards:Card[];
  selectedCards:Card[];
}

interface DispatchProps {
  selectCard:(cardId:number) => void;
}

type Props = StateProps & DispatchProps

function mapStateToProps(state: State): StateProps {
  return {
    cards: state.cardBoard.cards,
    selectedCards: selectedCardsSelector(state)
  };
}
function mapDispatchToProps(dispatch: Dispatch<State>): DispatchProps {
  return {
    selectCard: cardId => dispatch(selectCard(cardId))
  };
}
class CardBoadrd extends React.Component<Props, {}> {
  render(){
    return (
      <div className="card-board">
        {this.props.cards.length > 0 ?
          this.props.cards.map(card => <CardComponent key={card.id} card={card} selectCard={this.props.selectCard.bind(this)}/>) 
          : <h1>no cards</h1>
        }
        {this.props.selectedCards.length > 0 ?
          this.props.selectedCards.map(card => <CardComponent key={card.id} card={card} selectCard={this.props.selectCard.bind(this)}/>) 
          : <h1>no selected Cards</h1>
        }
      </div>
    );
  }
};
export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(CardBoadrd);