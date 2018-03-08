
//first Commit = this test plus adding the game logic folder og ship_methods.js file

var expect = require("chai").expect;

describe("checkForShip", function () {
  var checkForShip = require("../game_logic/ship_methods").checkForShip;
  it(" should correctly report no ship at a given players coordinate", function () {

  player = {
	   ships: [
    	{
    		locations:[[0, 0]]
    	}
    ]
  };
    expect(checkForShip(player, [9,9])).to.be.false;
  });

  it(" should correctly report no ship at a given players coordinate", function () {

    player = {
       ships: [
        {
          locations:[[0, 0]]
        }
      ]
    };
      expect(checkForShip(player, [0,0])).to.be.true;
    });

    it("should should handle ships located at more then one coordinate", function () {

      player = {
         ships: [
          {
            locations:[[0, 0],[0, 1]]
          }
        ]
      };
        expect(checkForShip(player, [0,1])).to.be.true;
        expect(checkForShip(player, [0,0])).to.be.true;
        expect(checkForShip(player, [9,9])).to.be.false;
      });
});
