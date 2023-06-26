E.G

labels = ['A','B','C']
values = [1,4,2]
bar =plt.bar(labels,values)

bar[0].set_hatch('/')
bar[1].set_hatch('*')
bar[2].set_hatch('o')


plt.figure(figsize=(6,4))
plt.show













MORE EXAMPLES 
**************************************************************************************************



Matplotlib supports various hatch patterns that can be added to polygons, including bar plots, fill_between, contourf, and children of Polygon. Hatches are currently supported in the PS, PDF, SVG, OSX, and Agg backends. The WX and Cairo backends do not currently support hatching matplotlib.org.

Here is a list of supported hatch patterns:

/: diagonal lines from bottom-left to top-right
\\: diagonal lines from top-left to bottom-right
|: vertical lines
-: horizontal lines
+: crosshatch (horizontal and vertical lines)
x: diagonal crosshatch
o: small circles
O: large circles
.: dots
*: stars
You can also combine multiple hatch patterns by providing a string of multiple characters, like 'xx' for a denser diagonal crosshatch or '//\\\\' for a grid pattern.

To use hatches in a bar plot, set the hatch parameter in the bar() function. Here's an example:

import matplotlib.pyplot as plt

langs = ['C', 'C++', 'Java', 'Python', 'PHP']
students = [23, 17, 35, 29, 12]

fig, ax = plt.subplots()
ax.bar(langs, students, edgecolor='black', hatch='//')

plt.show()
This example creates a bar plot with diagonal lines from bottom-left to top-right as the hatch pattern.

For more hatch pattern examples, refer to the Hatch style reference in the Matplotlib documentation matplotlib.org


















MORE EXAMPLES 
**************************************************************************************************



Hatching is a pattern of parallel lines, symbols, or textures used to fill the area of bars or patches in Matplotlib. It is primarily used to add additional visual distinction to different categories or groups in bar plots or patches.

Matplotlib provides various hatching patterns that you can use to customize the appearance of bars or patches. Some commonly supported hatching patterns are:

'/': Diagonal lines from the top left to the bottom right.
'\': Diagonal lines from the top right to the bottom left.
'-': Horizontal lines.
'|': Vertical lines.
'+': Diagonal lines intersecting at 45 degrees.
'x': Diagonal lines intersecting at -45 degrees.
'o': Circles.
'O': Large circles.
'.': Dots.
'\\': Backslashes.
Here's an example of using hatching patterns with vertical bars using plt.bar():

python
Copy code
import matplotlib.pyplot as plt

# Data for the bars
categories = ['Category 1', 'Category 2', 'Category 3']
values = [25, 40, 30]

# Create a vertical bar plot with hatching
plt.bar(categories, values, hatch='/')

# Customize the plot
plt.xlabel('Categories')
plt.ylabel('Values')
plt.title('Vertical Bar Plot with Hatching')

# Display the plot
plt.show()
In this example, we use the hatch parameter of the plt.bar() function to specify the hatching pattern. We set hatch='/' to use diagonal lines from the top left to the bottom right as the hatching pattern.

You can experiment with different hatching patterns by changing the hatch parameter to '\', '-', '|', '+', 'x', or any other supported pattern. Additionally, you can combine hatching patterns with other customization options such as color, edge color, and more to create visually appealing and informative bar plots.

Note that hatching patterns are not limited to bar plots and can also be applied to other types of patches in Matplotlib, such as rectangles or polygons





MORE EXAMPLES 
**************************************************************************************************






















