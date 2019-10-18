# d3drilldown
Create multi-level interactive drill-down graphs with simple configuration.


# drill down chart ideas:

1. Use data frame, which is very natural and easy to prepare in R
2. df columns should follow hierarchy, e.g. Continent, country, state, city ...
3. Drilldown using only one numeric value
4. Drill down can be simplified into: filter until the level, and use that level and numeric value to plot
5. plot types can be flexible, use r2d3 to ensure customization, built it outside of shiny
6. supported chart types: packed bubble, bar chart, pie chart.
7. support different chart in different levels
8. onlick to send values
9. support uniform value formatting.
10. Available functions:
    * d3_drilldown_bar
    * d3_drilldown_bubble
    * d3_drilldown_pie
    * d3_drilldown_donut
    * d3_drilldown_plot pass: bar,bubble,pie,donut as function to each level # extra config to each level
11. support go back to previous levels.
12. helper functions
    * d3_simple_bar 
    * d3_simple_bubble
    * d3_simple_pie
    * d3_simple_donut
