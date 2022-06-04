// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Storage {


    // Properties
    int private numeroDev;


    // Constructor
    constructor() { }


    // Public Functions
    function get() public view returns (int) {
        return numeroDev;
    }

    function store(int num) public {
        numeroDev = num;
    }


}
