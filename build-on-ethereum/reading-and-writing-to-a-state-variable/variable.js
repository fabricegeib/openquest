uint public num;

function get() public view returns (uint) {
    return num;
}

function set(uint _num) public {
    num = _num;
}