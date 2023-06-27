
Broad_Casting

-->Allows numpy to work with arrays of diffferent shapes  when performing arithmetic operations




import numpy



x = numpy.array([[1,2,3],[4,5,6],[1,2,3],[4,5,6]])
a = numpy.array([1,0,1])                            // Thsi adds this to all the items in the x array

//a = numpy.array([1,0,1],[1,0,1],[1,0,1], [1,0,1])  - Not Good as it is loong

c = x +a
print(c)



  The result is
***********************************

[[2 2 4]
 [5 5 7]
 [2 2 4]
 [5 5 7]]







