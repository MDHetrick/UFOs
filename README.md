# UFOs
## Project Overview
The purpose of this analysis is to create a webpage with filters to evaluate UFO sighting data.

## Results
When the website is loaded, the table will contain the entirety of the data. On the left side of the website is the section to filter the search. The data can be filtered by date, city, state, country, and shape.

![image](https://github.com/MDHetrick/UFOs/blob/main/resources/website-unfiltered.png)

Once a filter term is entered, the table will only show the appropriate data. 

![image](https://github.com/MDHetrick/UFOs/blob/main/resources/filterA.png)

Multiple search parameters can be added, and the resulting table will show only data that is filtered by all parameters.

![image](https://github.com/MDHetrick/UFOs/blob/main/resources/filterAB.png)

![image](https://github.com/MDHetrick/UFOs/blob/main/resources/filterABC.png)

If there are no matches for the search parameters, just the header row will show with no table data below.

![image](https://github.com/MDHetrick/UFOs/blob/main/resources/filter_noMatches.png)

To change a filter, replace the text in the box.

![image](https://github.com/MDHetrick/UFOs/blob/main/resources/filterABC2.png)

To remove a filter, delete the text in the box.
The image below shows the website with the state filter deleted, and the date and shape filters remaining.

![image](https://github.com/MDHetrick/UFOs/blob/main/resources/filterAC.png)

The image below shows the website with the date filter deleted, and the staate and shape filters remaining.

![image](https://github.com/MDHetrick/UFOs/blob/main/resources/filterBC.png)

## Summary
**Design Drawbacks**

One drawback of this design is that it is case sensitive, so the results will not populate if a user capitalizes differently. Another drawback is if the user does not know the exact search terms, they may not find the desired information.

**Recommendations for Development**
- Partial text search: a partial search match would be useful if the user is not sure of the entirety of the search terms or the full spelling.
- Addition of dropdowns: dropdowns would be a beneficial addition, so the user would know what the options are. This would especially be useful for the "Shape" field where the shape options are not defined.
- Multiple search terms: it would also be useful to be able to have multiple search terms per parameter, for example 2 states and/or 2 different shapes.
