import matplotlib.pyplot as plt
import numpy as np
import pandas as pd


x=[0,1,2,3]
y = [0,2,4,6]


plt.plot(x,y, label='2x', color='red',linewidth=2, marker='.', markersize=10,linestyle ='--', markeredgecolor='green')
plt.title("Our First matplotlib tutorial",fontdict={'fontname':'Comic Sans MS', 'fontsize':30})
plt.xlabel('X- Axix by George')
plt.ylabel('Y- Axix by George')


plt.legend()
plt.show()




The code Explained
**********************************************************************************


Sure! Let's go through the parameters and methods used in the provided code snippet:

Parameters in plt.plot():

x: The x-coordinates of the data points.
y: The y-coordinates of the data points.
label: The label for the plot, used for creating a legend.
color: The color of the plot line.
linewidth: The width of the plot line.
marker: The marker style for data points.
markersize: The size of the markers.
linestyle: The style of the plot line.
markeredgecolor: The color of the marker edges.
Methods used:

plt.title(): Sets the title of the plot. The fontdict parameter allows you to customize the font name and size.
plt.xlabel(): Sets the label for the x-axis.
plt.ylabel(): Sets the label for the y-axis.
plt.legend(): Adds a legend to the plot, displaying the label specified in plt.plot().
plt.show(): Displays the plot.
Here's an explanation of the methods in more detail:

plt.title(): Sets the title of the plot. You can provide a string for the title, and the fontdict parameter allows you to customize the font properties like font name and size.

plt.xlabel(): Sets the label for the x-axis. You can provide a string as the label.

plt.ylabel(): Sets the label for the y-axis. You can provide a string as the label.

plt.legend(): Adds a legend to the plot. The legend displays the labels specified in the plt.plot() function. You can customize the legend's position, style, and other properties.

plt.show(): Displays the plot on the screen. This function is required to show the plot once you have finished customizing it.

These are some of the commonly used methods in matplotlib.pyplot. There are many other methods available to customize plots, such as setting axis limits, adding gridlines, changing font styles, adding text annotations, and more. You can refer to the Matplotlib documentation for a comprehensive list of methods and their parameters.










