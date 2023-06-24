import numpy

a=  numpy.arange(1,7)
print(a)
print(a.shape)
b = a.reshape(2,3)
print(b)
print(b.shape)

bb= a[:,numpy.newaxis]
print(bb)
print(bb.shape)




The result
******************

  [1 2 3 4 5 6]
(6,)
[[1 2 3]
 [4 5 6]]
(2, 3)
[[1 2 3 4 5 6]]
(1, 6)












