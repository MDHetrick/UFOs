# UFOs
## Project Overview
The purpose of this analysis is to create a webpage with filters to evaluate UFO sighting data.

## Results
When the website is loaded, the table will contain the entirety of the data. On the left side of the website is the section to filter the search. The data can be filtered by date, city, state, country, and shape.

![image](https://github.com/MDHetrick/UFOs/blob/main/resources/ufo_website.png)

Once a filter term is entered, the table will only show the appropriate data. 

![image](https://github.com/MDHetrick/UFOs/blob/main/resources/date_filter.png)

Multiple search parameters can be added, and the resulting table will show only data that is filtered by all parameters.

![image](https://github.com/MDHetrick/UFOs/blob/main/resources/date_state_filter.png)

To remove a filter, delete the text in the box.

![image](https://github.com/MDHetrick/UFOs/blob/main/resources/state_filter.png)

To change a filter, replace the text in the box.

![image](https://github.com/MDHetrick/UFOs/blob/main/resources/state_filter2.png)

## Summary
**Design Drawbacks**

One drawback of this design is that it is case sensitive, so the results will not populate if a user capitalizes differently.

**Recommendations for Development**
- Partial text search: it would be beneficial to add a partial search match. 
- Multiple search terms: it would also be useful to be able to have multiple search terms per parameter.
