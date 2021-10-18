1. 3, i is the counter of the loop which execute 3 times. Also, i's scope is function wise thus can be accessed by line 12.
2. 150, discountedPrice is the price after discount for the last item in the price list, which is 300 * 1/2 = 150. Also, discountedPrice's scope is function wise thus can be accessed by line 13.
3. 150, finalPrice is the rounded number for discountedPrice. Also, finalPrice's scope is function wise thus can be accessed by line 13.
4. [ 50, 100, 150 ], this is the array of rounded discounted price, accquinted by 100/2, 200/2, 300/2.
5. Error, i can only be accessed in the loop scope since it is assigned by let.
6. Error, discountedPrice can only be accessed in the loop scope since it is assigned by let.
7. 150, dinalPrice is defined by a let in the scope of this function, so it can be accessed in line 14.
8. [ 50, 100, 150 ], discounted is an array defined by let in the function scope, thus it can be accessed and the result should be the same as question 4.
9. Error, i cannot be accessed out of the loop since it is defined with const in the loop's scope.
10. 3, length is defined in the function scope thus can be accessed in line 12. 3 comes from the input array's length.
11. [ 50, 100, 150 ], which is the price after discount. discounted can be access in line 14 since it is defined in the fuction scope.
12. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseload[0]
13. A. '32', 2 is converted into string '2'.
    B. 1, '3' is converted into int 3.
    C. 3, null is converted into 0.
    D. '3null' null is converted into string 'null'.
    E. 4, true is converted to the int 1.
    F. 0, false and null are both converted to the int 0.
    G. '3undefined', undefined is converted to the string 'undefined'.
    H. NaN, with the minus operation, they need to convert to a common type except string but is it not possible. Undefined is converted into NaN.
14. A. true. '2' will be converted into 2 and 2 > 1.
    B. false. strings are compared letter by letter, '2' > '1'.
    C. true. '2' becomes 2, 2 == 2.
    D. false. different types will return false under a strict equality check.
    E. false. false will becomes 0, 0 != 2
    F. true. 2 >= 1 so Boolean(2) will return true. true === true.
15. == compare values after conversion if there are possible conversions. === mean strict equality check that compare if both variable have the same type and value.
16. see part2-question16.js
17. [2, 4, 6]. What the callback function does is to return the input number * 2. The loop is passing the array as input to the callback function. So, the element will be double and stored into newArr, leading to a result [2, 4, 6].
18. see part2-question18.js
19. 1
    4
    3
    2