Use the calendar tile component to highlight an important date.

View the [Rivet documentation for Calendar tile](https://rivet.uits.iu.edu/components/calendar-tile/).

### Calendar Tile Examples

<!-- prettier-ignore-start -->
```jsx
<div className="rvt-container-sm">
    <CalendarTile day="1" month="1"  margin={{right: "sm"}} year="2023"/>
    <CalendarTile abbreviate day="2"  margin={{right: "sm"}} month={1} />
    <CalendarTile day="3" month="May (Graduation)" year="2023" textAlign='center' width="md">
        <img src="https://rivet.iu.edu/img/placeholder/hero-1.webp" alt="Day image" />
    </CalendarTile>
</div>
```
<!-- prettier-ignore-end -->
