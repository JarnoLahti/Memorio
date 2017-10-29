module.exports = {
    addCards(cards){
        return {
            type:"ADD_CARDS",
            payload:cards
        }
    },
    selectCard(cardId){
        return {
            type:"SELECTED_CARD",
            payload:cardId
        }
    }
}