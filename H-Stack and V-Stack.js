import numpy



a= numpy.array([1,2,3,4,5])
b= numpy.array([6,7,8,9,10])

#H-Stack

c = numpy.hstack((a,b))
print(c)


Result
**********************

  [ 1  2  3  4  5  6  7  8  9 10]




V-Stack
----------------------------------------------------------------------

import numpy



a= numpy.array([1,2,3,4,5])
b= numpy.array([6,7,8,9,10])

#V-Stack

c = numpy.vstack((a,b))
print(c)



  Result
  *****************
[[ 1  2  3  4  5]
 [ 6  7  8  9 10]]






....
