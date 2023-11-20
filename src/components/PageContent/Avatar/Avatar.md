Use the avatar component to display a person’s picture or initials with a rounded border.

Avatars are often used on people directories and profile pages. They also appear alongside quotations and in web application headers to show the identity of the logged-in user.

View the [Rivet documentation for Avatar](https://rivet.iu.edu/components/avatar/).

### Image Avatar Example

<!-- prettier-ignore-start -->
```jsx
<Avatar size="xs" src="https://rivet.iu.edu/img/placeholder/avatar-1.webp" />
<Avatar size={["xs", "lg-lg-up"]} src="https://rivet.iu.edu/img/placeholder/avatar-1.webp" />
<Avatar src="https://rivet.iu.edu/img/placeholder/avatar-1.webp" />
<Avatar size="lg-lg-up" src="https://rivet.iu.edu/img/placeholder/avatar-1.webp" />
<Avatar size="xl" src="https://rivet.iu.edu/img/placeholder/avatar-1.webp" />
```
<!-- prettier-ignore-end -->

### Initial Avatar Example

<!-- prettier-ignore-start -->
```jsx
<Avatar size="xs" initials="AB" />
<Avatar size={["xs", "lg-lg-up"]} initials="AB" />
<Avatar initials="AB" />
<Avatar size="lg-lg-up" initials="AB" />
<Avatar size="xl" initials="AB" />
```
<!-- prettier-ignore-end -->
