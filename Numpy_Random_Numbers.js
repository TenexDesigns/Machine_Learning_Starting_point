NumPy provides various functions for generating random numbers with different distributions.
  These functions are part of the numpy.random module. Here are some commonly used functions for generating random numbers in NumPy:

np.random.random(): This function generates random numbers from a continuous uniform distribution between 0 and 1.
python
Copy code
import numpy as np

random_number = np.random.random()
print(random_number)
Output:

Copy code
0.7293191712211703
np.random.rand(): It generates an array of random numbers from a continuous uniform distribution between 0 and 1 with a specified shape.
python
Copy code
import numpy as np

random_array = np.random.rand(3, 2)
print(random_array)
Output:

lua
Copy code
[[0.26366351 0.54148909]
 [0.9254235  0.3415566 ]
 [0.27220292 0.59954873]]
np.random.randint(): It generates random integers from a discrete uniform distribution within a specified range.
python
Copy code
import numpy as np

random_integer = np.random.randint(1, 10)
print(random_integer)
Output:

Copy code
6
np.random.randn(): This function generates an array of random numbers from a standard normal distribution (mean 0, standard deviation 1).
python
Copy code
import numpy as np

random_array = np.random.randn(2, 3)
print(random_array)
Output:

lua
Copy code
[[ 0.64352396 -0.11487698 -0.66261872]
 [-0.75519371 -0.80345968 -1.23611418]]
np.random.normal(): It generates random numbers from a normal (Gaussian) distribution with a specified mean and standard deviation.
python
Copy code
import numpy as np

random_array = np.random.normal(0, 1, (3, 4))
print(random_array)
Output:

lua
Copy code
[[ 0.33616204 -1.57724413  1.16756217 -0.31264069]
 [ 1.20652713  0.59947744  0.04925361 -0.20147471]
 [ 0.36637297 -0.32526562 -1.33703618 -1.12526845]]
These are just a few examples of functions to generate random numbers in NumPy. NumPy provides many more functions,
  including those for generating random samples from different distributions, shuffling arrays, and generating random permutations. 
  You can refer to the NumPy documentation for more details: https://numpy.org/doc/

Random number generation is often used in various applications, such as simulations, statistical analysis,
  and machine learning, to introduce randomness and variability in the data and algorithms.






MORE EXPLANANNTION
*************************************************************************


In NumPy, the numpy.random module provides various functions to generate random numbers. Here are some examples:

Generate a random integer: You can use the numpy.random.randint() function to generate a random integer within a specified range.
import numpy as np

random_integer = np.random.randint(100)  # Generates a random integer between 0 and 99
print(random_integer)
Generate a random float: The numpy.random.rand() function generates a random float between 0 and 1.
import numpy as np

random_float = np.random.rand()
print(random_float)
Generate an array of random floats: You can also generate an array of random floats using numpy.random.rand() by specifying the desired array shape.
import numpy as np

random_float_array = np.random.rand(5)  # Generates an array of 5 random floats between 0 and 1
print(random_float_array)
Generate a 2-D array of random integers: The numpy.random.choice() function allows you to generate a 2-D array with random
  integers chosen from a list of specified values.
import numpy as np

random_2d_array = np.random.choice([3, 5, 7, 9], size=(3, 5))  # Generates a 3x5 array with random integers from the list [3, 5, 7, 9]
print(random_2d_array)
These are just a few examples of the many functions available in the numpy.random module for generating random numbers.
  You can use these functions to create random samples, simulate random processes, and more. For additional information and examples, 
  you can refer to the official NumPy documentation.























































































...
