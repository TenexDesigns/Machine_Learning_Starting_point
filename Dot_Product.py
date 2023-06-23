import numpy 


#The Arrrays
l1 = numpy.array([3,2,3])
l2 = numpy.array([4,5,6])



# What Happens for dot product
dot =0
for i in range(len(l1)):
   dot+= l1[i] * l2[i]
   print(dot)

#Method 1
dot = numpy.dot(l1,l2)
print(dot)


#Method 2
sum1 = l1  *l2
dot2 = sum1.sum()
print(dot2)

#Method 3

dot3 = l1 @ l2
print(dot3)
  






















