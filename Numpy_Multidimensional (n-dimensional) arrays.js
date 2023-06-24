Multidimensional (n-dimensional) arrays are a key feature of NumPy. An n-dimensional array, or ndarray, is a homogeneous array of fixed-size items, where each element has the same data type. The ndarray can have any number of dimensions, and the shape of the array determines the size of each dimension (numpy.org, numpy.org).

You can create an ndarray using the numpy.array() function by providing a nested list as an argument:

import numpy as np

# Creating a 2D array
arr_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(arr_2d)

# Creating a 3D array
arr_3d = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
print(arr_3d)
An ndarray has several useful attributes, such as:

ndim: the number of dimensions of the array
shape: a tuple representing the size of each dimension
size: the total number of elements in the array
dtype: the data type of the elements in the array
itemsize: the size (in bytes) of each element in the array
nbytes: the total size (in bytes) of the array (jakevdp.github.io)
For example:

arr = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])

print("ndim:", arr.ndim)
print("shape:", arr.shape)
print("size:", arr.size)
print("dtype:", arr.dtype)
print("itemsize:", arr.itemsize, "bytes")
print("nbytes:", arr.nbytes, "bytes")
You can perform various operations on ndarrays, such as indexing, slicing, and mathematical operations, using NumPy's built-in functions (geeksforgeeks.org, pythonlikeyoumeanit.com).









More Explanantion
*******************************************************************************

In NumPy, multidimensional arrays, often referred to as ndarrays, allow you to work with data of higher dimensions, such as matrices or tensors. NumPy ndarrays can have any number of dimensions and provide efficient storage and manipulation of multi-dimensional data. Here's an example of creating and working with multidimensional arrays in NumPy:

python
Copy code
import numpy as np

# Create a 2D array
arr_2d = np.array([[1, 2, 3], [4, 5, 6]])

print("2D Array:")
print(arr_2d)
print("Shape:", arr_2d.shape)
print("Number of dimensions:", arr_2d.ndim)

# Create a 3D array
arr_3d = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])

print("\n3D Array:")
print(arr_3d)
print("Shape:", arr_3d.shape)
print("Number of dimensions:", arr_3d.ndim)
Output:

lua
Copy code
2D Array:
[[1 2 3]
 [4 5 6]]
Shape: (2, 3)
Number of dimensions: 2

3D Array:
[[[1 2]
  [3 4]]

 [[5 6]
  [7 8]]]
Shape: (2, 2, 2)
Number of dimensions: 3
In the example above, we create a 2D array arr_2d with two rows and three columns, and a 3D array arr_3d with two "slices," each consisting of a 2x2 matrix. We can access the shape of an array using the shape attribute and determine the number of dimensions using the ndim attribute.

NumPy provides a variety of functions and methods for working with ndarrays. Here are a few common operations:

Indexing and slicing: You can access individual elements or subsets of elements in a multidimensional array using indexing and slicing, similar to 1D arrays.
Reshaping: You can reshape an ndarray into a different shape using the reshape() method.
Transposing: You can transpose the dimensions of an array using the transpose() method or the .T attribute.
Mathematical operations: You can perform element-wise arithmetic operations, such as addition, subtraction, multiplication, and division, on ndarrays.
Reduction operations: You can apply reduction operations, such as sum, mean, maximum, minimum, along specific axes or the entire array.
These are just a few examples of the operations you can perform on multidimensional arrays in NumPy. NumPy's ndarray provides a powerful and efficient framework for handling and manipulating multi-dimensional data, making it widely used in scientific computing, data analysis, and machine learning.
















