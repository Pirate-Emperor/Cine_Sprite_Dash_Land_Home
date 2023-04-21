import numpy as np  
import pandas as pd
array = np.random.randint(10, size=(50))
array = [900+((x*1000)/10) for x in array]  
print(array)
DF = pd.DataFrame([[i,array[i]] for i in range(0,len(array))], columns=['name', 'Total'])
DF.to_csv("./db/app/data1.csv")