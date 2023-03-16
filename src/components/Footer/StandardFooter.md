A footer is a section at the bottom of each page that contains contact, privacy, accessibility, and copyright information. Footers also often include links to useful resources and social media buttons.

View the [Rivet documentation for the Footer](https://rivet.iu.edu/components/footer/).

### Footer

<!-- prettier-ignore-start -->
```jsx
<StandardFooter privacyUrl='#'  size='xl'/>
```
<!-- prettier-ignore-end -->

### Footer light variant

<!-- prettier-ignore-start -->
```jsx
<StandardFooter privacyUrl='#'  size='xl' variant="light"/>
```
<!-- prettier-ignore-end -->

### Footer with Additional Resources

<!-- prettier-ignore-start -->
```jsx
<StandardFooter privacyUrl='#'>
    <ResourceFooter label="Resource Example">
        <div className="rvt-row">
            <ResourceFooterTextBlock className="rvt-cols-6"label="Example Text">
                This is a block<br />
                of<br />
                Example Text
            </ResourceFooterTextBlock>
            <ResourceFooterLinkBlock className="rvt-cols" label="Example Links 2">
                <a href="#">Example Link 1</a>
                <a href="#">Example Link 2</a>
                <a href="#">Example Link 3</a>
            </ResourceFooterLinkBlock>
        </div>
    </ResourceFooter>
</StandardFooter>
```
<!-- prettier-ignore-end -->

### Footer with Social Media Links

<!-- prettier-ignore-start -->
```jsx
<StandardFooter privacyUrl='#'>
    <SocialMediaFooter>
        <SocialMediaFooterLink label="Example Link 1" url="#">
           <Icon fill="none" height="40" name="facebook" viewBox="0 0 40 40" width="40" />
        </SocialMediaFooterLink>
        <SocialMediaFooterLink label="Example Link 2" url="#">
            <Icon fill="none" height="40" name="linkedin" viewBox="0 0 40 40" width="40" />
        </SocialMediaFooterLink>
        <SocialMediaFooterLink label="Example Link 3" url="#">
            <Icon fill="none" height="40" name="twitter" viewBox="0 0 40 40" width="40" />
        </SocialMediaFooterLink>
    </SocialMediaFooter>
</StandardFooter>
```
<!-- prettier-ignore-end -->

### Footer with Additional Resources and Social Media Links

<!-- prettier-ignore-start -->
```jsx
<StandardFooter privacyUrl='#'>
    <SocialMediaFooter>
        <SocialMediaFooterLink label="Example Link 1" url="#">
            <Icon fill="none" height="40" name="facebook" viewBox="0 0 40 40" width="40" />
        </SocialMediaFooterLink>
        <SocialMediaFooterLink label="Example Link 2" url="#">
            <Icon fill="none" height="40" name="linkedin" viewBox="0 0 40 40" width="40" />
        </SocialMediaFooterLink>
        <SocialMediaFooterLink label="Example Link 3" url="#">
            <Icon fill="none" height="40" name="twitter" viewBox="0 0 40 40" width="40" />
        </SocialMediaFooterLink>
    </SocialMediaFooter>
    <ResourceFooter label="Resource Example">
        <div className="rvt-row">
            <ResourceFooterTextBlock className="rvt-cols-6"label="Example Text">
                This is a block<br />
                of<br />
                Example Text
            </ResourceFooterTextBlock>
            <ResourceFooterLinkBlock className="rvt-cols" label="Example Links 2">
                <a href="#">Example Link 1</a>
                <a href="#">Example Link 2</a>
                <a href="#">Example Link 3</a>
            </ResourceFooterLinkBlock>
        </div>
    </ResourceFooter>
</StandardFooter>
```
<!-- prettier-ignore-end -->
