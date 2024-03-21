Use the step indicator component to show the user’s position in and progress through a multi-step process.

Step indicators are often used on application forms or workflow screens.

View the [Rivet documentation for Step indicator](https://rivet.uits.iu.edu/components/step-indicator/).

### Step Indicator Examples

<!-- prettier-ignore-start -->
```jsx
<StepIndicator>
    <Step indicator="1" label="Step 1" url="#" />
    <Step indicator="2" label="Click Action" url="#" onClick={() =>  console.log('Step 2 Clicked') }/>
    <Step indicator="3" label="Step 3" url="#" />
</StepIndicator>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
<StepIndicator variant="vertical">
    <Step indicator="1" label="Step 1" url="#" />
    <Step indicator="2" label="Step 2" url="#" />
    <Step indicator="3" label="Step 3" url="#" />
</StepIndicator>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
<StepIndicator>
    <Step indicator="1" label="Normal" />
    <Step current indicator="2" label="Current" url="#" />
    <Step indicator="3" label="Success" url="#" variant="success"/>
    <Step indicator="4" label="Warning" url="#" variant="warning"/>
    <Step indicator="5" label="Danger" url="#" variant="danger"/>
</StepIndicator>
```
<!-- prettier-ignore-end -->
