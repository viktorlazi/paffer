pragma solidity >=0.4.22 <0.9.0;

contract Paffer{
  string public name = "Paffer";
  uint public paffCount = 0;
  
  struct Paff{
    uint id;
    string hash;
    string content;
    uint tipAmount;
    uint256 date;
    address payable author;
  }
  mapping (uint => Paff) public paffs;

  event PaffCreated(
    uint id,
    string hash,
    string content,
    uint tipAmount,
    uint256 date,  
    address payable author
  );
  event PaffTipped(
    uint id,
    string hash,
    string content,
    uint tipAmount,
    address payable author
  );

  function uploadPaff(string memory _paffHash, string memory _content) public{
    require(bytes(_content).length > 0);
    require(bytes(_paffHash).length > 0);
    require(msg.sender != address(0x0));

    paffCount++;
    paffs[paffCount] = Paff(paffCount, _paffHash, _content, 0, block.timestamp, msg.sender);
    emit PaffCreated(paffCount, _paffHash, _content, 0, block.timestamp, msg.sender);
  }

  function tipPaffOwner(uint _id) public payable{
    require(_id > 0 && _id <= paffCount);

    Paff memory _paff = paffs[_id];
    address payable _author = _paff.author;
    _author.transfer(msg.value);
    _paff.tipAmount = _paff.tipAmount + msg.value;    
    paffs[_id] = _paff;
    
    emit PaffTipped(_id, _paff.hash, _paff.content, _paff.tipAmount, _author);
  }
}


