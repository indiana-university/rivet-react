Use the timeline component to show a chronological series of events and highlight milestones.

View the [Rivet documentation for Timeline](https://rivet.iu.edu/components/timeline/).

### Timeline Examples

<!-- prettier-ignore-start -->
```jsx
<Timeline>
  <TimelineItem header="Organize your info" date="Spring 2022">
    <p>Before you start, you may want to make a list of all your senior year classes and high school extracurricular activities, so you’re ready to enter those in your application. Also consider whether you want to include your SAT and/or ACT test scores in your application.</p>
  </TimelineItem>
  <TimelineItem header="Pick your campus" date="Summer 2022">
    <p>You can apply to any IU campus using the Apply IU app, which will ask you to select which IU campus(es) you want to send your application to. You can choose as many as you like, and you’ll only pay one application fee based on where you apply.</p>
  </TimelineItem>
</Timeline>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
<Timeline align="right">
  <TimelineItem header="Organize your info" date="Spring 2022">
    <p>Before you start, you may want to make a list of all your senior year classes and high school extracurricular activities, so you’re ready to enter those in your application. Also consider whether you want to include your SAT and/or ACT test scores in your application.</p>
  </TimelineItem>
  <TimelineItem header="Pick your campus" date="Summer 2022">
    <p>You can apply to any IU campus using the Apply IU app, which will ask you to select which IU campus(es) you want to send your application to. You can choose as many as you like, and you’ll only pay one application fee based on where you apply.</p>
  </TimelineItem>
</Timeline>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
<Timeline align="center">
  <TimelineItem header="Organize your info" date="Spring 2022">
    <p>Before you start, you may want to make a list of all your senior year classes and high school extracurricular activities, so you’re ready to enter those in your application. Also consider whether you want to include your SAT and/or ACT test scores in your application.</p>
  </TimelineItem>
  <TimelineItem header="Pick your campus" date="Summer 2022" align="right">
    <p>You can apply to any IU campus using the Apply IU app, which will ask you to select which IU campus(es) you want to send your application to. You can choose as many as you like, and you’ll only pay one application fee based on where you apply.</p>
  </TimelineItem>
</Timeline>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
<Timeline>
  <TimelineItem header="Organize your info" date="Spring 2022" dateStyleAsLabel={true}>
    <p>Before you start, you may want to make a list of all your senior year classes and high school extracurricular activities, so you’re ready to enter those in your application. Also consider whether you want to include your SAT and/or ACT test scores in your application.</p>
  </TimelineItem>
  <TimelineItem header="Pick your campus" date="Summer 2022" dateStyleAsLabel={true}>
    <p>You can apply to any IU campus using the Apply IU app, which will ask you to select which IU campus(es) you want to send your application to. You can choose as many as you like, and you’ll only pay one application fee based on where you apply.</p>
  </TimelineItem>
</Timeline>
```
<!-- prettier-ignore-end -->
