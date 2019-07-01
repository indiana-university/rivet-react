Use the step indicator component to help users keep track of their progress in a multi-step process, such as an application form.

View the [Rivet documentation for Step Indicator](https://rivet.iu.edu/components/page-content/step-indicator/)

### Basic step indicator

```jsx
<StepIndicator>
  <Step href="#" label="Personal Information" indicator="1" screenReaderIndicator="Step"/>
  <Step label="Records & transcripts" indicator="2" screenReaderIndicator="Step" current />
  <Step label="Confirmation" indicator="3" screenReaderIndicator="Step" variant="success" />
</StepIndicator>
```

### Vertical Step Indicator

```jsx
<StepIndicator vertical>
  <Step href="#" label="Personal Information" indicator="1" screenReaderIndicator="Step"/>
  <Step label="Records & transcripts" indicator="2" screenReaderIndicator="Step" current />
  <Step label="Confirmation" indicator="3" screenReaderIndicator="Step" variant="success" />
</StepIndicator>

```
