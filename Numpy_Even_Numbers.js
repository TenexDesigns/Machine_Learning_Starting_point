import numpy 



a=numpy.array( [1,2,3,4,5,6,
               7,8,9,10,11,12])




een = numpy.argwhere(a%2==0).flatten()
print(a[een])
