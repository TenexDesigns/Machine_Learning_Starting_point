import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

fifa = pd.read_csv('fifa.csv')
fifa.head(5)
bins= [40,50,60,70,80,90,100]
plt.figure(figsize=(8,5))
plt.hist(fifa.Overall,bins=bins,color='Green')
plt.xticks(bins)
plt.ylabel(' Number of Players')
plt.xlabel(' Skill level')
plt.title('Distribution of players skills lebvel in FIFA 2018')
plt.show()


















MORE EXPLANANTION
******************************************************************************************************************************************



Creating histograms in Matplotlib can be done using the plt.hist() function. You can customize various aspects of the histogram, such as the number of bins, color, and transparency. Additionally, you can change the title font and other text properties.

Example: Creating a histogram with custom title font

import numpy as np
import matplotlib.pyplot as plt

# Generate random data
data = np.random.randn(1000)

# Create a histogram
plt.figure(figsize=[10, 8])
n, bins, patches = plt.hist(data, bins=30, color='#0504aa', alpha=0.7, rwidth=0.85)
plt.grid(axis='y', alpha=0.75)
plt.xlabel('Value', fontsize=15)
plt.ylabel('Frequency', fontsize=15)
plt.xticks(fontsize=15)
plt.yticks(fontsize=15)

# Customize the title font
font_title = {'fontname': 'Comic Sans MS', 'fontsize': 20}
plt.title('Histogram Example', **font_title)

plt.show()
In this example, the font_title dictionary is used to change the font and size of the title. You can customize other text properties as well, such as the axes labels, tick labels, and so on.

Some useful topics about histograms in Matplotlib include:

Changing the number of bins: You can change the number of bins by setting the bins parameter in the plt.hist() function. For example, bins=20 will create 20 bins in the histogram. Alternatively, you can use bins='auto' to let Matplotlib automatically determine the optimal number of bins.
Customizing the appearance: You can customize the appearance of the histogram by modifying parameters such as color (bar color), alpha (transparency), and rwidth (relative width of the bars).
Adding labels and annotations: You can add labels and annotations to the histogram using functions like plt.xlabel(), plt.ylabel(), and plt.annotate().
Comparing multiple histograms: You can compare multiple histograms by plotting them on the same axes using multiple calls to plt.hist() with different data before calling plt.show().
For more information on creating and customizing histograms in Matplotlib, you can refer to the official documentation and this DataCamp tutorial.









MORE EXPLANANTION
******************************************************************************************************************************************


  Creating histograms in Matplotlib involves using the plt.hist() function, which takes in the data and various optional parameters to customize the histogram appearance. Here's an overview of how to create histograms in Matplotlib and customize them:

Importing Matplotlib:
Start by importing the necessary libraries:

python
Copy code
import matplotlib.pyplot as plt
import numpy as np
Generating Data:
Generate or import the data you want to plot as a histogram. You can use NumPy to generate random data for demonstration purposes:

python
Copy code
data = np.random.randn(1000)  # Example data
Creating the Histogram:
Use plt.hist() to create the histogram plot. Pass the data as the first argument, and you can customize the appearance by providing additional parameters:

python
Copy code
plt.hist(data, bins=30, edgecolor='black', color='blue', alpha=0.5)
Here, bins specifies the number of bins or the bin edges of the histogram. edgecolor sets the color of the bin edges, while color determines the color of the bars. alpha controls the transparency of the bars.

Customizing the Plot:
You can further customize the histogram using various methods and parameters:

Title and Axis Labels:
Use plt.title() to set the title of the histogram and plt.xlabel() and plt.ylabel() to set the labels for the x-axis and y-axis, respectively. For example:

python
Copy code
plt.title('Histogram')
plt.xlabel('Values')
plt.ylabel('Frequency')
Font Size and Style:
To change the font size and style of the title, x-axis label, or y-axis label, you can use the fontsize and fontweight parameters. For example:

python
Copy code
plt.title('Histogram', fontsize=16, fontweight='bold')
plt.xlabel('Values', fontsize=12)
plt.ylabel('Frequency', fontsize=12)
Number of Bins:
You can adjust the number of bins in the histogram by changing the bins parameter. Experiment with different values to find an appropriate number of bins for your data distribution.

Plot Range:
Use plt.xlim() and plt.ylim() to set the range of the x-axis and y-axis, respectively. For example:

python
Copy code
plt.xlim([-5, 5])  # Sets x-axis range from -5 to 5
plt.ylim([0, 100])  # Sets y-axis range from 0 to 100
Grid Lines:
You can enable grid lines on the plot using plt.grid(True). This can be helpful for better visual interpretation.

Displaying the Plot:
Finally, use plt.show() to display the histogram plot:

python
Copy code
plt.show()
This will open a separate window showing the histogram plot.

Additional Topics and Tips:

Matplotlib offers various parameters to control the appearance of histograms, such as color, transparency, bar width, and more. Refer to the Matplotlib documentation for a comprehensive list of available parameters.
You can normalize the histogram to display relative frequencies using the density parameter in plt.hist().
Adding a legend to the histogram can be done using plt.legend(), typically when comparing multiple datasets.
Matplotlib also supports 2D histograms using plt.hist2d() for visualizing the joint distribution of two variables.
To save the histogram plot to a file (e.g., PNG, PDF), you can use plt.savefig().
Remember to experiment with different parameters and customization options to create histograms that effectively visualize your data distribution. The Matplotlib documentation provides detailed explanations and examples for histograms and other plotting functionalities.




























