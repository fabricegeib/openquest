# Reading and writing a State Variable
Beginner Level

## Introduction
Let's first create a state variable named `num`.

```
uint public num;
```

We saw earlier saw that each function call is a new transaction. Every transaction has a transaction fees. To write or update a state variable you need to send a transaction & pay the fees.

On the other hand, you can read state variables, for free, without any transaction fee.

## Reading a state variable
Let's write a function to read the state variable `num`

```
function get() public view returns (uint) {
    return num;
}
```

If you try and call this function, you will see that the balance of the account before the call and after the call is the same. Hence, no transaction fees are paid for reading a state variable. You tell the compiler that this function doesn't modify the state variables by using the modifier "view" to the signature of the function.

## Writing a state variable

Let's write a function to update a state variable `num`.

```
function set(uint _num) public {
    num = _num;
}
```

Now go on and call this with an unsigned int parameter, you will see that the balance of the account after the call is slightly less than before the call in the output logs. Hence, a transaction fee is paid for writing a state variable. Since this function is changing the state variable num , it can't have the modifier view. So whenever we call this function, we must pay some eth!