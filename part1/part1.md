#Part 1a:

1. 'values added: 20' is returned.
2. 'final result: 20' is returned.
3. 'values added: 20' is returned.
4. We get an error saying that we have a ReferenceError: 'result is not defined'. This happens due to the let keyword, our result variable is only accessible from within the if statement it was defined in and therefore when we try to call this result variable again directly outside of the if statement it is no longer in scope and so we get an error for it not being defined.
5. We get a TypeError due to 'Assignment to constant variable'. This happens due to the fact that our result variable is now a const type meaning it is a constant and can not be changed so when the program tries to change it, it throws the TypeError error.
6. Assuming that the error at line 7 is caught and we make it to line 13 we would run into the same error as question #4 where our result variable is out of scope. This happens because the const keyword also lives within the block scope just like the let keyword does. The exact error we would get is the ReferenceError: 'result is not defined' and as said prior this is due to result being out of scope when it is called here.
---

#Part 1b:
1. At line 12 the last stored value of variable i will be printed out to the console. In this case '3'. This happens due to the fact that the variable i is defined using the var keyword which puts its scope as the entire discountPrices function. 
2. At line 13 the last stored value of the variable discountedPrice will be printed out to the console. In this case it will be '150' since the value '300' is the last item in the prices array and as such the last thing to be calculated within the for loop starting at line 6. Similar to the variable i, variable discountedPrice was also defined using the var keyword and so it has a scope of the entire function which is why it is still accessible even though it was defined within the for loop.
3. At line 14 the last stored value of the variable finalPrice will be printed out to the console. In this case it will be '150'. Again just like the variables discounted and discountedPrice, finalPrice has a scope of the entire function due to being defined with the var keyword. finalPrice is meant to round up the discountedPrice value however since the values are only in whole dollars currently it is exactly the same value as discountedPrice. 
4. The entire function of discountPrices would return our discounted array. In this case '[50,100,150]' which is the finalPrice for each element of the passed in prices array. This array named discounted is also defined using the var keyword and as such its scope is the entire function just like the other variables. Due to this it is pushed to during each iteration of the for loop which adds each respective finalPrice after applying the discount to each passed in value from the prices paramater. 
5. 