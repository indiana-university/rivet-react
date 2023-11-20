Header.Avatar can optionally be included in [Header.Navigation](#/Navigation?id=headernavigation) to show the login details (username and short name) of the user, along with a logout link.

Standard Avatar:
<!-- prettier-ignore-start -->
```jsx
const avatar = <Header.Avatar username={"johndoe"} shortName={"jd"} />
const navigation = <Header.Navigation avatar={avatar} />;
<Header title="Application Title" navigation={navigation}/>
```
<!-- prettier-ignore-end -->

Avatar with logout link:
<!-- prettier-ignore-start -->
```jsx
const avatar = <Header.Avatar username={"johndoe"} shortName={"jd"} logoutURL={"/logout"} />
const navigation = <Header.Navigation avatar={avatar} />;
<Header title="Application Title" navigation={navigation}/>
```
<!-- prettier-ignore-end -->

Avatar with logout link with onClick:
<!-- prettier-ignore-start -->
```jsx
const avatar = <Header.Avatar username={"johndoe"} shortName={"jd"} logoutURL={"/logout"} logoutClick={() => console.log("logout")}/>
const navigation = <Header.Navigation avatar={avatar} />;
<Header title="Application Title" navigation={navigation}/>
```
<!-- prettier-ignore-end -->

Avatar with logout button:
<!-- prettier-ignore-start -->
```jsx
const avatar = <Header.Avatar username={"johndoe"} shortName={"jd"} logoutClick={() => console.log("logout")}/>
const navigation = <Header.Navigation avatar={avatar} />;
<Header title="Application Title" navigation={navigation}/>
```
<!-- prettier-ignore-end -->