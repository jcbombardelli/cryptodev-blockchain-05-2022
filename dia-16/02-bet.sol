// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Bet {

    //Structs
    struct Player{
        uint256 amountBet;
        uint256 numberSelected;
    }

    // Properties
    address public owner;
    address[] public players; //Apostadores
    uint256 public totalBet; //Total Apostado
    uint256 public minimunBet;
    uint256 public maxBet;
    uint256 public maxAmountBet = 2;

    mapping(address => Player) addressToPlayer;

    // Enum
    // ACTIVE, PAUSED, CANCELLED

    // Modifiers
    modifier isOwner() {
        require(msg.sender == owner , "Sender is not owner!");
        _;
    }

    // Events

    // Constructor
    constructor (uint256 minimunBetValue) {
        owner = msg.sender;
        if(minimunBetValue != 0) {
            minimunBet = minimunBetValue;
        }

    }

    /// Public Functions
    function bet(uint256 numberSelected) public payable {
        uint256 valueBet = msg.value;
        address playerBet = msg.sender;


        // Criado o Player e atribuido já dentro do mapping
        addressToPlayer[playerBet].numberSelected = numberSelected;
        addressToPlayer[playerBet].amountBet = valueBet;

        totalBet++;
        players.push(playerBet);

    }

    function reset() public isOwner {
        delete players;
        totalBet = 0;       
    }


    // Private Functions
    function generateWinnerNumber() private {
        uint256 numberPrize = (block.number + block.timestamp) % 10 + 1;
        rewardWinner(uint256(numberPrize));
    }

    function rewardWinner(uint256 numberPrizeGenerated) private {
        address[] memory winners; // Lista dos vencedores que selecionaram o numero correto
        uint256 count = 0;
        for(uint256 i = 0; i < players.length; i++){
            address playerAddress = players[i]; // 0 -> "0x1234acf"
            if(addressToPlayer[playerAddress].numberSelected == numberPrizeGenerated){
                winners[count] = playerAddress;
                count++;
            }
        }

        //Limpar os apostadores (opcional)

        uint256  winnerEtherAmount = totalBet/count;
        for(uint256 j = 0; j < count; j++) {
            address payable payTo = payable(winners[j]);
            if(payTo != address(0)) {  //"0x000000000000000000000000000000"
                payTo.transfer(winnerEtherAmount);
            }
        }
    }
}