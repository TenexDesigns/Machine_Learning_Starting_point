WE WILL BE WORKING WITH THIS DATA  ---> https://github.com/KeithGalli/matplotlib_tutorial/blob/master/gas_prices.csv




1.MAP GRAPHS MANUAL FOR A SPECIFIC COUNTRY


import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

gas = pd.read_csv('gases.csv')

plt.figure(figsize=(8,5))
plt.title('Gas Prices Over Time (in USD)')

plt.plot(gas.Year,gas.USA,'b.-',label= 'USA', )      ----------------------> Map For A Specifi Country
 plt.plot(gas.Year,gas.Canada,'r.-',label='Canada')
 plt.plot(gas.Year,gas['South Korea'],'g.-', label='South Korea')
plt.plot(gas.Year,gas['Australia'],'y.-', label='Australia')






plt.xticks(gas.Year[::3])
plt.xlabel('Year')
plt.ylabel('US Dollar')
plt.legend()
plt.legend(loc='upper left')

plt.show()






2. MAP FOR ALL COUNTRUES




import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

gas = pd.read_csv('gases.csv')

plt.figure(figsize=(8,5))
plt.title('Gas Prices Over Time (in USD)')

for country in gas:                            --------------> MAP FOR ALL COUNTRIES
    if country != 'Year':
      plt.plot(gas.Year,gas[country],marker='.')





plt.xticks(gas.Year[::3])
plt.xlabel('Year')
plt.ylabel('US Dollar')
plt.legend()
plt.legend(loc='upper left')

plt.show()





3.MAP FOR THE SEPECIEFIED COUNTRIES



import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

gas = pd.read_csv('gases.csv')

plt.figure(figsize=(8,5))
plt.title('Gas Prices Over Time (in USD)')

specified_Country = ['Australia','USA','Canada']  -------------> THIS ARE THE SPECIED COUNTRIES, AND WE ONLY SHOW THSES OUT OF ALL THE COUNTRIES
for country in gas:
    if country in specified_Country:
      plt.plot(gas.Year,gas[country],marker='.')





plt.xticks(gas.Year[::3])
plt.xlabel('Year')
plt.ylabel('US Dollar')
plt.legend()
plt.legend(loc='upper left')

plt.show()








MORE EXPLANANTION
****************************************************************************************************************************************

  In the provided code, there are two different approaches to display the graphs for countries. Let me explain both approaches:

1. Display the graph for all countries:

In this approach, the code reads the 'gases.csv' file and iterates through all the columns (countries) except the 'Year' column. It then plots a line for each country using the data available in the corresponding column. The marker='.' argument is used to add markers to the data points on the lines.

for country in gas:
    if country != 'Year':
        plt.plot(gas.Year, gas[country], marker='.')
2. Display the graph for specified countries:

In this approach, the code reads the 'gases.csv' file but only plots the lines for specified countries in the specified_Country list. It iterates through all the columns (countries) and checks if the country is in the specified_Country list. If it is, the code plots a line for that country using the data available in the corresponding column. The marker='.' argument is used to add markers to the data points on the lines.

specified_Country = ['Australia', 'USA', 'Canada']
for country in gas:
    if country in specified_Country:
        plt.plot(gas.Year, gas[country], marker='.')
Both approaches use the same basic structure to display the graphs, but the difference lies in the condition used to decide which countries to plot. The first approach plots all countries, while the second approach plots only the specified countries.






MORE EXPLANANTION
****************************************************************************************************************************************


Approach 1: Displaying Graph for All Countries
In the first approach, the code loops through each column in the gas DataFrame, excluding the 'Year' column. For each country, it plots the gas prices over time using the plt.plot() function. The x-axis represents the 'Year' column, and the y-axis represents the gas prices for each country. By setting the marker parameter to '.', it displays data points as dots.

Approach 2: Map for All Countries
In this approach, the code plots gas prices over time for all countries present in the gas DataFrame. Similar to the first approach, it loops through each column, excluding the 'Year' column. For each country, it plots the gas prices over time using the plt.plot() function. The resulting graph shows the gas prices for all countries on the same plot.

Approach 3: Map for Specified Countries
In this approach, the code plots gas prices over time only for the specified countries. The specified countries are stored in the specified_Country list. The code loops through each column in the gas DataFrame, and if the country is in the specified_Country list, it plots the gas prices over time using the plt.plot() function. This approach allows you to selectively display gas price trends for specific countries.

Common Steps in All Approaches:
After plotting the data, the code sets the x-axis ticks using plt.xticks() to show the years at regular intervals. It adds labels to the x-axis and y-axis using plt.xlabel() and plt.ylabel() functions, respectively. The plot title is set using plt.title(). The plt.legend() function adds a legend to the plot, and the loc='upper left' parameter specifies the location of the legend. Finally, plt.show() is called to display the graph.

Note: The code assumes that the 'gases.csv' file contains the necessary data, and the gas DataFrame is correctly formatted with columns for years and gas prices for different countries.


































  




