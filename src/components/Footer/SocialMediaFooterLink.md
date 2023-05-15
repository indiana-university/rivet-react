Display of components is passed in as children. If using icons for display its recommended to use SVG elements

### Social Media Footer Link

<!-- prettier-ignore-start -->
```jsx
<ul className="rvt-footer-social__list">
    <SocialMediaFooterLink label="Example Link 1" url="#">
        <Icon fill="none" height="40" name="facebook" viewBox="0 0 40 40" width="40" />
    </SocialMediaFooterLink>
    <SocialMediaFooterLink className="rvt-flex rvt-items-center" label="Example Link 2" url="#">
        <span className="rvt-color-crimson">Instagram</span>
    </SocialMediaFooterLink>
    <SocialMediaFooterLink label="Example Link 3" url="#">
        <Icon fill="none" height="40" name="twitter" viewBox="0 0 40 40" width="40" />
    </SocialMediaFooterLink>
</ul>
```
<!-- prettier-ignore-end -->

### Social Media Footer Link with missing url

<!-- prettier-ignore-start -->
```jsx
<ul className="rvt-footer-social__list">
    <SocialMediaFooterLink label="Example Link 1" url="#">
        <Icon fill="none" height="40" name="facebook" viewBox="0 0 40 40" width="40" />
    </SocialMediaFooterLink>
    <SocialMediaFooterLink label="Example Link 2 Missing Url">
         <span className="rvt-color-crimson">Instagram</span>
    </SocialMediaFooterLink>
    <SocialMediaFooterLink label="Example Link 3" url="#">
        <Icon fill="none" height="40" name="twitter" viewBox="0 0 40 40" width="40" />
    </SocialMediaFooterLink>
</ul>
```
<!-- prettier-ignore-end -->
